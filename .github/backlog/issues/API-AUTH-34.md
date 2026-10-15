> **API-AUTH-34** · Sécurité · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

WA-04 « Vérification en deux étapes — code à 6 chiffres… Code de secours — Expire dans 00:21 » ; WA-06 « Conserve tes 8 codes de secours… ils ne seront plus affichés ». Aujourd'hui le TOTP est transmis avec email+mot de passe dans un seul appel (`totp` optionnel) et il n'existe aucun code de secours ni obligation pour les super-admins.

## ✅ Objectif

Passer à un flux en deux étapes avec challenge court et codes de secours hachés.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WA-04` — Double authentification (TOTP)
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-04_double-authentification-totp__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-04_double-authentification-totp__desktop_light.webp?raw=true' width='330' alt='WA-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-04_double-authentification-totp__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-04_double-authentification-totp__desktop_dark.webp?raw=true' width='330' alt='WA-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-04_double-authentification-totp__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-04_double-authentification-totp__tablet_light.webp?raw=true' width='330' alt='WA-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-04_double-authentification-totp__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-04_double-authentification-totp__tablet_dark.webp?raw=true' width='330' alt='WA-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Back-office » · « Gérer l'univers » · « des culés. » · « Contenu, modération et supervision de l'écosystème Univers Barça — réservé à l'équipe. » · « Accès restreint · connexion chiffrée · actions journalisées » · « Vérification en deux étapes » · « Saisis le code à 6 chiffres de ton application d’authentification. » · « Vérifier » · « Code de secours » · « Expire dans 00:21 »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WA-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-01%5D%22) · [ADM-WA-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-02%5D%22) · [ADM-WA-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-06%5D%22) · [ADM-WA-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-07%5D%22) · [ADM-WA-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-18%5D%22) · [ADM-WA-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-19%5D%22) · [API-AUTH-39](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-39%5D%22)

#### `WA-06` — Configuration du 2FA — QR code
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-06_configuration-du-2fa-qr-code__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-06_configuration-du-2fa-qr-code__desktop_light.webp?raw=true' width='330' alt='WA-06 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-06_configuration-du-2fa-qr-code__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-06_configuration-du-2fa-qr-code__desktop_dark.webp?raw=true' width='330' alt='WA-06 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-06_configuration-du-2fa-qr-code__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-06_configuration-du-2fa-qr-code__tablet_light.webp?raw=true' width='330' alt='WA-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-06_configuration-du-2fa-qr-code__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-06_configuration-du-2fa-qr-code__tablet_dark.webp?raw=true' width='330' alt='WA-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Back-office » · « Gérer l'univers » · « des culés. » · « Contenu, modération et supervision de l'écosystème Univers Barça — réservé à l'équipe. » · « Accès restreint · connexion chiffrée · actions journalisées » · « Active la double authentification » · « Scanne le QR code avec Google Authenticator, 1Password ou Authy. » · « Impossible de scanner ? » · « JBSW Y3DP EHPK 3PXP » · « Copier la clé » · « Code de vérification » · « 482 1 » · « Activer le 2FA » · « Conserve tes 8 codes de secours dans un endroit sûr : ils ne seront plus affichés. »

**Composants repérés** : `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WA-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-01%5D%22) · [ADM-WA-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-02%5D%22) · [ADM-WA-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-06%5D%22) · [ADM-WA-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-10%5D%22) · [ADM-WA-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-18%5D%22) · [ADM-WA-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-19%5D%22) · [API-AUTH-36](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-36%5D%22)

#### `WA-01` — Connexion administrateur
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__desktop_light.webp?raw=true' width='330' alt='WA-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__desktop_dark.webp?raw=true' width='330' alt='WA-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__tablet_light.webp?raw=true' width='330' alt='WA-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__tablet_dark.webp?raw=true' width='330' alt='WA-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Back-office » · « Gérer l'univers » · « des culés. » · « Contenu, modération et supervision de l'écosystème Univers Barça — réservé à l'équipe. » · « Accès restreint · connexion chiffrée · actions journalisées » · « Connexion » · « Accède à ton espace d’administration. » · « E-mail professionnel » · « camille.durand@univers-barca.app » · « Mot de passe » · « •••••••••••• » · « Rester connecté 8 h » · « Mot de passe oublié ? » · « Se connecter » · « Authentification à deux facteurs requise pour les super-admins. »

**Composants repérés** : `btn`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WA-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-01%5D%22) · [ADM-WA-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-02%5D%22) · [ADM-WA-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-03%5D%22) · [ADM-WA-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-17%5D%22) · [ADM-WA-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-18%5D%22) · [ADM-WA-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-19%5D%22) · [API-AUTH-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-32%5D%22) · [API-AUTH-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-33%5D%22) · [API-AUTH-38](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-38%5D%22) · [API-AUTH-39](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-39%5D%22) · [API-AUTH-40](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-40%5D%22) · [API-AUTH-42](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-42%5D%22) · [API-AUTH-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-45%5D%22)

## 📐 Règles de gestion

- Étape 1 `POST /admin/auth/login` : si 2FA active, répond 200 `{twoFactorRequired:true, challengeToken}` (JWT/opaque Redis, usage unique, 5 min ; l'UI affiche le compte à rebours) sans émettre de session.
- Étape 2 `POST /admin/auth/2fa/verify {challengeToken, code | backupCode}` : TOTP 6 chiffres fenêtre ±1 (30 s) avec anti-rejeu (le même code ne peut pas servir deux fois : clé Redis `totp:used:<adminId>:<counter>` 90 s) ; 5 erreurs de code → challenge invalidé et compte compté dans le verrouillage.
- `POST /admin/auth/2fa/confirm` génère 8 codes de secours de 10 caractères (base32 groupés `XXXXX-XXXXX`) retournés UNE SEULE FOIS, stockés hachés Argon2id ; chaque code est à usage unique ; `POST /admin/auth/2fa/backup-codes/regenerate` (mot de passe + TOTP requis).
- Super-admin sans 2FA : après login mot de passe, `twoFactorSetupRequired:true` et seules `/admin/auth/2fa/*` sont accessibles (claim `scope:'2fa-setup'`) ; pour les autres rôles 2FA recommandée.
- Le secret TOTP est chiffré au repos (AES-256-GCM, clé `TOTP_ENC_KEY`) ; l'issuer du QR est « Univers Barça » ; `setup` ne remplace le secret qu'après `confirm`.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/admin/auth/2fa/verify` | Valide le second facteur | {challengeToken,code} | {admin,accessToken} |
| `POST` | `/api/v1/admin/auth/2fa/backup-codes/regenerate` | Régénère les codes | {password,code} | {backupCodes:[8]} |

## 🗄️ Données

- adminusers.backupCodes, totpSecret chiffré

## 🛠️ Tâches

- [ ] Refactor `admin-auth.service.ts` : `startLogin`, `verifyTwoFactor`, `confirmTotp` (génération codes), `regenerateBackupCodes`.
- [ ] Ajouter `backupCodes:[{hash,usedAt}]` et chiffrement du secret dans `admin-user.model.ts`.
- [ ] Stockage challenge Redis `admin:2fa:<token>`.
- [ ] Routes + validateurs Joi (code `^\d{6}$` ou `^[A-Z2-7]{5}-[A-Z2-7]{5}$`).
- [ ] Scope `2fa-setup` dans `signAccessToken` et `protect`.
- [ ] Migration : chiffrer les secrets existants.
- [ ] Mise à jour des tests `admin-auth` + Swagger.

## ✔️ Critères d'acceptation

- [ ] Étant donné un admin 2FA, quand il envoie email+mot de passe, alors 200 `twoFactorRequired` sans refresh token.
- [ ] Étant donné un TOTP déjà utilisé dans la même fenêtre, alors 401 `TOTP_REPLAYED`.
- [ ] Étant donné un code de secours valide, alors connexion réussie et ce code est consommé (second usage refusé).
- [ ] Étant donné un challenge de plus de 5 min, alors 401 `CHALLENGE_EXPIRED`.
- [ ] Étant donné un super-admin sans 2FA, alors il ne peut accéder qu'aux routes de configuration 2FA.

## 🧪 Tests à écrire

- [ ] Intégration : flux complet 2 étapes.
- [ ] Sécurité : rejeu TOTP.
- [ ] Sécurité : bruteforce du challenge (5 max).
- [ ] Intégration : codes de secours ×8 usage unique.
- [ ] Unit : chiffrement/déchiffrement du secret.

## 🔗 Dépendances

À réaliser après : `API-AUTH-33` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §6.1
- CDC Backend §5.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
