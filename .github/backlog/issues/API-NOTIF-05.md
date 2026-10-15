> **API-NOTIF-05** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

O-04 permet d'activer des heures calmes (23:00 – 07:00, par jour) et précise « Les alertes de match en direct ne sont jamais silencieuses pour les rencontres que tu suis ». Il faut une fonction unique de décision utilisée par tous les déclencheurs.

## ✅ Objectif

Implémenter isInQuietHours() et la stratégie de report/suppression.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `O-04` — Heures calmes
_Module : Notifications_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-04_heures-calmes__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-04_heures-calmes__phone_light.webp?raw=true' width='230' alt='O-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-04_heures-calmes__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-04_heures-calmes__phone_dark.webp?raw=true' width='230' alt='O-04 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-04_heures-calmes__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-04_heures-calmes__tablet_light.webp?raw=true' width='330' alt='O-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-04_heures-calmes__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-04_heures-calmes__tablet_dark.webp?raw=true' width='330' alt='O-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Heures calmes » · « Activer les heures calmes » · « De » · « Jours » · « Les alertes de match en direct ne sont jamais silencieuses pour les rencontres que tu suis. »

**Composants repérés** : `card`, `chip`, `toggle`

</details>

**Issues liées sur ce même écran :** [API-NOTIF-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-01%5D%22) · [API-NOTIF-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-04%5D%22) · [API-NOTIF-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-29%5D%22)

#### `O-01` — Centre de préférences
_Module : Notifications_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-01_centre-de-preferences__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-01_centre-de-preferences__phone_light.webp?raw=true' width='230' alt='O-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-01_centre-de-preferences__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-01_centre-de-preferences__phone_dark.webp?raw=true' width='230' alt='O-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-01_centre-de-preferences__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-01_centre-de-preferences__tablet_light.webp?raw=true' width='330' alt='O-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-01_centre-de-preferences__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-01_centre-de-preferences__tablet_dark.webp?raw=true' width='330' alt='O-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Préférences » · « Choisis ce que tu veux recevoir. Tu peux tout modifier à tout moment. » · « Matchs » · « Rappel, mi-temps, résultat final » · « Série en danger » · « Rappel avant minuit » · « Anniversaires & histoire » · « Joueurs, dates marquantes » · « Activité des groupes rejoints » · « Fermeture des compositions » · « Nouveautés » · « Annonces de l’équipe » · « Heures calmes » · « 23:00 – 07:00 »

**Composants repérés** : `card`, `toggle`

</details>

**Issues liées sur ce même écran :** [API-NOTIF-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-01%5D%22) · [API-NOTIF-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-02%5D%22) · [API-NOTIF-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-04%5D%22) · [API-NOTIF-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-06%5D%22) · [API-NOTIF-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-16%5D%22) · [API-NOTIF-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-18%5D%22) · [API-NOTIF-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-29%5D%22) · [API-NOTIF-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-31%5D%22)

#### `O-02` — Détail — rappels de match
_Module : Notifications_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-02_detail-rappels-de-match__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-02_detail-rappels-de-match__phone_light.webp?raw=true' width='230' alt='O-02 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-02_detail-rappels-de-match__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-02_detail-rappels-de-match__phone_dark.webp?raw=true' width='230' alt='O-02 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-02_detail-rappels-de-match__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-02_detail-rappels-de-match__tablet_light.webp?raw=true' width='330' alt='O-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-02_detail-rappels-de-match__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-02_detail-rappels-de-match__tablet_dark.webp?raw=true' width='330' alt='O-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Matchs » · « Pour tous les matchs de l'équipe première » · « Rappel 1 h avant le coup d’envoi » · « Coup d’envoi » · « Mi-temps » · « Résultat final » · « Buts en direct » · « Compétitions suivies » · « Liga » · « Ligue des champions » · « Coupe du Roi » · « Amicaux »

**Composants repérés** : `chip`, `toggle`

</details>

**Issues liées sur ce même écran :** [API-NOTIF-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-04%5D%22) · [API-NOTIF-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-13%5D%22) · [API-NOTIF-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-14%5D%22) · [API-NOTIF-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-29%5D%22)

## 📐 Règles de gestion

- Fenêtre exprimée dans le fuseau de l'utilisateur (DeviceToken.timezone ≥ NotificationPreference.timezone ≥ User.timezone) ; fenêtre qui enjambe minuit gérée (23:00 → 07:00) ; `days` référence le jour où la fenêtre COMMENCE.
- Pendant les heures calmes : (a) catégories différables (history, community, fantasy, news, streak) sont REPORTÉES à la fin de la fenêtre (job délayé à `to`) sauf si périmées (ex. streak après minuit → supprimée, status 'suppressed' raison 'quiet-hours') ; (b) le rappel 1 h avant et les événements live (kickoff, mi-temps, final, buts) des compétitions suivies sont envoyés normalement (exception O-04) ; (c) la catégorie système `moderation` n'est jamais bloquée.
- Les notifications reportées respectent un délai de péremption (`expiresAt`) : au-delà de 12 h, abandon.
- Une notification reportée reste visible dans le centre de notifications dès sa création logique (sentAt = heure réelle d'envoi push).
- Les envois silencieux sur Android sont obtenus par le canal `low-importance` ; sur iOS `apns-priority: 5` (sans son).

## 🔄 Comportement et états

- Changement de fuseau en voyage : la décision utilise le fuseau du dernier heartbeat.
- from = to interdit à la validation donc ignoré ici.

## 🛠️ Tâches

- [ ] Créer src/services/notification-policy.service.ts : isInQuietHours(prefs, now, tz), nextWindowEnd(), decide(userPrefs, notification).
- [ ] Fonction pure testée sans base.
- [ ] Intégrer la décision dans le worker (notif-worker-bullmq).
- [ ] Gérer expiresAt par type de template.
- [ ] Configurer les canaux Android (high / low) dans le builder FCM.
- [ ] Documenter la matrice catégorie × heures calmes dans docs/NOTIFICATIONS.md.
- [ ] Journaliser les suppressions (status 'suppressed').

## ✔️ Critères d'acceptation

- [ ] Étant donné quiet 23:00–07:00 et une notification history à 23:30, alors elle est reportée à 07:00.
- [ ] Étant donné un but en direct à 23:45 d'un match suivi, alors la notification est envoyée immédiatement.
- [ ] Étant donné un rappel de série à 23:10 pendant les heures calmes, alors il est supprimé (status suppressed).
- [ ] Étant donné un jour non coché, alors aucune restriction ce jour-là.
- [ ] Étant donné une sanction de modération, alors elle est envoyée quelle que soit l'heure.

## 🧪 Tests à écrire

- [ ] unit: fenêtre enjambant minuit
- [ ] unit: jours sélectionnés
- [ ] unit: exception live
- [ ] unit: péremption 12 h
- [ ] unit: moderation jamais bloquée
- [ ] unit: changement de fuseau

## 🔗 Dépendances

À réaliser après : `API-NOTIF-04` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §2.12
- Maquette O-04

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
