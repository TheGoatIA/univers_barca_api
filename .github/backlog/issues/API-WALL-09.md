> **API-WALL-09** · API · Priorité **P0** · Taille **M** · Phase 3 — Fonctionnalités avancées

## 🎯 Contexte

Après « Lancer la génération » (M-02), le mobile envoie POST /wallpapers avec un en-tête Idempotency-Key et attend un 202 avec l'id suivi en M-04 « En file d'attente · 64 % ».

## ✅ Objectif

Le use case RequestWallpaperGeneration : validation, modération, quota, création du document, enfilement BullMQ.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `M-01` — Générateur — formulaire guidé
_Module : Wallpapers IA_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-01_generateur-formulaire-guide__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-01_generateur-formulaire-guide__phone_light.webp?raw=true' width='230' alt='M-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-01_generateur-formulaire-guide__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-01_generateur-formulaire-guide__phone_dark.webp?raw=true' width='230' alt='M-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-01_generateur-formulaire-guide__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-01_generateur-formulaire-guide__tablet_light.webp?raw=true' width='330' alt='M-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-01_generateur-formulaire-guide__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-01_generateur-formulaire-guide__tablet_dark.webp?raw=true' width='330' alt='M-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Wallpapers IA » · « 1/3 » · « 3 générations gratuites par jour · » · « 2 restantes » · « 1. Joueur ou thème » · « Yamal » · « Pedri » · « Raphinha » · « Lewandowski » · « Autre » · « 2. Style visuel » · « Illustration » · « Néon » · « Aquarelle » · « Rétro » · « Minimal » · « 3. Occasion » · « Jour de match » · « Anniversaire » · « Trophée » · « Libre » · « Précision (optionnel) » · « 39 / 140 » · « Célébration de but sous les projecteurs, ambiance nocturne » · « Générer mon wallpaper »

**Composants repérés** : `btn`, `card`, `chip`

</details>

**Issues liées sur ce même écran :** [API-WALL-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-02%5D%22) · [API-WALL-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-03%5D%22) · [API-WALL-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-04%5D%22) · [API-WALL-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-08%5D%22) · [API-WALL-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-23%5D%22) · [API-WALL-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-30%5D%22) · [API-WALL-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-31%5D%22) · [MOB-M-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-02%5D%22) · [MOB-M-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-04%5D%22) · [MOB-M-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-05%5D%22) · [MOB-M-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-06%5D%22) · [MOB-M-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-22%5D%22) · [MOB-M-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-26%5D%22) · [MOB-M-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-29%5D%22) · [MOB-M-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-30%5D%22) · [MOB-M-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-31%5D%22)

#### `M-02` — Aperçu du prompt
_Module : Wallpapers IA_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-02_apercu-du-prompt__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-02_apercu-du-prompt__phone_light.webp?raw=true' width='230' alt='M-02 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-02_apercu-du-prompt__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-02_apercu-du-prompt__phone_dark.webp?raw=true' width='230' alt='M-02 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-02_apercu-du-prompt__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-02_apercu-du-prompt__tablet_light.webp?raw=true' width='330' alt='M-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-02_apercu-du-prompt__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-02_apercu-du-prompt__tablet_dark.webp?raw=true' width='330' alt='M-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Wallpapers IA » · « 3/3 » · « Vérifie ta demande » · « Joueur » · « Lamine Yamal » · « Style » · « Illustration » · « Occasion » · « Jour de match » · « Précision » · « Célébration de but sous les projecteurs » · « Ta demande est vérifiée automatiquement. Les logos et visuels officiels protégés ne sont pas reproduits. » · « Lancer la génération »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-WALL-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-02%5D%22) · [API-WALL-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-04%5D%22) · [API-WALL-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-05%5D%22) · [API-WALL-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-06%5D%22) · [API-WALL-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-07%5D%22) · [API-WALL-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-30%5D%22) · [MOB-M-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-04%5D%22) · [MOB-M-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-07%5D%22) · [MOB-M-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-28%5D%22) · [MOB-M-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-29%5D%22) · [MOB-M-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-30%5D%22) · [MOB-M-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-31%5D%22)

#### `M-04` — Génération en cours
_Module : Wallpapers IA_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-04_generation-en-cours__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-04_generation-en-cours__phone_light.webp?raw=true' width='230' alt='M-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-04_generation-en-cours__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-04_generation-en-cours__phone_dark.webp?raw=true' width='230' alt='M-04 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-04_generation-en-cours__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-04_generation-en-cours__tablet_light.webp?raw=true' width='330' alt='M-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-04_generation-en-cours__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-04_generation-en-cours__tablet_dark.webp?raw=true' width='330' alt='M-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Génération » · « Més que » · « un club » · « Création… » · « On dessine ton wallpaper » · « Environ 15 secondes. Tu peux quitter l'écran : on te prévient quand c'est prêt. » · « En file d'attente » · « 64 % » · « Prévenez-moi quand c’est prêt »

**Composants repérés** : `btn`, `spinner`

</details>

**Issues liées sur ce même écran :** [API-WALL-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-01%5D%22) · [API-WALL-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-10%5D%22) · [API-WALL-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-11%5D%22) · [API-WALL-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-16%5D%22) · [API-WALL-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-21%5D%22) · [API-WALL-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-23%5D%22) · [API-WALL-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-30%5D%22) · [API-WALL-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-31%5D%22) · [MOB-M-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-01%5D%22) · [MOB-M-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-02%5D%22) · [MOB-M-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-09%5D%22) · [MOB-M-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-10%5D%22) · [MOB-M-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-11%5D%22) · [MOB-M-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-29%5D%22) · [MOB-M-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-30%5D%22) · [MOB-M-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-31%5D%22)

## 📐 Règles de gestion

- Corps {playerId|null, theme|null, style, occasion, details <= 140} ; en-tête `Idempotency-Key` (uuid v4) obligatoire ; une répétition avec la même clé renvoie 202 avec le même id sans nouveau décompte (fenêtre 24 h).
- Ordre : feature flag -> validation Joi -> idempotence -> modération du prompt -> limite de wallpapers actifs (max 2 générations PENDING/GENERATING simultanées par utilisateur, 409 GENERATION_IN_PROGRESS) -> quota -> création (PENDING, progress 10) -> enqueue('ai-generation','generate-wallpaper',{wallpaperId},{jobId:wallpaperId}).
- Réponse 202 {id, status:'PENDING', progress:10, quota:{limit,used,remaining,resetsAt}} ; Location: /api/v1/wallpapers/:id ; timeout 10 s (modération synchrone).
- Erreurs : 400 VALIDATION_ERROR, 422 PROMPT_REJECTED, 429 QUOTA_EXCEEDED / RATE_LIMITED, 503 MODULE_DISABLED, 503 QUEUE_UNAVAILABLE (Redis indisponible : pas de décompte, aucun document).
- Aucun appel synchrone au fournisseur d'image (CDC Backend §11.3).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/wallpapers` | Demande de génération asynchrone | Idempotency-Key + {playerId?,theme?,style,occasion,details?} | 202 {success:true,data:{id,status:'PENDING',progress:10,quota}} |

## 🛠️ Tâches

- [ ] Créer src/services/wallpaper/request-generation.usecase.ts.
- [ ] Ajouter POST /wallpapers dans wallpapers.routes.ts avec `protect`, `wallpaperRequestLimiter`, validation Joi.
- [ ] Implémenter l'idempotence (index unique + lecture avant création, gestion de la course E11000).
- [ ] Implémenter le compteur de générations actives par utilisateur.
- [ ] Enfiler avec `enqueue()` (src/jobs/queues.ts) en utilisant jobId = wallpaperId pour l'unicité.
- [ ] Gérer le rollback quota + suppression du document si l'enqueue échoue.
- [ ] Documenter Swagger (en-tête Idempotency-Key).
- [ ] Ajouter les métriques `wallpaper_requests_total{result}`.

## ✔️ Critères d'acceptation

- [ ] Étant donné une demande valide, quand elle est envoyée, alors 202 avec status PENDING et un job ai-generation est présent dans la file.
- [ ] Étant donné deux POST avec la même Idempotency-Key, alors un seul document et un seul décompte existent.
- [ ] Étant donné Redis indisponible, alors 503 QUEUE_UNAVAILABLE sans décompte.
- [ ] Étant donné 2 générations en cours, alors une 3e demande renvoie 409.
- [ ] Étant donné un prompt refusé, alors 422 et aucun document.

## 🧪 Tests à écrire

- [ ] Intégration : 202 + job enfilé.
- [ ] Intégration : idempotence concurrente.
- [ ] Intégration : rollback sur échec d'enqueue.
- [ ] Intégration : limite de générations actives.
- [ ] Contrat : forme 202.

## 🔗 Dépendances

À réaliser après : `API-WALL-07` · `API-WALL-08` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.9
- CDC Backend §11.3
- CDC Global §2.10

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
