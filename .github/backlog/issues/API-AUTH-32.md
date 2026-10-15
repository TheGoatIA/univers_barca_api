> **API-AUTH-32** · Sécurité · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

WA-08 « Accès non autorisé — Ton rôle ne permet pas d'accéder à la modération » : l'API doit répondre 403 de façon cohérente. Aujourd'hui `restrictTo('content-manager','moderator','super-admin')` est codé route par route sans matrice centrale. CDC Admin §3.1 : content-manager (joueurs, contenu historique, quiz), moderator (signalements, bannir), super-admin (tout, comptes, logs techniques, quotas IA).

## ✅ Objectif

Centraliser les droits en permissions nommées vérifiables unitairement.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WA-08` — Accès non autorisé (403)
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__desktop_light.webp?raw=true' width='330' alt='WA-08 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__desktop_dark.webp?raw=true' width='330' alt='WA-08 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__tablet_light.webp?raw=true' width='330' alt='WA-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__tablet_dark.webp?raw=true' width='330' alt='WA-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Accès non autorisé » · « Ton rôle » · « ne permet pas d'accéder à la modération. Tu es bien connecté(e) : aucune action n'est requise sur ta session. » · « Retour au tableau de bord » · « Demander l’accès »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WA-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-13%5D%22) · [ADM-WA-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-14%5D%22) · [ADM-WA-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-16%5D%22) · [ADM-WA-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-19%5D%22) · [ADM-WB-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-03%5D%22) · [API-AUTH-37](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-37%5D%22)

#### `WA-01` — Connexion administrateur
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__desktop_light.webp?raw=true' width='330' alt='WA-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__desktop_dark.webp?raw=true' width='330' alt='WA-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__tablet_light.webp?raw=true' width='330' alt='WA-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__tablet_dark.webp?raw=true' width='330' alt='WA-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Back-office » · « Gérer l'univers » · « des culés. » · « Contenu, modération et supervision de l'écosystème Univers Barça — réservé à l'équipe. » · « Accès restreint · connexion chiffrée · actions journalisées » · « Connexion » · « Accède à ton espace d’administration. » · « E-mail professionnel » · « camille.durand@univers-barca.app » · « Mot de passe » · « •••••••••••• » · « Rester connecté 8 h » · « Mot de passe oublié ? » · « Se connecter » · « Authentification à deux facteurs requise pour les super-admins. »

**Composants repérés** : `btn`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WA-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-01%5D%22) · [ADM-WA-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-02%5D%22) · [ADM-WA-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-03%5D%22) · [ADM-WA-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-17%5D%22) · [ADM-WA-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-18%5D%22) · [ADM-WA-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-19%5D%22) · [API-AUTH-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-33%5D%22) · [API-AUTH-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-34%5D%22) · [API-AUTH-38](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-38%5D%22) · [API-AUTH-39](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-39%5D%22) · [API-AUTH-40](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-40%5D%22) · [API-AUTH-42](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-42%5D%22) · [API-AUTH-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-45%5D%22)

## 📐 Règles de gestion

- Permissions : `players:write`, `history:publish`, `quiz:validate`, `moderation:review`, `moderation:ban`, `logs:read`, `accounts:manage`, `config:ai-quotas`, `audit:read`, `observability:read`.
- Matrice : content-manager → players:write, history:publish, quiz:validate ; moderator → moderation:review, moderation:ban ; super-admin → toutes.
- 403 `FORBIDDEN_ROLE` avec `details:{required:['moderation:review'], role:'content-manager'}` (utilisé par WA-08) ; le message ne révèle pas la liste complète des permissions.
- Le rôle vient du JWT mais est revérifié en base (cache Redis 60 s) : un rôle rétrogradé ou un compte `disabled` perd l'accès sous 60 s.
- Toute requête refusée 403 est écrite dans le journal d'audit (`ACCESS_DENIED`, route, rôle).

## 🛠️ Tâches

- [ ] Créer `src/security/permissions.ts` (const map + types) et `middleware/requirePermission.ts`.
- [ ] Refactor des routes admin existantes vers `requirePermission`.
- [ ] Cache rôle/statut admin dans `admin-auth.service`.
- [ ] Test paramétré matrice rôle × permission (3 × 10).
- [ ] Documenter la matrice dans `docs/RBAC.md` et Swagger (`x-permissions`).

## ✔️ Critères d'acceptation

- [ ] Étant donné un content-manager, quand il appelle une route `moderation:review`, alors 403 `FORBIDDEN_ROLE` avec `required`.
- [ ] Étant donné un admin rétrogradé, alors son accès est retiré en moins de 60 s.
- [ ] Étant donné un super-admin, alors toutes les routes sont accessibles.
- [ ] Étant donné un 403, alors une ligne `ACCESS_DENIED` existe dans l'audit.

## 🧪 Tests à écrire

- [ ] Unit : matrice complète 30 cas.
- [ ] Intégration : rétrogradation.
- [ ] Intégration : audit ACCESS_DENIED.
- [ ] Sécurité : token user sur route admin → 403.

## 📚 Références

- CDC Backend §5.2
- CDC Admin §3.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
