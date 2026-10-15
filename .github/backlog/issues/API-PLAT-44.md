> **API-PLAT-44** · Infrastructure · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Exigence propriétaire : dimensionner le serveur à partir de mesures. docs/LOAD_TESTING.md donne 5 étapes mais les ressources (API 1G/1 CPU, MongoDB 2G/1 CPU, Redis 512M/0,5 CPU, PM2 2 instances) n'ont pas été validées par un run sur le VPS staging identique à la production.

## ✅ Objectif

Produire la fiche de dimensionnement chiffrée, les seuils d'alerte de saturation et les paliers d'évolution (scale-up, worker séparé).

## 📐 Règles de gestion

- Protocole : run stress sur staging (VPS identique) avec Grafana ouvert ; relever pour chaque palier req/s, p95, CPU API, RAM, connexions Mongo, ops Redis, files d'attente.
- Règles : charge nominale <= 60 % de la capacité mesurée ; CPU conteneur API < 70 % en nominal ; RAM < 80 % ; connexions Mongo < 70 % de maxPoolSize × instances.
- Dimension cible de lancement : tenir le pic « soir de match » = nombre d'utilisateurs simultanés estimé via CDC Global §12 (à renseigner dans la fiche) avec marge 40 %.
- Paliers d'évolution documentés : (1) PM2_INSTANCES 2 → 4, (2) séparation worker/API, (3) augmentation limites Docker, (4) VPS supérieur, (5) réplica de lecture MongoDB / Redis dédié.
- Alertes de saturation Prometheus : CPU > 80 % 10 min, RAM > 85 %, p95 > 1 s, connexions Mongo > 80 %.
- Fiche mise à jour à chaque version majeure et après chaque nouvelle fonction coûteuse (IA, fan-out notifications).

## 🛠️ Tâches

- [ ] Rédiger docs/CAPACITY_PLAN.md (tableau mesures, calcul, hypothèses CDC §12).
- [ ] Exécuter et archiver le premier run stress staging (renseigner le journal).
- [ ] Ajouter cAdvisor/node-exporter au compose observabilité pour CPU/RAM conteneurs.
- [ ] Ajouter les alertes de saturation dans alerts.yml.
- [ ] Mettre à jour les limites Docker dans docker-compose.production.yml selon les mesures.
- [ ] Créer un tableau de décision « seuil franchi → action ».

## ✔️ Critères d'acceptation

- [ ] Étant donné un run stress, alors la fiche contient capacité max, nominale (60 %) et goulot identifié.
- [ ] Étant donné CPU API > 80 % pendant 10 min, alors l'alerte de saturation se déclenche.
- [ ] Étant donné la fiche, alors les 5 paliers d'évolution sont décrits avec coût estimé.
- [ ] Étant donné les limites Docker, alors elles correspondent à la fiche.

## 🧪 Tests à écrire

- [ ] Recette : run stress staging complet archivé.
- [ ] Promtool : test des règles de saturation.
- [ ] Revue : cohérence des limites Docker avec la fiche.
- [ ] Smoke : cAdvisor expose les métriques.

## 🔗 Dépendances

À réaliser après : `API-PLAT-43` · `API-PLAT-42` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- docs/LOAD_TESTING.md
- docs/DEPLOYMENT.md
- CDC Global §12

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
