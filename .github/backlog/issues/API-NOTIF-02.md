> **API-NOTIF-02** · API · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Après autorisation de l'OS (O-07 gère le cas « Notifications désactivées »), l'app mobile envoie son jeton FCM. L'API doit l'associer à l'utilisateur et à l'appareil, sans doublon, y compris quand le même jeton change de compte sur un appareil partagé.

## ✅ Objectif

Implémenter RegisterDeviceToken (CDC Backend §3.10).

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `O-01` — Centre de préférences
_Module : Notifications_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-01_centre-de-preferences__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-01_centre-de-preferences__phone_light.webp?raw=true' width='230' alt='O-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-01_centre-de-preferences__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-01_centre-de-preferences__phone_dark.webp?raw=true' width='230' alt='O-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-01_centre-de-preferences__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-01_centre-de-preferences__tablet_light.webp?raw=true' width='330' alt='O-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-01_centre-de-preferences__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-01_centre-de-preferences__tablet_dark.webp?raw=true' width='330' alt='O-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Préférences » · « Choisis ce que tu veux recevoir. Tu peux tout modifier à tout moment. » · « Matchs » · « Rappel, mi-temps, résultat final » · « Série en danger » · « Rappel avant minuit » · « Anniversaires & histoire » · « Joueurs, dates marquantes » · « Activité des groupes rejoints » · « Fermeture des compositions » · « Nouveautés » · « Annonces de l’équipe » · « Heures calmes » · « 23:00 – 07:00 »

**Composants repérés** : `card`, `toggle`

</details>

**Issues liées sur ce même écran :** [API-NOTIF-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-01%5D%22) · [API-NOTIF-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-04%5D%22) · [API-NOTIF-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-05%5D%22) · [API-NOTIF-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-06%5D%22) · [API-NOTIF-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-16%5D%22) · [API-NOTIF-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-18%5D%22) · [API-NOTIF-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-29%5D%22) · [API-NOTIF-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-31%5D%22)

#### `O-07` — Notifications désactivées
_Module : Notifications_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-07_notifications-desactivees__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-07_notifications-desactivees__phone_light.webp?raw=true' width='230' alt='O-07 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-07_notifications-desactivees__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-07_notifications-desactivees__phone_dark.webp?raw=true' width='230' alt='O-07 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-07_notifications-desactivees__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-07_notifications-desactivees__tablet_light.webp?raw=true' width='330' alt='O-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-07_notifications-desactivees__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-07_notifications-desactivees__tablet_dark.webp?raw=true' width='330' alt='O-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Préférences » · « Notifications désactivées » · « Tu ne recevras ni rappels de match ni alertes de série. L'application reste pleinement utilisable. » · « Activer dans les réglages » · « Matchs » · « Rappel, mi-temps, résultat final » · « Série en danger » · « Rappel avant minuit »

**Composants repérés** : `btn`, `card`, `toggle`

</details>

**Issues liées sur ce même écran :** [API-NOTIF-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-03%5D%22) · [API-NOTIF-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-04%5D%22) · [API-NOTIF-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-06%5D%22) · [API-NOTIF-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-11%5D%22) · [API-NOTIF-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-29%5D%22)

## 📐 Règles de gestion

- Corps : { token (≤ 4096 caractères), platform ('ios'|'android'), deviceId, appVersion, locale, timezone }, authentification obligatoire.
- Upsert idempotent sur token : si le token existe pour un autre utilisateur, il est réaffecté (l'ancien propriétaire perd ce token) ; réponse 200 si mise à jour, 201 si création.
- Maximum 10 jetons actifs par utilisateur ; au 11e, le plus ancien (lastSeenAt) est supprimé.
- Enregistrement refusé (403 `NOTIFICATIONS_CONSENT_REQUIRED`) si le dernier ConsentRecord `notifications` n'est pas `granted:true`.
- Rate limit : 20 requêtes/heure/utilisateur ; le jeton n'est jamais journalisé en clair (seuls les 6 derniers caractères).

## 🔄 Comportement et états

- Jeton déjà connu du même utilisateur : lastSeenAt rafraîchi.
- Plateforme inconnue : 422.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/notifications/devices` | Enregistre ou rafraîchit un jeton FCM | {token,platform:'android',deviceId,appVersion:'1.0.0',locale:'fr',timezone:'Africa/Douala'} | {success:true,data:{id,platform,registeredAt}} |

## 🛠️ Tâches

- [ ] Validator deviceRegisterSchema (Joi) dans src/validators/notification.validator.ts.
- [ ] Service src/services/device-token.service.ts : register().
- [ ] Contrôleur src/controllers/notification.controller.ts : registerDevice.
- [ ] Route POST /notifications/devices (protect, userOnly, deviceLimiter).
- [ ] Vérification du consentement via ConsentRecord.findOne().sort({createdAt:-1}).
- [ ] Plafond de 10 jetons.
- [ ] Redaction du token dans logger.
- [ ] Swagger.

## ✔️ Critères d'acceptation

- [ ] Étant donné un nouveau jeton valide et un consentement accordé, quand j'enregistre, alors 201 et un DeviceToken est créé.
- [ ] Étant donné le même jeton envoyé deux fois, alors 200 et un seul document.
- [ ] Étant donné un jeton déjà lié à un autre compte, alors il est réaffecté au compte courant.
- [ ] Étant donné l'absence de consentement, alors 403 NOTIFICATIONS_CONSENT_REQUIRED.
- [ ] Étant donné un 11e appareil, alors le plus ancien est supprimé.

## 🧪 Tests à écrire

- [ ] integration: création 201
- [ ] integration: idempotence 200
- [ ] integration: réaffectation de compte
- [ ] integration: 403 sans consentement
- [ ] integration: plafond 10
- [ ] unit: redaction du token

## 🔗 Dépendances

À réaliser après : `API-NOTIF-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.10, §11.4, §7
- CDC Backend §4.1 (device_tokens)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
