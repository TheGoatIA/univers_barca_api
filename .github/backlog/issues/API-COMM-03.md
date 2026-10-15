> **API-COMM-03** · Sécurité · Priorité **P0** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Quand le mobile envoie une position (J-07 « Autoriser la localisation »), l'API doit la convertir en ville puis l'oublier immédiatement. C'est la garantie centrale de RG-MAP-01.

## ✅ Objectif

Implémenter src/services/geo.service.ts qui résout une position approximative en GeoCity et garantit l'absence de trace des coordonnées.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `J-07` — Consentement géolocalisation
_Module : Carte communautaire_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-07_consentement-geolocalisation__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-07_consentement-geolocalisation__phone_light.webp?raw=true' width='230' alt='J-07 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-07_consentement-geolocalisation__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-07_consentement-geolocalisation__phone_dark.webp?raw=true' width='230' alt='J-07 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-07_consentement-geolocalisation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-07_consentement-geolocalisation__tablet_light.webp?raw=true' width='330' alt='J-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-07_consentement-geolocalisation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-07_consentement-geolocalisation__tablet_dark.webp?raw=true' width='330' alt='J-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon » · « culé, au quotidien. » · « Assistant IA, jeux quotidiens, histoire du club et communauté de supporters, au même endroit. » · « Application communautaire non officielle · fan-made » · « Retour » · « Retrouve les culés près de toi » · « Pour te proposer des groupes locaux, nous avons besoin de ta localisation approximative. » · « Jamais ta position exacte » · « Les autres voient seulement ta ville, jamais tes coordonnées GPS. » · « Tu choisis ce qui est visible » · « Ville, pays ou totalement masqué. » · « Révocable à tout moment » · « Dans Paramètres › Confidentialité. » · « Autoriser la localisation » · « Saisir ma ville manuellement »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-COMM-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-04%5D%22) · [API-COMM-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-05%5D%22) · [API-COMM-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-31%5D%22) · [API-COMM-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-33%5D%22) · [MOB-J-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-14%5D%22) · [MOB-J-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-16%5D%22) · [MOB-J-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-17%5D%22) · [MOB-J-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-25%5D%22) · [MOB-J-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-26%5D%22) · [MOB-J-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-27%5D%22)

#### `J-08` — Saisie manuelle pays et ville
_Module : Carte communautaire_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-08_saisie-manuelle-pays-et-ville__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-08_saisie-manuelle-pays-et-ville__phone_light.webp?raw=true' width='230' alt='J-08 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-08_saisie-manuelle-pays-et-ville__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-08_saisie-manuelle-pays-et-ville__phone_dark.webp?raw=true' width='230' alt='J-08 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-08_saisie-manuelle-pays-et-ville__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-08_saisie-manuelle-pays-et-ville__tablet_light.webp?raw=true' width='330' alt='J-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-08_saisie-manuelle-pays-et-ville__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-08_saisie-manuelle-pays-et-ville__tablet_dark.webp?raw=true' width='330' alt='J-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Ma zone » · « Sans localisation, tu peux déclarer ton pays et ta ville pour apparaître dans les compteurs de la communauté. C'est optionnel. » · « Pays » · « Cameroun » · « Ville » · « Yaoundé » · « Cette information est moins précise qu'une localisation GPS et reste modifiable à tout moment. » · « Enregistrer »

**Composants repérés** : `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [API-COMM-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-01%5D%22) · [API-COMM-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-02%5D%22) · [API-COMM-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-05%5D%22) · [API-COMM-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-32%5D%22) · [MOB-J-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-18%5D%22) · [MOB-J-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-19%5D%22) · [MOB-J-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-26%5D%22)

## 📐 Règles de gestion

- Entrée : lat ∈ [-90, 90], lng ∈ [-180, 180], arrondies côté serveur à 2 décimales dès la validation, avant tout traitement.
- Résolution : $geoNear sur GeoCity.location avec maxDistance 50 000 m ; sinon erreur 422 LOCATION_UNRESOLVED (« Aucune ville trouvée, saisis ta ville manuellement »).
- Les coordonnées ne sont jamais persistées, jamais loggées (Winston : masquer lat/lng/latitude/longitude dans requestLogger), jamais envoyées en trace OpenTelemetry (span attributes).
- Retour : { countryCode, city, cityId } uniquement.

## 🗄️ Données

- geocities

## 🛠️ Tâches

- [ ] Créer src/services/geo.service.ts : resolveCity(lat,lng) et listCities(countryCode,q).
- [ ] Ajouter lat/lng/latitude/longitude à la liste de redaction dans src/middleware/requestLogger.ts et src/utils/logger.ts.
- [ ] Ajouter le filtre d'attributs sensibles dans src/tracing.ts.
- [ ] Créer le validator src/validators/community.validator.ts (locationGpsSchema).
- [ ] Écrire utils/round-coord.ts (Math.round(x*100)/100).
- [ ] Ajouter un test de non-régression qui parcourt les logs de test à la recherche de coordonnées.
- [ ] Gérer le cas hors-océan / pôle : erreur LOCATION_UNRESOLVED.

## ✔️ Critères d'acceptation

- [ ] Étant donné lat=3.8480, lng=11.5021, quand resolveCity est appelé, alors la ville retournée est Yaoundé (CM).
- [ ] Étant donné une position en plein océan, quand resolveCity est appelé, alors une AppError 422 LOCATION_UNRESOLVED est levée.
- [ ] Étant donné une requête avec coordonnées, quand elle est journalisée, alors les coordonnées apparaissent sous la forme '[REDACTED]'.
- [ ] Étant donné la base après l'appel, quand on cherche les valeurs 3.84 ou 11.50 dans toutes les collections, alors rien n'est trouvé.

## 🧪 Tests à écrire

- [ ] Test unitaire : Yaoundé, Paris, Lyon résolus.
- [ ] Test unitaire : plus de 50 km de toute ville => erreur.
- [ ] Test de sécurité : le body de la requête est masqué dans les logs.
- [ ] Test unitaire : lat hors bornes rejetée par Joi.

## 🔗 Dépendances

À réaliser après : `API-COMM-02` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §2.16.2 RG-MAP-01
- CDC Global §10.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
