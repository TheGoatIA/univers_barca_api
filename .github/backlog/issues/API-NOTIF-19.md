> **API-NOTIF-19** · Fonctionnel · Priorité **P1** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

CDC Admin §4.6.3 : tout avertissement, suspension ou bannissement déclenche automatiquement une notification explicative à l'utilisateur, avec le motif général et sans révéler le rapporteur.

## ✅ Objectif

Envoyer une notification transactionnelle à chaque action de modération.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `O-05` — Boîte de réception
_Module : Notifications_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-05_boite-de-reception__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-05_boite-de-reception__phone_light.webp?raw=true' width='230' alt='O-05 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-05_boite-de-reception__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-05_boite-de-reception__phone_dark.webp?raw=true' width='230' alt='O-05 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-05_boite-de-reception__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-05_boite-de-reception__tablet_light.webp?raw=true' width='330' alt='O-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-05_boite-de-reception__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/O/O-05_boite-de-reception__tablet_dark.webp?raw=true' width='330' alt='O-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Notifications » · « Toutes » · « Matchs » · « Tout lire » · « Match dans 1 h » · « Barça – Real Madrid · Liga » · « il y a 5 min » · « Ta série est en danger » · « Joue avant minuit » · « il y a 3 h » · « Nouveau message dans Culés Cameroun » · « Mamadou : « Qui est chaud pour… » » · « Hier » · « Anniversaire de Pedri » · « Il fête ses 23 ans aujourd’hui 🎂 » · « Badge débloqué » · « Série de 10 jours » · « 12 oct. »

**Composants repérés** : `btn`, `chip`

</details>

**Issues liées sur ce même écran :** [API-NOTIF-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-01%5D%22) · [API-NOTIF-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-12%5D%22) · [API-NOTIF-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-17%5D%22) · [API-NOTIF-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-20%5D%22) · [API-NOTIF-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-21%5D%22) · [API-NOTIF-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-28%5D%22) · [API-NOTIF-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-29%5D%22) · [API-NOTIF-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-31%5D%22)

## 📐 Règles de gestion

- Source : création d'une ModerationAction de type warning|suspension|ban (moderation.model.ts) → événement `moderation.action.created`.
- Catégorie système `moderation` : non désactivable, ignore heures calmes et préférences ; consentement push non requis pour l'entrée in-app, requis pour le push (CDC : transparence de la décision).
- Contenu : type de sanction, motif général (catégorie : harcèlement, spam…), durée pour la suspension, voie de recours (lien univers-barca://settings/support) ; jamais l'identité du rapporteur ni le texte du signalement.
- Un bannissement envoie la notification avant la révocation des sessions ; sinon in-app au prochain accès au compte (statut banned lisible).
- Conservation du log au-delà des 90 jours (valeur d'audit).

## 🔄 Comportement et états

- Utilisateur sans jeton : entrée in-app conservée.
- Sanction annulée (revert) : notification d'annulation.

## 🛠️ Tâches

- [ ] Créer src/jobs/triggers/moderation-notice.ts.
- [ ] Hook dans le futur service de modération (contrat : emit après création).
- [ ] Templates moderation.warning|suspension|ban|revoked.
- [ ] Exemption TTL index pour category='moderation' (champ `retainForever`).
- [ ] Garde pour interdire les champs reporter*.
- [ ] Tests d'absence de fuite.
- [ ] Documentation.

## ✔️ Critères d'acceptation

- [ ] Étant donné un avertissement, alors l'utilisateur reçoit un push et une entrée in-app en < 1 minute.
- [ ] Étant donné des heures calmes actives, alors la notification est quand même envoyée.
- [ ] Étant donné le contenu, alors il n'inclut aucun identifiant de rapporteur.
- [ ] Étant donné un ban, alors la notification est conservée plus de 90 jours.
- [ ] Étant donné une annulation, alors une notification de levée est envoyée.

## 🧪 Tests à écrire

- [ ] unit: contenu sans rapporteur
- [ ] integration: ignore heures calmes
- [ ] integration: conservation > 90 j
- [ ] integration: annulation de sanction

## 🔗 Dépendances

À réaliser après : `API-NOTIF-08` · `API-NOTIF-12` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.6.3
- CDC Global §2.12

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
