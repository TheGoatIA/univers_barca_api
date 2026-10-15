// Utilitaires communs aux scénarios k6 (montée en charge de l'API Univers Barça).
import http from 'k6/http';
import { check, fail, sleep } from 'k6';
import { Counter, Rate, Trend } from 'k6/metrics';

export const BASE_URL = (__ENV.BASE_URL || 'http://localhost:5000').replace(/\/$/, '');
export const API = `${BASE_URL}/api/v1`;
export const USERS = Number(__ENV.USERS || 20);
const PASSWORD = 'LoadTest#2026Ok';
const JSON_HEADERS = { 'Content-Type': 'application/json' };

// Métriques métier : permettent de suivre chaque parcours séparément dans les rapports.
export const loginDuration = new Trend('ub_login_duration', true);
export const registerDuration = new Trend('ub_register_duration', true);
export const browseDuration = new Trend('ub_browse_duration', true);
export const authedDuration = new Trend('ub_authed_duration', true);
export const businessErrors = new Rate('ub_business_errors');
export const requestsTotal = new Counter('ub_requests_total');

/** Seuils par défaut. Surchargeables : P95_MS, P99_MS, ERROR_RATE (staging : valeurs plus strictes). */
export const thresholds = () => ({
  http_req_failed: [`rate<${__ENV.ERROR_RATE || 0.01}`],
  http_req_duration: [`p(95)<${__ENV.P95_MS || 1500}`, `p(99)<${__ENV.P99_MS || 3000}`],
  ub_browse_duration: [`p(95)<${__ENV.P95_BROWSE_MS || 800}`],
  ub_business_errors: ['rate<0.01'],
  checks: ['rate>0.99'],
});

const post = (path, body, params = {}) =>
  http.post(`${API}${path}`, JSON.stringify(body), { headers: JSON_HEADERS, ...params });

/** setup() : crée USERS comptes de test (exécuté une fois). Retourne leurs identifiants. */
export function createUsers(prefix = 'load') {
  const run = Date.now().toString(36);
  const users = [];
  for (let i = 0; i < USERS; i++) {
    const email = `${prefix}-${run}-${i}@loadtest.univers-barca.app`;
    const res = post('/auth/register', {
      email,
      password: PASSWORD,
      displayName: `Charge${i}x`,
      consents: { terms: true, privacy: true },
    });
    registerDuration.add(res.timings.duration);
    if (res.status !== 201) fail(`inscription impossible (${res.status}) : ${res.body}`);
    users.push({ email, password: PASSWORD, ...res.json('data') });
  }
  return users;
}

export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const tag = (name) => ({ tags: { name } });

/** Parcours public : lecture du catalogue (le plus fréquent). */
export function browse() {
  const list = http.get(
    `${API}/players?limit=20&page=${1 + Math.floor(Math.random() * 2)}`,
    tag('GET /players'),
  );
  browseDuration.add(list.timings.duration);
  requestsTotal.add(1);
  const ok = check(list, {
    'players 200': (r) => r.status === 200,
    'players paginé': (r) => Array.isArray(r.json('data.items')),
  });
  businessErrors.add(!ok);
  const items = ok ? list.json('data.items') : [];
  if (items.length) {
    const one = http.get(`${API}/players/${pick(items).id}`, tag('GET /players/:id'));
    browseDuration.add(one.timings.duration);
    requestsTotal.add(1);
    businessErrors.add(!check(one, { 'player 200': (r) => r.status === 200 }));
  }
  const matches = http.get(`${API}/matches?limit=10`, tag('GET /matches'));
  browseDuration.add(matches.timings.duration);
  requestsTotal.add(1);
  businessErrors.add(!check(matches, { 'matches 200': (r) => r.status === 200 }));
}

/** Parcours authentifié : profil utilisateur (jeton valide, vérification blacklist Redis). */
export function authed(user) {
  const res = http.get(`${API}/users/me`, {
    headers: { Authorization: `Bearer ${user.accessToken}` },
    ...tag('GET /users/me'),
  });
  authedDuration.add(res.timings.duration);
  requestsTotal.add(1);
  businessErrors.add(!check(res, { 'me 200': (r) => r.status === 200 }));
}

/** Connexion (Argon2id = coût CPU volontaire) : à garder à faible fréquence. */
export function login(user) {
  const res = post(
    '/auth/login',
    { email: user.email, password: user.password },
    tag('POST /auth/login'),
  );
  loginDuration.add(res.timings.duration);
  requestsTotal.add(1);
  businessErrors.add(!check(res, { 'login 200': (r) => r.status === 200 }));
}

export function health() {
  check(http.get(`${BASE_URL}/health`, tag('GET /health')), {
    'health 200': (r) => r.status === 200,
  });
}

/** Mélange réaliste : 70 % lecture publique, 20 % profil, 8 % connexion, 2 % santé. */
export function mixedIteration(users) {
  const dice = Math.random();
  const user = pick(users);
  if (dice < 0.7) browse();
  else if (dice < 0.9) authed(user);
  else if (dice < 0.98) login(user);
  else health();
  // Temps de réflexion d'un vrai utilisateur ; THINK_TIME=0 pour mesurer le débit brut maximal
  const think = Number(__ENV.THINK_TIME ?? 0.5);
  if (think > 0) sleep(think * (0.5 + Math.random()));
}

const num = (m, k) => (m && m.values && m.values[k] !== undefined ? m.values[k] : null);
const ms = (v) => (v === null ? 'n/a' : `${v.toFixed(0)} ms`);

/** Rapport : JSON complet + résumé Markdown (utilisé par la CI et docs/LOAD_TESTING.md). */
export function report(name, data) {
  const m = data.metrics;
  const dur = m.http_req_duration;
  const rps = num(m.http_reqs, 'rate');
  const failed = num(m.http_req_failed, 'rate');
  const rows = [
    ['Scénario', name],
    ['Cible', BASE_URL],
    ['Requêtes', String(num(m.http_reqs, 'count'))],
    ['Débit moyen', rps === null ? 'n/a' : `${rps.toFixed(1)} req/s`],
    ['Utilisateurs virtuels (max)', String(num(m.vus_max, 'max'))],
    ['Latence médiane', ms(num(dur, 'med'))],
    ['Latence p95', ms(num(dur, 'p(95)'))],
    ['Latence p99', ms(num(dur, 'p(99)'))],
    ['Latence max', ms(num(dur, 'max'))],
    ['Taux d’échec HTTP', failed === null ? 'n/a' : `${(failed * 100).toFixed(2)} %`],
    ['p95 lecture catalogue', ms(num(m.ub_browse_duration, 'p(95)'))],
    ['p95 profil authentifié', ms(num(m.ub_authed_duration, 'p(95)'))],
    ['p95 connexion (Argon2id)', ms(num(m.ub_login_duration, 'p(95)'))],
  ];
  const md = `### Test de charge — ${name}\n\n| Indicateur | Valeur |\n| --- | --- |\n${rows.map((r) => `| ${r[0]} | ${r[1]} |`).join('\n')}\n`;
  const out = {};
  out[`results/${name}.json`] = JSON.stringify(
    {
      name,
      date: new Date().toISOString(),
      base: BASE_URL,
      rps,
      p95: num(dur, 'p(95)'),
      p99: num(dur, 'p(99)'),
      failed,
      metrics: data.metrics,
    },
    null,
    2,
  );
  out[`results/${name}.md`] = md;
  out.stdout = md;
  return out;
}
