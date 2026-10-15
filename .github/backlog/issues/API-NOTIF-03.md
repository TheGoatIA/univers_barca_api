> **API-NOTIF-03** · API · Priorité **P0** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

FCM peut renouveler un jeton à tout moment (onTokenRefresh). À la déconnexion ou quand l'utilisateur coupe les notifications dans l'OS (O-07), le serveur ne doit plus tenter d'envoi vers cet appareil.

## ✅ Objectif

Gérer le cycle de vie complet du jeton.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `O-07` — Notifications désactivées
_Module : Notifications_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-07_notifications-desactivees__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-07_notifications-desactivees__phone_light.webp?raw=true' width='230' alt='O-07 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-07_notifications-desactivees__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-07_notifications-desactivees__phone_dark.webp?raw=true' width='230' alt='O-07 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-07_notifications-desactivees__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-07_notifications-desactivees__tablet_light.webp?raw=true' width='330' alt='O-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-07_notifications-desactivees__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-07_notifications-desactivees__tablet_dark.webp?raw=true' width='330' alt='O-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Préférences » · « Notifications désactivées » · « Tu ne recevras ni rappels de match ni alertes de série. L'application reste pleinement utilisable. » · « Activer dans les réglages » · « Matchs » · « Rappel, mi-temps, résultat final » · « Série en danger » · « Rappel avant minuit »

**Composants repérés** : `btn`, `card`, `toggle`

</details>

**Issues liées sur ce même écran :** [API-NOTIF-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-02%5D%22) · [API-NOTIF-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-04%5D%22) · [API-NOTIF-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-06%5D%22) · [API-NOTIF-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-11%5D%22) · [API-NOTIF-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-29%5D%22) · [MOB-O-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-06%5D%22) · [MOB-O-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-12%5D%22) · [MOB-O-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-13%5D%22) · [MOB-O-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-14%5D%22) · [MOB-O-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-24%5D%22) · [MOB-O-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-27%5D%22) · [MOB-O-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-28%5D%22)

## 📐 Règles de gestion

- `PUT /notifications/devices/current` { oldToken?, token, deviceId } : remplace atomiquement l'ancien jeton du même deviceId par le nouveau (rotation) ; ancien jeton supprimé.
- `DELETE /notifications/devices/:deviceId` : supprime le jeton de l'appareil (204 idempotent) ; appelé par le mobile au logout et quand la permission OS est retirée.
- `POST /auth/logout` et `/auth/logout-all` existants suppriment aussi les DeviceToken de la session (logout-all : tous ceux de l'utilisateur).
- `POST /notifications/devices/heartbeat` (1×/24 h max) met à jour lastSeenAt, appVersion, timezone, locale (la timezone alimente quiet hours et crons).
- Un jeton marqué invalidatedAt n'est plus utilisé pour l'envoi.

## 🔄 Comportement et états

- PUT avec ancien jeton inconnu : traité comme un enregistrement.
- DELETE d'un deviceId inconnu : 204.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `PUT` | `/api/v1/notifications/devices/current` | Rotation du jeton | {token,deviceId} | {success:true,data:{id}} |
| `DELETE` | `/api/v1/notifications/devices/:deviceId` | Suppression | — | 204 |
| `POST` | `/api/v1/notifications/devices/heartbeat` | Mise à jour de lastSeenAt/timezone | {deviceId,timezone,appVersion} | 204 |

## 🛠️ Tâches

- [ ] Routes PUT /notifications/devices/current, DELETE /notifications/devices/:deviceId, POST /notifications/devices/heartbeat.
- [ ] Service device-token.service : rotate(), remove(), heartbeat().
- [ ] Modifier src/services/auth.service.ts (logout, logoutAll) pour appeler removeForSession.
- [ ] Validators.
- [ ] Rate limit heartbeat 1/24 h via Redis.
- [ ] Swagger.
- [ ] Tests d'atomicité (findOneAndUpdate).

## ✔️ Critères d'acceptation

- [ ] Étant donné un appareil enregistré, quand je fais PUT avec un nouveau jeton, alors l'ancien jeton n'existe plus.
- [ ] Étant donné un logout, alors le DeviceToken de l'appareil est supprimé.
- [ ] Étant donné logout-all, alors tous mes jetons sont supprimés.
- [ ] Étant donné un heartbeat, alors lastSeenAt est mis à jour.
- [ ] Étant donné un DELETE répété, alors 204.

## 🧪 Tests à écrire

- [ ] integration: rotation atomique
- [ ] integration: logout supprime le jeton
- [ ] integration: logout-all
- [ ] integration: heartbeat limité
- [ ] integration: DELETE idempotent

## 🔗 Dépendances

À réaliser après : `API-NOTIF-02` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.10, §11.4, §7

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
