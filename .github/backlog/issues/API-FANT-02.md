> **API-FANT-02** · Données · Priorité **P0** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

src/models/fantasy.model.ts définit FantasyTeam avec formation 4-3-3/4-2-3-1/3-5-2 (il manque 4-4-2 autorisé par le DTO du CDC), des sélections libres, un champ points et computedAt mais ni statut ni version de barème. Le mobile consomme un état open/locked/scored (H-09, H-10) et le détail des points par joueur (H-11).

## ✅ Objectif

Un modèle d'équipe fantasy cohérent avec le CDC §4.4 (fantasy_teams, fantasy_selections, fantasy_gameweek_scores), indexé et migré.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `H-02` — Composition — terrain complet
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-02_composition-terrain-complet__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-02_composition-terrain-complet__phone_light.webp?raw=true' width='230' alt='H-02 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-02_composition-terrain-complet__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-02_composition-terrain-complet__phone_dark.webp?raw=true' width='230' alt='H-02 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-02_composition-terrain-complet__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-02_composition-terrain-complet__tablet_light.webp?raw=true' width='330' alt='H-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-02_composition-terrain-complet__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-02_composition-terrain-complet__tablet_dark.webp?raw=true' width='330' alt='H-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Fermeture des compositions dans » · « 1 j 04 h 12 min » · « J11 » · « ter Stegen » · « Koundé » · « Cubarsí » · « Araújo » · « Balde » · « De Jong » · « Pedri » · « Gavi » · « Yamal » · « Lewandowski » · « Raphinha » · « 11/11 » · « Équipe complète » · « Formation » · « 4-3-3 » · « · Capitaine » · « Capitaine »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-01%5D%22) · [API-FANT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-03%5D%22) · [API-FANT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-05%5D%22) · [API-FANT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-06%5D%22) · [API-FANT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-07%5D%22) · [API-FANT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-21%5D%22) · [API-FANT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-24%5D%22) · [MOB-H-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-01%5D%22) · [MOB-H-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-03%5D%22) · [MOB-H-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-04%5D%22) · [MOB-H-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-05%5D%22) · [MOB-H-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-06%5D%22) · [MOB-H-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-07%5D%22) · [MOB-H-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-08%5D%22) · [MOB-H-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-10%5D%22) · [MOB-H-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-11%5D%22) · [MOB-H-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-29%5D%22) · [MOB-H-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-30%5D%22) · [MOB-H-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-31%5D%22) · [MOB-H-32](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-32%5D%22) · [MOB-H-33](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-33%5D%22) · [MOB-H-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-34%5D%22) · [MOB-H-35](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-35%5D%22)

#### `H-03` — Composition — postes à compléter
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-03_composition-postes-a-completer__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-03_composition-postes-a-completer__phone_light.webp?raw=true' width='230' alt='H-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-03_composition-postes-a-completer__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-03_composition-postes-a-completer__phone_dark.webp?raw=true' width='230' alt='H-03 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-03_composition-postes-a-completer__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-03_composition-postes-a-completer__tablet_light.webp?raw=true' width='330' alt='H-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-03_composition-postes-a-completer__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-03_composition-postes-a-completer__tablet_dark.webp?raw=true' width='330' alt='H-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Fermeture des compositions dans » · « 1 j 04 h 12 min » · « J11 » · « ter Stegen » · « Koundé » · « Balde » · « De Jong » · « Gavi » · « Yamal » · « Raphinha » · « 7/11 » · « 4 postes à compléter » · « Formation » · « 4-3-3 » · « · Capitaine » · « Capitaine »

**Composants repérés** : `avatar`, `btn`, `card`, `empty`

</details>

**Issues liées sur ce même écran :** [API-FANT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-03%5D%22) · [API-FANT-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-04%5D%22) · [API-FANT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-05%5D%22) · [MOB-H-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-05%5D%22) · [MOB-H-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-06%5D%22) · [MOB-H-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-11%5D%22) · [MOB-H-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-12%5D%22) · [MOB-H-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-29%5D%22) · [MOB-H-33](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-33%5D%22) · [MOB-H-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-34%5D%22)

#### `H-06` — Choix du capitaine
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-06_choix-du-capitaine__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-06_choix-du-capitaine__phone_light.webp?raw=true' width='230' alt='H-06 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-06_choix-du-capitaine__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-06_choix-du-capitaine__phone_dark.webp?raw=true' width='230' alt='H-06 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-06_choix-du-capitaine__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-06_choix-du-capitaine__tablet_light.webp?raw=true' width='330' alt='H-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-06_choix-du-capitaine__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-06_choix-du-capitaine__tablet_dark.webp?raw=true' width='330' alt='H-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Fermeture des compositions dans » · « 1 j 04 h 12 min » · « J11 » · « ter Stegen » · « Koundé » · « Cubarsí » · « Araújo » · « Balde » · « De Jong » · « Pedri » · « Gavi » · « Yamal » · « Lewandowski » · « Raphinha » · « 11/11 » · « Équipe complète » · « Formation » · « 4-3-3 » · « · Capitaine » · « Capitaine »

**Composants repérés** : `avatar`, `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [MOB-H-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-06%5D%22) · [MOB-H-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-16%5D%22)

#### `H-10` — Résultat de la journée
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_light.webp?raw=true' width='230' alt='H-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_dark.webp?raw=true' width='230' alt='H-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_light.webp?raw=true' width='330' alt='H-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_dark.webp?raw=true' width='330' alt='H-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Journée 10 terminée » · « Points calculés après le coup de sifflet final » · « ter Stegen » · « 6 pts » · « Koundé » · « 8 pts » · « Cubarsí » · « Araújo » · « 2 pts » · « Balde » · « 5 pts » · « De Jong » · « 7 pts » · « Pedri » · « 9 pts » · « Gavi » · « 3 pts » · « Yamal » · « 14 pts » · « Lewandowski » · « 11 pts » · « Raphinha » · « -1 pts » · « 11/11 » · « Équipe complète » · « Formation »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-01%5D%22) · [API-FANT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-05%5D%22) · [API-FANT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-09%5D%22) · [API-FANT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-10%5D%22) · [API-FANT-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-11%5D%22) · [API-FANT-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-12%5D%22) · [API-FANT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-13%5D%22) · [API-FANT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-24%5D%22) · [API-FANT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-33%5D%22) · [MOB-H-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-01%5D%22) · [MOB-H-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-20%5D%22) · [MOB-H-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-31%5D%22) · [MOB-H-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-34%5D%22)

## 📐 Règles de gestion

- Formations autorisées (liste fermée du CDC) : '4-3-3', '4-4-2', '3-5-2', '4-2-3-1' ; la valeur par défaut reste '4-3-3'.
- Exactement 11 sélections, playerId uniques dans une équipe ; roleSlot parmi les slots de la formation (voir issue fonct-formations-validation).
- Un seul capitaine (captainPlayerId) qui doit appartenir aux sélections ; pas de vice-capitaine (non défini dans le CDC, ne pas l'inventer).
- Unicité {userId, gameweek} conservée (index existant) : une seule équipe par utilisateur et par journée.
- Le détail du score est stocké dans une collection séparée FantasyGameweekScore (teamId, gameweek, points, breakdown[], rulesVersion, provisional, computedAt) pour ne pas gonfler le document équipe ; FantasyTeam.points reste une copie dénormalisée du total.
- Pas de budget, pas de valeur de joueur, pas de mercato/transferts : ces notions n'existent pas dans le CDC et sont exclues du modèle.

## 🗄️ Données

- fantasy_teams (fantasyteams)
- fantasy_selections (embarqué)
- fantasy_gameweek_scores (nouvelle collection)

## 🛠️ Tâches

- [ ] Modifier src/models/fantasy.model.ts : enum formation ['4-3-3','4-4-2','3-5-2','4-2-3-1'], ajouter status ('open'|'locked'|'scored'), rulesVersion, submittedAt, version (compteur d'écritures) ; typer FantasyTeamDoc (remplacer model<any>).
- [ ] Ajouter un validateur Mongoose sur selections : length 11, playerIds uniques, captainPlayerId inclus.
- [ ] Créer le modèle FantasyGameweekScore dans le même fichier : teamId (ref FantasyTeam), userId, gameweek, season, points (Number entier signé), breakdown [{playerId, points, captainMultiplied:Boolean, events:[{event, count, points}]}], rulesVersion, provisional (Boolean), computedAt ; index unique {teamId:1, gameweek:1}.
- [ ] Ajouter les index {gameweek:1, points:-1} (classement de journée) et {userId:1, gameweek:-1} (historique).
- [ ] Écrire un script de migration migrations/2026xxxx-fantasy-team-status.ts : positionne status='open' sur les équipes existantes, rulesVersion=1.
- [ ] Ajouter toJSON : id, gameweek, formation, selections[{playerId, roleSlot}], captainId (alias de captainPlayerId), status, locksAt (injecté par le service), points.
- [ ] Mettre à jour le schéma Swagger FantasyTeam.

## ✔️ Critères d'acceptation

- [ ] Étant donné une équipe avec 10 sélections, quand elle est sauvegardée, alors la validation Mongoose échoue.
- [ ] Étant donné deux sélections du même joueur, alors échec de validation.
- [ ] Étant donné une formation '5-4-1', alors échec de validation (enum).
- [ ] Étant donné deux équipes du même utilisateur pour la journée 11, alors la seconde insertion lève E11000.
- [ ] Étant donné un total négatif (-1 pts joueur), alors points accepte les entiers négatifs.

## 🧪 Tests à écrire

- [ ] Unitaire : validateur selections (11, uniques, capitaine inclus).
- [ ] Unitaire : toJSON expose captainId et masque les champs internes.
- [ ] Intégration : index unique {userId, gameweek}.
- [ ] Intégration : migration idempotente (deux exécutions, même résultat).
- [ ] Intégration : FantasyGameweekScore unique par {teamId, gameweek}.

## 🔗 Dépendances

À réaliser après : `API-FANT-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §4.4
- CDC Backend §4.7
- CDC Backend §5 (DTO CreateFantasyTeamDto)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
