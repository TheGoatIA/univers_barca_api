# Journal des changements

Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/). Les versions de déploiement suivent `AAAAMMJJ.N` (voir [DEPLOYMENT](docs/DEPLOYMENT.md)).

## [Non publié]

### Ajouté

- Socle Express + MongoDB (Mongoose) + Redis + BullMQ, architecture en couches.
- Authentification utilisateur : inscription avec consentements RGPD, connexion, rotation du refresh token avec détection de réutilisation, déconnexion, réinitialisation de mot de passe, export et suppression de compte.
- Authentification back-office distincte : cookie httpOnly, verrouillage après échecs, 2FA TOTP, RBAC (`content-manager`, `moderator`, `super-admin`).
- Modèles de données du produit (football, gamification, fantasy, communauté, modération, plateforme).
- Observabilité : `/health`, `/health/deep`, `/metrics`, OpenTelemetry, Winston, Swagger protégé.
- Tests unitaires, intégration, e2e et sécurité ; contrat OpenAPI versionné.
- CI/CD : GitHub Actions, images GHCR, déploiement VPS avec rollback automatique, tags `AAAAMMJJ.N`.
