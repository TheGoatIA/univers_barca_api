> **API-GOAT-26** · Infrastructure · Priorité **P1** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Plusieurs traitements réagissent à un vote (cache, détection d'anomalies, tableau de bord, métriques). Un bus d'évènements interne évite de surcharger la requête HTTP et de coupler le service de vote.

## ✅ Objectif

Un évènement 'goat.vote.cast' publié après chaque vote et consommé de manière asynchrone, avec alimentation des statistiques horaires.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `G-06` — Vote enregistré
_Module : Comparateur GOAT_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-06_vote-enregistre__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-06_vote-enregistre__phone_light.webp?raw=true' width='230' alt='G-06 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-06_vote-enregistre__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-06_vote-enregistre__phone_dark.webp?raw=true' width='230' alt='G-06 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-06_vote-enregistre__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-06_vote-enregistre__tablet_light.webp?raw=true' width='330' alt='G-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-06_vote-enregistre__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-06_vote-enregistre__tablet_dark.webp?raw=true' width='330' alt='G-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Messi vs Xavi » · « Messi » · « Xavi » · « Résultat de la communauté » · « 12 481 votes · tu as voté pour Messi » · « 71 % » · « 29 % » · « Matchs » · « Buts » · « Passes décisives » · « Trophées » · « Saisons » · « 0,86 » · « Buts par match » · « 0,11 » · « Ton vote a bien été pris en compte »

**Composants repérés** : `card`, `toast`

</details>

**Issues liées sur ce même écran :** [API-GOAT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-01%5D%22) · [API-GOAT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-06%5D%22) · [API-GOAT-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-08%5D%22) · [API-GOAT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-10%5D%22) · [API-GOAT-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-11%5D%22) · [API-GOAT-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-12%5D%22) · [API-GOAT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-13%5D%22) · [API-GOAT-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-14%5D%22) · [API-GOAT-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-15%5D%22) · [API-GOAT-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-16%5D%22) · [API-GOAT-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-17%5D%22) · [API-GOAT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-19%5D%22) · [API-GOAT-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-20%5D%22) · [API-GOAT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-21%5D%22) · [API-GOAT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-22%5D%22) · [API-GOAT-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-23%5D%22) · [MOB-G-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-01%5D%22) · [MOB-G-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-02%5D%22) · [MOB-G-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-03%5D%22) · [MOB-G-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-04%5D%22) · [MOB-G-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-11%5D%22) · [MOB-G-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-12%5D%22) · [MOB-G-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-14%5D%22) · [MOB-G-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-15%5D%22) · [MOB-G-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-16%5D%22) · [MOB-G-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-17%5D%22)

## 📐 Règles de gestion

- Évènement 'goat.vote.cast' {pairKey, criterion, action create|change, choice, previousChoice?, userId (pseudonyme interne), at} émis uniquement après succès de l'écriture.
- Consommateurs asynchrones (file BullMQ 'goat-aggregates') : (1) GoatHourlyStat ($inc upsert par pairKey+heure), (2) décision de cache « vote significatif », (3) métriques Prometheus, (4) compteur de votes par utilisateur pour l'anti-abus.
- Les consommateurs sont idempotents : jobId = `${pairKey}:${userId}:${castAt}` ; retry exponentiel (5 tentatives) puis dead-letter.
- La requête HTTP de vote n'attend pas les consommateurs (latence ajoutée < 5 ms) ; en cas d'indisponibilité de Redis, l'évènement est journalisé et rejoué par la réconciliation quotidienne.
- GoatHourlyStat : TTL 90 jours.
- Aucune donnée personnelle (userId en clair, IP) n'est incluse dans les logs de l'évènement.

## 🛠️ Tâches

- [ ] Ajouter 'goat-aggregates' à QUEUE_NAMES (src/jobs/queues.ts) et un worker src/jobs/workers/goat-aggregates.worker.ts.
- [ ] Créer src/events/goat.events.ts (typage de l'évènement + emit).
- [ ] Modèle GoatHourlyStat {pairKey, hour (Date tronquée), votesA, votesB} + index unique {pairKey:1,hour:1} + TTL.
- [ ] Consommateurs séparés dans src/services/goat-consumers/*.ts.
- [ ] jobId déterministe pour l'idempotence.
- [ ] Métrique goat_events_processed_total / goat_events_failed_total.
- [ ] Tests avec bullmq mocké et vérification du rejouement.
- [ ] Documentation du flux dans docs/GOAT.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné un vote créé, alors un job 'goat.vote.cast' est enfilé après l'écriture réussie.
- [ ] Étant donné le même job rejoué, alors GoatHourlyStat n'est incrémenté qu'une fois.
- [ ] Étant donné Redis indisponible, alors le vote réussit et l'évènement est journalisé.
- [ ] Étant donné 5 échecs, alors le job passe en dead-letter.
- [ ] Étant donné les logs, alors aucun userId en clair.

## 🧪 Tests à écrire

- [ ] Intégration : émission et consommation.
- [ ] Intégration : idempotence du job.
- [ ] Intégration : dégradation sans Redis.
- [ ] Unitaire : troncature à l'heure.
- [ ] Intégration : dead-letter.

## 🔗 Dépendances

À réaliser après : `API-GOAT-08` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §7
- CDC Backend §7.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
