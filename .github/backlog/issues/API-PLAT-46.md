> **API-PLAT-46** · Infrastructure · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le pipeline capture l'image active et revient en arrière si le health check échoue. CDC Backend §9.8/§9.5 exige un script de rollback testé avant chaque montée de version majeure, une procédure en deux temps pour les migrations destructives et la restauration pré-déploiement en dernier recours.

## ✅ Objectif

Industrialiser et tester régulièrement le rollback applicatif et de schéma.

## 📐 Règles de gestion

- Script scripts/rollback.sh <env> [tag] : redéploie l'image précédente (ou celle indiquée), attend /health/ready, vérifie /version, journalise dans Slack.
- Migrations : chaque migrate-mongo possède up ET down ; migration irréversible marquée 'irreversible' + sauvegarde pré-déploiement obligatoire ; suppression de champ seulement en 2 versions (dépréciation puis retrait).
- Test de rollback mensuel automatisé sur staging : déployer N, déployer N+1, rollback vers N, vérifier smoke tests.
- Compatibilité : l'image N-1 doit fonctionner sur le schéma de N+1 (expand/contract) ; vérifié par test (démarrer N-1 contre base migrée par N).
- Objectif de durée : rollback en moins de 5 minutes (RTO applicatif).

## 🛠️ Tâches

- [ ] Écrire scripts/rollback.sh et l'intégrer au workflow manuel 'Rollback'.
- [ ] Workflow planifié monthly-rollback-drill.yml sur staging.
- [ ] Lint des migrations : script exigeant exports.up et exports.down.
- [ ] Test de compatibilité N-1 / N dans la CI nocturne.
- [ ] Documenter dans docs/runbooks/rollback.md et mettre à jour DISASTER_RECOVERY.md.
- [ ] Convention 'expand/contract' dans docs/DATABASE.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné un tag cible, alors rollback.sh redéploie cette image et /version le confirme.
- [ ] Étant donné une migration sans down, alors le lint échoue (sauf marquage irreversible).
- [ ] Étant donné l'image N-1 démarrée sur la base migrée par N, alors les smoke tests passent.
- [ ] Étant donné le drill mensuel, alors le résultat est publié.

## 🧪 Tests à écrire

- [ ] Script: dry-run de rollback.sh.
- [ ] CI: lint migrations.
- [ ] Nightly: compatibilité N-1.
- [ ] Drill staging mensuel.
- [ ] Revue: durée mesurée < 5 min.

## 📚 Références

- CDC Backend §9.5
- CDC Backend §9.8
- docs/DISASTER_RECOVERY.md

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
