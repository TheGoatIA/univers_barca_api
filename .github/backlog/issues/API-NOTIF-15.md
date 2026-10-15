> **API-NOTIF-15** · Fonctionnel · Priorité **P1** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

Le job generate-daily-challenge (cron minuit) publie le défi Guess the Player et le quiz du jour (CDC Backend §7). Les supporters qui l'ont activé sont prévenus. Écart CDC↔maquettes : aucune ligne de préférence dédiée n'apparaît dans O-01 ; la notification utilise la catégorie existante `streak` (« Série en danger »).

## ✅ Objectif

Envoyer une notification discrète à la publication du défi du jour.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `O-09` — Écran verrouillé — autres notifications
_Module : Notifications_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-09_ecran-verrouille-autres-notifications__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-09_ecran-verrouille-autres-notifications__phone_light.webp?raw=true' width='230' alt='O-09 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-09_ecran-verrouille-autres-notifications__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-09_ecran-verrouille-autres-notifications__phone_dark.webp?raw=true' width='230' alt='O-09 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-09_ecran-verrouille-autres-notifications__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-09_ecran-verrouille-autres-notifications__tablet_light.webp?raw=true' width='330' alt='O-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-09_ecran-verrouille-autres-notifications__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-09_ecran-verrouille-autres-notifications__tablet_dark.webp?raw=true' width='330' alt='O-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Jeudi 15 octobre » · « Ta série est en danger 🔥 » · « Joue au Guess the Player avant minuit. » · « Anniversaire de Pedri 🎂 » · « Il fête ses 23 ans aujourd’hui. » · « Culés Cameroun » · « Mamadou : « Qui est chaud pour samedi ? » » · « Résultat final » · « hier » · « Barça 3 – 1 Real Madrid · Voir le résumé »

</details>

**Issues liées sur ce même écran :** [API-NOTIF-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-07%5D%22) · [API-NOTIF-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-08%5D%22) · [API-NOTIF-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-12%5D%22) · [API-NOTIF-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-14%5D%22) · [API-NOTIF-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-16%5D%22) · [API-NOTIF-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-17%5D%22) · [API-NOTIF-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-18%5D%22) · [API-NOTIF-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-29%5D%22) · [MOB-O-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-18%5D%22) · [MOB-O-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-19%5D%22) · [MOB-O-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-21%5D%22) · [MOB-O-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-25%5D%22) · [MOB-O-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-27%5D%22) · [MOB-O-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-28%5D%22)

#### `O-03` — Détail — série en danger
_Module : Notifications_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-03_detail-serie-en-danger__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-03_detail-serie-en-danger__phone_light.webp?raw=true' width='230' alt='O-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-03_detail-serie-en-danger__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-03_detail-serie-en-danger__phone_dark.webp?raw=true' width='230' alt='O-03 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-03_detail-serie-en-danger__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-03_detail-serie-en-danger__tablet_light.webp?raw=true' width='330' alt='O-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-03_detail-serie-en-danger__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-03_detail-serie-en-danger__tablet_dark.webp?raw=true' width='330' alt='O-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Série » · « Protège ta série de 12 jours » · « Une notification discrète t'avertit si le jeu du jour n'est pas joué. » · « Activer le rappel » · « Heure du rappel » · « Aperçu » · « Ta série est en danger 🔥 » · « Joue à Guess the Player avant minuit. »

**Composants repérés** : `card`, `toggle`

</details>

**Issues liées sur ce même écran :** [API-NOTIF-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-04%5D%22) · [API-NOTIF-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-16%5D%22) · [API-NOTIF-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-29%5D%22) · [MOB-O-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-02%5D%22) · [MOB-O-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-06%5D%22) · [MOB-O-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-09%5D%22) · [MOB-O-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-11%5D%22) · [MOB-O-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-26%5D%22) · [MOB-O-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-27%5D%22) · [MOB-O-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-O-28%5D%22)

## 📐 Règles de gestion

- Déclenchement à la fin réussie de generate-daily-challenge pour la date D (jobId `daily-challenge:{date}`), envoyé à 08:00 dans le fuseau de chaque utilisateur (jobs délayés groupés par fuseau, 24 groupes au plus).
- Destinataires : categories.streak=true ET (currentStreak ≥ 1 OU actif dans les 14 derniers jours) ; pas d'envoi si le défi est déjà joué ce jour.
- Texte : « Défi du jour disponible » / « Joue à Guess the Player pour garder ta série. » ; deepLink univers-barca://games/guess-the-player.
- Un seul push de jeu par jour et par utilisateur : si le rappel de série a déjà été envoyé, pas de défi du jour (priorité au rappel).
- Heures calmes respectées (report à la fin de la fenêtre).

## 🔄 Comportement et états

- Défi non généré : aucun envoi, alerte log error.
- Utilisateur sans jeton : entrée in-app uniquement.

## 🛠️ Tâches

- [ ] Créer src/jobs/triggers/daily-challenge.ts : onChallengePublished(date).
- [ ] Regrouper les destinataires par timezone (aggregate group by).
- [ ] Jobs délayés à 08:00 locale.
- [ ] Template daily.challenge (déjà dans le catalogue).
- [ ] Lecture de Progress.currentStreak et dernier jour joué (gamification.model.ts).
- [ ] Règle de priorité avec streak-reminder.
- [ ] Tests.
- [ ] Documentation de la décision de catégorie.

## ✔️ Critères d'acceptation

- [ ] Étant donné un défi publié, alors un utilisateur à Africa/Douala reçoit la notification à 08:00 locale.
- [ ] Étant donné categories.streak=false, alors rien n'est envoyé.
- [ ] Étant donné un défi déjà joué, alors pas de notification.
- [ ] Étant donné un rappel de série déjà envoyé le même jour, alors pas de notification de défi.
- [ ] Étant donné un échec de generate-daily-challenge, alors aucun envoi.

## 🧪 Tests à écrire

- [ ] unit: regroupement par fuseau
- [ ] integration: priorité rappel de série
- [ ] integration: défi déjà joué
- [ ] unit: destinataires actifs 14 j

## 🔗 Dépendances

À réaliser après : `API-NOTIF-08` · `API-NOTIF-12` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §7
- CDC Global §2.12

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
