> **API-MODER-11** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

WG-06 présente le barème indicatif (faible : avertissement puis suspension 7 jours ; moyenne : suspension 7-30 jours puis bannissement ; élevée : bannissement immédiat) et WG-04 affiche « Récidive : rang 2 ». Chaque action doit enregistrer gravité retenue et rang.

## ✅ Objectif

Calculer le rang de récidive et suggérer une sanction sans jamais l'automatiser.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WG-06` — Barème de sanctions
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-06_bareme-de-sanctions__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-06_bareme-de-sanctions__desktop_light.webp?raw=true' width='330' alt='WG-06 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-06_bareme-de-sanctions__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-06_bareme-de-sanctions__desktop_dark.webp?raw=true' width='330' alt='WG-06 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-06_bareme-de-sanctions__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-06_bareme-de-sanctions__tablet_light.webp?raw=true' width='330' alt='WG-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-06_bareme-de-sanctions__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-06_bareme-de-sanctions__tablet_dark.webp?raw=true' width='330' alt='WG-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « Barème de sanctions » · « Cadre de cohérence indicatif — la décision reste celle du modérateur » · « Gravité » · « Exemple » · « 1re occurrence » · « Récidive » · « Faible » · « Propos déplacés isolés » · « Avertissement » · « Suspension 7 jours » · « Moyenne » · « Harcèlement, contenu discriminatoire » · « Suspension 7 à 30 jours » · « Bannissement définitif » · « Élevée » · « Menace, contenu illégal » · « Bannissement immédiat » · « N/A » · « Traçabilité » · « Chaque action enregistre le type de sanction, la gravité retenue et le rang de récidive, pour auditer la cohérence entre modérateurs. » · « Notification de l’utilisateur » · « Toute sanction déclenche une notification explicative (motif général), sans révéler l’identité du rapporteur. »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [API-MODER-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-23%5D%22) · [API-MODER-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-26%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

#### `WG-04` — Historique de modération d’un utilisateur
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__desktop_light.webp?raw=true' width='330' alt='WG-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__desktop_dark.webp?raw=true' width='330' alt='WG-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__tablet_light.webp?raw=true' width='330' alt='WG-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__tablet_dark.webp?raw=true' width='330' alt='WG-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « ultras_bcn » · « Historique » · « Historique de modération » · « ultras_bcn · compte créé le 14 juin 2026 » · « Voir le profil » · « Signalements reçus » · « 2 fondés » · « Avertissements » · « 3 oct. 2026 » · « Suspensions » · « Statut » · « Actif » · « Récidive : rang 2 » · « Chronologie » · « 12 min » · « Signalement #R-20418 » · « Menace · en attente » · « 3 oct. » · « Avertissement » · « Propos déplacés · Karim B. · gravité faible » · « 28 sept. » · « Signalement ignoré » · « Non fondé · Karim B. »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-MODER-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-02%5D%22) · [API-MODER-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-13%5D%22) · [API-MODER-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-14%5D%22) · [API-MODER-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-19%5D%22) · [API-MODER-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-22%5D%22) · [API-MODER-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-28%5D%22) · [API-MODER-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-29%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

#### `WG-03` — Action — bannir avec justification
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__desktop_light.webp?raw=true' width='330' alt='WG-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__desktop_dark.webp?raw=true' width='330' alt='WG-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__tablet_light.webp?raw=true' width='330' alt='WG-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__tablet_dark.webp?raw=true' width='330' alt='WG-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « Signalements » · « #R-20418 » · « Signalement #R-20418 » · « Urgent » · « En attente » · « Message de groupe » · « Menace » · « Signalé il y a 12 min · motif déclaré : « Harcèlement ou menaces » » · « Contexte (messages précédents) » · « Aïcha N. » · « Le Clásico ce samedi, qui vient ? » · « Mamadou D. » · « On se retrouve au Relais à 19h30 » · « ultras_bcn » · « · il y a 14 min » · « « … (propos menaçants — contenu sensible masqué par défaut) … » » · « Afficher le contenu » · « Actions » · « Ignorer » · « Masquer le contenu » · « Avertir »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-MODER-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-02%5D%22) · [API-MODER-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-10%5D%22) · [API-MODER-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-12%5D%22) · [API-MODER-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-22%5D%22) · [API-MODER-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-23%5D%22) · [API-MODER-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-30%5D%22) · [API-MODER-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-31%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

## 📐 Règles de gestion

- Rang de récidive = 1 + nombre de sanctions fondées (warn, suspend, ban) de l'utilisateur sur les 12 derniers mois ; ignorées exclues.
- Suggestion : faible rang1 -> warn, rang>=2 -> suspend 7 jours ; moyenne rang1 -> suspend 7-30 jours, rang>=2 -> ban ; élevée -> ban immédiat.
- Barème stocké en base (moderation_scale), modifiable par le super-admin avec versionnage et audit ; GET en lecture pour les modérateurs.
- La suggestion est purement informative : le modérateur peut s'en écarter, avec justification si l'écart est plus clément ou plus sévère de plus d'un niveau.
- Réponse WG-06 : lignes gravité/exemple/première occurrence/récidive.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/moderation/scale` | Barème indicatif | {success:true,data:{version,rows:[{severity,example,first,repeat}]}} | {success:true,data} |

## 🛠️ Tâches

- [ ] Créer models/moderation-scale.model.ts + seed du barème CDC.
- [ ] Créer services/sanction-scale.service.ts (suggest, computeRank).
- [ ] Créer GET /admin/moderation/scale et PUT /admin/moderation/scale (super-admin).
- [ ] Ajouter l'index {targetUserId:1,actionType:1,createdAt:-1}.
- [ ] Journaliser SCALE_UPDATED avec before/after.
- [ ] Documenter dans Swagger.
- [ ] Exposer suggestedAction dans le détail signalement.

## ✔️ Critères d'acceptation

- [ ] Étant donné un utilisateur avec 1 avertissement il y a 3 mois, alors le rang vaut 2.
- [ ] Étant donné un avertissement vieux de 13 mois, alors il n'est pas compté.
- [ ] Étant donné gravité élevée, alors la suggestion est ban immédiat.
- [ ] Étant donné un modérateur, quand il appelle PUT scale, alors 403.

## 🧪 Tests à écrire

- [ ] Test unitaire : computeRank avec fenêtre 12 mois.
- [ ] Test unitaire paramétré : suggestions.
- [ ] Test d'intégration : PUT scale audité.
- [ ] Test d'intégration : lecture par moderator.

## 🔗 Dépendances

À réaliser après : `API-MODER-02` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.6.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
