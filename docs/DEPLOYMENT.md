# Déploiement

## Environnements

| Environnement | Branche | Image                                                                         | Port local VPS | Tag git              |
| ------------- | ------- | ----------------------------------------------------------------------------- | -------------- | -------------------- |
| Staging       | `dev`   | `ghcr.io/thegoatia/univers_barca_api:staging-AAAAMMJJ.N` (+ `staging-latest`) | 5002           | `staging-AAAAMMJJ.N` |
| Production    | `main`  | `ghcr.io/thegoatia/univers_barca_api:prod-AAAAMMJJ.N` (+ `prod-latest`)       | 5001           | `vAAAAMMJJ.N`        |

**Version** `AAAAMMJJ.N` : date UTC du jour + compteur journalier = 1 + plus grand N déjà tagué ce jour-là (tags `v…` et `staging-…`). Jamais de `latest` seul.

## Pipeline (`.github/workflows/backend-deploy.yml`)

1. **build-check** : lint, types, tests unitaires, build.
2. **docker** : calcul de version, build multi-stage, push GHCR (cache GHA), scan Trivy (non bloquant), tag git staging.
3. **deploy** (environnement GitHub `staging` / `production`) : SSH → `git reset` du dépôt serveur → démarrage MongoDB/Redis → attente `healthy` (12×5 s) → capture de l'image active → `docker pull` → recréation du seul service `backend` → health check `/health` (18×5 s) → **rollback automatique** vers l'image précédente en cas d'échec.
4. **release-tag** (production) : tag `vAAAAMMJJ.N`.
5. **notify** : Slack si `SLACK_WEBHOOK_URL` est défini.

## Secrets et configuration GitHub (à créer manuellement)

Par environnement (`Settings → Environments → staging | production`) :

| Secret                                               | Description                         |
| ---------------------------------------------------- | ----------------------------------- |
| `VPS_HOST` · `VPS_USER` · `VPS_SSH_KEY` · `VPS_PORT` | Accès SSH de l'utilisateur `deploy` |
| `SLACK_WEBHOOK_URL`                                  | Optionnel                           |

Protections recommandées : branche `main` et `dev` protégées (PR obligatoire, CI verte, 1 revue CODEOWNERS), environnement `production` avec relecteur obligatoire, « Allow auto-merge » activé (Dependabot).

## Préparer le VPS

```bash
sudo PROJECT=univers-barca bash scripts/setup-vps.sh      # Docker, pare-feu, fail2ban, utilisateur deploy
docker network create univers_barca_services               # réseau d'observabilité mutualisé
git clone https://github.com/TheGoatIA/univers_barca_api.git /var/www/univers-barca/api
```

Créer `/var/www/univers-barca/.env.staging` et `.env.production` (modèle : `.env.example`, secrets forts, `REDIS_PASSWORD`, `JWT_*`, `SWAGGER_PASSWORD` ≥ 16 car., `CORS_ORIGINS`, `METRICS_ALLOWED_IPS`…).
Reverse proxy TLS (Traefik, Nginx ou Apache) : `api.univers-barca.app → 127.0.0.1:5001`, `api-staging… → 127.0.0.1:5002`.

## Opérations

```bash
# Migrations (automatiques au démarrage ; manuel)
docker exec ub-production-api npx migrate-mongo status
# Seed de démonstration (staging uniquement)
docker compose --profile tools run --rm seeder
# Rollback manuel
BACKEND_IMAGE=ghcr.io/thegoatia/univers_barca_api:prod-20261015.2 docker compose --env-file … -f docker/docker-compose.production.yml up -d --no-deps --force-recreate backend
```

Ressources (sobres, à ajuster d'après Grafana) : MongoDB 2G/1 CPU, Redis 512M/0,5 CPU, API 1G/1 CPU, PM2 2 instances.
