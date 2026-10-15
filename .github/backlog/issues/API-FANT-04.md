> **API-FANT-04** · API · Priorité **P0** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

La feuille « Choisir un milieu (MC) – 3 postes » (H-05) liste les joueurs filtrables par poste avec recherche (« Rechercher un joueur ») et tri par forme. GET /players existe mais ne porte ni forme fantasy ni éligibilité.

## ✅ Objectif

GET /fantasy/players : joueurs éligibles filtrés par groupe de poste, recherche et tri, avec forme et points de saison.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `H-05` — Sélection d’un joueur par poste
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-05_selection-d-un-joueur-par-poste__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-05_selection-d-un-joueur-par-poste__phone_light.webp?raw=true' width='230' alt='H-05 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-05_selection-d-un-joueur-par-poste__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-05_selection-d-un-joueur-par-poste__phone_dark.webp?raw=true' width='230' alt='H-05 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-05_selection-d-un-joueur-par-poste__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-05_selection-d-un-joueur-par-poste__tablet_light.webp?raw=true' width='330' alt='H-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-05_selection-d-un-joueur-par-poste__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-05_selection-d-un-joueur-par-poste__tablet_dark.webp?raw=true' width='330' alt='H-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Fermeture des compositions dans » · « 1 j 04 h 12 min » · « J11 » · « ter Stegen » · « Koundé » · « Balde » · « De Jong » · « Gavi » · « Yamal » · « Raphinha » · « 7/11 » · « 4 postes à compléter » · « Formation » · « 4-3-3 » · « · Capitaine » · « Capitaine » · « Choisir un milieu (MC) » · « 3 postes » · « Rechercher un joueur » · « Milieux »

**Composants repérés** : `avatar`, `btn`, `card`, `chip`, `empty`, `search`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-FANT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-03%5D%22) · [API-FANT-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-23%5D%22) · [MOB-H-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-06%5D%22) · [MOB-H-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-11%5D%22) · [MOB-H-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-14%5D%22) · [MOB-H-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-15%5D%22) · [MOB-H-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-31%5D%22) · [MOB-H-32](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-32%5D%22)

#### `H-03` — Composition — postes à compléter
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-03_composition-postes-a-completer__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-03_composition-postes-a-completer__phone_light.webp?raw=true' width='230' alt='H-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-03_composition-postes-a-completer__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-03_composition-postes-a-completer__phone_dark.webp?raw=true' width='230' alt='H-03 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-03_composition-postes-a-completer__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-03_composition-postes-a-completer__tablet_light.webp?raw=true' width='330' alt='H-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-03_composition-postes-a-completer__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-03_composition-postes-a-completer__tablet_dark.webp?raw=true' width='330' alt='H-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Fermeture des compositions dans » · « 1 j 04 h 12 min » · « J11 » · « ter Stegen » · « Koundé » · « Balde » · « De Jong » · « Gavi » · « Yamal » · « Raphinha » · « 7/11 » · « 4 postes à compléter » · « Formation » · « 4-3-3 » · « · Capitaine » · « Capitaine »

**Composants repérés** : `avatar`, `btn`, `card`, `empty`

</details>

**Issues liées sur ce même écran :** [API-FANT-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-02%5D%22) · [API-FANT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-03%5D%22) · [API-FANT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-05%5D%22) · [MOB-H-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-05%5D%22) · [MOB-H-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-06%5D%22) · [MOB-H-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-11%5D%22) · [MOB-H-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-12%5D%22) · [MOB-H-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-29%5D%22) · [MOB-H-33](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-33%5D%22) · [MOB-H-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-34%5D%22)

## 📐 Règles de gestion

- Filtres : group=GB|DEF|MID|ATT (ou position exacte), q (recherche insensible aux accents sur searchName, 2 caractères min), sort=form|points|name (défaut name), limit défaut 20 max 50, cursor.
- form = moyenne des points des 5 dernières journées scorées du joueur (arrondie à 1 décimale) ; null si moins d'une journée.
- totalPoints = somme des points bruts (sans multiplicateur capitaine) sur la saison.
- Un joueur blessé/suspendu n'est pas géré (aucune donnée au CDC) : champ availability absent du contrat, ne pas l'inventer.
- Contenu public uniquement : id, fullName, shortName, position, shirtNumber, photoKey, form, totalPoints, selectedByPercent (part des équipes de la journée contenant le joueur, optionnel à confirmer).
- Cache Redis 60 s par combinaison de filtres ; jamais d'information sur d'autres utilisateurs.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/fantasy/players` | Liste des joueurs sélectionnables | ?group=MID&q=gav&sort=form&limit=20&cursor= | {success:true,data:{items:[{id,fullName,position:'MC',shirtNumber:6,photoKey,form:7.2,totalPoints:61}],hasMore,nextCursor}} |

## 🛠️ Tâches

- [ ] Créer controller fantasy.listPlayers + route GET /fantasy/players.
- [ ] Créer validators/fantasy.validator.ts listPlayersQuery (Joi) : group, q (trim, min 2, max 40), sort, limit, cursor.
- [ ] Service fantasy-players.service.ts : requête Player (status published, isActive) + agrégation $lookup sur FantasyPlayerStat/ FantasyGameweekScore.breakdown pour la forme.
- [ ] Matérialiser form/totalPoints dans un document PlayerFantasyForm {playerId, season, form, totalPoints, updatedAt} recalculé par le job compute-fantasy-scores (évite l'agrégation à chaque appel).
- [ ] Utiliser la pagination par curseur de utils/pagination (issue FOOT api-pagination-curseur).
- [ ] Cache Redis clé fantasy:players:{group}:{q}:{sort}:{cursor} TTL 60 s.
- [ ] Swagger : paramètres, schéma FantasyPlayerItem.
- [ ] Test de charge léger : 200 req/s sur la liste filtrée MID.

## ✔️ Critères d'acceptation

- [ ] Étant donné group=MID, quand je liste, alors seuls des MD/MC/MO sont renvoyés.
- [ ] Étant donné q=gav, alors Gavi est renvoyé (insensible aux accents/casse).
- [ ] Étant donné sort=form, alors tri décroissant stable par forme puis id.
- [ ] Étant donné un joueur archivé, alors il n'apparaît pas.
- [ ] Étant donné q=g (1 caractère), alors 422.

## 🧪 Tests à écrire

- [ ] Unitaire : calcul de forme sur 5 journées.
- [ ] Intégration : filtre group=MID.
- [ ] Intégration : recherche sans accents (Cubarsí / cubarsi).
- [ ] Intégration : pagination curseur stable.
- [ ] Intégration : cache Redis invalidé après compute-fantasy-scores.

## 🔗 Dépendances

À réaliser après : `API-FANT-03` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.2
- CDC Backend §3.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
