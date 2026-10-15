> **API-AUTH-05** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Les écrans B-06/B-07 montrent « Pseudo — 3 caractères minimum », « Adresse e-mail invalide », « Force : moyenne · ajoute un chiffre et un symbole » et B-08 la charte (« J'accepte la charte… et les conditions d'utilisation », « J'ai lu la politique de confidentialité »). L'API valide déjà `displayName` 3-20 et un mot de passe 8+ avec maj/min/chiffre ; il manque l'unicité du pseudo, des codes d'erreur de champ stables et le traitement de l'énumération d'e-mails.

## ✅ Objectif

Rendre le contrat d'erreur de l'inscription exploitable champ par champ par le mobile et sécuriser l'unicité.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `B-06` — Inscription
_Module : Onboarding et authentification_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-06_inscription__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-06_inscription__phone_light.webp?raw=true' width='230' alt='B-06 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-06_inscription__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-06_inscription__phone_dark.webp?raw=true' width='230' alt='B-06 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-06_inscription__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-06_inscription__tablet_light.webp?raw=true' width='330' alt='B-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-06_inscription__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-06_inscription__tablet_dark.webp?raw=true' width='330' alt='B-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon » · « culé, au quotidien. » · « Assistant IA, jeux quotidiens, histoire du club et communauté de supporters, au même endroit. » · « Application communautaire non officielle · fan-made » · « 1/4 » · « Crée ton compte » · « Quelques secondes suffisent. » · « Pseudo » · « Boris_Culé » · « E-mail » · « prenom@exemple.com » · « Mot de passe » · « 8 caractères minimum » · « Continuer » · « ou » · « Apple » · « Google » · « Déjà inscrit ? » · « Se connecter »

**Composants repérés** : `btn`, `input`

</details>

**Issues liées sur ce même écran :** [API-AUTH-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-04%5D%22) · [API-AUTH-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-06%5D%22) · [API-AUTH-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-10%5D%22) · [API-AUTH-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-11%5D%22) · [API-AUTH-43](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-43%5D%22) · [MOB-B-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-01%5D%22) · [MOB-B-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-06%5D%22) · [MOB-B-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-09%5D%22) · [MOB-B-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-10%5D%22) · [MOB-B-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-23%5D%22) · [MOB-B-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-27%5D%22) · [MOB-B-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-28%5D%22) · [MOB-B-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-29%5D%22)

#### `B-07` — Inscription — erreurs de validation
_Module : Onboarding et authentification_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-07_inscription-erreurs-de-validation__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-07_inscription-erreurs-de-validation__phone_light.webp?raw=true' width='230' alt='B-07 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-07_inscription-erreurs-de-validation__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-07_inscription-erreurs-de-validation__phone_dark.webp?raw=true' width='230' alt='B-07 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-07_inscription-erreurs-de-validation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-07_inscription-erreurs-de-validation__tablet_light.webp?raw=true' width='330' alt='B-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-07_inscription-erreurs-de-validation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-07_inscription-erreurs-de-validation__tablet_dark.webp?raw=true' width='330' alt='B-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon » · « culé, au quotidien. » · « Assistant IA, jeux quotidiens, histoire du club et communauté de supporters, au même endroit. » · « Application communautaire non officielle · fan-made » · « 1/4 » · « Crée ton compte » · « Quelques secondes suffisent. » · « Pseudo » · « bo » · « 3 caractères minimum » · « E-mail » · « boris@exemple » · « Adresse e-mail invalide » · « Mot de passe » · « •••••• » · « Force : » · « moyenne » · « · ajoute un chiffre et un symbole » · « Continuer »

**Composants repérés** : `btn`, `input`

</details>

**Issues liées sur ce même écran :** [API-AUTH-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-06%5D%22) · [API-AUTH-44](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-44%5D%22) · [MOB-B-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-10%5D%22) · [MOB-B-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-11%5D%22) · [MOB-B-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-28%5D%22) · [MOB-B-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-29%5D%22)

#### `B-08` — Charte de la communauté
_Module : Onboarding et authentification_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-08_charte-de-la-communaute__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-08_charte-de-la-communaute__phone_light.webp?raw=true' width='230' alt='B-08 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-08_charte-de-la-communaute__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-08_charte-de-la-communaute__phone_dark.webp?raw=true' width='230' alt='B-08 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-08_charte-de-la-communaute__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-08_charte-de-la-communaute__tablet_light.webp?raw=true' width='330' alt='B-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-08_charte-de-la-communaute__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-08_charte-de-la-communaute__tablet_dark.webp?raw=true' width='330' alt='B-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon » · « culé, au quotidien. » · « Assistant IA, jeux quotidiens, histoire du club et communauté de supporters, au même endroit. » · « Application communautaire non officielle · fan-made » · « 2/4 » · « La charte des culés » · « Une communauté saine, c’est l’affaire de tous. » · « Respect avant tout » · « Aucun propos haineux, discriminatoire ou menaçant. » · « Pas de rivalité toxique » · « On chambre, on ne harcèle pas. » · « Signale, ne réponds pas » · « Un doute ? Utilise le bouton « Signaler ». » · « Ta position reste privée » · « Jamais de position exacte partagée. » · « J’accepte la » · « charte de la communauté » · « et les » · « conditions d’utilisation » · « J’ai lu la » · « politique de confidentialité » · « Accepter et continuer »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-AUTH-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-21%5D%22) · [API-AUTH-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-22%5D%22) · [MOB-B-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-01%5D%22) · [MOB-B-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-12%5D%22) · [MOB-B-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-13%5D%22) · [MOB-B-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-28%5D%22) · [MOB-B-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-29%5D%22)

#### `B-05` — Bienvenue — créer ou se connecter
_Module : Onboarding et authentification_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-05_bienvenue-creer-ou-se-connecter__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-05_bienvenue-creer-ou-se-connecter__phone_light.webp?raw=true' width='230' alt='B-05 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-05_bienvenue-creer-ou-se-connecter__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-05_bienvenue-creer-ou-se-connecter__phone_dark.webp?raw=true' width='230' alt='B-05 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-05_bienvenue-creer-ou-se-connecter__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-05_bienvenue-creer-ou-se-connecter__tablet_light.webp?raw=true' width='330' alt='B-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-05_bienvenue-creer-ou-se-connecter__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-05_bienvenue-creer-ou-se-connecter__tablet_dark.webp?raw=true' width='330' alt='B-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon » · « culé, au quotidien. » · « Assistant IA, jeux quotidiens, histoire du club et communauté de supporters, au même endroit. » · « Application communautaire non officielle · fan-made » · « Bienvenue, » · « culé ! » · « Rejoins la communauté de supporters du Barça. » · « Créer un compte » · « J’ai déjà un compte » · « ou continuer avec » · « Apple » · « Google »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-AUTH-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-10%5D%22) · [API-AUTH-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-11%5D%22) · [API-AUTH-43](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-43%5D%22) · [MOB-B-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-01%5D%22) · [MOB-B-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-05%5D%22) · [MOB-B-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-08%5D%22) · [MOB-B-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-23%5D%22) · [MOB-B-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-28%5D%22) · [MOB-B-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-29%5D%22)

## 📐 Règles de gestion

- `details` des erreurs 422 = tableau `{field, code, message}` avec codes stables : `EMAIL_INVALID`, `PASSWORD_TOO_SHORT`, `PASSWORD_NEEDS_UPPERCASE|LOWERCASE|DIGIT|SYMBOL`, `DISPLAYNAME_TOO_SHORT|TOO_LONG|INVALID_CHARS`, `DISPLAYNAME_TAKEN`.
- Pseudo : 3-20 caractères, regex `^[\p{L}\p{N}_.-]+$` (exemple « Boris_Culé »), unicité insensible à la casse et aux accents (index unique `displayNameKey` normalisé NFD) ; liste de pseudos réservés (admin, support, univers_barca…).
- E-mail : normalisé en minuscules, trim, max 254 ; domaines jetables refusés via liste configurable (`DISPOSABLE_EMAIL_DOMAINS`).
- Anti-énumération : un e-mail déjà inscrit renvoie 409 `EMAIL_TAKEN` (comportement existant, requis par B-07) mais limité à 10 essais / 15 min / IP ; option `REGISTER_NEUTRAL_RESPONSE=true` renvoie 202 générique + e-mail « tu as déjà un compte ».
- Consentements `terms` et `privacy` obligatoires (déjà en place) et enregistrés avec la version courante des documents (issue consent-versions) ; `notifications`, `geolocation`, `analytics` optionnels et séparés.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/auth/register` | Création de compte | {email,password,displayName,locale,consents:{terms,privacy,notifications?,geolocation?,analytics?}} | 201 {user,accessToken,refreshToken} |
| `GET` | `/api/v1/auth/availability` | Disponibilité du pseudo | ?displayName=Boris_Culé | {available:false} |

## 🛠️ Tâches

- [ ] Créer `src/validators/auth.validator.ts` : messages Joi avec `context.key`, helper `toFieldErrors()` dans `middleware/validate.ts`.
- [ ] Ajouter `displayNameKey` (unique, sparse) dans `user.model.ts` + migration de backfill `scripts/migrations/001-displayname-key.ts`.
- [ ] Ajouter `src/utils/reservedNames.ts` et `disposableDomains.ts`.
- [ ] Adapter `auth.service.register` : vérification pseudo/e-mail en parallèle, gestion de l'erreur Mongo E11000 → 409 propre.
- [ ] Endpoint léger `GET /auth/availability?displayName=` (limité 30/15 min/IP) pour la validation à la volée côté mobile.
- [ ] Mettre à jour la doc Swagger (schéma `FieldError`).

## ✔️ Critères d'acceptation

- [ ] Étant donné un pseudo « ab », quand on s'inscrit, alors 422 avec `DISPLAYNAME_TOO_SHORT`.
- [ ] Étant donné « Boris_Culé » déjà pris en « boris_cule », alors 422 `DISPLAYNAME_TAKEN`.
- [ ] Étant donné « boris@exemple » (sans TLD), alors 422 `EMAIL_INVALID` (B-07).
- [ ] Étant donné un mot de passe sans chiffre, alors `PASSWORD_NEEDS_DIGIT` figure dans `details`.
- [ ] Étant donné une inscription valide sans `terms=true`, alors 422.

## 🧪 Tests à écrire

- [ ] Intégration : matrice de validations (10 cas).
- [ ] Unit : normalisation NFD du pseudo.
- [ ] Intégration : course double inscription même e-mail → un seul compte.
- [ ] Unit : domaine jetable refusé.
- [ ] Intégration : pseudo réservé refusé.

## ♿ Accessibilité et i18n

- Messages localisés par code (clé = code d'erreur) côté API via l'issue i18n-error-messages

## 🔗 Dépendances

À réaliser après : `API-AUTH-04` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §2.13
- CDC Global §10.3
- CDC Backend §5.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
