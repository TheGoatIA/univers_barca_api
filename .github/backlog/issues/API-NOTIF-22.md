> **API-NOTIF-22** · API · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

WI-07 « Notification manuelle » (Brouillon / Envoyer, audience Tous / Segment / Pays Cameroun / Groupe communautaire). CDC Admin §4.11 : titre et message en français, traduction EN/ES recommandée avec avertissement non bloquant.

## ✅ Objectif

Créer, modifier, prévisualiser et envoyer un test de campagne.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-07` — Notification manuelle — composition
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__desktop_light.webp?raw=true' width='330' alt='WI-07 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__desktop_dark.webp?raw=true' width='330' alt='WI-07 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__tablet_light.webp?raw=true' width='330' alt='WI-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__tablet_dark.webp?raw=true' width='330' alt='WI-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Notifications manuelles » · « Notification manuelle » · « Communication exceptionnelle : maintenance, annonce de fonctionnalité » · « Brouillon » · « Envoyer » · « Audience » · « Tous » · « Segment » · « Pays » · « Cameroun » · « Groupe communautaire »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WI-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-01%5D%22) · [ADM-WI-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-14%5D%22) · [ADM-WI-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-15%5D%22) · [ADM-WI-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-16%5D%22) · [ADM-WI-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-21%5D%22) · [API-NOTIF-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-01%5D%22) · [API-NOTIF-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-23%5D%22) · [API-NOTIF-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-24%5D%22) · [API-NOTIF-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-25%5D%22) · [API-NOTIF-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-26%5D%22) · [API-NOTIF-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-27%5D%22) · [API-NOTIF-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-29%5D%22) · [API-NOTIF-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-31%5D%22)

## 📐 Règles de gestion

- `POST /admin/notifications/campaigns` crée un brouillon ; `PATCH` le modifie tant que status='draft'|'scheduled' ; `DELETE` supprime un brouillon.
- Contenu : title/body {fr obligatoire, en, es}, titre ≤ 65 car., message ≤ 178 car. (limites push), deepLink optionnel validé contre la liste blanche (univers-barca://…), catégorie forcée à `news` (opt-in) sauf campagne `maintenance` urgente (voir limites).
- Contrôle non bloquant : la réponse inclut `warnings:[{code:'MISSING_TRANSLATION',lang:'es'}]` si EN/ES vides.
- `POST /admin/notifications/campaigns/:id/preview` {locale} → rendu {title,body} dans la langue choisie + exemple d'affichage ; `POST …/test` envoie uniquement aux appareils de l'admin connecté (consentement non requis).
- RBAC : création/édition/test pour `content-manager` et `super-admin` ; l'envoi est traité dans notif-campagne-envoi-confirmation.
- Chaque écriture est auditée (adminId, action, avant/après du contenu).

## 🔄 Comportement et états

- Brouillon sans traduction : enregistrable, avertissement seulement.
- Édition d'une campagne envoyée : 409.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/admin/notifications/campaigns` | Crée un brouillon | {title:{fr,en,es},body:{fr,en,es},deepLink,audience} | {success:true,data:{id,status:'draft',warnings:[]}} |
| `POST` | `/api/v1/admin/notifications/campaigns/:id/preview` | Aperçu localisé | {locale:'en'} | {success:true,data:{title,body}} |

## 🛠️ Tâches

- [ ] Validator campaignSchema (Joi) dans src/validators/campaign.validator.ts.
- [ ] Service src/services/notification-campaign.service.ts : create(), update(), preview(), sendTest().
- [ ] Contrôleur src/controllers/admin-notification.controller.ts.
- [ ] Routes sous /admin/notifications/campaigns avec protect, restrictTo('content-manager','super-admin').
- [ ] Liste blanche de deep links.
- [ ] Journal d'audit (collection AuditLog existante dans moderation.model.ts si applicable, sinon logger).
- [ ] Swagger.
- [ ] Tests RBAC.

## ✔️ Critères d'acceptation

- [ ] Étant donné un brouillon avec fr seul, quand je l'enregistre, alors 201 avec warnings MISSING_TRANSLATION pour en et es.
- [ ] Étant donné un titre de 80 caractères, alors 422.
- [ ] Étant donné un moderator, alors 403.
- [ ] Étant donné preview locale=en sans traduction, alors le texte français est utilisé avec warning.
- [ ] Étant donné test, alors seuls mes appareils reçoivent la notification.

## 🧪 Tests à écrire

- [ ] integration: création + warnings
- [ ] integration: 422 longueur
- [ ] integration: RBAC
- [ ] integration: aperçu
- [ ] integration: test restreint à l'admin
- [ ] unit: liste blanche de deep links

## 🔗 Dépendances

À réaliser après : `API-NOTIF-01` · `API-NOTIF-12` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.11
- CDC Admin §4.12 (/admin/notifications/manual)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
