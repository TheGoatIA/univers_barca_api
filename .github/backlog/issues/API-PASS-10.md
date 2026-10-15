> **API-PASS-10** · Données · Priorité **P0** · Taille **S** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Le CDC §4.3 définit user_badges (id, user_id, badge_id, unlocked_at). Le mobile a en plus besoin de la progression (2 / 5) et de savoir si l'animation « Nouveau badge ! » (P-06) a déjà été vue.

## ✅ Objectif

Une collection UserBadge avec progression et accusé de lecture.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `P-03` — Grille de badges
_Module : Culé Passport_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-03_grille-de-badges__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-03_grille-de-badges__phone_light.webp?raw=true' width='230' alt='P-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-03_grille-de-badges__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-03_grille-de-badges__phone_dark.webp?raw=true' width='230' alt='P-03 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-03_grille-de-badges__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-03_grille-de-badges__tablet_light.webp?raw=true' width='330' alt='P-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-03_grille-de-badges__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-03_grille-de-badges__tablet_dark.webp?raw=true' width='330' alt='P-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Badges » · « 9 débloqués sur 24 » · « Tous » · « Débloqués » · « À débloquer » · « Premier match suivi » · « Série de 10 jours » · « Série de 100 jours » · « GOAT voter » · « Niveau La Masia » · « Pile à l’heure » · « Membre d’un groupe » · « Fantasy top 10 % » · « Artiste IA » · « Quiz parfait » · « Agenda synchronisé » · « Polyglotte »

**Composants repérés** : `chip`

</details>

**Issues liées sur ce même écran :** [API-PASS-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-07%5D%22) · [API-PASS-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-08%5D%22) · [API-PASS-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-12%5D%22) · [API-PASS-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-13%5D%22) · [API-PASS-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-25%5D%22) · [API-PASS-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-26%5D%22) · [API-PASS-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-27%5D%22) · [API-PASS-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-28%5D%22) · [API-PASS-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-30%5D%22) · [API-PASS-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-31%5D%22) · [API-PASS-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-32%5D%22) · [API-PASS-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-33%5D%22) · [MOB-P-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-01%5D%22) · [MOB-P-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-02%5D%22) · [MOB-P-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-03%5D%22) · [MOB-P-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-04%5D%22) · [MOB-P-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-08%5D%22) · [MOB-P-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-09%5D%22) · [MOB-P-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-20%5D%22) · [MOB-P-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-21%5D%22)

#### `P-04` — Badge débloqué — détail
_Module : Culé Passport_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-04_badge-debloque-detail__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-04_badge-debloque-detail__phone_light.webp?raw=true' width='230' alt='P-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-04_badge-debloque-detail__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-04_badge-debloque-detail__phone_dark.webp?raw=true' width='230' alt='P-04 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-04_badge-debloque-detail__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-04_badge-debloque-detail__tablet_light.webp?raw=true' width='330' alt='P-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-04_badge-debloque-detail__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-04_badge-debloque-detail__tablet_dark.webp?raw=true' width='330' alt='P-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Badge » · « Débloqué le 12 oct. 2026 » · « Série de 10 jours » · « Tu as joué au moins un jeu quotidien 10 jours de suite. Continue pour viser les 100 ! » · « Prochain palier » · « 12 / 100 jours » · « Partager ce badge »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-PASS-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-07%5D%22) · [API-PASS-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-08%5D%22) · [API-PASS-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-09%5D%22) · [API-PASS-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-13%5D%22) · [API-PASS-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-14%5D%22) · [API-PASS-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-23%5D%22) · [API-PASS-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-31%5D%22) · [API-PASS-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-32%5D%22) · [MOB-P-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-09%5D%22) · [MOB-P-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-10%5D%22) · [MOB-P-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-18%5D%22)

#### `P-06` — Déblocage d’un badge
_Module : Culé Passport_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-06_deblocage-d-un-badge__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-06_deblocage-d-un-badge__phone_light.webp?raw=true' width='230' alt='P-06 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-06_deblocage-d-un-badge__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-06_deblocage-d-un-badge__phone_dark.webp?raw=true' width='230' alt='P-06 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-06_deblocage-d-un-badge__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-06_deblocage-d-un-badge__tablet_light.webp?raw=true' width='330' alt='P-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-06_deblocage-d-un-badge__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-06_deblocage-d-un-badge__tablet_dark.webp?raw=true' width='330' alt='P-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Quiz » · « Nouveau badge ! » · « GOAT voter » · « Tu as participé à ton premier duel du comparateur GOAT. » · « Super ! » · « Voir mes badges »

**Composants repérés** : `btn`, `modal`

</details>

**Issues liées sur ce même écran :** [API-FANT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-33%5D%22) · [API-PASS-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-03%5D%22) · [API-PASS-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-08%5D%22) · [API-PASS-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-09%5D%22) · [API-PASS-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-14%5D%22) · [API-PASS-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-28%5D%22) · [API-PASS-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-31%5D%22) · [API-PASS-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-32%5D%22) · [MOB-P-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-12%5D%22)

## 📐 Règles de gestion

- UserBadge {userId, badgeCode, unlockedAt (null si en progression), progress {current, target}, seenAt, sharedAt, source (event|reconcile|admin)} ; unique {userId, badgeCode}.
- Les lignes en progression sont créées à la première évolution du compteur (pas pour les 24 badges d'office).
- seenAt est nul tant que la modale de déblocage n'a pas été acquittée ; il permet de rejouer la modale si l'app était fermée.
- Le doc UserProgress.badges[] (copie) est mis à jour dans la même opération.
- Retrait par un administrateur (révocation) : unlockedAt=null, revokedAt, reason ; audité.
- Suppression RGPD : suppression de toutes les lignes.

## 🛠️ Tâches

- [ ] Créer src/models/user-badge.model.ts avec les index unique {userId:1, badgeCode:1}, {userId:1, unlockedAt:-1}, {userId:1, seenAt:1}.
- [ ] Fonctions : unlockBadge, bumpProgress, markSeen, listForUser.
- [ ] Migration : UserProgress.badges[] -> UserBadge (idempotente).
- [ ] Maintenir la copie dénormalisée.
- [ ] Types TypeScript.
- [ ] Exporter dans models/index.ts.
- [ ] Swagger : UserBadge.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné un déblocage, alors seenAt est null.
- [ ] Étant donné markSeen, alors seenAt est fixé et plus renvoyé dans unseen.
- [ ] Étant donné la migration rejouée, alors pas de doublon.
- [ ] Étant donné une révocation, alors le badge réapparaît verrouillé.
- [ ] Étant donné deux déblocages concurrents, alors une seule ligne.

## 🧪 Tests à écrire

- [ ] Intégration : unicité.
- [ ] Intégration : migration.
- [ ] Intégration : copie dénormalisée cohérente.
- [ ] Intégration : markSeen.
- [ ] Intégration : révocation.

## 🔗 Dépendances

À réaliser après : `API-PASS-07` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §4.3

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
