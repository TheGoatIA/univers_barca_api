> **API-PLAT-15** · API · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

CDC Admin §4.7.2 : un job passé en dead letter peut être relancé par un super-admin, l'action est journalisée, le job garde son identifiant et un compteur de relances manuelles est affiché.

## ✅ Objectif

Permettre la relance unitaire (et marquer comme traité) avec traçabilité complète.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WH-02` — Files d’attente BullMQ
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_light.webp?raw=true' width='330' alt='WH-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_dark.webp?raw=true' width='330' alt='WH-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_light.webp?raw=true' width='330' alt='WH-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_dark.webp?raw=true' width='330' alt='WH-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Files d’attente » · « Files d’attente BullMQ » · « Jobs persistés et idempotents · relance manuelle des échecs » · « Actualiser » · « calendar-sync » · « En attente » · « Échecs » · « Terminés » · « notifications »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-05%5D%22) · [ADM-WH-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-06%5D%22) · [ADM-WH-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-07%5D%22) · [ADM-WH-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-14%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22) · [API-PLAT-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-14%5D%22) · [API-PLAT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-21%5D%22) · [API-PLAT-48](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-48%5D%22) · [API-PLAT-53](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-53%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

## 📐 Règles de gestion

- Le jobId conserve l'identifiant d'origine ; job.data.manualRetries incrémenté ; max 5 relances manuelles puis 409 RETRY_LIMIT_REACHED.
- Seuls les jobs en état failed ou présents dans la file dead-letter sont relançables ; 409 JOB_NOT_FAILED sinon.
- Action 'mark as handled' (POST …/dismiss) : retire le job de la vue d'échec sans le rejouer, avec justification obligatoire (>= 10 caractères).
- Idempotence : deux relances simultanées ne produisent qu'une exécution (verrou Redis 30 s).
- Audit QUEUE_JOB_RETRIED { queue, jobId, attemptsMade, manualRetries }.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/admin/observability/queues/:jobId/retry` | Relance un job en échec | ?queue=notifications | {success:true,data:{jobId:'42',manualRetries:1,state:'waiting'}} |

## 🛠️ Tâches

- [ ] Implémenter retryJob(queue, jobId, actor) dans queues.service.ts (job.retry() ou réinjection depuis dead-letter avec le même jobId).
- [ ] Routes POST …/:jobId/retry et POST …/:jobId/dismiss avec paramètre ?queue=.
- [ ] Verrou SET NX EX 30 par job.
- [ ] Appeler audit() avec before/after.
- [ ] Limiter à 10 relances/min/admin (rate limit).
- [ ] Métrique ub_jobs_manual_retries_total{queue}.
- [ ] Tests d'idempotence et de concurrence.

## ✔️ Critères d'acceptation

- [ ] Étant donné un job failed, quand POST retry, alors 202 et le job repasse en waiting avec manualRetries=1.
- [ ] Étant donné un job completed, alors 409 JOB_NOT_FAILED.
- [ ] Étant donné 5 relances déjà faites, alors 409 RETRY_LIMIT_REACHED.
- [ ] Étant donné deux appels simultanés, alors une seule exécution.
- [ ] Étant donné dismiss sans justification, alors 422.

## 🧪 Tests à écrire

- [ ] Intégration : retry nominal.
- [ ] Intégration : refus d'état invalide.
- [ ] Intégration : concurrence (verrou).
- [ ] Intégration : audit écrit.
- [ ] Unitaire : plafond de relances.
- [ ] Sécurité : RBAC + 2FA.

## 🔗 Dépendances

À réaliser après : `API-PLAT-14` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.7.2
- CDC Backend §7.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
