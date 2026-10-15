> **API-AUTH-36** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Après invitation, WA-05 demande « Nouveau mot de passe », « Confirmation », règles « 12 caractères minimum · Majuscule, chiffre et symbole » puis « Activer mon compte ». Un super-admin enchaîne sur WA-06 (QR code).

## ✅ Objectif

Activer le compte avec un jeton à usage unique et ouvrir une session directement utilisable.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WA-05` — Première connexion — définir le mot de passe
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__desktop_light.webp?raw=true' width='330' alt='WA-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__desktop_dark.webp?raw=true' width='330' alt='WA-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__tablet_light.webp?raw=true' width='330' alt='WA-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__tablet_dark.webp?raw=true' width='330' alt='WA-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Back-office » · « Gérer l'univers » · « des culés. » · « Contenu, modération et supervision de l'écosystème Univers Barça — réservé à l'équipe. » · « Accès restreint · connexion chiffrée · actions journalisées » · « Bienvenue dans l’équipe » · « Léa, définis ton mot de passe pour activer ton compte Content-manager. » · « Lien d’invitation à usage unique · valable 48 h » · « Nouveau mot de passe » · « •••••••••••••• » · « Confirmation » · « 12 caractères minimum » · « Majuscule, chiffre et symbole » · « Activer mon compte »

**Composants repérés** : `btn`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WA-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-01%5D%22) · [ADM-WA-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-02%5D%22) · [ADM-WA-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-08%5D%22) · [ADM-WA-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-09%5D%22) · [ADM-WA-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-18%5D%22) · [ADM-WA-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-19%5D%22) · [API-AUTH-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-01%5D%22) · [API-AUTH-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-03%5D%22) · [API-AUTH-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-06%5D%22) · [API-AUTH-35](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-35%5D%22) · [API-AUTH-40](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-40%5D%22)

#### `WA-06` — Configuration du 2FA — QR code
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-06_configuration-du-2fa-qr-code__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-06_configuration-du-2fa-qr-code__desktop_light.webp?raw=true' width='330' alt='WA-06 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-06_configuration-du-2fa-qr-code__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-06_configuration-du-2fa-qr-code__desktop_dark.webp?raw=true' width='330' alt='WA-06 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-06_configuration-du-2fa-qr-code__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-06_configuration-du-2fa-qr-code__tablet_light.webp?raw=true' width='330' alt='WA-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-06_configuration-du-2fa-qr-code__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-06_configuration-du-2fa-qr-code__tablet_dark.webp?raw=true' width='330' alt='WA-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Back-office » · « Gérer l'univers » · « des culés. » · « Contenu, modération et supervision de l'écosystème Univers Barça — réservé à l'équipe. » · « Accès restreint · connexion chiffrée · actions journalisées » · « Active la double authentification » · « Scanne le QR code avec Google Authenticator, 1Password ou Authy. » · « Impossible de scanner ? » · « JBSW Y3DP EHPK 3PXP » · « Copier la clé » · « Code de vérification » · « 482 1 » · « Activer le 2FA » · « Conserve tes 8 codes de secours dans un endroit sûr : ils ne seront plus affichés. »

**Composants repérés** : `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WA-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-01%5D%22) · [ADM-WA-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-02%5D%22) · [ADM-WA-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-06%5D%22) · [ADM-WA-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-10%5D%22) · [ADM-WA-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-18%5D%22) · [ADM-WA-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-19%5D%22) · [API-AUTH-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-34%5D%22)

## 📐 Règles de gestion

- `POST /admin/auth/activate {token, password}` : jeton valide (non expiré, non consommé) ; politique admin (12-128, maj/chiffre/symbole, ≠ e-mail/nom) ; consommation atomique du jeton.
- Effets : `status='active'`, `passwordHash`, `activatedAt`, jeton supprimé ; réponse `{admin, twoFactorSetupRequired}` + cookie de session httpOnly comme au login ; pour super-admin `twoFactorSetupRequired:true` (poursuit sur WA-06).
- Jeton invalide/expiré/déjà utilisé : 410 `INVITE_INVALID` (même message, pas d'information sur la cause) ; 5 tentatives/15 min/IP.
- L'activation est auditée (`ADMIN_ACTIVATED`) et notifie les super-admins.
- Les routes `2fa/setup` et `2fa/confirm` existantes servent à WA-06 (secret affiché en groupes « JBSW Y3DP EHPK 3PXP »).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/admin/auth/activate` | Active le compte invité | {token,password} | {admin,twoFactorSetupRequired:true} |

## 🛠️ Tâches

- [ ] Service `activateAdmin` dans `admin-auth.service.ts` (réutilise `password-policy` kind admin).
- [ ] Route publique + limiteur.
- [ ] Formatage du secret en groupes de 4 dans la réponse de `2fa/setup` (`manualEntryKey`).
- [ ] Émission de session via `createAdminSession(admin, meta)` factorisé.
- [ ] Tests + Swagger.

## ✔️ Critères d'acceptation

- [ ] Étant donné un jeton valide et un mot de passe conforme, quand `POST /admin/auth/activate`, alors le compte est `active` et une session est ouverte.
- [ ] Étant donné le même jeton réutilisé, alors 410.
- [ ] Étant donné un mot de passe de 11 caractères, alors 422 `PASSWORD_TOO_SHORT`.
- [ ] Étant donné un super-admin activé, alors `twoFactorSetupRequired=true`.
- [ ] Étant donné `2fa/setup`, alors `manualEntryKey` est groupé par 4.

## 🧪 Tests à écrire

- [ ] Intégration : activation nominale.
- [ ] Sécurité : rejeu du jeton.
- [ ] Unit : politique admin.
- [ ] Intégration : super-admin → 2FA requise.
- [ ] Intégration : audit.

## 🔗 Dépendances

À réaliser après : `API-AUTH-35` · `API-AUTH-06` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §3.3, §6.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
