# Tests de montée en charge

Ils sont **obligatoires** : ils servent à mesurer ce que l'API supporte, dimensionner le serveur et suivre l'évolution des performances à chaque version. Outil : [k6](https://k6.io) (scripts dans `tests/load/`).

## Profils

| Profil   | Commande              | Objectif                                                                        | Durée   |
| -------- | --------------------- | ------------------------------------------------------------------------------- | ------- |
| `smoke`  | `npm run load:smoke`  | Vérifier que la plateforme répond (1 utilisateur virtuel)                       | 30 s    |
| `load`   | `npm run load:load`   | Charge nominale : `LOAD_VUS` (50) utilisateurs, palier 5 min                    | ~7 min  |
| `stress` | `npm run load:stress` | Paliers 50 → 400 : trouver le point de rupture et le goulot (CPU, Mongo, Redis) | ~8 min  |
| `spike`  | `npm run load:spike`  | Pic brutal (annonce de match, notification push) puis récupération              | ~3 min  |
| `soak`   | `npm run load:soak`   | Charge modérée longue (30 min) : fuites mémoire, dégradation lente              | ~33 min |

Trafic simulé (`tests/load/lib.js`) : 70 % lecture du catalogue (`/players`, `/players/:id`, `/matches`), 20 % profil authentifié (`/users/me`), 8 % connexion (Argon2id, volontairement coûteux), 2 % santé. Temps de réflexion `THINK_TIME` (0,5 s) ; `THINK_TIME=0` mesure le débit brut maximal.

## Exécuter

```bash
# 1. API locale sans limiteur de débit (jamais en production)
RATE_LIMIT_DISABLED=true NODE_ENV=staging npm run dev
npm run seed
# 2. Un profil (k6 local, sinon image Docker grafana/k6)
npm run load:smoke
BASE_URL=https://api-staging.univers-barca.app LOAD_VUS=100 npm run load:load
```

Variables : `BASE_URL`, `LOAD_VUS`, `LOAD_HOLD`, `STRESS_VUS`, `SPIKE_VUS`, `SOAK_VUS`, `SOAK_DURATION`, `USERS` (comptes de test créés), `THINK_TIME`, seuils `P95_MS` (1500), `P99_MS` (3000), `P95_BROWSE_MS` (800), `ERROR_RATE` (0,01).
Résultats : `tests/load/results/<profil>.json|md` (non versionnés).

> Ne lancer les profils `stress`/`spike`/`soak` que sur **staging** ou en local, jamais sur la production. Les comptes `…@loadtest.univers-barca.app` créés par les tests peuvent être purgés (`db.users.deleteMany({email:/@loadtest\./})`).

## Automatisation (`.github/workflows/load-test.yml`)

| Déclencheur                                         | Profils                                | Cible                                             |
| --------------------------------------------------- | -------------------------------------- | ------------------------------------------------- |
| Push sur `dev` (code ou scripts de charge modifiés) | `smoke` + `load` réduit (30 VU, 1 min) | API démarrée dans le runner (Mongo + Redis réels) |
| Chaque lundi 01:00 UTC                              | `stress` + `spike`                     | idem                                              |
| Manuel (Actions → _Tests de montée en charge_)      | au choix, `vus` et `target_url` libres | runner ou **staging**                             |

Chaque run publie un résumé (débit, p50/p95/p99, taux d'échec, latence par parcours), une comparaison à la référence (`tests/load/baseline.json`, avertissement si p95/p99 ou débit se dégradent de plus de 30 %) et l'artefact JSON conservé 90 jours.

Les runners GitHub (2 vCPU partagés) sont **bruités** : les seuils CI sont volontairement larges et servent de garde-fou et de tendance. Les chiffres de dimensionnement doivent venir de **staging**, sur un VPS identique à la production.

## Dimensionner le serveur

1. Lancer `stress` sur staging pendant que Grafana (Prometheus `ub_http_request_duration_seconds`, CPU/RAM conteneurs) est ouvert.
2. Noter le palier où le p95 dépasse 1 s ou où le taux d'erreur dépasse 1 % → **capacité maximale** (req/s, utilisateurs simultanés).
3. Retenir ~60 % de cette capacité comme **charge nominale** du serveur ; au-delà, augmenter `PM2_INSTANCES`, les limites Docker (API 1G/1 CPU, MongoDB 2G/1 CPU, Redis 512M) ou le VPS.
4. Identifier le goulot : CPU API saturé (→ plus d'instances), latence Mongo (→ index, cache Redis), connexions (→ `maxPoolSize`), Argon2id (→ limiter les connexions/s ou ajuster ses paramètres).
5. Reporter le résultat dans le tableau ci-dessous et mettre à jour `tests/load/baseline.json`.

## Journal des capacités mesurées

| Date                                   | Version | Environnement | Profil | Capacité (req/s) | p95 | Goulot | Action |
| -------------------------------------- | ------- | ------------- | ------ | ---------------- | --- | ------ | ------ |
| _à remplir au premier run sur staging_ |         |               |        |                  |     |        |        |

Référence locale (développeur, FerretDB, 1 cœur, sans Redis) : `load` 30 VU ≈ 70 req/s, p95 ≈ 11 ms, 0 % d'erreur — uniquement indicatif.

## Écrire un nouveau scénario

Réutiliser `lib.js` (`createUsers`, `browse`, `authed`, `login`, `thresholds`, `report`) ; chaque nouvelle route critique ajoutée à l'API doit être ajoutée au mélange de trafic (`mixedIteration`) avec sa propre métrique `Trend`.
