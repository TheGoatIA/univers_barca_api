> **API-PLAT-11** · API · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

WI-06 « Quotas IA — Plafonds pour maîtriser le coût du produit gratuit » : messages assistant/jour, générations wallpaper/jour, questions de quiz IA/jour, par utilisateur, avec Annuler / Enregistrer. Le modèle AiQuota (key, limit, period) existe sans API.

## ✅ Objectif

Rendre les plafonds éditables par le super-admin et appliqués sans redéploiement.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-06` — Quotas IA
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__desktop_light.webp?raw=true' width='330' alt='WI-06 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__desktop_dark.webp?raw=true' width='330' alt='WI-06 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__tablet_light.webp?raw=true' width='330' alt='WI-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__tablet_dark.webp?raw=true' width='330' alt='WI-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Quotas IA » · « Plafonds pour maîtriser le coût du produit gratuit » · « Annuler » · « Enregistrer » · « Feature flags » · « Rapports » · « Par utilisateur » · « Messages assistant / jour » · « Générations wallpaper / jour » · « Questions de quiz IA / jour »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WI-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-01%5D%22) · [ADM-WI-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-02%5D%22) · [ADM-WI-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-12%5D%22) · [ADM-WI-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-13%5D%22) · [ADM-WI-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-20%5D%22) · [ADM-WI-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-21%5D%22) · [API-IA-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-03%5D%22) · [API-IA-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-23%5D%22) · [API-PLAT-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-17%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22) · [API-WALL-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-26%5D%22)

## 📐 Règles de gestion

- Clés : assistant_messages_per_user_day (défaut 30), wallpaper_generations_per_user_day (défaut 5), quiz_ai_questions_per_user_day (valeur fixée par le groupe IA), plus budgets globaux mensuels ai_text_tokens_month (ex. 10 000 000) et ai_image_budget_month.
- Validation : entier 0-1000 par utilisateur/jour ; 0 = fonction coupée ; budget mensuel >= 0 ; période day|month non modifiable.
- Modification atomique des trois valeurs (bouton Enregistrer unique) : PATCH avec objet partiel, tout ou rien.
- Effet immédiat (cache quota.service invalidé) ; audit AI_QUOTA_CHANGED avec avant/après.
- Super-admin seul (CDC Admin §4.8, matrice permissions « Modifier les quotas IA »).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/config/ai-quotas` | Plafonds courants | — | {success:true,data:{perUser:{assistantMessagesPerDay:30,wallpaperGenerationsPerDay:5,quizAiQuestionsPerDay:10},global:{aiTextTokensMonth:10000000}}} |
| `PATCH` | `/api/v1/admin/config/ai-quotas` | Met à jour les plafonds | {perUser:{assistantMessagesPerDay:40}} | {success:true,data:{...},warnings:[]} |

## 🛠️ Tâches

- [ ] Étendre AiQuota (label, scope user|global, updatedBy) + migration de seed des valeurs par défaut.
- [ ] Créer routes GET/PATCH /admin/config/ai-quotas dans admin-config.controller.ts.
- [ ] Schéma Joi avec bornes ; transaction Mongo pour le tout-ou-rien.
- [ ] Brancher sur quota.service.limitFor(scope) (cf. sys-429-retry-after).
- [ ] Audit + invalidation Redis.
- [ ] Schémas Swagger AiQuotaAdmin.
- [ ] Garde « baisse brutale » : avertissement dans la réponse si nouvelle limite < usage moyen J-7 (champ warnings[]).

## ✔️ Critères d'acceptation

- [ ] Étant donné PATCH assistant=40, alors le 31e message du jour est accepté et le 41e refusé en 429 QUOTA_EXCEEDED.
- [ ] Étant donné une valeur -1, alors 422 et aucune valeur n'est modifiée.
- [ ] Étant donné un content-manager, alors 403.
- [ ] Étant donné la modification, alors une entrée d'audit AI_QUOTA_CHANGED existe.
- [ ] Étant donné valeur 0 pour wallpaper, alors la génération répond 429/403 selon le contrat.

## 🧪 Tests à écrire

- [ ] Intégration : lecture des quotas par défaut.
- [ ] Intégration : PATCH partiel tout-ou-rien.
- [ ] Intégration : application immédiate.
- [ ] Intégration : RBAC.
- [ ] Unitaire : warnings[] baisse brutale.
- [ ] Contrat : OpenAPI.

## 🔗 Dépendances

À réaliser après : `API-PLAT-06` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.8
- CDC Global §12.1
- CDC Backend §10.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
