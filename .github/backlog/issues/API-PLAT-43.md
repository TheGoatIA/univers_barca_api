> **API-PLAT-43** · Tests · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le journal des capacités de docs/LOAD_TESTING.md est vide (« à remplir au premier run sur staging ») et la baseline (tests/load/baseline.json) est manuelle. Le propriétaire veut suivre la capacité à chaque version.

## ✅ Objectif

Automatiser l'archivage des résultats k6, la comparaison à la baseline et la visualisation de la tendance par version.

## 📐 Règles de gestion

- À chaque run staging (load/stress) : résumé JSON → artefact + ligne ajoutée au journal { date, version (BUILD_ID), env, profil, capacité req/s au p95 = 1 s, p95 nominal, taux d'erreur, goulot, action }.
- Capacité maximale = dernier palier du stress où p95 < 1 s et erreurs < 1 % ; charge nominale = 60 % de cette capacité (docs/LOAD_TESTING.md).
- Comparaison à la baseline : avertissement si p95/p99 ou débit se dégradent de > 30 % (existant) ; échec bloquant de la release si > 50 % sur un endpoint critique.
- Résultats poussés vers Prometheus (k6 --out experimental-prometheus-rw) pour un dashboard Grafana « Capacité » : p95 par endpoint par version.
- Mise à jour de baseline.json par PR dédiée uniquement après revue (jamais automatique).

## 🛠️ Tâches

- [ ] Étendre scripts/load-compare.mjs : sortie journal Markdown + JSON.
- [ ] Workflow load-test.yml : étape de publication du résumé dans le job summary et dépôt d'un commit/PR sur docs/LOAD_TESTING.md (journal).
- [ ] Configurer l'écriture distante Prometheus (remote write receiver activé).
- [ ] Créer le dashboard Grafana « Capacité » (voir obs-grafana-dashboards).
- [ ] Script npm run load:baseline (génère la proposition de baseline).
- [ ] Documenter le processus dans docs/LOAD_TESTING.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné un run stress, alors la capacité maximale et le goulot probable sont inscrits dans le journal.
- [ ] Étant donné une dégradation p95 de 60 % d'un endpoint critique, alors la release est bloquée.
- [ ] Étant donné le dashboard, alors la courbe p95 par version est visible.
- [ ] Étant donné baseline.json, alors seule une PR dédiée peut le modifier (CODEOWNERS).

## 🧪 Tests à écrire

- [ ] Unitaire : calcul de capacité depuis les paliers.
- [ ] Unitaire : seuil 30 % / 50 %.
- [ ] CI : journal généré sur un résultat fictif.
- [ ] Revue : CODEOWNERS sur baseline.json.

## 🔗 Dépendances

À réaliser après : `API-PLAT-40` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- docs/LOAD_TESTING.md
- CDC Global §3.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
