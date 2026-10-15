> **API-FANT-12** · Infrastructure · Priorité **P0** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Les statistiques de match sont parfois corrigées par la source externe (but réattribué, carton annulé). Le CDC §7.1 exige des processors rejouables sans dupliquer d'effet, avec retry/backoff et dead-letter.

## ✅ Objectif

Garantir que tout rejeu produise le même résultat, que les corrections avant clôture soient reflétées et que les erreurs soient traçables.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `H-10` — Résultat de la journée
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_light.webp?raw=true' width='230' alt='H-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_dark.webp?raw=true' width='230' alt='H-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_light.webp?raw=true' width='330' alt='H-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_dark.webp?raw=true' width='330' alt='H-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Journée 10 terminée » · « Points calculés après le coup de sifflet final » · « ter Stegen » · « 6 pts » · « Koundé » · « 8 pts » · « Cubarsí » · « Araújo » · « 2 pts » · « Balde » · « 5 pts » · « De Jong » · « 7 pts » · « Pedri » · « 9 pts » · « Gavi » · « 3 pts » · « Yamal » · « 14 pts » · « Lewandowski » · « 11 pts » · « Raphinha » · « -1 pts » · « 11/11 » · « Équipe complète » · « Formation »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-01%5D%22) · [API-FANT-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-02%5D%22) · [API-FANT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-05%5D%22) · [API-FANT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-09%5D%22) · [API-FANT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-10%5D%22) · [API-FANT-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-11%5D%22) · [API-FANT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-13%5D%22) · [API-FANT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-24%5D%22) · [API-FANT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-33%5D%22) · [MOB-H-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-01%5D%22) · [MOB-H-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-20%5D%22) · [MOB-H-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-31%5D%22) · [MOB-H-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-34%5D%22)

## 📐 Règles de gestion

- Clé d'idempotence d'un calcul : (season, number, rulesVersion, statsVersion) où statsVersion = hash des PlayerMatchStat.sourceHash de la journée ; un job avec la même clé est ignoré s'il a déjà été appliqué.
- Les écritures sont des upserts de valeurs absolues (jamais des incréments) : rejouer ne double jamais les points.
- Correction de statistiques : tant que la journée est 'scoring' ou dans les 72 h suivant scoredAt, un changement de statsVersion déclenche un nouveau calcul avec le MÊME rulesVersion ; au-delà, correction uniquement via l'endpoint admin avec justification.
- Aucun recalcul n'est déclenché par un changement de barème (règle WJ-03) ; seul l'endpoint admin POST /admin/fantasy/gameweeks/:number/recompute (super-admin) permet de rejouer, et journalise AuditLog.
- Dead-letter : après 5 échecs, le job passe dans la file dead-letter existante avec contexte (gameweek, erreur) et alerte (métrique jobsFailed).
- Verrou de calcul Redis fantasy:lock:compute:{season}:{number} (TTL 10 min) pour éviter deux calculs simultanés ; libéré en finally.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/admin/fantasy/gameweeks/:number/recompute` | Rejouer le calcul d'une journée (super-admin) | {reason:'But réattribué'} | {success:true,data:{jobId}} |

## 🛠️ Tâches

- [ ] Ajouter Gameweek.computeState {statsVersion, rulesVersion, lastComputedAt, lastJobId}.
- [ ] Implémenter computeStatsVersion(gameweek) et le test d'égalité avant exécution.
- [ ] Implémenter acquireLock/releaseLock (SET NX PX) dans src/utils/redis-lock.ts (réutilisable PASS).
- [ ] Créer la route admin POST /admin/fantasy/gameweeks/:number/recompute {reason} (restrictTo('super-admin')).
- [ ] Écrire AuditLog 'fantasy.gameweek.recomputed' avec reason, ancien/nouveau total.
- [ ] Ajouter un test de non-régression : même fixtures deux fois = mêmes totaux.
- [ ] Ajouter une alerte sur taille de la file dead-letter fantasy > 0.
- [ ] Documenter le runbook de reprise (docs/runbooks/fantasy-scores.md).

## ✔️ Critères d'acceptation

- [ ] Étant donné un job rejoué avec les mêmes stats, alors aucun changement en base.
- [ ] Étant donné un but réattribué à T+2 h, alors les points des deux joueurs sont recalculés au prochain job.
- [ ] Étant donné un changement de barème v2 après le scoring de la journée 10, alors aucun recalcul automatique.
- [ ] Étant donné deux workers simultanés, alors un seul exécute (verrou).
- [ ] Étant donné un recompute par content-manager, alors 403.

## 🧪 Tests à écrire

- [ ] Unitaire : computeStatsVersion stable.
- [ ] Intégration : deux exécutions = mêmes totaux (hash des documents).
- [ ] Intégration : correction de stat refletée.
- [ ] Intégration : verrou concurrent.
- [ ] Intégration : AuditLog du recompute.

## 🔗 Dépendances

À réaliser après : `API-FANT-11` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §7.1
- CDC Backend §3.11

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
