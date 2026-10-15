> **API-WALL-25** · API · Priorité **P2** · Taille **M** · Phase 3 — Fonctionnalités avancées

## 🎯 Contexte

Le CDC Admin (roadmap phase 3) prévoit une bibliothèque de modération des wallpapers générés par IA, file de contrôle a posteriori des images produites. Les images en zone de revue (score 0,4-0,6) et les signalements y arrivent.

## ✅ Objectif

Des endpoints admin protégés pour lister, consulter et trancher (valider, retirer) sans exposer les données personnelles.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WH-04` — Consommation IA
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__desktop_light.webp?raw=true' width='330' alt='WH-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__desktop_dark.webp?raw=true' width='330' alt='WH-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__tablet_light.webp?raw=true' width='330' alt='WH-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__tablet_dark.webp?raw=true' width='330' alt='WH-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Usage IA » · « Consommation IA » · « Texte (assistant, quiz) et image (wallpapers) · comparée aux quotas configurés » · « Modifier les quotas » · « Dépassement anticipé du budget image » · « : au rythme actuel, le quota mensuel sera atteint le 24 octobre. » · « Texte · assistant et quiz » · « Dans le budget » · « 4,2 M » · « / 10 M tokens » · « Image · wallpapers »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-10%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22) · [API-IA-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-04%5D%22) · [API-IA-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-07%5D%22) · [API-IA-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-24%5D%22) · [API-IA-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-30%5D%22) · [API-PLAT-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-17%5D%22) · [API-PLAT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-22%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22) · [API-WALL-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-26%5D%22)

## 📐 Règles de gestion

- GET /admin/wallpapers/moderation ?status=review|reported|rejected&from=&to=&cursor=&limit=25 : items {id, thumbUrl (URL signée 10 min), style, occasion, title, scores, reportsCount, createdAt, userHash} ; le prompt libre `details` est affiché tronqué à 140 car. (nécessaire à la décision) ; l'identité de l'utilisateur n'est jamais retournée (identifiant technique).
- POST /admin/wallpapers/:id/decision {decision: approve | remove, justification >= 10 car.} : approve -> moderation.image.status='approved', reports clos ; remove -> REJECTED moderation_image, partage révoqué, suppression d'objets sous 7 jours ; écrit un AuditLog {before, after, justification}.
- Rôles : moderator et super-admin ; content-manager refusé (403) ; idempotence de la décision.
- Statistiques : GET /admin/wallpapers/moderation/stats {reviewPending, reportedPending, removed7d, rejectedByModeration7d}.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/wallpapers/moderation` | File de contrôle a posteriori | ?status=review&cursor=&limit=25 | {data:{items:[...],hasMore,nextCursor}} |
| `POST` | `/api/v1/admin/wallpapers/:id/decision` | Valide ou retire une image | {decision:'approve\|remove',justification} | {data:{id,status}} |

## 🛠️ Tâches

- [ ] Créer src/routes/admin-wallpapers.routes.ts avec restrictTo('moderator','super-admin').
- [ ] Créer le contrôleur et le service `WallpaperModerationAdminService`.
- [ ] Écrire les requêtes de file (index {moderation.image.status:1,createdAt:-1}).
- [ ] Intégrer l'AuditLog existant.
- [ ] Fermer les ModerationReport liés à la décision (statut resolved + ModerationAction).
- [ ] Documenter Swagger (tag Admin wallpapers).
- [ ] Tests RBAC.

## ✔️ Critères d'acceptation

- [ ] Étant donné un content-manager, alors toutes les routes renvoient 403.
- [ ] Étant donné une décision remove, alors le wallpaper devient indisponible pour son propriétaire et un AuditLog est écrit.
- [ ] Étant donné la liste, alors aucune information d'identité (email, pseudo) n'apparaît.
- [ ] Étant donné une seconde décision identique, alors la réponse est idempotente.

## 🧪 Tests à écrire

- [ ] Sécurité : RBAC.
- [ ] Intégration : décision remove.
- [ ] Intégration : absence de PII.
- [ ] Intégration : stats.

## 🔗 Dépendances

À réaliser après : `API-WALL-24` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §13
- CDC Admin §10
- CDC Backend §3.11

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
