> **API-PASS-15** · API · Priorité **P1** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

P-02 affiche « Membre depuis septembre 2026 », 2 340 points totaux, meilleure série, parties Guess, 81 % de réussite Guess, histogramme « Points par semaine – 8 dernières » et la répartition (Quiz 55 %, Guess the Player 30 %, 15 % autres). CDC §2.11 : meilleur streak, score quiz cumulé, classement Fantasy, nombre de parties Guess.

## ✅ Objectif

Un endpoint de statistiques calculées sans scan massif.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `P-02` — Statistiques détaillées
_Module : Culé Passport_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__phone_light.webp?raw=true' width='230' alt='P-02 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__phone_dark.webp?raw=true' width='230' alt='P-02 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__tablet_light.webp?raw=true' width='330' alt='P-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__tablet_dark.webp?raw=true' width='330' alt='P-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Statistiques » · « Membre depuis septembre 2026 » · « Global » · « Quiz » · « Guess » · « 2 340 » · « Points totaux » · « Meilleure série » · « Parties Guess » · « 81 % » · « Réussite Guess » · « Points par semaine » · « 8 dernières » · « pts » · « 55 % » · « Guess the Player » · « 30 % » · « 15 % »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [API-PASS-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-01%5D%22) · [API-PASS-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-02%5D%22) · [API-PASS-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-03%5D%22) · [API-PASS-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-04%5D%22) · [API-PASS-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-05%5D%22) · [API-PASS-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-11%5D%22) · [API-PASS-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-16%5D%22) · [API-PASS-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-18%5D%22) · [API-PASS-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-24%5D%22) · [API-PASS-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-27%5D%22) · [API-PASS-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-30%5D%22) · [API-PASS-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-32%5D%22) · [MOB-P-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-01%5D%22) · [MOB-P-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-06%5D%22) · [MOB-P-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-07%5D%22)

## 📐 Règles de gestion

- GET /users/me/stats?tab=global|quiz|guess (défaut global) ; réponse commune {memberSince, totalPoints, bestStreak} + bloc par onglet.
- global : {weeklyPoints:[{weekKey, points}] x 8 (semaines sans activité = 0), breakdown:[{source, points, percent}] (somme 100 %, pourcentages entiers, plus grand reste).
- quiz : {sessions, answers, correct, successRate, perfectSessions, quizLevel, cumulativeScore}.
- guess : {games, won, successRate (entier %, ex. 81), averageAttempts}.
- Les données viennent des compteurs de UserProgress et de UserStatsWeekly (pas de scan du journal).
- Cache privé 5 min ; dates en ISO 8601 UTC, la localisation du mois est faite par le mobile.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/users/me/stats` | Statistiques détaillées | ?tab=global | {success:true,data:{memberSince:'2026-09-03',totalPoints:2340,bestStreak:27,weeklyPoints:[{weekKey:'2026-W42',points:310}],breakdown:[{source:'quiz',points:1287,percent:55}]}} |

## 🛠️ Tâches

- [ ] Controller stats.getMine + route GET /users/me/stats.
- [ ] Service stats.service.ts : lecture UserProgress.counters + UserStatsWeekly (8 dernières semaines).
- [ ] Fonction percentBreakdown(values) (méthode du plus grand reste).
- [ ] Validator Joi tab.
- [ ] Swagger : schémas par onglet.
- [ ] Gérer successRate = 0 si games = 0.
- [ ] Cache Redis passport:stats:{userId}:{tab} 5 min.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné 100 points quiz, 60 guess, 30 autres, alors les pourcentages somment 100.
- [ ] Étant donné 21 parties Guess dont 17 gagnées, alors successRate = round(17/21*100) = 81.
- [ ] Étant donné 3 semaines d'activité, alors weeklyPoints contient 8 entrées dont 5 à 0.
- [ ] Étant donné un nouvel utilisateur, alors toutes les valeurs à 0.
- [ ] Étant donné tab=foo, alors 422.

## 🧪 Tests à écrire

- [ ] Unitaire : percentBreakdown.
- [ ] Intégration : onglet guess.
- [ ] Intégration : 8 semaines avec trous.
- [ ] Intégration : utilisateur neuf.
- [ ] Intégration : cache.

## 🔗 Dépendances

À réaliser après : `API-PASS-16` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §2.11

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
