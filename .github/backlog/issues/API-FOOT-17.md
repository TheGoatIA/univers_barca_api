> **API-FOOT-17** · API · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

La frise « 125 ans d'histoire » filtre par décennie (1950s…2020s), affiche « 2010 – 2019 · 42 événements », propose des filtres (saison, compétition, adversaire) et un état « Aucun événement trouvé ».

## ✅ Objectif

Recherche d'événements/matchs historiques paginée par curseur avec décompte par décennie.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `F-01` — Frise chronologique
_Module : Historique et fiches_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-01_frise-chronologique__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-01_frise-chronologique__phone_light.webp?raw=true' width='230' alt='F-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-01_frise-chronologique__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-01_frise-chronologique__phone_dark.webp?raw=true' width='230' alt='F-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-01_frise-chronologique__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-01_frise-chronologique__tablet_light.webp?raw=true' width='330' alt='F-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-01_frise-chronologique__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-01_frise-chronologique__tablet_dark.webp?raw=true' width='330' alt='F-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « 125 ans d’histoire » · « 1950s » · « 1970s » · « 1990s » · « 2000s » · « 2010s » · « 2020s » · « 2010 – 2019 » · « 42 événements » · « 6 juin · » · « Berlin : le Barça s’offre un triplé historique » · « Ligue des champions » · « 3-1 Juventus » · « 28 mai · » · « Wembley : une démonstration face à Manchester United » · « 3-1 » · « 27 mai · » · « Rome : le sextuplé se dessine » · « 2-0 » · « 17 mai · » · « Paris : première étoile de l’ère Rijkaard » · « 2-1 »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [API-FOOT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-06%5D%22) · [API-FOOT-54](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-54%5D%22) · [MOB-F-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-01%5D%22) · [MOB-F-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-02%5D%22) · [MOB-F-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-03%5D%22) · [MOB-F-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-05%5D%22) · [MOB-F-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-06%5D%22) · [MOB-F-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-24%5D%22) · [MOB-F-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-25%5D%22) · [MOB-F-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-26%5D%22) · [MOB-F-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-27%5D%22)

#### `F-02` — Frise — défilement long
_Module : Historique et fiches_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-02_frise-defilement-long__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-02_frise-defilement-long__phone_light.webp?raw=true' width='230' alt='F-02 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-02_frise-defilement-long__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-02_frise-defilement-long__phone_dark.webp?raw=true' width='230' alt='F-02 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-02_frise-defilement-long__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-02_frise-defilement-long__tablet_light.webp?raw=true' width='330' alt='F-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-02_frise-defilement-long__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-02_frise-defilement-long__tablet_dark.webp?raw=true' width='330' alt='F-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « 125 ans d’histoire » · « 1950s » · « 1970s » · « 1990s » · « 2000s » · « 2010s » · « 2020s » · « 2010 – 2019 » · « 42 événements » · « 6 juin · » · « Berlin : le Barça s’offre un triplé historique » · « Ligue des champions » · « 3-1 Juventus » · « 28 mai · » · « Wembley : une démonstration face à Manchester United » · « 3-1 » · « 27 mai · » · « Rome : le sextuplé se dessine » · « 2-0 » · « 17 mai · » · « Paris : première étoile de l’ère Rijkaard » · « 2-1 » · « 20 mai · » · « Wembley : la première Coupe d’Europe » · « Coupe d’Europe » · « 1-0 Sampdoria » · « 17 févr. · »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [API-FOOT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-06%5D%22) · [MOB-F-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-05%5D%22) · [MOB-F-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-07%5D%22) · [MOB-F-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-26%5D%22) · [MOB-F-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-27%5D%22)

#### `F-03` — Filtres de la frise
_Module : Historique et fiches_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-03_filtres-de-la-frise__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-03_filtres-de-la-frise__phone_light.webp?raw=true' width='230' alt='F-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-03_filtres-de-la-frise__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-03_filtres-de-la-frise__phone_dark.webp?raw=true' width='230' alt='F-03 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-03_filtres-de-la-frise__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-03_filtres-de-la-frise__tablet_light.webp?raw=true' width='330' alt='F-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-03_filtres-de-la-frise__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-03_filtres-de-la-frise__tablet_dark.webp?raw=true' width='330' alt='F-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « 125 ans d’histoire » · « 1950s » · « 1970s » · « 1990s » · « 2000s » · « 2010s » · « 2020s » · « 2010 – 2019 » · « 42 événements » · « 6 juin · » · « Berlin : le Barça s’offre un triplé historique » · « Ligue des champions » · « 3-1 Juventus » · « 28 mai · » · « Wembley : une démonstration face à Manchester United » · « 3-1 » · « 27 mai · » · « Rome : le sextuplé se dessine » · « 2-0 » · « 17 mai · » · « Paris : première étoile de l’ère Rijkaard » · « 2-1 » · « Filtres » · « Réinitialiser » · « Navigation » · « Décennie » · « Saison » · « Date »

**Composants repérés** : `avatar`, `btn`, `card`, `chip`, `input`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-FOOT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-21%5D%22) · [MOB-F-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-05%5D%22) · [MOB-F-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-08%5D%22) · [MOB-F-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-09%5D%22) · [MOB-F-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-25%5D%22) · [MOB-F-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-26%5D%22) · [MOB-F-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-27%5D%22)

#### `F-04` — Recherche par date précise
_Module : Historique et fiches_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-04_recherche-par-date-precise__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-04_recherche-par-date-precise__phone_light.webp?raw=true' width='230' alt='F-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-04_recherche-par-date-precise__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-04_recherche-par-date-precise__phone_dark.webp?raw=true' width='230' alt='F-04 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-04_recherche-par-date-precise__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-04_recherche-par-date-precise__tablet_light.webp?raw=true' width='330' alt='F-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-04_recherche-par-date-precise__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-04_recherche-par-date-precise__tablet_dark.webp?raw=true' width='330' alt='F-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « 125 ans d’histoire » · « Octobre 2026 » · « Le 15 octobre à travers les saisons » · « 15 oct. · » · « Un 4-0 mémorable en Ligue des champions » · « Victoire à Camp Nou devant 80 000 spectateurs » · « Liga »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [API-FOOT-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-18%5D%22) · [MOB-F-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-02%5D%22) · [MOB-F-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-05%5D%22) · [MOB-F-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-09%5D%22) · [MOB-F-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-10%5D%22)

#### `F-05` — Frise — chargement
_Module : Historique et fiches_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-05_frise-chargement__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-05_frise-chargement__phone_light.webp?raw=true' width='230' alt='F-05 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-05_frise-chargement__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-05_frise-chargement__phone_dark.webp?raw=true' width='230' alt='F-05 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-05_frise-chargement__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-05_frise-chargement__tablet_light.webp?raw=true' width='330' alt='F-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-05_frise-chargement__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-05_frise-chargement__tablet_dark.webp?raw=true' width='330' alt='F-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « 125 ans d’histoire »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [MOB-F-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-05%5D%22) · [MOB-F-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-11%5D%22) · [MOB-F-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-27%5D%22)

#### `F-06` — Frise — aucun résultat
_Module : Historique et fiches_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-06_frise-aucun-resultat__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-06_frise-aucun-resultat__phone_light.webp?raw=true' width='230' alt='F-06 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-06_frise-aucun-resultat__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-06_frise-aucun-resultat__phone_dark.webp?raw=true' width='230' alt='F-06 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-06_frise-aucun-resultat__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-06_frise-aucun-resultat__tablet_light.webp?raw=true' width='330' alt='F-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-06_frise-aucun-resultat__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-06_frise-aucun-resultat__tablet_dark.webp?raw=true' width='330' alt='F-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « 125 ans d’histoire » · « Aucun événement trouvé » · « Aucun match ne correspond à ces filtres. Essaie une autre saison ou réinitialise les filtres. » · « Réinitialiser les filtres »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [MOB-F-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-05%5D%22) · [MOB-F-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-09%5D%22) · [MOB-F-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-12%5D%22) · [MOB-F-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-25%5D%22) · [MOB-F-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-27%5D%22)

## 📐 Règles de gestion

- Filtres : decade (1900..2020), season, from/to, competitionId, opponentId, result (W/D/L), q ; tri date décroissant (défaut).
- Réponse: items + facets {decades:[{decade,count}], competitions:[{id,count}]} pour « 42 événements ».
- Chaque item : id, date, titre éditorial (contextI18n.title), compétition, score « 3-1 Juventus », année.
- Résultat vide: 200 items:[] + facets (écran F-06 géré côté mobile).
- Matchs isHistorical ou finished uniquement ; cache 1 h.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/matches/history` | Recherche historique | ?decade=2010&competitionId=&opponentId=&cursor=&limit=20 | {items:[...],facets:{decades:[{decade:2010,count:42}]},nextCursor} |

## 🛠️ Tâches

- [ ] Créer match.service.searchHistory.
- [ ] Agrégation Mongo $facet pour décennies (floor(year/10)*10).
- [ ] Index {kickoffAt:-1,competitionId:1}.
- [ ] Validator historyQuery.
- [ ] httpCache(max-age=3600).
- [ ] Swagger.
- [ ] Performance: explain sur 10 000 matchs < 100 ms.

## ✔️ Critères d'acceptation

- [ ] Étant donné decade=2010, alors uniquement 2010-2019 et facets.count=42 dans le jeu de démo.
- [ ] Étant donné filtres sans résultat, alors items:[] 200.
- [ ] Étant donné opponentId, alors seuls les matchs contre cette équipe.

## 🧪 Tests à écrire

- [ ] Intégration : facets.
- [ ] Intégration : curseur sur 100 matchs.
- [ ] Intégration : vide.
- [ ] Performance : jeu de 10 000 matchs.

## 🔗 Dépendances

À réaliser après : `API-FOOT-16` · `API-FOOT-06` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.2
- CDC Backend §4.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
