> **API-COMM-31** · Tests · Priorité **P0** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

RG-MAP-01 est la règle la plus sensible : aucune position précise ne doit apparaître dans une réponse, un log ou une trace.

## ✅ Objectif

Écrire une suite tests/security/community-privacy.test.ts.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `J-07` — Consentement géolocalisation
_Module : Carte communautaire_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-07_consentement-geolocalisation__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-07_consentement-geolocalisation__phone_light.webp?raw=true' width='230' alt='J-07 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-07_consentement-geolocalisation__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-07_consentement-geolocalisation__phone_dark.webp?raw=true' width='230' alt='J-07 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-07_consentement-geolocalisation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-07_consentement-geolocalisation__tablet_light.webp?raw=true' width='330' alt='J-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-07_consentement-geolocalisation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-07_consentement-geolocalisation__tablet_dark.webp?raw=true' width='330' alt='J-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon » · « culé, au quotidien. » · « Assistant IA, jeux quotidiens, histoire du club et communauté de supporters, au même endroit. » · « Application communautaire non officielle · fan-made » · « Retour » · « Retrouve les culés près de toi » · « Pour te proposer des groupes locaux, nous avons besoin de ta localisation approximative. » · « Jamais ta position exacte » · « Les autres voient seulement ta ville, jamais tes coordonnées GPS. » · « Tu choisis ce qui est visible » · « Ville, pays ou totalement masqué. » · « Révocable à tout moment » · « Dans Paramètres › Confidentialité. » · « Autoriser la localisation » · « Saisir ma ville manuellement »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-COMM-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-03%5D%22) · [API-COMM-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-04%5D%22) · [API-COMM-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-05%5D%22) · [API-COMM-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-33%5D%22) · [MOB-J-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-14%5D%22) · [MOB-J-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-16%5D%22) · [MOB-J-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-17%5D%22) · [MOB-J-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-25%5D%22) · [MOB-J-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-26%5D%22) · [MOB-J-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-27%5D%22)

#### `J-09` — Visibilité sur la carte
_Module : Carte communautaire_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-09_visibilite-sur-la-carte__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-09_visibilite-sur-la-carte__phone_light.webp?raw=true' width='230' alt='J-09 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-09_visibilite-sur-la-carte__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-09_visibilite-sur-la-carte__phone_dark.webp?raw=true' width='230' alt='J-09 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-09_visibilite-sur-la-carte__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-09_visibilite-sur-la-carte__tablet_light.webp?raw=true' width='330' alt='J-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-09_visibilite-sur-la-carte__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-09_visibilite-sur-la-carte__tablet_dark.webp?raw=true' width='330' alt='J-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Visibilité » · « Choisis la précision avec laquelle tu apparais dans les compteurs de la carte. » · « Ville uniquement » · « Compté dans les agrégats de Yaoundé » · « Pays uniquement » · « Compté dans les agrégats du Cameroun » · « Masqué » · « Tu n’apparais dans aucun compteur » · « Ta position GPS précise n'est jamais stockée ni visible par un autre utilisateur. »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [API-COMM-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-01%5D%22) · [API-COMM-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-04%5D%22) · [API-COMM-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-06%5D%22) · [API-COMM-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-29%5D%22) · [MOB-J-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-17%5D%22) · [MOB-J-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-19%5D%22) · [MOB-J-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-20%5D%22) · [MOB-J-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-25%5D%22) · [MOB-J-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-26%5D%22) · [MOB-J-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-27%5D%22)

#### `K-01` — Fiche groupe — non membre
_Module : Groupes locaux_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-01_fiche-groupe-non-membre__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-01_fiche-groupe-non-membre__phone_light.webp?raw=true' width='230' alt='K-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-01_fiche-groupe-non-membre__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-01_fiche-groupe-non-membre__phone_dark.webp?raw=true' width='230' alt='K-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-01_fiche-groupe-non-membre__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-01_fiche-groupe-non-membre__tablet_light.webp?raw=true' width='330' alt='K-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-01_fiche-groupe-non-membre__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-01_fiche-groupe-non-membre__tablet_dark.webp?raw=true' width='330' alt='K-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Groupe » · « Culés Cameroun » · « Yaoundé » · « 721 membres » · « Public » · « Le point de rendez-vous des supporters du Barça au Cameroun. Watch parties, discussions et bon esprit ! » · « Rejoindre le groupe » · « Fil » · « Événements » · « Membres » · « Rejoins le groupe pour participer » · « Tu pourras lire le fil et publier après avoir rejoint. » · « Prochain événement » · « oct. » · « Watch party · Clásico » · « Le Relais, Yaoundé » · « 37 y vont »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-COMM-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-15%5D%22) · [API-COMM-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-19%5D%22) · [API-COMM-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-20%5D%22) · [API-COMM-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-24%5D%22) · [API-COMM-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-32%5D%22) · [API-COMM-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-33%5D%22) · [MOB-K-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-01%5D%22) · [MOB-K-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-02%5D%22) · [MOB-K-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-06%5D%22) · [MOB-K-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-08%5D%22) · [MOB-K-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-28%5D%22) · [MOB-K-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-30%5D%22) · [MOB-K-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-31%5D%22)

## 📐 Règles de gestion

- Parcourir toutes les routes /community/* et vérifier par schéma qu'aucune clé lat, lng, latitude, longitude, coordinates n'apparaît hors center d'agrégat (centre de zone).
- Vérifier la non-présence de coordonnées dans les logs capturés.
- Vérifier IDOR : accès aux groupes pending, fil, membres, événements pour non-membre.
- Vérifier que 'hidden' n'est jamais compté et que la révocation purge la zone GPS.

## 🛠️ Tâches

- [ ] Créer tests/security/community-privacy.test.ts.
- [ ] Écrire l'utilitaire deepFindKeys.
- [ ] Capturer logger transports en test.
- [ ] Ajouter la suite à npm run test:security.
- [ ] Ajouter au workflow CI.

## ✔️ Critères d'acceptation

- [ ] Étant donné les routes /community, quand on explore les JSON, alors aucune clé interdite n'est trouvée.
- [ ] Étant donné un non-membre, alors tout accès au fil retourne 403.
- [ ] Étant donné une révocation, alors la zone GPS est nulle.

## 🧪 Tests à écrire

- [ ] Test de fuite de clés.
- [ ] Test IDOR.
- [ ] Test de logs.
- [ ] Test de révocation.

## 🔗 Dépendances

À réaliser après : `API-COMM-06` · `API-COMM-22` · `API-COMM-09` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §2.16.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
