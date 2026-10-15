> **API-JEUX-10** · API · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

L'écran D-11 « Mon historique » affiche parties jouées, taux de réussite (81 %), série en cours / meilleure série, répartition des essais et la liste des dernières parties (14 oct. Pedri 4/6 ; 12 oct. Piqué sans score = défaite). D-01 affiche « 48 parties · 81 % de réussite ».

## ✅ Objectif

Un endpoint d'historique paginé et des statistiques agrégées, calculées à partir de GuessPlay.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `D-11` — Historique et statistiques
_Module : Jeux - Guess the Player_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-11_historique-et-statistiques__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-11_historique-et-statistiques__phone_light.webp?raw=true' width='230' alt='D-11 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-11_historique-et-statistiques__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-11_historique-et-statistiques__phone_dark.webp?raw=true' width='230' alt='D-11 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-11_historique-et-statistiques__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-11_historique-et-statistiques__tablet_light.webp?raw=true' width='330' alt='D-11 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-11_historique-et-statistiques__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-11_historique-et-statistiques__tablet_dark.webp?raw=true' width='330' alt='D-11 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Mon historique » · « Parties jouées » · « 81% » · « Taux de réussite » · « Série en cours » · « Meilleure série » · « Répartition des essais » · « Dernières parties » · « 14 oct. » · « Pedri » · « 4/6 » · « 13 oct. » · « Gavi » · « 2/6 » · « 12 oct. » · « Piqué » · « 11 oct. » · « Iniesta » · « 5/6 »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [API-JEUX-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-19%5D%22) · [API-JEUX-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-33%5D%22) · [API-JEUX-35](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-35%5D%22) · [MOB-D-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-03%5D%22) · [MOB-D-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-23%5D%22) · [MOB-D-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-24%5D%22) · [MOB-D-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-28%5D%22) · [MOB-D-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-29%5D%22) · [MOB-D-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-30%5D%22)

#### `D-01` — Hub des jeux
_Module : Jeux - Guess the Player_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-01_hub-des-jeux__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-01_hub-des-jeux__phone_light.webp?raw=true' width='230' alt='D-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-01_hub-des-jeux__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-01_hub-des-jeux__phone_dark.webp?raw=true' width='230' alt='D-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-01_hub-des-jeux__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-01_hub-des-jeux__tablet_light.webp?raw=true' width='330' alt='D-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-01_hub-des-jeux__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-01_hub-des-jeux__tablet_dark.webp?raw=true' width='330' alt='D-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Un défi chaque jour » · « Défi du jour » · « Guess the » · « Player » · « Un joueur mystère, 6 essais. Même défi pour tous les culés. » · « Jouer » · « Nouveau dans 06:41:12 » · « Niveau 2 · Culé » · « Quiz » · « adaptatif » · « 10 questions calibrées sur ton niveau. Monte jusqu'à La Masia. » · « Quiz du jour » · « Plus de jeux » · « Entraînement libre » · « Quiz illimité, sans pression » · « Classements » · « Amis · Monde · Cette semaine » · « Mon historique de jeu » · « 48 parties · 81 % de réussite »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-JEUX-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-02%5D%22) · [API-JEUX-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-05%5D%22) · [API-JEUX-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-18%5D%22) · [API-JEUX-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-19%5D%22) · [API-JEUX-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-31%5D%22) · [API-JEUX-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-32%5D%22) · [API-JEUX-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-34%5D%22) · [API-JEUX-35](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-35%5D%22) · [API-JEUX-37](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-37%5D%22) · [MOB-D-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-01%5D%22) · [MOB-D-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-07%5D%22) · [MOB-D-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-08%5D%22) · [MOB-D-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-15%5D%22) · [MOB-D-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-21%5D%22) · [MOB-D-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-23%5D%22) · [MOB-D-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-28%5D%22) · [MOB-D-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-29%5D%22) · [MOB-D-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-30%5D%22)

## 📐 Règles de gestion

- Statistiques : played, wins, successRate (arrondi à l'entier, wins/played), currentStreak, bestStreak, distribution {1..6, lost} comptes des parties par nombre d'essais.
- Liste : parties terminées uniquement (les 'in_progress' exclues), tri dayKey décroissant, pagination par curseur (limit 20, max 50) ; chaque ligne {dayKey, challengeNumber, playerName, attemptsUsed, won}.
- Le nom du joueur n'est exposé que pour les parties terminées ; le défi du jour terminé est inclus.
- Agrégats mis en cache Redis 60 s par utilisateur et invalidés à la fin d'une partie.
- Utilisateur sans partie : stats à 0, successRate=null, items=[] (état vide de l'écran).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/guess-the-player/history?limit=20` | Historique personnel | limit, cursor | {success:true,data:{stats:{played:48,wins:39,successRate:81,currentStreak:12,bestStreak:15,distribution:{'1':1,'2':6,'3':14,'4':10,'5':6,'6':2,lost:9}},items:[{dayKey:'2026-10-14',challengeNumber:213,playerName:'Pedri',attemptsUsed:4,won:true}],nextCursor:null}} |

## 🛠️ Tâches

- [ ] Route GET /guess-the-player/history?limit&cursor + validateur Joi.
- [ ] Pipeline d'agrégation sur GuessPlay ($facet : stats, distribution) avec index {userId:1, dayKey:-1}.
- [ ] Jointure légère sur DailyChallenge pour number et sur Player pour le nom (lookup limité aux items de la page).
- [ ] Intégrer currentStreak/bestStreak depuis UserProgress.
- [ ] Cache Redis game:guess:stats:{userId} TTL 60 s + invalidation sur fin de partie.
- [ ] Pagination curseur conforme au format {items,total,page,totalPages,hasMore,nextCursor}.
- [ ] Swagger : GuessHistoryResponse.
- [ ] Index et explain() vérifié (IXSCAN) dans le test de performance.

## ✔️ Critères d'acceptation

- [ ] Étant donné 48 parties dont 39 gagnées, alors successRate=81 et played=48.
- [ ] Étant donné aucune partie, alors items=[] et successRate=null.
- [ ] Étant donné une partie en cours, alors elle n'apparaît pas dans items.
- [ ] Étant donné 60 parties, alors la page 1 contient 20 éléments et un nextCursor.
- [ ] Étant donné une partie qui se termine, alors le cache stats est invalidé.

## 🧪 Tests à écrire

- [ ] Intégration : stats sur jeu de 10 parties.
- [ ] Intégration : curseur sur 3 pages.
- [ ] Unitaire : arrondi du taux (80,5 → 81).
- [ ] Performance : explain IXSCAN sur la requête de liste.

## 🔗 Dépendances

À réaliser après : `API-JEUX-07` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.3
- CDC Global §2.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
