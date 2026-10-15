# Architecture de l'API

## 1. Vue d'ensemble (contexte)

```mermaid
flowchart LR
  subgraph Clients
    M[App mobile Flutter]
    A[Back-office React]
  end
  subgraph VPS
    RP[Reverse proxy TLS]
    API[API Express + PM2 cluster]
    DB[(MongoDB replica set)]
    R[(Redis)]
    Q[[Files BullMQ]]
  end
  subgraph Externes
    F[API football]
    AI[Services IA texte/image]
    FCM[Firebase Cloud Messaging]
    OBS[Prometheus / Grafana / Jaeger]
  end
  M -->|HTTPS /api/v1| RP
  A -->|HTTPS /api/v1 + cookie httpOnly| RP
  RP --> API
  API --> DB
  API --> R
  API --> Q
  Q --> R
  API --> F
  API --> AI
  API --> FCM
  API -.metrics/traces.-> OBS
```

## 2. Couches applicatives

```mermaid
flowchart TD
  REQ[Requête HTTP] --> MW1[requestContext traceId + métriques]
  MW1 --> MW2[helmet · cors · compression]
  MW2 --> MW3[maintenance · rate limit · json · sanitize NoSQL · hpp]
  MW3 --> RT[routes /api/v1]
  RT --> MW4[auth protect / restrictTo]
  MW4 --> MW5[validate Joi]
  MW5 --> CTRL[controller]
  CTRL --> SVC[service]
  SVC --> MDL[(model Mongoose)]
  SVC --> RED[(Redis)]
  SVC --> JOB[[BullMQ]]
  CTRL --> RES[ok / created / noContent]
  RT -. erreur .-> EH[errorHandler]
  SVC -. AppError .-> EH
```

Règles : pas d'injection de dépendances, pas de pattern Repository. Les contrôleurs sont minces (`catchAsync`), la logique est dans `services/`, les modèles ne connaissent pas HTTP.

## 3. Arborescence

```
src/
  app.ts · server.ts · tracing.ts
  config/       env (Joi), database, redis (store clé/valeur), metrics
  middleware/   auth, validate, errorHandler, rateLimiter, requestLogger, maintenance
  routes/       index.ts (+ JSDoc @swagger)
  controllers/  auth, user, admin-auth, content, health
  services/     auth, token, password, user, admin-auth, health
  validators/   schémas Joi
  models/       collections Mongoose (par domaine)
  jobs/         queues BullMQ, scheduler node-cron
  docs/         génération OpenAPI
  utils/        AppError, catchAsync, response, pagination, sanitize, logger
scripts/        migrations, seed, export-swagger, backup/restore, setup-vps, entrypoint
tests/          unit · integration · e2e · security · load (k6)
docker/         compose dev / staging / production / observabilité
```

## 4. Authentification

```mermaid
sequenceDiagram
  autonumber
  participant C as Client (mobile)
  participant API
  participant DB as MongoDB
  participant R as Redis
  C->>API: POST /auth/login {email, password}
  API->>DB: user + passwordHash (Argon2id)
  API->>DB: RefreshToken(hash, familyId)
  API-->>C: accessToken (JWT 15 min, jti) + refreshToken (opaque)
  C->>API: GET /users/me (Bearer)
  API->>R: jti blacklisté ?
  API-->>C: 200
  C->>API: POST /auth/refresh {refreshToken}
  API->>DB: rotation (ancien révoqué, nouveau émis)
  Note over API,DB: Rejeu d'un ancien token ⇒ toute la famille est révoquée
  C->>API: POST /auth/logout
  API->>R: blacklist jti (TTL = durée restante)
  API->>DB: refresh révoqué
```

Back-office : connexion email + mot de passe (+ TOTP), refresh token en cookie **httpOnly / SameSite=Strict / path restreint**, session 8 h, verrouillage 15 min après 5 échecs, rôles `content-manager` · `moderator` · `super-admin`.

## 5. Jobs et tâches planifiées

| Élément                                                                         | Rôle                                                                                                                                        |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Files BullMQ `email`, `notifications`, `football-sync`, `ai-generation`, `rgpd` | Une file par domaine, 5 tentatives avec backoff exponentiel, file `dead-letter` pour les échecs définitifs, métrique `ub_jobs_failed_total` |
| node-cron 03:00                                                                 | Purge RGPD des comptes supprimés depuis 30 jours (instance PM2 0 uniquement)                                                                |
| node-cron 03:30                                                                 | Purge des refresh tokens révoqués anciens                                                                                                   |

## 6. Déploiement

```mermaid
flowchart LR
  DEV[push dev] --> CIcd1[CI/CD]
  MAIN[push main] --> CIcd2[CI/CD]
  CIcd1 --> V[verify] --> IMG[docker build+push GHCR\nstaging-AAAAMMJJ.N] --> S[SSH deploy staging\nhealth check + rollback]
  CIcd2 --> V2[verify] --> IMG2[docker build+push GHCR\nprod-AAAAMMJJ.N] --> P[SSH deploy production\nhealth check + rollback] --> T[tag git vAAAAMMJJ.N]
```

Voir [DEPLOYMENT.md](DEPLOYMENT.md).

## 7. Observabilité

- Logs Winston JSON (rotation 14 j), champs sensibles masqués, `X-Request-Id` propagé (`traceId`).
- Métriques Prometheus : latence HTTP par route, échecs d'authentification, jobs en échec, métriques Node.
- Traces OpenTelemetry (OTLP) si `OTEL_EXPORTER_OTLP_ENDPOINT` est défini.
- Alertes : API indisponible, latence p95, taux de 5xx, jobs en échec (`docker/prometheus/alerts.yml`).
