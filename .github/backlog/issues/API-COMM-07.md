> **API-COMM-07** · Données · Priorité **P0** · Taille **S** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Le modèle actuel stocke lat/lng en nombres simples, sans index géospatial ni couverture région/zoom. La carte (bbox, clusters, près de moi) exige 2dsphere.

## ✅ Objectif

Faire évoluer LocationAggregate pour supporter requêtes bbox/rayon et unicité par zone.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `J-01` — Carte du monde
_Module : Carte communautaire_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-01_carte-du-monde__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-01_carte-du-monde__phone_light.webp?raw=true' width='230' alt='J-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-01_carte-du-monde__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-01_carte-du-monde__phone_dark.webp?raw=true' width='230' alt='J-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-01_carte-du-monde__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-01_carte-du-monde__tablet_light.webp?raw=true' width='330' alt='J-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-01_carte-du-monde__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-01_carte-du-monde__tablet_dark.webp?raw=true' width='330' alt='J-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « 12 480 culés dans 96 pays » · « Rechercher un pays ou une ville » · « Tous » · « Groupes » · « Watch parties » · « Près de moi » · « Dans le monde » · « 12 480 culés » · « 96 pays » · « 🇪🇸 » · « Espagne » · « 5 210 » · « 🇫🇷 » · « France » · « 2 140 » · « 🇨🇲 » · « Cameroun » · « 1 240 »

**Composants repérés** : `avatar`, `chip`, `map`

</details>

**Issues liées sur ce même écran :** [API-COMM-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-08%5D%22) · [API-COMM-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-09%5D%22) · [API-COMM-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-10%5D%22) · [API-COMM-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-30%5D%22) · [API-COMM-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-32%5D%22) · [API-COMM-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-33%5D%22) · [MOB-J-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-01%5D%22) · [MOB-J-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-02%5D%22) · [MOB-J-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-04%5D%22) · [MOB-J-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-05%5D%22) · [MOB-J-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-06%5D%22) · [MOB-J-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-07%5D%22) · [MOB-J-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-08%5D%22) · [MOB-J-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-09%5D%22) · [MOB-J-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-23%5D%22) · [MOB-J-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-24%5D%22) · [MOB-J-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-25%5D%22) · [MOB-J-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-26%5D%22) · [MOB-J-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-27%5D%22)

#### `J-03` — Zoom ville — Yaoundé
_Module : Carte communautaire_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-03_zoom-ville-yaounde__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-03_zoom-ville-yaounde__phone_light.webp?raw=true' width='230' alt='J-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-03_zoom-ville-yaounde__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-03_zoom-ville-yaounde__phone_dark.webp?raw=true' width='230' alt='J-03 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-03_zoom-ville-yaounde__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-03_zoom-ville-yaounde__tablet_light.webp?raw=true' width='330' alt='J-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-03_zoom-ville-yaounde__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-03_zoom-ville-yaounde__tablet_dark.webp?raw=true' width='330' alt='J-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « 12 480 culés dans 96 pays » · « Rechercher un pays ou une ville » · « Tous » · « Groupes » · « Watch parties » · « Près de moi » · « Yaoundé · ≈ 720 culés » · « Autour de toi » · « Zone approximative » · « Aucune position exacte n'est affichée : seuls des compteurs par zone et les groupes publics apparaissent. » · « Culés Cameroun » · « Yaoundé · Bastos · 721 membres · » · « Watch party sam. » · « Rejoindre »

**Composants repérés** : `avatar`, `btn`, `card`, `chip`, `map`

</details>

**Issues liées sur ce même écran :** [API-COMM-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-02%5D%22) · [API-COMM-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-08%5D%22) · [API-COMM-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-09%5D%22) · [API-COMM-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-11%5D%22) · [API-COMM-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-13%5D%22) · [API-COMM-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-32%5D%22) · [MOB-J-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-01%5D%22) · [MOB-J-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-02%5D%22) · [MOB-J-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-04%5D%22) · [MOB-J-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-07%5D%22) · [MOB-J-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-08%5D%22) · [MOB-J-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-09%5D%22) · [MOB-J-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-11%5D%22) · [MOB-J-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-23%5D%22) · [MOB-J-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-24%5D%22) · [MOB-J-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-25%5D%22) · [MOB-J-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-26%5D%22) · [MOB-J-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-27%5D%22)

## 📐 Règles de gestion

- Nouveau champ location: GeoJSON Point (centre de zone : centre de pays, centre de région ou GeoCity.location).
- Champs : level ∈ country|region|city, countryCode, region, city, cityId, count (≥0), displayCount (valeur arrondie exposée), computedAt.
- Index : { location: '2dsphere' }, unique { level, countryCode, region, cityId }, { level:1, count:-1 }.
- Les anciens champs lat/lng sont conservés en lecture pendant une version puis supprimés par migration.

## 🗄️ Données

- locationaggregates

## 🛠️ Tâches

- [ ] Modifier src/models/community.model.ts (LocationAggregate).
- [ ] Écrire la migration de conversion lat/lng vers location.
- [ ] Ajouter les index et vérifier leur création en CI (npm run test:integration).
- [ ] Créer le type TypeScript LocationAggregateDoc.
- [ ] Mettre à jour les fixtures.
- [ ] Ajouter schéma swagger MapAggregate.

## ✔️ Critères d'acceptation

- [ ] Étant donné deux upserts du même { level, countryCode, cityId }, quand ils sont enregistrés, alors un seul document existe.
- [ ] Étant donné une requête $geoWithin sur bbox, quand elle est expliquée, alors l'index 2dsphere est utilisé.
- [ ] Étant donné un count négatif, quand on enregistre, alors la validation échoue.

## 🧪 Tests à écrire

- [ ] Test d'intégration : unicité.
- [ ] Test d'intégration : explain() utilise IXSCAN 2dsphere.
- [ ] Test de migration : lat/lng convertis.

## 🔗 Dépendances

À réaliser après : `API-COMM-02` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.6
- CDC Backend §5.6

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
