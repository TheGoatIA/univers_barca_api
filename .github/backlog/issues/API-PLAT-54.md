> **API-PLAT-54** · RGPD · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

CDC Global §3.2 exige un registre des traitements. L'API traite identité, consentements, localisation approximative, notifications, historique IA, journaux d'audit et logs techniques, avec plusieurs sous-traitants (hébergeur, FCM, fournisseur IA, e-mail, API football).

## ✅ Objectif

Tenir à jour un registre versionné, relié aux durées de rétention et vérifié à chaque nouveau traitement.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WH-03` — Explorateur de logs
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__desktop_light.webp?raw=true' width='330' alt='WH-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__desktop_dark.webp?raw=true' width='330' alt='WH-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__tablet_light.webp?raw=true' width='330' alt='WH-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__tablet_dark.webp?raw=true' width='330' alt='WH-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Logs » · « Explorateur de logs » · « Données personnelles masquées · conservation 90 jours » · « Ouvrir dans Graylog » · « Rechercher… » · « Service : api » · « Niveau : ≥ warn » · « Dernières 24 h » · « traceId: 9f3a21c8… » · « Horodatage » · « Niveau »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-08%5D%22) · [ADM-WH-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-09%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22) · [API-PLAT-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-16%5D%22) · [API-PLAT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-24%5D%22) · [API-PLAT-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-25%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

#### `WH-05` — Journal d’audit
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__desktop_light.webp?raw=true' width='330' alt='WH-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__desktop_dark.webp?raw=true' width='330' alt='WH-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__tablet_light.webp?raw=true' width='330' alt='WH-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__tablet_dark.webp?raw=true' width='330' alt='WH-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Piste immuable de toutes les actions d’administration » · « Exporter CSV » · « Rechercher… » · « Administrateur » · « Type d’action » · « Entité » · « Période : 7 jours » · « Horodatage » · « Avant → après » · « Justification » · « 15 oct. 09:41 »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-09%5D%22) · [ADM-WH-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-11%5D%22) · [ADM-WH-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-12%5D%22) · [ADM-WH-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-13%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22) · [API-PLAT-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-18%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

## 📐 Règles de gestion

- docs/rgpd/REGISTRE.md (ou YAML) : pour chaque traitement — finalité, base légale (contrat, consentement, intérêt légitime), catégories de données, personnes concernées, destinataires/sous-traitants, transferts hors UE, durée de conservation, mesures de sécurité, collections concernées.
- Traitements minimum : comptes/authentification, consentements (historisés), profil et localisation approximative (consentement), notifications push, assistant IA et wallpapers (prompts), logs applicatifs (90 j), audit admin (conservation longue, intérêt légitime), sauvegardes (30 j + 6 mois), analytics d'usage.
- Cohérence code ↔ registre : test qui liste les collections Mongoose contenant des champs personnels (annotation pii:true dans le schéma) et échoue si absentes du registre.
- Droits : accès/export (GET /users/me/export), rectification, effacement (J+30), retrait de consentement — tableau de correspondance endpoints ↔ droit.
- Revue obligatoire (case de PR « données personnelles ») pour tout nouveau champ personnel ; sous-traitants : DPA référencés.

## 🛠️ Tâches

- [ ] Rédiger docs/rgpd/REGISTRE.md et docs/rgpd/SOUS_TRAITANTS.md.
- [ ] Ajouter l'option de schéma { pii: true, category } via un plugin Mongoose.
- [ ] Écrire tests/architecture/pii-registry.test.ts.
- [ ] Ajouter la case RGPD au modèle de PR.
- [ ] Relier jobs-purge-retention aux durées du registre.
- [ ] Prévoir la procédure de notification d'une violation (72 h) dans docs/runbooks/violation-donnees.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné un nouveau champ pii:true absent du registre, alors le test d'architecture échoue.
- [ ] Étant donné chaque traitement, alors une durée de conservation est renseignée.
- [ ] Étant donné la procédure de violation, alors elle précise l'obligation de notification sous 72 h.
- [ ] Étant donné un sous-traitant ajouté, alors le fichier SOUS_TRAITANTS.md est mis à jour (revue).

## 🧪 Tests à écrire

- [ ] Architecture: pii-registry.
- [ ] Revue: registre complet (checklist).
- [ ] Unitaire: plugin pii.
- [ ] Revue: tableau droits ↔ endpoints.

## 📚 Références

- CDC Global §3.2
- CDC Backend §4.8
- CDC Backend §5.7

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
