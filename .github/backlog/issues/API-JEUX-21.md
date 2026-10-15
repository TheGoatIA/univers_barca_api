> **API-JEUX-21** · API · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

E-13 : onglets Amis / Monde, périodes Cette semaine / Ce mois / Depuis toujours, lignes « Sofía R. 1 840 », ellipse « · · · » et ligne « Boris T. Toi 640 ». E-14 : classement de la ligue « Les Culés du bureau ». Le classement est alimenté par le ledger de points (quiz et jeux).

## ✅ Objectif

Un endpoint de classement paginé et contextuel (top N + voisinage de l'utilisateur) pour le monde et pour une ligue d'amis.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `E-13` — Classement mondial
_Module : Quiz adaptatif_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-13_classement-mondial__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-13_classement-mondial__phone_light.webp?raw=true' width='230' alt='E-13 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-13_classement-mondial__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-13_classement-mondial__phone_dark.webp?raw=true' width='230' alt='E-13 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-13_classement-mondial__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-13_classement-mondial__tablet_light.webp?raw=true' width='330' alt='E-13 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-13_classement-mondial__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-13_classement-mondial__tablet_dark.webp?raw=true' width='330' alt='E-13 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Classements » · « Amis » · « Monde » · « Cette semaine » · « Ce mois » · « Depuis toujours » · « Sofía R. » · « 1 840 » · « Mamadou D. » · « 2 120 » · « Kevin M. » · « 1 710 » · « Lucía F. » · « 1 580 » · « Aïcha N. » · « 1 495 » · « Yann M. » · « 1 410 » · « · · · » · « Boris T. » · « Toi »

**Composants repérés** : `avatar`, `card`, `chip`

</details>

**Issues liées sur ce même écran :** [API-JEUX-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-22%5D%22) · [API-JEUX-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-32%5D%22) · [API-JEUX-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-33%5D%22) · [API-JEUX-37](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-37%5D%22) · [MOB-E-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-02%5D%22) · [MOB-E-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-03%5D%22) · [MOB-E-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-05%5D%22) · [MOB-E-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-25%5D%22) · [MOB-E-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-26%5D%22) · [MOB-E-32](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-32%5D%22) · [MOB-E-33](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-33%5D%22) · [MOB-E-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-34%5D%22)

#### `E-14` — Classement entre amis
_Module : Quiz adaptatif_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-14_classement-entre-amis__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-14_classement-entre-amis__phone_light.webp?raw=true' width='230' alt='E-14 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-14_classement-entre-amis__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-14_classement-entre-amis__phone_dark.webp?raw=true' width='230' alt='E-14 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-14_classement-entre-amis__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-14_classement-entre-amis__tablet_light.webp?raw=true' width='330' alt='E-14 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-14_classement-entre-amis__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-14_classement-entre-amis__tablet_dark.webp?raw=true' width='330' alt='E-14 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Classements » · « Amis » · « Monde » · « Ligue « Les Culés du bureau » » · « 6 membres · code » · « BARCA-4X7Q » · « Aïcha Ngono » · « 1 420 » · « Mamadou Diallo » · « 1 310 » · « Boris T. » · « Toi » · « 1 180 » · « Lucía Fernández » · « Kevin Mballa »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [API-JEUX-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-22%5D%22) · [API-JEUX-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-23%5D%22) · [API-JEUX-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-24%5D%22) · [MOB-E-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-25%5D%22) · [MOB-E-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-27%5D%22) · [MOB-E-33](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-33%5D%22) · [MOB-E-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-34%5D%22)

#### `E-01` — Hub du quiz
_Module : Quiz adaptatif_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-01_hub-du-quiz__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-01_hub-du-quiz__phone_light.webp?raw=true' width='230' alt='E-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-01_hub-du-quiz__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-01_hub-du-quiz__phone_dark.webp?raw=true' width='230' alt='E-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-01_hub-du-quiz__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-01_hub-du-quiz__tablet_light.webp?raw=true' width='330' alt='E-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-01_hub-du-quiz__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-01_hub-du-quiz__tablet_dark.webp?raw=true' width='330' alt='E-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Quiz » · « Ton niveau » · « Culé » · « 70 % de réussite sur les 10 dernières réponses · Passe au niveau » · « Socio » · « à 75 % » · « Quiz du jour » · « 10 questions · +150 pts max · 1 fois par jour » · « Jouer » · « Entraînement libre » · « Illimité · sans impact sur ton niveau » · « Classements » · « Amis, monde, cette semaine » · « Les 5 paliers » · « 1. Supporter occasionnel » · « 2. Culé » · « Actuel » · « 3. Socio » · « 4. Historien du Barça » · « 5. La Masia »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-JEUX-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-12%5D%22) · [API-JEUX-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-14%5D%22) · [API-JEUX-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-18%5D%22) · [API-JEUX-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-32%5D%22) · [API-JEUX-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-34%5D%22) · [API-JEUX-35](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-35%5D%22) · [MOB-E-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-01%5D%22) · [MOB-E-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-08%5D%22) · [MOB-E-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-09%5D%22) · [MOB-E-33](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-33%5D%22) · [MOB-E-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-34%5D%22)

## 📐 Règles de gestion

- Paramètres : scope=world|league, leagueId (obligatoire si scope=league), period=week|month|all (défaut week), limit (défaut 50, max 100).
- Réponse : top (limit lignes {rank, userId, displayName abrégé « Prénom N. », avatarUrl?, points, isMe}), me {rank, points} (même hors top), neighbors (3 lignes avant/après l'utilisateur si rank > limit, séparées par l'ellipse côté client).
- Source de points : somme PointsLedger sur la période (weekKey/monthKey) pour sources quiz+guess ; égalité départagée par date du dernier point (le plus ancien d'abord) puis userId.
- Semaine ISO du lundi 00:00 au dimanche 23:59:59 Europe/Madrid ; classement hebdo réinitialisé automatiquement par le changement de weekKey.
- Confidentialité : displayName abrégé (nom de famille réduit à l'initiale), pas d'e-mail, pas de localisation ; un utilisateur supprimé disparaît du classement ; un utilisateur modéré/banni (module modération) est exclu.
- scope=league : réservé aux membres de la ligue (403 sinon) ; classement hebdomadaire par défaut.
- Cache Redis (voir issue dédiée) ; Cache-Control: private, max-age=30.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/quiz/leaderboard?scope=world&period=week&limit=50` | Classement mondial ou de ligue | scope, period, leagueId, limit | {success:true,data:{period:'week',top:[{rank:1,displayName:'Sofía R.',points:1840,isMe:false}],me:{rank:340,points:640},neighbors:[…]}} |

## 🛠️ Tâches

- [ ] Route GET /quiz/leaderboard + validateur Joi (scope, period, leagueId, limit).
- [ ] Service leaderboard.service.ts : getTop(scope, period, limit), getRank(userId, …), getNeighbors(userId, …).
- [ ] Implémenter la lecture Redis ZREVRANGE/ZREVRANK avec repli agrégation Mongo si clé absente.
- [ ] Fusionner les profils (displayName, avatar) via un multi-get mis en cache 5 min.
- [ ] Mapper LeaderboardDto + formatage du nom abrégé (src/utils/displayName.ts).
- [ ] Exclure les comptes suspendus (User.status) et supprimés.
- [ ] Swagger : LeaderboardResponse (200, 401, 403, 404).
- [ ] Gérer les égalités avec un score composite (points * 1e10 + (1e10 - lastAtEpoch)).

## ✔️ Critères d'acceptation

- [ ] Étant donné 1 000 joueurs, alors top contient 50 lignes triées et me.rank est correct.
- [ ] Étant donné ma position 340 (640 pts), alors neighbors contient les voisins de rang 337..343.
- [ ] Étant donné deux joueurs à égalité, alors celui qui a atteint le score en premier est devant.
- [ ] Étant donné scope=league sans en être membre, alors 403.
- [ ] Étant donné un nouveau lundi Madrid, alors le classement hebdomadaire repart de zéro.
- [ ] Étant donné un nom « Sofía Ramírez », alors displayName='Sofía R.'.

## 🧪 Tests à écrire

- [ ] Unitaire : abréviation de nom (accents, nom composé).
- [ ] Intégration : tri + égalité.
- [ ] Intégration : période week/month/all.
- [ ] Intégration : 403 ligue.
- [ ] Intégration : exclusion d'un compte banni.
- [ ] Performance : réponse < 50 ms avec Redis.

## 🔗 Dépendances

À réaliser après : `API-JEUX-20` · `API-JEUX-23` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.4
- CDC Global §2.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
