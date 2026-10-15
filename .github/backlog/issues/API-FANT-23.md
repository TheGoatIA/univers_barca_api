> **API-FANT-23** · Performance · Priorité **P1** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Le Fantasy concentre des pics de charge au verrouillage (tous les utilisateurs modifient leur équipe) et pendant les matchs (classement). Les index et les caches doivent être définis avant la mise en production.

## ✅ Objectif

Fixer les index, TTL de cache et budgets de latence, et les valider par un test de charge k6.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `H-01` — Accueil Fantasy
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-01_accueil-fantasy__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-01_accueil-fantasy__phone_light.webp?raw=true' width='230' alt='H-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-01_accueil-fantasy__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-01_accueil-fantasy__phone_dark.webp?raw=true' width='230' alt='H-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-01_accueil-fantasy__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-01_accueil-fantasy__tablet_light.webp?raw=true' width='330' alt='H-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-01_accueil-fantasy__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-01_accueil-fantasy__tablet_dark.webp?raw=true' width='330' alt='H-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Compose ton XI » · « Choisis tes 11 joueurs avant le coup d'envoi. Leurs performances réelles font tes points. » · « Modifier mon équipe » · « Fermeture des compositions dans » · « 1 j 04 h 12 min » · « J11 » · « Ma saison » · « Détails » · « Points » · « 3e » · « Amis » · « 18 432e » · « Monde » · « Dernières journées »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-01%5D%22) · [API-FANT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-05%5D%22) · [API-FANT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-07%5D%22) · [API-FANT-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-14%5D%22) · [API-FANT-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-15%5D%22) · [API-FANT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-19%5D%22) · [MOB-H-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-03%5D%22) · [MOB-H-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-07%5D%22) · [MOB-H-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-08%5D%22) · [MOB-H-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-09%5D%22) · [MOB-H-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-30%5D%22) · [MOB-H-33](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-33%5D%22) · [MOB-H-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-34%5D%22)

#### `H-13` — Classement mondial
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-13_classement-mondial__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-13_classement-mondial__phone_light.webp?raw=true' width='230' alt='H-13 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-13_classement-mondial__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-13_classement-mondial__phone_dark.webp?raw=true' width='230' alt='H-13 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-13_classement-mondial__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-13_classement-mondial__tablet_light.webp?raw=true' width='330' alt='H-13 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-13_classement-mondial__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-13_classement-mondial__tablet_dark.webp?raw=true' width='330' alt='H-13 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Amis » · « Monde » · « Cette journée » · « CulerDeBarna » · « 1120 pts · J11 : +91 » · « Sofía R. » · « 1108 pts · J11 : +84 » · « Marc_09 » · « 1099 pts · J11 : +88 » · « Yann M. » · « 1086 pts · J11 : +72 » · « Boris T. » · « Toi » · « 774 pts · J11 : +70 »

**Composants repérés** : `avatar`, `card`, `chip`

</details>

**Issues liées sur ce même écran :** [API-FANT-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-14%5D%22) · [API-FANT-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-15%5D%22) · [API-FANT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-21%5D%22) · [API-FANT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-22%5D%22) · [API-FANT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-24%5D%22) · [MOB-H-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-03%5D%22) · [MOB-H-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-23%5D%22) · [MOB-H-32](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-32%5D%22)

#### `H-05` — Sélection d’un joueur par poste
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-05_selection-d-un-joueur-par-poste__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-05_selection-d-un-joueur-par-poste__phone_light.webp?raw=true' width='230' alt='H-05 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-05_selection-d-un-joueur-par-poste__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-05_selection-d-un-joueur-par-poste__phone_dark.webp?raw=true' width='230' alt='H-05 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-05_selection-d-un-joueur-par-poste__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-05_selection-d-un-joueur-par-poste__tablet_light.webp?raw=true' width='330' alt='H-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-05_selection-d-un-joueur-par-poste__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-05_selection-d-un-joueur-par-poste__tablet_dark.webp?raw=true' width='330' alt='H-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Fermeture des compositions dans » · « 1 j 04 h 12 min » · « J11 » · « ter Stegen » · « Koundé » · « Balde » · « De Jong » · « Gavi » · « Yamal » · « Raphinha » · « 7/11 » · « 4 postes à compléter » · « Formation » · « 4-3-3 » · « · Capitaine » · « Capitaine » · « Choisir un milieu (MC) » · « 3 postes » · « Rechercher un joueur » · « Milieux »

**Composants repérés** : `avatar`, `btn`, `card`, `chip`, `empty`, `search`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-FANT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-03%5D%22) · [API-FANT-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-04%5D%22) · [MOB-H-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-06%5D%22) · [MOB-H-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-11%5D%22) · [MOB-H-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-14%5D%22) · [MOB-H-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-15%5D%22) · [MOB-H-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-31%5D%22) · [MOB-H-32](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-32%5D%22)

## 📐 Règles de gestion

- Index : fantasyteams {userId:1, gameweek:1} unique, {gameweek:1, points:-1}; fantasygameweekscores {teamId:1, gameweek:1} unique, {userId:1, gameweek:-1}; fantasystandings {season:1, totalPoints:-1}, unique {userId,season}; fantasyleagues {inviteCode:1} unique, {visibility:1, memberCount:-1}; fantasyleaguemembers {leagueId:1,userId:1} unique, {userId:1}; playermatchstats {matchId:1, playerId:1} unique, {playerId:1, createdAt:-1}; gameweeks {season:1, number:1} unique.
- Cache Redis : barème 1 h, joueurs filtrés 60 s, classement world/gameweek 120 s, summary 30 s, formations 24 h ; clés préfixées fantasy:*, invalidation sur événement (fin de calcul, put team).
- Budgets (p95) : GET team < 80 ms, PUT team < 300 ms, GET leaderboard < 200 ms, GET summary < 150 ms ; 1000 req/s tenus sur le classement.
- Mesurer avec explain() : aucun COLLSCAN sur les requêtes listées.
- Pic de verrouillage : 5 000 PUT/min tenus avec taux d'erreur < 0,5 %.
- Dimensionnement worker : 2 workers fantasy, concurrence 2, mémoire < 512 Mo.

## 🛠️ Tâches

- [ ] Déclarer les index dans les schémas et écrire un script npm run db:ensure-indexes.
- [ ] Créer tests/load/fantasy.js (k6) avec scénarios : verrouillage (PUT), lecture classement, summary.
- [ ] Implémenter un petit helper cacheAside(key, ttl, loader) dans src/utils/cache.ts.
- [ ] Ajouter des métriques de hit ratio cache (fantasy_cache_hits_total).
- [ ] Écrire les explain() dans un test d'intégration (assertion sur stage IXSCAN).
- [ ] Rédiger docs/perf/fantasy.md avec résultats et seuils.
- [ ] Ajouter le job k6 dans le pipeline CI optionnel (nightly).
- [ ] Vérifier la mémoire du worker avec 100 000 équipes.

## ✔️ Critères d'acceptation

- [ ] Étant donné les index, alors les requêtes principales utilisent IXSCAN.
- [ ] Étant donné 5 000 PUT/min, alors erreurs < 0,5 %.
- [ ] Étant donné Redis chaud, alors le classement répond p95 < 200 ms.
- [ ] Étant donné une invalidation après calcul, alors le classement reflète les nouveaux points en < 5 s.
- [ ] Étant donné le script ensure-indexes, alors rejouable.

## 🧪 Tests à écrire

- [ ] Intégration : explain IXSCAN.
- [ ] k6 : scénario verrouillage.
- [ ] k6 : scénario classement.
- [ ] Unitaire : cacheAside (hit, miss, erreur Redis).
- [ ] Intégration : invalidation.

## 🔗 Dépendances

À réaliser après : `API-FANT-15` · `API-FANT-06` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §4.7
- CDC Backend §8
- CDC Global §3.1 (performance)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
