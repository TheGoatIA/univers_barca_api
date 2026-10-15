> **API-GOAT-15** · API · Priorité **P2** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Le CDC Admin prévoit en phase 2 un « Tableau de bord GOAT » (suivi des votes communautaires). L'API fournit les KPI et les listes que l'écran admin consommera ; l'écran lui-même sera conçu côté admin.

## ✅ Objectif

Des endpoints d'agrégats en lecture pour super-admin et content-manager.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `G-06` — Vote enregistré
_Module : Comparateur GOAT_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-06_vote-enregistre__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-06_vote-enregistre__phone_light.webp?raw=true' width='230' alt='G-06 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-06_vote-enregistre__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-06_vote-enregistre__phone_dark.webp?raw=true' width='230' alt='G-06 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-06_vote-enregistre__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-06_vote-enregistre__tablet_light.webp?raw=true' width='330' alt='G-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-06_vote-enregistre__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-06_vote-enregistre__tablet_dark.webp?raw=true' width='330' alt='G-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Messi vs Xavi » · « Messi » · « Xavi » · « Résultat de la communauté » · « 12 481 votes · tu as voté pour Messi » · « 71 % » · « 29 % » · « Matchs » · « Buts » · « Passes décisives » · « Trophées » · « Saisons » · « 0,86 » · « Buts par match » · « 0,11 » · « Ton vote a bien été pris en compte »

**Composants repérés** : `card`, `toast`

</details>

**Issues liées sur ce même écran :** [API-GOAT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-01%5D%22) · [API-GOAT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-06%5D%22) · [API-GOAT-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-08%5D%22) · [API-GOAT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-10%5D%22) · [API-GOAT-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-11%5D%22) · [API-GOAT-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-12%5D%22) · [API-GOAT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-13%5D%22) · [API-GOAT-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-14%5D%22) · [API-GOAT-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-16%5D%22) · [API-GOAT-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-17%5D%22) · [API-GOAT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-19%5D%22) · [API-GOAT-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-20%5D%22) · [API-GOAT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-21%5D%22) · [API-GOAT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-22%5D%22) · [API-GOAT-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-23%5D%22) · [API-GOAT-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-26%5D%22) · [MOB-G-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-01%5D%22) · [MOB-G-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-02%5D%22) · [MOB-G-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-03%5D%22) · [MOB-G-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-04%5D%22) · [MOB-G-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-11%5D%22) · [MOB-G-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-12%5D%22) · [MOB-G-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-14%5D%22) · [MOB-G-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-15%5D%22) · [MOB-G-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-16%5D%22) · [MOB-G-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-17%5D%22)

## 📐 Règles de gestion

- GET /admin/goat/overview?days=7|30|90 : totalVotes, newVotes (période), votesPerDay[], activeVoters, duelsCount, flaggedVotes, openAnomalies, topDuels[10] (pairKey, joueurs, total, pctA, pctB).
- GET /admin/goat/duels?q&hidden&featured&sort=total|lastVoteAt&page&limit : liste des duels avec filtre par joueur.
- GET /admin/goat/duels/:pairKey : détail (compteurs, évolution horaire sur 7 jours, répartition par critère, votes flagged).
- Aucune donnée individuelle d'utilisateur (userId, pseudo) n'est renvoyée dans ces endpoints ; seulement des agrégats.
- Rôles : content-manager (lecture) et super-admin (lecture + actions) ; moderator : 403.
- Réponses mises en cache 60 s côté Redis (admin:goat:overview:{days}).

## 🛠️ Tâches

- [ ] Routes /admin/goat/* dans src/routes/admin-goat.routes.ts avec protect + restrictTo.
- [ ] Service admin-goat.service.ts : overview, listDuels, duelDetail avec pipelines d'agrégation.
- [ ] Collection GoatHourlyStat {pairKey, hour, votesA, votesB} alimentée à chaque vote ($inc upsert) pour les séries.
- [ ] Index {hour:1,pairKey:1}.
- [ ] Mappers AdminGoatOverviewDto, AdminGoatDuelDto.
- [ ] Cache Redis 60 s.
- [ ] Swagger : AdminGoat*.
- [ ] Audit : lecture non auditée, actions auditées (cf. issue actions).

## ✔️ Critères d'acceptation

- [ ] Étant donné days=7, alors votesPerDay contient 7 entrées.
- [ ] Étant donné un duel masqué, alors il apparaît avec hidden=true dans la liste admin.
- [ ] Étant donné un moderator, alors 403.
- [ ] Étant donné les réponses, alors aucun userId n'y figure.
- [ ] Étant donné aucune donnée, alors les KPI valent 0.

## 🧪 Tests à écrire

- [ ] Intégration : overview.
- [ ] Intégration : filtres de la liste.
- [ ] Sécurité : rôles.
- [ ] Sécurité : absence de userId.
- [ ] Unitaire : séries horaires.

## 🔗 Dépendances

À réaliser après : `API-GOAT-11` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §7
- CDC Admin §6.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
