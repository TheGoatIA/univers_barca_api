> **API-CAL-17** · API · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Endpoint consommé directement par Google Agenda, Apple Calendrier et Outlook (sans en-tête d'authentification). Il fait l'objet des contraintes les plus strictes du CDC : text/calendar, aucune donnée personnelle, rate limit public 60 req/min/IP.

## ✅ Objectif

Servir le flux ICS correspondant aux filtres de l'abonnement, protégé uniquement par le jeton.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `L-09` — Abonnement — confirmation
_Module : Calendrier et export agenda_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__phone_light.webp?raw=true' width='230' alt='L-09 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__phone_dark.webp?raw=true' width='230' alt='L-09 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__tablet_light.webp?raw=true' width='330' alt='L-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-09_abonnement-confirmation__tablet_dark.webp?raw=true' width='330' alt='L-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Ajouter à mon agenda » · « S’abonner » · « Mise à jour automatique » · « Recommandé » · « Ton agenda se met à jour tout seul en cas de report ou de changement d'horaire (sous 24 h). Lien webcal:// personnel. » · « S’abonner (mise à jour automatique) » · « Télécharger » · « Fichier .ics ponctuel » · « Un fichier téléchargé n'est pas mis à jour automatiquement. Préfère l'abonnement pour un suivi continu. » · « Télécharger ce calendrier » · « S’abonner au calendrier » · « Choisis l'application d'agenda qui recevra les matchs du Barça. » · « Agenda de l’appareil » · « Google Agenda » · « Outlook » · « webcal://api.univers-barca.app/calendar/feed/••••••.ics » · « Ouvrir l’agenda »

**Composants repérés** : `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-CAL-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-11%5D%22) · [API-CAL-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-13%5D%22) · [API-CAL-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-14%5D%22) · [API-CAL-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-15%5D%22) · [API-CAL-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-18%5D%22) · [API-CAL-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-20%5D%22) · [API-CAL-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-22%5D%22) · [API-CAL-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-23%5D%22) · [API-CAL-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-24%5D%22) · [MOB-L-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-02%5D%22) · [MOB-L-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-03%5D%22) · [MOB-L-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-17%5D%22) · [MOB-L-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-25%5D%22) · [MOB-L-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-26%5D%22) · [MOB-L-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-29%5D%22)

#### `L-07` — Export — choix du mode
_Module : Calendrier et export agenda_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-07_export-choix-du-mode__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-07_export-choix-du-mode__phone_light.webp?raw=true' width='230' alt='L-07 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-07_export-choix-du-mode__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-07_export-choix-du-mode__phone_dark.webp?raw=true' width='230' alt='L-07 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-07_export-choix-du-mode__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-07_export-choix-du-mode__tablet_light.webp?raw=true' width='330' alt='L-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-07_export-choix-du-mode__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-07_export-choix-du-mode__tablet_dark.webp?raw=true' width='330' alt='L-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Ajouter à mon agenda » · « S’abonner » · « Mise à jour automatique » · « Recommandé » · « Ton agenda se met à jour tout seul en cas de report ou de changement d'horaire (sous 24 h). Lien webcal:// personnel. » · « S’abonner (mise à jour automatique) » · « Télécharger » · « Fichier .ics ponctuel » · « Un fichier téléchargé n'est pas mis à jour automatiquement. Préfère l'abonnement pour un suivi continu. » · « Télécharger ce calendrier » · « Compétitions incluses » · « Liga · Ligue des champions » · « Modifier »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-CAL-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-08%5D%22) · [API-CAL-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-11%5D%22) · [API-CAL-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-13%5D%22) · [API-CAL-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-16%5D%22) · [API-CAL-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-22%5D%22) · [API-CAL-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-24%5D%22) · [MOB-L-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-01%5D%22) · [MOB-L-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-02%5D%22) · [MOB-L-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-03%5D%22) · [MOB-L-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-14%5D%22) · [MOB-L-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-15%5D%22) · [MOB-L-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-28%5D%22) · [MOB-L-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-29%5D%22)

## 📐 Règles de gestion

- Route non authentifiée, hors middleware `protect` ; `Content-Type: text/calendar; charset=utf-8` (CDC Backend §3.7).
- Rate limit : 60 requêtes/minute/IP (CDC Backend §10.2) ; dépassement → 429 + Retry-After.
- Jeton inconnu/révoqué/malformé → 404 JSON standard identique.
- Contenu : uniquement les événements sportifs filtrés par l'abonnement, fenêtre J-14 → +365 j, VALARM selon `reminders` ; aucune PII.
- Mise à jour de lastFetchedAt/fetchCount au plus 1 fois/heure (écriture différée).
- Support de `HEAD` et des requêtes conditionnelles (voir cal-cache-etag). `Content-Disposition: inline; filename="univers-barca.ics"`.
- En-têtes de sécurité : `X-Content-Type-Options: nosniff`, `Referrer-Policy: no-referrer`, `Cache-Control: private, max-age=900` ; log d'accès sans le jeton (chemin masqué `/calendar/feed/••••••.ics`).

## 🔄 Comportement et états

- Client qui ignore l'ETag : la réponse complète est renvoyée (taille typique < 150 Ko).
- Abonnement sans match : calendrier vide valide.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/calendar/feed/:token.ics` | Flux dynamique webcal | — | text/calendar; charset=utf-8 |

## 🛠️ Tâches

- [ ] Contrôleur calendar.feed.
- [ ] Route r.get('/calendar/feed/:token.ics', publicFeedLimiter, calendar.feed) sans protect (le paramètre Express est `:token.ics` ; extraire par regex).
- [ ] Limiteur publicFeedLimiter (60/min/IP) dans rateLimiter.ts.
- [ ] Résolution du jeton via calendar-token + CalendarSubscription.findOne({tokenHash}).
- [ ] Mise à jour différée de lastFetchedAt via Redis SETNX 1 h.
- [ ] En-têtes HTTP et masquage du chemin dans requestLogger.ts.
- [ ] Annotations Swagger (security: [] explicite).
- [ ] Exclure la route de la métrique `http_requests` par jeton (label route normalisé).

## ✔️ Critères d'acceptation

- [ ] Étant donné un jeton valide, quand j'appelle le flux, alors 200, Content-Type text/calendar; charset=utf-8 et un VCALENDAR valide.
- [ ] Étant donné un jeton inconnu, alors 404.
- [ ] Étant donné 61 requêtes/minute depuis la même IP, alors la 61e renvoie 429.
- [ ] Étant donné le contenu du flux, alors il ne contient ni id utilisateur ni e-mail.
- [ ] Étant donné les logs, alors le jeton est masqué.

## 🧪 Tests à écrire

- [ ] integration: 200 et en-têtes
- [ ] integration: 404 jeton inconnu
- [ ] integration: 429 après 60 req
- [ ] security: aucune PII dans le flux
- [ ] integration: HEAD
- [ ] e2e: parse du flux avec ical.js

## 🔗 Dépendances

À réaliser après : `API-CAL-10` · `API-CAL-11` · `API-CAL-14` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.7, §10.2
- CDC Global §2.16.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
