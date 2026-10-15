> **API-PLAT-53** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

queues.ts définit 5 tentatives avec backoff exponentiel (2 s) et une file dead-letter, mais sans conservation des motifs, sans classification d'erreur permanente/transitoire ni rejeu groupé (CDC Backend §7.1, Admin §4.7.2).

## ✅ Objectif

Standardiser retries, bascule en dead-letter et rejeu contrôlé pour tous les workers.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WH-02` — Files d’attente BullMQ
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_light.webp?raw=true' width='330' alt='WH-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_dark.webp?raw=true' width='330' alt='WH-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_light.webp?raw=true' width='330' alt='WH-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_dark.webp?raw=true' width='330' alt='WH-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Files d’attente » · « Files d’attente BullMQ » · « Jobs persistés et idempotents · relance manuelle des échecs » · « Actualiser » · « calendar-sync » · « En attente » · « Échecs » · « Terminés » · « notifications »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-05%5D%22) · [ADM-WH-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-06%5D%22) · [ADM-WH-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-07%5D%22) · [ADM-WH-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-14%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22) · [API-PLAT-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-14%5D%22) · [API-PLAT-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-15%5D%22) · [API-PLAT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-21%5D%22) · [API-PLAT-48](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-48%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

## 📐 Règles de gestion

- Politique par file (src/jobs/policies.ts) : email 5 tentatives (2 s exp.), notifications 5, football-sync 3 (délai 30 s), ai-generation 2 (coûteux), rgpd 8 (sur 24 h), exports 2.
- Erreurs permanentes (UnrecoverableError : validation, 4xx fournisseur) = pas de retry, directement en dead-letter avec failedReason ; erreurs transitoires (timeout, 5xx, 429) = retry avec backoff + jitter.
- Dead-letter : document { queue, jobId, name, data (masqué), failedReason, attempts, firstFailedAt, manualRetries } avec rétention 30 jours ; compteur ub_dead_letter_total{queue}.
- Rejeu groupé par file et motif (POST /admin/observability/dead-letter/replay { queue, reason, max:100 }), avec limite de débit (10 jobs/s) et audit ; idempotence garantie par jobId d'origine.
- Concurrence limitée sur les jobs coûteux (ai-generation 2, exports 1).

## 🛠️ Tâches

- [ ] Créer src/jobs/policies.ts et helper classifyError().
- [ ] Compléter registerWorker() (UnrecoverableError, envoi en dead-letter avec contexte).
- [ ] Modèle DeadLetter + TTL 30 j.
- [ ] Route de rejeu groupé (super-admin, 2FA, audit).
- [ ] Alerte DeadLetterGrowth (> 20 en 1 h).
- [ ] Tests de chaque classe d'erreur.

## ✔️ Critères d'acceptation

- [ ] Étant donné une erreur 400 fournisseur, alors le job va en dead-letter sans retry.
- [ ] Étant donné un timeout, alors 5 tentatives avec backoff avant dead-letter.
- [ ] Étant donné un rejeu groupé de 100 jobs, alors le débit n'excède pas 10 jobs/s.
- [ ] Étant donné un rejeu, alors le jobId d'origine est conservé.

## 🧪 Tests à écrire

- [ ] Unitaire: classifyError.
- [ ] Intégration: épuisement des tentatives → dead-letter.
- [ ] Intégration: rejeu groupé.
- [ ] Unitaire: jitter de backoff.
- [ ] Intégration: audit du rejeu.

## 📚 Références

- CDC Backend §7.1
- CDC Admin §4.7.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
