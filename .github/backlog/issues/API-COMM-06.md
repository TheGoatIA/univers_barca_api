> **API-COMM-06** · Fonctionnel · Priorité **P0** · Taille **S** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

L'écran J-09 propose trois options : « Ville uniquement » (compté dans Yaoundé), « Pays uniquement » (compté dans le Cameroun), « Masqué » (aucun compteur).

## ✅ Objectif

Exposer GET/PATCH /community/me/visibility qui lit et modifie User.mapVisibility.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `J-09` — Visibilité sur la carte
_Module : Carte communautaire_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-09_visibilite-sur-la-carte__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-09_visibilite-sur-la-carte__phone_light.webp?raw=true' width='230' alt='J-09 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-09_visibilite-sur-la-carte__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-09_visibilite-sur-la-carte__phone_dark.webp?raw=true' width='230' alt='J-09 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-09_visibilite-sur-la-carte__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-09_visibilite-sur-la-carte__tablet_light.webp?raw=true' width='330' alt='J-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-09_visibilite-sur-la-carte__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/J/J-09_visibilite-sur-la-carte__tablet_dark.webp?raw=true' width='330' alt='J-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Visibilité » · « Choisis la précision avec laquelle tu apparais dans les compteurs de la carte. » · « Ville uniquement » · « Compté dans les agrégats de Yaoundé » · « Pays uniquement » · « Compté dans les agrégats du Cameroun » · « Masqué » · « Tu n’apparais dans aucun compteur » · « Ta position GPS précise n'est jamais stockée ni visible par un autre utilisateur. »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [API-COMM-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-01%5D%22) · [API-COMM-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-04%5D%22) · [API-COMM-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-29%5D%22) · [API-COMM-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-31%5D%22) · [MOB-J-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-17%5D%22) · [MOB-J-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-19%5D%22) · [MOB-J-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-20%5D%22) · [MOB-J-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-25%5D%22) · [MOB-J-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-26%5D%22) · [MOB-J-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-J-27%5D%22)

## 📐 Règles de gestion

- Valeurs : city | country | hidden. 'city' exige une ville renseignée, 'country' un pays.
- Le changement prend effet immédiatement dans les nouvelles recherches de groupes et au prochain recalcul d'agrégats (≤ 10 min, cf. cache) ; un recalcul incrémental du compteur du compte est enqueued.
- Le GET retourne aussi le texte de description par option pour l'app (clés i18n, pas de texte en dur).
- Un utilisateur 'hidden' reste visible comme membre de ses groupes mais n'est pas compté dans LocationAggregate.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `PATCH` | `/api/v1/community/me/visibility` | Change la précision d'apparition | {"mapVisibility":"country"} | {"success":true,"data":{"mapVisibility":"country"}} |

## 🛠️ Tâches

- [ ] Ajouter GET et PATCH /community/me/visibility.
- [ ] Créer visibilitySchema Joi (valid('city','country','hidden')).
- [ ] Implémenter updateVisibility (contrôle prérequis zone).
- [ ] Enqueue 'community' / 'recompute-aggregates' scope user.
- [ ] Écrire l'audit logger applicatif (sans PII).
- [ ] Documenter @swagger.

## ✔️ Critères d'acceptation

- [ ] Étant donné un compte sans ville, quand il choisit 'city', alors 409 LOCATION_REQUIRED.
- [ ] Étant donné 'hidden', quand l'agrégat est recalculé, alors le compteur de sa ville est décrémenté.
- [ ] Étant donné 'country', quand il consulte J-03, alors il n'est pas compté dans la ville mais dans le pays.

## 🧪 Tests à écrire

- [ ] Test d'intégration : trois transitions de visibilité.
- [ ] Test unitaire : prérequis zone.
- [ ] Test d'intégration : impact sur agrégats après job.

## 🔗 Dépendances

À réaliser après : `API-COMM-05` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §2.8
- CDC Global §2.16.2 (RG-MAP-01 à 05)
- CDC Global §10.2
- CDC Backend §3.6

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
