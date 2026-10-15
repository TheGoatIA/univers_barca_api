> **API-JEUX-02** · Infrastructure · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

Le CDC prévoit un job « generate-daily-challenge » à minuit avec un fuseau de référence « à définir ». Il faut trancher : tous les utilisateurs partagent le même défi, daté sur le jour calendaire Europe/Madrid (fuseau du club), les countdowns affichés (« Nouveau dans 06:41:12 », D-01 ; « 06:41 avant le prochain », D-10) étant calculés vers le prochain minuit Madrid.

## ✅ Objectif

Chaque jour à 00:00 Europe/Madrid, un défi Guess the Player et un défi quiz existent, identiques pour tous, sans doublon même si le job est rejoué ou si deux instances tournent.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `D-01` — Hub des jeux
_Module : Jeux - Guess the Player_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-01_hub-des-jeux__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-01_hub-des-jeux__phone_light.webp?raw=true' width='230' alt='D-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-01_hub-des-jeux__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-01_hub-des-jeux__phone_dark.webp?raw=true' width='230' alt='D-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-01_hub-des-jeux__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-01_hub-des-jeux__tablet_light.webp?raw=true' width='330' alt='D-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-01_hub-des-jeux__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-01_hub-des-jeux__tablet_dark.webp?raw=true' width='330' alt='D-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Un défi chaque jour » · « Défi du jour » · « Guess the » · « Player » · « Un joueur mystère, 6 essais. Même défi pour tous les culés. » · « Jouer » · « Nouveau dans 06:41:12 » · « Niveau 2 · Culé » · « Quiz » · « adaptatif » · « 10 questions calibrées sur ton niveau. Monte jusqu'à La Masia. » · « Quiz du jour » · « Plus de jeux » · « Entraînement libre » · « Quiz illimité, sans pression » · « Classements » · « Amis · Monde · Cette semaine » · « Mon historique de jeu » · « 48 parties · 81 % de réussite »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-JEUX-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-05%5D%22) · [API-JEUX-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-10%5D%22) · [API-JEUX-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-18%5D%22) · [API-JEUX-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-19%5D%22) · [API-JEUX-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-31%5D%22) · [API-JEUX-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-32%5D%22) · [API-JEUX-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-34%5D%22) · [API-JEUX-35](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-35%5D%22) · [API-JEUX-37](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-37%5D%22) · [MOB-D-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-01%5D%22) · [MOB-D-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-07%5D%22) · [MOB-D-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-08%5D%22) · [MOB-D-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-15%5D%22) · [MOB-D-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-21%5D%22) · [MOB-D-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-23%5D%22) · [MOB-D-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-28%5D%22) · [MOB-D-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-29%5D%22) · [MOB-D-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-30%5D%22)

#### `D-10` — Déjà joué — prochain défi
_Module : Jeux - Guess the Player_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-10_deja-joue-prochain-defi__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-10_deja-joue-prochain-defi__phone_light.webp?raw=true' width='230' alt='D-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-10_deja-joue-prochain-defi__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-10_deja-joue-prochain-defi__phone_dark.webp?raw=true' width='230' alt='D-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-10_deja-joue-prochain-defi__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-10_deja-joue-prochain-defi__tablet_light.webp?raw=true' width='330' alt='D-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-10_deja-joue-prochain-defi__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-10_deja-joue-prochain-defi__tablet_dark.webp?raw=true' width='330' alt='D-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Guess the Player » · « avant le prochain » · « Reviens demain ! » · « Tu as déjà relevé le défi n°214 aujourd'hui. Un nouveau joueur mystère arrive à minuit. » · « Revoir mon résultat » · « Jouer au quiz du jour »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-JEUX-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-01%5D%22) · [API-JEUX-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-05%5D%22) · [API-JEUX-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-18%5D%22) · [API-JEUX-35](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-35%5D%22) · [MOB-D-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-04%5D%22) · [MOB-D-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-20%5D%22) · [MOB-D-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-21%5D%22) · [MOB-D-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-28%5D%22) · [MOB-D-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-29%5D%22) · [MOB-D-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-30%5D%22)

## 📐 Règles de gestion

- Fuseau de référence : GAME_TZ=Europe/Madrid (variable d'environnement validée dans src/config). dayKey = date locale Madrid ; tout calcul de jour (défi, streak, classement hebdomadaire) passe par src/utils/gameClock.ts.
- Pré-génération : à 22:00 Madrid, le job crée le défi du lendemain en status 'scheduled' (si l'admin n'a pas planifié de joueur) ; à 00:00 Madrid, il passe 'scheduled' → 'active'. Filet de sécurité : si /today est appelé et que le défi du jour n'existe pas, génération paresseuse protégée par l'index unique (type, dayKey).
- File BullMQ dédiée 'daily-challenge' (ajoutée à QUEUE_NAMES) : jobs 'generate-guess' et 'generate-quiz', jobId = `${type}:${dayKey}` pour dédupliquer ; attempts 5, backoff exponentiel 2 s (défauts existants) ; au-delà, dead-letter.
- Changement d'heure (DST) : la veille/lendemain de bascule, le jour dure 23 h ou 25 h ; countdown et cron doivent rester corrects (tests sur 2026-03-29 et 2026-10-25).
- Le job ne publie rien de façon destructive : jamais de modification d'un défi dont status='active' ou 'closed'.
- Alerte (log error + métrique game_daily_challenge_missing) si à 00:05 aucun défi actif n'existe.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/games/clock` | Horloge de référence des jeux (publique, non cachée) | — | {success:true,data:{dayKey:'2026-10-15',nextChallengeAt:'2026-10-15T22:00:00.000Z',serverTime:'…'}} |

## 🗄️ Données

- daily_challenges (dayKey, status), counters

## 🛠️ Tâches

- [ ] Ajouter 'daily-challenge' à QUEUE_NAMES dans src/jobs/queues.ts et enregistrer le worker dans src/jobs/workers/daily-challenge.worker.ts.
- [ ] Ajouter dans src/jobs/scheduler.ts deux répétables cron avec tz Europe/Madrid : '0 22 * * *' (pré-génération J+1) et '0 0 * * *' (activation + clôture de J-1).
- [ ] Créer src/utils/gameClock.ts : todayKey(now), nextMidnightMadrid(now), secondsToNextChallenge(now) basés sur Intl/luxon, injectables pour les tests.
- [ ] Créer src/services/daily-challenge.service.ts : ensureChallenge(type, dayKey) (upsert $setOnInsert), activate(dayKey), closePrevious(dayKey).
- [ ] Brancher la sélection du joueur (issue sélection) et la graine du quiz (seed = hash(dayKey + secret)).
- [ ] Exposer GET /api/v1/games/clock (public) {dayKey, nextChallengeAt ISO, serverTime} pour synchroniser les countdowns mobiles (tolérance d'horloge).
- [ ] Ajouter les métriques Prometheus game_daily_challenge_generated_total{type}, game_daily_challenge_missing.
- [ ] Ajouter les variables GAME_TZ et GAME_PREGEN_HOUR au .env.example et à la validation de config.

## ✔️ Critères d'acceptation

- [ ] Étant donné le 15/10/2026 22:00 Madrid, quand le job de pré-génération tourne, alors un défi 'scheduled' existe pour 2026-10-16.
- [ ] Étant donné le job exécuté deux fois à 00:00, alors un seul défi actif existe par type.
- [ ] Étant donné une instance qui plante pendant la génération, quand le job est rejoué, alors le défi est créé une seule fois.
- [ ] Étant donné le passage à l'heure d'hiver (2026-10-25), quand secondsToNextChallenge est appelé à 12:00, alors la valeur vaut 13 h (et non 12 h).
- [ ] Étant donné aucun défi pour aujourd'hui, quand un utilisateur appelle /guess-the-player/today, alors un défi est généré paresseusement et retourné.

## 🧪 Tests à écrire

- [ ] Unitaire : todayKey à 23:59:59 et 00:00:00 Madrid (UTC+1 et UTC+2).
- [ ] Unitaire : secondsToNextChallenge pendant les deux changements d'heure 2026.
- [ ] Intégration (mongodb-memory-server) : 10 appels concurrents ensureChallenge → 1 document.
- [ ] Intégration : worker rejoué, jobId dédupliqué.
- [ ] Intégration : lazy-generation depuis /today.

## 🔗 Dépendances

À réaliser après : `API-JEUX-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.3
- CDC Backend §7
- CDC Backend §7.1
- CDC Global §2.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
