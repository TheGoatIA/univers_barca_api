> **API-FANT-05** · API · Priorité **P0** · Taille **S** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Le mobile charge l'équipe de la journée au lancement de Fantasy (H-02, H-03) ou affiche l'état vide « Compose ton premier XI » (H-16) s'il n'y en a pas, et l'état verrouillé (H-09).

## ✅ Objectif

Lire l'équipe d'un utilisateur pour une journée avec statut, heure de verrouillage et points.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `H-01` — Accueil Fantasy
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-01_accueil-fantasy__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-01_accueil-fantasy__phone_light.webp?raw=true' width='230' alt='H-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-01_accueil-fantasy__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-01_accueil-fantasy__phone_dark.webp?raw=true' width='230' alt='H-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-01_accueil-fantasy__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-01_accueil-fantasy__tablet_light.webp?raw=true' width='330' alt='H-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-01_accueil-fantasy__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-01_accueil-fantasy__tablet_dark.webp?raw=true' width='330' alt='H-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Compose ton XI » · « Choisis tes 11 joueurs avant le coup d'envoi. Leurs performances réelles font tes points. » · « Modifier mon équipe » · « Fermeture des compositions dans » · « 1 j 04 h 12 min » · « J11 » · « Ma saison » · « Détails » · « Points » · « 3e » · « Amis » · « 18 432e » · « Monde » · « Dernières journées »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-01%5D%22) · [API-FANT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-07%5D%22) · [API-FANT-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-14%5D%22) · [API-FANT-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-15%5D%22) · [API-FANT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-19%5D%22) · [API-FANT-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-23%5D%22) · [MOB-H-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-03%5D%22) · [MOB-H-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-07%5D%22) · [MOB-H-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-08%5D%22) · [MOB-H-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-09%5D%22) · [MOB-H-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-30%5D%22) · [MOB-H-33](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-33%5D%22) · [MOB-H-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-34%5D%22)

#### `H-02` — Composition — terrain complet
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-02_composition-terrain-complet__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-02_composition-terrain-complet__phone_light.webp?raw=true' width='230' alt='H-02 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-02_composition-terrain-complet__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-02_composition-terrain-complet__phone_dark.webp?raw=true' width='230' alt='H-02 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-02_composition-terrain-complet__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-02_composition-terrain-complet__tablet_light.webp?raw=true' width='330' alt='H-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-02_composition-terrain-complet__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-02_composition-terrain-complet__tablet_dark.webp?raw=true' width='330' alt='H-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Fermeture des compositions dans » · « 1 j 04 h 12 min » · « J11 » · « ter Stegen » · « Koundé » · « Cubarsí » · « Araújo » · « Balde » · « De Jong » · « Pedri » · « Gavi » · « Yamal » · « Lewandowski » · « Raphinha » · « 11/11 » · « Équipe complète » · « Formation » · « 4-3-3 » · « · Capitaine » · « Capitaine »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-01%5D%22) · [API-FANT-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-02%5D%22) · [API-FANT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-03%5D%22) · [API-FANT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-06%5D%22) · [API-FANT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-07%5D%22) · [API-FANT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-21%5D%22) · [API-FANT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-24%5D%22) · [MOB-H-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-01%5D%22) · [MOB-H-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-03%5D%22) · [MOB-H-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-04%5D%22) · [MOB-H-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-05%5D%22) · [MOB-H-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-06%5D%22) · [MOB-H-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-07%5D%22) · [MOB-H-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-08%5D%22) · [MOB-H-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-10%5D%22) · [MOB-H-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-11%5D%22) · [MOB-H-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-29%5D%22) · [MOB-H-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-30%5D%22) · [MOB-H-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-31%5D%22) · [MOB-H-32](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-32%5D%22) · [MOB-H-33](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-33%5D%22) · [MOB-H-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-34%5D%22) · [MOB-H-35](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-35%5D%22)

#### `H-03` — Composition — postes à compléter
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-03_composition-postes-a-completer__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-03_composition-postes-a-completer__phone_light.webp?raw=true' width='230' alt='H-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-03_composition-postes-a-completer__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-03_composition-postes-a-completer__phone_dark.webp?raw=true' width='230' alt='H-03 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-03_composition-postes-a-completer__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-03_composition-postes-a-completer__tablet_light.webp?raw=true' width='330' alt='H-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-03_composition-postes-a-completer__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-03_composition-postes-a-completer__tablet_dark.webp?raw=true' width='330' alt='H-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Fermeture des compositions dans » · « 1 j 04 h 12 min » · « J11 » · « ter Stegen » · « Koundé » · « Balde » · « De Jong » · « Gavi » · « Yamal » · « Raphinha » · « 7/11 » · « 4 postes à compléter » · « Formation » · « 4-3-3 » · « · Capitaine » · « Capitaine »

**Composants repérés** : `avatar`, `btn`, `card`, `empty`

</details>

**Issues liées sur ce même écran :** [API-FANT-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-02%5D%22) · [API-FANT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-03%5D%22) · [API-FANT-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-04%5D%22) · [MOB-H-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-05%5D%22) · [MOB-H-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-06%5D%22) · [MOB-H-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-11%5D%22) · [MOB-H-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-12%5D%22) · [MOB-H-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-29%5D%22) · [MOB-H-33](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-33%5D%22) · [MOB-H-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-34%5D%22)

#### `H-09` — Composition verrouillée — erreur 409
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-09_composition-verrouillee-erreur-409__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-09_composition-verrouillee-erreur-409__phone_light.webp?raw=true' width='230' alt='H-09 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-09_composition-verrouillee-erreur-409__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-09_composition-verrouillee-erreur-409__phone_dark.webp?raw=true' width='230' alt='H-09 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-09_composition-verrouillee-erreur-409__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-09_composition-verrouillee-erreur-409__tablet_light.webp?raw=true' width='330' alt='H-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-09_composition-verrouillee-erreur-409__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-09_composition-verrouillee-erreur-409__tablet_dark.webp?raw=true' width='330' alt='H-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Composition verrouillée » · « Match en cours · points en direct » · « En direct » · « ter Stegen » · « Koundé » · « Cubarsí » · « Araújo » · « Balde » · « De Jong » · « Pedri » · « Gavi » · « Yamal » · « Lewandowski » · « Raphinha » · « 11/11 » · « Équipe complète » · « Formation » · « 4-3-3 » · « · Capitaine » · « Voir le détail »

**Composants repérés** : `avatar`, `btn`, `card`, `toast`

</details>

**Issues liées sur ce même écran :** [API-FANT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-01%5D%22) · [API-FANT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-06%5D%22) · [API-FANT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-07%5D%22) · [API-FANT-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-11%5D%22) · [API-FANT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-13%5D%22) · [API-FANT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-21%5D%22) · [API-FANT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-24%5D%22) · [MOB-H-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-02%5D%22) · [MOB-H-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-06%5D%22) · [MOB-H-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-08%5D%22) · [MOB-H-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-19%5D%22) · [MOB-H-35](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-35%5D%22)

#### `H-10` — Résultat de la journée
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_light.webp?raw=true' width='230' alt='H-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_dark.webp?raw=true' width='230' alt='H-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_light.webp?raw=true' width='330' alt='H-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_dark.webp?raw=true' width='330' alt='H-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Journée 10 terminée » · « Points calculés après le coup de sifflet final » · « ter Stegen » · « 6 pts » · « Koundé » · « 8 pts » · « Cubarsí » · « Araújo » · « 2 pts » · « Balde » · « 5 pts » · « De Jong » · « 7 pts » · « Pedri » · « 9 pts » · « Gavi » · « 3 pts » · « Yamal » · « 14 pts » · « Lewandowski » · « 11 pts » · « Raphinha » · « -1 pts » · « 11/11 » · « Équipe complète » · « Formation »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-01%5D%22) · [API-FANT-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-02%5D%22) · [API-FANT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-09%5D%22) · [API-FANT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-10%5D%22) · [API-FANT-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-11%5D%22) · [API-FANT-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-12%5D%22) · [API-FANT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-13%5D%22) · [API-FANT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-24%5D%22) · [API-FANT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-33%5D%22) · [MOB-H-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-01%5D%22) · [MOB-H-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-20%5D%22) · [MOB-H-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-31%5D%22) · [MOB-H-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-34%5D%22)

#### `H-16` — Fantasy — pas encore d’équipe
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-16_fantasy-pas-encore-d-equipe__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-16_fantasy-pas-encore-d-equipe__phone_light.webp?raw=true' width='230' alt='H-16 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-16_fantasy-pas-encore-d-equipe__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-16_fantasy-pas-encore-d-equipe__phone_dark.webp?raw=true' width='230' alt='H-16 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-16_fantasy-pas-encore-d-equipe__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-16_fantasy-pas-encore-d-equipe__tablet_light.webp?raw=true' width='330' alt='H-16 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-16_fantasy-pas-encore-d-equipe__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-16_fantasy-pas-encore-d-equipe__tablet_dark.webp?raw=true' width='330' alt='H-16 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Compose ton premier XI » · « Tu n’as pas encore d’équipe pour la journée 11. Choisis tes 11 joueurs avant la fermeture ! » · « Créer mon équipe » · « Lire les règles »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [API-FANT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-19%5D%22) · [MOB-H-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-27%5D%22)

## 📐 Règles de gestion

- gameweek facultatif : défaut = journée courante ; accepte aussi une journée passée de l'utilisateur.
- Pas d'équipe pour la journée : 404 FANTASY_TEAM_NOT_FOUND avec details.gameweek et details.locksAt pour que le mobile affiche H-16 sans second appel.
- status : 'open' (avant locksAt), 'locked' (après locksAt, points en direct), 'scored' (computedAt présent).
- Le champ points est présent dès qu'un calcul provisoire existe (provisional:true) ; null sinon.
- Un utilisateur ne peut lire que SA propre équipe ; l'équipe d'un autre n'est visible qu'après verrouillage via l'endpoint de classement (hors périmètre de cette route).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/fantasy/team` | Équipe de l'utilisateur pour une journée | ?gameweek=11 | {success:true,data:{id,gameweek:11,formation:'4-3-3',selections:[{playerId,roleSlot:'GB'}],captainId,status:'open',locksAt,serverTime,points:null}} |

## 🛠️ Tâches

- [ ] Controller fantasy.getTeam + route GET /fantasy/team protégée par protect + userOnly.
- [ ] Validation Joi du paramètre gameweek (entier 1..60).
- [ ] Service getTeam(userId, gameweek) : charge Gameweek + FantasyTeam + dernier FantasyGameweekScore.
- [ ] Composer la réponse {id, gameweek, formation, selections, captainId, status, locksAt, serverTime, points, provisional, computedAt}.
- [ ] Positionner Cache-Control: private, no-store (données personnelles + horloge).
- [ ] Retourner 403 MODULE_DISABLED si le flag fantasy est désactivé (voir issue flags-modules).
- [ ] Swagger : réponses 200/404/403/401.
- [ ] Ajouter une métrique prometheus fantasy_team_reads_total.

## ✔️ Critères d'acceptation

- [ ] Étant donné une équipe enregistrée, quand GET /fantasy/team?gameweek=11, alors 200 avec 11 sélections et status open.
- [ ] Étant donné aucune équipe, alors 404 FANTASY_TEAM_NOT_FOUND avec locksAt.
- [ ] Étant donné locksAt dépassé, alors status locked.
- [ ] Étant donné une journée scorée, alors status scored et points renseignés.
- [ ] Étant donné gameweek=0, alors 422.

## 🧪 Tests à écrire

- [ ] Intégration : équipe existante.
- [ ] Intégration : 404 avec details.locksAt.
- [ ] Intégration : statut locked après locksAt (horloge simulée).
- [ ] Intégration : journée scorée (Yamal 14 pts dans le breakdown).
- [ ] Sécurité : un utilisateur ne peut pas lire une équipe via un id arbitraire.

## 🔗 Dépendances

À réaliser après : `API-FANT-02` · `API-FANT-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
