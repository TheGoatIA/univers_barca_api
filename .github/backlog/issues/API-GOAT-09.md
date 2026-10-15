> **API-GOAT-09** · Fonctionnel · Priorité **P0** · Taille **S** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

G-04 indique « Ton vote est modifiable une fois par semaine » et G-07 « Tu pourras modifier ton vote dans 3 jours ». La règle doit être exacte et identique pour le serveur, le cache et l'affichage.

## ✅ Objectif

Un module de règle pur, testé avec horloge simulée, utilisé par le vote, la consultation de myVote et les tests.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `G-04` — Résultat — statistiques croisées
_Module : Comparateur GOAT_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-04_resultat-statistiques-croisees__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-04_resultat-statistiques-croisees__phone_light.webp?raw=true' width='230' alt='G-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-04_resultat-statistiques-croisees__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-04_resultat-statistiques-croisees__phone_dark.webp?raw=true' width='230' alt='G-04 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-04_resultat-statistiques-croisees__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-04_resultat-statistiques-croisees__tablet_light.webp?raw=true' width='330' alt='G-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-04_resultat-statistiques-croisees__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-04_resultat-statistiques-croisees__tablet_dark.webp?raw=true' width='330' alt='G-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Messi vs Xavi » · « Messi » · « Xavi » · « Matchs » · « Buts » · « Passes décisives » · « Trophées » · « Saisons » · « 0,86 » · « Buts par match » · « 0,11 » · « Qui est le GOAT à tes yeux ? » · « Ton vote est modifiable une fois par semaine. »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-GOAT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-01%5D%22) · [API-GOAT-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-02%5D%22) · [API-GOAT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-03%5D%22) · [API-GOAT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-06%5D%22) · [API-GOAT-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-08%5D%22) · [API-GOAT-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-12%5D%22) · [API-GOAT-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-14%5D%22) · [API-GOAT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-19%5D%22) · [API-GOAT-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-20%5D%22) · [API-GOAT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-21%5D%22) · [API-GOAT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-22%5D%22) · [API-GOAT-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-23%5D%22) · [MOB-G-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-01%5D%22) · [MOB-G-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-02%5D%22) · [MOB-G-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-03%5D%22) · [MOB-G-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-04%5D%22) · [MOB-G-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-09%5D%22) · [MOB-G-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-11%5D%22) · [MOB-G-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-14%5D%22) · [MOB-G-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-15%5D%22) · [MOB-G-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-16%5D%22) · [MOB-G-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-17%5D%22)

#### `G-07` — Vote déjà effectué — erreur 409
_Module : Comparateur GOAT_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-07_vote-deja-effectue-erreur-409__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-07_vote-deja-effectue-erreur-409__phone_light.webp?raw=true' width='230' alt='G-07 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-07_vote-deja-effectue-erreur-409__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-07_vote-deja-effectue-erreur-409__phone_dark.webp?raw=true' width='230' alt='G-07 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-07_vote-deja-effectue-erreur-409__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-07_vote-deja-effectue-erreur-409__tablet_light.webp?raw=true' width='330' alt='G-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-07_vote-deja-effectue-erreur-409__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-07_vote-deja-effectue-erreur-409__tablet_dark.webp?raw=true' width='330' alt='G-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Messi vs Xavi » · « Messi » · « Xavi » · « Résultat de la communauté » · « 12 481 votes · tu as voté pour Messi » · « 71 % » · « 29 % » · « Déjà voté cette semaine » · « Tu pourras modifier ton vote dans » · « 3 jours » · « . Merci de ta participation ! »

**Composants repérés** : `btn`, `card`, `modal`

</details>

**Issues liées sur ce même écran :** [API-GOAT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-01%5D%22) · [API-GOAT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-06%5D%22) · [API-GOAT-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-08%5D%22) · [API-GOAT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-10%5D%22) · [API-GOAT-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-12%5D%22) · [API-GOAT-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-17%5D%22) · [API-GOAT-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-18%5D%22) · [API-GOAT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-19%5D%22) · [API-GOAT-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-20%5D%22) · [API-GOAT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-24%5D%22) · [API-GOAT-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-25%5D%22) · [MOB-G-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-01%5D%22) · [MOB-G-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-02%5D%22) · [MOB-G-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-03%5D%22) · [MOB-G-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-04%5D%22) · [MOB-G-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-11%5D%22) · [MOB-G-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-13%5D%22) · [MOB-G-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-16%5D%22) · [MOB-G-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-17%5D%22)

## 📐 Règles de gestion

- Fenêtre glissante de 7 × 24 h à partir de lastChangedAt (création = premier changement) ; canChangeAt = lastChangedAt + 7 jours.
- Un vote identique au choix actuel après 7 jours ne compte pas comme changement (200, pas de modification, lastChangedAt inchangé).
- retryAfterSeconds = max(0, canChangeAt − now) arrondi à la seconde ; le mobile affiche « 3 jours » (arrondi supérieur par jour, côté client).
- La règle s'applique par duel et par critère ; un utilisateur peut voter librement dans d'autres duels.
- Horodatage serveur uniquement (jamais fourni par le client) ; tolérance 0.
- changeCount incrémenté à chaque changement effectif, plafonné à 52 par an (garde-fou).

## 🛠️ Tâches

- [ ] Créer src/domain/goat/vote-rule.ts : evaluateVote(existing, now, choice) → {action:'create'|'change'|'noop'|'conflict', canChangeAt, retryAfterSeconds}.
- [ ] Constante GOAT_CHANGE_WINDOW_DAYS=7 dans src/config/goat.ts.
- [ ] Utiliser une horloge injectable (src/utils/clock.ts).
- [ ] Brancher evaluateVote dans goat-vote.service et dans la lecture de myVote.
- [ ] Retourner canChangeAt dans toutes les réponses contenant myVote.
- [ ] Documenter la règle (docs/GOAT.md) avec exemples.
- [ ] Ajouter le champ changeCount et le plafond annuel.

## ✔️ Critères d'acceptation

- [ ] Étant donné un vote il y a 4 jours, alors l'action est 'conflict' et retryAfterSeconds ≈ 259 200.
- [ ] Étant donné un vote il y a exactement 7 jours, alors l'action est 'change'.
- [ ] Étant donné le même choix après 8 jours, alors l'action est 'noop'.
- [ ] Étant donné aucun vote, alors l'action est 'create'.
- [ ] Étant donné un autre duel, alors la règle ne s'applique pas.

## 🧪 Tests à écrire

- [ ] Unitaire (each) : J+0, J+3, J+6,99, J+7, J+8.
- [ ] Unitaire : noop même choix.
- [ ] Unitaire : plafond annuel.
- [ ] Unitaire : changement d'heure (pas d'influence : durées en ms).

## 🔗 Dépendances

À réaliser après : `API-GOAT-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §2.6
- CDC Backend §3.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
