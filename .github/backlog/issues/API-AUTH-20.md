> **API-AUTH-20** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Q-09 : « Un code de vérification sera envoyé à ta nouvelle adresse », champs « Nouvel e-mail » et « Mot de passe », bouton « Envoyer le code ». B-09 permet aussi « Modifier l'adresse e-mail » avant vérification.

## ✅ Objectif

Changer l'e-mail de façon sûre : l'ancienne adresse reste valide tant que la nouvelle n'est pas confirmée.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `Q-09` — Changer l’e-mail
_Module : Paramètres et compte_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-09_changer-l-e-mail__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-09_changer-l-e-mail__phone_light.webp?raw=true' width='230' alt='Q-09 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-09_changer-l-e-mail__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-09_changer-l-e-mail__phone_dark.webp?raw=true' width='230' alt='Q-09 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-09_changer-l-e-mail__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-09_changer-l-e-mail__tablet_light.webp?raw=true' width='330' alt='Q-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-09_changer-l-e-mail__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-09_changer-l-e-mail__tablet_dark.webp?raw=true' width='330' alt='Q-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Adresse e-mail » · « Un code de vérification sera envoyé à ta nouvelle adresse. » · « E-mail actuel » · « boris@exemple.com » · « Nouvel e-mail » · « boris.t@exemple.com » · « Mot de passe » · « •••••••• » · « Envoyer le code »

**Composants repérés** : `btn`, `input`

</details>

#### `B-09` — Vérification de l’e-mail
_Module : Onboarding et authentification_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-09_verification-de-l-e-mail__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-09_verification-de-l-e-mail__phone_light.webp?raw=true' width='230' alt='B-09 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-09_verification-de-l-e-mail__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-09_verification-de-l-e-mail__phone_dark.webp?raw=true' width='230' alt='B-09 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-09_verification-de-l-e-mail__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-09_verification-de-l-e-mail__tablet_light.webp?raw=true' width='330' alt='B-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-09_verification-de-l-e-mail__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-09_verification-de-l-e-mail__tablet_dark.webp?raw=true' width='330' alt='B-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon » · « culé, au quotidien. » · « Assistant IA, jeux quotidiens, histoire du club et communauté de supporters, au même endroit. » · « Application communautaire non officielle · fan-made » · « 3/4 » · « Vérifie ta boîte mail » · « Nous avons envoyé un code à 6 chiffres à » · « boris@exemple.com » · « Pas reçu ? » · « Renvoyer le code » · « dans 00:42 » · « Vérifier » · « Modifier l’adresse e-mail »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-AUTH-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-01%5D%22) · [API-AUTH-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-02%5D%22) · [API-AUTH-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-03%5D%22) · [API-AUTH-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-04%5D%22) · [API-AUTH-43](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-43%5D%22) · [MOB-B-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-01%5D%22) · [MOB-B-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-06%5D%22) · [MOB-B-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-14%5D%22) · [MOB-B-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-28%5D%22) · [MOB-B-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-29%5D%22)

## 📐 Règles de gestion

- `POST /users/me/email {newEmail, password}` (mot de passe requis ; compte social sans mot de passe : connexion récente < 10 min) → stocke `pendingEmail` + code 6 chiffres (15 min, 5 essais) envoyé à la NOUVELLE adresse ; réponse 202.
- `POST /users/me/email/confirm {code}` applique `email=pendingEmail`, `emailVerifiedAt=now`, révoque les autres sessions, envoie une notification à l'ANCIENNE adresse (« ton adresse a changé », annulation possible 7 jours).
- Refus si la nouvelle adresse est déjà utilisée : 409 `EMAIL_TAKEN` (sans fuite supplémentaire) ; une seule demande en attente à la fois.
- Avant vérification initiale (B-09) : le changement ne demande pas de mot de passe supplémentaire si le compte vient d'être créé (< 1 h) et non vérifié.
- Limite : 3 demandes / 24 h / compte.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/users/me/email` | Demande de changement | {newEmail,password} | 202 |
| `POST` | `/api/v1/users/me/email/confirm` | Confirme le code | {code} | 200 {email} |

## 🛠️ Tâches

- [ ] Champs `pendingEmail`, `pendingEmailCodeHash`, `pendingEmailExpiresAt` dans User (select:false).
- [ ] Service `changeEmail` + `confirmEmailChange` ; templates `email-change-code` et `email-changed-notice`.
- [ ] Routes, validateurs Joi, limiteur dédié.
- [ ] Gestion de la race sur l'index unique (E11000 → 409).
- [ ] Tests + Swagger.

## ✔️ Critères d'acceptation

- [ ] Étant donné un mot de passe correct et une nouvelle adresse libre, quand `POST /users/me/email`, alors 202 et un code est envoyé à la nouvelle adresse seulement.
- [ ] Étant donné un code valide, alors l'e-mail change et l'ancienne adresse reçoit une notification.
- [ ] Étant donné un code faux 5 fois, alors 429.
- [ ] Étant donné une adresse déjà prise, alors 409.

## 🧪 Tests à écrire

- [ ] Intégration : cycle complet.
- [ ] Intégration : adresse prise.
- [ ] Sécurité : mauvais mot de passe.
- [ ] Unit : expiration du code.
- [ ] Intégration : notification ancienne adresse.

## 🔗 Dépendances

À réaliser après : `API-AUTH-04` · `API-AUTH-06` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
