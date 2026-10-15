> **API-AUTH-37** · API · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

CDC Admin §3.2 et table des endpoints : `GET/POST /admin/accounts`, `PATCH/DELETE /admin/accounts/:id`. La désactivation est immédiate et sans suppression (traçabilité), la suppression définitive est exceptionnelle.

## ✅ Objectif

Fournir le CRUD réservé aux super-admins avec garde-fous.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WA-08` — Accès non autorisé (403)
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__desktop_light.webp?raw=true' width='330' alt='WA-08 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__desktop_dark.webp?raw=true' width='330' alt='WA-08 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__tablet_light.webp?raw=true' width='330' alt='WA-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__tablet_dark.webp?raw=true' width='330' alt='WA-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Accès non autorisé » · « Ton rôle » · « ne permet pas d'accéder à la modération. Tu es bien connecté(e) : aucune action n'est requise sur ta session. » · « Retour au tableau de bord » · « Demander l’accès »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WA-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-13%5D%22) · [ADM-WA-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-14%5D%22) · [ADM-WA-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-16%5D%22) · [ADM-WA-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-19%5D%22) · [ADM-WB-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-03%5D%22) · [API-AUTH-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-32%5D%22)

## 📐 Règles de gestion

- `GET /admin/accounts?q=&role=&status=&page=&limit=` (pagination standard `{items,total,page,totalPages,hasMore}`) : id, email, name, role, status, totpEnabled, lastLoginAt, createdAt.
- `PATCH /admin/accounts/:id {role?, name?, status?:'active'|'disabled'}` : changer de rôle exige justification (≥ 10 caractères) ; désactiver révoque immédiatement toutes les sessions (`AdminSession.revokedAt`) et blackliste les access tokens.
- Garde-fous : impossible de se désactiver/supprimer soi-même ; impossible de retirer le dernier super-admin actif (409 `LAST_SUPER_ADMIN`).
- `DELETE /admin/accounts/:id` : suppression définitive soumise à `{password, confirmation: email}` du super-admin ; l'identité est conservée en pseudonyme dans l'audit.
- Toutes les mutations sont auditées avec valeur avant/après.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/accounts` | Liste des comptes admin | ?q=&role=&status= | {items:[…],total} |
| `PATCH` | `/api/v1/admin/accounts/:id` | Modifie rôle/statut | {role,justification} | compte |
| `DELETE` | `/api/v1/admin/accounts/:id` | Supprime | {password,confirmation} | 204 |

## 🛠️ Tâches

- [ ] Service `admin-account.service.ts` : `list`, `update`, `remove`.
- [ ] Routes et contrôleur `admin-accounts.controller.ts` + `requirePermission('accounts:manage')`.
- [ ] Schémas Joi (justification, enum rôles).
- [ ] Blacklist des access tokens d'un admin via claim `sid` (réutilise session-expired-contract).
- [ ] Tests (dont dernier super-admin) + Swagger.

## ✔️ Critères d'acceptation

- [ ] Étant donné un super-admin, quand il passe un moderator en content-manager avec justification, alors le rôle change et l'audit contient avant/après.
- [ ] Étant donné le dernier super-admin, quand il demande sa désactivation, alors 409 `LAST_SUPER_ADMIN`.
- [ ] Étant donné une désactivation, alors les sessions de l'admin sont révoquées immédiatement.
- [ ] Étant donné un non super-admin, alors 403.
- [ ] Étant donné `q=lea`, alors la liste est filtrée par nom/e-mail.

## 🧪 Tests à écrire

- [ ] Intégration : CRUD complet.
- [ ] Intégration : dernier super-admin.
- [ ] Sécurité : auto-désactivation.
- [ ] Intégration : révocation immédiate.
- [ ] Unit : pagination et filtres.

## 🔗 Dépendances

À réaliser après : `API-AUTH-35` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §3.2, §6.6
- CDC Backend §3.11

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
