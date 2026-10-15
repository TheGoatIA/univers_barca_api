> **API-PLAT-31** · Performance · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

La migration 20261015000000-initial-indexes garantit les index de base, mais aucune vérification n'assure que les requêtes réelles les utilisent (COLLSCAN). Objectif global p95 < 300 ms (CDC Global §3.1).

## ✅ Objectif

Outiller la détection des requêtes lentes et des index manquants/inutilisés.

## 📐 Règles de gestion

- Profiler MongoDB niveau 1 avec seuil 100 ms en staging ; en production 200 ms ; export hebdomadaire des requêtes lentes.
- Script scripts/explain-audit.ts : exécute explain('executionStats') sur les requêtes types de chaque endpoint (liste joueurs, matchs à venir, profil, notifications…) et échoue si COLLSCAN ou si docsExamined/nReturned > 10.
- Index à vérifier prioritairement : users.email (unique sparse), refreshtokens.expiresAt TTL, matches {kickoff:1,status:1}, players {slug:1}, notificationlogs {userId:1,createdAt:-1}, groupmemberships {userId:1,groupId:1} unique, communitygroups 2dsphere.
- Chaque issue de nouvel endpoint doit ajouter ses requêtes au script (checklist de PR).
- Index inutilisés : rapport $indexStats mensuel, suppression après validation.

## 🛠️ Tâches

- [ ] Écrire scripts/explain-audit.ts avec un registre tests/perf/queries.ts.
- [ ] Activer le profiler via migration/config (db.setProfilingLevel).
- [ ] Job CI 'explain-audit' sur base seedée (seed volumétrique).
- [ ] Script scripts/index-stats.ts (rapport Markdown).
- [ ] Ajouter la case « index vérifié » au modèle de PR (.github/pull_request_template.md).
- [ ] Documenter dans docs/DATABASE.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné la requête GET /matches?status=scheduled, alors explain montre IXSCAN.
- [ ] Étant donné une requête sans index, alors le script échoue en CI.
- [ ] Étant donné $indexStats, alors les index à 0 opération sont listés.
- [ ] Étant donné le profiler actif, alors les requêtes > 100 ms apparaissent dans system.profile.

## 🧪 Tests à écrire

- [ ] CI : explain-audit sur base de 100 000 documents.
- [ ] Unitaire : parseur de plan d'exécution.
- [ ] Intégration : migration d'index idempotente (up deux fois).
- [ ] Revue : checklist PR.

## 📚 Références

- CDC Global §3.1
- docs/DATABASE.md

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
