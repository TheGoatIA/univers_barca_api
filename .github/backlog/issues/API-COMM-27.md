> **API-COMM-27** · Sécurité · Priorité **P0** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Sans limites, les groupes peuvent servir au spam et au harcèlement. Le CDC demande rate limiting et quotas sur endpoints coûteux (§5.3) et filtrage de premier niveau (§11.2).

## ✅ Objectif

Centraliser des limiteurs Redis spécifiques à la communauté, configurables par variables d'environnement.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `K-03` — Rédiger un message
_Module : Groupes locaux_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-03_rediger-un-message__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-03_rediger-un-message__phone_light.webp?raw=true' width='230' alt='K-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-03_rediger-un-message__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-03_rediger-un-message__phone_dark.webp?raw=true' width='230' alt='K-03 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-03_rediger-un-message__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-03_rediger-un-message__tablet_light.webp?raw=true' width='330' alt='K-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-03_rediger-un-message__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-03_rediger-un-message__tablet_dark.webp?raw=true' width='330' alt='K-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Groupe » · « Culés Cameroun » · « Yaoundé » · « 721 membres » · « Public » · « Le point de rendez-vous des supporters du Barça au Cameroun. Watch parties, discussions et bon esprit ! » · « Membre » · « Fil » · « Événements » · « Membres » · « Mamadou Diallo » · « Modérateur » · « il y a 12 min » · « Qui est chaud pour le Clásico samedi ? On se retrouve au Relais à 19h30 ! 🔵🔴 » · « Aïcha Ngono » · « il y a 1 h » · « Quelqu’un a vu la compo probable ? Yamal titulaire sans doute. » · « Kevin Mballa » · « il y a 3 h » · « Photo du dernier visionnage au Bastos, quelle ambiance ! » · « Écrire dans le groupe… » · « Annuler » · « Nouveau message » · « Publier » · « Boris T. » · « Visible par les 721 membres » · « Qui vient au visionnage de samedi ? J'amène le maillot 🔥 » · « 52 / 500 » · « Les messages sont soumis à la » · « charte de la communauté »

**Composants repérés** : `avatar`, `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-COMM-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-18%5D%22) · [API-COMM-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-22%5D%22) · [API-COMM-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-32%5D%22) · [API-MODER-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-06%5D%22) · [API-MODER-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-07%5D%22) · [MOB-K-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-03%5D%22) · [MOB-K-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-07%5D%22) · [MOB-K-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-10%5D%22) · [MOB-K-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-11%5D%22) · [MOB-K-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-27%5D%22) · [MOB-K-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-30%5D%22) · [MOB-K-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-31%5D%22)

#### `K-14` — Créer un groupe — demande
_Module : Groupes locaux_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-14_creer-un-groupe-demande__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-14_creer-un-groupe-demande__phone_light.webp?raw=true' width='230' alt='K-14 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-14_creer-un-groupe-demande__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-14_creer-un-groupe-demande__phone_dark.webp?raw=true' width='230' alt='K-14 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-14_creer-un-groupe-demande__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-14_creer-un-groupe-demande__tablet_light.webp?raw=true' width='330' alt='K-14 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-14_creer-un-groupe-demande__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-14_creer-un-groupe-demande__tablet_dark.webp?raw=true' width='330' alt='K-14 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Créer un groupe » · « Choisir une image » · « Nom du groupe » · « Culés Bafoussam » · « Ville » · « Bafoussam » · « Description » · « Le groupe des supporters du Barça dans l'Ouest du Cameroun. » · « Un groupe local est validé par un modérateur lorsqu'il compte peu de membres. Délai moyen : 24 h. » · « Envoyer pour validation »

**Composants repérés** : `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [API-COMM-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-15%5D%22) · [API-COMM-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-16%5D%22) · [API-COMM-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-17%5D%22) · [API-COMM-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-18%5D%22) · [API-COMM-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-32%5D%22) · [API-COMM-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-33%5D%22) · [MOB-K-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-23%5D%22) · [MOB-K-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-24%5D%22) · [MOB-K-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-30%5D%22) · [MOB-K-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-31%5D%22)

#### `K-10` — Créer une watch party
_Module : Groupes locaux_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-10_creer-une-watch-party__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-10_creer-une-watch-party__phone_light.webp?raw=true' width='230' alt='K-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-10_creer-une-watch-party__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-10_creer-une-watch-party__phone_dark.webp?raw=true' width='230' alt='K-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-10_creer-une-watch-party__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-10_creer-une-watch-party__tablet_light.webp?raw=true' width='330' alt='K-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-10_creer-une-watch-party__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/K/K-10_creer-une-watch-party__tablet_dark.webp?raw=true' width='330' alt='K-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Nouvelle watch party » · « Titre » · « Clásico au Relais » · « Match » · « Barça – Real Madrid » · « Date » · « Sam. 24 oct. » · « Heure » · « Lieu (nom public) » · « Le Relais » · « Ville » · « Yaoundé » · « Ne partage qu'un lieu public. Les événements sont modérés. » · « Publier l’événement »

**Composants repérés** : `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [API-COMM-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-24%5D%22) · [API-COMM-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-COMM-32%5D%22) · [MOB-K-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-04%5D%22) · [MOB-K-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-19%5D%22) · [MOB-K-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-30%5D%22) · [MOB-K-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-K-31%5D%22)

## 📐 Règles de gestion

- Messages : 1 message / 10 s, 30 / jour / utilisateur, 5 / 10 min par groupe ; commentaires : 1 / 5 s et 100 / jour ; (valeurs par défaut à valider).
- Création de groupe : 5 requêtes/h, 1 pending, 3 total ; événements : 3 / semaine / groupe / utilisateur ; adhésions : 10 / h.
- Comptes de moins de 24 h ou email non vérifié : lecture seule (403 ACCOUNT_RESTRICTED) sur publication.
- Réponse 429 avec en-tête Retry-After et code COMMUNITY_RATE_LIMIT ; compteur par userId (pas seulement IP).
- Dépassement répété (≥ 5 en 1 h) : enregistrement d'un signal flood transmis au filtrage automatique.

## 🛠️ Tâches

- [ ] Créer middleware/communityLimiters.ts (rate-limit-redis, clés rl:community:*).
- [ ] Lire les seuils depuis src/config/env.ts (COMMUNITY_*).
- [ ] Brancher sur routes posts, comments, groups, events, join.
- [ ] Ajouter la règle ancienneté/email vérifié.
- [ ] Émettre un événement flood vers ContentFilterService.
- [ ] Documenter les codes d'erreur dans swagger.
- [ ] Ajouter métrique community_rate_limited_total.

## ✔️ Critères d'acceptation

- [ ] Étant donné deux messages en 3 s, quand le second est envoyé, alors 429 avec Retry-After.
- [ ] Étant donné un compte de 2 h, quand il publie, alors 403 ACCOUNT_RESTRICTED.
- [ ] Étant donné 31 messages dans la journée, alors 429.
- [ ] Étant donné Redis indisponible, alors le limiteur échoue en mode permissif journalisé (warn).

## 🧪 Tests à écrire

- [ ] Test d'intégration : rafale.
- [ ] Test unitaire : calcul Retry-After.
- [ ] Test d'intégration : ancienneté.
- [ ] Test de charge k6 sur POST posts.

## 🔗 Dépendances

À réaliser après : `API-COMM-22` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §5.3
- CDC Global §11.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
