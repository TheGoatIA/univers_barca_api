> **API-FANT-01** · Données · Priorité **P0** · Taille **L** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Le modèle FantasyTeam porte un simple numéro de gameweek mais aucune collection ne définit ce qu'est une journée (matchs concernés, heure de fermeture, statut). Le mobile affiche « Journée 11 », « Fermeture des compositions dans 1 j 04 h 12 min » (H-01/H-02) et bascule en « Composition verrouillée · Match en cours » (H-09) puis « Journée 10 terminée » (H-10).

## ✅ Objectif

Une collection Gameweek source de vérité des journées Fantasy, générée depuis les matchs, exposée en lecture au mobile avec l'heure de verrouillage serveur.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `H-01` — Accueil Fantasy
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-01_accueil-fantasy__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-01_accueil-fantasy__phone_light.webp?raw=true' width='230' alt='H-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-01_accueil-fantasy__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-01_accueil-fantasy__phone_dark.webp?raw=true' width='230' alt='H-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-01_accueil-fantasy__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-01_accueil-fantasy__tablet_light.webp?raw=true' width='330' alt='H-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-01_accueil-fantasy__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-01_accueil-fantasy__tablet_dark.webp?raw=true' width='330' alt='H-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Compose ton XI » · « Choisis tes 11 joueurs avant le coup d'envoi. Leurs performances réelles font tes points. » · « Modifier mon équipe » · « Fermeture des compositions dans » · « 1 j 04 h 12 min » · « J11 » · « Ma saison » · « Détails » · « Points » · « 3e » · « Amis » · « 18 432e » · « Monde » · « Dernières journées »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-05%5D%22) · [API-FANT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-07%5D%22) · [API-FANT-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-14%5D%22) · [API-FANT-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-15%5D%22) · [API-FANT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-19%5D%22) · [API-FANT-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-23%5D%22) · [MOB-H-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-03%5D%22) · [MOB-H-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-07%5D%22) · [MOB-H-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-08%5D%22) · [MOB-H-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-09%5D%22) · [MOB-H-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-30%5D%22) · [MOB-H-33](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-33%5D%22) · [MOB-H-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-34%5D%22)

#### `H-02` — Composition — terrain complet
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-02_composition-terrain-complet__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-02_composition-terrain-complet__phone_light.webp?raw=true' width='230' alt='H-02 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-02_composition-terrain-complet__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-02_composition-terrain-complet__phone_dark.webp?raw=true' width='230' alt='H-02 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-02_composition-terrain-complet__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-02_composition-terrain-complet__tablet_light.webp?raw=true' width='330' alt='H-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-02_composition-terrain-complet__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-02_composition-terrain-complet__tablet_dark.webp?raw=true' width='330' alt='H-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Fermeture des compositions dans » · « 1 j 04 h 12 min » · « J11 » · « ter Stegen » · « Koundé » · « Cubarsí » · « Araújo » · « Balde » · « De Jong » · « Pedri » · « Gavi » · « Yamal » · « Lewandowski » · « Raphinha » · « 11/11 » · « Équipe complète » · « Formation » · « 4-3-3 » · « · Capitaine » · « Capitaine »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-02%5D%22) · [API-FANT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-03%5D%22) · [API-FANT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-05%5D%22) · [API-FANT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-06%5D%22) · [API-FANT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-07%5D%22) · [API-FANT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-21%5D%22) · [API-FANT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-24%5D%22) · [MOB-H-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-01%5D%22) · [MOB-H-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-03%5D%22) · [MOB-H-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-04%5D%22) · [MOB-H-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-05%5D%22) · [MOB-H-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-06%5D%22) · [MOB-H-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-07%5D%22) · [MOB-H-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-08%5D%22) · [MOB-H-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-10%5D%22) · [MOB-H-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-11%5D%22) · [MOB-H-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-29%5D%22) · [MOB-H-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-30%5D%22) · [MOB-H-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-31%5D%22) · [MOB-H-32](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-32%5D%22) · [MOB-H-33](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-33%5D%22) · [MOB-H-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-34%5D%22) · [MOB-H-35](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-35%5D%22)

#### `H-09` — Composition verrouillée — erreur 409
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-09_composition-verrouillee-erreur-409__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-09_composition-verrouillee-erreur-409__phone_light.webp?raw=true' width='230' alt='H-09 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-09_composition-verrouillee-erreur-409__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-09_composition-verrouillee-erreur-409__phone_dark.webp?raw=true' width='230' alt='H-09 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-09_composition-verrouillee-erreur-409__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-09_composition-verrouillee-erreur-409__tablet_light.webp?raw=true' width='330' alt='H-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-09_composition-verrouillee-erreur-409__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-09_composition-verrouillee-erreur-409__tablet_dark.webp?raw=true' width='330' alt='H-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Composition verrouillée » · « Match en cours · points en direct » · « En direct » · « ter Stegen » · « Koundé » · « Cubarsí » · « Araújo » · « Balde » · « De Jong » · « Pedri » · « Gavi » · « Yamal » · « Lewandowski » · « Raphinha » · « 11/11 » · « Équipe complète » · « Formation » · « 4-3-3 » · « · Capitaine » · « Voir le détail »

**Composants repérés** : `avatar`, `btn`, `card`, `toast`

</details>

**Issues liées sur ce même écran :** [API-FANT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-05%5D%22) · [API-FANT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-06%5D%22) · [API-FANT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-07%5D%22) · [API-FANT-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-11%5D%22) · [API-FANT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-13%5D%22) · [API-FANT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-21%5D%22) · [API-FANT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-24%5D%22) · [MOB-H-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-02%5D%22) · [MOB-H-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-06%5D%22) · [MOB-H-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-08%5D%22) · [MOB-H-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-19%5D%22) · [MOB-H-35](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-35%5D%22)

#### `H-10` — Résultat de la journée
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_light.webp?raw=true' width='230' alt='H-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_dark.webp?raw=true' width='230' alt='H-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_light.webp?raw=true' width='330' alt='H-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_dark.webp?raw=true' width='330' alt='H-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Journée 10 terminée » · « Points calculés après le coup de sifflet final » · « ter Stegen » · « 6 pts » · « Koundé » · « 8 pts » · « Cubarsí » · « Araújo » · « 2 pts » · « Balde » · « 5 pts » · « De Jong » · « 7 pts » · « Pedri » · « 9 pts » · « Gavi » · « 3 pts » · « Yamal » · « 14 pts » · « Lewandowski » · « 11 pts » · « Raphinha » · « -1 pts » · « 11/11 » · « Équipe complète » · « Formation »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-02%5D%22) · [API-FANT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-05%5D%22) · [API-FANT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-09%5D%22) · [API-FANT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-10%5D%22) · [API-FANT-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-11%5D%22) · [API-FANT-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-12%5D%22) · [API-FANT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-13%5D%22) · [API-FANT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-24%5D%22) · [API-FANT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-33%5D%22) · [MOB-H-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-01%5D%22) · [MOB-H-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-20%5D%22) · [MOB-H-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-31%5D%22) · [MOB-H-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-34%5D%22)

## 📐 Règles de gestion

- Une journée regroupe les matchs de l'équipe première du FC Barcelone dont kickoffAt tombe dans la fenêtre [startsAt, endsAt] ; numérotation continue par saison (Journée 1..N) sur toutes compétitions (Liga, Champions League, Coupe du Roi) : à confirmer avec le propriétaire (le CDC §2.7 dit « XI hebdomadaire » sans définir la fenêtre).
- locksAt = kickoffAt du PREMIER match de la journée (verrouillage au coup d'envoi) ; si le premier match est reporté, locksAt est recalculé sur le nouveau premier match restant.
- Statuts : upcoming -> open -> locked -> scoring -> scored ; open dès la clôture de la journée précédente ou 7 jours avant locksAt (valeur configurable FANTASY_OPEN_DAYS_BEFORE=7) ; locked à locksAt ; scoring tant qu'un match est live/non finished ; scored quand tous les matchs sont finished et les points calculés.
- Une journée sans match (trêve) n'est jamais créée ; si un match unique est annulé (status cancelled) la journée est annulée (status cancelled) et les équipes ne comptent pas.
- rulesVersion (numéro de version du barème) est figé à l'ouverture de la journée : le barème modifié ensuite ne s'applique qu'aux journées suivantes (cohérent avec l'admin WJ-03 : « nouvelle version active à partir de la prochaine journée »).
- Le fuseau de référence pour l'affichage est celui de l'utilisateur ; toutes les dates sont stockées en UTC (ISO 8601).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/fantasy/gameweeks/current` | Journée courante (ouverte, verrouillée ou en cours de calcul) | — | {success:true,data:{id,number:11,season:'2026/27',status:'open',locksAt,serverTime,matches:[…]}} |
| `GET` | `/api/v1/fantasy/gameweeks` | Liste des journées d'une saison | ?season=2026/27&status=scored | {success:true,data:{items:[Gameweek]}} |
| `GET` | `/api/v1/fantasy/gameweeks/:number` | Détail d'une journée | — | {success:true,data:Gameweek} |

## 🗄️ Données

- Nouvelle collection gameweeks
- Match.kickoffAt/status (lecture)
- FantasyTeam.gameweek devient une référence logique à gameweeks.number

## 🛠️ Tâches

- [ ] Créer src/models/gameweek.model.ts : season (String AAAA/AA), number (Number >= 1), startsAt, endsAt, locksAt, matchIds [ObjectId Match], status enum, rulesVersion (Number), openedAt, lockedAt, scoredAt ; index unique {season:1, number:1} et index {locksAt:1}, {status:1}.
- [ ] Exporter le modèle dans src/models/index.ts et typer GameweekDoc.
- [ ] Créer src/services/gameweek.service.ts : generateGameweeks(season) (regroupe les matchs par fenêtre lundi 00:00 -> dimanche 23:59 Europe/Madrid, à confirmer), refreshGameweek(matchId) (recalcul de locksAt/statut après sync football), getCurrentGameweek(now) (première journée non scored dont locksAt > now - durée, sinon la prochaine), getGameweek(season, number).
- [ ] Appeler refreshGameweek depuis le worker football-sync après chaque upsert de match (changement de kickoffAt, status, report).
- [ ] Créer src/controllers/fantasy.controller.ts + src/routes/fantasy.routes.ts (monté dans buildRouter) ; routes GET /fantasy/gameweeks/current, GET /fantasy/gameweeks?season=2026/27, GET /fantasy/gameweeks/:number.
- [ ] Réponse : {id, number, season, status, startsAt, endsAt, locksAt, serverTime, matches:[{id, opponent, kickoffAt, status}]} ; l'en-tête Date + champ serverTime permettent au mobile de calculer son décalage d'horloge.
- [ ] Ajouter Cache-Control: public, max-age=30 sur /current, max-age=300 sur la liste ; ETag faible.
- [ ] Écrire le seed de dev (seed-fantasy.ts) : 38 journées de Liga fictives pour 2026/27 + 11 journées passées avec statut scored.
- [ ] Documenter les 3 routes dans le Swagger (tag Fantasy) avec schémas Gameweek et GameweekMatch.

## ✔️ Critères d'acceptation

- [ ] Étant donné trois matchs dont le premier est samedi 16:15 UTC, quand la journée est générée, alors locksAt vaut samedi 16:15 UTC et matchIds contient les trois matchs.
- [ ] Étant donné le premier match reporté à lundi, quand le sync passe le match en postponed, alors locksAt devient le coup d'envoi du prochain match de la journée.
- [ ] Étant donné aucune journée ouverte, quand GET /fantasy/gameweeks/current est appelé, alors la prochaine journée upcoming est renvoyée avec status upcoming.
- [ ] Étant donné une requête sans jeton, alors 401 UNAUTHORIZED.
- [ ] Étant donné ?season invalide (2026-27), alors 422 VALIDATION_ERROR.

## 🧪 Tests à écrire

- [ ] Unitaire : generateGameweeks regroupe correctement une semaine à deux matchs (Liga + Coupe).
- [ ] Unitaire : refreshGameweek recalcule locksAt après report.
- [ ] Unitaire : transition de statuts open -> locked à locksAt.
- [ ] Intégration : GET /fantasy/gameweeks/current renvoie serverTime et locksAt.
- [ ] Intégration : unicité {season, number} (E11000 traduit en erreur interne, jamais de doublon).
- [ ] Intégration : journée annulée exclue du classement.

## 📚 Références

- CDC Backend §3.5
- CDC Backend §7
- CDC Global §2.7
- CDC Backend §4.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
