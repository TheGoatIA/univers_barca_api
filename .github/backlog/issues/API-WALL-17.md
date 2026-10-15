> **API-WALL-17** · Fonctionnel · Priorité **P0** · Taille **S** · Phase 3 — Fonctionnalités avancées

## 🎯 Contexte

M-13 affiche « La génération a échoué. Un problème est survenu. Ta tentative n'est pas décomptée de ton quota » avec « Réessayer » et « Modifier ma demande ». Il faut distinguer échec technique (remboursé) et rejet de modération (non remboursé, M-03/M-10).

## ✅ Objectif

Une classification claire des échecs, un remboursement garanti et une relance sans nouvelle saisie.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `M-13` — Échec de la génération
_Module : Wallpapers IA_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-13_echec-de-la-generation__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-13_echec-de-la-generation__phone_light.webp?raw=true' width='230' alt='M-13 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-13_echec-de-la-generation__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-13_echec-de-la-generation__phone_dark.webp?raw=true' width='230' alt='M-13 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-13_echec-de-la-generation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-13_echec-de-la-generation__tablet_light.webp?raw=true' width='330' alt='M-13 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-13_echec-de-la-generation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-13_echec-de-la-generation__tablet_dark.webp?raw=true' width='330' alt='M-13 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Wallpapers IA » · « La génération a échoué » · « Un problème est survenu. Ta tentative n’est pas décomptée de ton quota. » · « Réessayer » · « Modifier ma demande »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-WALL-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-08%5D%22) · [API-WALL-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-10%5D%22) · [API-WALL-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-11%5D%22) · [API-WALL-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-15%5D%22) · [API-WALL-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-16%5D%22) · [API-WALL-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-30%5D%22) · [MOB-M-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-09%5D%22) · [MOB-M-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-22%5D%22) · [MOB-M-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-24%5D%22) · [MOB-M-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-30%5D%22) · [MOB-M-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-31%5D%22)

#### `M-03` — Prompt refusé par la modération
_Module : Wallpapers IA_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-03_prompt-refuse-par-la-moderation__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-03_prompt-refuse-par-la-moderation__phone_light.webp?raw=true' width='230' alt='M-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-03_prompt-refuse-par-la-moderation__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-03_prompt-refuse-par-la-moderation__phone_dark.webp?raw=true' width='230' alt='M-03 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-03_prompt-refuse-par-la-moderation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-03_prompt-refuse-par-la-moderation__tablet_light.webp?raw=true' width='330' alt='M-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-03_prompt-refuse-par-la-moderation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-03_prompt-refuse-par-la-moderation__tablet_dark.webp?raw=true' width='330' alt='M-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Wallpapers IA » · « 1/3 » · « 3 générations gratuites par jour · » · « 2 restantes » · « 1. Joueur ou thème » · « Yamal » · « Pedri » · « Raphinha » · « Lewandowski » · « Autre » · « 2. Style visuel » · « Illustration » · « Néon » · « Aquarelle » · « Rétro » · « Minimal » · « 3. Occasion » · « Jour de match » · « Anniversaire » · « Trophée » · « Libre » · « Précision (optionnel) » · « 36 / 140 » · « Yamal avec le logo officiel du club… » · « Cette demande ne peut pas être traitée : reproduction de marque protégée. » · « Demande refusée » · « Reformule sans logo officiel, écusson ni contenu protégé. »

**Composants repérés** : `card`, `chip`

</details>

**Issues liées sur ce même écran :** [API-WALL-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-05%5D%22) · [API-WALL-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-06%5D%22) · [API-WALL-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-07%5D%22) · [API-WALL-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-30%5D%22) · [MOB-M-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-04%5D%22) · [MOB-M-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-08%5D%22) · [MOB-M-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-30%5D%22) · [MOB-M-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-31%5D%22)

## 📐 Règles de gestion

- Matrice : provider_error | timeout -> REJECTED, quotaRefunded=true ; moderation_image -> REJECTED, quotaRefunded=false ; cancelled (kill switch) -> REJECTED, quotaRefunded=true.
- Le remboursement se fait dans la même transaction logique que le passage de statut (opération atomique conditionnelle `quotaRefunded:false -> true`).
- POST /wallpapers/:id/retry : recrée une demande à partir des mêmes paramètres (nouvelle Idempotency-Key générée par le serveur), vérifie quota/modération/flag comme POST /wallpapers, 409 si le wallpaper source n'est pas REJECTED avec échec technique ; limite 3 réessais par wallpaper.
- Journalisation du motif sans prompt dans AiCallLog et incrément `wallpaper_failures_total{reason}`; message utilisateur générique sans détail du fournisseur.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/wallpapers/:id/retry` | Relance une génération échouée techniquement | - | 202 {data:{id,status:'PENDING',quota}} |

## 🛠️ Tâches

- [ ] Implémenter `WallpaperFailureService.fail(wallpaper, reason)` (statut, remboursement conditionnel, métriques).
- [ ] Appeler le service depuis le worker et le balayage des orphelins.
- [ ] Ajouter POST /wallpapers/:id/retry et le use case `RetryWallpaperUseCase` (réutilise RequestWallpaperGeneration).
- [ ] Ajouter `retryCount` au modèle.
- [ ] Mettre à jour la documentation Swagger.
- [ ] Tester les trois classes d'échec.

## ✔️ Critères d'acceptation

- [ ] Étant donné un échec fournisseur, alors quotaRefunded=true et GET /wallpapers/quota affiche un used décrémenté.
- [ ] Étant donné un rejet de modération d'image, alors quotaRefunded=false.
- [ ] Étant donné /retry sur un wallpaper READY, alors 409.
- [ ] Étant donné un 4e réessai, alors 429.

## 🧪 Tests à écrire

- [ ] Intégration : matrice complète.
- [ ] Intégration : retry.
- [ ] Unitaire : remboursement conditionnel atomique.
- [ ] Intégration : limite de réessais.

## 🔗 Dépendances

À réaliser après : `API-WALL-11` · `API-WALL-08` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.9
- CDC Backend §11.6

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
