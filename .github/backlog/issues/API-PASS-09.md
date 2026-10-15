> **API-PASS-09** · Fonctionnel · Priorité **P0** · Taille **L** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Les badges se débloquent à la suite d'actions dans tous les modules. Le moteur évalue, pour chaque événement, uniquement les badges concernés, calcule la progression (12 / 100) et débloque une seule fois.

## ✅ Objectif

BadgeEngine.evaluate(userId, event, state) : liste des badges débloqués et progression mise à jour.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `P-04` — Badge débloqué — détail
_Module : Culé Passport_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-04_badge-debloque-detail__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-04_badge-debloque-detail__phone_light.webp?raw=true' width='230' alt='P-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-04_badge-debloque-detail__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-04_badge-debloque-detail__phone_dark.webp?raw=true' width='230' alt='P-04 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-04_badge-debloque-detail__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-04_badge-debloque-detail__tablet_light.webp?raw=true' width='330' alt='P-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-04_badge-debloque-detail__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-04_badge-debloque-detail__tablet_dark.webp?raw=true' width='330' alt='P-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Badge » · « Débloqué le 12 oct. 2026 » · « Série de 10 jours » · « Tu as joué au moins un jeu quotidien 10 jours de suite. Continue pour viser les 100 ! » · « Prochain palier » · « 12 / 100 jours » · « Partager ce badge »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-PASS-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-07%5D%22) · [API-PASS-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-08%5D%22) · [API-PASS-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-10%5D%22) · [API-PASS-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-13%5D%22) · [API-PASS-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-14%5D%22) · [API-PASS-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-23%5D%22) · [API-PASS-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-31%5D%22) · [API-PASS-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-32%5D%22) · [MOB-P-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-09%5D%22) · [MOB-P-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-10%5D%22) · [MOB-P-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-18%5D%22)

#### `P-05` — Badge verrouillé — progression
_Module : Culé Passport_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-05_badge-verrouille-progression__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-05_badge-verrouille-progression__phone_light.webp?raw=true' width='230' alt='P-05 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-05_badge-verrouille-progression__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-05_badge-verrouille-progression__phone_dark.webp?raw=true' width='230' alt='P-05 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-05_badge-verrouille-progression__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-05_badge-verrouille-progression__tablet_light.webp?raw=true' width='330' alt='P-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-05_badge-verrouille-progression__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-05_badge-verrouille-progression__tablet_dark.webp?raw=true' width='330' alt='P-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Badge » · « À débloquer » · « Niveau La Masia » · « Atteins le niveau 5 du quiz adaptatif pour obtenir ce badge d'exception. » · « Niveau actuel » · « 2 / 5 » · « Jouer au quiz »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-PASS-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-05%5D%22) · [API-PASS-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-07%5D%22) · [API-PASS-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-08%5D%22) · [API-PASS-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-13%5D%22) · [API-PASS-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-31%5D%22) · [API-PASS-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-32%5D%22) · [MOB-P-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-09%5D%22) · [MOB-P-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-11%5D%22)

#### `P-06` — Déblocage d’un badge
_Module : Culé Passport_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-06_deblocage-d-un-badge__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-06_deblocage-d-un-badge__phone_light.webp?raw=true' width='230' alt='P-06 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-06_deblocage-d-un-badge__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-06_deblocage-d-un-badge__phone_dark.webp?raw=true' width='230' alt='P-06 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-06_deblocage-d-un-badge__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-06_deblocage-d-un-badge__tablet_light.webp?raw=true' width='330' alt='P-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-06_deblocage-d-un-badge__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-06_deblocage-d-un-badge__tablet_dark.webp?raw=true' width='330' alt='P-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Quiz » · « Nouveau badge ! » · « GOAT voter » · « Tu as participé à ton premier duel du comparateur GOAT. » · « Super ! » · « Voir mes badges »

**Composants repérés** : `btn`, `modal`

</details>

**Issues liées sur ce même écran :** [API-FANT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-33%5D%22) · [API-PASS-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-03%5D%22) · [API-PASS-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-08%5D%22) · [API-PASS-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-10%5D%22) · [API-PASS-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-14%5D%22) · [API-PASS-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-28%5D%22) · [API-PASS-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-31%5D%22) · [API-PASS-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-32%5D%22) · [MOB-P-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-12%5D%22)

## 📐 Règles de gestion

- Index d'événements : pour chaque type d'événement, la liste des badges candidats est pré-calculée (Map en mémoire rechargée à la modification du catalogue) afin d'éviter d'évaluer 24 badges à chaque événement.
- Déblocage idempotent : upsert UserBadge {userId, badgeCode} avec $setOnInsert unlockedAt ; unique {userId,badgeCode} ; jamais de retrait automatique (même si la série retombe).
- Progression stockée pour les conditions 'counter'/'distinct' (current, target) ; progress.current est plafonné à target.
- Un événement peut débloquer plusieurs badges (ex. streak_10 et first_guess_won) : tous renvoyés dans l'ordre order.
- Déblocage en rattrapage : la tâche de réconciliation réévalue les badges de tous les utilisateurs actifs si le catalogue change.
- Chaque déblocage écrit une ligne UserActivity type 'badge.unlocked' (0 point, ou points bonus si défini) et incrémente le compteur de badges.

## 🛠️ Tâches

- [ ] Créer src/services/gamification/badge-engine.ts : evaluate, evaluateAll(userId), computeProgress(badge, state).
- [ ] Implémenter les évaluateurs par kind (counter, event, level, distinct) dans src/services/gamification/conditions/*.ts.
- [ ] Charger/mettre en cache le catalogue (60 s + invalidation sur PATCH).
- [ ] Écrire UserBadge via bulkWrite upsert.
- [ ] Alimenter meta.newBadges (AsyncLocalStorage).
- [ ] Émettre l'événement 'badge.unlocked' vers NOTIF (notif-declencheur-badge-histoire).
- [ ] Métrique badges_unlocked_total{code}.
- [ ] Tests de chaque kind avec fixtures.

## ✔️ Critères d'acceptation

- [ ] Étant donné currentStreak passant à 10, alors streak_10 est débloqué une seule fois.
- [ ] Étant donné un second passage à 10 après une rupture, alors aucun nouveau déblocage.
- [ ] Étant donné un quiz 10/10, alors perfect_quiz est débloqué ; avec 8/10 la progression reste 8/10.
- [ ] Étant donné trois langues utilisées, alors polyglot est débloqué.
- [ ] Étant donné un badge désactivé, alors il n'est plus attribué.

## 🧪 Tests à écrire

- [ ] Unitaire : chaque kind de condition.
- [ ] Unitaire : plafonnement de la progression.
- [ ] Intégration : déblocage multiple ordonné.
- [ ] Intégration : idempotence concurrente (20 requêtes).
- [ ] Intégration : réévaluation après changement de catalogue.

## 🔗 Dépendances

À réaliser après : `API-PASS-07` · `API-PASS-10` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §2.11
- CDC Backend §3.12

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
