> **API-FOOT-16** · API · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

Le match historique a quatre onglets : Résumé (score 3-1, mi-temps 1-1, buteurs, stats possession 63 %), Compos (4-3-3, entraîneur), Événements (minute par minute) et Contexte (texte + classement à l'époque).

## ✅ Objectif

Un endpoint unique servant les quatre onglets avec sélection de sections.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `F-07` — Match historique — résumé
_Module : Historique et fiches_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-07_match-historique-resume__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-07_match-historique-resume__phone_light.webp?raw=true' width='230' alt='F-07 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-07_match-historique-resume__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-07_match-historique-resume__phone_dark.webp?raw=true' width='230' alt='F-07 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-07_match-historique-resume__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-07_match-historique-resume__tablet_light.webp?raw=true' width='330' alt='F-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-07_match-historique-resume__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-07_match-historique-resume__tablet_dark.webp?raw=true' width='330' alt='F-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Match historique » · « Ligue des champions · Finale » · « Barça » · « 3 – 1 » · « Mi-temps 1-1 » · « Man. United » · « 28 mai 2011 · » · « Wembley, Londres » · « Résumé » · « Compos » · « Événements » · « Contexte » · « Buteurs » · « 27' » · « Pedro » · « Barça · passe de Xavi » · « 34' » · « Rooney » · « 54' » · « Messi » · « 69' » · « Villa » · « Barça · passe de Messi » · « Statistiques du match » · « 63% » · « Possession » · « 37% » · « Tirs » · « Tirs cadrés » · « Corners »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [API-FOOT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-03%5D%22) · [API-FOOT-42](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-42%5D%22) · [MOB-F-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-01%5D%22) · [MOB-F-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-02%5D%22) · [MOB-F-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-03%5D%22) · [MOB-F-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-04%5D%22) · [MOB-F-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-13%5D%22) · [MOB-F-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-14%5D%22) · [MOB-F-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-19%5D%22) · [MOB-F-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-24%5D%22) · [MOB-F-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-25%5D%22) · [MOB-F-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-26%5D%22) · [MOB-F-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-27%5D%22)

#### `F-08` — Match historique — compositions
_Module : Historique et fiches_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-08_match-historique-compositions__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-08_match-historique-compositions__phone_light.webp?raw=true' width='230' alt='F-08 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-08_match-historique-compositions__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-08_match-historique-compositions__phone_dark.webp?raw=true' width='230' alt='F-08 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-08_match-historique-compositions__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-08_match-historique-compositions__tablet_light.webp?raw=true' width='330' alt='F-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-08_match-historique-compositions__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-08_match-historique-compositions__tablet_dark.webp?raw=true' width='330' alt='F-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Match historique » · « Ligue des champions · Finale » · « Barça » · « 3 – 1 » · « Mi-temps 1-1 » · « Man. United » · « 28 mai 2011 · » · « Wembley, Londres » · « Résumé » · « Compos » · « Événements » · « Contexte » · « Valdés » · « Alves » · « Piqué » · « Mascherano » · « Abidal » · « Busquets » · « Xavi » · « Iniesta » · « Pedro » · « Messi » · « Villa » · « Formation » · « 4-3-3 » · « Entraîneur » · « Pep Guardiola »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [API-FOOT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-03%5D%22) · [MOB-F-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-01%5D%22) · [MOB-F-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-13%5D%22) · [MOB-F-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-15%5D%22) · [MOB-F-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-27%5D%22)

#### `F-09` — Match historique — événements
_Module : Historique et fiches_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-09_match-historique-evenements__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-09_match-historique-evenements__phone_light.webp?raw=true' width='230' alt='F-09 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-09_match-historique-evenements__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-09_match-historique-evenements__phone_dark.webp?raw=true' width='230' alt='F-09 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-09_match-historique-evenements__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-09_match-historique-evenements__tablet_light.webp?raw=true' width='330' alt='F-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-09_match-historique-evenements__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-09_match-historique-evenements__tablet_dark.webp?raw=true' width='330' alt='F-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Match historique » · « Ligue des champions · Finale » · « Barça » · « 3 – 1 » · « Mi-temps 1-1 » · « Man. United » · « 28 mai 2011 · » · « Wembley, Londres » · « Résumé » · « Compos » · « Événements » · « Contexte » · « 27' » · « But · Pedro » · « Barça 1 – 0 » · « 34' » · « But · Rooney » · « Barça 1 – 1 » · « 45' » · « Mi-temps » · « 54' » · « But · Messi » · « Barça 2 – 1 » · « 69' » · « But · Villa » · « Barça 3 – 1 » · « 88' » · « Remplacement » · « Keita remplace Xavi »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [API-FOOT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-03%5D%22) · [MOB-F-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-01%5D%22) · [MOB-F-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-13%5D%22) · [MOB-F-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-16%5D%22) · [MOB-F-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-27%5D%22)

#### `F-10` — Match historique — contexte
_Module : Historique et fiches_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-10_match-historique-contexte__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-10_match-historique-contexte__phone_light.webp?raw=true' width='230' alt='F-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-10_match-historique-contexte__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-10_match-historique-contexte__phone_dark.webp?raw=true' width='230' alt='F-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-10_match-historique-contexte__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-10_match-historique-contexte__tablet_light.webp?raw=true' width='330' alt='F-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-10_match-historique-contexte__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-10_match-historique-contexte__tablet_dark.webp?raw=true' width='330' alt='F-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Match historique » · « Ligue des champions · Finale » · « Barça » · « 3 – 1 » · « Mi-temps 1-1 » · « Man. United » · « 28 mai 2011 · » · « Wembley, Londres » · « Résumé » · « Compos » · « Événements » · « Contexte » · « Deux ans après Rome, le Barça retrouve Manchester United en finale. Porté par un milieu Xavi–Iniesta–Busquets, il impose son jeu de position et remporte sa quatrième Ligue des champions de l’ère moderne. » · « Classement à l’époque » · « FC Barcelone » · « 96 pts » · « Real Madrid » · « 92 pts » · « Valence » · « 71 pts »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [API-FOOT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-03%5D%22) · [API-FOOT-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-20%5D%22) · [MOB-F-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-01%5D%22) · [MOB-F-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-13%5D%22) · [MOB-F-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-17%5D%22) · [MOB-F-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-27%5D%22)

#### `F-14` — Match introuvable — erreur
_Module : Historique et fiches_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-14_match-introuvable-erreur__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-14_match-introuvable-erreur__phone_light.webp?raw=true' width='230' alt='F-14 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-14_match-introuvable-erreur__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-14_match-introuvable-erreur__phone_dark.webp?raw=true' width='230' alt='F-14 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-14_match-introuvable-erreur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-14_match-introuvable-erreur__tablet_light.webp?raw=true' width='330' alt='F-14 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-14_match-introuvable-erreur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-14_match-introuvable-erreur__tablet_dark.webp?raw=true' width='330' alt='F-14 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Match historique » · « Match indisponible hors-ligne » · « Ce match n’a pas encore été consulté : connecte-toi pour le charger. Les matchs déjà ouverts restent accessibles. » · « Réessayer »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-FOOT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-07%5D%22) · [MOB-F-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-02%5D%22) · [MOB-F-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-03%5D%22) · [MOB-F-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-04%5D%22) · [MOB-F-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-13%5D%22) · [MOB-F-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-18%5D%22) · [MOB-F-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-24%5D%22) · [MOB-F-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-25%5D%22) · [MOB-F-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-27%5D%22)

#### `L-05` — Détail d’un match programmé
_Module : Calendrier et export agenda_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-05_detail-d-un-match-programme__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-05_detail-d-un-match-programme__phone_light.webp?raw=true' width='230' alt='L-05 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-05_detail-d-un-match-programme__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-05_detail-d-un-match-programme__phone_dark.webp?raw=true' width='230' alt='L-05 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-05_detail-d-un-match-programme__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-05_detail-d-un-match-programme__tablet_light.webp?raw=true' width='330' alt='L-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-05_detail-d-un-match-programme__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-05_detail-d-un-match-programme__tablet_dark.webp?raw=true' width='330' alt='L-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Match » · « Liga · Journée 11 » · « Barça » · « WAT · sam. 24 oct. » · « Real Madrid » · « Estadi Olímpic Lluís Companys » · « Barcelone, Espagne » · « Coup d’envoi » · « 21:00 CEST · 20:00 dans ton fuseau (WAT) » · « Rappel » · « 1 h avant le match » · « Ajouter à mon agenda »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-CAL-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-03%5D%22) · [API-CAL-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-06%5D%22) · [API-CAL-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-09%5D%22) · [API-CAL-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-10%5D%22) · [API-CAL-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-22%5D%22) · [API-FOOT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-13%5D%22) · [MOB-L-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-01%5D%22) · [MOB-L-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-05%5D%22) · [MOB-L-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-11%5D%22) · [MOB-L-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-12%5D%22) · [MOB-L-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-22%5D%22) · [MOB-L-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-27%5D%22) · [MOB-L-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-28%5D%22) · [MOB-L-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-29%5D%22)

## 📐 Règles de gestion

- ?include=summary,lineups,events,context (défaut tout) pour alléger.
- Événements triés par minute ; ligne synthétique « Mi-temps » à la 45'; score cumulé par événement (« Barça 2 – 1 »).
- Buteurs avec passeur (« Barça · passe de Xavi ») via assistPlayerId.
- Compositions: titulaires puis remplaçants ; joueurs non publiés listés avec nom seul (pas de lien fiche) : champ playerLink:null.
- Contexte localisé (contextI18n) et standing (3 lignes max) ; ETag fort ; match terminé → Cache-Control max-age 86400.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/matches/:id` | Détail match | ?include=summary,lineups,events,context&lang=fr | {data:{id,competition,stage,home,away,score,halfTime,venue,date,stats,lineups,events,context,standings}} |

## 🛠️ Tâches

- [ ] Ajouter match.service.getDetail(id, locale, include).
- [ ] Mapper toMatchDetail (scoreline cumulée).
- [ ] Peupler les joueurs (lookup limité nom, numéro, slug).
- [ ] Valider include via Joi.
- [ ] Cache Redis match:{id}:{locale} (24 h si finished, 15 s si live).
- [ ] 404 MATCH_NOT_FOUND ; id invalide 400.
- [ ] Swagger MatchDetail.

## ✔️ Critères d'acceptation

- [ ] Étant donné un 3-1 avec buts 27', 34', 54', 69', alors scoreline cumulée 1-0, 1-1, 2-1, 3-1.
- [ ] Étant donné include=lineups, alors pas d'events dans la réponse.
- [ ] Étant donné un match inexistant, alors 404.
- [ ] Étant donné un buteur non publié, alors playerLink:null.

## 🧪 Tests à écrire

- [ ] Unitaire : calcul scoreline.
- [ ] Intégration : include.
- [ ] Intégration : joueur non publié.
- [ ] Intégration : ETag/304 match terminé.

## 🔗 Dépendances

À réaliser après : `API-FOOT-14` · `API-FOOT-08` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.2
- CDC Backend §4.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
