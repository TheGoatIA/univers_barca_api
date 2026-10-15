> **API-PLAT-25** · Infrastructure · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le logger existe (src/utils/logger.ts) mais l'envoi GELF vers Graylog, la redaction systématique et la rétention 90 jours (CDC §5.7) restent à garantir. WH-03 annonce « Données personnelles masquées · conservation 90 jours ».

## ✅ Objectif

Centraliser les logs avec un format unique, sans donnée sensible, conservés 90 jours.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WH-03` — Explorateur de logs
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__desktop_light.webp?raw=true' width='330' alt='WH-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__desktop_dark.webp?raw=true' width='330' alt='WH-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__tablet_light.webp?raw=true' width='330' alt='WH-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__tablet_dark.webp?raw=true' width='330' alt='WH-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Logs » · « Explorateur de logs » · « Données personnelles masquées · conservation 90 jours » · « Ouvrir dans Graylog » · « Rechercher… » · « Service : api » · « Niveau : ≥ warn » · « Dernières 24 h » · « traceId: 9f3a21c8… » · « Horodatage » · « Niveau »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-08%5D%22) · [ADM-WH-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-09%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22) · [API-PLAT-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-16%5D%22) · [API-PLAT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-24%5D%22) · [API-PLAT-54](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-54%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

## 📐 Règles de gestion

- Champs obligatoires : timestamp, level, service (api|worker), module, traceId, userId pseudonymisé (HMAC), message, context.
- Redaction à l'écriture (pas seulement à la lecture) : password, token, authorization, cookie, refreshToken, totp, email → '[REDACTED]' ou masqué ; test qui injecte ces clés.
- Transport GELF UDP/TCP vers GRAYLOG_HOST:12201 avec file tampon (max 1 000 messages) et repli console si Graylog down (aucun blocage de l'API).
- Niveaux : debug en dev, info en staging/production ; sampling des logs http de succès à 10 % en production si volume > seuil.
- Index set Graylog : rotation quotidienne, rétention 90 jours, replicas 0 sur VPS unique.

## 🛠️ Tâches

- [ ] Ajouter winston-gelf (ou transport maison) conditionné par GRAYLOG_HOST.
- [ ] Créer src/utils/redact.ts utilisé par le format Winston et maskPii().
- [ ] Ajouter graylog + opensearch + mongodb de config au compose observabilité (limites mémoire).
- [ ] Pipeline d'extraction Graylog (extracteur JSON) et stream « api-errors ».
- [ ] Configurer la rétention index set 90 jours (documentée en export JSON de content pack).
- [ ] Test d'absence de secrets dans les logs d'un parcours auth complet.

## ✔️ Critères d'acceptation

- [ ] Étant donné un log contenant {password:'x'}, alors la valeur émise est [REDACTED].
- [ ] Étant donné Graylog arrêté, alors l'API continue de répondre et logge en console.
- [ ] Étant donné une requête authentifiée, alors userId est un identifiant pseudonymisé (pas l'ObjectId).
- [ ] Étant donné un log de plus de 90 jours, alors il n'est plus recherchable.

## 🧪 Tests à écrire

- [ ] Unitaire : redact() sur objets imbriqués.
- [ ] Intégration : parcours login → aucun secret dans les logs capturés.
- [ ] Unitaire : repli console.
- [ ] Unitaire : pseudonymisation stable du userId.
- [ ] Recette : rétention vérifiée dans Graylog.

## 📚 Références

- CDC Backend §6.1
- CDC Backend §5.7
- CDC Global §3.6

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
