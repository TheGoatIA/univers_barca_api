> **API-AUTH-35** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

CDC Admin §3.2/§3.3 : création exclusivement par un super-admin, invitation par e-mail, mot de passe défini par l'invité. WA-05 : « Bienvenue dans l'équipe — Léa, définis ton mot de passe pour activer ton compte Content-manager. Lien d'invitation à usage unique · valable 48 h ». Le modèle porte `inviteTokenHash`/`inviteExpiresAt` mais aucune route.

## ✅ Objectif

Créer un compte `invited` et envoyer l'invitation.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WA-05` — Première connexion — définir le mot de passe
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__desktop_light.webp?raw=true' width='330' alt='WA-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__desktop_dark.webp?raw=true' width='330' alt='WA-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__tablet_light.webp?raw=true' width='330' alt='WA-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__tablet_dark.webp?raw=true' width='330' alt='WA-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Back-office » · « Gérer l'univers » · « des culés. » · « Contenu, modération et supervision de l'écosystème Univers Barça — réservé à l'équipe. » · « Accès restreint · connexion chiffrée · actions journalisées » · « Bienvenue dans l’équipe » · « Léa, définis ton mot de passe pour activer ton compte Content-manager. » · « Lien d’invitation à usage unique · valable 48 h » · « Nouveau mot de passe » · « •••••••••••••• » · « Confirmation » · « 12 caractères minimum » · « Majuscule, chiffre et symbole » · « Activer mon compte »

**Composants repérés** : `btn`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WA-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-01%5D%22) · [ADM-WA-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-02%5D%22) · [ADM-WA-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-08%5D%22) · [ADM-WA-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-09%5D%22) · [ADM-WA-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-18%5D%22) · [ADM-WA-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-19%5D%22) · [API-AUTH-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-01%5D%22) · [API-AUTH-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-03%5D%22) · [API-AUTH-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-06%5D%22) · [API-AUTH-36](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-36%5D%22) · [API-AUTH-40](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-40%5D%22)

## 📐 Règles de gestion

- `POST /admin/accounts {email, name, role}` (permission `accounts:manage`) crée un AdminUser `status:'invited'` sans mot de passe ; e-mail unique ; rôle ∈ content-manager|moderator|super-admin.
- Jeton 32 octets base64url haché sha256, valable 48 h, usage unique ; lien `ADMIN_BASE_URL/activate?token=` dans l'e-mail `admin-invite` (FR) mentionnant le rôle.
- `POST /admin/accounts/:id/invite/resend` régénère un jeton (invalide l'ancien, max 5/jour) tant que le compte est `invited`.
- `GET /admin/auth/invitation?token=` (public, limité) renvoie `{name, role, expiresAt}` (prénom affiché « Léa » et rôle de WA-05) sans autre donnée ; jeton invalide → 410 `INVITE_INVALID`.
- Toute création/renvoi est auditée (`ADMIN_INVITED`, `ADMIN_INVITE_RESENT`).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/admin/accounts` | Invite un administrateur | {email,name,role} | 201 {id,status:'invited'} |
| `GET` | `/api/v1/admin/auth/invitation` | Détails d'une invitation | ?token= | {name:'Léa',role:'content-manager',expiresAt} |

## 🛠️ Tâches

- [ ] Service `admin-account.service.ts` (`inviteAdmin`, `resendInvite`, `getInvitation`).
- [ ] Template `admin-invite` FR (déjà prévu dans email-templates-i18n).
- [ ] Contrôleur + routes `/admin/accounts` (POST) et `/admin/auth/invitation` (GET).
- [ ] Schéma Joi `inviteAdminSchema`.
- [ ] Écriture AuditLog via helper `audit()` (voir issue admin-audit-log).
- [ ] Tests + Swagger.

## ✔️ Critères d'acceptation

- [ ] Étant donné un super-admin, quand il invite Léa en content-manager, alors un compte `invited` existe et un e-mail est en file.
- [ ] Étant donné un moderator qui appelle la route, alors 403.
- [ ] Étant donné un jeton expiré, alors `GET /admin/auth/invitation` renvoie 410.
- [ ] Étant donné un renvoi, alors l'ancien lien ne fonctionne plus.
- [ ] Étant donné un e-mail déjà administrateur, alors 409.

## 🧪 Tests à écrire

- [ ] Intégration : invitation + e-mail.
- [ ] Intégration : renvoi invalide l'ancien jeton.
- [ ] Sécurité : RBAC.
- [ ] Unit : expiration 48 h.
- [ ] Intégration : audit.

## 🔗 Dépendances

À réaliser après : `API-AUTH-32` · `API-AUTH-03` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §3.2, §3.3
- CDC Backend §3.11

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
