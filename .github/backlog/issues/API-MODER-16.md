> **API-MODER-16** · API · Priorité **P1** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

WG-05 : 212 groupes dont 4 en attente de validation, onglets En attente / Actifs (202) / Archivés, actions Valider / Refuser, règle de validation. Complète les demandes de création faites par l'API groupes (groupe COMM).

## ✅ Objectif

Permettre aux modérateurs de valider, refuser et archiver les groupes, avec traçabilité.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WG-05` — Gestion des groupes locaux
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__desktop_light.webp?raw=true' width='330' alt='WG-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__desktop_dark.webp?raw=true' width='330' alt='WG-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__tablet_light.webp?raw=true' width='330' alt='WG-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__tablet_dark.webp?raw=true' width='330' alt='WG-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « 212 groupes · 4 en attente de validation » · « Règle de validation » · « En attente » · « Actifs » · « Archivés » · « Groupe » · « Ville » · « Créateur » · « Membres » · « Statut » · « Actions » · « Culés Bafoussam » · « Bafoussam, CM » · « Boris T. » · « Valider » · « Refuser » · « Barça Lyon 69 » · « Lyon, FR » · « Sofía R. » · « Peña de Dakar » · « Dakar, SN »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

## 📐 Règles de gestion

- GET /admin/moderation/groups?status=pending|active|archived&q= avec ville, pays, créateur, nombre de membres.
- POST /:id/validate passe pending -> active ; POST /:id/reject exige un motif (>= 10 car.) communiqué au créateur ; POST /:id/archive masque le groupe de la carte et des recherches.
- Règle de validation affichée : nom unique par ville, ville valide du référentiel geo, description 20-500 caractères, filtre de termes OK.
- Chaque décision journalisée (GROUP_VALIDATED, GROUP_REJECTED, GROUP_ARCHIVED) et notifiée au créateur.
- Un groupe archivé conserve son historique pour 12 mois puis est anonymisé.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/admin/moderation/groups/:id/validate` | Valider un groupe | {success:true,data:{status:'active'}} | {success:true,data} |

## 🛠️ Tâches

- [ ] Créer endpoints sous /admin/moderation/groups.
- [ ] Réutiliser Group du modèle community et ses statuts de COMM (pending/active/archived).
- [ ] Valider via le filtre de termes (auto-check renvoyé dans la liste).
- [ ] Notifier le créateur via la file notifications.
- [ ] Mettre à jour les agrégats carte à l'activation/archivage (job de recalcul COMM).
- [ ] Index {status:1,createdAt:1}.
- [ ] Annoter Swagger.

## ✔️ Critères d'acceptation

- [ ] Étant donné un groupe pending, quand je le valide, alors il devient visible sur la carte et le créateur est notifié.
- [ ] Étant donné un refus sans motif, alors 400.
- [ ] Étant donné un groupe archivé, alors il n'apparaît plus dans /groups/search.
- [ ] Étant donné un nom déjà pris dans la ville, alors autoCheck.nameUnique=false.

## 🧪 Tests à écrire

- [ ] Test d'intégration : validation/refus/archivage.
- [ ] Test d'intégration : notification émise.
- [ ] Test d'intégration : impact sur la recherche publique.
- [ ] Test de sécurité : RBAC.

## 🔗 Dépendances

À réaliser après : `API-MODER-02` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.6
- CDC Backend §3.7

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
