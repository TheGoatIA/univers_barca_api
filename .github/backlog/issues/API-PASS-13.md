> **API-PASS-13** · API · Priorité **P0** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

La grille P-03 filtre Tous / Débloqués / À débloquer ; le détail débloqué P-04 affiche « Débloqué le 12 oct. 2026 » et « Prochain palier 12 / 100 jours » ; le détail verrouillé P-05 affiche « Niveau actuel 2 / 5 » et « Jouer au quiz ».

## ✅ Objectif

Deux endpoints fusionnant catalogue et état utilisateur.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `P-03` — Grille de badges
_Module : Culé Passport_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-03_grille-de-badges__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-03_grille-de-badges__phone_light.webp?raw=true' width='230' alt='P-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-03_grille-de-badges__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-03_grille-de-badges__phone_dark.webp?raw=true' width='230' alt='P-03 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-03_grille-de-badges__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-03_grille-de-badges__tablet_light.webp?raw=true' width='330' alt='P-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-03_grille-de-badges__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-03_grille-de-badges__tablet_dark.webp?raw=true' width='330' alt='P-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Badges » · « 9 débloqués sur 24 » · « Tous » · « Débloqués » · « À débloquer » · « Premier match suivi » · « Série de 10 jours » · « Série de 100 jours » · « GOAT voter » · « Niveau La Masia » · « Pile à l’heure » · « Membre d’un groupe » · « Fantasy top 10 % » · « Artiste IA » · « Quiz parfait » · « Agenda synchronisé » · « Polyglotte »

**Composants repérés** : `chip`

</details>

**Issues liées sur ce même écran :** [API-PASS-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-07%5D%22) · [API-PASS-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-08%5D%22) · [API-PASS-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-10%5D%22) · [API-PASS-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-12%5D%22) · [API-PASS-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-25%5D%22) · [API-PASS-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-26%5D%22) · [API-PASS-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-27%5D%22) · [API-PASS-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-28%5D%22) · [API-PASS-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-30%5D%22) · [API-PASS-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-31%5D%22) · [API-PASS-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-32%5D%22) · [API-PASS-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-33%5D%22) · [MOB-P-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-01%5D%22) · [MOB-P-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-02%5D%22) · [MOB-P-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-03%5D%22) · [MOB-P-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-04%5D%22) · [MOB-P-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-08%5D%22) · [MOB-P-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-09%5D%22) · [MOB-P-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-20%5D%22) · [MOB-P-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-21%5D%22)

#### `P-04` — Badge débloqué — détail
_Module : Culé Passport_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-04_badge-debloque-detail__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-04_badge-debloque-detail__phone_light.webp?raw=true' width='230' alt='P-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-04_badge-debloque-detail__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-04_badge-debloque-detail__phone_dark.webp?raw=true' width='230' alt='P-04 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-04_badge-debloque-detail__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-04_badge-debloque-detail__tablet_light.webp?raw=true' width='330' alt='P-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-04_badge-debloque-detail__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-04_badge-debloque-detail__tablet_dark.webp?raw=true' width='330' alt='P-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Badge » · « Débloqué le 12 oct. 2026 » · « Série de 10 jours » · « Tu as joué au moins un jeu quotidien 10 jours de suite. Continue pour viser les 100 ! » · « Prochain palier » · « 12 / 100 jours » · « Partager ce badge »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-PASS-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-07%5D%22) · [API-PASS-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-08%5D%22) · [API-PASS-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-09%5D%22) · [API-PASS-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-10%5D%22) · [API-PASS-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-14%5D%22) · [API-PASS-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-23%5D%22) · [API-PASS-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-31%5D%22) · [API-PASS-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-32%5D%22) · [MOB-P-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-09%5D%22) · [MOB-P-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-10%5D%22) · [MOB-P-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-18%5D%22)

#### `P-05` — Badge verrouillé — progression
_Module : Culé Passport_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-05_badge-verrouille-progression__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-05_badge-verrouille-progression__phone_light.webp?raw=true' width='230' alt='P-05 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-05_badge-verrouille-progression__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-05_badge-verrouille-progression__phone_dark.webp?raw=true' width='230' alt='P-05 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-05_badge-verrouille-progression__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-05_badge-verrouille-progression__tablet_light.webp?raw=true' width='330' alt='P-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-05_badge-verrouille-progression__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-05_badge-verrouille-progression__tablet_dark.webp?raw=true' width='330' alt='P-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Badge » · « À débloquer » · « Niveau La Masia » · « Atteins le niveau 5 du quiz adaptatif pour obtenir ce badge d'exception. » · « Niveau actuel » · « 2 / 5 » · « Jouer au quiz »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-PASS-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-05%5D%22) · [API-PASS-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-07%5D%22) · [API-PASS-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-08%5D%22) · [API-PASS-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-09%5D%22) · [API-PASS-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-31%5D%22) · [API-PASS-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-32%5D%22) · [MOB-P-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-09%5D%22) · [MOB-P-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-11%5D%22)

## 📐 Règles de gestion

- GET /users/me/badges?state=all|unlocked|locked : [{code,label,description,icon,category,state:'unlocked'|'locked',unlockedAt,progress:{current,target}|null,isExceptional}] ; total et unlockedCount en méta.
- GET /users/me/badges/:code : ajoute nextTier {code,label,progress:{current,target}} (palier suivant via nextBadgeCode), action {kind:'deeplink',target:'quiz',label:'Jouer au quiz'} (badge d'exception P-05), shareable:boolean.
- Pour un badge de type counter, progress.current = valeur actuelle du compteur ; pour quiz_level_5, current = quizLevel (2) et target = 5.
- Badge cachés non débloqués : 404 BADGE_NOT_FOUND ; badge inconnu : 404.
- Pas de progression négative ni supérieure à target.
- Cache privé 60 s.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/users/me/badges` | Badges avec état | ?state=all | {success:true,data:{items:[{code,state:'unlocked',unlockedAt}],unlockedCount:9,total:24}} |
| `GET` | `/api/v1/users/me/badges/:code` | Détail d'un badge | — | {success:true,data:{code:'streak_10',state:'unlocked',unlockedAt,nextTier:{code:'streak_100',progress:{current:12,target:100}}}} |

## 🛠️ Tâches

- [ ] Controller badges.listMine / badges.getMine + routes.
- [ ] Service badges-view.service.ts : fusion Badge x UserBadge x compteurs (computeProgress).
- [ ] Libellés i18n selon locale.
- [ ] Actions deep link : table src/services/gamification/actions.ts (quiz -> 'quiz', fantasy -> 'fantasy', goat -> 'goat', group -> 'community/groups').
- [ ] Filtre state côté serveur (pagination non requise : 24).
- [ ] Swagger : UserBadgeView.
- [ ] Cache Redis.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné 9 badges débloqués, alors state=unlocked retourne 9 éléments.
- [ ] Étant donné quiz_level_5 non débloqué avec quizLevel 2, alors progress 2/5 et action quiz.
- [ ] Étant donné streak_10 débloqué, alors nextTier.code='streak_100' avec 12/100.
- [ ] Étant donné un badge caché non débloqué, alors 404.
- [ ] Étant donné state=foo, alors 422.

## 🧪 Tests à écrire

- [ ] Intégration : listes filtrées.
- [ ] Intégration : détail débloqué avec nextTier.
- [ ] Intégration : détail verrouillé avec action.
- [ ] Intégration : badge caché.
- [ ] Intégration : localisation.

## 🔗 Dépendances

À réaliser après : `API-PASS-09` · `API-PASS-12` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §2.11

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
