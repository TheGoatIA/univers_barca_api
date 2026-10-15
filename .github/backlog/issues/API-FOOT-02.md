> **API-FOOT-02** · Données · Priorité **P0** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

Les cartes de match affichent code court (FCB, RMA, BAY), écusson et nom de compétition (Liga, Ligue des champions, Coupe du Roi, Amicaux). Les modèles actuels n'ont pas externalRef ni identifiants stables pour la synchronisation.

## ✅ Objectif

Équipes et compétitions identifiables par externalRef avec codes courts, écussons et filtres du calendrier.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `C-01` — Dashboard — état normal
_Module : Accueil dashboard_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-01_dashboard-etat-normal__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-01_dashboard-etat-normal__phone_light.webp?raw=true' width='230' alt='C-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-01_dashboard-etat-normal__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-01_dashboard-etat-normal__phone_dark.webp?raw=true' width='230' alt='C-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-01_dashboard-etat-normal__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-01_dashboard-etat-normal__tablet_light.webp?raw=true' width='330' alt='C-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-01_dashboard-etat-normal__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-01_dashboard-etat-normal__tablet_dark.webp?raw=true' width='330' alt='C-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Salut Boris 👋 » · « Liga · J11 » · « Prochain match » · « Barça » · « Sam. 24 oct. » · « Real Madrid » · « Coup d'envoi dans » · « min » · « À jouer » · « Guess the Player » · « 6 essais · 1 joueur mystère » · « Niveau 2 » · « Quiz du jour » · « 10 questions · Culé » · « oct. » · « Aujourd'hui dans l'histoire · 2011 » · « Le Barça de Guardiola enchaîne un 4-0 mémorable en Ligue des champions. » · « Lecture 1 min » · « Lire l'anecdote » · « jours de suite » · « Record personnel : 27 jours » · « Ton XI Fantasy · J11 »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [API-FOOT-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-04%5D%22) · [API-FOOT-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-14%5D%22) · [API-FOOT-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-18%5D%22) · [API-FOOT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-19%5D%22) · [API-FOOT-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-30%5D%22) · [API-FOOT-50](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-50%5D%22) · [API-FOOT-54](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-54%5D%22) · [MOB-C-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-01%5D%22) · [MOB-C-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-02%5D%22) · [MOB-C-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-03%5D%22) · [MOB-C-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-04%5D%22) · [MOB-C-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-05%5D%22) · [MOB-C-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-06%5D%22) · [MOB-C-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-07%5D%22) · [MOB-C-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-08%5D%22) · [MOB-C-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-09%5D%22) · [MOB-C-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-12%5D%22) · [MOB-C-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-13%5D%22) · [MOB-C-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-14%5D%22) · [MOB-C-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-24%5D%22) · [MOB-C-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-25%5D%22) · [MOB-C-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-26%5D%22) · [MOB-C-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-27%5D%22)

#### `L-01` — Liste des matchs à venir
_Module : Calendrier et export agenda_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__phone_light.webp?raw=true' width='230' alt='L-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__phone_dark.webp?raw=true' width='230' alt='L-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__tablet_light.webp?raw=true' width='330' alt='L-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-01_liste-des-matchs-a-venir__tablet_dark.webp?raw=true' width='330' alt='L-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Calendrier » · « Toutes » · « Liga » · « Ligue des champions » · « Coupe du Roi » · « Amicaux » · « Octobre – novembre 2026 » · « oct. » · « FC Barcelone » · « Real Madrid » · « Exporté » · « Bayern Munich » · « nov. » · « Atlético Madrid » · « Villarreal » · « Non inclus » · « Séville »

**Composants repérés** : `card`, `chip`

</details>

**Issues liées sur ce même écran :** [API-CAL-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-01%5D%22) · [API-CAL-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-04%5D%22) · [API-CAL-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-18%5D%22) · [API-CAL-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-22%5D%22) · [API-CAL-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-23%5D%22) · [API-FOOT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-06%5D%22) · [API-FOOT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-07%5D%22) · [API-FOOT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-13%5D%22) · [API-FOOT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-21%5D%22) · [API-FOOT-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-30%5D%22) · [API-FOOT-50](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-50%5D%22) · [API-FOOT-53](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-53%5D%22) · [MOB-L-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-01%5D%22) · [MOB-L-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-02%5D%22) · [MOB-L-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-03%5D%22) · [MOB-L-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-04%5D%22) · [MOB-L-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-05%5D%22) · [MOB-L-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-06%5D%22) · [MOB-L-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-07%5D%22) · [MOB-L-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-11%5D%22) · [MOB-L-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-27%5D%22) · [MOB-L-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-28%5D%22) · [MOB-L-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-29%5D%22)

#### `WD-01` — Liste des matchs
_Module : Matchs et compétitions_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_light.webp?raw=true' width='330' alt='WD-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_dark.webp?raw=true' width='330' alt='WD-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_light.webp?raw=true' width='330' alt='WD-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_dark.webp?raw=true' width='330' alt='WD-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Matchs et compétitions » · « Synchronisation API football : dernière mise à jour il y a 6 min » · « Synchroniser » · « Match historique » · « À venir » · « En direct » · « Historiques » · « Conflits » · « Rechercher… »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WD-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-01%5D%22) · [ADM-WD-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-02%5D%22) · [ADM-WD-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-03%5D%22) · [ADM-WD-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-04%5D%22) · [ADM-WD-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-09%5D%22) · [ADM-WD-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-12%5D%22) · [ADM-WD-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-13%5D%22) · [ADM-WD-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-14%5D%22) · [API-FOOT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-22%5D%22) · [API-FOOT-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-23%5D%22) · [API-FOOT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-24%5D%22) · [API-FOOT-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-25%5D%22) · [API-FOOT-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-26%5D%22) · [API-FOOT-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-28%5D%22) · [API-FOOT-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-29%5D%22) · [API-FOOT-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-31%5D%22) · [API-FOOT-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-32%5D%22) · [API-FOOT-41](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-41%5D%22) · [API-FOOT-43](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-43%5D%22) · [API-FOOT-44](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-44%5D%22) · [API-FOOT-52](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-52%5D%22)

## 📐 Règles de gestion

- Team.shortName = code 3 lettres majuscules (FCB, RMA, ATM, BAY) ; unique par type.
- Competition.name unique (existant) + slug (liga, ldc, copa-del-rey, friendly) servant de filtre du calendrier mobile.
- externalRef unique sparse sur Team et Competition (identifiant API football).
- crestKey = clé de stockage S3/local ; URL publique construite côté API, jamais l'URL du fournisseur (droits d'image).
- Un seul Team avec isOwnClub=true (FC Barcelone) ; garantie par index partiel unique.

## 🗄️ Données

- teams : externalRef, slug, isOwnClub, colors
- competitions : externalRef, slug, shortName, order, isActive

## 🛠️ Tâches

- [ ] Étendre teamSchema : externalRef, slug, country, isOwnClub, colors{primary,secondary}.
- [ ] Étendre competitionSchema : externalRef, slug, shortName, season courante, order d'affichage, isActive.
- [ ] Index partiel unique {isOwnClub:1} where isOwnClub:true.
- [ ] Ajouter src/services/team.service.ts (getOwnClub avec cache mémoire 5 min).
- [ ] Migration backfill slug/shortName sur données existantes.
- [ ] Exposer TeamPublic/CompetitionPublic dans Swagger.

## ✔️ Critères d'acceptation

- [ ] Étant donné deux équipes isOwnClub=true, quand j'enregistre, alors erreur d'unicité.
- [ ] Étant donné la compétition « Ligue des champions », alors son slug est ldc.
- [ ] Étant donné un externalRef déjà pris, alors 409 CONFLICT.

## 🧪 Tests à écrire

- [ ] Unitaire : génération de slug.
- [ ] Intégration : index partiel isOwnClub.
- [ ] Intégration : unicité externalRef Team/Competition.

## 📚 Références

- CDC Backend §3.2
- CDC Backend §4.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
