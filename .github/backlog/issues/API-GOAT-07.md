> **API-GOAT-07** · API · Priorité **P1** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

G-05 « Profil de jeu » affiche un radar comparant les deux joueurs et « Évolution des buts par saison » une courbe par joueur. Les données sont fournies par l'API pour que le rendu soit identique sur toutes les plateformes.

## ✅ Objectif

Un bloc radar normalisé (0-100) et des séries de buts par saison alignées sur un axe temporel commun.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `G-05` — Résultat — profil radar
_Module : Comparateur GOAT_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-05_resultat-profil-radar__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-05_resultat-profil-radar__phone_light.webp?raw=true' width='230' alt='G-05 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-05_resultat-profil-radar__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-05_resultat-profil-radar__phone_dark.webp?raw=true' width='230' alt='G-05 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-05_resultat-profil-radar__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-05_resultat-profil-radar__tablet_light.webp?raw=true' width='330' alt='G-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-05_resultat-profil-radar__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/G/G-05_resultat-profil-radar__tablet_dark.webp?raw=true' width='330' alt='G-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Messi vs Xavi » · « Messi » · « Xavi » · « Profil de jeu » · « Évolution des buts par saison »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [API-GOAT-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-02%5D%22) · [API-GOAT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-03%5D%22) · [API-GOAT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-06%5D%22) · [API-GOAT-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-14%5D%22) · [API-GOAT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-GOAT-19%5D%22) · [MOB-G-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-01%5D%22) · [MOB-G-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-04%5D%22) · [MOB-G-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-10%5D%22) · [MOB-G-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-14%5D%22) · [MOB-G-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-16%5D%22) · [MOB-G-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-G-17%5D%22)

## 📐 Règles de gestion

- Axes du radar (5) : Buts (buts/match), Passes (passes décisives/match), Palmarès (trophées), Longévité (saisons au club), Présence (matchs joués) ; chaque valeur normalisée 0-100 = valeur / maximum de référence × 100, plafonnée à 100.
- Maxima de référence = maximum observé parmi les joueurs publiés ayant ≥ 1 saison, recalculé toutes les 24 h et mis en cache (clé goat:radar:refs) ; valeurs entières arrondies.
- seasonSeries : tableau trié des saisons de l'union des deux joueurs [{season:'2008/09', a:38, b:2}] avec null si le joueur n'a pas joué cette saison (courbe interrompue).
- Le radar est purement descriptif et ne produit aucun score global.
- Si les stats d'un joueur sont incomplètes, les axes manquants valent 0 et `incomplete:true`.
- Texte alternatif prêt à l'emploi (altText) en fr/en/es décrivant les trois plus grands écarts pour l'accessibilité.

## 🛠️ Tâches

- [ ] Créer src/services/goat-radar.service.ts : computeRadar(a, b), refMaxima(), buildSeasonSeries(a, b).
- [ ] Job/clé de cache de recalcul quotidien des maxima de référence (cron 04:15).
- [ ] Intégrer le bloc dans la réponse de /players/compare.
- [ ] Générer altText localisé via src/i18n (goat.radar.alt).
- [ ] Gestion des saisons absentes (null) et ordre chronologique.
- [ ] Tests de normalisation avec valeurs limites (0, max, > max).
- [ ] Swagger : GoatRadar, GoatSeasonSeries.
- [ ] Documenter les axes dans docs/GOAT.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné un maximum de référence de 0,95 but/match et Messi à 0,86, alors l'axe Buts vaut 91.
- [ ] Étant donné un joueur dépassant le maximum de référence, alors la valeur est plafonnée à 100.
- [ ] Étant donné Xavi absent de la saison 2004/05, alors a/b conserve null pour cette saison sans erreur.
- [ ] Étant donné un joueur sans stats, alors tous les axes valent 0 et incomplete=true.
- [ ] Étant donné la langue ES, alors altText est en espagnol.

## 🧪 Tests à écrire

- [ ] Unitaire : normalisation et plafond.
- [ ] Unitaire : alignement des saisons.
- [ ] Intégration : recalcul des maxima.
- [ ] Unitaire : altText localisé.
- [ ] Intégration : bloc présent dans /players/compare.

## ♿ Accessibilité et i18n

- altText du radar en fr/en/es ; valeurs numériques exposées pour lecteurs d'écran.

## 🔗 Dépendances

À réaliser après : `API-GOAT-03` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.2
- CDC Global §2.6

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
