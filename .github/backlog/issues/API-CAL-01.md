> **API-CAL-01** · Données · Priorité **P0** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

Les filtres de L-01 (Toutes / Liga / Ligue des champions / Coupe du Roi / Amicaux) et de L-08 (Liga, Ligue des champions, Coupe du Roi, Supercoupe, Matchs amicaux ; « Équipe première uniquement », « Inclure l'équipe féminine », « Inclure Barça Atlètic ») nécessitent un code stable de compétition et un périmètre d'équipe, absents des modèles actuels (Competition n'a que name/type, Team que name/shortName/type).

## ✅ Objectif

Étendre Competition et Team pour que toute requête calendrier et tout export filtrent par codes stables plutôt que par libellés.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `L-01` — Liste des matchs à venir
_Module : Calendrier et export agenda_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__phone_light.webp?raw=true' width='230' alt='L-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__phone_dark.webp?raw=true' width='230' alt='L-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__tablet_light.webp?raw=true' width='330' alt='L-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__tablet_dark.webp?raw=true' width='330' alt='L-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Calendrier » · « Toutes » · « Liga » · « Ligue des champions » · « Coupe du Roi » · « Amicaux » · « Octobre – novembre 2026 » · « oct. » · « FC Barcelone » · « Real Madrid » · « Exporté » · « Bayern Munich » · « nov. » · « Atlético Madrid » · « Villarreal » · « Non inclus » · « Séville »

**Composants repérés** : `card`, `chip`

</details>

**Issues liées sur ce même écran :** [API-CAL-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-04%5D%22) · [API-CAL-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-18%5D%22) · [API-CAL-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-22%5D%22) · [API-CAL-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-23%5D%22) · [API-FOOT-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-02%5D%22) · [API-FOOT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-06%5D%22) · [API-FOOT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-07%5D%22) · [API-FOOT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-13%5D%22) · [API-FOOT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-21%5D%22) · [API-FOOT-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-30%5D%22) · [API-FOOT-50](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-50%5D%22) · [API-FOOT-53](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-53%5D%22) · [MOB-L-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-01%5D%22) · [MOB-L-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-02%5D%22) · [MOB-L-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-03%5D%22) · [MOB-L-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-04%5D%22) · [MOB-L-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-05%5D%22) · [MOB-L-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-06%5D%22) · [MOB-L-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-07%5D%22) · [MOB-L-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-11%5D%22) · [MOB-L-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-27%5D%22) · [MOB-L-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-28%5D%22) · [MOB-L-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-29%5D%22)

#### `L-08` — Export — filtres par compétition
_Module : Calendrier et export agenda_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-08_export-filtres-par-competition__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-08_export-filtres-par-competition__phone_light.webp?raw=true' width='230' alt='L-08 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-08_export-filtres-par-competition__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-08_export-filtres-par-competition__phone_dark.webp?raw=true' width='230' alt='L-08 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-08_export-filtres-par-competition__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-08_export-filtres-par-competition__tablet_light.webp?raw=true' width='330' alt='L-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-08_export-filtres-par-competition__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-08_export-filtres-par-competition__tablet_dark.webp?raw=true' width='330' alt='L-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Ajouter à mon agenda » · « S’abonner » · « Mise à jour automatique » · « Recommandé » · « Ton agenda se met à jour tout seul en cas de report ou de changement d'horaire (sous 24 h). Lien webcal:// personnel. » · « S’abonner (mise à jour automatique) » · « Télécharger » · « Fichier .ics ponctuel » · « Un fichier téléchargé n'est pas mis à jour automatiquement. Préfère l'abonnement pour un suivi continu. » · « Télécharger ce calendrier » · « Compétitions à exporter » · « Liga » · « Ligue des champions » · « Coupe du Roi » · « Supercoupe » · « Matchs amicaux » · « Équipe première uniquement » · « Inclure l’équipe féminine » · « Inclure Barça Atlètic » · « Appliquer · 24 matchs »

**Composants repérés** : `btn`, `card`, `sheet`, `toggle`

</details>

**Issues liées sur ce même écran :** [API-CAL-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-12%5D%22) · [API-CAL-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-16%5D%22) · [API-CAL-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-22%5D%22) · [MOB-L-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-01%5D%22) · [MOB-L-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-14%5D%22) · [MOB-L-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-16%5D%22) · [MOB-L-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-28%5D%22) · [MOB-L-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-29%5D%22)

## 📐 Règles de gestion

- Competition reçoit `code` (enum `liga`, `champions`, `copa`, `supercopa`, `friendly`, unique, indexé) en plus de `name` et `type` ('league'|'cup'|'friendly').
- Team reçoit `squad` (enum `first`, `women`, `atletic`, défaut `first`) ; seule l'équipe première est exposée par défaut (CDC Global §2.9 : équipes féminine/réserve « selon disponibilité des données »).
- Un Match est rattaché au périmètre du club via homeTeamId/awayTeamId : le filtre `squads` s'applique sur celle des deux équipes qui est le FC Barcelone (identifiée par `Team.isOwnClub=true`).
- Valeur par défaut des filtres : `competitions=all`, `squads=first` — correspond à « Équipe première uniquement » coché dans L-08.
- Migration idempotente : les compétitions existantes sont mappées par nom (La Liga→liga, UEFA Champions League→champions, Copa del Rey→copa, Supercopa de España→supercopa, type friendly→friendly).

## 🔄 Comportement et états

- Compétition inconnue lors d'un import : `code` absent, la compétition n'apparaît que sous le filtre « Toutes ».
- Un match d'une équipe `women` n'est jamais retourné si `squads` ne le demande pas explicitement.

## 🗄️ Données

- Competition.code
- Team.squad
- Team.isOwnClub

## 🛠️ Tâches

- [ ] Modifier src/models/football.model.ts : ajouter `code` (Competition) et `squad` + `isOwnClub` (Team) avec index { code:1 } unique sparse.
- [ ] Créer src/utils/competition-codes.ts : const COMPETITION_CODES et type CompetitionCode, helper parseCompetitionsParam('liga,champions').
- [ ] Créer scripts/migrations/2026-10-competition-code.ts (idempotent, log du nombre de documents mis à jour).
- [ ] Mettre à jour docs/DATABASE.md (nouveaux champs et index).
- [ ] Ajouter un Joi custom `competitionList` dans src/validators/calendar.validator.ts (liste séparée par virgules, max 5 valeurs, rejet des codes inconnus avec détails).
- [ ] Mettre à jour la seed de dev (si présente) avec 5 compétitions et 3 équipes de périmètres différents.
- [ ] Exporter les types dans src/models/index.ts.

## ✔️ Critères d'acceptation

- [ ] Étant donné une base contenant 'La Liga', quand la migration est exécutée deux fois, alors Competition.code vaut 'liga' et aucun doublon n'est créé.
- [ ] Étant donné une équipe sans squad, quand elle est lue, alors squad vaut 'first'.
- [ ] Étant donné `competitions=liga,foo`, quand la validation Joi s'exécute, alors la réponse est 422 avec details listant 'foo' comme code inconnu.
- [ ] Étant donné deux compétitions avec le même code, quand on tente de sauvegarder la seconde, alors une erreur d'unicité est levée.

## 🧪 Tests à écrire

- [ ] unit: parseCompetitionsParam('liga,champions') retourne ['liga','champions']
- [ ] unit: parseCompetitionsParam('') retourne tous les codes
- [ ] unit: Joi competitionList rejette plus de 5 valeurs
- [ ] integration: la migration est idempotente sur une base de test (mongodb-memory-server)

## 📚 Références

- CDC Global §2.9 / §2.16.1
- CDC Backend §3.7

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
