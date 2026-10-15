> **API-CAL-19** · Infrastructure · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

CDC Backend §7 prévoit une file `refresh-calendar-feed` déclenchée par la synchronisation football en cas de changement d'horaire. Le projet n'a pas de file de ce nom : on réutilise la file `football-sync` avec un job nommé `refresh-calendar-feed` (QUEUE_NAMES inchangé) et on implémente le premier worker métier.

## ✅ Objectif

Traiter de façon fiable l'invalidation des caches calendrier et la préparation de la notification de changement d'horaire.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `L-06` — Match reporté — changement d’horaire
_Module : Calendrier et export agenda_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-06_match-reporte-changement-d-horaire__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-06_match-reporte-changement-d-horaire__phone_light.webp?raw=true' width='230' alt='L-06 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-06_match-reporte-changement-d-horaire__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-06_match-reporte-changement-d-horaire__phone_dark.webp?raw=true' width='230' alt='L-06 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-06_match-reporte-changement-d-horaire__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-06_match-reporte-changement-d-horaire__tablet_light.webp?raw=true' width='330' alt='L-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-06_match-reporte-changement-d-horaire__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-06_match-reporte-changement-d-horaire__tablet_dark.webp?raw=true' width='330' alt='L-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Match » · « Horaire modifié » · « Le coup d'envoi passe de 18:30 à 21:00. Ton agenda abonné sera mis à jour automatiquement. » · « Barça – Atlético Madrid » · « Avant » · « Dim. 2 nov. · 18:30 » · « Maintenant » · « Dim. 2 nov. · 21:00 »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [API-CAL-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-02%5D%22) · [API-CAL-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-06%5D%22) · [API-CAL-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-07%5D%22) · [API-CAL-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-11%5D%22) · [API-CAL-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-22%5D%22) · [API-FOOT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-13%5D%22) · [MOB-L-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-01%5D%22) · [MOB-L-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-04%5D%22) · [MOB-L-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-13%5D%22) · [MOB-L-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-27%5D%22) · [MOB-L-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-29%5D%22)

## 📐 Règles de gestion

- Job `refresh-calendar-feed` {matchId, previousKickoffAt, newKickoffAt, changeType} ajouté à `football-sync` avec jobId `refresh-cal-{matchId}-{icsSequence}` pour l'idempotence.
- Retry : 5 tentatives, backoff exponentiel 2 s (valeurs de defaultJobOptions existantes), puis dead-letter.
- Étapes : (1) invalider les clés cache liées au match ; (2) mettre à jour updatedAtSchedule/ETag ; (3) enqueue `match-schedule-changed` dans `notifications` ; (4) mesurer le délai détection→flux (histogramme `calendar_refresh_latency_seconds`).
- Filet de sécurité : cron quotidien 04:00 Europe/Madrid qui recalcule les ETag de tous les abonnements (garantie « sous 24 h »).

## 🔄 Comportement et états

- Job rejoué : aucune notification en double (jobId déterministe).
- Redis indisponible : enqueue ignoré avec warning (comportement existant) mais le cron quotidien comble l'écart.

## 🛠️ Tâches

- [ ] Créer src/jobs/workers/refresh-calendar-feed.worker.ts avec registerWorker('football-sync', processor).
- [ ] Router par job.name (switch) dans src/jobs/workers/football-sync.router.ts.
- [ ] Enregistrer les workers au démarrage (src/server.ts) sauf en test.
- [ ] Ajouter la tâche cron 04:00 dans src/jobs/scheduler.ts.
- [ ] Histogramme calendar_refresh_latency_seconds (metrics.ts).
- [ ] Tests unitaires du processor avec Redis mocké.
- [ ] Doc docs/ARCHITECTURE.md (carte des files).

## ✔️ Critères d'acceptation

- [ ] Étant donné un événement match.schedule.changed, alors un job refresh-calendar-feed est enfilé avec jobId déterministe.
- [ ] Étant donné le job exécuté, alors les clés cache du match sont supprimées.
- [ ] Étant donné 2 émissions identiques, alors un seul job est traité.
- [ ] Étant donné 5 échecs, alors le job part en dead-letter.

## 🧪 Tests à écrire

- [ ] unit: processor invalide les clés
- [ ] unit: jobId déterministe
- [ ] integration: enchaînement vers la file notifications
- [ ] unit: cron 04:00 enregistré

## 🔗 Dépendances

À réaliser après : `API-CAL-18` · `API-CAL-07` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §7, §7.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
