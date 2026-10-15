> **API-PLAT-10** · API · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

L'écran WI-05 liste les modules (Fantasy Barça, La Masia Academy…) avec bascule et curseur de déploiement. Réservé au super-admin (CDC Admin §4.8).

## ✅ Objectif

Permettre au super-admin de lister et modifier les flags, chaque modification étant auditée et propagée immédiatement.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-05` — Feature flags
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__desktop_light.webp?raw=true' width='330' alt='WI-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__desktop_dark.webp?raw=true' width='330' alt='WI-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__tablet_light.webp?raw=true' width='330' alt='WI-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__tablet_dark.webp?raw=true' width='330' alt='WI-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Feature flags » · « Activation progressive des modules sans nouvelle publication en store » · « Quotas IA » · « Rapports » · « Fantasy Barça » · « fantasy_module_enabled » · « Phase 2 · déploiement progressif » · « Déploiement » · « 100 % » · « La Masia Academy » · « academy_module_enabled »

**Composants repérés** : `avatar`, `card`, `toggle`

</details>

**Issues liées sur ce même écran :** [ADM-WI-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-01%5D%22) · [ADM-WI-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-02%5D%22) · [ADM-WI-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-10%5D%22) · [ADM-WI-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-11%5D%22) · [ADM-WI-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-20%5D%22) · [ADM-WI-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-21%5D%22) · [API-IA-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-22%5D%22) · [API-PLAT-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-08%5D%22) · [API-PLAT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-09%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

## 📐 Règles de gestion

- RBAC : super-admin uniquement + 2FA obligatoire ; 403 FORBIDDEN pour content-manager/moderator.
- PATCH /admin/config/feature-flags/:key accepte { enabled?, rolloutPercent?(0-100), killSwitch? } ; création/suppression de clés interdites via API (seulement par migration).
- Audit FEATURE_FLAG_TOGGLED avec valeurs avant/après et justification facultative (obligatoire si killSwitch).
- Propagation < 5 s sur toutes les instances PM2 (pub/sub Redis) ; GET /config reflète la nouvelle valeur.
- Concurrence optimiste : en-tête If-Match sur updatedAt/version, 409 CONFLICT si périmé.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/config/feature-flags` | Liste des flags avec état et déploiement | — | {success:true,data:{items:[{key:'fantasy_module_enabled',label:'Fantasy Barça',phase:2,enabled:true,rolloutPercent:100}]}} |
| `PATCH` | `/api/v1/admin/config/feature-flags/:key` | Modifie un flag | {enabled?,rolloutPercent?,killSwitch?,justification?} | {success:true,data:{...}} |

## 🛠️ Tâches

- [ ] Créer admin-config.controller.ts + routes /admin/config/feature-flags (GET, PATCH).
- [ ] Schémas Joi (rolloutPercent entier, au moins un champ).
- [ ] Utiliser requirePermission('config:write') (cf. admin-rbac-permissions AUTH).
- [ ] Appeler audit() (api-admin-audit-log FOOT) avec before/after.
- [ ] Publier flags:invalidate sur Redis.
- [ ] Ajouter schémas Swagger FeatureFlagAdmin.
- [ ] Rate limit 30 req/min/admin.

## ✔️ Critères d'acceptation

- [ ] Étant donné un super-admin, quand PATCH rolloutPercent=25, alors 200 et GET /config/flags évalue 25 %.
- [ ] Étant donné un moderator, alors 403.
- [ ] Étant donné rolloutPercent=150, alors 422.
- [ ] Étant donné If-Match périmé, alors 409.
- [ ] Étant donné la modification, alors une entrée d'audit contient before/after.

## 🧪 Tests à écrire

- [ ] Intégration : matrice de rôles.
- [ ] Intégration : propagation après PATCH.
- [ ] Intégration : audit écrit.
- [ ] Intégration : 409 sur conflit.
- [ ] Sécurité : 2FA requise.
- [ ] Contrat : OpenAPI.

## 🔗 Dépendances

À réaliser après : `API-PLAT-08` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.8
- CDC Admin §6.4
- CDC Admin §7 (endpoints)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
