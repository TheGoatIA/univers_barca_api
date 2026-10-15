> **API-IA-22** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

WI-05 liste les feature flags (fantasy_module_enabled, academy_module_enabled...) et le CDC Admin §6 définit `assistant_streaming_enabled` et `wallpapers_module_enabled`. Le mobile lit une config distante (`features.wallpapers`) pour masquer la bulle N-01 ou le module Wallpapers (M-14).

## ✅ Objectif

Lecture publique minimale des flags utiles à l'app et administration des flags IA par super-admin avec audit.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-05` — Feature flags
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__desktop_light.webp?raw=true' width='330' alt='WI-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__desktop_dark.webp?raw=true' width='330' alt='WI-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__tablet_light.webp?raw=true' width='330' alt='WI-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__tablet_dark.webp?raw=true' width='330' alt='WI-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Feature flags » · « Activation progressive des modules sans nouvelle publication en store » · « Quotas IA » · « Rapports » · « Fantasy Barça » · « fantasy_module_enabled » · « Phase 2 · déploiement progressif » · « Déploiement » · « 100 % » · « La Masia Academy » · « academy_module_enabled »

**Composants repérés** : `avatar`, `card`, `toggle`

</details>

**Issues liées sur ce même écran :** [ADM-WI-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-01%5D%22) · [ADM-WI-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-02%5D%22) · [ADM-WI-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-10%5D%22) · [ADM-WI-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-11%5D%22) · [ADM-WI-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-20%5D%22) · [ADM-WI-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-21%5D%22) · [API-PLAT-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-08%5D%22) · [API-PLAT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-09%5D%22) · [API-PLAT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-10%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

#### `N-01` — Bulle flottante — découverte
_Module : Assistant IA Barça AI_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-01_bulle-flottante-decouverte__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-01_bulle-flottante-decouverte__phone_light.webp?raw=true' width='230' alt='N-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-01_bulle-flottante-decouverte__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-01_bulle-flottante-decouverte__phone_dark.webp?raw=true' width='230' alt='N-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-01_bulle-flottante-decouverte__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-01_bulle-flottante-decouverte__tablet_light.webp?raw=true' width='330' alt='N-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-01_bulle-flottante-decouverte__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-01_bulle-flottante-decouverte__tablet_dark.webp?raw=true' width='330' alt='N-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Pose-moi une question sur le Barça ! 👋 »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [MOB-N-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-06%5D%22) · [MOB-N-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-28%5D%22) · [MOB-N-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-31%5D%22)

#### `M-14` — Module désactivé
_Module : Wallpapers IA_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-14_module-desactive__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-14_module-desactive__phone_light.webp?raw=true' width='230' alt='M-14 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-14_module-desactive__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-14_module-desactive__phone_dark.webp?raw=true' width='230' alt='M-14 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-14_module-desactive__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-14_module-desactive__tablet_light.webp?raw=true' width='330' alt='M-14 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-14_module-desactive__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-14_module-desactive__tablet_dark.webp?raw=true' width='330' alt='M-14 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Wallpapers IA » · « Wallpapers IA en pause » · « La génération d’images est temporairement désactivée. Elle reviendra très vite ! » · « Voir ma galerie »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-WALL-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-22%5D%22) · [API-WALL-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-30%5D%22) · [MOB-M-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-25%5D%22) · [MOB-M-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-30%5D%22) · [MOB-M-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-31%5D%22)

## 📐 Règles de gestion

- Clés gérées par ce groupe : `assistant_enabled` (kill switch), `assistant_streaming_enabled`, `wallpapers_module_enabled` ; autres clés (fantasy, academy) administrées par les groupes concernés avec le même endpoint.
- GET /api/v1/config/features (authentifié ou non) -> {assistant:{enabled,streaming}, wallpapers:{enabled}, quotas:{assistantMessages,wallpaperGenerations}} ; `Cache-Control: public, max-age=60` ; ETag.
- GET/PATCH /admin/config/feature-flags : super-admin uniquement ; PATCH {key, enabled, rolloutPercent 0..100, justification >= 10 car.} -> écrit un AuditLog {before, after, justification} ; changement effectif en <= 10 s (invalidation du cache Redis).
- Déploiement progressif : le flag est évalué pour un utilisateur par hash stable (userId) < rolloutPercent.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/config/features` | Flags publics | - | {success:true,data:{assistant:{enabled,streaming},wallpapers:{enabled},quotas:{...}}} |
| `GET` | `/api/v1/admin/config/feature-flags` | Liste des flags (super-admin) | - | {data:[{key,enabled,rolloutPercent,description}]} |
| `PATCH` | `/api/v1/admin/config/feature-flags` | Modifie un flag | {key,enabled,rolloutPercent,justification} | {data:{key,enabled,rolloutPercent}} |

## 🛠️ Tâches

- [ ] Étendre le modèle FeatureFlag (description, updatedBy) et créer le seed idempotent des 3 clés.
- [ ] Créer src/services/feature-flag.service.ts : `isEnabled(key, userId?)`, `getPublicFeatures()`, `update(key, patch, admin)` avec cache Redis (TTL 10 s).
- [ ] Créer la route publique GET /config/features et les routes admin sous restrictTo('super-admin').
- [ ] Écrire l'audit via le modèle AuditLog existant.
- [ ] Ajouter le schéma Joi du PATCH.
- [ ] Exposer les flags dans la métrique `feature_flag_state{key}`.
- [ ] Documenter dans Swagger.

## ✔️ Critères d'acceptation

- [ ] Étant donné un PATCH wallpapers_module_enabled=false par un super-admin, quand le mobile appelle /config/features après 10 s, alors wallpapers.enabled=false.
- [ ] Étant donné un rôle moderator, alors PATCH renvoie 403.
- [ ] Étant donné rolloutPercent=50, alors environ la moitié des userId de test voient le flag actif et un même utilisateur obtient toujours le même résultat.
- [ ] Étant donné un PATCH sans justification, alors 400.

## 🧪 Tests à écrire

- [ ] Intégration : propagation du flag.
- [ ] Sécurité : 403 pour non super-admin.
- [ ] Unitaire : hash stable de rollout.
- [ ] Intégration : ligne d'audit créée.

## 🔗 Dépendances

À réaliser après : `API-IA-21` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §6
- CDC Backend §5.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
