> **API-COMM-22** · Fonctionnel · Priorité **P0** · Taille **L** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Le fil (K-02) affiche les messages avec auteur, badge « Modérateur », « il y a 12 min ». K-03 « Nouveau message » limite à 500 caractères (compteur 52 / 500). K-07 affiche « Ce message a été masqué par la modération. ».

## ✅ Objectif

Implémenter lecture et publication des messages.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `K-02` — Fil de discussion
_Module : Groupes locaux_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-02_fil-de-discussion__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-02_fil-de-discussion__phone_light.webp?raw=true' width='230' alt='K-02 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-02_fil-de-discussion__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-02_fil-de-discussion__phone_dark.webp?raw=true' width='230' alt='K-02 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-02_fil-de-discussion__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-02_fil-de-discussion__tablet_light.webp?raw=true' width='330' alt='K-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-02_fil-de-discussion__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-02_fil-de-discussion__tablet_dark.webp?raw=true' width='330' alt='K-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Culés Cameroun » · « Yaoundé » · « 721 membres » · « Public » · « Le point de rendez-vous des supporters du Barça au Cameroun. Watch parties, discussions et bon esprit ! » · « Membre » · « Fil » · « Événements » · « Membres » · « Mamadou Diallo » · « Modérateur » · « il y a 12 min » · « Qui est chaud pour le Clásico samedi ? On se retrouve au Relais à 19h30 ! 🔵🔴 » · « Aïcha Ngono » · « il y a 1 h » · « Quelqu’un a vu la compo probable ? Yamal titulaire sans doute. » · « Kevin Mballa » · « il y a 3 h » · « Photo du dernier visionnage au Bastos, quelle ambiance ! » · « Écrire dans le groupe… »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-COMM-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-18%5D%22) · [API-COMM-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-19%5D%22) · [API-COMM-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-21%5D%22) · [API-COMM-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-23%5D%22) · [API-COMM-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-29%5D%22) · [API-COMM-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-30%5D%22) · [API-COMM-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-32%5D%22) · [MOB-K-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-01%5D%22) · [MOB-K-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-03%5D%22) · [MOB-K-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-06%5D%22) · [MOB-K-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-07%5D%22) · [MOB-K-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-09%5D%22) · [MOB-K-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-27%5D%22) · [MOB-K-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-28%5D%22) · [MOB-K-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-29%5D%22) · [MOB-K-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-30%5D%22) · [MOB-K-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-31%5D%22)

#### `K-03` — Rédiger un message
_Module : Groupes locaux_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-03_rediger-un-message__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-03_rediger-un-message__phone_light.webp?raw=true' width='230' alt='K-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-03_rediger-un-message__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-03_rediger-un-message__phone_dark.webp?raw=true' width='230' alt='K-03 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-03_rediger-un-message__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-03_rediger-un-message__tablet_light.webp?raw=true' width='330' alt='K-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-03_rediger-un-message__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-03_rediger-un-message__tablet_dark.webp?raw=true' width='330' alt='K-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Groupe » · « Culés Cameroun » · « Yaoundé » · « 721 membres » · « Public » · « Le point de rendez-vous des supporters du Barça au Cameroun. Watch parties, discussions et bon esprit ! » · « Membre » · « Fil » · « Événements » · « Membres » · « Mamadou Diallo » · « Modérateur » · « il y a 12 min » · « Qui est chaud pour le Clásico samedi ? On se retrouve au Relais à 19h30 ! 🔵🔴 » · « Aïcha Ngono » · « il y a 1 h » · « Quelqu’un a vu la compo probable ? Yamal titulaire sans doute. » · « Kevin Mballa » · « il y a 3 h » · « Photo du dernier visionnage au Bastos, quelle ambiance ! » · « Écrire dans le groupe… » · « Annuler » · « Nouveau message » · « Publier » · « Boris T. » · « Visible par les 721 membres » · « Qui vient au visionnage de samedi ? J'amène le maillot 🔥 » · « 52 / 500 » · « Les messages sont soumis à la » · « charte de la communauté »

**Composants repérés** : `avatar`, `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-COMM-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-18%5D%22) · [API-COMM-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-27%5D%22) · [API-COMM-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-32%5D%22) · [MOB-K-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-03%5D%22) · [MOB-K-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-07%5D%22) · [MOB-K-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-10%5D%22) · [MOB-K-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-11%5D%22) · [MOB-K-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-27%5D%22) · [MOB-K-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-30%5D%22) · [MOB-K-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-31%5D%22)

#### `K-07` — Message masqué par la modération
_Module : Groupes locaux_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-07_message-masque-par-la-moderation__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-07_message-masque-par-la-moderation__phone_light.webp?raw=true' width='230' alt='K-07 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-07_message-masque-par-la-moderation__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-07_message-masque-par-la-moderation__phone_dark.webp?raw=true' width='230' alt='K-07 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-07_message-masque-par-la-moderation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-07_message-masque-par-la-moderation__tablet_light.webp?raw=true' width='330' alt='K-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-07_message-masque-par-la-moderation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-07_message-masque-par-la-moderation__tablet_dark.webp?raw=true' width='330' alt='K-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Culés Cameroun » · « Yaoundé » · « 721 membres » · « Public » · « Le point de rendez-vous des supporters du Barça au Cameroun. Watch parties, discussions et bon esprit ! » · « Membre » · « Fil » · « Événements » · « Membres » · « Mamadou Diallo » · « Modérateur » · « il y a 12 min » · « Qui est chaud pour le Clásico samedi ? On se retrouve au Relais à 19h30 ! 🔵🔴 » · « Aïcha Ngono » · « il y a 1 h » · « Quelqu’un a vu la compo probable ? Yamal titulaire sans doute. » · « Utilisateur » · « il y a 3 h » · « Ce message a été masqué par la modération. » · « Écrire dans le groupe… »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [MOB-K-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-03%5D%22) · [MOB-K-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-07%5D%22) · [MOB-K-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-16%5D%22) · [MOB-K-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-27%5D%22) · [MOB-K-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-30%5D%22) · [MOB-K-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-31%5D%22)

## 📐 Règles de gestion

- POST : content 1 à 500 caractères après trim (maxlength déjà dans le modèle), imageKey optionnelle ; seuls les membres actifs peuvent publier ; sanitisation HTML complète ; le contenu passe par le filtre automatique avant insertion.
- GET : pagination par curseur (limit 20 max 50, nextCursor = createdAt+_id), tri createdAt desc ; réservé aux membres.
- Un post status='hidden' est renvoyé avec { id, status:'hidden', content:null, author:null, createdAt } pour que le mobile affiche K-07 (le texte original n'est jamais envoyé).
- Auteur : {id, displayName, avatarUrl, groupRole} ; auteur supprimé => « Utilisateur supprimé ».
- Limites anti-spam : voir issue dédiée.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/community/groups/:id/posts` | Publie un message | {"content":"Qui vient au visionnage de samedi ?","imageKey":null} | {"success":true,"data":{"id":"...","content":"…","createdAt":"…"}} |
| `GET` | `/api/v1/community/groups/:id/posts` | Fil | ?limit=20&cursor=… | {"success":true,"data":{"items":[],"nextCursor":"…","hasMore":true}} |

## 🛠️ Tâches

- [ ] Ajouter GET et POST /community/groups/:id/posts.
- [ ] Créer postCreateSchema et cursorQuerySchema (utils/pagination.ts : ajouter buildCursorPage).
- [ ] Implémenter GroupPostService.list/create.
- [ ] Mettre à jour lastActivityAt du groupe.
- [ ] Appeler ContentFilterService.check.
- [ ] Enqueue notification 'group-new-post' (digest).
- [ ] Swagger.

## ✔️ Critères d'acceptation

- [ ] Étant donné un membre, quand il publie 52 caractères, alors 201 et le post apparaît en tête du fil.
- [ ] Étant donné 501 caractères, quand il publie, alors 422.
- [ ] Étant donné un post hidden, quand on liste, alors content est null.
- [ ] Étant donné un non-membre, quand il liste, alors 403 NOT_MEMBER.

## 🧪 Tests à écrire

- [ ] Test d'intégration : publication + lecture.
- [ ] Test d'intégration : pagination par curseur stable.
- [ ] Test de sécurité : XSS <script> neutralisé.
- [ ] Test d'intégration : post masqué.
- [ ] Test unitaire : curseur.

## 🔗 Dépendances

À réaliser après : `API-COMM-20` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §2.8
- CDC Global §2.16.2 (RG-MAP-01 à 05)
- CDC Global §10.2
- CDC Backend §3.6
- CDC Global §11.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
