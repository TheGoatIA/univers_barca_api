> **API-PLAT-49** · Infrastructure · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

scripts/backup.sh fait un mongodump avec rotation 7 jours et docs/DISASTER_RECOVERY.md recommande un cron manuel. Le CDC Backend §9.6/§5.7 exige quotidienne 30 j + hebdomadaire 6 mois, stockage objet externe, chiffrement, alerte en cas d'échec répété (§6.3).

## ✅ Objectif

Automatiser entièrement la sauvegarde, la rétention et la surveillance.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WH-01` — Santé technique
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_light.webp?raw=true' width='330' alt='WH-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_dark.webp?raw=true' width='330' alt='WH-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_light.webp?raw=true' width='330' alt='WH-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_dark.webp?raw=true' width='330' alt='WH-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Santé technique » · « Données Prometheus / OpenTelemetry · actualisation toutes les 30 s » · « 1 h » · « 24 h » · « 7 j » · « Ouvrir Grafana » · « 1 alerte active » · « · File « wallpapers » : 14 jobs en attente depuis 12 min (seuil : 10). » · « Voir la file » · « Statut global » · « Dégradé »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-03%5D%22) · [ADM-WH-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-04%5D%22) · [ADM-WH-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-05%5D%22) · [ADM-WH-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-13%5D%22) · [ADM-WH-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-14%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22) · [API-IA-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-30%5D%22) · [API-PLAT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-03%5D%22) · [API-PLAT-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-12%5D%22) · [API-PLAT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-13%5D%22) · [API-PLAT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-21%5D%22) · [API-PLAT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-22%5D%22) · [API-PLAT-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-23%5D%22) · [API-PLAT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-34%5D%22) · [API-PLAT-48](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-48%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

## 📐 Règles de gestion

- Planification : job BullMQ 'database-backup' (cron 02:00 UTC, worker dédié) ou cron conteneur ; sauvegarde supplémentaire déclenchée avant chaque déploiement production.
- Rétention : 30 sauvegardes quotidiennes + 26 hebdomadaires (dimanche) ; purge automatique au-delà.
- Copie vers stockage objet S3-compatible hors VPS, chiffrée (age/AES-256) avec clé distincte, vérification d'intégrité (sha256 + mongorestore --dryRun).
- Métriques ub_backup_last_success_timestamp, ub_backup_size_bytes, ub_backup_duration_seconds ; alerte BackupFailed si > 26 h sans succès.
- Sauvegarde de la configuration Docker Compose et .env (chiffrés) séparée (CDC §9.6) ; Redis non sauvegardé (cache/files uniquement).
- Les sauvegardes contiennent des données personnelles : accès restreint, durée alignée avec la politique RGPD, purge incluse dans le registre des traitements.

## 🗄️ Données

- Sauvegardes mongodump chiffrées

## 🛠️ Tâches

- [ ] Compléter scripts/backup.sh (gzip, chiffrement, upload, rotation 30j/26 semaines).
- [ ] Créer le processor 'database-backup' dans src/jobs (ou conteneur cron) avec métriques.
- [ ] Variables BACKUP_S3_ENDPOINT/BUCKET/KEY, BACKUP_ENCRYPTION_KEY dans env.ts.
- [ ] Endpoint admin lecture seule GET /admin/observability/backups (dernière sauvegarde, taille) pour WH-01.
- [ ] Règle d'alerte BackupFailed.
- [ ] Mettre à jour docs/DISASTER_RECOVERY.md (RPO 24 h → 1 h si sauvegarde horaire activée via option).

## ✔️ Critères d'acceptation

- [ ] Étant donné 02:00 UTC, alors une sauvegarde chiffrée est créée et copiée hors VPS.
- [ ] Étant donné 31 sauvegardes quotidiennes, alors la plus ancienne est supprimée (sauf hebdomadaire).
- [ ] Étant donné un échec d'upload, alors ub_backup_last_success_timestamp n'est pas mis à jour et l'alerte se déclenche après 26 h.
- [ ] Étant donné une archive corrompue, alors la vérification d'intégrité l'indique.

## 🧪 Tests à écrire

- [ ] Script: backup.sh sur base de test.
- [ ] Unitaire: politique de rétention (quotidien/hebdo).
- [ ] Intégration: processor met à jour les métriques.
- [ ] Recette: déchiffrement et restauration à blanc.
- [ ] Promtool: règle BackupFailed.

## 📚 Références

- CDC Backend §9.6
- CDC Backend §5.7
- CDC Global §3.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
