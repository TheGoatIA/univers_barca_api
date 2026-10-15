> **API-WALL-27** · Infrastructure · Priorité **P1** · Taille **M** · Phase 3 — Fonctionnalités avancées

## 🎯 Contexte

Les images coûtent du stockage (CDC Global §12.1). Suppressions douces, images rejetées conservées pour revue, objets orphelins après échec : un job planifié doit nettoyer sans toucher aux données valides.

## ✅ Objectif

Un cron quotidien de purge idempotent et traçable.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `M-08` — Ma galerie
_Module : Wallpapers IA_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-08_ma-galerie__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-08_ma-galerie__phone_light.webp?raw=true' width='230' alt='M-08 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-08_ma-galerie__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-08_ma-galerie__phone_dark.webp?raw=true' width='230' alt='M-08 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-08_ma-galerie__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-08_ma-galerie__tablet_light.webp?raw=true' width='330' alt='M-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-08_ma-galerie__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-08_ma-galerie__tablet_dark.webp?raw=true' width='330' alt='M-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Ma galerie » · « 12 wallpapers » · « Tous » · « Favoris » · « Més que » · « un club » · « Yamal » · « Visca » · « Barça » · « Camp » · « Nou » · « Aquí » · « mana » · « Força » · « Nouveau wallpaper »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-WALL-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-01%5D%22) · [API-WALL-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-12%5D%22) · [API-WALL-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-14%5D%22) · [API-WALL-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-18%5D%22) · [API-WALL-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-19%5D%22) · [API-WALL-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-22%5D%22) · [API-WALL-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-28%5D%22) · [API-WALL-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-29%5D%22) · [API-WALL-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-30%5D%22) · [API-WALL-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-31%5D%22) · [MOB-M-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-01%5D%22) · [MOB-M-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-02%5D%22) · [MOB-M-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-03%5D%22) · [MOB-M-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-17%5D%22) · [MOB-M-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-18%5D%22) · [MOB-M-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-26%5D%22) · [MOB-M-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-27%5D%22) · [MOB-M-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-30%5D%22) · [MOB-M-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-31%5D%22)

#### `M-10` — Détail d’un wallpaper
_Module : Wallpapers IA_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-10_detail-d-un-wallpaper__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-10_detail-d-un-wallpaper__phone_light.webp?raw=true' width='230' alt='M-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-10_detail-d-un-wallpaper__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-10_detail-d-un-wallpaper__phone_dark.webp?raw=true' width='230' alt='M-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-10_detail-d-un-wallpaper__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-10_detail-d-un-wallpaper__tablet_light.webp?raw=true' width='330' alt='M-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-10_detail-d-un-wallpaper__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-10_detail-d-un-wallpaper__tablet_dark.webp?raw=true' width='330' alt='M-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Wallpaper » · « Visca » · « Barça » · « Demande » · « Lewandowski · Néon · Trophée » · « Créé le 12 oct. 2026 » · « Modération OK » · « Appliquer » · « Partager »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-WALL-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-01%5D%22) · [API-WALL-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-12%5D%22) · [API-WALL-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-13%5D%22) · [API-WALL-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-14%5D%22) · [API-WALL-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-15%5D%22) · [API-WALL-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-19%5D%22) · [API-WALL-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-24%5D%22) · [API-WALL-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-28%5D%22) · [API-WALL-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-29%5D%22) · [MOB-M-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-01%5D%22) · [MOB-M-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-03%5D%22) · [MOB-M-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-18%5D%22) · [MOB-M-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-20%5D%22) · [MOB-M-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-26%5D%22) · [MOB-M-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-27%5D%22) · [MOB-M-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-28%5D%22) · [MOB-M-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-30%5D%22) · [MOB-M-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-31%5D%22)

## 📐 Règles de gestion

- Suppression physique des wallpapers `deletedAt` depuis plus de 24 h (documents + objets full/thumb/thumb-s/download).
- Images REJECTED (moderation_image) supprimées 7 jours après la décision, sauf si un ModerationReport est ouvert ; documents REJECTED techniques sans image supprimés après 30 jours.
- Objets orphelins : parcours mensuel du préfixe `wallpapers/` comparé à la base, suppression des objets sans document (garde-fou : liste limitée à 1000 suppressions par run et dry-run par défaut en premier déploiement).
- Demandes PENDING/GENERATING de plus de 30 minutes : passage REJECTED provider_error (remboursé).
- Sortie : rapport {deletedDocs, deletedObjects, bytesFreed, errors} en log et métrique `wallpaper_purge_total{type}` ; exécution quotidienne 03:15 via le scheduler existant (src/jobs/scheduler.ts), file `rgpd`.

## 🛠️ Tâches

- [ ] Créer le handler src/jobs/handlers/wallpaper-purge.job.ts et l'enregistrer dans la file `rgpd` ou `ai-generation` selon la convention.
- [ ] Ajouter l'entrée cron dans src/jobs/scheduler.ts (15 3 * * *) et un cron mensuel pour les orphelins.
- [ ] Implémenter le parcours paginé du bucket via StorageProvider#list.
- [ ] Mode dry-run (WALLPAPER_PURGE_DRY_RUN) pour valider en production.
- [ ] Gérer les erreurs partielles (continuer, rapporter).
- [ ] Tester sur 2000 documents et 5000 objets simulés.

## ✔️ Critères d'acceptation

- [ ] Étant donné un wallpaper supprimé depuis 25 h, alors documents et objets sont purgés.
- [ ] Étant donné une image REJECTED avec signalement ouvert, alors elle est conservée.
- [ ] Étant donné un objet sans document, alors il est supprimé au run mensuel hors dry-run.
- [ ] Étant donné un second run immédiat, alors rien n'est supprimé (idempotence).

## 🧪 Tests à écrire

- [ ] Intégration : purge différée.
- [ ] Intégration : exceptions de revue.
- [ ] Intégration : orphelins avec dry-run.
- [ ] Unitaire : sélection par ancienneté.

## 🔗 Dépendances

À réaliser après : `API-WALL-12` · `API-WALL-19` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §12.1
- CDC Global §10.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
