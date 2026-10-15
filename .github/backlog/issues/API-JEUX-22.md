> **API-JEUX-22** · Infrastructure · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Recalculer un classement mondial par agrégation Mongo à chaque appel ne tient pas la charge d'un soir de match. Les ZSET Redis offrent rang et voisinage en O(log N).

## ✅ Objectif

Des sorted sets par période alimentés par les évènements de points, reconstructibles depuis le ledger.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `E-13` — Classement mondial
_Module : Quiz adaptatif_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-13_classement-mondial__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-13_classement-mondial__phone_light.webp?raw=true' width='230' alt='E-13 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-13_classement-mondial__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-13_classement-mondial__phone_dark.webp?raw=true' width='230' alt='E-13 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-13_classement-mondial__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-13_classement-mondial__tablet_light.webp?raw=true' width='330' alt='E-13 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-13_classement-mondial__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-13_classement-mondial__tablet_dark.webp?raw=true' width='330' alt='E-13 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Classements » · « Amis » · « Monde » · « Cette semaine » · « Ce mois » · « Depuis toujours » · « Sofía R. » · « 1 840 » · « Mamadou D. » · « 2 120 » · « Kevin M. » · « 1 710 » · « Lucía F. » · « 1 580 » · « Aïcha N. » · « 1 495 » · « Yann M. » · « 1 410 » · « · · · » · « Boris T. » · « Toi »

**Composants repérés** : `avatar`, `card`, `chip`

</details>

**Issues liées sur ce même écran :** [API-JEUX-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-21%5D%22) · [API-JEUX-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-32%5D%22) · [API-JEUX-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-33%5D%22) · [API-JEUX-37](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-37%5D%22) · [MOB-E-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-02%5D%22) · [MOB-E-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-03%5D%22) · [MOB-E-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-05%5D%22) · [MOB-E-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-25%5D%22) · [MOB-E-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-26%5D%22) · [MOB-E-32](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-32%5D%22) · [MOB-E-33](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-33%5D%22) · [MOB-E-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-34%5D%22)

#### `E-14` — Classement entre amis
_Module : Quiz adaptatif_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-14_classement-entre-amis__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-14_classement-entre-amis__phone_light.webp?raw=true' width='230' alt='E-14 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-14_classement-entre-amis__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-14_classement-entre-amis__phone_dark.webp?raw=true' width='230' alt='E-14 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-14_classement-entre-amis__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-14_classement-entre-amis__tablet_light.webp?raw=true' width='330' alt='E-14 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-14_classement-entre-amis__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/E/E-14_classement-entre-amis__tablet_dark.webp?raw=true' width='330' alt='E-14 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Classements » · « Amis » · « Monde » · « Ligue « Les Culés du bureau » » · « 6 membres · code » · « BARCA-4X7Q » · « Aïcha Ngono » · « 1 420 » · « Mamadou Diallo » · « 1 310 » · « Boris T. » · « Toi » · « 1 180 » · « Lucía Fernández » · « Kevin Mballa »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [API-JEUX-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-21%5D%22) · [API-JEUX-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-23%5D%22) · [API-JEUX-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-24%5D%22) · [MOB-E-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-25%5D%22) · [MOB-E-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-27%5D%22) · [MOB-E-33](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-33%5D%22) · [MOB-E-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-E-34%5D%22)

## 📐 Règles de gestion

- Clés : lb:world:week:{weekKey}, lb:world:month:{monthKey}, lb:world:all, lb:league:{leagueId}:week:{weekKey} ; membre = userId ; score composite (points, départage par ancienneté).
- Mise à jour sur l'évènement points.awarded (ZINCRBY) ; TTL des clés hebdo 14 jours après fin de semaine, mensuelles 62 jours.
- Reconstruction : script `npm run games:rebuild-leaderboards -- --period=week` (agrégation du ledger → pipeline ZADD par lots de 1 000) et job de vérification quotidien (échantillon de 100 utilisateurs).
- Si Redis est indisponible, le service retombe sur l'agrégation Mongo avec limite de 100 lignes et log warn (dégradation, pas d'erreur).
- Retrait d'un utilisateur supprimé/banni : ZREM sur toutes ses clés.
- Capacité cible : 100 000 membres par ZSET.

## 🛠️ Tâches

- [ ] Créer src/services/leaderboard.redis.ts (add, remove, top, rank, around).
- [ ] Souscrire à 'points.awarded' (EventEmitter interne) pour ZINCRBY monde + ligues de l'utilisateur.
- [ ] Script scripts/rebuild-leaderboards.ts (batch, reprise sur erreur).
- [ ] Job cron src/jobs/workers/leaderboard-verify.worker.ts.
- [ ] Retrait lors de DELETE /users/me (hook RGPD) et du bannissement.
- [ ] Configuration des TTL dans src/config/games.ts.
- [ ] Métriques game_leaderboard_rebuild_seconds, game_leaderboard_fallback_total.
- [ ] Tests avec ioredis-mock et Redis réel en CI.

## ✔️ Critères d'acceptation

- [ ] Étant donné un évènement points.awarded +60, alors le score du ZSET hebdo augmente de 60.
- [ ] Étant donné le ZSET vidé, quand je lance la reconstruction, alors le classement est identique à celui du ledger.
- [ ] Étant donné Redis coupé, alors /quiz/leaderboard répond 200 via Mongo (limit 100).
- [ ] Étant donné la suppression de mon compte, alors je n'apparais plus dans aucun classement.
- [ ] Étant donné la fin d'une semaine + 14 jours, alors la clé hebdomadaire a expiré.

## 🧪 Tests à écrire

- [ ] Intégration : incrément et lecture rang/voisins.
- [ ] Intégration : reconstruction idempotente.
- [ ] Intégration : fallback Mongo.
- [ ] Intégration : ZREM à la suppression.
- [ ] Performance : 100 000 membres, rang < 5 ms.

## 🔗 Dépendances

À réaliser après : `API-JEUX-20` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §5.6
- CDC Global §2.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
