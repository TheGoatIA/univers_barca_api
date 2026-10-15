> **API-PLAT-37** · Tests · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le CI vérifie déjà que swagger.json est à jour (check:swagger) mais pas que les réponses réelles respectent le contrat. CDC Backend §8.1 : tests API (contract) conformes au contrat Swagger. Un workflow nightly-regression.yml existe.

## ✅ Objectif

Valider automatiquement chaque réponse contre le schéma et détecter les ruptures de contrat pour le mobile/l'admin.

## 📐 Règles de gestion

- Tests supertest avec validation de réponse par jest-openapi (ou ajv) sur tous les endpoints documentés, y compris les erreurs 400/401/403/404/409/422/429/500 au format {success:false,error:{code,message,details,traceId}}.
- Détection de rupture : openapi-diff entre le swagger.json de la branche et celui de dev ; changement cassant (champ supprimé, type modifié, nouvel obligatoire) = échec sauf label 'breaking-change' + incrément de version.
- Route non documentée = échec (test qui parcourt app._router et compare à l'OpenAPI).
- Nightly : suite complète unit+intégration+e2e+sécurité contre MongoDB 7 et Redis 7, notification en cas d'échec.
- Publication de l'OpenAPI comme artefact de build pour la génération de clients Chopper (mobile) et axios/Zod (admin).

## 🛠️ Tâches

- [ ] Ajouter jest-openapi et tests/contract/*.test.ts.
- [ ] Test d'exhaustivité des routes documentées.
- [ ] Étape openapi-diff dans backend-ci.yml.
- [ ] Compléter nightly-regression.yml (matrice Node 22, notification Slack).
- [ ] Artefact openapi.json publié à chaque build.
- [ ] Documenter le processus de changement cassant (dépréciation, en-tête Deprecation, CDC §10.1).

## ✔️ Critères d'acceptation

- [ ] Étant donné une réponse de /players non conforme au schéma, alors le test de contrat échoue.
- [ ] Étant donné un champ supprimé du schéma, alors openapi-diff signale une rupture et la CI échoue.
- [ ] Étant donné une route sans annotation @swagger, alors le test d'exhaustivité échoue.
- [ ] Étant donné un échec nocturne, alors une notification est envoyée.

## 🧪 Tests à écrire

- [ ] Contrat : 200 et erreurs standard pour chaque route.
- [ ] Contrat : exhaustivité.
- [ ] CI : openapi-diff.
- [ ] Nightly : exécution complète verte.
- [ ] Unitaire : en-tête Deprecation sur route dépréciée.

## 📚 Références

- CDC Backend §8.1
- CDC Backend §10
- CDC Backend §10.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
