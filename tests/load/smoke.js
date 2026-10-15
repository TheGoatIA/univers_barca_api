// Test de charge de fumée k6 — cible : BASE_URL (par défaut un API locale).
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
  thresholds: { http_req_failed: ['rate<0.01'], http_req_duration: ['p(95)<500'] },
};

const BASE = __ENV.BASE_URL || 'http://localhost:5000';

export default function () {
  const res = http.get(`${BASE}/health`);
  check(res, { 'health 200': (r) => r.status === 200 });
  const players = http.get(`${BASE}/api/v1/players?limit=10`);
  check(players, { 'players 200': (r) => r.status === 200 });
  sleep(1);
}
