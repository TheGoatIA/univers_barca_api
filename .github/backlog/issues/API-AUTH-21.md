> **API-AUTH-21** · RGPD · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Q-05 liste Géolocalisation approximative, Notifications push, Statistiques d'usage anonymes, Visibilité sur la carte et « Historique de mes consentements — 3 enregistrements ». L'API n'a que `POST /auth/consents` (création de ligne) : pas de lecture ni de route `PATCH /users/me/consents` prévue au CDC.

## ✅ Objectif

Exposer l'état courant (dernier enregistrement par type) et l'historique complet append-only.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `Q-05` — Confidentialité et consentements
_Module : Paramètres et compte_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-05_confidentialite-et-consentements__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-05_confidentialite-et-consentements__phone_light.webp?raw=true' width='230' alt='Q-05 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-05_confidentialite-et-consentements__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-05_confidentialite-et-consentements__phone_dark.webp?raw=true' width='230' alt='Q-05 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-05_confidentialite-et-consentements__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-05_confidentialite-et-consentements__tablet_light.webp?raw=true' width='330' alt='Q-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-05_confidentialite-et-consentements__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-05_confidentialite-et-consentements__tablet_dark.webp?raw=true' width='330' alt='Q-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Confidentialité » · « Tu contrôles tes données. Chaque consentement est distinct et révocable à tout moment. » · « Géolocalisation approximative » · « Pour te proposer des groupes locaux. Jamais ta position exacte. » · « Notifications push » · « Rappels de match, série, communauté. » · « Statistiques d’usage anonymes » · « Nous aident à améliorer l’application. » · « Visibilité sur la carte » · « Ville uniquement » · « Politique de confidentialité » · « Historique de mes consentements » · « 3 enregistrements »

**Composants repérés** : `toggle`

</details>

**Issues liées sur ce même écran :** [API-AUTH-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-22%5D%22) · [API-AUTH-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-23%5D%22) · [API-AUTH-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-30%5D%22)

#### `Q-06` — Révoquer la géolocalisation
_Module : Paramètres et compte_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-06_revoquer-la-geolocalisation__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-06_revoquer-la-geolocalisation__phone_light.webp?raw=true' width='230' alt='Q-06 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-06_revoquer-la-geolocalisation__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-06_revoquer-la-geolocalisation__phone_dark.webp?raw=true' width='230' alt='Q-06 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-06_revoquer-la-geolocalisation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-06_revoquer-la-geolocalisation__tablet_light.webp?raw=true' width='330' alt='Q-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-06_revoquer-la-geolocalisation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-06_revoquer-la-geolocalisation__tablet_dark.webp?raw=true' width='330' alt='Q-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Confidentialité » · « Géolocalisation approximative » · « Désactiver la localisation ? » · « Tu n'apparaîtras plus dans les compteurs de la carte. Tu pourras toujours indiquer ton pays et ta ville manuellement. » · « Désactiver » · « Annuler »

**Composants repérés** : `btn`, `modal`, `toggle`

</details>

**Issues liées sur ce même écran :** [API-AUTH-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-23%5D%22)

#### `B-08` — Charte de la communauté
_Module : Onboarding et authentification_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-08_charte-de-la-communaute__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-08_charte-de-la-communaute__phone_light.webp?raw=true' width='230' alt='B-08 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-08_charte-de-la-communaute__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-08_charte-de-la-communaute__phone_dark.webp?raw=true' width='230' alt='B-08 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-08_charte-de-la-communaute__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-08_charte-de-la-communaute__tablet_light.webp?raw=true' width='330' alt='B-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-08_charte-de-la-communaute__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/B/B-08_charte-de-la-communaute__tablet_dark.webp?raw=true' width='330' alt='B-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Univers » · « Barça » · « Ton compagnon » · « culé, au quotidien. » · « Assistant IA, jeux quotidiens, histoire du club et communauté de supporters, au même endroit. » · « Application communautaire non officielle · fan-made » · « 2/4 » · « La charte des culés » · « Une communauté saine, c’est l’affaire de tous. » · « Respect avant tout » · « Aucun propos haineux, discriminatoire ou menaçant. » · « Pas de rivalité toxique » · « On chambre, on ne harcèle pas. » · « Signale, ne réponds pas » · « Un doute ? Utilise le bouton « Signaler ». » · « Ta position reste privée » · « Jamais de position exacte partagée. » · « J’accepte la » · « charte de la communauté » · « et les » · « conditions d’utilisation » · « J’ai lu la » · « politique de confidentialité » · « Accepter et continuer »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-AUTH-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-05%5D%22) · [API-AUTH-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-22%5D%22) · [MOB-B-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-01%5D%22) · [MOB-B-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-12%5D%22) · [MOB-B-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-13%5D%22) · [MOB-B-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-28%5D%22) · [MOB-B-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-B-29%5D%22)

## 📐 Règles de gestion

- `GET /users/me/consents` → `{current:{terms:{granted,version,at},privacy,geolocation,notifications,analytics}, history:[…]}` ; `history` paginé, tri `createdAt` décroissant, `total` alimente « 3 enregistrements ».
- `PATCH /users/me/consents` `{geolocation?:bool, notifications?:bool, analytics?:bool}` crée une ligne par type modifié (jamais d'update), uniquement si la valeur change (idempotent) ; `terms`/`privacy` non modifiables par cette route (re-acceptation dédiée).
- Chaque ligne conserve `version`, `source` (`signup|settings|reaccept|system`), `ip` anonymisée (/24), `userAgent` tronqué 120, `grantedAt`/`revokedAt`.
- `POST /auth/consents` est conservé mais déprécié (header `Deprecation: true`) et délègue au même service.
- Lecture seule d'un historique : jamais modifiable ni supprimable par l'utilisateur (preuve de consentement conservée 5 ans après suppression du compte sous forme dissociée).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/users/me/consents` | État courant + historique | ?page=&limit= | {current,history:{items,total}} |
| `PATCH` | `/api/v1/users/me/consents` | Modifie des consentements optionnels | {geolocation:false} | {current} |

## 🗄️ Données

- consentrecords.source, ipPrefix, userAgent

## 🛠️ Tâches

- [ ] Ajouter `source`, `ipPrefix`, `userAgent` à `consent-record.model.ts` + index `{userId:1,createdAt:-1}`.
- [ ] Créer `src/services/consent.service.ts` (`getCurrent`, `getHistory`, `updateConsents`).
- [ ] Routes `GET/PATCH /users/me/consents` + validateurs ; marquer `/auth/consents` déprécié.
- [ ] Agrégation Mongo « dernier par type » (`$sort` + `$group`).
- [ ] Brancher `register` sur le service (`source='signup'`).
- [ ] Swagger + tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné trois changements successifs, quand `GET /users/me/consents`, alors `history.total=3` et `current` reflète le dernier état par type.
- [ ] Étant donné `PATCH {geolocation:true}` alors que c'est déjà vrai, alors aucune nouvelle ligne.
- [ ] Étant donné `PATCH {terms:false}`, alors 422.
- [ ] Étant donné une tentative de modification d'une ligne d'historique, alors aucune route ne l'autorise (405/404).

## 🧪 Tests à écrire

- [ ] Intégration : lecture courant/historique.
- [ ] Intégration : idempotence PATCH.
- [ ] Unit : agrégation dernier par type.
- [ ] Sécurité : isolation inter-utilisateurs.
- [ ] Unit : anonymisation IP /24.

## 📚 Références

- CDC Backend §3.1, §4.1
- CDC Global §10.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
