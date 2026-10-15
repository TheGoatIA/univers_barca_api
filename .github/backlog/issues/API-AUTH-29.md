> **API-AUTH-29** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

B-11 « D'où supportes-tu ? » (pays Cameroun, ville Yaoundé, optionnels, « Aucune position GPS n'est utilisée »), B-12 recherche de pays (« Cam » → Cameroun, Canada, Cambodge, Cap-Vert, Chili), B-13 joueur préféré (Yamal, Pedri, Raphinha, Lewandowski, Gavi, Cubarsí, De Jong, Messi, Xavi, « Je n'ai pas de favori »), B-14 ancienneté (4 niveaux → niveau de départ des quiz). Le User a `countryCode`, `city`, `favoritePlayerId`, `supporterSince` mais pas de niveau ni de suivi d'étape.

## ✅ Objectif

Fournir référentiels et PATCH validés pour l'onboarding, avec statut d'avancement.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `B-11` — Pays et ville
_Module : Onboarding et authentification_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-11_pays-et-ville__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-11_pays-et-ville__phone_light.webp?raw=true' width='230' alt='B-11 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-11_pays-et-ville__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-11_pays-et-ville__phone_dark.webp?raw=true' width='230' alt='B-11 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-11_pays-et-ville__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-11_pays-et-ville__tablet_light.webp?raw=true' width='330' alt='B-11 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-11_pays-et-ville__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-11_pays-et-ville__tablet_dark.webp?raw=true' width='330' alt='B-11 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon » · « culé, au quotidien. » · « Assistant IA, jeux quotidiens, histoire du club et communauté de supporters, au même endroit. » · « Application communautaire non officielle · fan-made » · « 1/3 » · « D’où supportes-tu ? » · « Optionnel · pour te proposer des groupes locaux et l’heure des matchs. Aucune position GPS n’est utilisée ici. » · « Pays » · « Cameroun » · « Ville » · « Yaoundé » · « Seule ta » · « ville » · « pourra apparaître sur la carte, jamais ta position exacte. » · « Continuer » · « Passer cette étape »

**Composants repérés** : `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [API-AUTH-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-30%5D%22) · [MOB-B-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-01%5D%22) · [MOB-B-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-13%5D%22) · [MOB-B-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-16%5D%22) · [MOB-B-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-28%5D%22) · [MOB-B-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-29%5D%22)

#### `B-12` — Recherche du pays
_Module : Onboarding et authentification_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-12_recherche-du-pays__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-12_recherche-du-pays__phone_light.webp?raw=true' width='230' alt='B-12 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-12_recherche-du-pays__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-12_recherche-du-pays__phone_dark.webp?raw=true' width='230' alt='B-12 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-12_recherche-du-pays__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-12_recherche-du-pays__tablet_light.webp?raw=true' width='330' alt='B-12 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-12_recherche-du-pays__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-12_recherche-du-pays__tablet_dark.webp?raw=true' width='330' alt='B-12 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon » · « culé, au quotidien. » · « Assistant IA, jeux quotidiens, histoire du club et communauté de supporters, au même endroit. » · « Application communautaire non officielle · fan-made » · « 1/3 » · « Choisis ton pays » · « Cam » · « 🇨🇲 » · « Cameroun » · « 🇨🇦 » · « Canada » · « 🇰🇭 » · « Cambodge » · « 🇨🇻 » · « Cap-Vert » · « 🇨🇱 » · « Chili » · « Confirmer »

**Composants repérés** : `btn`, `search`

</details>

**Issues liées sur ce même écran :** [MOB-B-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-17%5D%22) · [MOB-B-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-28%5D%22) · [MOB-B-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-29%5D%22)

#### `B-13` — Personnalisation — joueur préféré
_Module : Onboarding et authentification_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-13_personnalisation-joueur-prefere__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-13_personnalisation-joueur-prefere__phone_light.webp?raw=true' width='230' alt='B-13 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-13_personnalisation-joueur-prefere__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-13_personnalisation-joueur-prefere__phone_dark.webp?raw=true' width='230' alt='B-13 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-13_personnalisation-joueur-prefere__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-13_personnalisation-joueur-prefere__tablet_light.webp?raw=true' width='330' alt='B-13 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-13_personnalisation-joueur-prefere__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-13_personnalisation-joueur-prefere__tablet_dark.webp?raw=true' width='330' alt='B-13 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon » · « culé, au quotidien. » · « Assistant IA, jeux quotidiens, histoire du club et communauté de supporters, au même endroit. » · « Application communautaire non officielle · fan-made » · « 2/3 » · « Ton joueur préféré ? » · « Pour personnaliser ton accueil et tes notifications. » · « Yamal » · « Pedri » · « Raphinha » · « Lewandowski » · « Gavi » · « Cubarsí » · « De Jong » · « Messi » · « Xavi » · « Continuer » · « Je n’ai pas de favori »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [MOB-B-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-01%5D%22) · [MOB-B-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-18%5D%22) · [MOB-B-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-28%5D%22) · [MOB-B-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-29%5D%22)

#### `B-14` — Personnalisation — ancienneté
_Module : Onboarding et authentification_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-14_personnalisation-anciennete__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-14_personnalisation-anciennete__phone_light.webp?raw=true' width='230' alt='B-14 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-14_personnalisation-anciennete__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-14_personnalisation-anciennete__phone_dark.webp?raw=true' width='230' alt='B-14 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-14_personnalisation-anciennete__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-14_personnalisation-anciennete__tablet_light.webp?raw=true' width='330' alt='B-14 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-14_personnalisation-anciennete__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-14_personnalisation-anciennete__tablet_dark.webp?raw=true' width='330' alt='B-14 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon » · « culé, au quotidien. » · « Assistant IA, jeux quotidiens, histoire du club et communauté de supporters, au même endroit. » · « Application communautaire non officielle · fan-made » · « 3/3 » · « Depuis quand es-tu culé ? » · « Pour adapter le niveau de départ des quiz. » · « Je découvre le Barça » · « Niveau Supporter occasionnel » · « Depuis quelques années » · « Niveau Culé » · « Socio dans l’âme » · « Niveau Socio » · « Historien du club » · « Niveau Historien du Barça » · « Terminer »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [MOB-B-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-01%5D%22) · [MOB-B-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-19%5D%22) · [MOB-B-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-28%5D%22) · [MOB-B-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-29%5D%22)

#### `B-10` — E-mail vérifié
_Module : Onboarding et authentification_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-10_e-mail-verifie__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-10_e-mail-verifie__phone_light.webp?raw=true' width='230' alt='B-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-10_e-mail-verifie__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-10_e-mail-verifie__phone_dark.webp?raw=true' width='230' alt='B-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-10_e-mail-verifie__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-10_e-mail-verifie__tablet_light.webp?raw=true' width='330' alt='B-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-10_e-mail-verifie__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-10_e-mail-verifie__tablet_dark.webp?raw=true' width='330' alt='B-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon » · « culé, au quotidien. » · « Assistant IA, jeux quotidiens, histoire du club et communauté de supporters, au même endroit. » · « Application communautaire non officielle · fan-made » · « Adresse confirmée ! » · « Ton compte est prêt. Encore deux petites questions pour personnaliser ton expérience. » · « Personnaliser mon profil » · « Plus tard »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-AUTH-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-04%5D%22) · [API-AUTH-43](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-43%5D%22) · [MOB-B-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-01%5D%22) · [MOB-B-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-15%5D%22) · [MOB-B-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-28%5D%22) · [MOB-B-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-29%5D%22)

#### `B-15` — Rappels de match — pré-permission
_Module : Onboarding et authentification_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-15_rappels-de-match-pre-permission__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-15_rappels-de-match-pre-permission__phone_light.webp?raw=true' width='230' alt='B-15 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-15_rappels-de-match-pre-permission__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-15_rappels-de-match-pre-permission__phone_dark.webp?raw=true' width='230' alt='B-15 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-15_rappels-de-match-pre-permission__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-15_rappels-de-match-pre-permission__tablet_light.webp?raw=true' width='330' alt='B-15 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-15_rappels-de-match-pre-permission__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-15_rappels-de-match-pre-permission__tablet_dark.webp?raw=true' width='330' alt='B-15 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon » · « culé, au quotidien. » · « Assistant IA, jeux quotidiens, histoire du club et communauté de supporters, au même endroit. » · « Application communautaire non officielle · fan-made » · « Ne rate plus un match » · « Reçois un rappel avant le coup d’envoi, le résultat final et l’alerte quand ta série est en danger. Tu choisis tout dans les réglages. » · « Activer les notifications » · « Plus tard »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [MOB-B-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-01%5D%22) · [MOB-B-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-13%5D%22) · [MOB-B-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-20%5D%22) · [MOB-B-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-28%5D%22) · [MOB-B-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-29%5D%22)

## 📐 Règles de gestion

- `GET /reference/countries?q=cam&locale=fr` : liste ISO 3166-1 localisée (≈ 249), recherche insensible aux accents/casse, tri alphabétique localisé, cache 24 h ; `{code:'CM',name:'Cameroun'}`.
- Ville : texte libre 2-80 caractères nettoyé (`sanitize`), jamais de coordonnées ; seule la ville est exposée (jamais de position exacte, RG-MAP).
- `favoritePlayerId` doit référencer un `Player` publié ; `null` accepté (« Je n'ai pas de favori ») ; liste proposée via `GET /players?featured=true`.
- `supporterLevel ∈ {casual, cule, socio, historian}` (B-14 : « Supporter occasionnel », « Culé », « Socio », « Historien du Barça ») mappé en difficulté de départ des quiz ; `supporterSince` (année) reste optionnel.
- `onboarding:{completedSteps:[...], completedAt}` mis à jour via `PATCH /users/me/onboarding` ; « Plus tard » / « Passer » n'enregistrent rien mais marquent l'étape `skipped` ; `notificationsPrompted` (B-15) pour ne plus re-proposer.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/reference/countries` | Pays localisés | ?q=cam&locale=fr | {items:[{code:'CM',name:'Cameroun'}]} |
| `PATCH` | `/api/v1/users/me/onboarding` | Enregistre une étape | {step:'favorite-player',favoritePlayerId} | {onboarding} |

## 🗄️ Données

- users.supporterLevel, users.onboarding

## 🛠️ Tâches

- [ ] Ajouter `supporterLevel`, `onboarding` au User ; mettre à jour `updateMeSchema`.
- [ ] Créer `src/services/reference.service.ts` (+ données ISO pays `data/countries.{fr,en,es}.json`).
- [ ] Route publique `GET /reference/countries` (limiteur 60/min/IP).
- [ ] Route `PATCH /users/me/onboarding` ; validation du `Player`.
- [ ] Normalisation (NFD) pour la recherche.
- [ ] Tests + Swagger.

## ✔️ Critères d'acceptation

- [ ] Étant donné `q=cam` en `fr`, alors la liste commence par Cambodge, Cameroun, Canada, Cap-Vert.
- [ ] Étant donné `favoritePlayerId` inconnu, alors 422.
- [ ] Étant donné `supporterLevel='socio'`, alors le niveau de départ des quiz renvoyé est « Socio ».
- [ ] Étant donné `city` avec balises HTML, alors elles sont retirées.
- [ ] Étant donné une étape passée, alors `completedSteps` contient `{step, skipped:true}`.

## 🧪 Tests à écrire

- [ ] Intégration : recherche pays ×3 langues.
- [ ] Intégration : joueur inexistant.
- [ ] Unit : normalisation accents.
- [ ] Unit : mapping niveau→difficulté.
- [ ] Sécurité : XSS dans ville.

## 🔗 Dépendances

À réaliser après : `API-AUTH-28` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §2.8, §2.11
- CDC Backend §4.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
