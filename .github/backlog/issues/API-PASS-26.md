> **API-PASS-26** · Infrastructure · Priorité **P1** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Les compteurs dénormalisés (totalPoints, série, badges[]) peuvent dériver après une panne, un rejeu ou un changement de catalogue. Un job de réparation garantit l'invariant « totaux = journal ».

## ✅ Objectif

Un processor BullMQ idempotent qui détecte et corrige les écarts.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `P-01` — Passport — vue d’ensemble
_Module : Culé Passport_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__phone_light.webp?raw=true' width='230' alt='P-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__phone_dark.webp?raw=true' width='230' alt='P-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__tablet_light.webp?raw=true' width='330' alt='P-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__tablet_dark.webp?raw=true' width='330' alt='P-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Culé Passport » · « Boris_Culé » · « 🇨🇲 Yaoundé · Culé depuis 2018 » · « Niveau Culé » · « 12 j » · « 2 340 » · « Points » · « Série » · « Badges » · « 18 432e » · « Prochains badges » · « Voir tout » · « Série de 100 jours » · « 12 / 100 » · « Quiz parfait » · « 8 / 10 » · « Mes derniers badges » · « 9 / 24 » · « Premier match suivi » · « Série de 10 jours » · « GOAT voter » · « Statistiques détaillées » · « Quiz, Guess the Player, Fantasy » · « Ma série » · « Calendrier d’activité » · « Paramètres » · « Langue, thème, confidentialité »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-33%5D%22) · [API-PASS-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-01%5D%22) · [API-PASS-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-02%5D%22) · [API-PASS-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-03%5D%22) · [API-PASS-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-04%5D%22) · [API-PASS-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-05%5D%22) · [API-PASS-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-06%5D%22) · [API-PASS-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-11%5D%22) · [API-PASS-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-17%5D%22) · [API-PASS-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-20%5D%22) · [API-PASS-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-23%5D%22) · [API-PASS-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-24%5D%22) · [API-PASS-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-25%5D%22) · [API-PASS-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-27%5D%22) · [API-PASS-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-28%5D%22) · [API-PASS-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-29%5D%22) · [API-PASS-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-30%5D%22) · [API-PASS-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-31%5D%22) · [API-PASS-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-32%5D%22) · [API-PASS-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-33%5D%22) · [MOB-P-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-01%5D%22) · [MOB-P-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-02%5D%22) · [MOB-P-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-03%5D%22) · [MOB-P-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-04%5D%22) · [MOB-P-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-05%5D%22) · [MOB-P-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-06%5D%22) · [MOB-P-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-18%5D%22) · [MOB-P-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-20%5D%22) · [MOB-P-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-21%5D%22)

#### `P-03` — Grille de badges
_Module : Culé Passport_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-03_grille-de-badges__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-03_grille-de-badges__phone_light.webp?raw=true' width='230' alt='P-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-03_grille-de-badges__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-03_grille-de-badges__phone_dark.webp?raw=true' width='230' alt='P-03 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-03_grille-de-badges__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-03_grille-de-badges__tablet_light.webp?raw=true' width='330' alt='P-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-03_grille-de-badges__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-03_grille-de-badges__tablet_dark.webp?raw=true' width='330' alt='P-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Badges » · « 9 débloqués sur 24 » · « Tous » · « Débloqués » · « À débloquer » · « Premier match suivi » · « Série de 10 jours » · « Série de 100 jours » · « GOAT voter » · « Niveau La Masia » · « Pile à l’heure » · « Membre d’un groupe » · « Fantasy top 10 % » · « Artiste IA » · « Quiz parfait » · « Agenda synchronisé » · « Polyglotte »

**Composants repérés** : `chip`

</details>

**Issues liées sur ce même écran :** [API-PASS-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-07%5D%22) · [API-PASS-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-08%5D%22) · [API-PASS-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-10%5D%22) · [API-PASS-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-12%5D%22) · [API-PASS-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-13%5D%22) · [API-PASS-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-25%5D%22) · [API-PASS-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-27%5D%22) · [API-PASS-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-28%5D%22) · [API-PASS-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-30%5D%22) · [API-PASS-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-31%5D%22) · [API-PASS-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-32%5D%22) · [API-PASS-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-33%5D%22) · [MOB-P-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-01%5D%22) · [MOB-P-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-02%5D%22) · [MOB-P-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-03%5D%22) · [MOB-P-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-04%5D%22) · [MOB-P-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-08%5D%22) · [MOB-P-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-09%5D%22) · [MOB-P-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-20%5D%22) · [MOB-P-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-21%5D%22)

## 📐 Règles de gestion

- Planification : tous les jours 03:45 Europe/Madrid, lots de 1 000 utilisateurs (curseur), concurrence 2.
- Contrôles : totalPoints = somme(UserActivity.points) ; bestStreak >= currentStreak ; série recalculée depuis les dayKey du journal ; UserProgress.badges[] = UserBadge débloqués.
- Réévaluation des badges (evaluateAll) uniquement pour les utilisateurs actifs sur 30 jours ou si le catalogue a changé (version).
- Les corrections sont journalisées (diff) et comptées ; un écart > 1 % sur un lot déclenche une alerte.
- Idempotent : second passage sans écart ne modifie rien.
- Mode --dry-run (script) pour diagnostic.

## 🛠️ Tâches

- [ ] Processor src/jobs/processors/passport-reconcile.ts (file 'gamification').
- [ ] Cron dans scheduler.ts.
- [ ] Agrégation $group sur UserActivity par userId (lot) pour les sommes.
- [ ] Fonction repairUser(userId) réutilisable (endpoint admin recompute).
- [ ] Métriques passport_reconcile_diffs_total, durée.
- [ ] Script npm run gamification:reconcile -- --dry-run.
- [ ] Runbook docs/runbooks/passport.md.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné un totalPoints erroné de +100, alors le job le corrige et journalise le diff.
- [ ] Étant donné aucun écart, alors zéro écriture.
- [ ] Étant donné un nouveau badge au catalogue, alors les utilisateurs éligibles le reçoivent.
- [ ] Étant donné --dry-run, alors aucune écriture.
- [ ] Étant donné 100 000 utilisateurs, alors < 10 min.

## 🧪 Tests à écrire

- [ ] Intégration : correction d'écart.
- [ ] Intégration : idempotence.
- [ ] Intégration : réévaluation catalogue.
- [ ] Intégration : dry-run.
- [ ] Performance : 100 000 utilisateurs.

## 🔗 Dépendances

À réaliser après : `API-PASS-03` · `API-PASS-09` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §7.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
