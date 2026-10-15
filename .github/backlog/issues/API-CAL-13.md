> **API-CAL-13** · API · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

L-07 propose « S'abonner (mise à jour automatique) — Lien webcal:// personnel » ; L-09 affiche `webcal://api.univers-barca.app/calendar/feed/••••••.ics` et les cibles Agenda de l'appareil / Google Agenda / Outlook ; L-11 offre « Copier le lien d'abonnement » en cas d'échec.

## ✅ Objectif

Générer (au premier appel) ou retourner l'URL d'abonnement de l'utilisateur et les liens dérivés pour chaque application d'agenda.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `L-07` — Export — choix du mode
_Module : Calendrier et export agenda_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-07_export-choix-du-mode__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-07_export-choix-du-mode__phone_light.webp?raw=true' width='230' alt='L-07 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-07_export-choix-du-mode__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-07_export-choix-du-mode__phone_dark.webp?raw=true' width='230' alt='L-07 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-07_export-choix-du-mode__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-07_export-choix-du-mode__tablet_light.webp?raw=true' width='330' alt='L-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-07_export-choix-du-mode__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-07_export-choix-du-mode__tablet_dark.webp?raw=true' width='330' alt='L-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Ajouter à mon agenda » · « S’abonner » · « Mise à jour automatique » · « Recommandé » · « Ton agenda se met à jour tout seul en cas de report ou de changement d'horaire (sous 24 h). Lien webcal:// personnel. » · « S’abonner (mise à jour automatique) » · « Télécharger » · « Fichier .ics ponctuel » · « Un fichier téléchargé n'est pas mis à jour automatiquement. Préfère l'abonnement pour un suivi continu. » · « Télécharger ce calendrier » · « Compétitions incluses » · « Liga · Ligue des champions » · « Modifier »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-CAL-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-08%5D%22) · [API-CAL-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-11%5D%22) · [API-CAL-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-16%5D%22) · [API-CAL-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-17%5D%22) · [API-CAL-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-22%5D%22) · [API-CAL-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-24%5D%22) · [MOB-L-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-01%5D%22) · [MOB-L-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-02%5D%22) · [MOB-L-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-03%5D%22) · [MOB-L-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-14%5D%22) · [MOB-L-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-15%5D%22) · [MOB-L-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-28%5D%22) · [MOB-L-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-29%5D%22)

#### `L-09` — Abonnement — confirmation
_Module : Calendrier et export agenda_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__phone_light.webp?raw=true' width='230' alt='L-09 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__phone_dark.webp?raw=true' width='230' alt='L-09 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__tablet_light.webp?raw=true' width='330' alt='L-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__tablet_dark.webp?raw=true' width='330' alt='L-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Ajouter à mon agenda » · « S’abonner » · « Mise à jour automatique » · « Recommandé » · « Ton agenda se met à jour tout seul en cas de report ou de changement d'horaire (sous 24 h). Lien webcal:// personnel. » · « S’abonner (mise à jour automatique) » · « Télécharger » · « Fichier .ics ponctuel » · « Un fichier téléchargé n'est pas mis à jour automatiquement. Préfère l'abonnement pour un suivi continu. » · « Télécharger ce calendrier » · « S’abonner au calendrier » · « Choisis l'application d'agenda qui recevra les matchs du Barça. » · « Agenda de l’appareil » · « Google Agenda » · « Outlook » · « webcal://api.univers-barca.app/calendar/feed/••••••.ics » · « Ouvrir l’agenda »

**Composants repérés** : `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-CAL-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-11%5D%22) · [API-CAL-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-14%5D%22) · [API-CAL-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-15%5D%22) · [API-CAL-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-17%5D%22) · [API-CAL-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-18%5D%22) · [API-CAL-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-20%5D%22) · [API-CAL-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-22%5D%22) · [API-CAL-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-23%5D%22) · [API-CAL-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-24%5D%22) · [MOB-L-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-02%5D%22) · [MOB-L-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-03%5D%22) · [MOB-L-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-17%5D%22) · [MOB-L-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-25%5D%22) · [MOB-L-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-26%5D%22) · [MOB-L-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-29%5D%22)

#### `L-11` — Échec d’ouverture du lien webcal
_Module : Calendrier et export agenda_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-11_echec-d-ouverture-du-lien-webcal__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-11_echec-d-ouverture-du-lien-webcal__phone_light.webp?raw=true' width='230' alt='L-11 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-11_echec-d-ouverture-du-lien-webcal__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-11_echec-d-ouverture-du-lien-webcal__phone_dark.webp?raw=true' width='230' alt='L-11 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-11_echec-d-ouverture-du-lien-webcal__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-11_echec-d-ouverture-du-lien-webcal__tablet_light.webp?raw=true' width='330' alt='L-11 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-11_echec-d-ouverture-du-lien-webcal__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-11_echec-d-ouverture-du-lien-webcal__tablet_dark.webp?raw=true' width='330' alt='L-11 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Ajouter à mon agenda » · « S’abonner » · « Mise à jour automatique » · « Recommandé » · « Ton agenda se met à jour tout seul en cas de report ou de changement d'horaire (sous 24 h). Lien webcal:// personnel. » · « S’abonner (mise à jour automatique) » · « Télécharger » · « Fichier .ics ponctuel » · « Un fichier téléchargé n'est pas mis à jour automatiquement. Préfère l'abonnement pour un suivi continu. » · « Télécharger ce calendrier » · « Agenda introuvable » · « Aucune application d'agenda n'a pu ouvrir le lien d'abonnement. Tu peux télécharger le fichier .ics à la place. » · « Télécharger le fichier .ics » · « Copier le lien d’abonnement »

**Composants repérés** : `btn`, `card`, `modal`

</details>

**Issues liées sur ce même écran :** [API-CAL-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-15%5D%22) · [API-CAL-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-22%5D%22) · [API-CAL-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-24%5D%22) · [MOB-L-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-18%5D%22) · [MOB-L-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-26%5D%22) · [MOB-L-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-29%5D%22)

## 📐 Règles de gestion

- Au premier appel, création de CalendarSubscription {userId, tokenHash, competitions, squads, reminders} ; le hash SHA-256 sert à la résolution du flux.
- Décision de conception : pour permettre L-09 à chaque ouverture, le jeton chiffré (AES-256-GCM, clé CALENDAR_TOKEN_KEY) est stocké en plus du hash ; l'URL est déchiffrée à la demande pour son propriétaire uniquement.
- Réponse : `webcalUrl` (webcal://host/api/v1/calendar/feed/{token}.ics), `httpsUrl` (https://… pour « Copier le lien »), `googleUrl` (https://calendar.google.com/calendar/r?cid=webcal://…), `outlookUrl` (https://outlook.live.com/calendar/0/addfromweb?url=…&name=Univers%20Barça), `filters`, `createdAt`, `lastFetchedAt`.
- Le jeton est masqué dans les logs (••••••) et dans la télémétrie ; il n'apparaît dans aucun message d'erreur.
- Authentification requise ; 1 abonnement par utilisateur (index unique userId).

## 🔄 Comportement et états

- Création concurrente (deux appels simultanés) : un seul document créé (upsert atomique).
- Compte supprimé : l'abonnement est supprimé (voir cal-rgpd-abonnement).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/calendar/subscription-url` | URL d'abonnement personnelle | — | {success:true,data:{webcalUrl,httpsUrl,googleUrl,outlookUrl,filters,createdAt,lastFetchedAt}} |

## 🗄️ Données

- CalendarSubscription

## 🛠️ Tâches

- [ ] Étendre CalendarSubscription : tokenCipher, tokenHash (SHA-256), squads, reminders, lastFetchedAt, fetchCount, revokedAt.
- [ ] Créer src/services/calendar-subscription.service.ts : getOrCreate(userId).
- [ ] Créer src/utils/calendar-token.ts (cal-securite-jeton-abonnement).
- [ ] Variables d'env CALENDAR_TOKEN_KEY (32 octets base64) et CALENDAR_PUBLIC_HOST.
- [ ] Route r.get('/calendar/subscription-url', protect, userOnly, …).
- [ ] Builders des URLs Google/Outlook (encodeURIComponent).
- [ ] Annotations Swagger + exemple de réponse.
- [ ] Masquage du jeton dans src/utils/logger.ts (redaction).

## ✔️ Critères d'acceptation

- [ ] Étant donné un utilisateur sans abonnement, quand j'appelle l'endpoint, alors un abonnement est créé et une webcalUrl valide retournée.
- [ ] Étant donné deux appels successifs, alors la même URL est retournée.
- [ ] Étant donné deux appels concurrents, alors une seule CalendarSubscription existe.
- [ ] Étant donné un appel anonyme, alors 401.
- [ ] Étant donné les logs d'accès, alors le jeton n'y figure pas en clair.

## 🧪 Tests à écrire

- [ ] integration: création au premier appel
- [ ] integration: URL stable
- [ ] integration: concurrence (Promise.all)
- [ ] unit: builders Google/Outlook
- [ ] security: absence du jeton dans les logs

## 🔗 Dépendances

À réaliser après : `API-CAL-14` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.7
- CDC Global §2.9

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
