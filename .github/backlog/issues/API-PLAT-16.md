> **API-PLAT-16** · API · Priorité **P1** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

WH-03 « Explorateur de logs — Données personnelles masquées · conservation 90 jours » : recherche texte, filtres Service (api), Niveau (≥ warn), plage (24 h), traceId, lien « Ouvrir dans Graylog ».

## ✅ Objectif

Proxifier la recherche Graylog avec filtres validés, masquage serveur des données personnelles et pagination.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WH-03` — Explorateur de logs
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__desktop_light.webp?raw=true' width='330' alt='WH-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__desktop_dark.webp?raw=true' width='330' alt='WH-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__tablet_light.webp?raw=true' width='330' alt='WH-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__tablet_dark.webp?raw=true' width='330' alt='WH-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Logs » · « Explorateur de logs » · « Données personnelles masquées · conservation 90 jours » · « Ouvrir dans Graylog » · « Rechercher… » · « Service : api » · « Niveau : ≥ warn » · « Dernières 24 h » · « traceId: 9f3a21c8… » · « Horodatage » · « Niveau »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-08%5D%22) · [ADM-WH-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-09%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22) · [API-PLAT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-24%5D%22) · [API-PLAT-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-25%5D%22) · [API-PLAT-54](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-54%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

## 📐 Règles de gestion

- Filtres : service ∈ {api, worker, …}, level ∈ {error,warn,info,debug} (opérateur ≥), from/to ISO (max 7 jours par requête, défaut 24 h), traceId (hex 32), q texte (<=200 car.).
- Appel Graylog /api/search/universal/absolute avec jeton de service en lecture seule (GRAYLOG_API_TOKEN) ; hôte en liste blanche ; timeout 5 s ; limit 50, pagination par offset borné <= 1 000.
- Masquage : e-mails → a***@d***.com, jetons/Authorization/cookies → '[REDACTED]', adresses IP tronquées (/24), userId pseudonymisé déjà dans les logs.
- Rétention 90 jours (CDC Backend §5.7) : toute plage antérieure est refusée 422.
- Accès super-admin ; chaque recherche est auditée (LOGS_SEARCHED avec filtres, sans résultats).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/observability/logs` | Recherche de logs | ?service=api&level=warn&from=&to=&traceId=&q=&limit=50 | {success:true,data:{items:[{ts:'…',level:'error',service:'api',message:'…',traceId:'9f3a21c8…'}],total:132,graylogUrl:'…'}} |

## 🛠️ Tâches

- [ ] Créer graylog.client.ts (undici, timeout, allowlist) et logs.service.ts (construction de requête Lucene échappée).
- [ ] Échapper l'entrée utilisateur pour éviter l'injection de requête Lucene.
- [ ] Implémenter maskPii() réutilisable (aussi pour les exports).
- [ ] Route GET /admin/observability/logs et GET /logs/:id.
- [ ] Variable GRAYLOG_URL, GRAYLOG_API_TOKEN, GRAYLOG_PUBLIC_URL (lien profond ‘Ouvrir dans Graylog’ avec la requête).
- [ ] Schémas Joi/OpenAPI.
- [ ] Tests avec Graylog simulé.

## ✔️ Critères d'acceptation

- [ ] Étant donné traceId valide, alors seuls les logs de cette trace sont renvoyés.
- [ ] Étant donné un log contenant un e-mail, alors il est masqué dans la réponse.
- [ ] Étant donné from > 90 jours, alors 422.
- [ ] Étant donné q contenant des opérateurs Lucene (" OR *), alors ils sont échappés.
- [ ] Étant donné Graylog down, alors 503 SERVICE_UNAVAILABLE avec lien de repli.

## 🧪 Tests à écrire

- [ ] Unitaire : maskPii (e-mail, token, IP).
- [ ] Unitaire : échappement Lucene.
- [ ] Intégration : filtres → requête Graylog attendue.
- [ ] Intégration : plage > 7 jours.
- [ ] Intégration : RBAC et audit.
- [ ] Contrat : OpenAPI.

## 🔗 Dépendances

À réaliser après : `API-PLAT-25` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.7.1
- CDC Backend §5.7
- CDC Backend §6.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
