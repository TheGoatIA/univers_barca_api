> **API-PLAT-02** · API · Priorité **P1** · Taille **XS** · Phase 0 — Socle technique

## 🎯 Contexte

Le CDC Global §6.5 impose que la version SemVer de l'API soit exposée dans un endpoint de santé et dans Swagger. /health renvoie déjà APP_VERSION mais aucun endpoint dédié ne donne le commit, la date de build ni la version du contrat OpenAPI.

## ✅ Objectif

Exposer GET /api/v1/version (public) renvoyant version SemVer, commit court, date de build et version du contrat, alimentés par le pipeline.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `A-07` — Mise à jour requise
_Module : Lancement et système_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-07_mise-a-jour-requise__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-07_mise-a-jour-requise__phone_light.webp?raw=true' width='230' alt='A-07 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-07_mise-a-jour-requise__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-07_mise-a-jour-requise__phone_dark.webp?raw=true' width='230' alt='A-07 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-07_mise-a-jour-requise__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-07_mise-a-jour-requise__tablet_light.webp?raw=true' width='330' alt='A-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-07_mise-a-jour-requise__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-07_mise-a-jour-requise__tablet_dark.webp?raw=true' width='330' alt='A-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Nouvelle version disponible » · « Pour continuer à jouer et profiter des derniers contenus, installe la version 1.2.0. » · « Nouveautés » · « Calendrier synchronisé avec ton agenda » · « Carte des supporters plus fluide » · « Corrections de stabilité » · « Mettre à jour »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-PLAT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-01%5D%22) · [API-PLAT-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-04%5D%22) · [API-PLAT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-07%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22) · [MOB-A-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-01%5D%22) · [MOB-A-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-08%5D%22) · [MOB-A-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-10%5D%22) · [MOB-A-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-17%5D%22) · [MOB-A-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-18%5D%22) · [MOB-A-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-19%5D%22)

## 📐 Règles de gestion

- Champs : version (SemVer ex. 0.1.0), build (AAAAMMJJ.N comme le tag d'image docs/DEPLOYMENT.md), commit (7 car.), builtAt (ISO), openapi (info.version), environment.
- Valeurs injectées au build Docker via ARG/ENV (APP_VERSION, BUILD_ID, GIT_SHA) ; 'dev' en local.
- Aucune information sensible (pas de dépendances ni chemins) ; Cache-Control: public, max-age=60.
- L'en-tête X-API-Version est ajouté à toutes les réponses avec la version SemVer.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/version` | Version de l'API et du build | — | {success:true,data:{version:'0.1.0',build:'20261015.2',commit:'a1b2c3d',builtAt:'2026-10-15T08:00:00Z',openapi:'1.0.0',environment:'production'}} |

## 🛠️ Tâches

- [ ] Étendre src/config/env.ts avec BUILD_ID et GIT_SHA (Joi, défauts 'dev').
- [ ] Passer les ARG dans Dockerfile et .github/workflows/backend-deploy.yml (--build-arg).
- [ ] Créer controller + route /version.
- [ ] Middleware d'en-tête X-API-Version dans src/app.ts.
- [ ] Réutiliser la version dans le champ info.version de Swagger.
- [ ] Documenter dans README et swagger.
- [ ] Test de fumée post-déploiement : le pipeline vérifie que /version renvoie le BUILD_ID déployé.

## ✔️ Critères d'acceptation

- [ ] Étant donné un build avec BUILD_ID=20261015.2, alors GET /version renvoie build=20261015.2.
- [ ] Étant donné n'importe quelle réponse, alors X-API-Version est présent.
- [ ] Étant donné le mode maintenance, alors /version reste accessible.
- [ ] Étant donné la route, alors aucune donnée sensible n'est exposée.

## 🧪 Tests à écrire

- [ ] Unitaire : sérialisation de /version.
- [ ] Intégration : en-tête X-API-Version sur 200 et sur 404.
- [ ] Intégration : accessible en maintenance.
- [ ] Pipeline : étape de vérification post-déploiement du BUILD_ID.

## 🔗 Dépendances

À réaliser après : `API-PLAT-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §6.5
- CDC Backend §10.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
