> **API-JEUX-24** · API · Priorité **P1** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

E-15 « Inviter des amis » (code, Copier le code, Lien, Partager l'invitation) ; E-16 « Rejoindre une ligue » (saisie BARCA-, aperçu « Les Culés du bureau · Créée par Aïcha · 6 membres », bouton Rejoindre) ; E-14 classement de ligue.

## ✅ Objectif

Les endpoints CRUD minimaux d'une ligue privée avec aperçu avant adhésion et lien d'invitation.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `E-14` — Classement entre amis
_Module : Quiz adaptatif_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-14_classement-entre-amis__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-14_classement-entre-amis__phone_light.webp?raw=true' width='230' alt='E-14 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-14_classement-entre-amis__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-14_classement-entre-amis__phone_dark.webp?raw=true' width='230' alt='E-14 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-14_classement-entre-amis__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-14_classement-entre-amis__tablet_light.webp?raw=true' width='330' alt='E-14 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-14_classement-entre-amis__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-14_classement-entre-amis__tablet_dark.webp?raw=true' width='330' alt='E-14 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Classements » · « Amis » · « Monde » · « Ligue « Les Culés du bureau » » · « 6 membres · code » · « BARCA-4X7Q » · « Aïcha Ngono » · « 1 420 » · « Mamadou Diallo » · « 1 310 » · « Boris T. » · « Toi » · « 1 180 » · « Lucía Fernández » · « Kevin Mballa »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [API-JEUX-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-21%5D%22) · [API-JEUX-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-22%5D%22) · [API-JEUX-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-23%5D%22) · [MOB-E-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-25%5D%22) · [MOB-E-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-27%5D%22) · [MOB-E-33](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-33%5D%22) · [MOB-E-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-34%5D%22)

#### `E-15` — Inviter des amis
_Module : Quiz adaptatif_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-15_inviter-des-amis__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-15_inviter-des-amis__phone_light.webp?raw=true' width='230' alt='E-15 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-15_inviter-des-amis__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-15_inviter-des-amis__phone_dark.webp?raw=true' width='230' alt='E-15 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-15_inviter-des-amis__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-15_inviter-des-amis__tablet_light.webp?raw=true' width='330' alt='E-15 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-15_inviter-des-amis__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-15_inviter-des-amis__tablet_dark.webp?raw=true' width='330' alt='E-15 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Inviter » · « Défie tes amis » · « Crée ta ligue privée : un classement hebdomadaire rien qu’entre vous. » · « Ton code d’invitation » · « Copier le code » · « Lien » · « Partager l’invitation »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-JEUX-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-23%5D%22) · [MOB-E-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-28%5D%22) · [MOB-E-33](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-33%5D%22) · [MOB-E-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-34%5D%22)

#### `E-16` — Rejoindre avec un code
_Module : Quiz adaptatif_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-16_rejoindre-avec-un-code__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-16_rejoindre-avec-un-code__phone_light.webp?raw=true' width='230' alt='E-16 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-16_rejoindre-avec-un-code__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-16_rejoindre-avec-un-code__phone_dark.webp?raw=true' width='230' alt='E-16 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-16_rejoindre-avec-un-code__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-16_rejoindre-avec-un-code__tablet_light.webp?raw=true' width='330' alt='E-16 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-16_rejoindre-avec-un-code__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-16_rejoindre-avec-un-code__tablet_dark.webp?raw=true' width='330' alt='E-16 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Rejoindre une ligue » · « Saisis le code reçu d’un ami ou ouvre son lien d’invitation. » · « Code d’invitation » · « BARCA- » · « Les Culés du bureau » · « Créée par Aïcha · 6 membres » · « Rejoindre la ligue »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [API-JEUX-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-23%5D%22) · [MOB-E-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-29%5D%22) · [MOB-E-33](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-33%5D%22) · [MOB-E-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-34%5D%22)

## 📐 Règles de gestion

- POST /quiz/leagues {name} → 201 {id, name, code, inviteUrl} ; limites : 3 ligues créées par utilisateur (409 LEAGUE_LIMIT).
- GET /quiz/leagues/preview/:code → {name, ownerName abrégé, memberCount} sans liste de membres ; 404 si code inconnu ; rate limit 20 req/min/utilisateur (anti-énumération des codes).
- POST /quiz/leagues/join {code} → 200 ; 409 LEAGUE_ALREADY_MEMBER ; 409 LEAGUE_FULL ; 404 code invalide ; la jonction est idempotente.
- GET /quiz/leagues/mine → ligues avec rang actuel de l'utilisateur ; DELETE /quiz/leagues/:id/members/me pour quitter.
- inviteUrl = https://univers-barca.app/invite/{code} (domaine configurable LEAGUE_INVITE_BASE_URL) ; le lien ouvre l'app via lien universel et préremplit E-16.
- La liste des membres n'est visible que par les membres (noms abrégés + points).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/quiz/leagues` | Crée une ligue | {name:'Les Culés du bureau'} | {success:true,data:{id:'…',name:'Les Culés du bureau',code:'BARCA-4X7Q',inviteUrl:'https://univers-barca.app/invite/BARCA-4X7Q'}} |
| `GET` | `/api/v1/quiz/leagues/preview/:code` | Aperçu avant adhésion | — | {success:true,data:{name:'Les Culés du bureau',ownerName:'Aïcha N.',memberCount:6}} |
| `POST` | `/api/v1/quiz/leagues/join` | Rejoint une ligue | {code:'BARCA-4X7Q'} | {success:true,data:{id:'…',memberCount:7}} |
| `GET` | `/api/v1/quiz/leagues/mine` | Mes ligues | — | {success:true,data:[{id:'…',name:'…',memberCount:6,myRank:3}]} |

## 🛠️ Tâches

- [ ] Routes dans src/routes/quiz-leagues.routes.ts + contrôleur + service quiz-league.service.ts.
- [ ] Validateurs Joi (name, code regex).
- [ ] Opération d'adhésion atomique ($addToSet + $inc memberCount avec filtre memberCount < maxMembers).
- [ ] Rate limiter 'leaguePreviewLimiter' (20/min).
- [ ] Intégration avec leaderboard.redis (ajout/retrait des ZSET de ligue au join/leave, backfill des points de la semaine).
- [ ] Génération d'inviteUrl et configuration LEAGUE_INVITE_BASE_URL.
- [ ] Swagger : tags Quiz, schémas QuizLeagueCreate/Preview/Join.
- [ ] Évènement de notification 'league.member_joined' vers le propriétaire (via module NOTIF).

## ✔️ Critères d'acceptation

- [ ] Étant donné un nom valide, quand je crée une ligue, alors 201 avec un code BARCA-XXXX.
- [ ] Étant donné le code d'une ligue, quand j'appelle preview, alors j'obtiens nom, créateur et memberCount sans liste des membres.
- [ ] Étant donné ma deuxième requête join sur la même ligue, alors 409 LEAGUE_ALREADY_MEMBER.
- [ ] Étant donné une ligue pleine, alors 409 LEAGUE_FULL.
- [ ] Étant donné 21 previews en 1 minute, alors 429.
- [ ] Étant donné que je quitte la ligue, alors je disparais du classement de ligue.

## 🧪 Tests à écrire

- [ ] Intégration : création → preview → join → classement.
- [ ] Intégration : courses sur la dernière place (2 joins simultanés).
- [ ] Sécurité : énumération de codes limitée.
- [ ] Intégration : quitter et rejoindre.
- [ ] Contrat Swagger.

## 🔗 Dépendances

À réaliser après : `API-JEUX-23` · `API-JEUX-21` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.4
- CDC Global §2.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
