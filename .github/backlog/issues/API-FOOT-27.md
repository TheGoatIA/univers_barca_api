> **API-FOOT-27** · Fonctionnel · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

Pendant les matchs, score, minute et événements sont mis à jour pour la carte « EN DIRECT 67' · 2 – 1 ».

## ✅ Objectif

Polling adaptatif écrivant Mongo et un snapshot Redis.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `C-04` — Dashboard — match en direct
_Module : Accueil dashboard_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-04_dashboard-match-en-direct__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-04_dashboard-match-en-direct__phone_light.webp?raw=true' width='230' alt='C-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-04_dashboard-match-en-direct__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-04_dashboard-match-en-direct__phone_dark.webp?raw=true' width='230' alt='C-04 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-04_dashboard-match-en-direct__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-04_dashboard-match-en-direct__tablet_light.webp?raw=true' width='330' alt='C-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-04_dashboard-match-en-direct__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-04_dashboard-match-en-direct__tablet_dark.webp?raw=true' width='330' alt='C-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Salut Boris 👋 » · « Liga · J11 » · « EN DIRECT 67' » · « Barça » · « 2 – 1 » · « Camp Nou » · « Real Madrid » · « Suivre le live » · « Résolu » · « Guess the Player » · « Trouvé en 3 essais » · « Niveau 2 » · « Quiz du jour » · « 10 questions · Culé » · « oct. » · « Aujourd'hui dans l'histoire · 2011 » · « Le Barça de Guardiola enchaîne un 4-0 mémorable en Ligue des champions. » · « Lecture 1 min » · « Lire l'anecdote » · « jours de suite » · « Record personnel : 27 jours » · « Ton XI Fantasy · J11 » · « 4-3-3 · 62 pts » · « Ferme dans 1 j 4 h » · « Modifier » · « Classement amis » · « sur 12 »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FOOT-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-15%5D%22) · [API-FOOT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-22%5D%22) · [API-FOOT-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-29%5D%22) · [API-FOOT-52](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-52%5D%22) · [MOB-C-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-02%5D%22) · [MOB-C-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-03%5D%22) · [MOB-C-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-09%5D%22) · [MOB-C-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-10%5D%22) · [MOB-C-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-12%5D%22) · [MOB-C-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-16%5D%22) · [MOB-C-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-21%5D%22) · [MOB-C-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-22%5D%22) · [MOB-C-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-25%5D%22) · [MOB-C-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-26%5D%22) · [MOB-C-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-27%5D%22)

## 📐 Règles de gestion

- Intervalle : 15 s en match, 60 s à la mi-temps, 5 min hors action ; adaptatif si quota critique (60 s).
- Passage scheduled→live au premier statut 1H ; →finished au coup de sifflet final avec déclenchement d'un dernier sync-lineups/events complet.
- Les événements sont dédupliqués par (minute,type,playerExternalRef).
- Snapshot Redis live:match:{id} TTL 120 s consommé par /matches/live.
- Fin de match : invalidation caches match, forme, confrontations, calendrier.

## 🛠️ Tâches

- [ ] Processor sync-live qui se ré-enfileure avec delay.
- [ ] Service live-snapshot.service.ts.
- [ ] Détection de fin de match + job post-match (hook pour compute-fantasy-scores futur).
- [ ] Déduplication d'événements.
- [ ] Pub/Sub Redis match:updated (pour SSE futur).
- [ ] Métriques latence de fraîcheur.
- [ ] Tests avec FakeProvider scénarisé.

## ✔️ Critères d'acceptation

- [ ] Étant donné un but externe, alors un seul événement créé même si lu 3 fois.
- [ ] Étant donné statut FT, alors match finished et caches invalidés.
- [ ] Étant donné quota critique, alors intervalle 60 s.

## 🧪 Tests à écrire

- [ ] Intégration scénario complet 90 minutes.
- [ ] Unitaire : choix d'intervalle.
- [ ] Unitaire : dédup.
- [ ] Intégration : invalidation.

## 🔗 Dépendances

À réaliser après : `API-FOOT-25` · `API-FOOT-26` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.2
- CDC Backend §4.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
