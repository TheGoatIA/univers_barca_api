> **API-GOAT-25** · API · Priorité **P1** · Taille **S** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Les écrans doivent distinguer proprement les cas d'erreur : joueur manquant (G-01 bouton Comparer inactif tant que A et B ne sont pas choisis), même joueur deux fois, joueur introuvable, déjà voté (G-07). Le contrat d'erreur doit être homogène avec le format existant.

## ✅ Objectif

Un jeu de validateurs Joi et de codes d'erreur stables, documentés et testés.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `G-01` — Sélection — aucun joueur
_Module : Comparateur GOAT_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-01_selection-aucun-joueur__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-01_selection-aucun-joueur__phone_light.webp?raw=true' width='230' alt='G-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-01_selection-aucun-joueur__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-01_selection-aucun-joueur__phone_dark.webp?raw=true' width='230' alt='G-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-01_selection-aucun-joueur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-01_selection-aucun-joueur__tablet_light.webp?raw=true' width='330' alt='G-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-01_selection-aucun-joueur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-01_selection-aucun-joueur__tablet_dark.webp?raw=true' width='330' alt='G-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Comparateur GOAT » · « Compare deux joueurs de l’histoire du club et donne ton avis. Aucun verdict n’est imposé : seule la communauté décide. » · « Choisir le joueur A » · « Choisir le joueur B » · « Duels populaires » · « vs » · « Messi · Xavi » · « 12 480 votes » · « Ronaldinho · Iniesta » · « 8 210 votes » · « Cruyff · Puyol » · « 3 960 votes » · « Comparer »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-GOAT-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-04%5D%22) · [API-GOAT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-05%5D%22) · [API-GOAT-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-16%5D%22) · [API-GOAT-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-18%5D%22) · [API-GOAT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-19%5D%22) · [API-GOAT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-22%5D%22) · [MOB-G-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-02%5D%22) · [MOB-G-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-03%5D%22) · [MOB-G-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-04%5D%22) · [MOB-G-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-05%5D%22) · [MOB-G-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-08%5D%22) · [MOB-G-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-15%5D%22) · [MOB-G-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-16%5D%22) · [MOB-G-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-17%5D%22)

#### `G-03` — Sélecteur de joueur
_Module : Comparateur GOAT_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-03_selecteur-de-joueur__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-03_selecteur-de-joueur__phone_light.webp?raw=true' width='230' alt='G-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-03_selecteur-de-joueur__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-03_selecteur-de-joueur__phone_dark.webp?raw=true' width='230' alt='G-03 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-03_selecteur-de-joueur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-03_selecteur-de-joueur__tablet_light.webp?raw=true' width='330' alt='G-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-03_selecteur-de-joueur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-03_selecteur-de-joueur__tablet_dark.webp?raw=true' width='330' alt='G-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Comparateur GOAT » · « Compare deux joueurs de l’histoire du club et donne ton avis. Aucun verdict n’est imposé : seule la communauté décide. » · « Messi » · « Attaquant » · « Joueur A » · « Choisir le joueur B » · « Duels populaires » · « vs » · « Messi · Xavi » · « 12 480 votes » · « Ronaldinho · Iniesta » · « 8 210 votes » · « Cruyff · Puyol » · « 3 960 votes » · « Comparer » · « Xa » · « Tous » · « Légendes » · « Effectif actuel » · « Xavi Hernández » · « Milieu · Espagne » · « Andrés Iniesta » · « Carles Puyol » · « Défenseur · Espagne »

**Composants repérés** : `btn`, `card`, `chip`, `search`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-GOAT-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-04%5D%22) · [API-GOAT-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-18%5D%22) · [API-GOAT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-19%5D%22) · [MOB-G-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-03%5D%22) · [MOB-G-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-04%5D%22) · [MOB-G-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-07%5D%22) · [MOB-G-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-08%5D%22) · [MOB-G-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-16%5D%22) · [MOB-G-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-17%5D%22)

#### `G-07` — Vote déjà effectué — erreur 409
_Module : Comparateur GOAT_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-07_vote-deja-effectue-erreur-409__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-07_vote-deja-effectue-erreur-409__phone_light.webp?raw=true' width='230' alt='G-07 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-07_vote-deja-effectue-erreur-409__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-07_vote-deja-effectue-erreur-409__phone_dark.webp?raw=true' width='230' alt='G-07 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-07_vote-deja-effectue-erreur-409__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-07_vote-deja-effectue-erreur-409__tablet_light.webp?raw=true' width='330' alt='G-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-07_vote-deja-effectue-erreur-409__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-07_vote-deja-effectue-erreur-409__tablet_dark.webp?raw=true' width='330' alt='G-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Messi vs Xavi » · « Messi » · « Xavi » · « Résultat de la communauté » · « 12 481 votes · tu as voté pour Messi » · « 71 % » · « 29 % » · « Déjà voté cette semaine » · « Tu pourras modifier ton vote dans » · « 3 jours » · « . Merci de ta participation ! »

**Composants repérés** : `btn`, `card`, `modal`

</details>

**Issues liées sur ce même écran :** [API-GOAT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-01%5D%22) · [API-GOAT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-06%5D%22) · [API-GOAT-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-08%5D%22) · [API-GOAT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-09%5D%22) · [API-GOAT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-10%5D%22) · [API-GOAT-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-12%5D%22) · [API-GOAT-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-17%5D%22) · [API-GOAT-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-18%5D%22) · [API-GOAT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-19%5D%22) · [API-GOAT-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-20%5D%22) · [API-GOAT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-24%5D%22) · [MOB-G-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-01%5D%22) · [MOB-G-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-02%5D%22) · [MOB-G-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-03%5D%22) · [MOB-G-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-04%5D%22) · [MOB-G-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-11%5D%22) · [MOB-G-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-13%5D%22) · [MOB-G-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-16%5D%22) · [MOB-G-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-17%5D%22)

## 📐 Règles de gestion

- Codes : GOAT_SAME_PLAYER (400), GOAT_PLAYER_NOT_FOUND (404), GOAT_PLAYER_NOT_VOTABLE (409, joueur archivé), GOAT_ALREADY_VOTED (409, details.canChangeAt, retryAfterSeconds), GOAT_ACCOUNT_NOT_ELIGIBLE (403), GOAT_CRITERION_DISABLED (422), GOAT_OVERALL_REQUIRED (409), GOAT_DUEL_HIDDEN (404), VALIDATION_ERROR (422).
- Format : {success:false,error:{code,message,details,traceId}} avec traceId du requestContext.
- Paramètres a/b/opponentId : ObjectId 24 hex ou slug ^[a-z0-9-]{2,60}$, résolus vers un id ; tout autre format → 422.
- Les erreurs de validation listent les champs en erreur dans details[] {field, message}.
- Aucun détail interne (stack, requête Mongo) n'est exposé en production.
- Le contrat est testé via le schéma OpenAPI (réponses d'erreur déclarées).

## 🛠️ Tâches

- [ ] Créer src/validators/goat.validator.ts (compareSchema, voteSchema, selectorSchema, popularSchema, mineSchema).
- [ ] Définir les classes d'erreur GoatError dans src/utils/errors.ts avec codes et statuts.
- [ ] Résolution slug → id dans goat.service.resolvePlayer.
- [ ] Brancher validate(...) sur toutes les routes goat.routes.ts.
- [ ] Déclarer les réponses d'erreur dans Swagger (components.responses).
- [ ] Test de conformité de chaque code d'erreur.
- [ ] Vérifier la présence de traceId dans toutes les erreurs.
- [ ] Documenter la table des erreurs dans docs/GOAT.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné a=b, alors 400 GOAT_SAME_PLAYER.
- [ ] Étant donné un slug valide, alors le joueur est résolu.
- [ ] Étant donné un id mal formé, alors 422 avec details[] indiquant le champ.
- [ ] Étant donné une erreur 409 GOAT_ALREADY_VOTED, alors details contient canChangeAt.
- [ ] Étant donné toute erreur, alors traceId est présent.

## 🧪 Tests à écrire

- [ ] Unitaire : chaque schéma Joi.
- [ ] Intégration : codes d'erreur (8 cas).
- [ ] Intégration : slug vs id.
- [ ] Contrat OpenAPI des erreurs.

## 🔗 Dépendances

À réaliser après : `API-GOAT-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §11.1
- CDC Backend §5.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
