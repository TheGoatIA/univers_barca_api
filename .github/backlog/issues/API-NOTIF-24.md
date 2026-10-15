> **API-NOTIF-24** · Sécurité · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

WI-08 : « Envoyer à TOUS les utilisateurs ? Cette action est irréversible et réservée au super-admin. 12 480 appareils recevront la notification. Pour confirmer, saisis 12480 — Je confirme avoir relu le contenu dans les 3 langues ». CDC Admin §4.11 impose double confirmation et rôle super-admin.

## ✅ Objectif

Implémenter côté serveur le garde-fou, la confirmation et le déclenchement.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-07` — Notification manuelle — composition
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__desktop_light.webp?raw=true' width='330' alt='WI-07 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__desktop_dark.webp?raw=true' width='330' alt='WI-07 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__tablet_light.webp?raw=true' width='330' alt='WI-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__tablet_dark.webp?raw=true' width='330' alt='WI-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Notifications manuelles » · « Notification manuelle » · « Communication exceptionnelle : maintenance, annonce de fonctionnalité » · « Brouillon » · « Envoyer » · « Audience » · « Tous » · « Segment » · « Pays » · « Cameroun » · « Groupe communautaire »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WI-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-01%5D%22) · [ADM-WI-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-14%5D%22) · [ADM-WI-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-15%5D%22) · [ADM-WI-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-16%5D%22) · [ADM-WI-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-21%5D%22) · [API-NOTIF-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-01%5D%22) · [API-NOTIF-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-22%5D%22) · [API-NOTIF-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-23%5D%22) · [API-NOTIF-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-25%5D%22) · [API-NOTIF-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-26%5D%22) · [API-NOTIF-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-27%5D%22) · [API-NOTIF-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-29%5D%22) · [API-NOTIF-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-31%5D%22)

#### `WI-08` — Notification à tous — double confirmation
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-08_notification-a-tous-double-confirmation__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-08_notification-a-tous-double-confirmation__desktop_light.webp?raw=true' width='330' alt='WI-08 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-08_notification-a-tous-double-confirmation__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-08_notification-a-tous-double-confirmation__desktop_dark.webp?raw=true' width='330' alt='WI-08 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-08_notification-a-tous-double-confirmation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-08_notification-a-tous-double-confirmation__tablet_light.webp?raw=true' width='330' alt='WI-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-08_notification-a-tous-double-confirmation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-08_notification-a-tous-double-confirmation__tablet_dark.webp?raw=true' width='330' alt='WI-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Notifications manuelles » · « Notification manuelle » · « Envoyer » · « Audience : tous les utilisateurs » · « 12 480 destinataires » · « Envoyer à TOUS les utilisateurs ? » · « Cette action est irréversible et réservée au super-admin. 12 480 appareils recevront la notification. » · « Titre : « Maintenance ce soir à 23h » · envoi immédiat. » · « Pour confirmer, saisis » · « Je confirme avoir relu le contenu dans les 3 langues »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WI-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-17%5D%22) · [ADM-WI-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-20%5D%22) · [ADM-WI-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-21%5D%22) · [API-NOTIF-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-10%5D%22) · [API-NOTIF-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-23%5D%22) · [API-NOTIF-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-27%5D%22) · [API-NOTIF-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-28%5D%22) · [API-NOTIF-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-29%5D%22) · [API-NOTIF-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-30%5D%22)

## 📐 Règles de gestion

- `POST /admin/notifications/manual` {campaignId, confirm:{recipientCount, reviewedLanguages:true}} (route du CDC §4.12) : status draft→sending, job `campaign-send`.
- Audience `all` : réservé à `super-admin` (403 `FORBIDDEN_ROLE` sinon), `confirm.recipientCount` doit égaler l'estimation courante (tolérance ±5 %, sinon 409 `AUDIENCE_CHANGED` avec le nouveau chiffre) et `reviewedLanguages:true` ; sinon 422.
- Segment : `content-manager` ou `super-admin` ; segment < 20 destinataires : super-admin seul.
- Ré-authentification : l'admin doit avoir une session 2FA valide (TOTP confirmé) ; envoi à `all` exige un code TOTP récent (< 5 min, header `X-Admin-Totp`).
- Idempotence : un clic multiple n'envoie qu'une fois (statut atomique findOneAndUpdate draft→sending, jobId `campaign:{id}`).
- Annulation possible tant que status='scheduled' ou pendant 'sending' (stoppe les lots non encore envoyés).
- Audit immuable : adminId, rôle, IP hachée, recipientCount, horodatage.

## 🔄 Comportement et états

- Double clic : seconde requête 409 `CAMPAIGN_ALREADY_SENDING`.
- Campagne déjà envoyée : 409.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/admin/notifications/manual` | Envoi d'une campagne | {campaignId,confirm:{recipientCount:12480,reviewedLanguages:true}} | 202 {success:true,data:{id,status:'sending',recipientCount}} |

## 🛠️ Tâches

- [ ] Route POST /admin/notifications/manual et POST /admin/notifications/campaigns/:id/cancel.
- [ ] Middleware requireFreshTotp (réutilise admin-auth.service).
- [ ] Service send() avec transition atomique.
- [ ] Handler campaign-send : fan-out via streamRecipients et BatchSender.
- [ ] Codes d'erreur FORBIDDEN_ROLE, AUDIENCE_CHANGED, CAMPAIGN_ALREADY_SENDING.
- [ ] Audit.
- [ ] Swagger.
- [ ] Tests RBAC et idempotence.

## ✔️ Critères d'acceptation

- [ ] Étant donné un content-manager et audience all, alors 403.
- [ ] Étant donné recipientCount saisi ≠ estimation, alors 409 AUDIENCE_CHANGED.
- [ ] Étant donné reviewedLanguages absent, alors 422.
- [ ] Étant donné un super-admin avec confirmation valide, alors 202 et un job campaign-send.
- [ ] Étant donné un double envoi, alors un seul fan-out.
- [ ] Étant donné une annulation en cours, alors les lots restants ne partent pas.

## 🧪 Tests à écrire

- [ ] integration: 403 content-manager
- [ ] integration: 409 audience changée
- [ ] integration: 422 confirmation
- [ ] integration: idempotence
- [ ] integration: annulation en cours d'envoi
- [ ] security: TOTP requis pour all

## 🔗 Dépendances

À réaliser après : `API-NOTIF-23` · `API-NOTIF-08` · `API-NOTIF-09` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.11, §4.12
- CDC Backend §5.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
