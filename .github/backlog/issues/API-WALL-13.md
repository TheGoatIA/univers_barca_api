> **API-WALL-13** · Sécurité · Priorité **P0** · Taille **S** · Phase 3 — Fonctionnalités avancées

## 🎯 Contexte

Les URL d'images sont signées et non devinables (rgpd-wallpapers-donnees côté mobile) ; le lien partagé « Lien » de M-11 copie l'URL signée dont la durée de vie est fixée par l'API.

## ✅ Objectif

Une politique unique de génération d'URL signées et de contrôle de propriété, sans exposition de l'image d'un autre utilisateur.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `M-05` — Wallpaper prêt
_Module : Wallpapers IA_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-05_wallpaper-pret__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-05_wallpaper-pret__phone_light.webp?raw=true' width='230' alt='M-05 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-05_wallpaper-pret__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-05_wallpaper-pret__phone_dark.webp?raw=true' width='230' alt='M-05 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-05_wallpaper-pret__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-05_wallpaper-pret__tablet_light.webp?raw=true' width='330' alt='M-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-05_wallpaper-pret__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-05_wallpaper-pret__tablet_dark.webp?raw=true' width='330' alt='M-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Ton wallpaper » · « Yamal » · « Généré » · « Yamal · Illustration · Jour de match » · « Appliquer comme fond d’écran » · « Enregistrer » · « Partager »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-WALL-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-01%5D%22) · [API-WALL-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-10%5D%22) · [API-WALL-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-11%5D%22) · [API-WALL-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-12%5D%22) · [API-WALL-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-14%5D%22) · [API-WALL-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-15%5D%22) · [API-WALL-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-16%5D%22) · [API-WALL-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-20%5D%22) · [API-WALL-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-21%5D%22) · [API-WALL-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-29%5D%22) · [API-WALL-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-30%5D%22) · [API-WALL-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-31%5D%22) · [MOB-M-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-01%5D%22) · [MOB-M-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-09%5D%22) · [MOB-M-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-11%5D%22) · [MOB-M-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-12%5D%22) · [MOB-M-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-15%5D%22) · [MOB-M-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-27%5D%22) · [MOB-M-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-29%5D%22) · [MOB-M-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-30%5D%22) · [MOB-M-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-31%5D%22)

#### `M-10` — Détail d’un wallpaper
_Module : Wallpapers IA_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-10_detail-d-un-wallpaper__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-10_detail-d-un-wallpaper__phone_light.webp?raw=true' width='230' alt='M-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-10_detail-d-un-wallpaper__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-10_detail-d-un-wallpaper__phone_dark.webp?raw=true' width='230' alt='M-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-10_detail-d-un-wallpaper__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-10_detail-d-un-wallpaper__tablet_light.webp?raw=true' width='330' alt='M-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-10_detail-d-un-wallpaper__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-10_detail-d-un-wallpaper__tablet_dark.webp?raw=true' width='330' alt='M-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Wallpaper » · « Visca » · « Barça » · « Demande » · « Lewandowski · Néon · Trophée » · « Créé le 12 oct. 2026 » · « Modération OK » · « Appliquer » · « Partager »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-WALL-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-01%5D%22) · [API-WALL-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-12%5D%22) · [API-WALL-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-14%5D%22) · [API-WALL-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-15%5D%22) · [API-WALL-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-19%5D%22) · [API-WALL-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-24%5D%22) · [API-WALL-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-27%5D%22) · [API-WALL-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-28%5D%22) · [API-WALL-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-29%5D%22) · [MOB-M-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-01%5D%22) · [MOB-M-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-03%5D%22) · [MOB-M-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-18%5D%22) · [MOB-M-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-20%5D%22) · [MOB-M-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-26%5D%22) · [MOB-M-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-27%5D%22) · [MOB-M-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-28%5D%22) · [MOB-M-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-30%5D%22) · [MOB-M-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-31%5D%22)

#### `M-11` — Partage du wallpaper
_Module : Wallpapers IA_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-11_partage-du-wallpaper__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-11_partage-du-wallpaper__phone_light.webp?raw=true' width='230' alt='M-11 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-11_partage-du-wallpaper__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-11_partage-du-wallpaper__phone_dark.webp?raw=true' width='230' alt='M-11 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-11_partage-du-wallpaper__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-11_partage-du-wallpaper__tablet_light.webp?raw=true' width='330' alt='M-11 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-11_partage-du-wallpaper__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-11_partage-du-wallpaper__tablet_dark.webp?raw=true' width='330' alt='M-11 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Wallpaper » · « Visca » · « Barça » · « Partager » · « WhatsApp » · « Instagram » · « Facebook » · « Lien » · « Image »

**Composants repérés** : `sheet`

</details>

**Issues liées sur ce même écran :** [MOB-M-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-21%5D%22) · [MOB-M-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-30%5D%22) · [MOB-M-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-31%5D%22)

## 📐 Règles de gestion

- Les endpoints GET renvoient `imageUrl` et `thumbUrl` signées à la volée : miniature TTL 24 h, image pleine TTL 1 h pour l'affichage ; l'app redemande le détail si l'URL expire (403 sur l'URL -> GET /wallpapers/:id).
- Seul le propriétaire obtient des URL ; tout autre utilisateur reçoit 404 ; les wallpapers REJECTED n'ont ni imageUrl ni thumbUrl (null), et l'image rejetée est supprimée du stockage après 7 jours (purge).
- URL de partage : POST /wallpapers/:id/share -> URL signée TTL 7 jours, `Content-Disposition: inline`, révocable (supprimer le wallpaper ou POST /wallpapers/:id/share/revoke change la clé de signature de l'objet via un nonce) ; limite 20 liens / jour / utilisateur.
- Les URL signées ne sont jamais loguées en clair (redaction de la query string `X-Signature` dans requestLogger).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/wallpapers/:id/share` | Crée un lien de partage signé (7 jours) | - | {data:{url,expiresAt}} |
| `POST` | `/api/v1/wallpapers/:id/share/revoke` | Révoque les liens de partage | - | 204 |

## 🛠️ Tâches

- [ ] Implémenter `WallpaperUrlService` (src/services/wallpaper/url.service.ts) : `forOwner(wallpaper)`, `forShare(wallpaper)`.
- [ ] Ajouter le nonce `shareNonce` au modèle GeneratedWallpaper et le faire intervenir dans la clé signée (alias d'objet `shared/<nonce>.webp` copié côté serveur) ou dans un proxy signé HMAC si le driver ne supporte pas les alias.
- [ ] Ajouter les routes POST /wallpapers/:id/share et /share/revoke.
- [ ] Étendre src/middleware/requestLogger.ts pour masquer les paramètres de signature.
- [ ] Limiteur 20 liens/jour.
- [ ] Documenter dans Swagger.
- [ ] Tests de sécurité inter-utilisateurs.

## ✔️ Critères d'acceptation

- [ ] Étant donné le wallpaper d'un autre utilisateur, alors GET /wallpapers/:id répond 404.
- [ ] Étant donné une URL de partage révoquée, alors l'accès renvoie 403/404.
- [ ] Étant donné un wallpaper REJECTED, alors imageUrl est null.
- [ ] Étant donné un log de requête, alors la signature n'apparaît pas.

## 🧪 Tests à écrire

- [ ] Sécurité : accès inter-utilisateurs.
- [ ] Intégration : révocation du partage.
- [ ] Unitaire : TTL des URL.
- [ ] Unitaire : masquage des logs.

## 🔗 Dépendances

À réaliser après : `API-WALL-12` · `API-WALL-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §10.2
- CDC Backend §5
- CDC Backend §3.9

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
