> **API-COMM-28** · Fonctionnel · Priorité **P1** · Taille **L** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

K-15 promet « Tu seras notifié(e) » à la validation. Le CDC prévoit SendCommunityActivityNotification respectant les préférences granulaires.

## ✅ Objectif

Implémenter les handlers de la file 'notifications' pour la communauté.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `K-15` — Groupe en attente de validation
_Module : Groupes locaux_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-15_groupe-en-attente-de-validation__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-15_groupe-en-attente-de-validation__phone_light.webp?raw=true' width='230' alt='K-15 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-15_groupe-en-attente-de-validation__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-15_groupe-en-attente-de-validation__phone_dark.webp?raw=true' width='230' alt='K-15 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-15_groupe-en-attente-de-validation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-15_groupe-en-attente-de-validation__tablet_light.webp?raw=true' width='330' alt='K-15 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-15_groupe-en-attente-de-validation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-15_groupe-en-attente-de-validation__tablet_dark.webp?raw=true' width='330' alt='K-15 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Culés Bafoussam » · « Demande en cours d’examen » · « Ton groupe sera visible sur la carte dès sa validation par un modérateur. Tu seras notifié(e). » · « Modifier ma demande » · « Annuler la demande »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [API-COMM-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-15%5D%22) · [API-COMM-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-16%5D%22) · [API-COMM-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-17%5D%22) · [MOB-K-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-24%5D%22) · [MOB-K-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-25%5D%22) · [MOB-K-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-30%5D%22) · [MOB-K-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-31%5D%22)

#### `K-13` — Bienvenue dans le groupe
_Module : Groupes locaux_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-13_bienvenue-dans-le-groupe__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-13_bienvenue-dans-le-groupe__phone_light.webp?raw=true' width='230' alt='K-13 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-13_bienvenue-dans-le-groupe__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-13_bienvenue-dans-le-groupe__phone_dark.webp?raw=true' width='230' alt='K-13 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-13_bienvenue-dans-le-groupe__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-13_bienvenue-dans-le-groupe__tablet_light.webp?raw=true' width='330' alt='K-13 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-13_bienvenue-dans-le-groupe__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-13_bienvenue-dans-le-groupe__tablet_dark.webp?raw=true' width='330' alt='K-13 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Groupe » · « Culés Cameroun » · « Yaoundé » · « 721 membres » · « Public » · « Le point de rendez-vous des supporters du Barça au Cameroun. Watch parties, discussions et bon esprit ! » · « Membre » · « Fil » · « Événements » · « Membres » · « Mamadou Diallo » · « Modérateur » · « il y a 12 min » · « Qui est chaud pour le Clásico samedi ? On se retrouve au Relais à 19h30 ! 🔵🔴 » · « Aïcha Ngono » · « il y a 1 h » · « Quelqu’un a vu la compo probable ? Yamal titulaire sans doute. » · « Kevin Mballa » · « il y a 3 h » · « Photo du dernier visionnage au Bastos, quelle ambiance ! » · « Écrire dans le groupe… » · « Bienvenue dans Culés Cameroun ! »

**Composants repérés** : `avatar`, `btn`, `card`, `toast`

</details>

**Issues liées sur ce même écran :** [API-COMM-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-19%5D%22) · [API-COMM-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-20%5D%22) · [API-COMM-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-32%5D%22) · [MOB-K-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-02%5D%22) · [MOB-K-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-06%5D%22) · [MOB-K-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-22%5D%22) · [MOB-K-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-29%5D%22) · [MOB-K-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-30%5D%22) · [MOB-K-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-31%5D%22)

#### `K-08` — Événements du groupe
_Module : Groupes locaux_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-08_evenements-du-groupe__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-08_evenements-du-groupe__phone_light.webp?raw=true' width='230' alt='K-08 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-08_evenements-du-groupe__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-08_evenements-du-groupe__phone_dark.webp?raw=true' width='230' alt='K-08 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-08_evenements-du-groupe__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-08_evenements-du-groupe__tablet_light.webp?raw=true' width='330' alt='K-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-08_evenements-du-groupe__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-08_evenements-du-groupe__tablet_dark.webp?raw=true' width='330' alt='K-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Groupe » · « Culés Cameroun » · « Yaoundé » · « 721 membres » · « Public » · « Le point de rendez-vous des supporters du Barça au Cameroun. Watch parties, discussions et bon esprit ! » · « Membre » · « Fil » · « Événements » · « Membres » · « oct. » · « Watch party · Clásico » · « Le Relais, Yaoundé » · « 37 y vont » · « Watch party · Liga J12 » · « Bastos Lounge, Yaoundé » · « 12 y vont » · « nov. » · « Tournoi FIFA entre culés » · « Café Central, Douala » · « 9 y vont » · « Organiser une watch party »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-COMM-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-24%5D%22) · [API-COMM-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-25%5D%22) · [API-COMM-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-32%5D%22) · [MOB-K-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-01%5D%22) · [MOB-K-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-04%5D%22) · [MOB-K-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-17%5D%22) · [MOB-K-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-28%5D%22) · [MOB-K-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-30%5D%22) · [MOB-K-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-31%5D%22)

#### `K-09` — Détail d’un événement
_Module : Groupes locaux_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-09_detail-d-un-evenement__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-09_detail-d-un-evenement__phone_light.webp?raw=true' width='230' alt='K-09 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-09_detail-d-un-evenement__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-09_detail-d-un-evenement__phone_dark.webp?raw=true' width='230' alt='K-09 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-09_detail-d-un-evenement__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-09_detail-d-un-evenement__tablet_light.webp?raw=true' width='330' alt='K-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-09_detail-d-un-evenement__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-09_detail-d-un-evenement__tablet_dark.webp?raw=true' width='330' alt='K-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Watch party » · « Clásico » · « au Relais » · « Sam. 24 oct. » · « 19:30 WAT » · « Le Relais » · « Quartier Bastos, Yaoundé » · « Organisé par Mamadou D. » · « Modérateur du groupe » · « 37 participants » · « dont 12 de tes connaissances » · « Match » · « Barça » · « vs » · « Real Madrid » · « Liga » · « Je participe »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-COMM-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-24%5D%22) · [API-COMM-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-25%5D%22) · [MOB-K-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-04%5D%22) · [MOB-K-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-18%5D%22) · [MOB-K-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-30%5D%22) · [MOB-K-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-31%5D%22)

## 📐 Règles de gestion

- Types : group-approved, group-rejected (avec motif général), group-event-created, group-event-reminder (J-1 à 18:00 locale et 1 h avant), group-new-activity (digest max 1 par groupe et par 6 h).
- Respect de NotificationPreference (catégorie community) et heures calmes ; pas de notification au créateur d'un contenu pour ses propres actions.
- Un membre ayant masqué un utilisateur ne reçoit pas ses notifications ; départ du groupe = désabonnement immédiat.
- Payload FCM avec deeplink univers-barca://groups/{id}, titre/corps localisés (fr/en/es) selon user.locale ; NotificationLog écrit pour chaque envoi.

## 🛠️ Tâches

- [ ] Créer jobs/workers/community-notifications.worker.ts.
- [ ] Ajouter les gabarits localisés dans src/templates/notifications/community.*.json.
- [ ] Cron de rappels (toutes les 15 min) recherchant les événements à J-1 et H-1.
- [ ] Service NotificationService.sendToUsers (lot de 500).
- [ ] Dé-doublonnage via clé d'idempotence jobId.
- [ ] Tests et métriques.

## ✔️ Critères d'acceptation

- [ ] Étant donné une validation de groupe, quand le modérateur valide, alors le créateur reçoit group-approved.
- [ ] Étant donné un événement dans 24 h, quand le cron passe, alors les participants reçoivent un rappel unique.
- [ ] Étant donné la catégorie community désactivée, quand un événement est créé, alors aucune notification n'est envoyée.
- [ ] Étant donné 10 posts en 1 h, alors un seul digest est envoyé.

## 🧪 Tests à écrire

- [ ] Test d'intégration : approbation.
- [ ] Test unitaire : digest.
- [ ] Test d'intégration : préférences.
- [ ] Test unitaire : localisation des gabarits.

## 🔗 Dépendances

À réaliser après : `API-COMM-24` · `API-COMM-16` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.10

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
