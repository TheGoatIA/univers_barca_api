> **API-PLAT-23** · Infrastructure · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

docker/prometheus/alerts.yml contient 4 règles (ApiDown, HighLatencyP95, HighErrorRate, JobsFailing) et alertmanager.yml n'a aucun récepteur réel. Le CDC §6.3 exige aussi : API football indisponible, file bloquée, échec répété des sauvegardes.

## ✅ Objectif

Compléter les règles obligatoires, router vers un canal réel et documenter chaque alerte.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WH-01` — Santé technique
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_light.webp?raw=true' width='330' alt='WH-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_dark.webp?raw=true' width='330' alt='WH-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_light.webp?raw=true' width='330' alt='WH-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_dark.webp?raw=true' width='330' alt='WH-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Santé technique » · « Données Prometheus / OpenTelemetry · actualisation toutes les 30 s » · « 1 h » · « 24 h » · « 7 j » · « Ouvrir Grafana » · « 1 alerte active » · « · File « wallpapers » : 14 jobs en attente depuis 12 min (seuil : 10). » · « Voir la file » · « Statut global » · « Dégradé »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-03%5D%22) · [ADM-WH-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-04%5D%22) · [ADM-WH-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-05%5D%22) · [ADM-WH-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-13%5D%22) · [ADM-WH-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-14%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22) · [API-IA-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-30%5D%22) · [API-PLAT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-03%5D%22) · [API-PLAT-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-12%5D%22) · [API-PLAT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-13%5D%22) · [API-PLAT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-21%5D%22) · [API-PLAT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-22%5D%22) · [API-PLAT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-34%5D%22) · [API-PLAT-48](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-48%5D%22) · [API-PLAT-49](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-49%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

## 📐 Règles de gestion

- Règles ajoutées : FootballApiDown (échecs ub_external_call_duration_seconds{provider='football',outcome!='ok'} > 50 % sur 10 min), QueueBacklog (ub_queue_jobs{state='waiting'} > 10 pendant 10 min), QueueStalled (aucun job complété depuis 15 min avec waiting>0), BackupFailed (ub_backup_last_success_timestamp > 26 h), AiBudgetOverrun, RedisDown, MongoDown, DiskUsage > 85 %, CertExpiry < 14 j.
- Chaque règle porte labels severity, resource_type, resource_id et annotations summary + runbook_url (lien docs/runbooks/<alerte>.md).
- Routage : critical → e-mail + webhook Slack immédiat (repeat 1 h) ; warning → e-mail groupé 30 min ; inhibition : ApiDown inhibe les alertes de latence.
- Les webhooks/identifiants SMTP viennent de fichiers montés (jamais committés).
- Test de bout en bout : alerte de test (vector(1)) reçue sur le canal.

## 🛠️ Tâches

- [ ] Éditer docker/prometheus/alerts.yml (règles) + promtool check rules en CI.
- [ ] Écrire docker/prometheus/alertmanager.yml (receivers, routes, inhibit_rules) avec amtool check-config en CI.
- [ ] Exposer ub_backup_last_success_timestamp via job database-backup (voir ops-sauvegardes-automatisees).
- [ ] Ajouter blackbox exporter pour expiration TLS.
- [ ] Créer docs/runbooks/<alerte>.md pour chaque règle.
- [ ] Documenter la procédure de silence (maintenance planifiée) dans le runbook de déploiement.

## ✔️ Critères d'acceptation

- [ ] Étant donné /metrics en erreur 3 min, alors ApiDown passe en firing et un e-mail critique est envoyé.
- [ ] Étant donné ApiDown actif, alors HighLatencyP95 est inhibée.
- [ ] Étant donné une règle sans runbook_url, alors la CI échoue.
- [ ] Étant donné une sauvegarde absente depuis 27 h, alors BackupFailed se déclenche.

## 🧪 Tests à écrire

- [ ] CI : promtool check rules et amtool check-config.
- [ ] Test unitaire promtool (promtool test rules) pour HighErrorRate.
- [ ] Test unitaire promtool pour QueueBacklog.
- [ ] Recette : alerte de test reçue.
- [ ] Lint : toutes les règles ont runbook_url.

## 🔗 Dépendances

À réaliser après : `API-PLAT-21` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §6.3
- CDC Global §3.6
- CDC Global §3.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
