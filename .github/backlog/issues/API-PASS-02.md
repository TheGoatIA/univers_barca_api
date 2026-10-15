> **API-PASS-02** · Données · Priorité **P0** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Pour afficher un historique, une série en calendrier (P-10), des points par semaine (P-02) et pouvoir réconcilier les totaux, chaque gain doit être tracé dans un journal append-only plutôt qu'incrémenté à l'aveugle.

## ✅ Objectif

Une collection UserActivity idempotente, indexée pour les lectures par jour, par semaine et par source.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `P-02` — Statistiques détaillées
_Module : Culé Passport_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__phone_light.webp?raw=true' width='230' alt='P-02 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__phone_dark.webp?raw=true' width='230' alt='P-02 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__tablet_light.webp?raw=true' width='330' alt='P-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__tablet_dark.webp?raw=true' width='330' alt='P-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Statistiques » · « Membre depuis septembre 2026 » · « Global » · « Quiz » · « Guess » · « 2 340 » · « Points totaux » · « Meilleure série » · « Parties Guess » · « 81 % » · « Réussite Guess » · « Points par semaine » · « 8 dernières » · « pts » · « 55 % » · « Guess the Player » · « 30 % » · « 15 % »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [API-PASS-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-01%5D%22) · [API-PASS-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-03%5D%22) · [API-PASS-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-04%5D%22) · [API-PASS-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-05%5D%22) · [API-PASS-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-11%5D%22) · [API-PASS-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-15%5D%22) · [API-PASS-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-16%5D%22) · [API-PASS-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-18%5D%22) · [API-PASS-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-24%5D%22) · [API-PASS-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-27%5D%22) · [API-PASS-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-30%5D%22) · [API-PASS-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-32%5D%22) · [MOB-P-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-01%5D%22) · [MOB-P-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-06%5D%22) · [MOB-P-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-07%5D%22)

#### `P-10` — Ma série — calendrier d’activité
_Module : Culé Passport_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-10_ma-serie-calendrier-d-activite__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-10_ma-serie-calendrier-d-activite__phone_light.webp?raw=true' width='230' alt='P-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-10_ma-serie-calendrier-d-activite__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-10_ma-serie-calendrier-d-activite__phone_dark.webp?raw=true' width='230' alt='P-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-10_ma-serie-calendrier-d-activite__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-10_ma-serie-calendrier-d-activite__tablet_light.webp?raw=true' width='330' alt='P-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-10_ma-serie-calendrier-d-activite__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-10_ma-serie-calendrier-d-activite__tablet_dark.webp?raw=true' width='330' alt='P-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Ma série » · « jours de suite » · « Record : 27 jours » · « Octobre 2026 » · « Moins » · « Plus »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [API-PASS-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-01%5D%22) · [API-PASS-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-06%5D%22) · [API-PASS-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-16%5D%22) · [API-PASS-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-17%5D%22) · [API-PASS-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-18%5D%22) · [API-PASS-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-27%5D%22) · [API-PASS-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-32%5D%22) · [MOB-P-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-04%5D%22) · [MOB-P-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-16%5D%22) · [MOB-P-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-20%5D%22) · [MOB-P-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-21%5D%22)

#### `P-01` — Passport — vue d’ensemble
_Module : Culé Passport_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__phone_light.webp?raw=true' width='230' alt='P-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__phone_dark.webp?raw=true' width='230' alt='P-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__tablet_light.webp?raw=true' width='330' alt='P-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__tablet_dark.webp?raw=true' width='330' alt='P-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Culé Passport » · « Boris_Culé » · « 🇨🇲 Yaoundé · Culé depuis 2018 » · « Niveau Culé » · « 12 j » · « 2 340 » · « Points » · « Série » · « Badges » · « 18 432e » · « Prochains badges » · « Voir tout » · « Série de 100 jours » · « 12 / 100 » · « Quiz parfait » · « 8 / 10 » · « Mes derniers badges » · « 9 / 24 » · « Premier match suivi » · « Série de 10 jours » · « GOAT voter » · « Statistiques détaillées » · « Quiz, Guess the Player, Fantasy » · « Ma série » · « Calendrier d’activité » · « Paramètres » · « Langue, thème, confidentialité »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-33%5D%22) · [API-PASS-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-01%5D%22) · [API-PASS-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-03%5D%22) · [API-PASS-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-04%5D%22) · [API-PASS-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-05%5D%22) · [API-PASS-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-06%5D%22) · [API-PASS-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-11%5D%22) · [API-PASS-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-17%5D%22) · [API-PASS-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-20%5D%22) · [API-PASS-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-23%5D%22) · [API-PASS-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-24%5D%22) · [API-PASS-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-25%5D%22) · [API-PASS-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-26%5D%22) · [API-PASS-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-27%5D%22) · [API-PASS-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-28%5D%22) · [API-PASS-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-29%5D%22) · [API-PASS-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-30%5D%22) · [API-PASS-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-31%5D%22) · [API-PASS-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-32%5D%22) · [API-PASS-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-33%5D%22) · [MOB-P-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-01%5D%22) · [MOB-P-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-02%5D%22) · [MOB-P-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-03%5D%22) · [MOB-P-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-04%5D%22) · [MOB-P-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-05%5D%22) · [MOB-P-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-06%5D%22) · [MOB-P-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-18%5D%22) · [MOB-P-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-20%5D%22) · [MOB-P-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-21%5D%22)

## 📐 Règles de gestion

- UserActivity {userId, type (enum événements), source (quiz|guess|goat|fantasy|academy|community|calendar|ai|profile|admin), refId, points (entier, peut être 0), countsForStreak (Boolean), dayKey (AAAA-MM-JJ fuseau utilisateur), weekKey (AAAA-Www ISO), occurredAt, idempotencyKey (String, unique), meta (Mixed, max 2 Ko)}.
- idempotencyKey = {source}:{type}:{userId}:{refId} : unicité garantie par index unique ; une seconde insertion identique est ignorée silencieusement (E11000 -> no-op).
- Append-only : aucune modification ni suppression sauf purge RGPD ; les corrections se font par une ligne compensatoire (points négatifs, source 'admin').
- Rétention : 24 mois détaillés puis agrégation hebdomadaire (UserStatsWeekly) ; la purge n'altère pas totalPoints.
- dayKey calculé avec User.timezone (défaut Europe/Madrid) au moment de l'événement, jamais recalculé ensuite.
- meta ne contient aucune donnée personnelle (pas de texte libre utilisateur).

## 🛠️ Tâches

- [ ] Créer src/models/user-activity.model.ts avec les index {userId:1, occurredAt:-1}, {userId:1, dayKey:1}, {userId:1, weekKey:1}, {idempotencyKey:1} unique.
- [ ] Définir l'enum ActivityType dans src/services/gamification/types.ts (catalogue partagé avec les autres modules).
- [ ] Écrire dayKeyOf(date, tz) et weekKeyOf(date, tz) dans src/utils/dates.ts (Intl.DateTimeFormat).
- [ ] Ajouter une TTL partielle optionnelle (désactivée) pour la purge à 24 mois, activée par env.
- [ ] Exporter dans models/index.ts.
- [ ] Swagger : schéma ActivityItem.
- [ ] Fixtures de test : 60 jours d'activité.
- [ ] Script npm run gamification:backfill pour reconstruire depuis QuizSession/GuessAttempt.

## ✔️ Critères d'acceptation

- [ ] Étant donné deux insertions avec la même idempotencyKey, alors une seule ligne existe.
- [ ] Étant donné un utilisateur à Yaoundé (UTC+1) à 23:30 UTC, alors dayKey est le lendemain.
- [ ] Étant donné une correction admin de -50, alors une ligne compensatoire existe.
- [ ] Étant donné la purge RGPD, alors les lignes de l'utilisateur sont supprimées.
- [ ] Étant donné weekKey le 2026-10-12, alors '2026-W42'.

## 🧪 Tests à écrire

- [ ] Unitaire : dayKeyOf et weekKeyOf avec fuseaux.
- [ ] Intégration : unicité idempotencyKey.
- [ ] Intégration : index utilisés (explain).
- [ ] Intégration : backfill idempotent.
- [ ] Unitaire : taille de meta bornée.

## 🔗 Dépendances

À réaliser après : `API-PASS-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §4.3
- CDC Backend §4.7
- CDC Global §2.11

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
