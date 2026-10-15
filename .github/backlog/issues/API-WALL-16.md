> **API-WALL-16** · API · Priorité **P0** · Taille **S** · Phase 3 — Fonctionnalités avancées

## 🎯 Contexte

Le mobile interroge le statut toutes les 2 s (backoff x1,5, plafond 8 s, arrêt à 90 s) pour M-04 « En file d'attente · 64 % » et bascule vers M-05 quand le statut est READY ou vers M-13 en cas d'échec.

## ✅ Objectif

Un endpoint de lecture rapide, léger, qui reflète exactement l'état du worker.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `M-04` — Génération en cours
_Module : Wallpapers IA_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-04_generation-en-cours__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-04_generation-en-cours__phone_light.webp?raw=true' width='230' alt='M-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-04_generation-en-cours__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-04_generation-en-cours__phone_dark.webp?raw=true' width='230' alt='M-04 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-04_generation-en-cours__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-04_generation-en-cours__tablet_light.webp?raw=true' width='330' alt='M-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-04_generation-en-cours__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-04_generation-en-cours__tablet_dark.webp?raw=true' width='330' alt='M-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Génération » · « Més que » · « un club » · « Création… » · « On dessine ton wallpaper » · « Environ 15 secondes. Tu peux quitter l'écran : on te prévient quand c'est prêt. » · « En file d'attente » · « 64 % » · « Prévenez-moi quand c’est prêt »

**Composants repérés** : `btn`, `spinner`

</details>

**Issues liées sur ce même écran :** [API-WALL-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-01%5D%22) · [API-WALL-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-09%5D%22) · [API-WALL-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-10%5D%22) · [API-WALL-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-11%5D%22) · [API-WALL-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-21%5D%22) · [API-WALL-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-23%5D%22) · [API-WALL-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-30%5D%22) · [API-WALL-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-31%5D%22) · [MOB-M-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-01%5D%22) · [MOB-M-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-02%5D%22) · [MOB-M-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-09%5D%22) · [MOB-M-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-10%5D%22) · [MOB-M-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-11%5D%22) · [MOB-M-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-29%5D%22) · [MOB-M-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-30%5D%22) · [MOB-M-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-31%5D%22)

#### `M-05` — Wallpaper prêt
_Module : Wallpapers IA_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-05_wallpaper-pret__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-05_wallpaper-pret__phone_light.webp?raw=true' width='230' alt='M-05 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-05_wallpaper-pret__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-05_wallpaper-pret__phone_dark.webp?raw=true' width='230' alt='M-05 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-05_wallpaper-pret__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-05_wallpaper-pret__tablet_light.webp?raw=true' width='330' alt='M-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-05_wallpaper-pret__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-05_wallpaper-pret__tablet_dark.webp?raw=true' width='330' alt='M-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Ton wallpaper » · « Yamal » · « Généré » · « Yamal · Illustration · Jour de match » · « Appliquer comme fond d’écran » · « Enregistrer » · « Partager »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-WALL-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-01%5D%22) · [API-WALL-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-10%5D%22) · [API-WALL-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-11%5D%22) · [API-WALL-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-12%5D%22) · [API-WALL-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-13%5D%22) · [API-WALL-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-14%5D%22) · [API-WALL-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-15%5D%22) · [API-WALL-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-20%5D%22) · [API-WALL-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-21%5D%22) · [API-WALL-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-29%5D%22) · [API-WALL-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-30%5D%22) · [API-WALL-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-31%5D%22) · [MOB-M-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-01%5D%22) · [MOB-M-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-09%5D%22) · [MOB-M-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-11%5D%22) · [MOB-M-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-12%5D%22) · [MOB-M-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-15%5D%22) · [MOB-M-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-27%5D%22) · [MOB-M-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-29%5D%22) · [MOB-M-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-30%5D%22) · [MOB-M-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-31%5D%22)

#### `M-13` — Échec de la génération
_Module : Wallpapers IA_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-13_echec-de-la-generation__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-13_echec-de-la-generation__phone_light.webp?raw=true' width='230' alt='M-13 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-13_echec-de-la-generation__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-13_echec-de-la-generation__phone_dark.webp?raw=true' width='230' alt='M-13 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-13_echec-de-la-generation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-13_echec-de-la-generation__tablet_light.webp?raw=true' width='330' alt='M-13 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-13_echec-de-la-generation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-13_echec-de-la-generation__tablet_dark.webp?raw=true' width='330' alt='M-13 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Wallpapers IA » · « La génération a échoué » · « Un problème est survenu. Ta tentative n’est pas décomptée de ton quota. » · « Réessayer » · « Modifier ma demande »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-WALL-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-08%5D%22) · [API-WALL-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-10%5D%22) · [API-WALL-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-11%5D%22) · [API-WALL-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-15%5D%22) · [API-WALL-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-17%5D%22) · [API-WALL-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-30%5D%22) · [MOB-M-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-09%5D%22) · [MOB-M-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-22%5D%22) · [MOB-M-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-24%5D%22) · [MOB-M-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-30%5D%22) · [MOB-M-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-31%5D%22)

## 📐 Règles de gestion

- Réponse : {id, status PENDING | GENERATING | READY | REJECTED, progress 0..100, imageUrl|null, thumbUrl|null, moderationStatus ok | rejected | pending, failureReason, quotaRefunded, title, style, occasion, createdAt, readyAt, estimatedSeconds (15 par défaut, ajusté sur la moyenne glissante des 50 dernières générations)}.
- Position dans la file : `queuePosition` (null si GENERATING/final) pour le libellé « En file d'attente » ; calculé via le nombre de jobs waiting plus anciens (BullMQ getWaitingCount avec cache 2 s).
- Réponse < 50 ms p95 ; en-tête Cache-Control no-store ; ETag basé sur status+progress ; 304 si inchangé.
- 404 si le wallpaper n'existe pas, est supprimé ou appartient à un autre utilisateur ; limite de lecture 60 requêtes / minute / utilisateur.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/wallpapers/:id` | Statut et résultat | - | {success:true,data:{id,status,progress,imageUrl,thumbUrl,moderationStatus,failureReason,quotaRefunded,queuePosition,estimatedSeconds,createdAt}} |

## 🛠️ Tâches

- [ ] Ajouter la route GET /wallpapers/:id et `getWallpaper` au contrôleur.
- [ ] Utiliser `toPublicWallpaper()` et WallpaperUrlService.
- [ ] Calculer queuePosition avec cache Redis 2 s.
- [ ] Calculer estimatedSeconds depuis une moyenne maintenue dans Redis (EMA).
- [ ] Ajouter le limiteur de lecture.
- [ ] Gérer ETag/304.
- [ ] Documenter Swagger avec exemples des 4 statuts.

## ✔️ Critères d'acceptation

- [ ] Étant donné un job GENERATING à 64 %, alors la réponse contient progress 64 et imageUrl null.
- [ ] Étant donné un statut READY, alors imageUrl et thumbUrl signées sont renvoyées.
- [ ] Étant donné un id d'un autre utilisateur, alors 404.
- [ ] Étant donné aucun changement, alors un If-None-Match renvoie 304.

## 🧪 Tests à écrire

- [ ] Intégration : les 4 statuts.
- [ ] Sécurité : propriété.
- [ ] Intégration : ETag/304.
- [ ] Performance : p95 < 50 ms.

## 🔗 Dépendances

À réaliser après : `API-WALL-11` · `API-WALL-13` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.9

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
