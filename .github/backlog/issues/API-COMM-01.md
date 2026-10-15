> **API-COMM-01** · Données · Priorité **P0** · Taille **S** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

La carte ne doit jamais exposer de position précise. Le modèle User possède déjà countryCode et city ; il manque la visibilité choisie (J-09 : Ville uniquement / Pays uniquement / Masqué), l'origine de la donnée (GPS arrondi ou saisie manuelle) et la date de mise à jour.

## ✅ Objectif

Faire évoluer le schéma User et créer le référentiel GeoCity pour qu'aucune coordonnée individuelle ne soit jamais persistée.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `J-08` — Saisie manuelle pays et ville
_Module : Carte communautaire_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-08_saisie-manuelle-pays-et-ville__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-08_saisie-manuelle-pays-et-ville__phone_light.webp?raw=true' width='230' alt='J-08 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-08_saisie-manuelle-pays-et-ville__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-08_saisie-manuelle-pays-et-ville__phone_dark.webp?raw=true' width='230' alt='J-08 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-08_saisie-manuelle-pays-et-ville__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-08_saisie-manuelle-pays-et-ville__tablet_light.webp?raw=true' width='330' alt='J-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-08_saisie-manuelle-pays-et-ville__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-08_saisie-manuelle-pays-et-ville__tablet_dark.webp?raw=true' width='330' alt='J-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Ma zone » · « Sans localisation, tu peux déclarer ton pays et ta ville pour apparaître dans les compteurs de la communauté. C'est optionnel. » · « Pays » · « Cameroun » · « Ville » · « Yaoundé » · « Cette information est moins précise qu'une localisation GPS et reste modifiable à tout moment. » · « Enregistrer »

**Composants repérés** : `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [API-COMM-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-02%5D%22) · [API-COMM-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-03%5D%22) · [API-COMM-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-05%5D%22) · [API-COMM-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-32%5D%22) · [MOB-J-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-18%5D%22) · [MOB-J-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-19%5D%22) · [MOB-J-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-26%5D%22)

#### `J-09` — Visibilité sur la carte
_Module : Carte communautaire_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-09_visibilite-sur-la-carte__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-09_visibilite-sur-la-carte__phone_light.webp?raw=true' width='230' alt='J-09 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-09_visibilite-sur-la-carte__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-09_visibilite-sur-la-carte__phone_dark.webp?raw=true' width='230' alt='J-09 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-09_visibilite-sur-la-carte__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-09_visibilite-sur-la-carte__tablet_light.webp?raw=true' width='330' alt='J-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-09_visibilite-sur-la-carte__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-09_visibilite-sur-la-carte__tablet_dark.webp?raw=true' width='330' alt='J-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Visibilité » · « Choisis la précision avec laquelle tu apparais dans les compteurs de la carte. » · « Ville uniquement » · « Compté dans les agrégats de Yaoundé » · « Pays uniquement » · « Compté dans les agrégats du Cameroun » · « Masqué » · « Tu n’apparais dans aucun compteur » · « Ta position GPS précise n'est jamais stockée ni visible par un autre utilisateur. »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [API-COMM-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-04%5D%22) · [API-COMM-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-06%5D%22) · [API-COMM-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-29%5D%22) · [API-COMM-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-31%5D%22) · [MOB-J-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-17%5D%22) · [MOB-J-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-19%5D%22) · [MOB-J-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-20%5D%22) · [MOB-J-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-25%5D%22) · [MOB-J-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-26%5D%22) · [MOB-J-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-27%5D%22)

## 📐 Règles de gestion

- La position GPS précise n'est jamais stockée en base (CDC Global §10.2) : seuls countryCode (ISO 3166-1 alpha-2), city (nom normalisé) et cityId (référence GeoCity) sont conservés.
- Nouveau champ User.mapVisibility ∈ {city, country, hidden}, défaut 'hidden' tant qu'aucun consentement n'est donné (opt-in explicite, RG-MAP-02).
- Nouveau champ User.locationSource ∈ {gps-approx, manual, null} et User.locationUpdatedAt (Date).
- Collection GeoCity (référentiel en lecture seule) : { cityId, name, asciiName, countryCode, region, population, location: GeoJSON Point (centre de ville) } avec index 2dsphere et index unique { countryCode, asciiName, region }.
- Les coordonnées de GeoCity sont celles du CENTRE de la ville, jamais celles d'un utilisateur.

## 🗄️ Données

- users.mapVisibility, locationSource, locationUpdatedAt, cityId
- geocities (nouvelle)

## 🛠️ Tâches

- [ ] Modifier src/models/user.model.ts : ajouter mapVisibility, locationSource, locationUpdatedAt, cityId (ObjectId ref GeoCity) ; conserver l'index { countryCode:1, city:1 }.
- [ ] Créer src/models/geo-city.model.ts (GeoCity) et l'exporter dans src/models/index.ts.
- [ ] Créer index { location: '2dsphere' } et { countryCode:1, population:-1 } sur GeoCity.
- [ ] Écrire la migration scripts/migrations/<ts>-user-map-visibility.js : mapVisibility='hidden' par défaut pour les comptes existants, up idempotent, down non destructif.
- [ ] Mettre à jour le sérialiseur toJSON User pour ne jamais renvoyer cityId/locationSource à un autre utilisateur (projection publique).
- [ ] Documenter les champs dans src/docs/swagger.ts (schéma UserLocation).

## ✔️ Critères d'acceptation

- [ ] Étant donné un compte existant, quand la migration est jouée deux fois, alors mapVisibility vaut 'hidden' et aucune erreur n'est levée.
- [ ] Étant donné un User, quand on inspecte la collection, alors aucun champ lat/lng/coordinates n'existe sur le document User.
- [ ] Étant donné une requête GET /users/:id par un autre utilisateur, quand la réponse est produite, alors cityId et locationSource sont absents.

## 🧪 Tests à écrire

- [ ] Test unitaire : schéma User refuse mapVisibility='precise'.
- [ ] Test d'intégration migration : idempotence.
- [ ] Test unitaire : projection publique d'un User sans champs de localisation interne.
- [ ] Test d'index : GeoCity possède bien l'index 2dsphere (collection.indexes()).

## 📚 Références

- CDC Global §2.8
- CDC Global §2.16.2 (RG-MAP-01 à 05)
- CDC Global §10.2
- CDC Backend §3.6

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
