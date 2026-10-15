> **API-PLAT-39** · Tests · Priorité **P0** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

Exigence non négociable du propriétaire : les tests de montée en charge sont étendus à chaque nouveau parcours (docs/LOAD_TESTING.md §« Écrire un nouveau scénario »). Aujourd'hui tests/load/lib.js couvre seulement /players, /players/:id, /matches, /users/me, login, health : rien n'empêche d'ajouter une route sans scénario.

## ✅ Objectif

Rendre l'extension des scénarios k6 vérifiable automatiquement : une route sans couverture de charge (ou exemption motivée) fait échouer la CI.

## 📐 Règles de gestion

- Registre tests/load/coverage.json : pour chaque opération OpenAPI (méthode + chemin) → { scenario, trend, poids } ou { exempt: 'raison' } (ex. routes admin rares, webhooks).
- Script scripts/check-load-coverage.mjs compare swagger.json et le registre : toute opération manquante, ou exemption sans raison >= 15 caractères, = échec CI.
- Chaque issue qui ajoute un endpoint (FOOT, CAL, COMM, NOTIF, AUTH…) doit modifier coverage.json et ajouter une métrique Trend dédiée ; la checklist de PR le rappelle (case obligatoire).
- Conventions : fichier par domaine tests/load/scenarios/<domaine>.js exportant une fonction iteration(ctx) ; métrique nommée <domaine>_<action>_duration ; tags { endpoint: 'GET /players/:id' }.
- Le mélange de trafic (mixedIteration) est pondéré à partir de statistiques d'usage attendues (voir load-profils-trafic-realiste).

## 🛠️ Tâches

- [ ] Créer tests/load/coverage.json (état initial : opérations actuelles couvertes, reste exempté avec raison).
- [ ] Écrire scripts/check-load-coverage.mjs + npm run check:load-coverage.
- [ ] Ajouter l'étape dans backend-ci.yml.
- [ ] Refactorer tests/load/lib.js en tests/load/scenarios/{catalogue,auth,systeme}.js.
- [ ] Ajouter la case « Scénario k6 ajouté / mis à jour » dans .github/pull_request_template.md.
- [ ] Mettre à jour docs/LOAD_TESTING.md (règle + exemple pas à pas).
- [ ] Ajouter la règle dans CONTRIBUTING.md et SECURITY/QUALITY.

## ✔️ Critères d'acceptation

- [ ] Étant donné une nouvelle route ajoutée à l'OpenAPI sans entrée dans coverage.json, alors la CI échoue en nommant la route.
- [ ] Étant donné une exemption sans raison, alors la CI échoue.
- [ ] Étant donné une entrée orpheline (route supprimée), alors avertissement puis échec au prochain jalon.
- [ ] Étant donné le registre à jour, alors check:load-coverage retourne 0.

## 🧪 Tests à écrire

- [ ] Unitaire : parseur OpenAPI → liste d'opérations.
- [ ] Unitaire : détection d'opération manquante.
- [ ] Unitaire : validation d'exemption.
- [ ] CI : le garde échoue sur une branche de test.
- [ ] Revue : modèle de PR mis à jour.

## 📚 Références

- docs/LOAD_TESTING.md
- CDC Backend §8.1
- CDC Global §3.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
