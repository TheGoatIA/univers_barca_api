> **API-PLAT-12** · API · Priorité **P1** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

WH-01 « Santé technique » affiche statut global (Opérationnel / Dégradé / Incident), latences p50/p95/p99 et taux 5xx sur 1 h / 24 h / 7 j, actualisés toutes les 30 s depuis Prometheus/OpenTelemetry. Super-admin uniquement.

## ✅ Objectif

Fournir une API de supervision interrogeant Prometheus (et /health/deep) qui calcule le statut agrégé et les séries temporelles.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WH-01` — Santé technique
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_light.webp?raw=true' width='330' alt='WH-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_dark.webp?raw=true' width='330' alt='WH-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_light.webp?raw=true' width='330' alt='WH-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_dark.webp?raw=true' width='330' alt='WH-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Santé technique » · « Données Prometheus / OpenTelemetry · actualisation toutes les 30 s » · « 1 h » · « 24 h » · « 7 j » · « Ouvrir Grafana » · « 1 alerte active » · « · File « wallpapers » : 14 jobs en attente depuis 12 min (seuil : 10). » · « Voir la file » · « Statut global » · « Dégradé »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-03%5D%22) · [ADM-WH-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-04%5D%22) · [ADM-WH-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-05%5D%22) · [ADM-WH-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-13%5D%22) · [ADM-WH-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-14%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22) · [API-IA-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-30%5D%22) · [API-PLAT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-03%5D%22) · [API-PLAT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-13%5D%22) · [API-PLAT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-21%5D%22) · [API-PLAT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-22%5D%22) · [API-PLAT-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-23%5D%22) · [API-PLAT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-34%5D%22) · [API-PLAT-48](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-48%5D%22) · [API-PLAT-49](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-49%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

## 📐 Règles de gestion

- Statut : Incident si ApiDown ou 5xx > 5 % sur 5 min ; Dégradé si une dépendance (mongo, redis, API football) down, p95 > 1 s sur 10 min ou au moins une alerte active ; sinon Opérationnel.
- Paramètre range ∈ {1h,24h,7d} avec pas imposé (1 h → 30 s, 24 h → 5 min, 7 j → 30 min) ; max 336 points par série.
- Séries : latence p50/p95/p99 (histogram_quantile sur ub_http_request_duration_seconds_bucket), taux 5xx, requêtes/s, disponibilité (%) vs cible 99,5 %.
- Cache Redis 15 s (le front réactualise toutes les 30 s) ; si Prometheus injoignable : 200 avec status='unknown' et champ degradedSource='prometheus' (jamais 500).
- Détail par endpoint (top 10 routes par p95) pour le tableau de WH-01 ; route normalisée (:id) pour éviter la cardinalité.
- Accès super-admin + 2FA ; lien Grafana configuré (GRAFANA_PUBLIC_URL).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/observability/health` | Statut agrégé et séries | ?range=1h\|24h\|7d | {success:true,data:{status:'degraded',availability:99.62,series:{p50:[],p95:[],p99:[],errorRate:[]},endpoints:[{route:'/matches',p95:0.18,errorRate:0.002}],dependencies:{mongo:'up',redis:'up',footballApi:'up'},grafanaUrl:'…'}} |

## 🛠️ Tâches

- [ ] Créer src/services/observability/prometheus.client.ts (fetch /api/v1/query_range avec timeout 3 s, allowlist d'hôte PROMETHEUS_URL).
- [ ] Créer src/services/observability/health-aggregate.service.ts (règles de statut ci-dessus).
- [ ] Étendre health.service.ts : readiness inclut l'API football (dernier sync réussi < 2 h) et l'état des files.
- [ ] Créer controller + route GET /admin/observability/health.
- [ ] Ajouter variables PROMETHEUS_URL, ALERTMANAGER_URL, GRAFANA_PUBLIC_URL à env.ts et .env.example.
- [ ] Schémas Joi (range) et OpenAPI.
- [ ] Tests avec Prometheus simulé (nock).
- [ ] Ajouter la route au scénario k6 admin (p95 < 500 ms).

## ✔️ Critères d'acceptation

- [ ] Étant donné Prometheus répondant normalement, alors 200 avec status et 3 séries de latence.
- [ ] Étant donné 5xx à 7 % pendant 5 min, alors status='incident'.
- [ ] Étant donné Redis down, alors status='degraded'.
- [ ] Étant donné Prometheus injoignable, alors 200 status='unknown'.
- [ ] Étant donné un moderator, alors 403.
- [ ] Étant donné range=30d, alors 422.

## 🧪 Tests à écrire

- [ ] Unitaire : règles de calcul du statut (table de vérité).
- [ ] Intégration : Prometheus mocké → payload attendu.
- [ ] Intégration : panne Prometheus.
- [ ] Intégration : RBAC super-admin.
- [ ] Unitaire : normalisation des routes.
- [ ] Contrat : OpenAPI.

## 📚 Références

- CDC Admin §4.7
- CDC Admin §4.7.1
- CDC Backend §6.3
- CDC Backend §6.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
