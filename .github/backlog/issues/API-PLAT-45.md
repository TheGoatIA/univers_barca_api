> **API-PLAT-45** · Infrastructure · Priorité **P0** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

Le pipeline backend-deploy.yml enchaîne build-check, docker, deploy, release-tag, notify. CDC §9.4/§13.3 exige des portes bloquantes (couverture, audit, validation staging 24-48 h, sauvegarde pré-déploiement).

## ✅ Objectif

Ajouter les portes manquantes sans ralentir inutilement le flux.

## 📐 Règles de gestion

- Porte 1 (PR) : lint, types, tests unitaires + couverture, contrat OpenAPI, audit dépendances, check:load-coverage, commitlint.
- Porte 2 (merge dev → staging) : build image, Trivy bloquant, déploiement, smoke test (/health/deep, /version = BUILD_ID, /config), puis load smoke + load réduit sur staging (seuils par endpoint).
- Porte 3 (main → production) : approbation manuelle d'environnement, vérification que la même image a passé >= 24 h sur staging sans alerte critique, sauvegarde pré-déploiement déclenchée (database-backup) et migrations en dry-run.
- Post-déploiement : vérification automatique /version, /health/deep, taux 5xx < 1 % pendant 5 min via Prometheus, sinon rollback automatique.
- Tag d'image immuable AAAAMMJJ.N déjà en place ; promotion de l'image staging vers prod sans rebuild.

## 🛠️ Tâches

- [ ] Découper .github/workflows/backend-deploy.yml en jobs réutilisables (workflow_call).
- [ ] Ajouter job smoke-tests (script scripts/smoke.sh).
- [ ] Ajouter job staging-soak-check (lecture de l'historique d'alertes Prometheus).
- [ ] Ajouter job pre-deploy-backup (SSH → trigger backup).
- [ ] Étape de promotion d'image sans rebuild (docker buildx imagetools create).
- [ ] Documenter la checklist de release (CDC §13.3) dans docs/RELEASE.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné une PR sans scénario k6 pour une nouvelle route, alors elle ne peut pas fusionner.
- [ ] Étant donné un déploiement staging dont /version ne correspond pas, alors le job échoue.
- [ ] Étant donné moins de 24 h sur staging, alors la production est bloquée.
- [ ] Étant donné un taux 5xx > 1 % post-déploiement, alors rollback automatique.

## 🧪 Tests à écrire

- [ ] Workflow : lint actionlint.
- [ ] Simulation: déploiement staging sur dépôt de test.
- [ ] Script smoke.sh testé localement.
- [ ] Revue: protections d'environnement GitHub.

## 📚 Références

- CDC Backend §9.4
- CDC Backend §13.3
- docs/DEPLOYMENT.md

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
