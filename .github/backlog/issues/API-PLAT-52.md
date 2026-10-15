> **API-PLAT-52** · RGPD · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

CDC Backend §5.7 : logs 90 j, traces 14 j, sauvegardes 30 j + 6 mois, jetons révoqués purgés après 90 j, journal de modération conservé. Seuls des index TTL existent pour refreshtokens et adminsessions.

## ✅ Objectif

Appliquer la rétention de manière automatique, vérifiable et journalisée pour toutes les collections techniques.

## 📐 Règles de gestion

- Table de rétention versionnée src/config/retention.ts : refreshtokens révoqués 90 j après révocation ; adminsessions expirées ; notificationlogs 90 j ; devicetokens invalides 30 j ; exportjobs 24 h ; ai_usage_daily 24 mois ; auditlogs et actions de modération jamais purgés.
- Implémentation : index TTL quand la date de péremption est un champ unique, sinon job cron 'retention-purge' quotidien 03:30 UTC par lots de 1 000 (deleteMany avec limite) pour éviter de saturer Mongo.
- Chaque exécution journalise { collection, supprimés, durée } et expose ub_retention_deleted_total{collection}.
- Mode simulation (--dry-run) et plafond de sécurité : abandon si le volume à supprimer dépasse 20 % de la collection.
- Les durées sont reprises dans le registre des traitements (issue rgpd-registre-traitements).

## 🛠️ Tâches

- [ ] Créer src/config/retention.ts et src/jobs/retention-purge.ts.
- [ ] Planifier dans scheduler.ts (verrou leader).
- [ ] Migration créant les index TTL manquants.
- [ ] Script scripts/retention-report.ts (volumes concernés).
- [ ] Métriques et alerte RetentionAbort.
- [ ] Tests avec horloge simulée.

## ✔️ Critères d'acceptation

- [ ] Étant donné un refresh token révoqué depuis 91 jours, alors il est supprimé par le job.
- [ ] Étant donné un auditlog ancien, alors il n'est jamais supprimé.
- [ ] Étant donné un volume à supprimer > 20 %, alors le job s'interrompt et alerte.
- [ ] Étant donné --dry-run, alors rien n'est supprimé et le décompte est affiché.

## 🧪 Tests à écrire

- [ ] Intégration: purge par lots.
- [ ] Unitaire: plafond 20 %.
- [ ] Intégration: absence de suppression des audits.
- [ ] Unitaire: calcul des dates limites.
- [ ] Intégration: idempotence du job.

## 📚 Références

- CDC Backend §5.7
- CDC Global §3.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
