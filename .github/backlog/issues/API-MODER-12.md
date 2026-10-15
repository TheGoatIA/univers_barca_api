> **API-MODER-12** · API · Priorité **P0** · Taille **XL** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Les boutons de WG-02 (Ignorer, Masquer le contenu, Avertir, Suspendre, Bannir) ouvrent une confirmation ; WG-03 impose une justification pour bannir. L'action est atomique : état du signalement, contenu, compte, journal d'audit et notification.

## ✅ Objectif

Appliquer une décision de modération de façon transactionnelle, tracée et idempotente.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WG-02` — Détail d’un signalement
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__desktop_light.webp?raw=true' width='330' alt='WG-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__desktop_dark.webp?raw=true' width='330' alt='WG-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__tablet_light.webp?raw=true' width='330' alt='WG-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__tablet_dark.webp?raw=true' width='330' alt='WG-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « Signalements » · « #R-20418 » · « Signalement #R-20418 » · « Urgent » · « En attente » · « Message de groupe » · « Menace » · « Signalé il y a 12 min · motif déclaré : « Harcèlement ou menaces » » · « Contexte (messages précédents) » · « Aïcha N. » · « Le Clásico ce samedi, qui vient ? » · « Mamadou D. » · « On se retrouve au Relais à 19h30 » · « ultras_bcn » · « · il y a 14 min » · « « … (propos menaçants — contenu sensible masqué par défaut) … » » · « Afficher le contenu » · « Actions » · « Ignorer » · « Masquer le contenu » · « Avertir »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-MODER-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-01%5D%22) · [API-MODER-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-08%5D%22) · [API-MODER-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-10%5D%22) · [API-MODER-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-23%5D%22) · [API-MODER-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-30%5D%22) · [API-MODER-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-31%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

#### `WG-03` — Action — bannir avec justification
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__desktop_light.webp?raw=true' width='330' alt='WG-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__desktop_dark.webp?raw=true' width='330' alt='WG-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__tablet_light.webp?raw=true' width='330' alt='WG-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__tablet_dark.webp?raw=true' width='330' alt='WG-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « Signalements » · « #R-20418 » · « Signalement #R-20418 » · « Urgent » · « En attente » · « Message de groupe » · « Menace » · « Signalé il y a 12 min · motif déclaré : « Harcèlement ou menaces » » · « Contexte (messages précédents) » · « Aïcha N. » · « Le Clásico ce samedi, qui vient ? » · « Mamadou D. » · « On se retrouve au Relais à 19h30 » · « ultras_bcn » · « · il y a 14 min » · « « … (propos menaçants — contenu sensible masqué par défaut) … » » · « Afficher le contenu » · « Actions » · « Ignorer » · « Masquer le contenu » · « Avertir »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-MODER-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-02%5D%22) · [API-MODER-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-10%5D%22) · [API-MODER-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-11%5D%22) · [API-MODER-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-22%5D%22) · [API-MODER-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-23%5D%22) · [API-MODER-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-30%5D%22) · [API-MODER-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-31%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

## 📐 Règles de gestion

- Corps : {action: ignore|hide|warn|suspend|ban, severity: low|medium|high, justification, suspendUntil?, durationDays?}.
- justification obligatoire (10 à 1000 caractères) pour suspend et ban ; recommandée mais facultative pour hide/warn/ignore (400 JUSTIFICATION_REQUIRED sinon).
- suspend : durationDays entier 1-30 ; ban : définitif, révocation de tous les refresh tokens, retrait des groupes et masquage des contenus récents si demandé (hideRecent:true).
- Seul un modérateur ayant pris en charge (ou super-admin) peut décider ; un signalement resolved/ignored refuse toute nouvelle action (409 REPORT_CLOSED).
- Enregistre ModerationAction (gravité retenue, rang de récidive calculé, justification), AuditLog (USER_BANNED, CONTENT_HIDDEN, …), passe le report à resolved|ignored, ferme les signalements agrégés sur la même cible.
- Notification utilisateur (sauf ignore/hide seul) via la file notifications, sans identité du rapporteur ; Idempotency-Key supportée.
- Opération dans une transaction MongoDB (replica set) ; en cas d'échec, rollback complet.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/admin/moderation/reports/:id/action` | Appliquer une décision | {success:true,data:{reportId,status,actionId,targetStatus}} | {success:true,data} |

## 🛠️ Tâches

- [ ] Créer services/moderation-action.service.ts avec une stratégie par action (strategies/ignore|hide|warn|suspend|ban).
- [ ] Valider via Joi (discriminated union).
- [ ] Implémenter hide : User content flag hidden:true, hiddenBy, hiddenAt sur post/commentaire/wallpaper ; le fil affiche le placeholder K-07.
- [ ] Implémenter suspend/ban via account-state.service et révocation des tokens.
- [ ] Invalider le cache Redis d'état de compte.
- [ ] Enregistrer ModerationAction + AuditLog dans la même transaction.
- [ ] Émettre l'événement moderation.action.applied (consommé par notifications et métriques).
- [ ] Gérer l'idempotence (Redis, 24 h).
- [ ] Annoter Swagger avec un exemple par action.
- [ ] Mettre à jour les compteurs de la file.

## ✔️ Critères d'acceptation

- [ ] Étant donné un ban sans justification, alors 400 JUSTIFICATION_REQUIRED.
- [ ] Étant donné un ban valide, alors le compte passe banned, les refresh tokens sont révoqués, le report est resolved et un AuditLog USER_BANNED existe.
- [ ] Étant donné une suspension de 7 jours, alors suspendedUntil = maintenant + 7 jours.
- [ ] Étant donné hide, alors le message est remplacé par « Ce message a été masqué par la modération. » dans le fil.
- [ ] Étant donné un second appel avec la même Idempotency-Key, alors la réponse initiale est rejouée sans second effet.
- [ ] Étant donné une panne en cours d'écriture, alors aucun effet partiel.

## 🧪 Tests à écrire

- [ ] Test d'intégration : chaque action (5) nominale.
- [ ] Test d'intégration : justification obligatoire.
- [ ] Test d'intégration : rollback transactionnel.
- [ ] Test d'intégration : idempotence.
- [ ] Test de sécurité : un content-manager reçoit 403.
- [ ] Test d'intégration : fermeture des signalements agrégés.

## 🔗 Dépendances

À réaliser après : `API-MODER-10` · `API-MODER-11` · `API-MODER-04` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.11
- CDC Admin §4.6.1
- CDC Admin §6.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
