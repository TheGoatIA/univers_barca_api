> **API-FANT-32** · API · Priorité **P1** · Taille **L** · Phase 3 — Fonctionnalités avancées

## 🎯 Contexte

Quatre écrans lisent des données d'historique : le bilan de la semaine (I-08), les graphiques de progression sur 8 semaines avec radar Actuel/Départ (I-09), l'historique des décisions (I-10) et la modale de promotion (I-12). Ces routes complètent les 4 endpoints du CDC §3.5 (extensions à confirmer).

## ✅ Objectif

Lire et acquitter bilans et jalons, lister l'historique, fournir les séries pour les graphiques.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `I-08` — Bilan de la semaine
_Module : La Masia Academy_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-08_bilan-de-la-semaine__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-08_bilan-de-la-semaine__phone_light.webp?raw=true' width='230' alt='I-08 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-08_bilan-de-la-semaine__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-08_bilan-de-la-semaine__phone_dark.webp?raw=true' width='230' alt='I-08 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-08_bilan-de-la-semaine__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-08_bilan-de-la-semaine__tablet_light.webp?raw=true' width='330' alt='I-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-08_bilan-de-la-semaine__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-08_bilan-de-la-semaine__tablet_dark.webp?raw=true' width='330' alt='I-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Bilan · Semaine 3 » · « Semaine réussie » · « +3 » · « points de global » · « Évolution des attributs » · « Technique » · « +4 » · « Physique » · « +0 » · « Intelligence » · « +1 » · « Mental » · « −2 » · « Conseil de l'assistant : il a besoin de repos avant le prochain match. » · « Semaine suivante »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-25%5D%22) · [API-FANT-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-30%5D%22) · [API-FANT-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-31%5D%22) · [API-FANT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-34%5D%22) · [MOB-I-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-01%5D%22) · [MOB-I-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-02%5D%22) · [MOB-I-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-04%5D%22) · [MOB-I-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-05%5D%22) · [MOB-I-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-14%5D%22)

#### `I-09` — Progression et graphiques
_Module : La Masia Academy_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-09_progression-et-graphiques__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-09_progression-et-graphiques__phone_light.webp?raw=true' width='230' alt='I-09 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-09_progression-et-graphiques__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-09_progression-et-graphiques__phone_dark.webp?raw=true' width='230' alt='I-09 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-09_progression-et-graphiques__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-09_progression-et-graphiques__tablet_light.webp?raw=true' width='330' alt='I-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-09_progression-et-graphiques__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-09_progression-et-graphiques__tablet_dark.webp?raw=true' width='330' alt='I-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Progression » · « Global » · « Attributs » · « Forme » · « Note globale » · « +12 en 8 semaines » · « S1 » · « S4 » · « S8 » · « Actuel » · « Départ »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-34%5D%22) · [MOB-I-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-03%5D%22) · [MOB-I-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-15%5D%22) · [MOB-I-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-21%5D%22) · [MOB-I-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-22%5D%22)

#### `I-10` — Historique des décisions
_Module : La Masia Academy_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-10_historique-des-decisions__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-10_historique-des-decisions__phone_light.webp?raw=true' width='230' alt='I-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-10_historique-des-decisions__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-10_historique-des-decisions__phone_dark.webp?raw=true' width='230' alt='I-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-10_historique-des-decisions__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-10_historique-des-decisions__tablet_light.webp?raw=true' width='330' alt='I-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-10_historique-des-decisions__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-10_historique-des-decisions__tablet_dark.webp?raw=true' width='330' alt='I-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « S3 » · « Entraînement technique » · « +3 global » · « S2 » · « Repos / récupération » · « Fatigue −24 » · « S1 » · « Entraînement physique » · « +2 physique » · « S0 » · « Travail tactique » · « +2 intelligence »

</details>

**Issues liées sur ce même écran :** [API-FANT-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-25%5D%22) · [MOB-I-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-01%5D%22) · [MOB-I-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-16%5D%22)

#### `I-12` — Jalon — promotion
_Module : La Masia Academy_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-12_jalon-promotion__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-12_jalon-promotion__phone_light.webp?raw=true' width='230' alt='I-12 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-12_jalon-promotion__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-12_jalon-promotion__phone_dark.webp?raw=true' width='230' alt='I-12 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-12_jalon-promotion__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-12_jalon-promotion__tablet_light.webp?raw=true' width='330' alt='I-12 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-12_jalon-promotion__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-12_jalon-promotion__tablet_dark.webp?raw=true' width='330' alt='I-12 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « La Masia Academy » · « Cadet A · 15 ans » · « Samuel Mbarga » · « Milieu offensif · Pied gauche » · « Global » · « Forme » · « 78% » · « Fatigue » · « 34% » · « S4 » · « Semaine 4 · décision à prendre » · « Prochain match de l'académie samedi » · « Attributs » · « Technique » · « Physique » · « Intelligence » · « Vitesse » · « Mental » · « Finition » · « Prendre la décision de la semaine » · « Promotion ! » · « Juvenil B » · « Samuel atteint 75 de global et rejoint la catégorie supérieure. Nouveau badge débloqué ! » · « Continuer »

**Composants repérés** : `btn`, `card`, `modal`

</details>

**Issues liées sur ce même écran :** [API-FANT-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-28%5D%22) · [API-FANT-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-30%5D%22) · [API-FANT-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-31%5D%22) · [API-FANT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-33%5D%22) · [API-FANT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-34%5D%22) · [MOB-I-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-04%5D%22) · [MOB-I-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-18%5D%22) · [MOB-I-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-20%5D%22) · [MOB-I-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-22%5D%22)

## 📐 Règles de gestion

- GET /academy/player/reports/:week -> bilan {week, label, globalDelta, deltas, adviceKey, advice (texte localisé), acknowledgedAt} ; POST /academy/player/reports/:week/ack -> acquittement idempotent.
- GET /academy/player/progress?weeks=8 -> {series:[{week, global, form, fatigue, attributes}], start:{attributes}, current:{attributes}, globalGain:12} ; moins de 2 points -> series réduite (le mobile affiche « Pas encore assez de données »).
- GET /academy/player/decisions?limit=20&cursor= -> items [{week, decisionType, summary:'+3 global', effects:{attributes, fatigue}}] triés par semaine décroissante.
- POST /academy/player/milestones/:id/ack -> la modale « Promotion ! Juvenil B » n'apparaît qu'une fois par palier ; l'état GET /academy/player ne renvoie plus pendingMilestone.
- weeks max 52, défaut 8 ; limit max 50.
- Lecture seule du propriétaire ; 404 si semaine inexistante.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/academy/player/progress` | Séries de progression | ?weeks=8 | {success:true,data:{series:[{week:1,global:50,form:70,fatigue:20,attributes:{…}}],start:{…},current:{…},globalGain:12}} |
| `GET` | `/api/v1/academy/player/decisions` | Historique des décisions | ?limit=20&cursor= | {success:true,data:{items:[{week:3,decisionType:'technical_training',summary:'+3 global'}],nextCursor}} |
| `POST` | `/api/v1/academy/player/reports/:week/ack` | Acquitter le bilan | — | {success:true,data:{acknowledgedAt}} |
| `POST` | `/api/v1/academy/player/milestones/:id/ack` | Acquitter un jalon | — | {success:true,data:{acknowledgedAt}} |

## 🛠️ Tâches

- [ ] Controllers + routes pour les 5 endpoints ci-dessus.
- [ ] Validators Joi (weeks, limit, cursor, week).
- [ ] Service academy-history.service.ts : agrégations sur AcademyWeekReport et AcademyProgressPoint.
- [ ] Calcul globalGain = global(semaine courante) - global(semaine courante - weeks).
- [ ] Textes de conseil localisés (fr/en/es) selon Accept-Language.
- [ ] Cache privé 60 s sur progress.
- [ ] Swagger : schémas WeekReport, ProgressSeries, DecisionHistoryItem, Milestone.
- [ ] Tests d'intégration.

## ✔️ Critères d'acceptation

- [ ] Étant donné 8 semaines de jeu, quand GET progress, alors 8 points et globalGain correct (ex. +12).
- [ ] Étant donné un bilan non acquitté, quand POST ack deux fois, alors acknowledgedAt est fixé une fois.
- [ ] Étant donné un jalon acquitté, alors GET /academy/player renvoie pendingMilestone null.
- [ ] Étant donné weeks=100, alors 422.
- [ ] Étant donné l'historique, alors tri décroissant et pagination par curseur sans doublon.

## 🧪 Tests à écrire

- [ ] Intégration : progress sur 8 semaines.
- [ ] Intégration : ack idempotent.
- [ ] Intégration : jalon unique.
- [ ] Intégration : historique paginé.
- [ ] Intégration : localisation es.

## 🔗 Dépendances

À réaliser après : `API-FANT-31` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
