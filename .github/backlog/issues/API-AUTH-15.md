> **API-AUTH-15** · API · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Q-10 liste « iPhone 15 · Yaoundé — Cet appareil · actif maintenant (Actuel) », « iPad Air · Yaoundé — Dernière activité il y a 2 j », « Pixel 8 · Paris — il y a 3 sem. » et Q-07 affiche « 3 appareils ». L'API stocke `userAgent`, `ip`, `platform`, `deviceId`, `lastUsedAt` par refresh token mais n'expose rien.

## ✅ Objectif

Exposer une vue « session = famille de refresh » avec libellé d'appareil lisible et ville approximative, sans fuite d'IP.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `Q-10` — Appareils connectés
_Module : Paramètres et compte_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-10_appareils-connectes__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-10_appareils-connectes__phone_light.webp?raw=true' width='230' alt='Q-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-10_appareils-connectes__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-10_appareils-connectes__phone_dark.webp?raw=true' width='230' alt='Q-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-10_appareils-connectes__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-10_appareils-connectes__tablet_light.webp?raw=true' width='330' alt='Q-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-10_appareils-connectes__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-10_appareils-connectes__tablet_dark.webp?raw=true' width='330' alt='Q-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Appareils » · « Tu es connecté(e) sur ces appareils. Déconnecte ceux que tu ne reconnais pas. » · « iPhone 15 · Yaoundé » · « Cet appareil · actif maintenant » · « Actuel » · « iPad Air · Yaoundé » · « Dernière activité il y a 2 j » · « Retirer » · « Pixel 8 · Paris » · « Dernière activité il y a 3 sem. » · « Se déconnecter de tous les appareils »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-AUTH-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-16%5D%22) · [API-AUTH-43](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-43%5D%22) · [API-AUTH-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-45%5D%22)

#### `Q-07` — Gérer mon compte
_Module : Paramètres et compte_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-07_gerer-mon-compte__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-07_gerer-mon-compte__phone_light.webp?raw=true' width='230' alt='Q-07 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-07_gerer-mon-compte__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-07_gerer-mon-compte__phone_dark.webp?raw=true' width='230' alt='Q-07 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-07_gerer-mon-compte__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-07_gerer-mon-compte__tablet_light.webp?raw=true' width='330' alt='Q-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-07_gerer-mon-compte__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/Q/Q-07_gerer-mon-compte__tablet_dark.webp?raw=true' width='330' alt='Q-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Mon compte » · « Adresse e-mail » · « boris@exemple.com » · « Mot de passe » · « Modifié il y a 3 mois » · « Appareils connectés » · « 3 appareils » · « Mes données » · « Exporter mes données » · « Archive au format JSON » · « Zone sensible » · « Supprimer mon compte » · « Action définitive »

</details>

**Issues liées sur ce même écran :** [API-AUTH-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-12%5D%22) · [API-AUTH-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-19%5D%22) · [API-AUTH-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-24%5D%22) · [API-AUTH-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-26%5D%22) · [API-AUTH-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-31%5D%22)

## 📐 Règles de gestion

- Une session = une `familyId` non révoquée et non expirée ; tri par `lastUsedAt` décroissant ; la session courante (claim `sid` de l'access token) porte `current:true` et est première.
- Libellé d'appareil : `deviceName` envoyé par le client (`X-Device-Name`, ex. « iPhone 15 », ≤ 60 caractères) sinon dérivé du User-Agent (ua-parser-js).
- Localisation : ville + pays résolus à partir de l'IP à la création de la session via base GeoIP locale (MaxMind GeoLite2 / `geoip-lite`), stockés (`approxCity`, `approxCountry`) ; l'IP brute n'est jamais renvoyée et est anonymisée (dernier octet à 0) après 30 jours.
- Réponse : `[{id, deviceName, platform, approxCity, approxCountry, createdAt, lastActiveAt, current}]` + `total` (alimente « 3 appareils »).
- Limite : 20 sessions actives max par utilisateur ; au-delà la plus ancienne (lastUsedAt) est révoquée à la création.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/users/me/sessions` | Liste les appareils connectés | (Bearer) | {items:[{id,deviceName:'iPhone 15',approxCity:'Yaoundé',lastActiveAt,current:true}],total:3} |

## 🛠️ Tâches

- [ ] Ajouter `deviceName`, `approxCity`, `approxCountry`, `familyCreatedAt` à `refresh-token.model.ts`.
- [ ] Créer `src/services/session.service.ts` (`listSessions(userId, currentSid)`).
- [ ] Résolution GeoIP dans `src/utils/geoip.ts` (cache LRU) ; aucune requête externe à l'exécution.
- [ ] Route `GET /users/me/sessions` dans `routes/index.ts`, contrôleur `session.controller.ts`.
- [ ] Agrégation Mongo pour dédupliquer par `familyId` (dernier token de la famille).
- [ ] Tâche cron d'anonymisation des IP > 30 j.
- [ ] Swagger + tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné 3 familles actives, quand `GET /users/me/sessions`, alors 3 éléments dont un `current:true` en premier.
- [ ] Étant donné une famille révoquée, alors elle n'apparaît pas.
- [ ] Étant donné une IP, alors la réponse ne contient aucun champ `ip`.
- [ ] Étant donné un `X-Device-Name` de 200 caractères, alors il est tronqué à 60.
- [ ] Étant donné 21 connexions, alors la plus ancienne session est révoquée.

## 🧪 Tests à écrire

- [ ] Intégration : liste + current.
- [ ] Unit : parsing UA iOS/Android/web.
- [ ] Unit : anonymisation IP.
- [ ] Intégration : limite 20.
- [ ] Sécurité : un utilisateur ne voit jamais les sessions d'un autre.

## ♿ Accessibilité et i18n

- Libellés relatifs (« il y a 2 j ») calculés côté client à partir de `lastActiveAt` ISO

## 🔗 Dépendances

À réaliser après : `API-AUTH-09` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §5.1
- CDC Global §2.13

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
