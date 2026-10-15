> **API-MODER-25** · Fonctionnel · Priorité **P2** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

WJ-06 (phase 3) : bibliothèque de modération avec filtre « à contrôler », retrait d'un visuel, signalé, « logo club… ». CDC Global §11.1 couvre prompts et images générées.

## ✅ Objectif

Offrir l'API de contrôle a posteriori des images et le filtrage des prompts en amont.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WJ-06` — Modération des wallpapers IA
_Module : Utilisateurs et évolutions phase 2-3_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-06_moderation-des-wallpapers-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-06_moderation-des-wallpapers-ia__desktop_light.webp?raw=true' width='330' alt='WJ-06 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-06_moderation-des-wallpapers-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-06_moderation-des-wallpapers-ia__desktop_dark.webp?raw=true' width='330' alt='WJ-06 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-06_moderation-des-wallpapers-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-06_moderation-des-wallpapers-ia__tablet_light.webp?raw=true' width='330' alt='WJ-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-06_moderation-des-wallpapers-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-06_moderation-des-wallpapers-ia__tablet_dark.webp?raw=true' width='330' alt='WJ-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « Wallpapers IA » · « Bibliothèque de modération des wallpapers » · « Phase 3 · contrôle a posteriori des images générées » · « Filtrer : à contrôler » · « « Yamal néon » » · « Retirer » · « « Camp Nou nuit » » · « « Trophée doré » » · « Signalé » · « « logo club… » » · « « Pedri aquarelle » »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WJ-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-11%5D%22) · [ADM-WJ-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-12%5D%22) · [ADM-WJ-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-13%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

## 📐 Règles de gestion

- GET /admin/moderation/wallpapers?filter=to-review|reported|removed : vignette, titre (prompt tronqué), auteur, moderationStatus (pending|ok|removed).
- POST /admin/moderation/wallpapers/:id/remove (justification) : moderationStatus=removed, image retirée de la galerie publique, notification à l'auteur.
- Filtrage des prompts avant génération avec ContentFilterService (mots interdits, marques déposées type « logo club » -> flag review).
- Contenu retiré non supprimé physiquement pendant 90 jours puis purgé (jobs rgpd).

## 🛠️ Tâches

- [ ] Créer endpoints et controller wallpapers de modération.
- [ ] Étendre le modèle GeneratedWallpaper (moderationStatus, removedBy, removedAt).
- [ ] Brancher le filtre de prompt.
- [ ] Journaliser WALLPAPER_REMOVED.
- [ ] Job de purge 90 jours.
- [ ] Annoter Swagger.

## ✔️ Critères d'acceptation

- [ ] Étant donné un wallpaper signalé, quand je le retire, alors il disparaît de la galerie publique.
- [ ] Étant donné un prompt interdit, alors la génération est refusée 422.
- [ ] Étant donné un retrait sans justification, alors 400.
- [ ] Étant donné 90 jours écoulés, alors le fichier est purgé.

## 🧪 Tests à écrire

- [ ] Test d'intégration : retrait.
- [ ] Test d'intégration : prompt filtré.
- [ ] Test d'intégration : purge 90 jours.
- [ ] Test de sécurité : RBAC.

## 🔗 Dépendances

À réaliser après : `API-MODER-06` · `API-MODER-12` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §11.1
- CDC Global §11.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
