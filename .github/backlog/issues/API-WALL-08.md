> **API-WALL-08** · Fonctionnel · Priorité **P0** · Taille **S** · Phase 3 — Fonctionnalités avancées

## 🎯 Contexte

M-01 affiche « 3 générations gratuites par jour · 2 restantes » et M-12 « Tu as utilisé tes 3 générations du jour. Elles se renouvellent dans : 11:24:08 ». Le CDC Backend §10.2 indique 5/jour (configurable) : écart avec la maquette (3), à trancher ; la valeur vient d'AiQuota `wallpaper.generations`.

## ✅ Objectif

Application du quota via QuotaService (créé par le groupe IA, modèle AiUsage) avec remboursement sur échec technique.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `M-12` — Quota quotidien atteint
_Module : Wallpapers IA_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-12_quota-quotidien-atteint__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-12_quota-quotidien-atteint__phone_light.webp?raw=true' width='230' alt='M-12 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-12_quota-quotidien-atteint__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-12_quota-quotidien-atteint__phone_dark.webp?raw=true' width='230' alt='M-12 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-12_quota-quotidien-atteint__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-12_quota-quotidien-atteint__tablet_light.webp?raw=true' width='330' alt='M-12 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-12_quota-quotidien-atteint__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-12_quota-quotidien-atteint__tablet_dark.webp?raw=true' width='330' alt='M-12 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Wallpapers IA » · « Quota atteint pour aujourd’hui » · « Tu as utilisé tes 3 générations du jour. Elles se renouvellent dans : » · « 11:24:08 » · « Voir ma galerie »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-IA-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-03%5D%22) · [API-WALL-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-23%5D%22) · [API-WALL-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-30%5D%22) · [MOB-M-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-02%5D%22) · [MOB-M-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-09%5D%22) · [MOB-M-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-22%5D%22) · [MOB-M-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-23%5D%22) · [MOB-M-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-29%5D%22) · [MOB-M-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-30%5D%22) · [MOB-M-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-31%5D%22)

#### `M-01` — Générateur — formulaire guidé
_Module : Wallpapers IA_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-01_generateur-formulaire-guide__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-01_generateur-formulaire-guide__phone_light.webp?raw=true' width='230' alt='M-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-01_generateur-formulaire-guide__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-01_generateur-formulaire-guide__phone_dark.webp?raw=true' width='230' alt='M-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-01_generateur-formulaire-guide__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-01_generateur-formulaire-guide__tablet_light.webp?raw=true' width='330' alt='M-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-01_generateur-formulaire-guide__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-01_generateur-formulaire-guide__tablet_dark.webp?raw=true' width='330' alt='M-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Wallpapers IA » · « 1/3 » · « 3 générations gratuites par jour · » · « 2 restantes » · « 1. Joueur ou thème » · « Yamal » · « Pedri » · « Raphinha » · « Lewandowski » · « Autre » · « 2. Style visuel » · « Illustration » · « Néon » · « Aquarelle » · « Rétro » · « Minimal » · « 3. Occasion » · « Jour de match » · « Anniversaire » · « Trophée » · « Libre » · « Précision (optionnel) » · « 39 / 140 » · « Célébration de but sous les projecteurs, ambiance nocturne » · « Générer mon wallpaper »

**Composants repérés** : `btn`, `card`, `chip`

</details>

**Issues liées sur ce même écran :** [API-WALL-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-02%5D%22) · [API-WALL-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-03%5D%22) · [API-WALL-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-04%5D%22) · [API-WALL-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-09%5D%22) · [API-WALL-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-23%5D%22) · [API-WALL-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-30%5D%22) · [API-WALL-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-31%5D%22) · [MOB-M-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-02%5D%22) · [MOB-M-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-04%5D%22) · [MOB-M-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-05%5D%22) · [MOB-M-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-06%5D%22) · [MOB-M-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-22%5D%22) · [MOB-M-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-26%5D%22) · [MOB-M-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-29%5D%22) · [MOB-M-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-30%5D%22) · [MOB-M-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-31%5D%22)

#### `M-13` — Échec de la génération
_Module : Wallpapers IA_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-13_echec-de-la-generation__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-13_echec-de-la-generation__phone_light.webp?raw=true' width='230' alt='M-13 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-13_echec-de-la-generation__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-13_echec-de-la-generation__phone_dark.webp?raw=true' width='230' alt='M-13 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-13_echec-de-la-generation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-13_echec-de-la-generation__tablet_light.webp?raw=true' width='330' alt='M-13 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-13_echec-de-la-generation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-13_echec-de-la-generation__tablet_dark.webp?raw=true' width='330' alt='M-13 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Wallpapers IA » · « La génération a échoué » · « Un problème est survenu. Ta tentative n’est pas décomptée de ton quota. » · « Réessayer » · « Modifier ma demande »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-WALL-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-10%5D%22) · [API-WALL-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-11%5D%22) · [API-WALL-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-15%5D%22) · [API-WALL-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-16%5D%22) · [API-WALL-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-17%5D%22) · [API-WALL-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-30%5D%22) · [MOB-M-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-09%5D%22) · [MOB-M-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-22%5D%22) · [MOB-M-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-24%5D%22) · [MOB-M-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-30%5D%22) · [MOB-M-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-31%5D%22)

## 📐 Règles de gestion

- Décompte à la création d'une demande acceptée (après modération du prompt, avant l'enfilement du job) ; atomique ; 429 QUOTA_EXCEEDED {limit, used, resetsAt} sinon.
- Remboursement automatique : échec technique du fournisseur après épuisement des tentatives, timeout, annulation par kill switch ; PAS de remboursement pour une image rejetée par la modération de sortie (REJECTED moderation_image), ni pour un prompt accepté puis supprimé par l'utilisateur.
- Jour de quota = jour UTC ; resetsAt = prochain 00:00 UTC ; limite lue dans AiQuota (cache 60 s) avec valeur d'amorçage AI_WALLPAPER_DAILY_QUOTA (défaut 3 selon maquettes ; CDC Backend §10.2 : 5).
- GET /wallpapers/quota -> {limit, used, remaining, resetsAt} sans effet de bord ; le champ `quota` est aussi renvoyé par POST /wallpapers.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/wallpapers/quota` | Quota du jour | - | {success:true,data:{limit:3,used:1,remaining:2,resetsAt:'ISO'}} |

## 🛠️ Tâches

- [ ] Utiliser `QuotaService` (clé wallpaper.generations) ; si le service n'est pas encore livré, le créer selon la spec du groupe IA (src/services/ai/quota.service.ts).
- [ ] Ajouter la route GET /wallpapers/quota et `getQuota` dans le contrôleur.
- [ ] Brancher consume() dans le use case RequestWallpaperGeneration et refund() dans le worker.
- [ ] Persister `quotaRefunded` sur le wallpaper pour éviter un double remboursement (opération idempotente).
- [ ] Ajouter la métrique `wallpaper_quota_exceeded_total`.
- [ ] Documenter la décision 3 vs 5 dans docs/adr/.

## ✔️ Critères d'acceptation

- [ ] Étant donné une limite de 3, quand 3 demandes sont acceptées, alors la 4e renvoie 429 QUOTA_EXCEEDED.
- [ ] Étant donné un échec technique, alors le quota est remboursé une seule fois même si le job est rejoué.
- [ ] Étant donné une image rejetée par la modération, alors le quota reste consommé.
- [ ] Étant donné GET /wallpapers/quota, alors aucun compteur ne change.

## 🧪 Tests à écrire

- [ ] Intégration : 4e demande refusée.
- [ ] Intégration : remboursement idempotent.
- [ ] Intégration : pas de remboursement sur REJECTED modération.
- [ ] Unitaire : resetsAt à minuit UTC.

## 🔗 Dépendances

À réaliser après : `API-WALL-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §10.2
- CDC Backend §11.3
- CDC Global §12.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
