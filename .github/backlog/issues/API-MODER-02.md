> **API-MODER-02** · Sécurité · Priorité **P0** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

ModerationAction et AuditLog sont déclarés sans updatedAt mais rien n'empêche leur modification ou suppression. Le CDC exige un journal immuable (qui, quoi, quand, pourquoi) consultable en cas de contestation.

## ✅ Objectif

Garantir l'immuabilité applicative et en base de ces deux collections, avec chaînage d'intégrité vérifiable.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WG-03` — Action — bannir avec justification
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__desktop_light.webp?raw=true' width='330' alt='WG-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__desktop_dark.webp?raw=true' width='330' alt='WG-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__tablet_light.webp?raw=true' width='330' alt='WG-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__tablet_dark.webp?raw=true' width='330' alt='WG-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « Signalements » · « #R-20418 » · « Signalement #R-20418 » · « Urgent » · « En attente » · « Message de groupe » · « Menace » · « Signalé il y a 12 min · motif déclaré : « Harcèlement ou menaces » » · « Contexte (messages précédents) » · « Aïcha N. » · « Le Clásico ce samedi, qui vient ? » · « Mamadou D. » · « On se retrouve au Relais à 19h30 » · « ultras_bcn » · « · il y a 14 min » · « « … (propos menaçants — contenu sensible masqué par défaut) … » » · « Afficher le contenu » · « Actions » · « Ignorer » · « Masquer le contenu » · « Avertir »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-MODER-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-10%5D%22) · [API-MODER-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-11%5D%22) · [API-MODER-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-12%5D%22) · [API-MODER-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-22%5D%22) · [API-MODER-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-23%5D%22) · [API-MODER-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-30%5D%22) · [API-MODER-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-31%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

#### `WG-04` — Historique de modération d’un utilisateur
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__desktop_light.webp?raw=true' width='330' alt='WG-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__desktop_dark.webp?raw=true' width='330' alt='WG-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__tablet_light.webp?raw=true' width='330' alt='WG-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__tablet_dark.webp?raw=true' width='330' alt='WG-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « ultras_bcn » · « Historique » · « Historique de modération » · « ultras_bcn · compte créé le 14 juin 2026 » · « Voir le profil » · « Signalements reçus » · « 2 fondés » · « Avertissements » · « 3 oct. 2026 » · « Suspensions » · « Statut » · « Actif » · « Récidive : rang 2 » · « Chronologie » · « 12 min » · « Signalement #R-20418 » · « Menace · en attente » · « 3 oct. » · « Avertissement » · « Propos déplacés · Karim B. · gravité faible » · « 28 sept. » · « Signalement ignoré » · « Non fondé · Karim B. »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-MODER-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-11%5D%22) · [API-MODER-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-13%5D%22) · [API-MODER-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-14%5D%22) · [API-MODER-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-19%5D%22) · [API-MODER-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-22%5D%22) · [API-MODER-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-28%5D%22) · [API-MODER-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-29%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

## 📐 Règles de gestion

- Aucune opération update/delete autorisée : hooks pre(updateOne|updateMany|findOneAndUpdate|deleteOne|deleteMany|findOneAndDelete|replaceOne) lèvent IMMUTABLE_DOCUMENT.
- ModerationAction enrichi : reportId, adminId, adminRole, targetUserId, actionType (ignore|hide|warn|suspend|ban|unban|restore), severity (low|medium|high), recidivismRank, justification, suspendedUntil, contentRef, notificationId.
- Chaînage : champ hash = SHA-256(prevHash + contenu canonique JSON) ; prevHash = hash de l'entrée précédente de la collection ; endpoint de vérification d'intégrité réservé au super-admin.
- Conservation longue durée, jamais purgée automatiquement (CDC Backend §5.7) ; exclue des jobs de rétention.
- Utilisateur MongoDB applicatif de production sans droit update/delete sur ces collections (rôle insert+find) documenté dans docs/OPS.
- AuditLog : action en MAJUSCULES_SNAKE (REPORT_RESOLVED, USER_BANNED, USER_SUSPENDED, USER_WARNED, CONTENT_HIDDEN, USER_UNBANNED, APPEAL_DECIDED), before/after, justification, ip, adminName.

## 🗄️ Données

- moderation_actions
- audit_logs

## 🛠️ Tâches

- [ ] Créer src/models/plugins/immutable.plugin.ts appliqué aux deux schémas.
- [ ] Ajouter les champs manquants à actionSchema et auditSchema.
- [ ] Créer services/audit.service.ts : record(entry) calcule hash/prevHash dans une transaction ou via findOne trié (index createdAt:-1).
- [ ] Créer l'index {targetUserId:1,createdAt:-1} sur ModerationAction et {entityType:1,entityId:1,createdAt:-1} sur AuditLog.
- [ ] Créer services/audit-verify.service.ts : parcourt la chaîne et retourne la première rupture.
- [ ] Documenter les droits MongoDB dans docs/OPS.md et le script scripts/mongo-create-app-role.js.
- [ ] Masquer les secrets (tokens, mots de passe) dans before/after avec utils/redact.ts.
- [ ] Ajouter un test de contrat garantissant qu'aucun repository n'expose update/delete sur ces modèles.

## ✔️ Critères d'acceptation

- [ ] Étant donné une entrée AuditLog, quand on tente Model.updateOne, alors IMMUTABLE_DOCUMENT est levée.
- [ ] Étant donné une chaîne de 100 entrées, quand la vérification s'exécute, alors elle retourne ok:true.
- [ ] Étant donné une entrée altérée directement en base, quand la vérification s'exécute, alors l'identifiant de la première rupture est retourné.
- [ ] Étant donné un job de rétention RGPD, quand il s'exécute, alors aucune entrée de ces collections n'est supprimée.
- [ ] Étant donné un champ before contenant passwordHash, alors il est remplacé par [REDACTED].

## 🧪 Tests à écrire

- [ ] Test unitaire : plugin immutable bloque les 8 opérations.
- [ ] Test unitaire : calcul de hash déterministe (JSON canonique).
- [ ] Test d'intégration : vérification de chaîne OK et en échec.
- [ ] Test unitaire : redact masque les clés sensibles.
- [ ] Test d'intégration : concurrence de 20 écritures sans rupture de chaîne.

## 📚 Références

- CDC Backend §3.11
- CDC Backend §5.7
- CDC Admin §6.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
