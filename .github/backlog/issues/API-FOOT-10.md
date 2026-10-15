> **API-FOOT-10** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

WE-02 propose « Planifier » et « Publier » avec message « Diffusion planifiée le lundi 19 octobre 2026 à 06:00 ». Le mobile doit voir l'anecdote le jour J.

## ✅ Objectif

Cycle de vie des anecdotes avec publication automatique par job.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WE-01` — Bibliothèque d’anecdotes
_Module : Contenu éditorial_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__desktop_light.webp?raw=true' width='330' alt='WE-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__desktop_dark.webp?raw=true' width='330' alt='WE-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__tablet_light.webp?raw=true' width='330' alt='WE-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__tablet_dark.webp?raw=true' width='330' alt='WE-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Anecdotes « Aujourd’hui dans l’histoire » · 212 contenus » · « Calendrier éditorial » · « Nouvelle anecdote » · « Rechercher… » · « Catégorie » · « Statut » · « Langues » · « Mois : octobre » · « Date de diffusion » · « Titre » · « 19 oct. » · « Le but de Koeman à Wembley » · « Histoire du club » · « Planifié » · « 21 oct. » · « Naissance de Gavi » · « 23 oct. » · « Le 5-0 de la Manita » · « En attente de traduction »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WE-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-01%5D%22) · [ADM-WE-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-02%5D%22) · [ADM-WE-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-03%5D%22) · [ADM-WE-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-07%5D%22) · [ADM-WE-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-09%5D%22) · [ADM-WE-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-13%5D%22) · [ADM-WE-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-14%5D%22) · [API-FOOT-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-04%5D%22) · [API-FOOT-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-32%5D%22) · [API-FOOT-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-45%5D%22) · [API-FOOT-51](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-51%5D%22) · [API-FOOT-53](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-53%5D%22) · [API-FOOT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-55%5D%22)

#### `WE-02` — Éditeur trilingue et aperçu mobile
_Module : Contenu éditorial_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__desktop_light.webp?raw=true' width='330' alt='WE-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__desktop_dark.webp?raw=true' width='330' alt='WE-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__tablet_light.webp?raw=true' width='330' alt='WE-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__tablet_dark.webp?raw=true' width='330' alt='WE-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Le but de Koeman à Wembley » · « Prêt à publier » · « Diffusion planifiée le lundi 19 octobre 2026 à 06:00 » · « Planifier » · « Publier » · « Titre » · « Texte » · « FR · Français » · « EN · English » · « ES · Español » · « Le 20 mai 1992, Ronald Koeman inscrit sur coup franc le but qui offre au Barça sa première Coupe d’Europe des clubs champions, face à la Sampdoria. » · « Les 3 langues sont complètes — prêt à publier » · « 171 / 600 » · « Image d’illustration » · « Choisir dans la médiathèque » · « Date de diffusion » · « 19/10/2026 » · « Catégorie » · « Histoire du club » · « Aperçu mobile » · « Clair » · « Sombre »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WE-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-01%5D%22) · [ADM-WE-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-04%5D%22) · [ADM-WE-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-05%5D%22) · [ADM-WE-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-06%5D%22) · [ADM-WE-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-07%5D%22) · [ADM-WE-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-12%5D%22) · [ADM-WE-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-13%5D%22) · [ADM-WE-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-14%5D%22) · [API-FOOT-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-04%5D%22) · [API-FOOT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-05%5D%22) · [API-FOOT-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-45%5D%22) · [API-FOOT-47](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-47%5D%22)

#### `C-12` — Détail — Aujourd’hui dans l’histoire
_Module : Accueil dashboard_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-12_detail-aujourd-hui-dans-l-histoire__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-12_detail-aujourd-hui-dans-l-histoire__phone_light.webp?raw=true' width='230' alt='C-12 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-12_detail-aujourd-hui-dans-l-histoire__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-12_detail-aujourd-hui-dans-l-histoire__phone_dark.webp?raw=true' width='230' alt='C-12 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-12_detail-aujourd-hui-dans-l-histoire__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-12_detail-aujourd-hui-dans-l-histoire__tablet_light.webp?raw=true' width='330' alt='C-12 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-12_detail-aujourd-hui-dans-l-histoire__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/C/C-12_detail-aujourd-hui-dans-l-histoire__tablet_dark.webp?raw=true' width='330' alt='C-12 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Dans l’histoire » · « 15 octobre · 2011 » · « Un 4-0 qui entre dans la légende » · « Ligue des champions » · « Camp Nou » · « Ce soir-là, le jeu de position atteint un sommet : possession, pressing haut et une circulation de balle qui laisse l'adversaire sans solution. Une anecdote rédigée par l'équipe éditoriale. » · « Pose une question à Barça AI sur ce match » · « Voir la fiche du match » · « Partager »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FOOT-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-04%5D%22) · [API-FOOT-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-08%5D%22) · [API-FOOT-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-18%5D%22) · [API-FOOT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-19%5D%22) · [MOB-C-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-23%5D%22) · [MOB-C-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-25%5D%22) · [MOB-C-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-26%5D%22) · [MOB-C-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-C-27%5D%22)

## 📐 Règles de gestion

- Diffusion à 06:00 Europe/Paris le jour publishOn ; fuseau configurable ANECDOTE_PUBLISH_TZ.
- Planifier : ready→scheduled (publishOn >= aujourd'hui) ; Publier maintenant : ready→published immédiat.
- Job cron quotidien 06:00 : scheduled dont publishOn <= today → published (idempotent).
- Une seule anecdote published par couple (publishOn) : conflit → 409 ANECDOTE_DATE_TAKEN.
- Anecdote non couverte : « 9 jours non couverts ce mois-ci » = jours sans scheduled/published.

## 🛠️ Tâches

- [ ] Créer src/services/anecdote.service.ts (schedule, publishNow, unschedule, publishDue).
- [ ] Ajouter job 'anecdote-publish' dans src/jobs/scheduler.ts (cron 0 6 * * * Europe/Paris).
- [ ] Index unique partiel {publishOn} pour statuts scheduled/published.
- [ ] Invalidation du cache anecdote du jour à la publication.
- [ ] Audit ANECDOTE_PUBLISHED / ANECDOTE_SCHEDULED.
- [ ] Rattrapage au démarrage si le job a été manqué.

## ✔️ Critères d'acceptation

- [ ] Étant donné une anecdote scheduled pour aujourd'hui, quand le job tourne, alors elle passe published.
- [ ] Étant donné le job rejoué, alors aucun effet.
- [ ] Étant donné deux anecdotes le même jour, alors 409.

## 🧪 Tests à écrire

- [ ] Unitaire : publishDue idempotent.
- [ ] Intégration : planification puis diffusion.
- [ ] Intégration : conflit de date.
- [ ] Unitaire : calcul des jours non couverts.

## 🔗 Dépendances

À réaliser après : `API-FOOT-04` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
