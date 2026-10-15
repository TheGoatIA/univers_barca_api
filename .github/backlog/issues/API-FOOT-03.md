> **API-FOOT-03** · Données · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le modèle Match embarque événements et compositions mais ne conserve ni minute courante, ni score mi-temps, ni formation/entraîneur, ni classement de l'époque, ni historique de résolution de conflit : tout ceci est affiché dans les écrans F-07 à F-10 et WD-02/03.

## ✅ Objectif

Un Match capable de représenter un match historique complet et un match live, avec traçabilité des corrections éditoriales.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `F-07` — Match historique — résumé
_Module : Historique et fiches_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-07_match-historique-resume__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-07_match-historique-resume__phone_light.webp?raw=true' width='230' alt='F-07 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-07_match-historique-resume__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-07_match-historique-resume__phone_dark.webp?raw=true' width='230' alt='F-07 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-07_match-historique-resume__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-07_match-historique-resume__tablet_light.webp?raw=true' width='330' alt='F-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-07_match-historique-resume__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-07_match-historique-resume__tablet_dark.webp?raw=true' width='330' alt='F-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Match historique » · « Ligue des champions · Finale » · « Barça » · « 3 – 1 » · « Mi-temps 1-1 » · « Man. United » · « 28 mai 2011 · » · « Wembley, Londres » · « Résumé » · « Compos » · « Événements » · « Contexte » · « Buteurs » · « 27' » · « Pedro » · « Barça · passe de Xavi » · « 34' » · « Rooney » · « 54' » · « Messi » · « 69' » · « Villa » · « Barça · passe de Messi » · « Statistiques du match » · « 63% » · « Possession » · « 37% » · « Tirs » · « Tirs cadrés » · « Corners »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [API-FOOT-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-16%5D%22) · [API-FOOT-42](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-42%5D%22) · [MOB-F-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-01%5D%22) · [MOB-F-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-02%5D%22) · [MOB-F-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-03%5D%22) · [MOB-F-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-04%5D%22) · [MOB-F-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-13%5D%22) · [MOB-F-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-14%5D%22) · [MOB-F-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-19%5D%22) · [MOB-F-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-24%5D%22) · [MOB-F-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-25%5D%22) · [MOB-F-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-26%5D%22) · [MOB-F-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-27%5D%22)

#### `F-08` — Match historique — compositions
_Module : Historique et fiches_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-08_match-historique-compositions__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-08_match-historique-compositions__phone_light.webp?raw=true' width='230' alt='F-08 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-08_match-historique-compositions__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-08_match-historique-compositions__phone_dark.webp?raw=true' width='230' alt='F-08 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-08_match-historique-compositions__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-08_match-historique-compositions__tablet_light.webp?raw=true' width='330' alt='F-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-08_match-historique-compositions__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-08_match-historique-compositions__tablet_dark.webp?raw=true' width='330' alt='F-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Match historique » · « Ligue des champions · Finale » · « Barça » · « 3 – 1 » · « Mi-temps 1-1 » · « Man. United » · « 28 mai 2011 · » · « Wembley, Londres » · « Résumé » · « Compos » · « Événements » · « Contexte » · « Valdés » · « Alves » · « Piqué » · « Mascherano » · « Abidal » · « Busquets » · « Xavi » · « Iniesta » · « Pedro » · « Messi » · « Villa » · « Formation » · « 4-3-3 » · « Entraîneur » · « Pep Guardiola »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [API-FOOT-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-16%5D%22) · [MOB-F-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-01%5D%22) · [MOB-F-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-13%5D%22) · [MOB-F-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-15%5D%22) · [MOB-F-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-27%5D%22)

#### `F-09` — Match historique — événements
_Module : Historique et fiches_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-09_match-historique-evenements__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-09_match-historique-evenements__phone_light.webp?raw=true' width='230' alt='F-09 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-09_match-historique-evenements__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-09_match-historique-evenements__phone_dark.webp?raw=true' width='230' alt='F-09 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-09_match-historique-evenements__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-09_match-historique-evenements__tablet_light.webp?raw=true' width='330' alt='F-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-09_match-historique-evenements__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-09_match-historique-evenements__tablet_dark.webp?raw=true' width='330' alt='F-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Match historique » · « Ligue des champions · Finale » · « Barça » · « 3 – 1 » · « Mi-temps 1-1 » · « Man. United » · « 28 mai 2011 · » · « Wembley, Londres » · « Résumé » · « Compos » · « Événements » · « Contexte » · « 27' » · « But · Pedro » · « Barça 1 – 0 » · « 34' » · « But · Rooney » · « Barça 1 – 1 » · « 45' » · « Mi-temps » · « 54' » · « But · Messi » · « Barça 2 – 1 » · « 69' » · « But · Villa » · « Barça 3 – 1 » · « 88' » · « Remplacement » · « Keita remplace Xavi »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [API-FOOT-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-16%5D%22) · [MOB-F-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-01%5D%22) · [MOB-F-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-13%5D%22) · [MOB-F-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-16%5D%22) · [MOB-F-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-27%5D%22)

#### `F-10` — Match historique — contexte
_Module : Historique et fiches_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-10_match-historique-contexte__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-10_match-historique-contexte__phone_light.webp?raw=true' width='230' alt='F-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-10_match-historique-contexte__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-10_match-historique-contexte__phone_dark.webp?raw=true' width='230' alt='F-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-10_match-historique-contexte__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-10_match-historique-contexte__tablet_light.webp?raw=true' width='330' alt='F-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-10_match-historique-contexte__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-10_match-historique-contexte__tablet_dark.webp?raw=true' width='330' alt='F-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Match historique » · « Ligue des champions · Finale » · « Barça » · « 3 – 1 » · « Mi-temps 1-1 » · « Man. United » · « 28 mai 2011 · » · « Wembley, Londres » · « Résumé » · « Compos » · « Événements » · « Contexte » · « Deux ans après Rome, le Barça retrouve Manchester United en finale. Porté par un milieu Xavi–Iniesta–Busquets, il impose son jeu de position et remporte sa quatrième Ligue des champions de l’ère moderne. » · « Classement à l’époque » · « FC Barcelone » · « 96 pts » · « Real Madrid » · « 92 pts » · « Valence » · « 71 pts »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [API-FOOT-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-16%5D%22) · [API-FOOT-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-20%5D%22) · [MOB-F-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-01%5D%22) · [MOB-F-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-13%5D%22) · [MOB-F-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-17%5D%22) · [MOB-F-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-27%5D%22)

#### `WD-02` — Détail d’un match
_Module : Matchs et compétitions_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__desktop_light.webp?raw=true' width='330' alt='WD-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__desktop_dark.webp?raw=true' width='330' alt='WD-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__tablet_light.webp?raw=true' width='330' alt='WD-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__tablet_dark.webp?raw=true' width='330' alt='WD-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Barça – Real Madrid » · « Programmé » · « Liga · Journée 11 · Sam. 24 oct. 2026 · 21:00 CEST · Estadi Olímpic » · « Modifier » · « Saisir le résultat » · « Informations » · « Compositions » · « Événements » · « Historique des modifications »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WD-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-01%5D%22) · [ADM-WD-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-04%5D%22) · [ADM-WD-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-05%5D%22) · [ADM-WD-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-06%5D%22) · [ADM-WD-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-07%5D%22) · [ADM-WD-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-08%5D%22) · [ADM-WD-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-13%5D%22) · [ADM-WD-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-14%5D%22) · [API-FOOT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-24%5D%22) · [API-FOOT-41](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-41%5D%22) · [API-FOOT-51](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-51%5D%22)

#### `WD-03` — Résolution de conflit de synchronisation
_Module : Matchs et compétitions_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-03_resolution-de-conflit-de-synchronisation__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-03_resolution-de-conflit-de-synchronisation__desktop_light.webp?raw=true' width='330' alt='WD-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-03_resolution-de-conflit-de-synchronisation__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-03_resolution-de-conflit-de-synchronisation__desktop_dark.webp?raw=true' width='330' alt='WD-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-03_resolution-de-conflit-de-synchronisation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-03_resolution-de-conflit-de-synchronisation__tablet_light.webp?raw=true' width='330' alt='WD-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-03_resolution-de-conflit-de-synchronisation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-03_resolution-de-conflit-de-synchronisation__tablet_dark.webp?raw=true' width='330' alt='WD-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Bayern – Barça » · « Conflit » · « Résoudre le conflit de synchronisation » · « Bayern Munich – FC Barcelone · Ligue des champions · Phase de ligue J3 » · « Ignorer pour l’instant » · « L'API football a détecté une modification qui diffère d'une correction éditoriale. Choisis explicitement la valeur à conserver : la décision est journalisée (avant/après, auteur, horodatage). » · « Champ » · « Valeur API football » · « Valeur éditoriale actuelle » · « Action » · « Heure du coup d’envoi »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WD-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-01%5D%22) · [ADM-WD-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-08%5D%22) · [ADM-WD-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-09%5D%22) · [ADM-WD-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-10%5D%22) · [ADM-WD-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-13%5D%22) · [ADM-WD-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-14%5D%22) · [API-FOOT-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-28%5D%22) · [API-FOOT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-33%5D%22) · [API-FOOT-43](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-43%5D%22)

## 📐 Règles de gestion

- Statuts : scheduled, live, finished, postponed, cancelled (existants) ; transitions autorisées uniquement scheduled→live→finished, scheduled→postponed→scheduled, tout→cancelled.
- kickoffAt stocké en UTC (CDC §4.2) ; venueTimezone (IANA, ex. Europe/Madrid) pour afficher « 21:00 CEST ».
- minute (0-130) et period (1H, HT, 2H, ET, PEN) renseignés uniquement si status=live.
- halfTimeHome/halfTimeAway pour « Mi-temps 1-1 » ; stats d'équipe embarquées {possessionHome,shotsHome,...}.
- events[].type étendu : goal, own-goal, penalty, card-yellow, card-red, sub, half-time ; assistPlayerId optionnel (« passe de Xavi »).
- lineups : formation (ex. 4-3-3) et coach par équipe ; 11 titulaires max par équipe.
- context : contextI18n (FR/EN/ES) + standingsSnapshot[{teamId,points}] pour « Classement à l'époque (96 pts / 92 pts / 71 pts) ».

## 🗄️ Données

- matches : venueTimezone, minute, period, halfTime*, stats, formations, coaches, standingsSnapshot, editedFields, conflicts[], lastSyncedAt, isHistorical

## 🛠️ Tâches

- [ ] Étendre matchSchema avec venueTimezone, minute, period, halfTimeHome/Away, stats, formations, coaches, standingsSnapshot, editedFields[] (champs modifiés manuellement), lastSyncedAt, isHistorical.
- [ ] Transformer syncConflict en conflicts[] : {field, apiValue, editorialValue, detectedAt, resolvedAt?, resolution?, resolvedBy?}.
- [ ] Valider les transitions de statut dans un hook pre('save') (utils/matchStatus.ts : canTransition(from,to)).
- [ ] Index : {status:1,kickoffAt:1}, {homeTeamId:1,awayTeamId:1,kickoffAt:-1} (confrontations), {isHistorical:1,kickoffAt:-1}, {'conflicts.resolvedAt':1}.
- [ ] Migration : convertir syncConflict unique → conflicts[], poser isHistorical=false.
- [ ] Mettre à jour toJSON : exposer scoreHome/Away uniquement si status != scheduled.
- [ ] Mettre à jour les schémas Swagger MatchSummary / MatchDetail.

## ✔️ Critères d'acceptation

- [ ] Étant donné un match finished, quand je tente status=live, alors la sauvegarde est refusée.
- [ ] Étant donné une date 2011-05-28 sans externalRef, alors source=manual et isHistorical=true acceptés.
- [ ] Étant donné un match scheduled, alors la réponse JSON ne contient pas scoreHome.
- [ ] Étant donné 12 titulaires dans une équipe, alors 422.

## 🧪 Tests à écrire

- [ ] Unitaire : canTransition (matrice complète).
- [ ] Intégration : hook pre-save bloque transition invalide.
- [ ] Intégration : index confrontations utilisé (explain).
- [ ] Migration syncConflict→conflicts.

## 📚 Références

- CDC Backend §4.2
- CDC Admin §4.3.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
