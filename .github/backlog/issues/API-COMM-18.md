> **API-COMM-18** · Sécurité · Priorité **P1** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

K-14 propose « Choisir une image » et le fil de groupe affiche des photos (K-02 « Photo du dernier visionnage… »). Les images contiennent souvent des coordonnées GPS dans l'EXIF.

## ✅ Objectif

Créer POST /community/uploads avec validation stricte et suppression des métadonnées.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `K-14` — Créer un groupe — demande
_Module : Groupes locaux_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-14_creer-un-groupe-demande__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-14_creer-un-groupe-demande__phone_light.webp?raw=true' width='230' alt='K-14 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-14_creer-un-groupe-demande__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-14_creer-un-groupe-demande__phone_dark.webp?raw=true' width='230' alt='K-14 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-14_creer-un-groupe-demande__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-14_creer-un-groupe-demande__tablet_light.webp?raw=true' width='330' alt='K-14 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-14_creer-un-groupe-demande__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-14_creer-un-groupe-demande__tablet_dark.webp?raw=true' width='330' alt='K-14 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Créer un groupe » · « Choisir une image » · « Nom du groupe » · « Culés Bafoussam » · « Ville » · « Bafoussam » · « Description » · « Le groupe des supporters du Barça dans l'Ouest du Cameroun. » · « Un groupe local est validé par un modérateur lorsqu'il compte peu de membres. Délai moyen : 24 h. » · « Envoyer pour validation »

**Composants repérés** : `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [API-COMM-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-15%5D%22) · [API-COMM-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-16%5D%22) · [API-COMM-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-17%5D%22) · [API-COMM-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-27%5D%22) · [API-COMM-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-32%5D%22) · [API-COMM-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-33%5D%22) · [MOB-K-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-23%5D%22) · [MOB-K-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-24%5D%22) · [MOB-K-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-30%5D%22) · [MOB-K-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-31%5D%22)

#### `K-03` — Rédiger un message
_Module : Groupes locaux_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-03_rediger-un-message__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-03_rediger-un-message__phone_light.webp?raw=true' width='230' alt='K-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-03_rediger-un-message__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-03_rediger-un-message__phone_dark.webp?raw=true' width='230' alt='K-03 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-03_rediger-un-message__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-03_rediger-un-message__tablet_light.webp?raw=true' width='330' alt='K-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-03_rediger-un-message__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-03_rediger-un-message__tablet_dark.webp?raw=true' width='330' alt='K-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Groupe » · « Culés Cameroun » · « Yaoundé » · « 721 membres » · « Public » · « Le point de rendez-vous des supporters du Barça au Cameroun. Watch parties, discussions et bon esprit ! » · « Membre » · « Fil » · « Événements » · « Membres » · « Mamadou Diallo » · « Modérateur » · « il y a 12 min » · « Qui est chaud pour le Clásico samedi ? On se retrouve au Relais à 19h30 ! 🔵🔴 » · « Aïcha Ngono » · « il y a 1 h » · « Quelqu’un a vu la compo probable ? Yamal titulaire sans doute. » · « Kevin Mballa » · « il y a 3 h » · « Photo du dernier visionnage au Bastos, quelle ambiance ! » · « Écrire dans le groupe… » · « Annuler » · « Nouveau message » · « Publier » · « Boris T. » · « Visible par les 721 membres » · « Qui vient au visionnage de samedi ? J'amène le maillot 🔥 » · « 52 / 500 » · « Les messages sont soumis à la » · « charte de la communauté »

**Composants repérés** : `avatar`, `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-COMM-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-22%5D%22) · [API-COMM-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-27%5D%22) · [API-COMM-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-32%5D%22) · [MOB-K-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-03%5D%22) · [MOB-K-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-07%5D%22) · [MOB-K-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-10%5D%22) · [MOB-K-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-11%5D%22) · [MOB-K-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-27%5D%22) · [MOB-K-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-30%5D%22) · [MOB-K-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-31%5D%22)

#### `K-02` — Fil de discussion
_Module : Groupes locaux_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-02_fil-de-discussion__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-02_fil-de-discussion__phone_light.webp?raw=true' width='230' alt='K-02 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-02_fil-de-discussion__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-02_fil-de-discussion__phone_dark.webp?raw=true' width='230' alt='K-02 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-02_fil-de-discussion__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-02_fil-de-discussion__tablet_light.webp?raw=true' width='330' alt='K-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-02_fil-de-discussion__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-02_fil-de-discussion__tablet_dark.webp?raw=true' width='330' alt='K-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Culés Cameroun » · « Yaoundé » · « 721 membres » · « Public » · « Le point de rendez-vous des supporters du Barça au Cameroun. Watch parties, discussions et bon esprit ! » · « Membre » · « Fil » · « Événements » · « Membres » · « Mamadou Diallo » · « Modérateur » · « il y a 12 min » · « Qui est chaud pour le Clásico samedi ? On se retrouve au Relais à 19h30 ! 🔵🔴 » · « Aïcha Ngono » · « il y a 1 h » · « Quelqu’un a vu la compo probable ? Yamal titulaire sans doute. » · « Kevin Mballa » · « il y a 3 h » · « Photo du dernier visionnage au Bastos, quelle ambiance ! » · « Écrire dans le groupe… »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-COMM-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-19%5D%22) · [API-COMM-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-21%5D%22) · [API-COMM-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-22%5D%22) · [API-COMM-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-23%5D%22) · [API-COMM-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-29%5D%22) · [API-COMM-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-30%5D%22) · [API-COMM-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-32%5D%22) · [MOB-K-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-01%5D%22) · [MOB-K-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-03%5D%22) · [MOB-K-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-06%5D%22) · [MOB-K-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-07%5D%22) · [MOB-K-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-09%5D%22) · [MOB-K-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-27%5D%22) · [MOB-K-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-28%5D%22) · [MOB-K-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-29%5D%22) · [MOB-K-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-30%5D%22) · [MOB-K-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-31%5D%22)

## 📐 Règles de gestion

- Types acceptés : image/jpeg, image/png, image/webp ; taille ≤ 5 Mo ; dimensions ≤ 4096×4096 ; vérification du type réel par magic bytes (pas du seul Content-Type).
- Les métadonnées EXIF/GPS sont systématiquement supprimées, l'image est ré-encodée (sharp) en WebP max 1600 px (avatar 512 px).
- Retour d'une imageKey opaque (UUID) ; stockage S3-compatible (STORAGE_*), jamais le nom de fichier d'origine.
- Quota : 20 uploads/jour/utilisateur ; une pièce non rattachée à un contenu sous 24 h est purgée par job.
- Les images signalées/masquées par la modération ne sont plus servies.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/community/uploads` | Téléverse une image | multipart/form-data: file, purpose=group-avatar\|post-image | {"success":true,"data":{"imageKey":"7b1c…"}} |

## 🗄️ Données

- uploads

## 🛠️ Tâches

- [ ] Ajouter POST /community/uploads (multipart, multer en mémoire limit 5 Mo).
- [ ] Créer services/upload.service.ts (sharp : rotate, strip metadata, resize, webp).
- [ ] Créer le modèle Upload { key, userId, purpose, status, createdAt }.
- [ ] Ajouter l'adaptateur de stockage S3 + implémentation locale pour dev/test.
- [ ] Créer le job de purge des uploads orphelins (cron quotidien).
- [ ] Générer des URLs signées de lecture (15 min).
- [ ] Swagger (multipart).

## ✔️ Critères d'acceptation

- [ ] Étant donné un JPEG avec EXIF GPS, quand il est téléversé, alors l'image stockée ne contient aucune métadonnée GPS.
- [ ] Étant donné un fichier .exe renommé .jpg, quand il est téléversé, alors 415.
- [ ] Étant donné 6 Mo, quand téléversé, alors 413.
- [ ] Étant donné un upload non rattaché après 24 h, quand le job tourne, alors il est supprimé.

## 🧪 Tests à écrire

- [ ] Test unitaire : strip EXIF (exif-parser sur la sortie).
- [ ] Test d'intégration : refus de type.
- [ ] Test d'intégration : taille.
- [ ] Test du job de purge.
- [ ] Test de sécurité : imageKey inconnue => 404.

## 🔗 Dépendances

À réaliser après : `API-COMM-15` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §5.3
- CDC Global §10.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
