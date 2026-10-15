> **API-PASS-01** · Données · Priorité **P0** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

UserProgress (userId unique, currentStreak, bestStreak, lastActivityDate, totalPoints, quizLevel, recentAnswers, badges[]) est la table agrégée du CDC §4.3 (user_progress). Elle ne porte ni compteurs par jeu, ni niveau Passport, ni fuseau du jour d'activité : les statistiques détaillées (P-02) et la série (P-10) ne peuvent pas être servies.

## ✅ Objectif

Un document de progression complet, créé à l'inscription et maintenu uniquement par le service d'attribution.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `P-01` — Passport — vue d’ensemble
_Module : Culé Passport_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__phone_light.webp?raw=true' width='230' alt='P-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__phone_dark.webp?raw=true' width='230' alt='P-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__tablet_light.webp?raw=true' width='330' alt='P-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__tablet_dark.webp?raw=true' width='330' alt='P-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Culé Passport » · « Boris_Culé » · « 🇨🇲 Yaoundé · Culé depuis 2018 » · « Niveau Culé » · « 12 j » · « 2 340 » · « Points » · « Série » · « Badges » · « 18 432e » · « Prochains badges » · « Voir tout » · « Série de 100 jours » · « 12 / 100 » · « Quiz parfait » · « 8 / 10 » · « Mes derniers badges » · « 9 / 24 » · « Premier match suivi » · « Série de 10 jours » · « GOAT voter » · « Statistiques détaillées » · « Quiz, Guess the Player, Fantasy » · « Ma série » · « Calendrier d’activité » · « Paramètres » · « Langue, thème, confidentialité »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-33%5D%22) · [API-PASS-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-02%5D%22) · [API-PASS-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-03%5D%22) · [API-PASS-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-04%5D%22) · [API-PASS-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-05%5D%22) · [API-PASS-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-06%5D%22) · [API-PASS-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-11%5D%22) · [API-PASS-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-17%5D%22) · [API-PASS-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-20%5D%22) · [API-PASS-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-23%5D%22) · [API-PASS-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-24%5D%22) · [API-PASS-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-25%5D%22) · [API-PASS-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-26%5D%22) · [API-PASS-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-27%5D%22) · [API-PASS-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-28%5D%22) · [API-PASS-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-29%5D%22) · [API-PASS-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-30%5D%22) · [API-PASS-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-31%5D%22) · [API-PASS-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-32%5D%22) · [API-PASS-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-33%5D%22) · [MOB-P-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-01%5D%22) · [MOB-P-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-02%5D%22) · [MOB-P-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-03%5D%22) · [MOB-P-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-04%5D%22) · [MOB-P-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-05%5D%22) · [MOB-P-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-06%5D%22) · [MOB-P-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-18%5D%22) · [MOB-P-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-20%5D%22) · [MOB-P-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-21%5D%22)

#### `P-02` — Statistiques détaillées
_Module : Culé Passport_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__phone_light.webp?raw=true' width='230' alt='P-02 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__phone_dark.webp?raw=true' width='230' alt='P-02 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__tablet_light.webp?raw=true' width='330' alt='P-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__tablet_dark.webp?raw=true' width='330' alt='P-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Statistiques » · « Membre depuis septembre 2026 » · « Global » · « Quiz » · « Guess » · « 2 340 » · « Points totaux » · « Meilleure série » · « Parties Guess » · « 81 % » · « Réussite Guess » · « Points par semaine » · « 8 dernières » · « pts » · « 55 % » · « Guess the Player » · « 30 % » · « 15 % »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [API-PASS-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-02%5D%22) · [API-PASS-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-03%5D%22) · [API-PASS-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-04%5D%22) · [API-PASS-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-05%5D%22) · [API-PASS-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-11%5D%22) · [API-PASS-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-15%5D%22) · [API-PASS-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-16%5D%22) · [API-PASS-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-18%5D%22) · [API-PASS-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-24%5D%22) · [API-PASS-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-27%5D%22) · [API-PASS-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-30%5D%22) · [API-PASS-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-32%5D%22) · [MOB-P-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-01%5D%22) · [MOB-P-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-06%5D%22) · [MOB-P-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-07%5D%22)

#### `P-10` — Ma série — calendrier d’activité
_Module : Culé Passport_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-10_ma-serie-calendrier-d-activite__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-10_ma-serie-calendrier-d-activite__phone_light.webp?raw=true' width='230' alt='P-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-10_ma-serie-calendrier-d-activite__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-10_ma-serie-calendrier-d-activite__phone_dark.webp?raw=true' width='230' alt='P-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-10_ma-serie-calendrier-d-activite__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-10_ma-serie-calendrier-d-activite__tablet_light.webp?raw=true' width='330' alt='P-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-10_ma-serie-calendrier-d-activite__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-10_ma-serie-calendrier-d-activite__tablet_dark.webp?raw=true' width='330' alt='P-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Ma série » · « jours de suite » · « Record : 27 jours » · « Octobre 2026 » · « Moins » · « Plus »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [API-PASS-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-02%5D%22) · [API-PASS-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-06%5D%22) · [API-PASS-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-16%5D%22) · [API-PASS-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-17%5D%22) · [API-PASS-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-18%5D%22) · [API-PASS-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-27%5D%22) · [API-PASS-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-32%5D%22) · [MOB-P-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-04%5D%22) · [MOB-P-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-16%5D%22) · [MOB-P-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-20%5D%22) · [MOB-P-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-21%5D%22)

## 📐 Règles de gestion

- Un document par utilisateur, créé paresseusement à la première lecture ou à l'inscription (upsert) ; jamais modifié directement par un contrôleur utilisateur.
- Nouveaux champs : passportLevel (1..5), counters {quizSessions, quizAnswers, quizCorrect, quizPerfect, guessGames, guessWon, goatVotes, fantasyGameweeks, academyWeeks}, pointsBySource {quiz, guess, goat, fantasy, academy, other}, lastActivityDayKey (AAAA-MM-JJ dans le fuseau de l'utilisateur), streakStartedOn, bestStreakEndedOn, flags {suspicious}.
- totalPoints, compteurs et pointsBySource sont des entiers >= 0 ; totalPoints est toujours égal à la somme du journal UserActivity (invariant vérifié par la réconciliation nocturne).
- currentStreak <= bestStreak ; bestStreak ne diminue jamais (sauf correction admin journalisée).
- Le champ badges[] embarqué est conservé comme copie dénormalisée en lecture rapide (source de vérité : collection UserBadge).
- Valeurs d'exemple des maquettes (P-01) : totalPoints 2340, currentStreak 12, 9 badges ; P-10 : record 27 jours.

## 🗄️ Données

- userprogresses (user_progress)

## 🛠️ Tâches

- [ ] Modifier src/models/gamification.model.ts : ajouter les champs ci-dessus, typer UserProgressDoc, ajouter les index {totalPoints:-1} et {userId:1} unique (existant).
- [ ] Créer la fonction getOrCreateProgress(userId) (findOneAndUpdate upsert $setOnInsert).
- [ ] Migration migrations/xxxx-user-progress-counters.ts : initialise les nouveaux champs à 0 puis recalcule les compteurs depuis QuizSession et GuessAttempt.
- [ ] Validation pre-save : currentStreak <= bestStreak, entiers >= 0.
- [ ] toJSON : exposer les champs publics uniquement (aucun flag interne).
- [ ] Appeler getOrCreateProgress depuis auth.service.register pour initialiser.
- [ ] Mettre à jour les schémas Swagger UserProgress.
- [ ] Test de non-régression sur l'unicité userId.

## ✔️ Critères d'acceptation

- [ ] Étant donné un nouvel utilisateur, alors un UserProgress à zéro existe après l'inscription.
- [ ] Étant donné currentStreak 12 et bestStreak 10, alors la sauvegarde est refusée.
- [ ] Étant donné la migration rejouée, alors les compteurs sont identiques.
- [ ] Étant donné deux appels concurrents à getOrCreateProgress, alors un seul document.
- [ ] Étant donné un document sérialisé, alors flags.suspicious n'est pas exposé.

## 🧪 Tests à écrire

- [ ] Unitaire : validateurs.
- [ ] Intégration : upsert concurrent.
- [ ] Intégration : migration idempotente.
- [ ] Intégration : toJSON masque les champs internes.
- [ ] Intégration : invariant totalPoints.

## 📚 Références

- CDC Backend §4.3
- CDC Global §2.11

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
