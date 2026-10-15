> **API-PLAT-01** · API · Priorité **P0** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

Au lancement (splash A-01) le mobile doit savoir, avant tout appel métier, si l'API est en maintenance, si sa version est encore supportée et quels modules sont activés. Aujourd'hui seul /health existe et MAINTENANCE_MODE est une variable d'environnement figée.

## ✅ Objectif

Exposer GET /api/v1/config, public, léger et cacheable, qui agrège maintenance, version minimale et feature flags évalués.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `A-01` — Splash
_Module : Lancement et système_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-01_splash__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-01_splash__phone_light.webp?raw=true' width='230' alt='A-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-01_splash__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-01_splash__phone_dark.webp?raw=true' width='230' alt='A-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-01_splash__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-01_splash__tablet_light.webp?raw=true' width='330' alt='A-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-01_splash__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-01_splash__tablet_dark.webp?raw=true' width='330' alt='A-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon culé, au quotidien. » · « v1.0.0 · Application non officielle »

</details>

**Issues liées sur ce même écran :** [API-PLAT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-09%5D%22) · [API-PLAT-41](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-41%5D%22) · [MOB-A-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-01%5D%22) · [MOB-A-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-02%5D%22) · [MOB-A-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-18%5D%22) · [MOB-A-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-19%5D%22)

#### `A-06` — Maintenance planifiée
_Module : Lancement et système_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-06_maintenance-planifiee__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-06_maintenance-planifiee__phone_light.webp?raw=true' width='230' alt='A-06 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-06_maintenance-planifiee__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-06_maintenance-planifiee__phone_dark.webp?raw=true' width='230' alt='A-06 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-06_maintenance-planifiee__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-06_maintenance-planifiee__tablet_light.webp?raw=true' width='330' alt='A-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-06_maintenance-planifiee__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-06_maintenance-planifiee__tablet_dark.webp?raw=true' width='330' alt='A-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Maintenance en cours » · « Univers Barça fait une petite révision pour revenir plus fort. Retour prévu aujourd'hui vers » · « Active les notifications pour être prévenu(e) du retour. » · « Suivre le statut »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-PLAT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-03%5D%22) · [API-PLAT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-07%5D%22) · [API-PLAT-48](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-48%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22) · [MOB-A-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-01%5D%22) · [MOB-A-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-08%5D%22) · [MOB-A-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-09%5D%22) · [MOB-A-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-17%5D%22) · [MOB-A-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-18%5D%22) · [MOB-A-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-19%5D%22)

#### `A-07` — Mise à jour requise
_Module : Lancement et système_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-07_mise-a-jour-requise__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-07_mise-a-jour-requise__phone_light.webp?raw=true' width='230' alt='A-07 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-07_mise-a-jour-requise__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-07_mise-a-jour-requise__phone_dark.webp?raw=true' width='230' alt='A-07 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-07_mise-a-jour-requise__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-07_mise-a-jour-requise__tablet_light.webp?raw=true' width='330' alt='A-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-07_mise-a-jour-requise__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-07_mise-a-jour-requise__tablet_dark.webp?raw=true' width='330' alt='A-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Nouvelle version disponible » · « Pour continuer à jouer et profiter des derniers contenus, installe la version 1.2.0. » · « Nouveautés » · « Calendrier synchronisé avec ton agenda » · « Carte des supporters plus fluide » · « Corrections de stabilité » · « Mettre à jour »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-PLAT-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-02%5D%22) · [API-PLAT-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-04%5D%22) · [API-PLAT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-07%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22) · [MOB-A-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-01%5D%22) · [MOB-A-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-08%5D%22) · [MOB-A-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-10%5D%22) · [MOB-A-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-17%5D%22) · [MOB-A-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-18%5D%22) · [MOB-A-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-19%5D%22)

## 📐 Règles de gestion

- Route publique (sans JWT) exemptée du mode maintenance et du contrôle de version minimale (sinon un client trop ancien ne pourrait jamais apprendre qu'il doit se mettre à jour).
- Réponse < 2 Ko, Cache-Control: public, max-age=30 + ETag ; cache Redis 15 s côté serveur ; budget p95 < 50 ms (objectif global p95 < 300 ms).
- Corps : { maintenance:{active,startsAt,endsAt,message}, appVersion:{min,latest,forceUpdate,storeUrl}, flags:{<key>:boolean}, serverTime (ISO UTC), apiVersion }.
- En-tête optionnel X-App-Version (SemVer) + X-App-Platform (ios|android) : permet d'évaluer forceUpdate et les flags par plateforme.
- Rate limit dédié 60 req/min/IP (CDC Backend §10.2 endpoints publics non authentifiés).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/config` | Configuration de démarrage publique | Headers: X-App-Version, X-App-Platform | {success:true,data:{maintenance:{active:false},appVersion:{min:'1.2.0',latest:'1.2.0',forceUpdate:false},flags:{fantasy_module_enabled:true},serverTime:'2026-10-15T09:41:00Z'}} |

## 🗄️ Données

- Redis cfg:v1:<platform>
- platform_settings (maintenance, appVersion)

## 🛠️ Tâches

- [ ] Créer src/controllers/config.controller.ts et src/services/config.service.ts (agrège maintenance.service, version.service, feature-flag.service).
- [ ] Déclarer la route dans src/routes/index.ts AVANT le middleware maintenance, avec validate() Joi sur les en-têtes (X-App-Version regex ^\d+\.\d+\.\d+(\+\d+)?$).
- [ ] Ajouter le schéma OpenAPI AppConfig dans src/docs/swagger.ts et l'annotation @swagger.
- [ ] Mettre en cache le résultat dans Redis (clé cfg:v1:<platform>) avec invalidation lors de toute écriture admin (maintenance, version, flag).
- [ ] Poser ETag faible et répondre 304 si If-None-Match concorde.
- [ ] Repli sans Redis : calcul direct en mémoire (jamais d'échec de /config si Redis tombe).
- [ ] Ajouter la route au scénario k6 (tests/load/lib.js, Trend config_duration, seuil p95 < 150 ms).
- [ ] Documenter l'usage mobile dans docs/ARCHITECTURE.md (séquence splash → /config → routage vers A-06/A-07).

## ✔️ Critères d'acceptation

- [ ] Étant donné une API saine, quand GET /config est appelé sans jeton, alors 200 avec maintenance.active=false et flags évalués.
- [ ] Étant donné MAINTENANCE active, quand GET /config est appelé, alors 200 (et non 503) avec maintenance.active=true et endsAt.
- [ ] Étant donné X-App-Version=1.0.0 et min=1.2.0, alors appVersion.forceUpdate=true.
- [ ] Étant donné If-None-Match identique, alors 304 sans corps.
- [ ] Étant donné Redis arrêté, alors 200 quand même.

## 🧪 Tests à écrire

- [ ] Intégration : GET /config sans jeton → 200 + schéma AppConfig.
- [ ] Intégration : /config reste 200 en mode maintenance.
- [ ] Intégration : ETag/304.
- [ ] Unitaire : config.service agrège les trois sources.
- [ ] Unitaire : en-tête X-App-Version invalide → 400 VALIDATION_ERROR.
- [ ] Contrat : réponse conforme au schéma OpenAPI.

## 📚 Références

- CDC Backend §6.4
- CDC Backend §10.1
- CDC Global §3.5
- CDC Global §6.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
