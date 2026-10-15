> **API-NOTIF-10** · Infrastructure · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

CDC §7.1 : retry avec backoff exponentiel, nombre de tentatives maximal par type, puis file de dead-letter pour investigation. queues.ts fournit attempts:5 / backoff exponentiel 2 s et alimente 'dead-letter', mais sans classification d'erreur ni outil de rejeu.

## ✅ Objectif

Distinguer erreurs transitoires et définitives et fournir un rejeu contrôlé.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-08` — Notification à tous — double confirmation
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-08_notification-a-tous-double-confirmation__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-08_notification-a-tous-double-confirmation__desktop_light.webp?raw=true' width='330' alt='WI-08 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-08_notification-a-tous-double-confirmation__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-08_notification-a-tous-double-confirmation__desktop_dark.webp?raw=true' width='330' alt='WI-08 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-08_notification-a-tous-double-confirmation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-08_notification-a-tous-double-confirmation__tablet_light.webp?raw=true' width='330' alt='WI-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-08_notification-a-tous-double-confirmation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-08_notification-a-tous-double-confirmation__tablet_dark.webp?raw=true' width='330' alt='WI-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Notifications manuelles » · « Notification manuelle » · « Envoyer » · « Audience : tous les utilisateurs » · « 12 480 destinataires » · « Envoyer à TOUS les utilisateurs ? » · « Cette action est irréversible et réservée au super-admin. 12 480 appareils recevront la notification. » · « Titre : « Maintenance ce soir à 23h » · envoi immédiat. » · « Pour confirmer, saisis » · « Je confirme avoir relu le contenu dans les 3 langues »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WI-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-17%5D%22) · [ADM-WI-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-20%5D%22) · [ADM-WI-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-21%5D%22) · [API-NOTIF-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-23%5D%22) · [API-NOTIF-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-24%5D%22) · [API-NOTIF-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-27%5D%22) · [API-NOTIF-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-28%5D%22) · [API-NOTIF-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-29%5D%22) · [API-NOTIF-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-30%5D%22)

## 📐 Règles de gestion

- Erreurs transitoires (retry) : `messaging/internal-error`, `messaging/server-unavailable`, `messaging/quota-exceeded`, HTTP 429/500/503 ; backoff exponentiel 2 s, 4 s, 8 s, 16 s, 32 s (5 tentatives) ; pour quota-exceeded, respecter l'en-tête Retry-After.
- Erreurs définitives (pas de retry) : `messaging/invalid-argument`, `messaging/registration-token-not-registered`, payload invalide → échec immédiat du jeton, job marqué réussi côté lot.
- Tentatives par type : live (goal/halftime/fulltime) 3 (valeurs périmées vite), rappels 5, campagnes 5, autres 5.
- Dead-letter : après la dernière tentative, ajout dans 'dead-letter' avec {queue, jobName, data, error, attempts, failedAt} ; conservation 14 jours.
- Script/endpoint interne de rejeu : `npm run jobs:replay -- --queue notifications --id <jobId>` (jamais exposé en HTTP public).

## 🔄 Comportement et états

- Un job live périmé (TTL FCM dépassé) n'est pas rejoué.
- Le rejeu est idempotent grâce à la déduplication.

## 🛠️ Tâches

- [ ] Créer src/services/push/error-classifier.ts.
- [ ] Adapter registerWorker (src/jobs/queues.ts) pour accepter des options par type (attempts, backoff) et UnrecoverableError de BullMQ.
- [ ] Conserver removeOnFail 5000 et ajouter un TTL de 14 jours dans dead-letter.
- [ ] Écrire scripts/jobs-replay.ts.
- [ ] Métrique jobs_dead_letter_total{queue}.
- [ ] Alerte Slack si > 10 DLQ/heure (SLACK_WEBHOOK_URL).
- [ ] Tests de classification.
- [ ] Documenter la runbook dans docs/NOTIFICATIONS.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné une erreur 503, alors le job est retenté avec backoff exponentiel.
- [ ] Étant donné registration-token-not-registered, alors aucun retry et le jeton est invalidé.
- [ ] Étant donné 5 échecs, alors une entrée apparaît dans dead-letter.
- [ ] Étant donné jobs:replay, alors le job est rejoué sans doublon d'envoi.
- [ ] Étant donné 11 DLQ en 1 h, alors une alerte est postée.

## 🧪 Tests à écrire

- [ ] unit: classification des codes FCM
- [ ] integration: backoff 2s→32s
- [ ] integration: passage en DLQ
- [ ] integration: rejeu idempotent
- [ ] unit: attempts par type

## 🔗 Dépendances

À réaliser après : `API-NOTIF-08` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §7.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
