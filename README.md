# Univers Barça — API Backend

API REST de l'application mobile **Univers Barça** et de son back-office d'administration.
Stack : **Node.js 22 · TypeScript (strict) · Express 4 · MongoDB (Mongoose, replica set) · Redis · BullMQ · PM2**.

[![Backend CI](https://github.com/TheGoatIA/univers_barca_api/actions/workflows/backend-ci.yml/badge.svg)](https://github.com/TheGoatIA/univers_barca_api/actions/workflows/backend-ci.yml)

> Dépôt frère : [`univers_barca_admin`](https://github.com/TheGoatIA/univers_barca_admin) (back-office React) · [`univers_barca_mobile`](https://github.com/TheGoatIA/univers_barca_mobile) (application Flutter).

## Démarrage rapide

```bash
# 1. Prérequis : Node 22+, Docker
cp .env.example .env                       # puis remplacer les secrets (openssl rand -base64 48)
docker compose -f docker/docker-compose.dev.yml up -d mongodb mongo-init redis
npm ci
npm run migrate:up                         # index et migrations
npm run seed                               # données de démonstration (+ super-admin si ADMIN_BOOTSTRAP_*)
npm run dev                                # http://localhost:5000
```

| URL                | Rôle                                                        |
| ------------------ | ----------------------------------------------------------- |
| `GET /health`      | Sonde légère (liveness)                                     |
| `GET /health/deep` | Vérifie MongoDB + Redis (readiness)                         |
| `GET /metrics`     | Prometheus (IP restreintes, `METRICS_ALLOWED_IPS`)          |
| `/api-docs`        | Swagger UI (Basic auth `SWAGGER_USER` / `SWAGGER_PASSWORD`) |
| `/api/v1/*`        | API versionnée                                              |

## Scripts

| Commande                                                                             | Description                                                               |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| `npm run dev`                                                                        | Démarrage avec rechargement (tsx watch)                                   |
| `npm run build` / `npm start`                                                        | Compilation TypeScript + génération de `swagger.json` / démarrage         |
| `npm run lint` · `npm run format` · `npm run typecheck`                              | Qualité de code (ESLint 9, Prettier, tsc strict)                          |
| `npm run test:unit` · `test:integration` · `test:e2e` · `test:security` · `test:all` | Pyramide de tests (Jest, Supertest)                                       |
| `npm run check:swagger`                                                              | Non-régression du contrat OpenAPI (échoue si `swagger.json` est obsolète) |
| `npm run migrate:up` · `migrate:down` · `migrate:create`                             | Migrations (migrate-mongo)                                                |
| `npm run seed`                                                                       | Données de démonstration                                                  |

## Conventions (extraits — détail dans [`CONTRIBUTING.md`](CONTRIBUTING.md))

- Branches : `main` (production) ← `dev` (intégration/staging) ← `feat/…`, `fix/…`, `refactor/…`, `docs/…`, `chore/…`.
- Commits : [Conventional Commits](https://www.conventionalcommits.org/fr/) vérifiés par commitlint.
- Architecture en couches : `routes → middleware → controller → service → model` (pas d'injection de dépendances ni de pattern Repository).
- Réponses : `{ "success": true, "data": … }` ; listes paginées `{ items, total, page, totalPages, hasMore, nextCursor }` ; erreurs `{ "success": false, "error": { code, message, details?, traceId } }`.
- Sécurité : Argon2id, JWT d'accès 15 min + refresh à rotation, blacklist Redis, Helmet, CORS en liste blanche, limitation de débit, assainissement NoSQL, validation Joi stricte.

## Documentation

- [Architecture](docs/ARCHITECTURE.md) — vues d'ensemble, flux d'authentification, déploiement (Mermaid)
- [Base de données](docs/DATABASE.md) — collections, index, relations
- [Déploiement](docs/DEPLOYMENT.md) — environnements, secrets, VPS, CI/CD, rollback
- [Tests de montée en charge](docs/LOAD_TESTING.md) — profils k6, dimensionnement, journal des capacités
- [Reprise après sinistre](docs/DISASTER_RECOVERY.md) — sauvegardes, restauration, RPO/RTO
- [Décisions d'architecture (ADR)](docs/adr/)
- [Journal des changements](CHANGELOG.md) · [Sécurité](SECURITY.md) · [Contribuer](CONTRIBUTING.md)

## Licence

Logiciel propriétaire — voir [`LICENSE`](LICENSE) et [`NOTICE.md`](NOTICE.md).
