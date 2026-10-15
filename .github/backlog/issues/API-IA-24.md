> **API-IA-24** · API · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

WH-04 « Consommation IA » présente texte (assistant, quiz : 4,2 M / 10 M tokens, « Dans le budget ») et image (wallpapers), le budget mensuel et un bandeau « Dépassement anticipé du budget image : au rythme actuel, le quota mensuel sera atteint le 24 octobre ».

## ✅ Objectif

Un endpoint d'agrégation fournissant séries, totaux, budget et projection de dépassement.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WH-04` — Consommation IA
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__desktop_light.webp?raw=true' width='330' alt='WH-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__desktop_dark.webp?raw=true' width='330' alt='WH-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__tablet_light.webp?raw=true' width='330' alt='WH-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__tablet_dark.webp?raw=true' width='330' alt='WH-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Usage IA » · « Consommation IA » · « Texte (assistant, quiz) et image (wallpapers) · comparée aux quotas configurés » · « Modifier les quotas » · « Dépassement anticipé du budget image » · « : au rythme actuel, le quota mensuel sera atteint le 24 octobre. » · « Texte · assistant et quiz » · « Dans le budget » · « 4,2 M » · « / 10 M tokens » · « Image · wallpapers »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-10%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22) · [API-IA-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-04%5D%22) · [API-IA-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-07%5D%22) · [API-IA-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-30%5D%22) · [API-PLAT-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-17%5D%22) · [API-PLAT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-22%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22) · [API-WALL-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-25%5D%22) · [API-WALL-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-26%5D%22)

## 📐 Règles de gestion

- Paramètres : `period` day | week | month (défaut month), `from`/`to` ISO ; réponse : totaux par feature (assistant, quiz, wallpaper), tokens entrée/sortie, nombre d'appels, erreurs, coût estimé, série journalière, ratio de cache hits.
- Budgets : AI_MONTHLY_TOKEN_BUDGET (texte, défaut 10 000 000) et AI_MONTHLY_IMAGE_BUDGET (nombre d'images) lus en config ; statut `ok` (< 80 %), `warning` (>= 80 %), `exceeded`.
- Projection : consommation du mois / jours écoulés x jours du mois ; si > budget, `projectedExceedDate` = date où la consommation cumulée atteindra le budget au rythme moyen des 7 derniers jours.
- Accès super-admin et moderator en lecture seule ; super-admin requis pour la partie coûts (CDC Admin §6, supervision réservée) ; réponse mise en cache 60 s.
- Aucune donnée personnelle ni identifiant utilisateur dans la réponse (top consommateurs exposés par userHash tronqué uniquement pour le super-admin, 10 lignes).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/observability/ai-usage` | Consommation IA par période | ?period=month&from=&to= | {data:{totals:{assistant,quiz,wallpaper},budget:{tokens,used,status,projectedExceedDate},series:[{day,tokensIn,tokensOut,images}],alerts:[]}} |

## 🛠️ Tâches

- [ ] Créer le contrôleur et la route GET /admin/observability/ai-usage dans src/routes/admin-observability.routes.ts.
- [ ] Implémenter `AiUsageReportService` agrégeant AiUsageDaily (pipeline $match/$group).
- [ ] Implémenter `projectBudget()` pure et testable.
- [ ] Ajouter les variables de budget dans env.ts et .env.example.
- [ ] Mettre en cache Redis 60 s avec clé par période.
- [ ] Documenter le schéma de réponse dans Swagger.
- [ ] Ajouter le bandeau d'alerte côté API : champ `alerts:[{level,message,feature}]`.

## ✔️ Critères d'acceptation

- [ ] Étant donné 4,2 M de tokens texte sur 10 M, alors status ok et ratio 0,42.
- [ ] Étant donné une consommation image projetée au-delà du budget, alors alerts contient un niveau warning et projectedExceedDate.
- [ ] Étant donné un rôle content-manager, alors 403.
- [ ] Étant donné aucune donnée, alors totaux à 0 et séries vides sans erreur.

## 🧪 Tests à écrire

- [ ] Unitaire : projectBudget.
- [ ] Intégration : agrégation sur 30 jours.
- [ ] Sécurité : RBAC.
- [ ] Intégration : absence de PII.

## 🔗 Dépendances

À réaliser après : `API-IA-04` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §7.2
- CDC Global §12.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
