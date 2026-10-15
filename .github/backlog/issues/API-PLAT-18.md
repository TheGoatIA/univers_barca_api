> **API-PLAT-18** · Sécurité · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

WH-05 « Piste immuable de toutes les actions d'administration » : filtres Administrateur, Type d'action, Entité, Période (7 jours), colonnes Horodatage / Avant → après / Justification, bouton Exporter CSV. Le service de base (api-admin-audit-log) est décrit dans le groupe FOOT ; cette issue ajoute les garanties plateforme.

## ✅ Objectif

Rendre la piste d'audit inviolable et exportable.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WH-05` — Journal d’audit
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__desktop_light.webp?raw=true' width='330' alt='WH-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__desktop_dark.webp?raw=true' width='330' alt='WH-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__tablet_light.webp?raw=true' width='330' alt='WH-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__tablet_dark.webp?raw=true' width='330' alt='WH-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Piste immuable de toutes les actions d’administration » · « Exporter CSV » · « Rechercher… » · « Administrateur » · « Type d’action » · « Entité » · « Période : 7 jours » · « Horodatage » · « Avant → après » · « Justification » · « 15 oct. 09:41 »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-09%5D%22) · [ADM-WH-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-11%5D%22) · [ADM-WH-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-12%5D%22) · [ADM-WH-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-13%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22) · [API-PLAT-54](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-54%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

## 📐 Règles de gestion

- Immuabilité : hooks Mongoose interdisant update/delete/findOneAndUpdate sur auditlogs ; l'utilisateur MongoDB applicatif n'a pas le droit remove sur la collection en production (rôle dédié) ; chaîne de hachage : chaque entrée contient prevHash et hash SHA-256 (champs canoniques), permettant de détecter une altération.
- Champs conformes CDC Admin §6.4 : timestamp, adminId, adminName, action (ex. PLAYER_PUBLISHED, USER_BANNED, FEATURE_FLAG_TOGGLED), entityType, entityId, before, after, justification, ip tronquée, traceId.
- Export CSV : GET /admin/audit-logs/export.csv avec mêmes filtres, max 50 000 lignes, UTF-8 avec BOM, séparateur ';', protection contre l'injection de formules (préfixe ' pour = + - @), en-têtes Content-Disposition horodatés ; l'export est lui-même audité (AUDIT_EXPORTED).
- Conservation illimitée (valeur d'audit, CDC Backend §5.7) ; aucun TTL.
- Script de vérification de chaîne : npm run audit:verify (alerte si rupture).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/audit-logs/export.csv` | Export CSV de la piste d'audit | mêmes filtres que /admin/audit-logs | text/csv ; charset=utf-8 |

## 🛠️ Tâches

- [ ] Modifier AuditLog dans moderation.model.ts : prevHash, hash, interdiction de mutation (pre hooks).
- [ ] Créer src/services/audit-chain.service.ts (calcul + vérif) et l'appeler dans audit().
- [ ] Créer la route d'export en streaming (cursor Mongo + csv-stringify) avec escape anti-formule.
- [ ] Script scripts/verify-audit-chain.ts + job hebdomadaire.
- [ ] Rôle MongoDB applicatif sans remove sur auditlogs (docs/DATABASE.md + docker/mongo-init).
- [ ] Index {timestamp:-1}, {adminId:1,timestamp:-1}, {action:1,timestamp:-1}, {entityType:1,entityId:1}.
- [ ] Tests de mutation interdite.

## ✔️ Critères d'acceptation

- [ ] Étant donné une entrée d'audit, quand updateOne est tenté, alors une erreur AUDIT_IMMUTABLE est levée.
- [ ] Étant donné une entrée modifiée directement en base, alors npm run audit:verify détecte la rupture.
- [ ] Étant donné le filtre période=7 jours, alors l'export contient uniquement ces entrées.
- [ ] Étant donné une justification '=cmd()', alors elle est exportée préfixée par '.
- [ ] Étant donné 50 001 lignes, alors 422 EXPORT_TOO_LARGE.

## 🧪 Tests à écrire

- [ ] Unitaire : calcul du hash chaîné.
- [ ] Intégration : mutation refusée.
- [ ] Intégration : export CSV (BOM, séparateur, échappement).
- [ ] Sécurité : injection de formule CSV.
- [ ] Intégration : audit de l'export.
- [ ] Performance : export de 50 000 lignes en streaming < 10 s, mémoire constante.

## 📚 Références

- CDC Admin §6.4
- CDC Admin §6.5
- CDC Backend §5.7

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
