> **API-FOOT-23** · Infrastructure · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

L'API football externe est facturée/limitée ; le polling live doit rester dans le budget (CDC §11.1).

## ✅ Objectif

Un limiteur de budget partagé entre workers avec dégradation contrôlée.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WD-01` — Liste des matchs
_Module : Matchs et compétitions_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_light.webp?raw=true' width='330' alt='WD-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_dark.webp?raw=true' width='330' alt='WD-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_light.webp?raw=true' width='330' alt='WD-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_dark.webp?raw=true' width='330' alt='WD-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Matchs et compétitions » · « Synchronisation API football : dernière mise à jour il y a 6 min » · « Synchroniser » · « Match historique » · « À venir » · « En direct » · « Historiques » · « Conflits » · « Rechercher… »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WD-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-01%5D%22) · [ADM-WD-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-02%5D%22) · [ADM-WD-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-03%5D%22) · [ADM-WD-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-04%5D%22) · [ADM-WD-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-09%5D%22) · [ADM-WD-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-12%5D%22) · [ADM-WD-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-13%5D%22) · [ADM-WD-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-14%5D%22) · [API-FOOT-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-02%5D%22) · [API-FOOT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-22%5D%22) · [API-FOOT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-24%5D%22) · [API-FOOT-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-25%5D%22) · [API-FOOT-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-26%5D%22) · [API-FOOT-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-28%5D%22) · [API-FOOT-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-29%5D%22) · [API-FOOT-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-31%5D%22) · [API-FOOT-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-32%5D%22) · [API-FOOT-41](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-41%5D%22) · [API-FOOT-43](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-43%5D%22) · [API-FOOT-44](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-44%5D%22) · [API-FOOT-52](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-52%5D%22)

## 📐 Règles de gestion

- Budget configurable : FOOTBALL_QUOTA_DAILY (ex. 7500) et FOOTBALL_QUOTA_PER_MIN (ex. 30), compteurs Redis (INCR + EXPIRE).
- Réserve : 20 % du quota quotidien réservé au mode live.
- À 80 % du quota : alerte log warn + métrique ; à 100 % : les jobs non live sont reportés (delay jusqu'à minuit UTC), le live passe en polling 60 s.
- Les en-têtes de quota du fournisseur (remaining) priment s'ils sont fournis.
- État exposé à l'admin (WD-01).

## 🛠️ Tâches

- [ ] Créer src/services/football/quota.service.ts (consume, remaining, state).
- [ ] Clés Redis football:quota:{yyyymmdd}, football:quota:min:{ts}.
- [ ] Intégrer au client HTTP avant chaque appel.
- [ ] Exception QuotaExceeded → report du job (moveToDelayed).
- [ ] Gauge Prometheus football_quota_remaining.
- [ ] Endpoint interne via sync status.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné 7500 appels consommés, alors un job non live est reporté.
- [ ] Étant donné Redis absent, alors fallback mémoire process.
- [ ] Étant donné minuit UTC, alors compteur remis à zéro.

## 🧪 Tests à écrire

- [ ] Unitaire : consume/refill.
- [ ] Intégration Redis réel (docker).
- [ ] Unitaire : réserve live.
- [ ] Unitaire : seuil 80 %.

## 🔗 Dépendances

À réaliser après : `API-FOOT-22` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.2
- CDC Backend §4.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
