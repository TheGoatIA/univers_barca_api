> **API-PLAT-09** · API · Priorité **P0** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

Le mobile masque ou affiche les modules Fantasy/Masia/Wallpapers selon les flags sans nouvelle publication en store. Il doit pouvoir les relire à chaud (retour au premier plan) sans refaire tout /config.

## ✅ Objectif

Fournir les flags évalués pour l'utilisateur courant, avec cache HTTP court.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-05` — Feature flags
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__desktop_light.webp?raw=true' width='330' alt='WI-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__desktop_dark.webp?raw=true' width='330' alt='WI-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__tablet_light.webp?raw=true' width='330' alt='WI-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__tablet_dark.webp?raw=true' width='330' alt='WI-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Feature flags » · « Activation progressive des modules sans nouvelle publication en store » · « Quotas IA » · « Rapports » · « Fantasy Barça » · « fantasy_module_enabled » · « Phase 2 · déploiement progressif » · « Déploiement » · « 100 % » · « La Masia Academy » · « academy_module_enabled »

**Composants repérés** : `avatar`, `card`, `toggle`

</details>

**Issues liées sur ce même écran :** [ADM-WI-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-01%5D%22) · [ADM-WI-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-02%5D%22) · [ADM-WI-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-10%5D%22) · [ADM-WI-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-11%5D%22) · [ADM-WI-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-20%5D%22) · [ADM-WI-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-21%5D%22) · [API-IA-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-22%5D%22) · [API-PLAT-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-08%5D%22) · [API-PLAT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-10%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

#### `A-01` — Splash
_Module : Lancement et système_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-01_splash__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-01_splash__phone_light.webp?raw=true' width='230' alt='A-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-01_splash__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-01_splash__phone_dark.webp?raw=true' width='230' alt='A-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-01_splash__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-01_splash__tablet_light.webp?raw=true' width='330' alt='A-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-01_splash__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-01_splash__tablet_dark.webp?raw=true' width='330' alt='A-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon culé, au quotidien. » · « v1.0.0 · Application non officielle »

</details>

**Issues liées sur ce même écran :** [API-PLAT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-01%5D%22) · [API-PLAT-41](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-41%5D%22) · [MOB-A-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-01%5D%22) · [MOB-A-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-02%5D%22) · [MOB-A-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-18%5D%22) · [MOB-A-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-19%5D%22)

## 📐 Règles de gestion

- GET /config/flags renvoie { flags:{ key:boolean } } uniquement pour les clés marquées exposed=true (les flags purement serveur ne fuient pas).
- Authentification optionnelle : avec JWT, évaluation par userId ; sans, par X-Device-Id.
- Cache-Control: private, max-age=60 ; ETag ; p95 < 50 ms.
- Un flag désactivé doit aussi être appliqué côté serveur (requireFlag) : le masquage mobile n'est jamais la seule protection.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/config/flags` | Feature flags évalués | Headers: Authorization (optionnel), X-Device-Id | {success:true,data:{flags:{fantasy_module_enabled:false,assistant_streaming_enabled:true}}} |

## 🛠️ Tâches

- [ ] Ajouter exposed:Boolean au modèle FeatureFlag.
- [ ] Créer config.controller.getFlags + route GET /config/flags avec authOptional.
- [ ] Réutiliser feature-flag.service.evaluateAll.
- [ ] Appliquer requireFlag aux futures routes /fantasy/*, /academy/*, /wallpapers/*, /assistant/stream (liste dans docs).
- [ ] Ajouter au schéma OpenAPI.
- [ ] Ajouter la route au scénario k6 (Trend flags_duration).

## ✔️ Critères d'acceptation

- [ ] Étant donné fantasy_module_enabled=false, alors GET /config/flags renvoie false et /fantasy/* répond 404 FEATURE_DISABLED.
- [ ] Étant donné un flag exposed=false, alors il est absent de la réponse.
- [ ] Étant donné un JWT valide, alors l'évaluation utilise le userId.
- [ ] Étant donné If-None-Match identique, alors 304.

## 🧪 Tests à écrire

- [ ] Intégration : flags avec et sans JWT.
- [ ] Intégration : flag non exposé absent.
- [ ] Intégration : ETag/304.
- [ ] Contrat : schéma OpenAPI.
- [ ] Unitaire : fusion userId / deviceId.

## 🔗 Dépendances

À réaliser après : `API-PLAT-08` · `API-PLAT-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.8.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
