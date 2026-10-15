> **API-GOAT-03** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

G-04 affiche pour Messi vs Xavi : Matchs 778/767, Buts, Passes décisives, Trophées, Saisons, Buts par match (0,86 / 0,11). Ces valeurs se calculent à partir de Player.stats[] (stats par saison) et doivent être identiques entre mobile, cache et admin.

## ✅ Objectif

Un service pur qui agrège les lignes de saison d'un joueur en statistiques de carrière comparables.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `G-04` — Résultat — statistiques croisées
_Module : Comparateur GOAT_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-04_resultat-statistiques-croisees__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-04_resultat-statistiques-croisees__phone_light.webp?raw=true' width='230' alt='G-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-04_resultat-statistiques-croisees__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-04_resultat-statistiques-croisees__phone_dark.webp?raw=true' width='230' alt='G-04 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-04_resultat-statistiques-croisees__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-04_resultat-statistiques-croisees__tablet_light.webp?raw=true' width='330' alt='G-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-04_resultat-statistiques-croisees__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-04_resultat-statistiques-croisees__tablet_dark.webp?raw=true' width='330' alt='G-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Messi vs Xavi » · « Messi » · « Xavi » · « Matchs » · « Buts » · « Passes décisives » · « Trophées » · « Saisons » · « 0,86 » · « Buts par match » · « 0,11 » · « Qui est le GOAT à tes yeux ? » · « Ton vote est modifiable une fois par semaine. »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-GOAT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-01%5D%22) · [API-GOAT-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-02%5D%22) · [API-GOAT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-06%5D%22) · [API-GOAT-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-08%5D%22) · [API-GOAT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-09%5D%22) · [API-GOAT-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-12%5D%22) · [API-GOAT-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-14%5D%22) · [API-GOAT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-19%5D%22) · [API-GOAT-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-20%5D%22) · [API-GOAT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-21%5D%22) · [API-GOAT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-22%5D%22) · [API-GOAT-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-23%5D%22) · [MOB-G-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-01%5D%22) · [MOB-G-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-02%5D%22) · [MOB-G-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-03%5D%22) · [MOB-G-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-04%5D%22) · [MOB-G-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-09%5D%22) · [MOB-G-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-11%5D%22) · [MOB-G-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-14%5D%22) · [MOB-G-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-15%5D%22) · [MOB-G-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-16%5D%22) · [MOB-G-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-17%5D%22)

#### `G-05` — Résultat — profil radar
_Module : Comparateur GOAT_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-05_resultat-profil-radar__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-05_resultat-profil-radar__phone_light.webp?raw=true' width='230' alt='G-05 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-05_resultat-profil-radar__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-05_resultat-profil-radar__phone_dark.webp?raw=true' width='230' alt='G-05 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-05_resultat-profil-radar__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-05_resultat-profil-radar__tablet_light.webp?raw=true' width='330' alt='G-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-05_resultat-profil-radar__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-05_resultat-profil-radar__tablet_dark.webp?raw=true' width='330' alt='G-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Messi vs Xavi » · « Messi » · « Xavi » · « Profil de jeu » · « Évolution des buts par saison »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [API-GOAT-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-02%5D%22) · [API-GOAT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-06%5D%22) · [API-GOAT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-07%5D%22) · [API-GOAT-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-14%5D%22) · [API-GOAT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-19%5D%22) · [MOB-G-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-01%5D%22) · [MOB-G-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-04%5D%22) · [MOB-G-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-10%5D%22) · [MOB-G-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-14%5D%22) · [MOB-G-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-16%5D%22) · [MOB-G-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-17%5D%22)

## 📐 Règles de gestion

- Périmètre des statistiques : lignes stats[] du FC Barcelone uniquement (saisons au Barça), cohérent avec « légendes du club » ; matchesPlayed, goals, assists, trophiesCount sommés ; seasons = nombre de saisons distinctes.
- goalsPerMatch = goals / matchesPlayed arrondi à 2 décimales (0,86), 0 si matchesPlayed = 0 ; assistsPerMatch idem.
- longevity (« longévité ») = seasons au club, plus first/last season (ex. 2004/05 → 2020/21).
- Format des nombres : valeurs brutes dans l'API (le formatage 12 481 / 0,86 est côté client selon la locale).
- Données manquantes : si un joueur n'a aucune ligne de stats, toutes les valeurs valent 0 et `incomplete:true` ; la comparaison reste possible mais le client affiche « — ».
- Les valeurs sont recalculées depuis stats[] à chaque cache miss et stockées dans le cache de paire (1 h).

## 🛠️ Tâches

- [ ] Créer src/services/goat-metrics.service.ts : careerStats(player), seasonSeries(player), compareStats(a, b).
- [ ] Définir les types CareerStats / SeasonPoint dans src/types/goat.ts.
- [ ] Prévoir la source future (stats externes) via une interface StatsSource.
- [ ] Gestion de l'arrondi (Intl-free, Math.round(x*100)/100).
- [ ] Tri des saisons par chaîne AAAA/AA.
- [ ] Tests basés sur des fixtures Messi / Xavi réalistes.
- [ ] Documentation de la formule dans docs/GOAT.md.
- [ ] Exposer un helper `leader` par statistique (a|b|tie) sans verdict global.

## ✔️ Critères d'acceptation

- [ ] Étant donné 778 matchs et 672 buts, alors goalsPerMatch=0,86.
- [ ] Étant donné matchesPlayed=0, alors goalsPerMatch=0 sans division par zéro.
- [ ] Étant donné deux lignes pour la même saison, alors elles sont fusionnées ou la donnée est rejetée par le modèle Player.
- [ ] Étant donné un joueur sans stats, alors incomplete=true.
- [ ] Étant donné les saisons 2004/05 à 2020/21, alors seasons=17 et firstSeason/lastSeason sont renseignés.

## 🧪 Tests à écrire

- [ ] Unitaire : careerStats (3 fixtures).
- [ ] Unitaire : arrondis (0,865 → 0,87).
- [ ] Unitaire : joueur sans stats.
- [ ] Unitaire : tri/fusion de saisons.
- [ ] Unitaire : leader par statistique.

## 🔗 Dépendances

À réaliser après : `API-GOAT-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.2
- CDC Global §2.6
- CDC Backend §4.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
