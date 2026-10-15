> **API-AUTH-18** · Sécurité · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

B-19 « Nouveau mot de passe » (jauge « Mot de passe fort », « 12 caractères ou plus », confirmation) et B-20 « Tu as été déconnecté(e) de tes autres appareils par sécurité ». `resetPassword` révoque déjà les refresh tokens mais ne blackliste pas les access tokens actifs, ne notifie pas et n'applique pas 12 caractères.

## ✅ Objectif

Rendre le reset sûr de bout en bout.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `B-19` — Nouveau mot de passe
_Module : Onboarding et authentification_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-19_nouveau-mot-de-passe__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-19_nouveau-mot-de-passe__phone_light.webp?raw=true' width='230' alt='B-19 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-19_nouveau-mot-de-passe__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-19_nouveau-mot-de-passe__phone_dark.webp?raw=true' width='230' alt='B-19 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-19_nouveau-mot-de-passe__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-19_nouveau-mot-de-passe__tablet_light.webp?raw=true' width='330' alt='B-19 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-19_nouveau-mot-de-passe__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-19_nouveau-mot-de-passe__tablet_dark.webp?raw=true' width='330' alt='B-19 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon » · « culé, au quotidien. » · « Assistant IA, jeux quotidiens, histoire du club et communauté de supporters, au même endroit. » · « Application communautaire non officielle · fan-made » · « Nouveau mot de passe » · « Choisis un mot de passe solide que tu n’utilises nulle part ailleurs. » · « •••••••••••• » · « Mot de passe fort » · « Confirmation » · « 12 caractères ou plus » · « Une majuscule et un chiffre » · « Un symbole » · « Enregistrer »

**Composants repérés** : `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [API-AUTH-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-06%5D%22) · [API-AUTH-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-17%5D%22) · [API-AUTH-43](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-43%5D%22) · [MOB-B-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-06%5D%22) · [MOB-B-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-25%5D%22) · [MOB-B-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-27%5D%22) · [MOB-B-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-28%5D%22) · [MOB-B-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-29%5D%22)

#### `B-20` — Mot de passe modifié
_Module : Onboarding et authentification_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-20_mot-de-passe-modifie__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-20_mot-de-passe-modifie__phone_light.webp?raw=true' width='230' alt='B-20 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-20_mot-de-passe-modifie__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-20_mot-de-passe-modifie__phone_dark.webp?raw=true' width='230' alt='B-20 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-20_mot-de-passe-modifie__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-20_mot-de-passe-modifie__tablet_light.webp?raw=true' width='330' alt='B-20 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-20_mot-de-passe-modifie__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-20_mot-de-passe-modifie__tablet_dark.webp?raw=true' width='330' alt='B-20 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon » · « culé, au quotidien. » · « Assistant IA, jeux quotidiens, histoire du club et communauté de supporters, au même endroit. » · « Application communautaire non officielle · fan-made » · « Mot de passe mis à jour » · « Tu as été déconnecté(e) de tes autres appareils par sécurité. » · « Se connecter »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-AUTH-43](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-43%5D%22) · [MOB-B-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-08%5D%22) · [MOB-B-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-26%5D%22) · [MOB-B-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-28%5D%22) · [MOB-B-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-29%5D%22)

## 📐 Règles de gestion

- Jeton à usage unique : consommé atomiquement (`findOneAndUpdate` + `$unset`) ; second usage → 400 `RESET_INVALID`.
- Nouveau mot de passe validé par `password-policy` (kind user, recommandé 12+, minimum 8 + force ≥ `medium` ; le client affiche l'exigence 12 de B-19 comme objectif) et différent des 3 derniers (`passwordHistory` de hachages, 3 entrées).
- Toutes les sessions sont révoquées ET `passwordChangedAt` est posé ; `protect` refuse tout access token dont `iat < passwordChangedAt` (`SESSION_REVOKED`).
- E-mail `password-changed` (« Si ce n'est pas toi… ») envoyé après succès, avec heure et ville approximative.
- Le reset ne connecte pas automatiquement : l'utilisateur retourne à la connexion (bouton « Se connecter » de B-20).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/auth/reset-password` | Définit un nouveau mot de passe | {token,password} | {reset:true} |

## 🛠️ Tâches

- [ ] Ajouter `passwordHistory: [{hash, at}]` (select:false, max 3) au modèle User.
- [ ] Modifier `auth.service.resetPassword` (atomique, historique, `passwordChangedAt`).
- [ ] Ajouter le contrôle `iat` dans `verifyAccessToken`/`protect` (charge le `passwordChangedAt` depuis le cache `user:status:<id>`).
- [ ] Enfiler `password-changed`.
- [ ] Codes d'erreur `PASSWORD_REUSED`, `RESET_INVALID`, `PASSWORD_TOO_WEAK`.
- [ ] Tests + Swagger.

## ✔️ Critères d'acceptation

- [ ] Étant donné un jeton valide, quand le mot de passe est réinitialisé, alors toutes les sessions sont révoquées et un access token émis avant est refusé.
- [ ] Étant donné le même jeton réutilisé, alors 400 `RESET_INVALID`.
- [ ] Étant donné un mot de passe identique à l'un des 3 derniers, alors 422 `PASSWORD_REUSED`.
- [ ] Étant donné un reset réussi, alors un e-mail `password-changed` est en file.
- [ ] Étant donné un jeton expiré (> 1 h), alors 400 `RESET_INVALID`.

## 🧪 Tests à écrire

- [ ] Intégration : reset complet puis login.
- [ ] Sécurité : course deux resets simultanés.
- [ ] Intégration : access token antérieur refusé.
- [ ] Unit : historique 3 entrées.
- [ ] Intégration : alerte e-mail.

## 🔗 Dépendances

À réaliser après : `API-AUTH-06` · `API-AUTH-17` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §5.1
- CDC Global §2.13

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
