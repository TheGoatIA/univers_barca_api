> **API-JEUX-09** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

D-07 affiche « +60 Points » pour une victoire en 3 essais et « Ta grille » ; D-09 propose un partage « sans spoiler » (Guess the Player · n°214 · 3/6 · Série de 12 jours) vers WhatsApp, Instagram, X, Copier ou Image.

## ✅ Objectif

Un barème piloté par ScoringRule et un générateur de grille texte + image réutilisables par le mobile.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `D-07` — Victoire
_Module : Jeux - Guess the Player_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-07_victoire__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-07_victoire__phone_light.webp?raw=true' width='230' alt='D-07 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-07_victoire__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-07_victoire__phone_dark.webp?raw=true' width='230' alt='D-07 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-07_victoire__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-07_victoire__tablet_light.webp?raw=true' width='330' alt='D-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-07_victoire__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-07_victoire__tablet_dark.webp?raw=true' width='330' alt='D-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Résultat » · « Défi n°214 » · « Bravo ! » · « Frenkie de Jong » · « Milieu · Pays-Bas · N°21 · Trouvé en » · « 3 essais » · « Série » · « 81% » · « Réussite » · « +60 » · « Points » · « Ta grille » · « Partager mon résultat » · « Quiz du jour » · « Statistiques »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-JEUX-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-01%5D%22) · [API-JEUX-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-07%5D%22) · [API-JEUX-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-19%5D%22) · [API-JEUX-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-20%5D%22) · [API-JEUX-35](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-35%5D%22) · [MOB-D-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-02%5D%22) · [MOB-D-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-05%5D%22) · [MOB-D-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-06%5D%22) · [MOB-D-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-15%5D%22) · [MOB-D-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-16%5D%22) · [MOB-D-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-18%5D%22) · [MOB-D-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-25%5D%22) · [MOB-D-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-26%5D%22) · [MOB-D-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-28%5D%22) · [MOB-D-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-29%5D%22) · [MOB-D-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-30%5D%22)

#### `D-08` — Défaite — révélation
_Module : Jeux - Guess the Player_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-08_defaite-revelation__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-08_defaite-revelation__phone_light.webp?raw=true' width='230' alt='D-08 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-08_defaite-revelation__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-08_defaite-revelation__phone_dark.webp?raw=true' width='230' alt='D-08 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-08_defaite-revelation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-08_defaite-revelation__tablet_light.webp?raw=true' width='330' alt='D-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-08_defaite-revelation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-08_defaite-revelation__tablet_dark.webp?raw=true' width='330' alt='D-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Résultat » · « Défi n°214 » · « Pas cette fois » · « C’était Frenkie de Jong » · « Milieu · Pays-Bas · N°21 · ex-Ajax » · « Ta série de 12 jours est conservée » · « Jouer suffit à la maintenir. » · « Partager mon résultat » · « Voir la fiche du joueur »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-JEUX-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-01%5D%22) · [API-JEUX-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-07%5D%22) · [API-JEUX-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-19%5D%22) · [API-JEUX-35](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-35%5D%22) · [MOB-D-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-06%5D%22) · [MOB-D-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-15%5D%22) · [MOB-D-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-17%5D%22) · [MOB-D-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-25%5D%22) · [MOB-D-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-28%5D%22) · [MOB-D-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-29%5D%22) · [MOB-D-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-30%5D%22)

#### `D-09` — Partage — image de résultat
_Module : Jeux - Guess the Player_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-09_partage-image-de-resultat__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-09_partage-image-de-resultat__phone_light.webp?raw=true' width='230' alt='D-09 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-09_partage-image-de-resultat__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-09_partage-image-de-resultat__phone_dark.webp?raw=true' width='230' alt='D-09 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-09_partage-image-de-resultat__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-09_partage-image-de-resultat__tablet_light.webp?raw=true' width='330' alt='D-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-09_partage-image-de-resultat__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-09_partage-image-de-resultat__tablet_dark.webp?raw=true' width='330' alt='D-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Partager » · « Univers » · « Barça » · « Guess the Player · n°214 » · « 3/6 » · « Série de 12 jours » · « WhatsApp » · « Instagram » · « Copier » · « Image » · « Résultat copié dans le presse-papiers »

**Composants repérés** : `toast`

</details>

**Issues liées sur ce même écran :** [API-JEUX-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-19%5D%22) · [API-JEUX-35](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-35%5D%22) · [MOB-D-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-18%5D%22) · [MOB-D-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-19%5D%22) · [MOB-D-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-28%5D%22) · [MOB-D-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-29%5D%22) · [MOB-D-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-30%5D%22)

## 📐 Règles de gestion

- Barème par défaut (ScoringRule.event = guess_win_1…guess_win_6) : 100, 80, 60, 40, 25, 10 points pour une victoire en 1..6 essais ; défaite = 0 point. Valeurs modifiables sans redéploiement (CDC §3.12.2).
- Grille : une ligne par essai, 5 cases (nation, poste, âge, numéro, club) : 🟩 correct, 🟨 proche, 🟥 faux ; ligne gagnante = 5 🟩. Aucun nom de joueur ni valeur d'indice dans la grille.
- Texte partageable : `Guess the Player · n°214 · 3/6` + grille + `Série de 12 jours` + lien court de l'app ; en cas de défaite `X/6`.
- Image : PNG 1080×1350 (marque « Univers Barça », titre, n°, score, grille, série), rendu côté serveur (canvas) pour être identique sur toutes les plateformes, mis en cache 24 h par shareToken.
- shareToken signé (HMAC, durée de vie 7 jours) afin que l'image publique ne puisse être générée que pour une vraie partie terminée ; l'endpoint est public mais ne révèle aucune donnée personnelle (pas de pseudo).
- Pas de points si le défi est rejoué hors fenêtre (aucune victoire hors défi actif).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/guess-the-player/share/:shareToken` | Texte et grille de partage | — | {success:true,data:{text:'Guess the Player · n°214 · 3/6 …',grid:['🟥🟨🟥🟨🟥','🟨🟩🟥🟨🟨','🟩🟩🟩🟩🟩']}} |
| `GET` | `/api/v1/guess-the-player/share/:shareToken/image.png` | Image PNG du résultat | — | image/png |

## 🛠️ Tâches

- [ ] Seed des ScoringRule guess_win_1..6 dans scripts/seed/scoring-rules.js.
- [ ] Créer src/services/guess-scoring.service.ts : pointsFor(attemptsUsed, won) lisant ScoringRule avec cache mémoire 60 s.
- [ ] Créer src/services/guess-share.service.ts : buildEmojiGrid(attempts), buildShareText(play, streak), signToken/verifyToken.
- [ ] Créer GET /guess-the-player/share/:shareToken (JSON {text, grid}) et GET /guess-the-player/share/:shareToken/image.png (image/png, Cache-Control public 24 h).
- [ ] Rendu image avec @napi-rs/canvas, police Barlow Condensed embarquée dans assets/fonts/.
- [ ] Limiter 30 req/min/IP sur les endpoints de partage ; 404 si token invalide/expiré.
- [ ] Swagger : GuessShareResponse.
- [ ] Tests snapshot de l'image (hash perceptuel) et de la grille.

## ✔️ Critères d'acceptation

- [ ] Étant donné une victoire en 3 essais, alors pointsFor = 60.
- [ ] Étant donné 3 essais avec comparaisons connues, alors la grille contient 3 lignes de 5 emojis dont la dernière est 🟩🟩🟩🟩🟩.
- [ ] Étant donné une défaite, alors le texte indique X/6 et pointsFor = 0.
- [ ] Étant donné un shareToken altéré, alors 404.
- [ ] Étant donné la grille, alors aucun nom ni valeur d'indice n'y figure.

## 🧪 Tests à écrire

- [ ] Unitaire : pointsFor pour les 6 cas + défaite.
- [ ] Unitaire : buildEmojiGrid (3 cas).
- [ ] Unitaire : signature et expiration de token.
- [ ] Intégration : GET image.png renvoie image/png et les bons en-têtes.
- [ ] Snapshot : texte de partage.

## 🔗 Dépendances

À réaliser après : `API-JEUX-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.3
- CDC Global §2.4
- CDC Backend §3.12.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
