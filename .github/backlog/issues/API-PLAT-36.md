> **API-PLAT-36** · Tests · Priorité **P0** · Taille **S** · Phase 0 — Socle technique

## 🎯 Contexte

jest.config.js n'impose que 30 % global et 60 % sur 3 services. Le CDC Backend §8.2 exige Domain 90 %, Application 85 %, Infrastructure 70 %, Présentation 70 %, vérifiés en CI.

## ✅ Objectif

Trajectoire de montée progressive vers les seuils cibles, bloquante en CI.

## 📐 Règles de gestion

- Cartographie des couches du dépôt : services/ (application), models/ + utils/ (domaine), config/ + jobs/ (infrastructure), controllers/ + middleware/ (présentation).
- Seuils par glob dans coverageThreshold : services 85 %, models/utils 90 %, controllers/middleware 70 %, config/jobs 70 % ; palier intermédiaire phase 0 : 50 % global, relevé de 10 points par jalon jusqu'à la cible avant la fin de la phase 1.
- Couverture cumulée unit + intégration (merge lcov) pour l'infrastructure et les contrôleurs.
- Rapport publié en commentaire de PR (diff de couverture) ; aucune baisse > 1 point acceptée.
- Exclusions justifiées uniquement (server.ts, tracing.ts) et listées.

## 🛠️ Tâches

- [ ] Modifier jest.config.js (coverageThreshold par chemin).
- [ ] Script scripts/merge-coverage.mjs pour fusionner unit + integration.
- [ ] Étape de CI backend-ci.yml: échec si seuil non atteint.
- [ ] Ajouter l'action de commentaire de PR (couverture).
- [ ] Documenter le tableau des seuils dans CONTRIBUTING.md.
- [ ] Planifier le relèvement progressif dans docs/QUALITY.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné une couverture services à 80 %, alors la CI échoue après relèvement à 85 %.
- [ ] Étant donné une PR qui baisse la couverture de 2 points, alors le check est rouge.
- [ ] Étant donné unit + intégration, alors le rapport fusionné est publié.
- [ ] Étant donné un fichier exclu non listé, alors la revue le refuse.

## 🧪 Tests à écrire

- [ ] CI : seuils par glob évalués.
- [ ] Script : merge-coverage idempotent.
- [ ] Revue : liste d'exclusions.
- [ ] CI : commentaire de PR généré.

## 📚 Références

- CDC Backend §8.2
- CDC Global §3.7

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
