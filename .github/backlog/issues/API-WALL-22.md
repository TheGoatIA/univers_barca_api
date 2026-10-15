> **API-WALL-22** · Fonctionnel · Priorité **P0** · Taille **S** · Phase 3 — Fonctionnalités avancées

## 🎯 Contexte

M-14 « Wallpapers IA en pause : la génération d'images est temporairement désactivée » avec « Voir ma galerie ». Le CDC Admin §6 définit wallpapers_module_enabled pour couper en cas de dépassement de budget IA (WH-04, WI-05).

## ✅ Objectif

Coupure immédiate de la génération sans casser la galerie existante, avec traitement des jobs en cours.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `M-14` — Module désactivé
_Module : Wallpapers IA_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-14_module-desactive__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-14_module-desactive__phone_light.webp?raw=true' width='230' alt='M-14 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-14_module-desactive__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-14_module-desactive__phone_dark.webp?raw=true' width='230' alt='M-14 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-14_module-desactive__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-14_module-desactive__tablet_light.webp?raw=true' width='330' alt='M-14 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-14_module-desactive__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-14_module-desactive__tablet_dark.webp?raw=true' width='330' alt='M-14 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Wallpapers IA » · « Wallpapers IA en pause » · « La génération d’images est temporairement désactivée. Elle reviendra très vite ! » · « Voir ma galerie »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-IA-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-22%5D%22) · [API-WALL-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-30%5D%22) · [MOB-M-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-25%5D%22) · [MOB-M-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-30%5D%22) · [MOB-M-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-31%5D%22)

#### `M-08` — Ma galerie
_Module : Wallpapers IA_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-08_ma-galerie__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-08_ma-galerie__phone_light.webp?raw=true' width='230' alt='M-08 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-08_ma-galerie__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-08_ma-galerie__phone_dark.webp?raw=true' width='230' alt='M-08 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-08_ma-galerie__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-08_ma-galerie__tablet_light.webp?raw=true' width='330' alt='M-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-08_ma-galerie__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-08_ma-galerie__tablet_dark.webp?raw=true' width='330' alt='M-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Ma galerie » · « 12 wallpapers » · « Tous » · « Favoris » · « Més que » · « un club » · « Yamal » · « Visca » · « Barça » · « Camp » · « Nou » · « Aquí » · « mana » · « Força » · « Nouveau wallpaper »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-WALL-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-01%5D%22) · [API-WALL-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-12%5D%22) · [API-WALL-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-14%5D%22) · [API-WALL-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-18%5D%22) · [API-WALL-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-19%5D%22) · [API-WALL-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-27%5D%22) · [API-WALL-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-28%5D%22) · [API-WALL-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-29%5D%22) · [API-WALL-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-30%5D%22) · [API-WALL-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-31%5D%22) · [MOB-M-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-01%5D%22) · [MOB-M-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-02%5D%22) · [MOB-M-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-03%5D%22) · [MOB-M-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-17%5D%22) · [MOB-M-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-18%5D%22) · [MOB-M-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-26%5D%22) · [MOB-M-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-27%5D%22) · [MOB-M-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-30%5D%22) · [MOB-M-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-31%5D%22)

## 📐 Règles de gestion

- Flag `wallpapers_module_enabled` (service de feature flags du groupe IA) : faux -> POST /wallpapers, /check, /retry, /options (moduleEnabled=false) répondent 503 MODULE_DISABLED ; GET galerie, détail, favoris, download, share restent opérationnels.
- Jobs en file au moment de la coupure : les PENDING non démarrés sont annulés (REJECTED failureReason cancelled, quota remboursé) ; les GENERATING en cours se terminent normalement (pas d'image perdue).
- Reprise : à la réactivation, aucune demande annulée n'est relancée automatiquement ; l'utilisateur voit l'échec remboursé.
- Coupure automatique suggérée : si le budget image mensuel est dépassé (WH-04), un log critique est émis (la coupure reste manuelle, décidée par super-admin).

## 🛠️ Tâches

- [ ] Créer le middleware `wallpaperFeatureGate` appliqué aux routes d'écriture.
- [ ] Implémenter `cancelPendingWallpapers()` déclenché à la bascule du flag (abonnement à l'événement du service de flags) et au démarrage du worker.
- [ ] Vérifier le flag à chaque job dans le worker (déjà prévu) et dans le balayage.
- [ ] Ajouter `MODULE_DISABLED` au catalogue d'erreurs.
- [ ] Test de bout en bout : bascule du flag pendant une file de 10 jobs.
- [ ] Documenter dans docs/wallpapers.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné le flag coupé, quand un POST /wallpapers arrive, alors 503 MODULE_DISABLED et GET /wallpapers reste 200.
- [ ] Étant donné 5 jobs PENDING au moment de la coupure, alors ils passent REJECTED cancelled avec quotaRefunded=true.
- [ ] Étant donné un job déjà GENERATING, alors il atteint READY.
- [ ] Étant donné le flag réactivé, alors les nouvelles demandes sont acceptées.

## 🧪 Tests à écrire

- [ ] Intégration : bascule du flag.
- [ ] Intégration : annulation des PENDING.
- [ ] Intégration : job GENERATING préservé.
- [ ] Unitaire : middleware.

## 🔗 Dépendances

À réaliser après : `API-WALL-17` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §6
- CDC Backend §11.3

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
