> **API-JEUX-03** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

« Sélection pondérée pour éviter les répétitions récentes » (CDC §3.3). Le joueur mystère doit disposer de tous les indices comparés dans la grille (nation, poste, âge, numéro, club précédent) et être publié.

## ✅ Objectif

Un service qui choisit chaque jour un joueur éligible, avec une probabilité plus faible pour ceux sortis récemment, et reproductible pour le test.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `D-03` — Début de partie
_Module : Jeux - Guess the Player_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-03_debut-de-partie__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-03_debut-de-partie__phone_light.webp?raw=true' width='230' alt='D-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-03_debut-de-partie__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-03_debut-de-partie__phone_dark.webp?raw=true' width='230' alt='D-03 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-03_debut-de-partie__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-03_debut-de-partie__tablet_light.webp?raw=true' width='330' alt='D-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-03_debut-de-partie__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-03_debut-de-partie__tablet_dark.webp?raw=true' width='330' alt='D-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Guess the Player » · « Défi n°214 · 0/6 essais » · « Qui est le joueur mystère ? » · « Chaque essai compare tes choix aux indices. » · « Joueur » · « Nation » · « Poste » · « Âge » · « N° » · « Club » · « Correct » · « Proche » · « Faux » · « ▲▼ plus / moins » · « Nom du joueur… »

**Composants repérés** : `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [API-JEUX-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-01%5D%22) · [API-JEUX-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-04%5D%22) · [API-JEUX-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-05%5D%22) · [API-JEUX-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-07%5D%22) · [API-JEUX-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-08%5D%22) · [API-JEUX-35](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-35%5D%22) · [API-JEUX-36](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-36%5D%22) · [API-JEUX-37](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-37%5D%22) · [MOB-D-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-01%5D%22) · [MOB-D-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-02%5D%22) · [MOB-D-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-03%5D%22) · [MOB-D-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-05%5D%22) · [MOB-D-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-06%5D%22) · [MOB-D-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-10%5D%22) · [MOB-D-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-12%5D%22) · [MOB-D-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-21%5D%22) · [MOB-D-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-25%5D%22) · [MOB-D-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-26%5D%22) · [MOB-D-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-28%5D%22) · [MOB-D-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-29%5D%22) · [MOB-D-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-30%5D%22)

## 📐 Règles de gestion

- Éligibilité : Player.status='published', nationality, position, birthDate, shirtNumber et previousClub renseignés (sinon exclu) ; joueurs actifs et légendes autorisés.
- Anti-répétition : exclusion stricte des joueurs utilisés dans les 90 derniers défis ; ensuite poids = min(1, joursDepuisDernierUsage / 365) avec poids 1 si jamais utilisé.
- Pondération complémentaire : poids ×1,5 pour l'effectif actuel (isActive) pour garder le jeu d'actualité, paramétrable (GUESS_ACTIVE_BOOST).
- Tirage aléatoire pondéré cryptographique (crypto.randomInt) ; seed journalisée pour audit ; si moins de 30 joueurs éligibles, alerte et repli sur la totalité des publiés.
- Un joueur planifié par l'admin (issue planification) prime sur le tirage automatique.

## 🛠️ Tâches

- [ ] Créer src/services/guess-selection.service.ts : listEligible(), computeWeights(history), pickWeighted(rng).
- [ ] Requête agrégée : derniers usages via DailyChallenge.payload.playerId (index {type:1, dayKey:-1}).
- [ ] Ajouter un champ Player.guessLastUsedAt (mis à jour à l'activation du défi) pour éviter l'agrégation à chaque tirage.
- [ ] Exposer un mode dry-run (script npm run games:preview-pool) qui affiche les 20 joueurs les plus probables.
- [ ] Paramètres GUESS_NO_REPEAT_DAYS=90 et GUESS_ACTIVE_BOOST dans src/config.
- [ ] Journaliser {dayKey, playerId, candidates, weight} au niveau info avec traceId.
- [ ] Gérer le cas pool vide : lever AppError 'GUESS_POOL_EMPTY' (500) et alerter.

## ✔️ Critères d'acceptation

- [ ] Étant donné 100 joueurs éligibles dont 90 utilisés dans les 90 derniers jours, quand on tire, alors le joueur est choisi parmi les 10 restants.
- [ ] Étant donné un joueur sans previousClub, alors il n'est jamais tiré.
- [ ] Étant donné une planification admin pour demain, alors le tirage auto est ignoré.
- [ ] Étant donné un RNG injecté fixe, alors le tirage est déterministe.
- [ ] Étant donné un pool < 30, alors une alerte est loggée.

## 🧪 Tests à écrire

- [ ] Unitaire : computeWeights (jamais utilisé, utilisé hier, utilisé il y a 200 jours).
- [ ] Unitaire : pickWeighted avec RNG injecté (distribution sur 10 000 tirages ±3 %).
- [ ] Unitaire : exclusion des fiches incomplètes (5 cas).
- [ ] Intégration : tirage sur base de test de 50 joueurs publiés.

## 🔗 Dépendances

À réaliser après : `API-JEUX-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.3
- CDC Global §2.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
