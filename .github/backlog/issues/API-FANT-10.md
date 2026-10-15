> **API-FANT-10** · Fonctionnel · Priorité **P0** · Taille **L** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Le CDC §3.12 impose un moteur de scoring partagé entre Quiz, Fantasy et La Masia pour éviter toute divergence de règles. Il faut une fonction pure, testable, alimentée par le barème versionné et les PlayerMatchStat.

## ✅ Objectif

Une fonction computePlayerPoints(stat, position, ruleSet) déterministe renvoyant le total et le détail par événement (pour H-11).

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `H-10` — Résultat de la journée
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_light.webp?raw=true' width='230' alt='H-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_dark.webp?raw=true' width='230' alt='H-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_light.webp?raw=true' width='330' alt='H-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_dark.webp?raw=true' width='330' alt='H-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Journée 10 terminée » · « Points calculés après le coup de sifflet final » · « ter Stegen » · « 6 pts » · « Koundé » · « 8 pts » · « Cubarsí » · « Araújo » · « 2 pts » · « Balde » · « 5 pts » · « De Jong » · « 7 pts » · « Pedri » · « 9 pts » · « Gavi » · « 3 pts » · « Yamal » · « 14 pts » · « Lewandowski » · « 11 pts » · « Raphinha » · « -1 pts » · « 11/11 » · « Équipe complète » · « Formation »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-01%5D%22) · [API-FANT-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-02%5D%22) · [API-FANT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-05%5D%22) · [API-FANT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-09%5D%22) · [API-FANT-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-11%5D%22) · [API-FANT-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-12%5D%22) · [API-FANT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-13%5D%22) · [API-FANT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-24%5D%22) · [API-FANT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-33%5D%22) · [MOB-H-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-01%5D%22) · [MOB-H-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-20%5D%22) · [MOB-H-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-31%5D%22) · [MOB-H-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-34%5D%22)

#### `H-11` — Détail des points d’un joueur
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-11_detail-des-points-d-un-joueur__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-11_detail-des-points-d-un-joueur__phone_light.webp?raw=true' width='230' alt='H-11 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-11_detail-des-points-d-un-joueur__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-11_detail-des-points-d-un-joueur__phone_dark.webp?raw=true' width='230' alt='H-11 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-11_detail-des-points-d-un-joueur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-11_detail-des-points-d-un-joueur__tablet_light.webp?raw=true' width='330' alt='H-11 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-11_detail-des-points-d-un-joueur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-11_detail-des-points-d-un-joueur__tablet_dark.webp?raw=true' width='330' alt='H-11 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Fermeture des compositions dans » · « 1 j 04 h 12 min » · « J11 » · « ter Stegen » · « 6 pts » · « Koundé » · « 8 pts » · « Cubarsí » · « Araújo » · « 2 pts » · « Balde » · « 5 pts » · « De Jong » · « 7 pts » · « Pedri » · « 9 pts » · « Gavi » · « 3 pts » · « Yamal » · « 14 pts » · « Lewandowski » · « 11 pts » · « Raphinha » · « -1 pts » · « 11/11 » · « Équipe complète »

**Composants repérés** : `avatar`, `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-FANT-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-08%5D%22) · [API-FANT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-09%5D%22) · [API-FANT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-13%5D%22) · [MOB-H-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-21%5D%22)

#### `H-14` — Barème des points
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-14_bareme-des-points__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-14_bareme-des-points__phone_light.webp?raw=true' width='230' alt='H-14 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-14_bareme-des-points__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-14_bareme-des-points__phone_dark.webp?raw=true' width='230' alt='H-14 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-14_bareme-des-points__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-14_bareme-des-points__tablet_light.webp?raw=true' width='330' alt='H-14 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-14_bareme-des-points__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-14_bareme-des-points__tablet_dark.webp?raw=true' width='330' alt='H-14 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Barème de référence » · « Configurable » · « But (attaquant / milieu) » · « +5 / +6 » · « But (défenseur / gardien) » · « +8 » · « Passe décisive » · « +3 » · « Clean sheet (déf. / gardien) » · « +4 » · « Titularisation ≥ 60 min » · « +2 » · « Entrée en jeu » · « +1 » · « Carton jaune » · « −1 » · « Carton rouge » · « −3 » · « 2 buts encaissés (déf. / G) » · « Le » · « capitaine » · « rapporte ses points doublés. »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-08%5D%22) · [MOB-H-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-04%5D%22) · [MOB-H-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-07%5D%22) · [MOB-H-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-24%5D%22)

## 📐 Règles de gestion

- Buts : attaquant (BU, AD, AG) +5 par but, milieu (MD, MC, MO) +6, défenseur (DD, DC, DG) et gardien (GB) +8.
- Passe décisive +3 ; titularisation (>= 60 min) +2 ; entrée en jeu (< 60 min, > 0) +1 (mutuellement exclusifs).
- Clean sheet +4 (défenseur/gardien) ; buts encaissés : -1 par tranche de 2 buts (floor(buts/2)) pour gardien/défenseur présents.
- Cartons : jaune -1, rouge -3 (deux jaunes = jaune -1 puis rouge -3 : cumul -4, à confirmer) ; capitaine : total du joueur x captain_multiplier (2).
- Résultats entiers signés ; détail = liste {event, count, unitPoints, points} sans événement à count 0 (le mobile masque ceux sans occurrence).
- Aucune lecture de base dans la fonction pure : entrées -> sorties ; la position utilisée est celle de PlayerMatchStat (position du joueur lors du match).
- Le moteur est un module src/services/scoring/engine.ts réutilisable par La Masia (computeProgression) et le Passport sans dépendre de Fantasy.

## 🛠️ Tâches

- [ ] Créer src/services/scoring/engine.ts : computePlayerPoints, computeTeamPoints(selections, captainId, statsByPlayer, ruleSet).
- [ ] Définir les types ScoringEvent, PlayerPointsBreakdown, ScoringRuleSetDTO.
- [ ] Fonction resolveRule(event, positionGroup, ruleSet) qui sélectionne la ligne via positions[].
- [ ] Gérer les journées multi-matchs (double journée) : somme des points de chaque match, titularisation comptée par match.
- [ ] Gérer le joueur sans minute (non entré) : 0 point, aucun détail.
- [ ] Exporter une table de correspondance event -> libellé i18n pour l'API de détail.
- [ ] Documenter l'algorithme dans docs/fantasy-scoring.md (formules, exemples chiffrés issus de H-10 : Yamal 14 pts, Raphinha -1).
- [ ] Table de tests de référence (fixtures JSON) partagée avec le test d'intégration job.

## ✔️ Critères d'acceptation

- [ ] Étant donné un milieu titulaire 90 min avec 1 but et 1 passe, alors 2 + 6 + 3 = 11 points.
- [ ] Étant donné un gardien titulaire, 0 but encaissé, alors 2 + 4 = 6 points (ter Stegen 6 pts sur H-10).
- [ ] Étant donné un attaquant avec un jaune et 12 minutes jouées, alors 1 - 1 = 0 point.
- [ ] Étant donné un défenseur ayant encaissé 3 buts, alors -1 (floor(3/2)).
- [ ] Étant donné le capitaine Yamal avec 7 points bruts, alors 14 points après multiplicateur.
- [ ] Étant donné un rouge, alors -3 (négatifs autorisés).

## 🧪 Tests à écrire

- [ ] Unitaire table-driven : 20 cas couvrant chaque ligne du barème CDC.
- [ ] Unitaire : exclusivité start_60 / sub_appearance.
- [ ] Unitaire : double journée.
- [ ] Unitaire : capitaine x2 sur total négatif (-1 -> -2).
- [ ] Unitaire : version de barème différente change le résultat.
- [ ] Propriété : le total équipe = somme des totaux joueurs avec capitaine.

## 🔗 Dépendances

À réaliser après : `API-FANT-08` · `API-FANT-09` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.12
- CDC Backend §3.12.2
- CDC Global §2.7

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
