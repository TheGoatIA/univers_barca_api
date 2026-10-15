> **API-IA-04** · Données · Priorité **P1** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

L'écran WH-04 « Consommation IA » compare les tokens consommés (ex. 4,2 M / 10 M tokens) au budget et alerte sur un dépassement anticipé. Le CDC Global §12.1 demande de plafonner et de mesurer le coût IA. Il faut donc tracer chaque appel fournisseur sans conserver de donnée personnelle.

## ✅ Objectif

Une collection d'événements d'usage agrégeable par jour, par fonctionnalité et par fournisseur, purgée automatiquement.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WH-04` — Consommation IA
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__desktop_light.webp?raw=true' width='330' alt='WH-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__desktop_dark.webp?raw=true' width='330' alt='WH-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__tablet_light.webp?raw=true' width='330' alt='WH-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__tablet_dark.webp?raw=true' width='330' alt='WH-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Usage IA » · « Consommation IA » · « Texte (assistant, quiz) et image (wallpapers) · comparée aux quotas configurés » · « Modifier les quotas » · « Dépassement anticipé du budget image » · « : au rythme actuel, le quota mensuel sera atteint le 24 octobre. » · « Texte · assistant et quiz » · « Dans le budget » · « 4,2 M » · « / 10 M tokens » · « Image · wallpapers »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-10%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22) · [API-IA-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-07%5D%22) · [API-IA-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-24%5D%22) · [API-IA-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-30%5D%22) · [API-PLAT-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-17%5D%22) · [API-PLAT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-22%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22) · [API-WALL-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-25%5D%22) · [API-WALL-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-26%5D%22)

## 📐 Règles de gestion

- AiCallLog : feature enum assistant | quiz | wallpaper | moderation, provider, model, promptVersion, tokensIn, tokensOut, imageCount, costEstimateEur (Number, calculé depuis une grille de prix en configuration), latencyMs, status enum ok | error | timeout | fallback | cached | moderated, errorCode, traceId, userHash (HMAC-SHA256 du userId, jamais le contenu).
- Aucun contenu de message ni de prompt n'est stocké dans ce journal (minimisation RGPD) ; seul le traceId permet de corréler avec les logs applicatifs (conservés 90 jours).
- Index {createdAt:-1} + TTL 400 jours ; index {feature:1,createdAt:-1} ; agrégations quotidiennes précalculées dans AiUsageDaily {day, feature, provider, calls, tokensIn, tokensOut, costEstimateEur, errors} (upsert).
- Grille de prix dans la configuration (AI_PRICE_TABLE_JSON : €/1M tokens entrée/sortie par modèle, €/image) ; modèle inconnu -> coût null et warn.

## 🗄️ Données

- aicalllogs
- aiusagedailies

## 🛠️ Tâches

- [ ] Créer `AiCallLog` et `AiUsageDaily` dans platform.model.ts avec les index et le TTL.
- [ ] Créer src/services/ai/ai-metering.service.ts : `record(entry)` asynchrone non bloquant (try/catch, jamais d'échec propagé à la requête).
- [ ] Implémenter `estimateCost(model, tokensIn, tokensOut)` à partir de la grille de prix parsée au boot (Joi).
- [ ] Incrémenter en parallèle les compteurs Prometheus `ai_tokens_total{feature,direction}`, `ai_calls_total{feature,status}` et l'histogramme `ai_latency_ms` (src/config/metrics.ts).
- [ ] Ajouter le `userHash` avec un secret AI_LOG_HASH_SECRET (variable Joi dans env.ts).
- [ ] Écrire le job d'agrégation incrémentale (upsert $inc dans AiUsageDaily au moment du record).
- [ ] Documenter les champs dans docs/DATABASE.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné un appel assistant de 1 200 tokens entrée et 300 sortie, quand il est journalisé, alors AiUsageDaily du jour est incrémenté de ces valeurs.
- [ ] Étant donné une base indisponible, quand record() échoue, alors la requête utilisateur aboutit quand même et l'erreur est loggée.
- [ ] Étant donné un modèle absent de la grille, alors costEstimateEur est null et un warn est émis.
- [ ] Étant donné un journal créé, alors aucun champ ne contient le texte du message.

## 🧪 Tests à écrire

- [ ] Unitaire : estimateCost sur 3 modèles.
- [ ] Intégration : upsert AiUsageDaily concurrent.
- [ ] Unitaire : record non bloquant sur erreur.
- [ ] Intégration : absence de contenu dans le document.

## 📚 Références

- CDC Global §12.1
- CDC Backend §11.2
- CDC Admin §7.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
