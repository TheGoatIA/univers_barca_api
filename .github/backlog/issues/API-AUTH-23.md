> **API-AUTH-23** · RGPD · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Q-06 « Désactiver la localisation ? Tu n'apparaîtras plus dans les compteurs de la carte. Tu pourras toujours indiquer ton pays et ta ville manuellement. » Le simple enregistrement d'une ligne ne suffit pas : le retrait doit avoir des effets techniques immédiats (RG-MAP-02, RG-MAP-03).

## ✅ Objectif

Appliquer les conséquences du retrait via événements internes et une purge de données dérivées.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `Q-06` — Révoquer la géolocalisation
_Module : Paramètres et compte_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-06_revoquer-la-geolocalisation__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-06_revoquer-la-geolocalisation__phone_light.webp?raw=true' width='230' alt='Q-06 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-06_revoquer-la-geolocalisation__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-06_revoquer-la-geolocalisation__phone_dark.webp?raw=true' width='230' alt='Q-06 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-06_revoquer-la-geolocalisation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-06_revoquer-la-geolocalisation__tablet_light.webp?raw=true' width='330' alt='Q-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-06_revoquer-la-geolocalisation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-06_revoquer-la-geolocalisation__tablet_dark.webp?raw=true' width='330' alt='Q-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Confidentialité » · « Géolocalisation approximative » · « Désactiver la localisation ? » · « Tu n'apparaîtras plus dans les compteurs de la carte. Tu pourras toujours indiquer ton pays et ta ville manuellement. » · « Désactiver » · « Annuler »

**Composants repérés** : `btn`, `modal`, `toggle`

</details>

**Issues liées sur ce même écran :** [API-AUTH-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-21%5D%22) · [MOB-Q-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-Q-10%5D%22) · [MOB-Q-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-Q-12%5D%22) · [MOB-Q-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-Q-30%5D%22) · [MOB-Q-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-Q-31%5D%22)

#### `Q-05` — Confidentialité et consentements
_Module : Paramètres et compte_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-05_confidentialite-et-consentements__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-05_confidentialite-et-consentements__phone_light.webp?raw=true' width='230' alt='Q-05 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-05_confidentialite-et-consentements__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-05_confidentialite-et-consentements__phone_dark.webp?raw=true' width='230' alt='Q-05 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-05_confidentialite-et-consentements__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-05_confidentialite-et-consentements__tablet_light.webp?raw=true' width='330' alt='Q-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-05_confidentialite-et-consentements__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-05_confidentialite-et-consentements__tablet_dark.webp?raw=true' width='330' alt='Q-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Confidentialité » · « Tu contrôles tes données. Chaque consentement est distinct et révocable à tout moment. » · « Géolocalisation approximative » · « Pour te proposer des groupes locaux. Jamais ta position exacte. » · « Notifications push » · « Rappels de match, série, communauté. » · « Statistiques d’usage anonymes » · « Nous aident à améliorer l’application. » · « Visibilité sur la carte » · « Ville uniquement » · « Politique de confidentialité » · « Historique de mes consentements » · « 3 enregistrements »

**Composants repérés** : `toggle`

</details>

**Issues liées sur ce même écran :** [API-AUTH-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-21%5D%22) · [API-AUTH-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-22%5D%22) · [API-AUTH-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-30%5D%22) · [MOB-Q-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-Q-02%5D%22) · [MOB-Q-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-Q-03%5D%22) · [MOB-Q-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-Q-05%5D%22) · [MOB-Q-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-Q-10%5D%22) · [MOB-Q-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-Q-11%5D%22) · [MOB-Q-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-Q-13%5D%22) · [MOB-Q-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-Q-29%5D%22) · [MOB-Q-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-Q-30%5D%22) · [MOB-Q-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-Q-31%5D%22)

## 📐 Règles de gestion

- Retrait `geolocation` : suppression de toute donnée de localisation dérivée (`geoCell`, coordonnées arrondies) du profil et des agrégats de carte dans les 5 min ; `countryCode`/`city` déclarés manuellement sont CONSERVÉS (RG-MAP-03).
- Retrait `notifications` : désactivation des `DeviceToken` (flag `enabled=false`) et arrêt de toute émission FCM ; rétablissement au ré-opt-in.
- Retrait `analytics` : drapeau `analyticsOptOut=true` renvoyé par `GET /users/me` et par l'enveloppe de config pour désactiver la collecte ; les événements existants sont conservés sous forme agrégée anonyme.
- Émission d'un événement `consent.changed` (EventEmitter + job `rgpd:apply-consent`) pour découpler ; le job est idempotent et réessayé 5 fois.
- Visibilité sur la carte (« Ville uniquement ») : préférence `mapVisibility ∈ {hidden, country, city}` modifiable via `PATCH /users/me` ; `geolocation` retiré force `mapVisibility='country'` maximum.

## 🛠️ Tâches

- [ ] Créer `src/events/consent.events.ts` et le processor `rgpd.apply-consent` dans `src/jobs/processors/rgpd.processor.ts`.
- [ ] Ajouter `mapVisibility`, `analyticsOptOut` au User.
- [ ] Brancher `consent.service.updateConsents` sur l'événement.
- [ ] Flag `enabled` sur le modèle de jetons d'appareil (platform.model).
- [ ] Tests d'intégration avec les modèles communauté/notifications existants.
- [ ] Documenter la matrice consentement → effet dans `docs/RGPD.md`.

## ✔️ Critères d'acceptation

- [ ] Étant donné un utilisateur localisé, quand il retire `geolocation`, alors ses coordonnées dérivées sont effacées et il n'est plus compté dans les agrégats après le job.
- [ ] Étant donné le retrait, alors `countryCode` et `city` manuels restent.
- [ ] Étant donné le retrait `notifications`, alors aucun push n'est émis pour cet utilisateur.
- [ ] Étant donné un ré-opt-in, alors les effets sont réversibles sans recréer de compte.

## 🧪 Tests à écrire

- [ ] Intégration : retrait géoloc → agrégat.
- [ ] Intégration : retrait notifications → tokens désactivés.
- [ ] Unit : idempotence du job.
- [ ] Intégration : ré-opt-in.
- [ ] Unit : plafond mapVisibility.

## 🔗 Dépendances

À réaliser après : `API-AUTH-21` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §2.8, RG-MAP-02, RG-MAP-03, §10.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
