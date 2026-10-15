> **API-PLAT-20** · Fonctionnel · Priorité **P2** · Taille **L** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

WI-09 « Exports et rapports » : exports CSV/Excel des principales listes (joueurs, utilisateurs, signalements traités) et rapport hebdomadaire envoyé chaque lundi à 08:00 au super-admin (nouveaux utilisateurs, signalements traités, incidents techniques, consommation IA).

## ✅ Objectif

Offrir des exports volumineux sans bloquer l'API et un rapport hebdomadaire automatique, avec bascule d'activation.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-09` — Exports et rapports
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-09_exports-et-rapports__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-09_exports-et-rapports__desktop_light.webp?raw=true' width='330' alt='WI-09 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-09_exports-et-rapports__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-09_exports-et-rapports__desktop_dark.webp?raw=true' width='330' alt='WI-09 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-09_exports-et-rapports__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-09_exports-et-rapports__tablet_light.webp?raw=true' width='330' alt='WI-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-09_exports-et-rapports__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-09_exports-et-rapports__tablet_dark.webp?raw=true' width='330' alt='WI-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Rapports » · « Exports et rapports » · « Exports CSV/Excel et rapport hebdomadaire par e-mail » · « Feature flags » · « Quotas IA » · « Rapport hebdomadaire » · « Synthèse envoyée chaque lundi à 08:00 au super-admin. » · « Nouveaux utilisateurs » · « Signalements traités » · « Incidents techniques » · « Consommation IA »

**Composants repérés** : `avatar`, `btn`, `card`, `input`, `toggle`

</details>

**Issues liées sur ce même écran :** [ADM-WI-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-01%5D%22) · [ADM-WI-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-02%5D%22) · [ADM-WI-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-18%5D%22) · [ADM-WI-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-19%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

## 📐 Règles de gestion

- POST /admin/exports { dataset: players|users|reports, format: csv|xlsx, filters } crée un job 'exports' ; réponse 202 { exportId } ; GET /admin/exports/:id donne statut et URL signée valable 15 min ; fichier supprimé après 24 h.
- Droits par dataset : utilisateurs = super-admin ; signalements = moderator+ ; joueurs = content-manager+ (CDC Admin §6.5). Colonnes limitées au strict nécessaire (pas d'e-mail pour moderator).
- Max 100 000 lignes par export ; streaming ; anti-injection de formule.
- Rapport hebdomadaire : cron lundi 08:00 (Europe/Paris), contenu = 4 indicateurs de WI-09 sur 7 jours glissants vs semaine précédente ; destinataire = super-admins ayant activé le toggle (préférence admin.weeklyReport).
- PATCH /admin/config/reports { weeklyReportEnabled } (toggle de WI-09).
- Chaque export et envoi est audité (EXPORT_REQUESTED, REPORT_SENT).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/admin/exports` | Demande un export | {dataset:'players',format:'csv',filters:{}} | 202 {success:true,data:{exportId:'…'}} |
| `GET` | `/api/v1/admin/exports/:id` | Statut et lien | — | {success:true,data:{status:'ready',url:'…',expiresAt:'…'}} |

## 🗄️ Données

- exportjobs (TTL 24 h)

## 🛠️ Tâches

- [ ] Créer file BullMQ 'exports' et processeur exports.worker.ts (streaming vers fichier temporaire, upload stockage objet).
- [ ] Modèle ExportJob (status, dataset, requestedBy, expiresAt, TTL index).
- [ ] Routes POST/GET /admin/exports et PATCH /admin/config/reports.
- [ ] Générateur XLSX (exceljs en mode stream).
- [ ] Job cron 'weekly-report' + gabarit e-mail FR (réutilise email-worker AUTH).
- [ ] Agrégations des indicateurs (users créés, reports résolus, incidents = alertes critiques, tokens IA).
- [ ] Purge des fichiers expirés (job quotidien).
- [ ] Tests d'autorisation par dataset.

## ✔️ Critères d'acceptation

- [ ] Étant donné un moderator, quand il demande dataset=users, alors 403.
- [ ] Étant donné un export prêt, quand l'URL expire (15 min), alors 410.
- [ ] Étant donné lundi 08:00 et toggle actif, alors un e-mail est envoyé une seule fois (idempotence par semaine ISO).
- [ ] Étant donné 100 001 lignes, alors 422 EXPORT_TOO_LARGE.
- [ ] Étant donné toggle désactivé, alors aucun e-mail.

## 🧪 Tests à écrire

- [ ] Intégration : cycle complet export CSV.
- [ ] Intégration : export XLSX ouvrable (taille, feuille).
- [ ] Unitaire : idempotence du rapport hebdomadaire.
- [ ] Unitaire : calcul des indicateurs.
- [ ] Sécurité : URL signée expirée/forgée.
- [ ] Intégration : purge à 24 h.

## 🔗 Dépendances

À réaliser après : `API-PLAT-19` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §6.5
- CDC Admin §4.8

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
