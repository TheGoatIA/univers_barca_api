> **API-PLAT-08** · Données · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le modèle FeatureFlag (key, enabled, rolloutPercent, description) existe sans logique d'évaluation. WI-05 affiche « Fantasy Barça — fantasy_module_enabled — Phase 2 · déploiement progressif — Déploiement 100 % ».

## ✅ Objectif

Disposer d'un service d'évaluation déterministe (même utilisateur = même résultat) supportant déploiement progressif et ciblage plateforme/version.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-05` — Feature flags
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__desktop_light.webp?raw=true' width='330' alt='WI-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__desktop_dark.webp?raw=true' width='330' alt='WI-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__tablet_light.webp?raw=true' width='330' alt='WI-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__tablet_dark.webp?raw=true' width='330' alt='WI-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Feature flags » · « Activation progressive des modules sans nouvelle publication en store » · « Quotas IA » · « Rapports » · « Fantasy Barça » · « fantasy_module_enabled » · « Phase 2 · déploiement progressif » · « Déploiement » · « 100 % » · « La Masia Academy » · « academy_module_enabled »

**Composants repérés** : `avatar`, `card`, `toggle`

</details>

**Issues liées sur ce même écran :** [ADM-WI-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-01%5D%22) · [ADM-WI-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-02%5D%22) · [ADM-WI-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-10%5D%22) · [ADM-WI-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-11%5D%22) · [ADM-WI-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-20%5D%22) · [ADM-WI-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-21%5D%22) · [API-IA-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-22%5D%22) · [API-PLAT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-09%5D%22) · [API-PLAT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-10%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

## 📐 Règles de gestion

- Clés initiales (CDC Admin §4.8.1) : fantasy_module_enabled, academy_module_enabled, wallpapers_module_enabled, assistant_streaming_enabled ; clé = snake_case ^[a-z][a-z0-9_]{2,60}$, immuable.
- Évaluation : enabled && bucket(userId,key) < rolloutPercent, bucket = hash FNV-1a(userId+':'+key) % 100 ; non authentifié : bucket sur l'id d'installation (X-Device-Id) sinon 100 % ou 0 % selon rolloutPercent.
- Champs ajoutés : label, phase (1|2|3), platforms[] (ios|android), minAppVersion, killSwitch (booléen), updatedBy, updatedAt.
- rolloutPercent entier 0-100 ; 0 équivaut à désactivé ; killSwitch=true force false sans toucher au pourcentage (coupure budget IA).
- Cache mémoire 30 s + invalidation Redis (pub/sub flags:invalidate).

## 🗄️ Données

- featureflags : key, enabled, rolloutPercent, phase, platforms, minAppVersion, killSwitch

## 🛠️ Tâches

- [ ] Faire évoluer FeatureFlag dans src/models/platform.model.ts (champs + validations Joi/Mongoose).
- [ ] Créer src/services/feature-flag.service.ts (evaluate, evaluateAll(ctx), cache, invalidation).
- [ ] Créer src/utils/hash-bucket.ts (FNV-1a 32 bits) avec tests de distribution.
- [ ] Migration scripts/migrations/<ts>-seed-feature-flags.js créant les 4 flags (désactivés, phase 2/3).
- [ ] Exposer helper requireFlag(key) (middleware 404 FEATURE_DISABLED).
- [ ] Compteur ub_feature_flag_evaluations_total{key,result}.
- [ ] Documenter la convention de nommage dans docs/ARCHITECTURE.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné rolloutPercent=50, alors environ 50 % (±3 %) de 10 000 userIds sont activés et le résultat est stable entre deux appels.
- [ ] Étant donné killSwitch=true, alors evaluate retourne false.
- [ ] Étant donné platforms=['ios'], alors Android reçoit false.
- [ ] Étant donné minAppVersion=1.3.0 et client 1.2.0, alors false.
- [ ] Étant donné une clé non snake_case, alors la validation échoue.

## 🧪 Tests à écrire

- [ ] Unitaire : hash-bucket stable et uniforme.
- [ ] Unitaire : evaluate (matrice enabled × pourcentage × plateforme × version).
- [ ] Intégration : migration crée 4 flags.
- [ ] Intégration : requireFlag → 404 FEATURE_DISABLED.
- [ ] Unitaire : invalidation du cache sur message pub/sub.

## 📚 Références

- CDC Admin §4.8
- CDC Admin §4.8.1
- CDC Global §2 (phases)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
