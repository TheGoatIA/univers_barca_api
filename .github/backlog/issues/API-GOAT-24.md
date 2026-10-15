> **API-GOAT-24** · API · Priorité **P1** · Taille **S** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Pour afficher « tu as voté pour Messi » dès l'ouverture d'un duel (G-06/G-07) ou lister ses duels déjà votés, le client a besoin de la liste des votes de l'utilisateur avec la date à laquelle il pourra les modifier.

## ✅ Objectif

Un endpoint privé de consultation de ses propres votes.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `G-02` — Sélection — un joueur choisi
_Module : Comparateur GOAT_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-02_selection-un-joueur-choisi__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-02_selection-un-joueur-choisi__phone_light.webp?raw=true' width='230' alt='G-02 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-02_selection-un-joueur-choisi__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-02_selection-un-joueur-choisi__phone_dark.webp?raw=true' width='230' alt='G-02 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-02_selection-un-joueur-choisi__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-02_selection-un-joueur-choisi__tablet_light.webp?raw=true' width='330' alt='G-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-02_selection-un-joueur-choisi__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-02_selection-un-joueur-choisi__tablet_dark.webp?raw=true' width='330' alt='G-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Comparateur GOAT » · « Compare deux joueurs de l’histoire du club et donne ton avis. Aucun verdict n’est imposé : seule la communauté décide. » · « Messi » · « Attaquant » · « Joueur A » · « Choisir le joueur B » · « Duels populaires » · « vs » · « Messi · Xavi » · « 12 480 votes » · « Ronaldinho · Iniesta » · « 8 210 votes » · « Cruyff · Puyol » · « 3 960 votes » · « Comparer »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-GOAT-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-04%5D%22) · [API-GOAT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-05%5D%22) · [API-GOAT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-19%5D%22) · [MOB-G-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-04%5D%22) · [MOB-G-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-06%5D%22) · [MOB-G-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-08%5D%22) · [MOB-G-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-17%5D%22)

#### `G-07` — Vote déjà effectué — erreur 409
_Module : Comparateur GOAT_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-07_vote-deja-effectue-erreur-409__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-07_vote-deja-effectue-erreur-409__phone_light.webp?raw=true' width='230' alt='G-07 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-07_vote-deja-effectue-erreur-409__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-07_vote-deja-effectue-erreur-409__phone_dark.webp?raw=true' width='230' alt='G-07 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-07_vote-deja-effectue-erreur-409__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-07_vote-deja-effectue-erreur-409__tablet_light.webp?raw=true' width='330' alt='G-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-07_vote-deja-effectue-erreur-409__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-07_vote-deja-effectue-erreur-409__tablet_dark.webp?raw=true' width='330' alt='G-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Messi vs Xavi » · « Messi » · « Xavi » · « Résultat de la communauté » · « 12 481 votes · tu as voté pour Messi » · « 71 % » · « 29 % » · « Déjà voté cette semaine » · « Tu pourras modifier ton vote dans » · « 3 jours » · « . Merci de ta participation ! »

**Composants repérés** : `btn`, `card`, `modal`

</details>

**Issues liées sur ce même écran :** [API-GOAT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-01%5D%22) · [API-GOAT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-06%5D%22) · [API-GOAT-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-08%5D%22) · [API-GOAT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-09%5D%22) · [API-GOAT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-10%5D%22) · [API-GOAT-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-12%5D%22) · [API-GOAT-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-17%5D%22) · [API-GOAT-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-18%5D%22) · [API-GOAT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-19%5D%22) · [API-GOAT-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-20%5D%22) · [API-GOAT-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-25%5D%22) · [MOB-G-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-01%5D%22) · [MOB-G-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-02%5D%22) · [MOB-G-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-03%5D%22) · [MOB-G-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-04%5D%22) · [MOB-G-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-11%5D%22) · [MOB-G-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-13%5D%22) · [MOB-G-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-16%5D%22) · [MOB-G-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-17%5D%22)

## 📐 Règles de gestion

- Réponse paginée par curseur : [{pairKey, playerA, playerB, choice, criterion, castAt, lastChangedAt, canChangeAt, canChangeNow}] triée par lastChangedAt décroissant (limit 20, max 50).
- Filtre optionnel pairKey ou a/b pour récupérer le vote d'un duel précis.
- Uniquement les votes de l'appelant (userId du jeton) ; aucun paramètre userId accepté.
- Cache-Control: private, no-store.
- Les votes invalidés par un admin n'apparaissent pas.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/goat/votes/mine?limit=20` | Mes votes GOAT | limit, cursor, a, b | {success:true,data:{items:[{pairKey:'…',choice:'a',castAt:'…',canChangeAt:'…',canChangeNow:false}],nextCursor:null}} |

## 🛠️ Tâches

- [ ] Route GET /goat/votes/mine dans goat.routes.ts (protect, userOnly).
- [ ] Service goat-vote.service.listMyVotes avec index {userId:1,lastChangedAt:-1}.
- [ ] Calcul canChangeAt via vote-rule.
- [ ] Lookup minimal des noms de joueurs.
- [ ] Validateur Joi (limit, cursor, a, b).
- [ ] Mapper MyGoatVoteDto.
- [ ] Swagger : MyGoatVote.
- [ ] Tests de pagination.

## ✔️ Critères d'acceptation

- [ ] Étant donné 3 votes, alors la liste contient 3 éléments triés du plus récent au plus ancien.
- [ ] Étant donné mon vote d'il y a 4 jours, alors canChangeNow=false et canChangeAt = lastChangedAt + 7 j.
- [ ] Étant donné a et b, alors seul le vote de ce duel est retourné.
- [ ] Étant donné une tentative d'utiliser ?userId=autre, alors le paramètre est ignoré/refusé (422).
- [ ] Étant donné aucun jeton, alors 401.

## 🧪 Tests à écrire

- [ ] Intégration : liste et tri.
- [ ] Intégration : filtre par duel.
- [ ] Sécurité : isolation par utilisateur.
- [ ] Unitaire : canChangeNow.

## 🔗 Dépendances

À réaliser après : `API-GOAT-09` · `API-GOAT-08` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.2
- CDC Global §2.6

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
