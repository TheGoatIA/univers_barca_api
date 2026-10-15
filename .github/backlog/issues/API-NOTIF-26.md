> **API-NOTIF-26** · API · Priorité **P1** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

L'équipe doit retrouver ce qui a été envoyé, à qui et avec quel résultat (admin : section Notifications manuelles).

## ✅ Objectif

Lister et détailler les campagnes avec leurs statistiques de livraison.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-07` — Notification manuelle — composition
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__desktop_light.webp?raw=true' width='330' alt='WI-07 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__desktop_dark.webp?raw=true' width='330' alt='WI-07 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__tablet_light.webp?raw=true' width='330' alt='WI-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__tablet_dark.webp?raw=true' width='330' alt='WI-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Notifications manuelles » · « Notification manuelle » · « Communication exceptionnelle : maintenance, annonce de fonctionnalité » · « Brouillon » · « Envoyer » · « Audience » · « Tous » · « Segment » · « Pays » · « Cameroun » · « Groupe communautaire »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WI-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-01%5D%22) · [ADM-WI-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-14%5D%22) · [ADM-WI-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-15%5D%22) · [ADM-WI-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-16%5D%22) · [ADM-WI-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-21%5D%22) · [API-NOTIF-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-01%5D%22) · [API-NOTIF-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-22%5D%22) · [API-NOTIF-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-23%5D%22) · [API-NOTIF-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-24%5D%22) · [API-NOTIF-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-25%5D%22) · [API-NOTIF-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-27%5D%22) · [API-NOTIF-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-29%5D%22) · [API-NOTIF-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-31%5D%22) · [API-PLAT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-19%5D%22)

## 📐 Règles de gestion

- `GET /admin/notifications/campaigns` : pagination page/limit (max 50), filtres status, période, auteur ; tri createdAt desc.
- `GET /admin/notifications/campaigns/:id` : contenu 3 langues, audience, créateur, confirmateur, recipientCount, stats {sent, failed, suppressed (quiet-hours/preference/no-consent), opened}.
- `opened` = nombre de NotificationLog liés dont readAt non nul (approximation, mise à jour paresseuse).
- Accès `content-manager`, `moderator` (lecture seule), `super-admin` ; le détail n'expose jamais d'identifiants utilisateurs.
- Stats mises à jour par le worker (incrément atomique $inc) ; rafraîchies toutes les 10 s côté admin pendant `sending`.

## 🔄 Comportement et états

- Campagne supprimée (brouillon) : absente de l'historique.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/notifications/campaigns` | Historique | ?status=sent&page=1&limit=20 | {success:true,data:{items:[…],total,page,totalPages,hasMore}} |

## 🛠️ Tâches

- [ ] Routes GET list/detail.
- [ ] Service listCampaigns(), getCampaign().
- [ ] Incréments $inc dans le worker (campaign-send).
- [ ] Index { status:1, createdAt:-1 }.
- [ ] Projection sans PII.
- [ ] RBAC lecture.
- [ ] Swagger.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné 3 campagnes, quand je liste, alors triées par date décroissante avec leurs stats.
- [ ] Étant donné une campagne envoyée à 12 480 destinataires, alors sent + failed + suppressed = 12 480.
- [ ] Étant donné un moderator, alors lecture seule autorisée.
- [ ] Étant donné le détail, alors aucun userId n'est exposé.

## 🧪 Tests à écrire

- [ ] integration: liste filtrée
- [ ] integration: cohérence des stats
- [ ] integration: RBAC lecture
- [ ] integration: aucun userId

## 🔗 Dépendances

À réaliser après : `API-NOTIF-24` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.11

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
