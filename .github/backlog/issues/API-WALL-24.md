> **API-WALL-24** · Fonctionnel · Priorité **P2** · Taille **S** · Phase 3 — Fonctionnalités avancées

## 🎯 Contexte

ModerationReport accepte la cible `wallpaper`. Même après modération automatique, un utilisateur peut juger une image inappropriée ou reproduisant une marque protégée ; le signalement alimente la file de contrôle a posteriori du CDC Admin.

## ✅ Objectif

Un endpoint de signalement d'un de ses wallpapers (ou d'un lien partagé consulté) alimentant la modération.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `M-10` — Détail d’un wallpaper
_Module : Wallpapers IA_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-10_detail-d-un-wallpaper__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-10_detail-d-un-wallpaper__phone_light.webp?raw=true' width='230' alt='M-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-10_detail-d-un-wallpaper__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-10_detail-d-un-wallpaper__phone_dark.webp?raw=true' width='230' alt='M-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-10_detail-d-un-wallpaper__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-10_detail-d-un-wallpaper__tablet_light.webp?raw=true' width='330' alt='M-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-10_detail-d-un-wallpaper__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/M/M-10_detail-d-un-wallpaper__tablet_dark.webp?raw=true' width='330' alt='M-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Wallpaper » · « Visca » · « Barça » · « Demande » · « Lewandowski · Néon · Trophée » · « Créé le 12 oct. 2026 » · « Modération OK » · « Appliquer » · « Partager »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-WALL-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-01%5D%22) · [API-WALL-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-12%5D%22) · [API-WALL-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-13%5D%22) · [API-WALL-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-14%5D%22) · [API-WALL-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-15%5D%22) · [API-WALL-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-19%5D%22) · [API-WALL-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-27%5D%22) · [API-WALL-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-28%5D%22) · [API-WALL-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-29%5D%22) · [MOB-M-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-01%5D%22) · [MOB-M-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-03%5D%22) · [MOB-M-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-18%5D%22) · [MOB-M-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-20%5D%22) · [MOB-M-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-26%5D%22) · [MOB-M-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-27%5D%22) · [MOB-M-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-28%5D%22) · [MOB-M-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-30%5D%22) · [MOB-M-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-M-31%5D%22)

## 📐 Règles de gestion

- POST /wallpapers/:id/report {reason: inappropriate | protected_brand | other, comment <= 300} ; propriétaire uniquement (404 sinon) ; un seul signalement par wallpaper et par utilisateur (409).
- Création d'un ModerationReport {targetType:'wallpaper', targetId, snapshot:{style, occasion, title, thumbKey, moderation}} autoSeverity review ; le wallpaper reste visible pour son propriétaire mais ses liens de partage sont suspendus (shareSuspended=true) jusqu'à décision.
- Décision admin « retrait » : wallpaper marqué REJECTED failureReason moderation_image, objets supprimés sous 7 jours, partage révoqué ; notification à l'utilisateur non requise (CDC non défini).
- 10 signalements / 24 h / utilisateur.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/wallpapers/:id/report` | Signale un wallpaper | {reason,comment?} | 201 {data:{reportId}} |

## 🛠️ Tâches

- [ ] Ajouter POST /wallpapers/:id/report, contrôleur et validator Joi.
- [ ] Ajouter `shareSuspended` au modèle et le prendre en compte dans WallpaperUrlService.
- [ ] Index unique {targetType,targetId,reporterId} sur ModerationReport (si absent).
- [ ] Brancher la décision admin « retrait » via un événement du module modération.
- [ ] Documenter Swagger.

## ✔️ Critères d'acceptation

- [ ] Étant donné un signalement, alors un ModerationReport review est créé et le partage est suspendu.
- [ ] Étant donné un second signalement du même utilisateur, alors 409.
- [ ] Étant donné le wallpaper d'un autre utilisateur, alors 404.
- [ ] Étant donné une décision de retrait, alors le wallpaper devient REJECTED et ses liens sont invalides.

## 🧪 Tests à écrire

- [ ] Intégration : signalement.
- [ ] Intégration : doublon.
- [ ] Intégration : suspension du partage.
- [ ] Intégration : retrait.

## 🔗 Dépendances

À réaliser après : `API-WALL-13` · `API-WALL-15` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §10
- CDC Global §11

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
