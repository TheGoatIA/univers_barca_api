> **API-FOOT-22** · Infrastructure · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

La synchronisation doit pouvoir changer de fournisseur sans toucher à la logique métier (CDC §11.1). FOOTBALL_API_KEY existe déjà dans la config.

## ✅ Objectif

Un port FootballDataProvider et un adaptateur HTTP résilient.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WD-01` — Liste des matchs
_Module : Matchs et compétitions_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_light.webp?raw=true' width='330' alt='WD-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_dark.webp?raw=true' width='330' alt='WD-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_light.webp?raw=true' width='330' alt='WD-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_dark.webp?raw=true' width='330' alt='WD-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Matchs et compétitions » · « Synchronisation API football : dernière mise à jour il y a 6 min » · « Synchroniser » · « Match historique » · « À venir » · « En direct » · « Historiques » · « Conflits » · « Rechercher… »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WD-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-01%5D%22) · [ADM-WD-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-02%5D%22) · [ADM-WD-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-03%5D%22) · [ADM-WD-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-04%5D%22) · [ADM-WD-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-09%5D%22) · [ADM-WD-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-12%5D%22) · [ADM-WD-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-13%5D%22) · [ADM-WD-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-14%5D%22) · [API-FOOT-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-02%5D%22) · [API-FOOT-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-23%5D%22) · [API-FOOT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-24%5D%22) · [API-FOOT-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-25%5D%22) · [API-FOOT-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-26%5D%22) · [API-FOOT-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-28%5D%22) · [API-FOOT-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-29%5D%22) · [API-FOOT-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-31%5D%22) · [API-FOOT-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-32%5D%22) · [API-FOOT-41](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-41%5D%22) · [API-FOOT-43](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-43%5D%22) · [API-FOOT-44](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-44%5D%22) · [API-FOOT-52](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-52%5D%22)

#### `C-04` — Dashboard — match en direct
_Module : Accueil dashboard_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-04_dashboard-match-en-direct__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-04_dashboard-match-en-direct__phone_light.webp?raw=true' width='230' alt='C-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-04_dashboard-match-en-direct__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-04_dashboard-match-en-direct__phone_dark.webp?raw=true' width='230' alt='C-04 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-04_dashboard-match-en-direct__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-04_dashboard-match-en-direct__tablet_light.webp?raw=true' width='330' alt='C-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-04_dashboard-match-en-direct__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-04_dashboard-match-en-direct__tablet_dark.webp?raw=true' width='330' alt='C-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Salut Boris 👋 » · « Liga · J11 » · « EN DIRECT 67' » · « Barça » · « 2 – 1 » · « Camp Nou » · « Real Madrid » · « Suivre le live » · « Résolu » · « Guess the Player » · « Trouvé en 3 essais » · « Niveau 2 » · « Quiz du jour » · « 10 questions · Culé » · « oct. » · « Aujourd'hui dans l'histoire · 2011 » · « Le Barça de Guardiola enchaîne un 4-0 mémorable en Ligue des champions. » · « Lecture 1 min » · « Lire l'anecdote » · « jours de suite » · « Record personnel : 27 jours » · « Ton XI Fantasy · J11 » · « 4-3-3 · 62 pts » · « Ferme dans 1 j 4 h » · « Modifier » · « Classement amis » · « sur 12 »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FOOT-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-15%5D%22) · [API-FOOT-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-27%5D%22) · [API-FOOT-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-29%5D%22) · [API-FOOT-52](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-52%5D%22) · [MOB-C-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-02%5D%22) · [MOB-C-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-03%5D%22) · [MOB-C-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-09%5D%22) · [MOB-C-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-10%5D%22) · [MOB-C-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-12%5D%22) · [MOB-C-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-16%5D%22) · [MOB-C-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-21%5D%22) · [MOB-C-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-22%5D%22) · [MOB-C-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-25%5D%22) · [MOB-C-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-26%5D%22) · [MOB-C-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-27%5D%22)

## 📐 Règles de gestion

- Interface : getFixtures(competitionExternalRef, season), getFixture(ref), getLiveFixtures(), getLineups(ref), getEvents(ref), getTeams(comp), getPlayers(team).
- Timeout 8 s ; 3 retries réseau (backoff 500 ms, 1 s, 2 s) ; circuit breaker ouvert après 5 échecs consécutifs pendant 60 s.
- Normalisation vers DTO internes (ExternalFixture, ExternalEvent) ; aucun type du fournisseur ne sort de l'adaptateur.
- Clé API lue de FOOTBALL_API_KEY, jamais loguée (masquée).
- Statuts externes mappés vers scheduled/live/finished/postponed/cancelled.

## 🛠️ Tâches

- [ ] Créer src/services/football/football-provider.ts (interface + DTO).
- [ ] Créer src/services/football/http-football-provider.ts (axios, intercepteurs de quota).
- [ ] Créer src/services/football/status-mapper.ts.
- [ ] Créer src/services/football/circuit-breaker.ts.
- [ ] Variables FOOTBALL_API_BASE_URL, FOOTBALL_API_TIMEOUT_MS dans env.ts.
- [ ] Mock FakeFootballProvider pour les tests.
- [ ] Métriques Prometheus football_api_requests_total{status} et latence.

## ✔️ Critères d'acceptation

- [ ] Étant donné un timeout, alors 3 tentatives puis erreur ProviderUnavailable.
- [ ] Étant donné 5 échecs, alors circuit ouvert 60 s.
- [ ] Étant donné un statut externe 'FT', alors finished.
- [ ] Étant donné une clé API, alors absente des logs.

## 🧪 Tests à écrire

- [ ] Unitaire : mapper de statuts (tous cas).
- [ ] Unitaire : circuit breaker (états).
- [ ] Intégration avec nock : retries.
- [ ] Unitaire : masquage de clé.

## 📚 Références

- CDC Backend §11.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
