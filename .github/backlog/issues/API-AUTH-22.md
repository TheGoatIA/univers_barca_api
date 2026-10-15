> **API-AUTH-22** · RGPD · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

B-08 exige l'acceptation de la charte, des conditions d'utilisation et la lecture de la politique de confidentialité (« J'accepte… », « J'ai lu… ») ; Q-17 les liste. `ConsentRecord.version` vaut '1.0' par défaut sans notion de version courante : impossible de redemander l'acceptation lors d'une nouvelle version.

## ✅ Objectif

Introduire un registre de versions légales et un mécanisme de re-acceptation bloquant.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `B-08` — Charte de la communauté
_Module : Onboarding et authentification_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-08_charte-de-la-communaute__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-08_charte-de-la-communaute__phone_light.webp?raw=true' width='230' alt='B-08 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-08_charte-de-la-communaute__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-08_charte-de-la-communaute__phone_dark.webp?raw=true' width='230' alt='B-08 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-08_charte-de-la-communaute__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-08_charte-de-la-communaute__tablet_light.webp?raw=true' width='330' alt='B-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-08_charte-de-la-communaute__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-08_charte-de-la-communaute__tablet_dark.webp?raw=true' width='330' alt='B-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon » · « culé, au quotidien. » · « Assistant IA, jeux quotidiens, histoire du club et communauté de supporters, au même endroit. » · « Application communautaire non officielle · fan-made » · « 2/4 » · « La charte des culés » · « Une communauté saine, c’est l’affaire de tous. » · « Respect avant tout » · « Aucun propos haineux, discriminatoire ou menaçant. » · « Pas de rivalité toxique » · « On chambre, on ne harcèle pas. » · « Signale, ne réponds pas » · « Un doute ? Utilise le bouton « Signaler ». » · « Ta position reste privée » · « Jamais de position exacte partagée. » · « J’accepte la » · « charte de la communauté » · « et les » · « conditions d’utilisation » · « J’ai lu la » · « politique de confidentialité » · « Accepter et continuer »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-AUTH-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-05%5D%22) · [API-AUTH-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-21%5D%22) · [MOB-B-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-01%5D%22) · [MOB-B-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-12%5D%22) · [MOB-B-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-13%5D%22) · [MOB-B-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-28%5D%22) · [MOB-B-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-29%5D%22)

#### `Q-17` — À propos et mentions légales
_Module : Paramètres et compte_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-17_a-propos-et-mentions-legales__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-17_a-propos-et-mentions-legales__phone_light.webp?raw=true' width='230' alt='Q-17 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-17_a-propos-et-mentions-legales__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-17_a-propos-et-mentions-legales__phone_dark.webp?raw=true' width='230' alt='Q-17 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-17_a-propos-et-mentions-legales__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-17_a-propos-et-mentions-legales__tablet_light.webp?raw=true' width='330' alt='Q-17 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-17_a-propos-et-mentions-legales__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-17_a-propos-et-mentions-legales__tablet_dark.webp?raw=true' width='330' alt='Q-17 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « À propos » · « Univers » · « Barça » · « Version 1.0.0 (build 42) · Production » · « Conditions d’utilisation » · « Politique de confidentialité » · « Charte de la communauté » · « Licences open source » · « Univers Barça est une application communautaire non officielle, sans lien avec le FC Barcelone. Aucune marque déposée du club n'est utilisée. »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [MOB-Q-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-Q-26%5D%22) · [MOB-Q-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-Q-30%5D%22) · [MOB-Q-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-Q-31%5D%22)

#### `Q-05` — Confidentialité et consentements
_Module : Paramètres et compte_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-05_confidentialite-et-consentements__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-05_confidentialite-et-consentements__phone_light.webp?raw=true' width='230' alt='Q-05 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-05_confidentialite-et-consentements__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-05_confidentialite-et-consentements__phone_dark.webp?raw=true' width='230' alt='Q-05 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-05_confidentialite-et-consentements__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-05_confidentialite-et-consentements__tablet_light.webp?raw=true' width='330' alt='Q-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-05_confidentialite-et-consentements__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-05_confidentialite-et-consentements__tablet_dark.webp?raw=true' width='330' alt='Q-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Confidentialité » · « Tu contrôles tes données. Chaque consentement est distinct et révocable à tout moment. » · « Géolocalisation approximative » · « Pour te proposer des groupes locaux. Jamais ta position exacte. » · « Notifications push » · « Rappels de match, série, communauté. » · « Statistiques d’usage anonymes » · « Nous aident à améliorer l’application. » · « Visibilité sur la carte » · « Ville uniquement » · « Politique de confidentialité » · « Historique de mes consentements » · « 3 enregistrements »

**Composants repérés** : `toggle`

</details>

**Issues liées sur ce même écran :** [API-AUTH-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-21%5D%22) · [API-AUTH-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-23%5D%22) · [API-AUTH-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-30%5D%22) · [MOB-Q-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-Q-02%5D%22) · [MOB-Q-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-Q-03%5D%22) · [MOB-Q-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-Q-05%5D%22) · [MOB-Q-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-Q-10%5D%22) · [MOB-Q-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-Q-11%5D%22) · [MOB-Q-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-Q-13%5D%22) · [MOB-Q-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-Q-29%5D%22) · [MOB-Q-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-Q-30%5D%22) · [MOB-Q-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-Q-31%5D%22)

## 📐 Règles de gestion

- Collection `LegalDocument {type:'terms'|'privacy'|'charter', version:'2026-10-01', publishedAt, url:{fr,en,es}, mandatory:boolean}` ; la version courante = la plus récente `publishedAt <= now`.
- `GET /legal/documents` public (cache 1 h) → versions et URLs localisées ; utilisé par B-08 et Q-17.
- Inscription : `consents.termsVersion` et `privacyVersion` doivent égaler la version courante (sinon 409 `LEGAL_VERSION_OUTDATED`).
- Si l'utilisateur a accepté une version antérieure d'un document `mandatory`, les routes authentifiées répondent 403 `REACCEPT_REQUIRED` avec `details:{documents:[…]}` sauf `/legal/*`, `/users/me`, `/auth/logout` ; `POST /users/me/legal/accept {type,version}` lève le blocage.
- La charte (B-08) est un consentement `charter` distinct de `terms` (ajouter au enum de ConsentRecord).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/legal/documents` | Versions courantes | — | {terms:{version,url:{fr,en,es}},privacy,charter} |
| `POST` | `/api/v1/users/me/legal/accept` | Accepte une version | {type,version} | 201 |

## 🗄️ Données

- legaldocuments (nouveau)
- consentrecords.type += charter

## 🛠️ Tâches

- [ ] Modèle `src/models/legal-document.model.ts` + seed des versions initiales.
- [ ] Ajouter `charter` à l'enum des types et `termsVersion/privacyVersion/charterVersion` au schéma d'inscription.
- [ ] Middleware `requireLatestLegal` (cache Redis 5 min) appliqué après `protect`.
- [ ] Routes `GET /legal/documents`, `POST /users/me/legal/accept`.
- [ ] Script d'admin pour publier une version (consommé plus tard par le back-office).
- [ ] Tests + Swagger.

## ✔️ Critères d'acceptation

- [ ] Étant donné une nouvelle version obligatoire publiée, quand un utilisateur ayant accepté l'ancienne appelle une route protégée, alors 403 `REACCEPT_REQUIRED`.
- [ ] Étant donné `POST /users/me/legal/accept` avec la version courante, alors le blocage est levé et une ligne de consentement est ajoutée.
- [ ] Étant donné une inscription avec une version périmée, alors 409.
- [ ] Étant donné `GET /legal/documents`, alors les URLs FR/EN/ES sont présentes.

## 🧪 Tests à écrire

- [ ] Intégration : cycle publication → blocage → acceptation.
- [ ] Unit : sélection de la version courante.
- [ ] Intégration : exceptions de routes.
- [ ] Unit : cache Redis.

## 🔗 Dépendances

À réaliser après : `API-AUTH-21` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §10.3, §10.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
