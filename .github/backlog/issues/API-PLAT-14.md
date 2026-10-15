> **API-PLAT-14** · API · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

WH-02 « Files d'attente BullMQ — Jobs persistés et idempotents » liste chaque file (calendar-sync, notifications…) avec En attente / Échecs / Terminés (ex. 1 284, 8 402) et un bouton Actualiser.

## ✅ Objectif

Exposer les compteurs de toutes les files et la liste paginée des jobs échoués.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WH-02` — Files d’attente BullMQ
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_light.webp?raw=true' width='330' alt='WH-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_dark.webp?raw=true' width='330' alt='WH-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_light.webp?raw=true' width='330' alt='WH-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_dark.webp?raw=true' width='330' alt='WH-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Files d’attente » · « Files d’attente BullMQ » · « Jobs persistés et idempotents · relance manuelle des échecs » · « Actualiser » · « calendar-sync » · « En attente » · « Échecs » · « Terminés » · « notifications »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-05%5D%22) · [ADM-WH-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-06%5D%22) · [ADM-WH-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-07%5D%22) · [ADM-WH-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-14%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22) · [API-PLAT-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-15%5D%22) · [API-PLAT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-21%5D%22) · [API-PLAT-48](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-48%5D%22) · [API-PLAT-53](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-53%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

## 📐 Règles de gestion

- Compteurs via Queue.getJobCounts(waiting, active, delayed, failed, completed, paused) pour les files de QUEUE_NAMES (email, notifications, football-sync, ai-generation, rgpd, dead-letter) + calendar-sync (refresh-calendar-feed) et wallpapers affichés par la maquette — à aligner (voir tâche).
- Pour chaque file : oldestWaitingAgeSeconds, throughputPerMin (derniers 15 min), workers actifs, paused.
- GET /admin/observability/queues/:name/jobs?state=failed&cursor= : pagination par curseur, 20 par page, avec id, name, attemptsMade, failedReason tronquée (200 car.), manualRetries, données masquées (aucune donnée personnelle : clés sensibles remplacées par '***').
- Réponse < 300 ms ; ne jamais lister >100 jobs d'un coup ; mise en cache 5 s.
- Super-admin uniquement.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/observability/queues` | Compteurs par file | — | {success:true,data:{items:[{name:'notifications',waiting:8402,active:5,failed:3,completed:120044,oldestWaitingAgeSeconds:12}]}} |
| `GET` | `/api/v1/admin/observability/queues/:name/jobs` | Jobs par état | ?state=failed&cursor= | {success:true,data:{items:[{id:'42',name:'send',attemptsMade:5,failedReason:'…',manualRetries:1}],nextCursor:null}} |

## 🛠️ Tâches

- [ ] Créer src/services/observability/queues.service.ts utilisant le registre de files de src/jobs/queues.ts (ajouter getAllQueues()).
- [ ] Aligner les noms de files avec le CDC Backend §7 (sync-live-matches, generate-wallpaper, refresh-calendar-feed, database-backup…) via une table de correspondance documentée.
- [ ] Ajouter util maskJobData() (liste de clés sensibles : email, token, password, pushToken).
- [ ] Routes GET /queues et GET /queues/:name/jobs.
- [ ] Gauges Prometheus ub_queue_jobs{queue,state} rafraîchies toutes les 15 s.
- [ ] Schémas OpenAPI, tests avec ioredis-mock ou Redis de test.
- [ ] Règle d'alerte docker/prometheus/alerts.yml : waiting > 10 pendant 10 min (valeur du seuil de WH-01).

## ✔️ Critères d'acceptation

- [ ] Étant donné 14 jobs en attente dans wallpapers, alors GET /queues renvoie waiting=14 pour cette file.
- [ ] Étant donné un job échoué contenant email, alors data.email vaut '***'.
- [ ] Étant donné state=failed et >20 jobs, alors nextCursor est fourni.
- [ ] Étant donné une file inexistante, alors 404.
- [ ] Étant donné un non super-admin, alors 403.

## 🧪 Tests à écrire

- [ ] Intégration : compteurs après ajout de jobs.
- [ ] Unitaire : maskJobData.
- [ ] Intégration : pagination curseur.
- [ ] Intégration : RBAC.
- [ ] Unitaire : correspondance noms CDC ↔ files.
- [ ] Contrat : OpenAPI.

## 📚 Références

- CDC Admin §4.7.1
- CDC Backend §7
- CDC Backend §7.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
