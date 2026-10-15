> **API-IA-23** · API · Priorité **P1** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

WI-06 « Quotas IA » permet au super-admin de régler « Messages assistant / jour », « Générations wallpaper / jour » et « Questions de quiz IA / jour » (boutons Annuler / Enregistrer). Le CDC Admin §6 réserve la modification au super-admin.

## ✅ Objectif

Un endpoint de lecture/écriture des quotas avec validation, audit et propagation immédiate.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-06` — Quotas IA
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__desktop_light.webp?raw=true' width='330' alt='WI-06 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__desktop_dark.webp?raw=true' width='330' alt='WI-06 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__tablet_light.webp?raw=true' width='330' alt='WI-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__tablet_dark.webp?raw=true' width='330' alt='WI-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Quotas IA » · « Plafonds pour maîtriser le coût du produit gratuit » · « Annuler » · « Enregistrer » · « Feature flags » · « Rapports » · « Par utilisateur » · « Messages assistant / jour » · « Générations wallpaper / jour » · « Questions de quiz IA / jour »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WI-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-01%5D%22) · [ADM-WI-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-02%5D%22) · [ADM-WI-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-12%5D%22) · [ADM-WI-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-13%5D%22) · [ADM-WI-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-20%5D%22) · [ADM-WI-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-21%5D%22) · [API-IA-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-03%5D%22) · [API-PLAT-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-11%5D%22) · [API-PLAT-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-17%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22) · [API-WALL-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-26%5D%22)

## 📐 Règles de gestion

- GET -> {items:[{key,label,limit,period,updatedAt,updatedBy}], defaults}. PATCH {items:[{key,limit}], justification} avec limit entier 0..1000 (0 = fonctionnalité bloquée) ; clés autorisées : assistant.messages, wallpaper.generations, quiz.questions.
- Concurrence optimiste : PATCH exige `If-Match` avec l'updatedAt de la lecture, sinon 412.
- Chaque modification écrit un AuditLog {action:'ai-quota.update', before, after, justification}.
- Effet : le cache de limite Redis est invalidé ; les compteurs du jour ne sont pas réinitialisés (réduction de limite appliquée immédiatement).
- Accès : rôle super-admin uniquement (403 pour moderator/content-manager).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/config/ai-quotas` | Quotas configurés | - | {data:{items:[{key,label,limit,period,updatedAt,updatedBy}]}} |
| `PATCH` | `/api/v1/admin/config/ai-quotas` | Modifie les quotas | {items:[{key,limit}],justification} | {data:{items:[...]}} |

## 🛠️ Tâches

- [ ] Créer src/routes/admin-config.routes.ts (ou étendre) avec les routes /admin/config/ai-quotas et le middleware restrictTo('super-admin').
- [ ] Créer src/controllers/admin-config.controller.ts et le validator Joi.
- [ ] Implémenter `AiQuotaService.update()` transactionnel avec audit.
- [ ] Gérer If-Match / 412.
- [ ] Invalider le cache Redis `ai:quota:limit:*`.
- [ ] Ajouter la documentation Swagger.
- [ ] Seeder les libellés affichés dans WI-06.

## ✔️ Critères d'acceptation

- [ ] Étant donné un PATCH assistant.messages=60 par un super-admin, alors la prochaine réponse de l'assistant affiche limit=60.
- [ ] Étant donné une limite de 1001, alors 400.
- [ ] Étant donné un moderator, alors 403.
- [ ] Étant donné un If-Match périmé, alors 412.
- [ ] Étant donné une modification, alors un AuditLog avec before/after existe.

## 🧪 Tests à écrire

- [ ] Intégration : PATCH puis effet immédiat.
- [ ] Sécurité : RBAC.
- [ ] Intégration : If-Match.
- [ ] Intégration : audit.

## 🔗 Dépendances

À réaliser après : `API-IA-03` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §6
- CDC Backend §10.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
