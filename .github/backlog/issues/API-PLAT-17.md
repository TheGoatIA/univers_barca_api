> **API-PLAT-17** · API · Priorité **P1** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

WH-04 « Consommation IA » compare texte (assistant, quiz : 4,2 M / 10 M tokens) et image (wallpapers) aux quotas et alerte : « Dépassement anticipé du budget image : au rythme actuel, le quota mensuel sera atteint le 24 octobre ».

## ✅ Objectif

Mesurer chaque appel IA, agréger par période et projeter la date d'épuisement du budget.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WH-04` — Consommation IA
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__desktop_light.webp?raw=true' width='330' alt='WH-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__desktop_dark.webp?raw=true' width='330' alt='WH-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__tablet_light.webp?raw=true' width='330' alt='WH-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__tablet_dark.webp?raw=true' width='330' alt='WH-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Usage IA » · « Consommation IA » · « Texte (assistant, quiz) et image (wallpapers) · comparée aux quotas configurés » · « Modifier les quotas » · « Dépassement anticipé du budget image » · « : au rythme actuel, le quota mensuel sera atteint le 24 octobre. » · « Texte · assistant et quiz » · « Dans le budget » · « 4,2 M » · « / 10 M tokens » · « Image · wallpapers »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-10%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22) · [API-IA-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-04%5D%22) · [API-IA-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-07%5D%22) · [API-IA-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-24%5D%22) · [API-IA-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-30%5D%22) · [API-PLAT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-22%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22) · [API-WALL-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-25%5D%22) · [API-WALL-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-26%5D%22)

#### `WI-06` — Quotas IA
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__desktop_light.webp?raw=true' width='330' alt='WI-06 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__desktop_dark.webp?raw=true' width='330' alt='WI-06 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__tablet_light.webp?raw=true' width='330' alt='WI-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__tablet_dark.webp?raw=true' width='330' alt='WI-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Quotas IA » · « Plafonds pour maîtriser le coût du produit gratuit » · « Annuler » · « Enregistrer » · « Feature flags » · « Rapports » · « Par utilisateur » · « Messages assistant / jour » · « Générations wallpaper / jour » · « Questions de quiz IA / jour »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WI-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-01%5D%22) · [ADM-WI-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-02%5D%22) · [ADM-WI-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-12%5D%22) · [ADM-WI-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-13%5D%22) · [ADM-WI-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-20%5D%22) · [ADM-WI-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-21%5D%22) · [API-IA-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-03%5D%22) · [API-IA-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-23%5D%22) · [API-PLAT-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-11%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22) · [API-WALL-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-26%5D%22)

## 📐 Règles de gestion

- Collection ai_usage_daily { date, kind(text|image), feature(assistant|quiz|wallpaper), requests, tokensIn, tokensOut, images, costEur, errors } alimentée par le service IA à chaque appel (incrément $inc atomique).
- GET /admin/observability/ai-usage?period=day|week|month : totaux, % du quota (budget global WI-06), répartition par feature, top 10 utilisateurs anonymisés (hash), taux d'erreur.
- Projection : (consommation cumulée du mois / jours écoulés) × jours du mois ; si projection > budget → alerte 'budget_overrun' avec date estimée d'atteinte ; statuts 'Dans le budget' (< 80 %), 'À surveiller' (80-100 %), 'Dépassement anticipé' (projection > 100 %).
- Seuil de coupure automatique facultatif : au-delà de 100 % du budget, activer killSwitch du flag wallpapers_module_enabled (configurable, désactivé par défaut).
- Aucune donnée de prompt n'est stockée dans ai_usage_daily (minimisation RGPD).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/observability/ai-usage` | Consommation IA vs quotas | ?period=month | {success:true,data:{text:{used:4200000,budget:10000000,status:'within'},image:{used:310,budget:400,status:'overrun-expected',projectedDepletion:'2026-10-24'},byFeature:[],errorRate:0.012}} |

## 🗄️ Données

- ai_usage_daily

## 🛠️ Tâches

- [ ] Créer le modèle AiUsageDaily (index unique {date,kind,feature}) dans platform.model.ts.
- [ ] Créer src/services/ai-usage.service.ts (record(kind, feature, usage), summary(period), projection()).
- [ ] Brancher record() dans les futurs clients IA via l'interface AiProvider (hook obligatoire documenté).
- [ ] Route GET /admin/observability/ai-usage.
- [ ] Job quotidien 'ai-budget-check' (cron 06:00) : calcule la projection, publie la métrique ub_ai_budget_projected_ratio, déclenche l'alerte.
- [ ] Règle Prometheus AiBudgetOverrun (ratio > 1 pendant 1 h).
- [ ] Tests de projection avec données simulées (cas 4,2 M/10 M au jour 10).

## ✔️ Critères d'acceptation

- [ ] Étant donné 4,2 M tokens le 12 du mois pour un budget 10 M, alors la projection indique dépassement et statut 'Dépassement anticipé' si la projection dépasse 10 M.
- [ ] Étant donné 30 % du budget consommé à mi-mois, alors statut 'Dans le budget'.
- [ ] Étant donné la clé killSwitchOnOverrun=true et 100 % atteints, alors le flag wallpapers est coupé.
- [ ] Étant donné la réponse, alors aucun prompt ni identifiant en clair n'apparaît.
- [ ] Étant donné un content-manager, alors 403.

## 🧪 Tests à écrire

- [ ] Unitaire : calcul de projection (mois de 28/30/31 jours).
- [ ] Intégration : agrégation par période.
- [ ] Intégration : record() concurrent (200 appels) sans perte.
- [ ] Intégration : coupure automatique.
- [ ] Unitaire : anonymisation du top utilisateurs.
- [ ] Contrat : OpenAPI.

## 🔗 Dépendances

À réaliser après : `API-PLAT-11` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.7.1
- CDC Global §12.1
- CDC Backend §6.3 (Coûts IA)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
