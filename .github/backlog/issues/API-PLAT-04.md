> **API-PLAT-04** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

A-07 « Nouvelle version disponible » bloque l'app quand la version installée est trop ancienne (CDC Backend §9.5 : migrations destructives en deux temps pour rester compatible avec les versions mobiles en circulation). L'API doit connaître la version minimale par plateforme et refuser proprement les clients obsolètes.

## ✅ Objectif

Contrôler la version du client sur chaque requête métier et renvoyer un code dédié que le mobile route vers A-07, avec les nouveautés à afficher.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `A-07` — Mise à jour requise
_Module : Lancement et système_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-07_mise-a-jour-requise__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-07_mise-a-jour-requise__phone_light.webp?raw=true' width='230' alt='A-07 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-07_mise-a-jour-requise__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-07_mise-a-jour-requise__phone_dark.webp?raw=true' width='230' alt='A-07 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-07_mise-a-jour-requise__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-07_mise-a-jour-requise__tablet_light.webp?raw=true' width='330' alt='A-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-07_mise-a-jour-requise__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/A/A-07_mise-a-jour-requise__tablet_dark.webp?raw=true' width='330' alt='A-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Nouvelle version disponible » · « Pour continuer à jouer et profiter des derniers contenus, installe la version 1.2.0. » · « Nouveautés » · « Calendrier synchronisé avec ton agenda » · « Carte des supporters plus fluide » · « Corrections de stabilité » · « Mettre à jour »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-PLAT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-01%5D%22) · [API-PLAT-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-02%5D%22) · [API-PLAT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-07%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22) · [MOB-A-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-01%5D%22) · [MOB-A-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-08%5D%22) · [MOB-A-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-10%5D%22) · [MOB-A-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-17%5D%22) · [MOB-A-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-18%5D%22) · [MOB-A-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-A-19%5D%22)

## 📐 Règles de gestion

- Le mobile envoie X-App-Version (SemVer) et X-App-Platform (ios|android) sur toutes ses requêtes ; absence d'en-tête = client web/admin, non contrôlé.
- platform_settings clé 'appVersion' : { ios:{min,latest,storeUrl}, android:{min,latest,storeUrl}, releaseNotesI18n:{fr,en,es}:[3 puces max] } (ex. min 1.2.0 ; puces « Calendrier synchronisé avec ton agenda », « Carte des supporters plus fluide », « Corrections de stabilité »).
- Si version < min : 426 Upgrade Required, corps { error:{ code:'UPGRADE_REQUIRED', details:{ minVersion, latestVersion, storeUrl, releaseNotes[] } } } ; exemptions : /config, /version, /health*, /auth/logout.
- Comparaison SemVer stricte (pas lexicographique) ; build metadata ignorée.
- Une version < latest mais >= min renvoie l'en-tête X-Update-Available: true (mise à jour recommandée non bloquante).
- Politique : min relevée uniquement après >= 90 % de parc à jour (CDC Global §3.8) ; changement journalisé (APP_MIN_VERSION_CHANGED).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `PUT` | `/api/v1/admin/config/app-version` | Définit versions min/latest et notes de version | {ios:{min,latest,storeUrl},android:{...},releaseNotesI18n} | {success:true,data:{...}} |

## 🗄️ Données

- platform_settings{key:'appVersion'}

## 🛠️ Tâches

- [ ] Ajouter la dépendance semver et créer src/utils/semver.ts (compare, parse sûr).
- [ ] Créer src/middleware/appVersion.ts monté après requestContext et avant les routes métier.
- [ ] Créer PUT /admin/config/app-version (super-admin) avec validation Joi (min <= latest).
- [ ] Compléter GET /config avec appVersion.forceUpdate calculé.
- [ ] Compteur Prometheus ub_client_version_total{platform,version} (cardinalité bornée : version majeure.mineure) pour mesurer le parc.
- [ ] Texte localisé des nouveautés (fr/en/es) servi selon Accept-Language.
- [ ] Documenter la procédure « relever la version minimale » dans docs/runbooks.
- [ ] Ajouter les cas aux tests de sécurité (en-tête falsifié, valeur géante).

## ✔️ Critères d'acceptation

- [ ] Étant donné min=1.2.0 et X-App-Version=1.1.9, quand une route métier est appelée, alors 426 UPGRADE_REQUIRED avec storeUrl de la plateforme.
- [ ] Étant donné X-App-Version=1.10.0 et min=1.2.0, alors la requête passe (comparaison numérique).
- [ ] Étant donné X-App-Version absent, alors aucun contrôle.
- [ ] Étant donné X-App-Version='abc', alors 400 VALIDATION_ERROR.
- [ ] Étant donné 1.2.0 <= v < latest, alors X-Update-Available: true.

## 🧪 Tests à écrire

- [ ] Unitaire : comparaison SemVer (1.10.0 > 1.9.9).
- [ ] Intégration : 426 sur route métier, 200 sur /config.
- [ ] Intégration : exemption /auth/logout.
- [ ] Intégration : notes localisées FR/EN/ES.
- [ ] Sécurité : en-tête de 10 000 caractères rejeté.
- [ ] Unitaire : compteur ub_client_version_total borné.

## 🔗 Dépendances

À réaliser après : `API-PLAT-01` · `API-PLAT-03` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §9.5
- CDC Global §3.8

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
