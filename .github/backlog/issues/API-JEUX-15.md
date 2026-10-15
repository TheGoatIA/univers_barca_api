> **API-JEUX-15** · API · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

L'écran E-11 propose catégories (Joueurs, Histoire, Statistiques, Matchs, Trophées, La Masia), difficulté (Mon niveau / Facile / Difficile), nombre de questions, chronomètre on/off. E-12 est la question d'entraînement (bandeau « Entraînement », 3/10). Aucun impact sur niveau, classement, streak ni XP.

## ✅ Objectif

Un mode d'entraînement paramétrable, illimité, isolé du système de progression.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `E-11` — Entraînement libre — configuration
_Module : Quiz adaptatif_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-11_entrainement-libre-configuration__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-11_entrainement-libre-configuration__phone_light.webp?raw=true' width='230' alt='E-11 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-11_entrainement-libre-configuration__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-11_entrainement-libre-configuration__phone_dark.webp?raw=true' width='230' alt='E-11 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-11_entrainement-libre-configuration__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-11_entrainement-libre-configuration__tablet_light.webp?raw=true' width='330' alt='E-11 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-11_entrainement-libre-configuration__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-11_entrainement-libre-configuration__tablet_dark.webp?raw=true' width='330' alt='E-11 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Entraînement libre » · « Choisis tes thèmes. Aucun impact sur ton niveau ni ton classement. » · « Catégories » · « Joueurs » · « Histoire » · « Statistiques » · « Matchs » · « Trophées » · « La Masia » · « Difficulté » · « Mon niveau » · « Facile » · « Difficile » · « Nombre de questions » · « Afficher le chronomètre » · « 30 secondes par question » · « Lancer l’entraînement »

**Composants repérés** : `btn`, `card`, `chip`, `toggle`

</details>

**Issues liées sur ce même écran :** [MOB-E-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-23%5D%22) · [MOB-E-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-24%5D%22) · [MOB-E-33](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-33%5D%22) · [MOB-E-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-34%5D%22)

#### `E-12` — Entraînement — question
_Module : Quiz adaptatif_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-12_entrainement-question__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-12_entrainement-question__phone_light.webp?raw=true' width='230' alt='E-12 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-12_entrainement-question__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-12_entrainement-question__phone_dark.webp?raw=true' width='230' alt='E-12 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-12_entrainement-question__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-12_entrainement-question__tablet_light.webp?raw=true' width='330' alt='E-12 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-12_entrainement-question__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-12_entrainement-question__tablet_dark.webp?raw=true' width='330' alt='E-12 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Entraînement » · « Niveau 2 · Culé » · « 3/10 » · « Histoire · Question 3 » · « Quel joueur a marqué le but de la victoire en finale de la Ligue des champions 2015 à Berlin face à la Juventus ? » · « Neymar Jr » · « Luis Suárez » · « Ivan Rakitić » · « Lionel Messi » · « Valider »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-JEUX-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-13%5D%22) · [MOB-E-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-03%5D%22) · [MOB-E-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-06%5D%22) · [MOB-E-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-07%5D%22) · [MOB-E-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-13%5D%22) · [MOB-E-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-24%5D%22) · [MOB-E-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-31%5D%22) · [MOB-E-33](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-33%5D%22) · [MOB-E-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-34%5D%22)

## 📐 Règles de gestion

- Paramètres : categories (liste, défaut = toutes), difficulty ∈ mine|easy|hard (niveau, niveau-1, niveau+1 bornés), count ∈ {5,10,20} (défaut 10), timer boolean (30 s/question si true).
- Session mode='practice' : points = 0 dans le ledger, aucune mise à jour de recentAnswers/quizLevel, pas de streak, pas de classement ; les explications restent affichées.
- Aucune limite quotidienne mais rate limit 20 sessions/heure/utilisateur.
- Si moins de questions disponibles que count, retour du maximum avec `shortage:true` plutôt qu'une erreur.
- Les réponses passent par le même POST /quiz/answer (mode détecté par la session) mais la mémoire anti-rejeu 30 jours n'est pas alimentée.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/quiz/practice?categories=history,players&difficulty=mine&count=10&timer=true` | Crée une session d'entraînement | categories, difficulty, count, timer | {success:true,data:{sessionId:'…',mode:'practice',secondsPerQuestion:30,questions:[…],shortage:false}} |

## 🛠️ Tâches

- [ ] Route GET /quiz/practice?categories=&difficulty=&count=&timer= (crée la session) + validateur Joi (enum, count dans {5,10,20}).
- [ ] Étendre quiz-selection.service.composePractice (filtres, difficulté relative).
- [ ] Marquer la session pour neutraliser points, streak, niveau et leaderboard (flag countsForProgress=false).
- [ ] Retourner timer et secondsPerQuestion (30 ou null).
- [ ] Mapper la même projection publique de questions que le quiz du jour.
- [ ] Rate limiter 'practiceLimiter' (20/h).
- [ ] Swagger : QuizPracticeResponse.
- [ ] Alimenter les métriques game_quiz_sessions_total{mode='practice'}.

## ✔️ Critères d'acceptation

- [ ] Étant donné categories=history,players et count=5, alors 5 questions de ces catégories sont retournées.
- [ ] Étant donné difficulty=hard et niveau 2, alors les questions sont de niveau 3.
- [ ] Étant donné une session practice terminée, alors UserProgress est inchangé.
- [ ] Étant donné count=7, alors 422.
- [ ] Étant donné un pool de 3 questions pour count=10, alors 3 questions et shortage=true.

## 🧪 Tests à écrire

- [ ] Intégration : filtres catégories et difficulté.
- [ ] Intégration : UserProgress inchangé après practice.
- [ ] Unitaire : validateur Joi.
- [ ] Intégration : rate limit.

## 🔗 Dépendances

À réaliser après : `API-JEUX-13` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.4
- CDC Global §2.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
