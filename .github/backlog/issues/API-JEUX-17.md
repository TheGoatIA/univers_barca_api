> **API-JEUX-17** · API · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Après la 10e réponse, E-08 affiche « 8/10 bonnes réponses · +120 pts · 01:48 · 80 % », la barre « Progression vers Socio 75 % » ; E-09 la modale « Niveau supérieur ! » et E-10 « On ajuste le tir » en cas de descente ; « Revoir les explications » rouvre les 10 questions corrigées.

## ✅ Objectif

Un endpoint de finalisation/consultation du résultat qui applique l'algorithme d'adaptation une seule fois.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `E-08` — Résultat de la session
_Module : Quiz adaptatif_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-08_resultat-de-la-session__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-08_resultat-de-la-session__phone_light.webp?raw=true' width='230' alt='E-08 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-08_resultat-de-la-session__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-08_resultat-de-la-session__phone_dark.webp?raw=true' width='230' alt='E-08 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-08_resultat-de-la-session__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-08_resultat-de-la-session__tablet_light.webp?raw=true' width='330' alt='E-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-08_resultat-de-la-session__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-08_resultat-de-la-session__tablet_dark.webp?raw=true' width='330' alt='E-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Résultat » · « 8/10 » · « bonnes réponses » · « Excellent travail ! » · « +120 » · « Points » · « Temps » · « 80 % » · « Réussite » · « Progression vers Socio » · « 75 % » · « Encore une bonne série pour monter de niveau. » · « Revoir les explications » · « Voir le classement »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-JEUX-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-11%5D%22) · [API-JEUX-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-12%5D%22) · [API-JEUX-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-20%5D%22) · [API-JEUX-35](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-35%5D%22) · [MOB-E-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-02%5D%22) · [MOB-E-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-05%5D%22) · [MOB-E-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-06%5D%22) · [MOB-E-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-08%5D%22) · [MOB-E-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-19%5D%22) · [MOB-E-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-20%5D%22) · [MOB-E-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-24%5D%22) · [MOB-E-33](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-33%5D%22) · [MOB-E-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-34%5D%22)

#### `E-09` — Montée de niveau
_Module : Quiz adaptatif_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-09_montee-de-niveau__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-09_montee-de-niveau__phone_light.webp?raw=true' width='230' alt='E-09 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-09_montee-de-niveau__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-09_montee-de-niveau__phone_dark.webp?raw=true' width='230' alt='E-09 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-09_montee-de-niveau__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-09_montee-de-niveau__tablet_light.webp?raw=true' width='330' alt='E-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-09_montee-de-niveau__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-09_montee-de-niveau__tablet_dark.webp?raw=true' width='330' alt='E-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Résultat » · « Niveau supérieur ! » · « Socio » · « Tu passes du niveau 2 au niveau 3. Les questions seront plus corsées — et rapporteront plus de points. » · « Continuer » · « Partager »

**Composants repérés** : `btn`, `modal`

</details>

**Issues liées sur ce même écran :** [API-JEUX-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-12%5D%22) · [MOB-E-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-08%5D%22) · [MOB-E-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-21%5D%22) · [MOB-E-33](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-33%5D%22) · [MOB-E-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-34%5D%22)

#### `E-10` — Retour au palier inférieur
_Module : Quiz adaptatif_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-10_retour-au-palier-inferieur__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-10_retour-au-palier-inferieur__phone_light.webp?raw=true' width='230' alt='E-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-10_retour-au-palier-inferieur__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-10_retour-au-palier-inferieur__phone_dark.webp?raw=true' width='230' alt='E-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-10_retour-au-palier-inferieur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-10_retour-au-palier-inferieur__tablet_light.webp?raw=true' width='330' alt='E-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-10_retour-au-palier-inferieur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-10_retour-au-palier-inferieur__tablet_dark.webp?raw=true' width='330' alt='E-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Résultat » · « On ajuste le tir » · « Pour que le quiz reste agréable, tu repasses au niveau » · « Culé » · « . Tu y remonteras vite ! » · « Compris »

**Composants repérés** : `btn`, `modal`

</details>

**Issues liées sur ce même écran :** [API-JEUX-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-12%5D%22) · [MOB-E-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-08%5D%22) · [MOB-E-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-22%5D%22) · [MOB-E-33](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-33%5D%22) · [MOB-E-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-34%5D%22)

#### `E-17` — Quiz déjà joué
_Module : Quiz adaptatif_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-17_quiz-deja-joue__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-17_quiz-deja-joue__phone_light.webp?raw=true' width='230' alt='E-17 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-17_quiz-deja-joue__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-17_quiz-deja-joue__phone_dark.webp?raw=true' width='230' alt='E-17 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-17_quiz-deja-joue__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-17_quiz-deja-joue__tablet_light.webp?raw=true' width='330' alt='E-17 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-17_quiz-deja-joue__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-17_quiz-deja-joue__tablet_dark.webp?raw=true' width='330' alt='E-17 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Quiz du jour » · « Quiz du jour terminé » · « Tu as fait 8/10 aujourd’hui. Le prochain quiz arrive demain — en attendant, entraîne-toi librement ! » · « Entraînement libre » · « Voir mon résultat »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-JEUX-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-14%5D%22) · [API-JEUX-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-18%5D%22) · [MOB-E-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-04%5D%22) · [MOB-E-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-12%5D%22) · [MOB-E-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-30%5D%22) · [MOB-E-33](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-33%5D%22) · [MOB-E-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-34%5D%22)

## 📐 Règles de gestion

- GET /quiz/sessions/:id/result : disponible uniquement pour la session de l'utilisateur et terminée ; finalisation automatique à la 10e réponse ou à l'expiration.
- Contenu : correct, total, successRate, pointsTotal, durationMs (total des timeMs, « 01:48 »), levelBefore, levelAfter, levelChange 'up'|'down'|'none', progress {successRate, nextLevel, nextThreshold}, rank hebdomadaire optionnel.
- La finalisation (daily) est idempotente : applique computeLevelChange, écrit le ledger de points (une écriture par session), met à jour streak ; un second appel ne rejoue rien.
- GET /quiz/sessions/:id/review : liste des 10 questions avec texte, options, bonne réponse, réponse donnée, explication — accessible seulement après la fin de la session.
- Aucun changement de niveau pour practice (levelChange='none').
- Résultat du jour re-consultable (E-17 « Voir mon résultat »).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/quiz/sessions/:id/result` | Résultat de session | — | {success:true,data:{correct:8,total:10,successRate:80,pointsTotal:120,durationMs:108000,levelBefore:2,levelAfter:2,levelChange:'none',progress:{nextLevel:3,nextThreshold:75,successRate:80}}} |
| `GET` | `/api/v1/quiz/sessions/:id/review` | Revue des questions corrigées | — | {success:true,data:{items:[{questionId:'…',text:'…',options:['…'],correctIndex:2,selectedIndex:1,explanation:'…'}]}} |

## 🛠️ Tâches

- [ ] Routes GET /quiz/sessions/:id/result et /review dans quiz.routes.ts.
- [ ] Service quizService.finalizeSession(sessionId) transactionnel : lock sur finishedAt:null, appelle quiz-progress.service, xp ledger, streak.
- [ ] Calcul de durationMs et successRate.
- [ ] Mapper QuizResultDto et QuizReviewDto.
- [ ] Évènement interne 'quiz.level_changed' consommé par les notifications (module NOTIF) pour une éventuelle félicitation.
- [ ] Contrôle d'accès : 404 si la session n'appartient pas à l'utilisateur.
- [ ] Swagger : QuizResultResponse, QuizReviewResponse.
- [ ] Tests de finalisation concurrente (2 appels simultanés).

## ✔️ Critères d'acceptation

- [ ] Étant donné une session de 8 bonnes réponses au niveau 2 avec fenêtre à ≥ 75 %, alors levelChange='up' et levelAfter=3.
- [ ] Étant donné 2/10, alors levelChange='down' selon le palier.
- [ ] Étant donné deux appels simultanés de finalisation, alors les points ne sont inscrits qu'une fois.
- [ ] Étant donné une session d'un autre utilisateur, alors 404.
- [ ] Étant donné une session non terminée, alors /review renvoie 409.

## 🧪 Tests à écrire

- [ ] Intégration : up / down / none.
- [ ] Intégration : finalisation idempotente.
- [ ] Sécurité : accès à la session d'autrui.
- [ ] Unitaire : durée et taux.
- [ ] Intégration : review sans fuite avant la fin.

## 🔗 Dépendances

À réaliser après : `API-JEUX-16` · `API-JEUX-19` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.4
- CDC Backend §3.12.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
