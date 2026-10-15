> **API-NOTIF-25** · Fonctionnel · Priorité **P1** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

CDC Admin §4.11 : programmation = envoi immédiat ou différé à une date/heure choisie. WI-07 présente cette option dans la composition.

## ✅ Objectif

Planifier, modifier et annuler une campagne.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-07` — Notification manuelle — composition
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__desktop_light.webp?raw=true' width='330' alt='WI-07 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__desktop_dark.webp?raw=true' width='330' alt='WI-07 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__tablet_light.webp?raw=true' width='330' alt='WI-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__tablet_dark.webp?raw=true' width='330' alt='WI-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Notifications manuelles » · « Notification manuelle » · « Communication exceptionnelle : maintenance, annonce de fonctionnalité » · « Brouillon » · « Envoyer » · « Audience » · « Tous » · « Segment » · « Pays » · « Cameroun » · « Groupe communautaire »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WI-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-01%5D%22) · [ADM-WI-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-14%5D%22) · [ADM-WI-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-15%5D%22) · [ADM-WI-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-16%5D%22) · [ADM-WI-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-21%5D%22) · [API-NOTIF-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-01%5D%22) · [API-NOTIF-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-22%5D%22) · [API-NOTIF-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-23%5D%22) · [API-NOTIF-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-24%5D%22) · [API-NOTIF-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-26%5D%22) · [API-NOTIF-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-27%5D%22) · [API-NOTIF-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-29%5D%22) · [API-NOTIF-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-31%5D%22) · [API-PLAT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-19%5D%22)

## 📐 Règles de gestion

- `scheduledAt` (ISO UTC) ≥ now + 5 minutes et ≤ now + 90 jours ; interprété comme instant absolu ; l'API renvoie aussi `scheduledAtLocal` dans le fuseau de l'admin.
- Les mêmes confirmations qu'un envoi immédiat sont exigées à la PLANIFICATION (double confirmation pour all) ; au moment de l'envoi, un contrôle revalide : campagne non annulée, admin toujours actif.
- Job BullMQ délayé `campaign-send` (jobId `campaign:{id}`) ; modification de l'heure = remplacement du job ; annulation = suppression du job et status 'cancelled'.
- Au redémarrage de Redis (perte de jobs), un cron toutes les 5 min réconcilie les campagnes `scheduled` dont l'heure est dépassée (< 1 h : envoyer, sinon marquer failed `MISSED_WINDOW`).
- Liste des campagnes planifiées triée par scheduledAt.

## 🔄 Comportement et états

- Modification < 5 min avant l'envoi : 409.
- Fuseau de l'admin non défini : UTC.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `PUT` | `/api/v1/admin/notifications/campaigns/:id/schedule` | Planifie l'envoi | {scheduledAt:'2026-10-20T21:00:00Z',confirm:{...}} | {success:true,data:{id,status:'scheduled',scheduledAt}} |

## 🛠️ Tâches

- [ ] Champ scheduledAt dans campaignSchema.
- [ ] Service schedule()/reschedule()/cancel().
- [ ] Job délayé + remplacement par jobId.
- [ ] Cron de réconciliation '*/5 * * * *'.
- [ ] Validation des bornes.
- [ ] Routes PUT /admin/notifications/campaigns/:id/schedule et POST …/cancel.
- [ ] Tests avec horloge simulée.
- [ ] Swagger.

## ✔️ Critères d'acceptation

- [ ] Étant donné scheduledAt dans 2 minutes, alors 422.
- [ ] Étant donné une campagne planifiée, quand l'heure arrive, alors l'envoi est lancé automatiquement.
- [ ] Étant donné une annulation, alors le job est supprimé.
- [ ] Étant donné une perte de job Redis, alors le cron réconcilie.
- [ ] Étant donné une replanification, alors un seul job existe.

## 🧪 Tests à écrire

- [ ] unit: bornes scheduledAt
- [ ] integration: envoi à l'heure
- [ ] integration: annulation
- [ ] integration: réconciliation
- [ ] integration: replanification

## 🔗 Dépendances

À réaliser après : `API-NOTIF-24` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.11

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
