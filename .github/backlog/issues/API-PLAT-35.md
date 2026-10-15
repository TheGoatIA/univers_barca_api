> **API-PLAT-35** · Infrastructure · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

src/server.ts gère SIGTERM avec un délai forcé de 25 s mais les workers BullMQ tournent dans le même processus. Le CDC Backend §9.1/9.3 prévoit un service worker (node dist/worker.js) scalable séparément, et §3.5 la reprise des jobs au redémarrage.

## ✅ Objectif

Séparer API et worker, drainer proprement les connexions et jobs, et signaler l'état de préparation.

## 📐 Règles de gestion

- Entrée src/worker.ts : démarre les workers (email, notifications, football-sync, ai-generation, rgpd, exports) et le scheduler unique ; l'API ne lance plus RUN_CRON.
- Arrêt : /health/ready renvoie 503 dès SIGTERM ; arrêt d'accepter, attente des requêtes en cours (max 25 s), worker.close() attend les jobs actifs (max 60 s) ; stopGracePeriod Docker 70 s.
- Un job interrompu est repris (lock BullMQ 30 s, stalledInterval) ; processors idempotents (CDC §7.1).
- Exactement un scheduler (verrou Redis leader election, TTL 30 s) même avec plusieurs réplicas worker.
- Concurrence configurable par file (WORKER_CONCURRENCY_<QUEUE>) ; generate-wallpaper limité à 2.

## 🛠️ Tâches

- [ ] Créer src/worker.ts et script npm start:worker / start:worker:dev.
- [ ] Ajouter le service worker aux fichiers docker-compose.{dev,staging,production}.yml (même image, command différente).
- [ ] Séparer /health/live et /health/ready (ready=false pendant l'arrêt).
- [ ] Implémenter le verrou de leader pour le scheduler.
- [ ] Adapter ecosystem.config.js.
- [ ] Tests : envoi SIGTERM pendant un job de 5 s.
- [ ] Mettre à jour docs/DEPLOYMENT.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné SIGTERM pendant un job, alors le job se termine avant l'arrêt du worker.
- [ ] Étant donné SIGTERM sur l'API, alors /health/ready répond 503 puis les requêtes en cours finissent.
- [ ] Étant donné deux workers, alors un seul exécute les crons.
- [ ] Étant donné un kill -9, alors le job est repris après l'expiration du lock.

## 🧪 Tests à écrire

- [ ] Intégration : arrêt gracieux avec requête lente.
- [ ] Intégration : reprise de job stalled.
- [ ] Intégration : leader election.
- [ ] Unitaire : transition ready→not ready.
- [ ] Recette : docker stop mesure < 70 s.

## 📚 Références

- CDC Backend §9.1
- CDC Backend §7.1
- CDC Global §3.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
