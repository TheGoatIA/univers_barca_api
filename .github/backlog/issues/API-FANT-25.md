> **API-FANT-25** · Données · Priorité **P1** · Taille **M** · Phase 3 — Fonctionnalités avancées

## 🎯 Contexte

AcademyPlayer existe (attributes technique/physique/intelligence/vitesse/mental/finition, form 70, fatigue 20, week, category 'Cadet A', decisions[]) mais sans unicité par utilisateur, sans bilans hebdomadaires, sans historique de progression ni jalons. Les écrans I-04 à I-10 en dépendent.

## ✅ Objectif

Un modèle académie complet, conforme au CDC §4.4 (academy_players, academy_decisions) et aux écrans.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `I-04` — Création — confirmation
_Module : La Masia Academy_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-04_creation-confirmation__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-04_creation-confirmation__phone_light.webp?raw=true' width='230' alt='I-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-04_creation-confirmation__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-04_creation-confirmation__phone_dark.webp?raw=true' width='230' alt='I-04 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-04_creation-confirmation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-04_creation-confirmation__tablet_light.webp?raw=true' width='330' alt='I-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-04_creation-confirmation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-04_creation-confirmation__tablet_dark.webp?raw=true' width='330' alt='I-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Nouveau joueur » · « 3/3 » · « Cadet A » · « Samuel Mbarga » · « Milieu offensif · Pied gauche · 15 ans » · « Premier objectif » · « Atteindre 75 de global » · « pour être promu en Juvenil B » · « Entrer à La Masia »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-27%5D%22) · [MOB-I-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-01%5D%22) · [MOB-I-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-09%5D%22) · [MOB-I-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-10%5D%22)

#### `I-05` — Accueil du joueur
_Module : La Masia Academy_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-05_accueil-du-joueur__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-05_accueil-du-joueur__phone_light.webp?raw=true' width='230' alt='I-05 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-05_accueil-du-joueur__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-05_accueil-du-joueur__phone_dark.webp?raw=true' width='230' alt='I-05 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-05_accueil-du-joueur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-05_accueil-du-joueur__tablet_light.webp?raw=true' width='330' alt='I-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-05_accueil-du-joueur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-05_accueil-du-joueur__tablet_dark.webp?raw=true' width='330' alt='I-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « La Masia Academy » · « Cadet A · 15 ans » · « Samuel Mbarga » · « Milieu offensif · Pied gauche » · « Global » · « Forme » · « 78% » · « Fatigue » · « 34% » · « S4 » · « Semaine 4 · décision à prendre » · « Prochain match de l'académie samedi » · « Attributs » · « Technique » · « Physique » · « Intelligence » · « Vitesse » · « Mental » · « Finition » · « Prendre la décision de la semaine »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-22%5D%22) · [API-FANT-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-26%5D%22) · [API-FANT-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-28%5D%22) · [API-FANT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-34%5D%22) · [MOB-I-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-01%5D%22) · [MOB-I-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-02%5D%22) · [MOB-I-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-04%5D%22) · [MOB-I-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-11%5D%22) · [MOB-I-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-21%5D%22) · [MOB-I-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-22%5D%22)

#### `I-08` — Bilan de la semaine
_Module : La Masia Academy_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-08_bilan-de-la-semaine__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-08_bilan-de-la-semaine__phone_light.webp?raw=true' width='230' alt='I-08 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-08_bilan-de-la-semaine__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-08_bilan-de-la-semaine__phone_dark.webp?raw=true' width='230' alt='I-08 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-08_bilan-de-la-semaine__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-08_bilan-de-la-semaine__tablet_light.webp?raw=true' width='330' alt='I-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-08_bilan-de-la-semaine__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-08_bilan-de-la-semaine__tablet_dark.webp?raw=true' width='330' alt='I-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Bilan · Semaine 3 » · « Semaine réussie » · « +3 » · « points de global » · « Évolution des attributs » · « Technique » · « +4 » · « Physique » · « +0 » · « Intelligence » · « +1 » · « Mental » · « −2 » · « Conseil de l'assistant : il a besoin de repos avant le prochain match. » · « Semaine suivante »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-30%5D%22) · [API-FANT-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-31%5D%22) · [API-FANT-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-32%5D%22) · [API-FANT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-34%5D%22) · [MOB-I-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-01%5D%22) · [MOB-I-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-02%5D%22) · [MOB-I-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-04%5D%22) · [MOB-I-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-05%5D%22) · [MOB-I-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-14%5D%22)

#### `I-10` — Historique des décisions
_Module : La Masia Academy_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-10_historique-des-decisions__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-10_historique-des-decisions__phone_light.webp?raw=true' width='230' alt='I-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-10_historique-des-decisions__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-10_historique-des-decisions__phone_dark.webp?raw=true' width='230' alt='I-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-10_historique-des-decisions__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-10_historique-des-decisions__tablet_light.webp?raw=true' width='330' alt='I-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-10_historique-des-decisions__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-10_historique-des-decisions__tablet_dark.webp?raw=true' width='330' alt='I-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « S3 » · « Entraînement technique » · « +3 global » · « S2 » · « Repos / récupération » · « Fatigue −24 » · « S1 » · « Entraînement physique » · « +2 physique » · « S0 » · « Travail tactique » · « +2 intelligence »

</details>

**Issues liées sur ce même écran :** [API-FANT-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-32%5D%22) · [MOB-I-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-01%5D%22) · [MOB-I-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-16%5D%22)

## 📐 Règles de gestion

- Un utilisateur possède au plus UN joueur d'académie actif (GET/POST /academy/player au singulier dans le CDC) : index unique partiel {userId:1} sur status 'active'.
- Attributs entiers 0-99 (valeurs d'exemple I-05 : technique 64, physique 58, intelligence 61, vitesse 66, mental 59, finition 52) ; form et fatigue entiers 0-100 (78 % / 34 %).
- decisions[] devient une collection AcademyDecision {playerId, week, decisionType, appliedAt, effects} (CDC : academy_decisions) ; unique {playerId, week} (une décision par semaine, modifiable avant application).
- Bilans : AcademyWeekReport {playerId, week, deltas:{technique…}, globalDelta, formDelta, fatigueDelta, adviceKey, acknowledgedAt} unique {playerId, week}.
- Snapshots hebdomadaires AcademyProgressPoint {playerId, week, global, attributes, form, fatigue} pour les graphiques (I-09 : 8 dernières semaines, « +12 en 8 semaines »).
- Champs ajoutés : global (calculé et stocké), startAttributes (pour le radar « Départ »), category, nextCategory, preferredFoot (left|right|both), position (GB, DEF, MIL, AIL, ATT… libellé affiché « Milieu offensif »), age (15 au départ), status (active|archived).

## 🗄️ Données

- academyplayers
- academydecisions (nouvelle)
- academyweekreports (nouvelle)
- academyprogresspoints (nouvelle)

## 🛠️ Tâches

- [ ] Modifier src/models/fantasy.model.ts : renommer foot -> preferredFoot (alias), ajouter global, startAttributes, status, milestones[], lastTickWeek ; typer AcademyPlayerDoc.
- [ ] Créer les modèles AcademyDecision, AcademyWeekReport, AcademyProgressPoint dans src/models/academy.model.ts avec leurs index.
- [ ] Migration : décisions embarquées existantes -> AcademyDecision (idempotente) ; enum decisionType aligné sur le contrat mobile technical_training | physical_training | tactical_work | rest_recovery | nutrition_tracking.
- [ ] Index : academyplayers {userId:1} unique partiel, {category:1, global:-1}; academydecisions {playerId:1, week:1} unique; academyweekreports {playerId:1, week:-1}; academyprogresspoints {playerId:1, week:1} unique.
- [ ] Validateurs Mongoose : bornes 0-99 / 0-100 (clamp en pre-save).
- [ ] toJSON : id, name, position, age, category, week, global, form, fatigue, attributes{…}.
- [ ] Exporter dans models/index.ts.
- [ ] Schémas Swagger.

## ✔️ Critères d'acceptation

- [ ] Étant donné un utilisateur avec un joueur actif, quand il en crée un second, alors E11000 traduit en 409 ACADEMY_PLAYER_EXISTS.
- [ ] Étant donné attribute=120, alors clampé à 99.
- [ ] Étant donné deux décisions pour la semaine 4, alors la seconde remplace la première (unicité).
- [ ] Étant donné la migration rejouée, alors aucun doublon.
- [ ] Étant donné un joueur archivé, alors l'utilisateur peut en recréer un.

## 🧪 Tests à écrire

- [ ] Unitaire : clamp des bornes.
- [ ] Intégration : index unique partiel.
- [ ] Intégration : migration des décisions.
- [ ] Intégration : toJSON.
- [ ] Intégration : unicité décision/semaine.

## 📚 Références

- CDC Backend §3.5
- CDC Backend §4.4
- CDC Global §2.7

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
