> **API-PASS-22** · API · Priorité **P1** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

P-11 montre Aïcha_N, « Yaoundé · Culé depuis 2015 », 1 420 points, série max et nombre de badges, avec la mention « Seules la ville et les statistiques publiques sont visibles. Aucune position exacte. ». GET /users/:id/public est déjà spécifié par le groupe AUTH (profile-public-private) ; cette issue l'enrichit.

## ✅ Objectif

Ajouter points, série max et badges à la projection publique sans fuite de données privées.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `P-11` — Profil d’un autre culé
_Module : Culé Passport_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-11_profil-d-un-autre-cule__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-11_profil-d-un-autre-cule__phone_light.webp?raw=true' width='230' alt='P-11 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-11_profil-d-un-autre-cule__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-11_profil-d-un-autre-cule__phone_dark.webp?raw=true' width='230' alt='P-11 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-11_profil-d-un-autre-cule__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-11_profil-d-un-autre-cule__tablet_light.webp?raw=true' width='330' alt='P-11 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-11_profil-d-un-autre-cule__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-11_profil-d-un-autre-cule__tablet_dark.webp?raw=true' width='330' alt='P-11 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Profil » · « Aïcha_N » · « 🇨🇲 Yaoundé · Culé depuis 2015 » · « 1 420 » · « Points » · « Série max » · « Badges » · « Défier au quiz » · « Signaler » · « Seules la ville et les statistiques publiques sont visibles. Aucune position exacte. »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-PASS-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-27%5D%22) · [API-PASS-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-29%5D%22) · [API-PASS-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-32%5D%22) · [MOB-P-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-01%5D%22) · [MOB-P-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-02%5D%22) · [MOB-P-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-17%5D%22) · [MOB-P-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-19%5D%22)

## 📐 Règles de gestion

- Projection publique : {id, displayName, avatarKey, countryCode?, city?, supporterSince, points (totalPoints), bestStreak, badgeCount, level{value,label}} ; la visibilité pays/ville suit mapVisibility (AUTH).
- Jamais : email, locale, coordonnées, position, date de naissance, statut, progression par source, historique.
- Comptes suspended/banned/deleted ou ayant bloqué le demandeur (masquer utilisateur, COMM) : 404 PROFILE_NOT_FOUND (message « Profil indisponible » côté mobile).
- Cache Redis 5 min par profil ; Cache-Control: private, max-age=60.
- Rate limit 60 req/min/utilisateur contre le scraping.
- 'Défier au quiz' et 'Signaler' ne sont pas des champs mais des actions des modules Quiz et Modération.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/users/:id/public` | Profil public | — | {success:true,data:{id,displayName:'Aïcha_N',city:'Yaoundé',countryCode:'CM',supporterSince:2015,points:1420,bestStreak:31,badgeCount:14}} |

## 🛠️ Tâches

- [ ] Étendre le service profile public (AUTH) avec un enricher passport (UserProgress.totalPoints/bestStreak, UserBadge.count).
- [ ] Ajouter les index nécessaires.
- [ ] Vérifier la visibilité et le blocage avant projection.
- [ ] Cache Redis public:{userId} 5 min, invalidation sur recordActivity (débounce 60 s).
- [ ] Swagger : PublicProfile.
- [ ] Test de snapshot : liste blanche stricte des champs.
- [ ] Test de sécurité : suspendu, banni, bloqué.
- [ ] Rate limiter.

## ✔️ Critères d'acceptation

- [ ] Étant donné un profil actif, alors la réponse contient points, bestStreak, badgeCount.
- [ ] Étant donné mapVisibility='hidden', alors ni pays ni ville.
- [ ] Étant donné un utilisateur banni, alors 404.
- [ ] Étant donné le snapshot, alors aucun champ hors liste blanche.
- [ ] Étant donné un blocage mutuel, alors 404.

## 🧪 Tests à écrire

- [ ] Intégration : projection.
- [ ] Sécurité : snapshot liste blanche.
- [ ] Intégration : visibilité ville.
- [ ] Intégration : blocage.
- [ ] Intégration : cache.

## 🔗 Dépendances

À réaliser après : `API-PASS-09` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §2.8
- CDC Global §2.11
- CDC Global §2.13

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
