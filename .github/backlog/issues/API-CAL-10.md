> **API-CAL-10** · Fonctionnel · Priorité **P0** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

L-15 propose les rappels « Au coup d'envoi », « 15 minutes avant », « 1 heure avant », « 3 heures avant », « La veille à 20:00 » et précise que ces rappels sont répercutés dans les événements de l'agenda. L-05/L-14 affichent « 1 h avant le match » par défaut.

## ✅ Objectif

Générer un ou plusieurs VALARM par VEVENT selon les préférences de l'abonnement ou du paramètre de requête.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `L-15` — Rappels configurables
_Module : Calendrier et export agenda_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-15_rappels-configurables__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-15_rappels-configurables__phone_light.webp?raw=true' width='230' alt='L-15 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-15_rappels-configurables__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-15_rappels-configurables__phone_dark.webp?raw=true' width='230' alt='L-15 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-15_rappels-configurables__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-15_rappels-configurables__tablet_light.webp?raw=true' width='330' alt='L-15 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-15_rappels-configurables__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-15_rappels-configurables__tablet_dark.webp?raw=true' width='330' alt='L-15 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Rappels » · « Ces rappels sont aussi répercutés dans les événements de ton agenda. » · « Au coup d’envoi » · « 15 minutes avant » · « 1 heure avant » · « 3 heures avant » · « La veille à 20:00 » · « Les horaires s'affichent dans ton fuseau : » · « Africa/Douala (WAT) »

**Composants repérés** : `card`, `toggle`

</details>

**Issues liées sur ce même écran :** [API-CAL-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-03%5D%22) · [API-CAL-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-16%5D%22) · [MOB-L-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-01%5D%22) · [MOB-L-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-11%5D%22) · [MOB-L-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-14%5D%22) · [MOB-L-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-24%5D%22) · [MOB-L-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-28%5D%22) · [MOB-L-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-29%5D%22)

#### `L-14` — Ajouter un match à l’agenda
_Module : Calendrier et export agenda_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-14_ajouter-un-match-a-l-agenda__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-14_ajouter-un-match-a-l-agenda__phone_light.webp?raw=true' width='230' alt='L-14 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-14_ajouter-un-match-a-l-agenda__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-14_ajouter-un-match-a-l-agenda__phone_dark.webp?raw=true' width='230' alt='L-14 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-14_ajouter-un-match-a-l-agenda__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-14_ajouter-un-match-a-l-agenda__tablet_light.webp?raw=true' width='330' alt='L-14 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-14_ajouter-un-match-a-l-agenda__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-14_ajouter-un-match-a-l-agenda__tablet_dark.webp?raw=true' width='330' alt='L-14 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Calendrier » · « oct. » · « FC Barcelone » · « Real Madrid » · « Liga » · « Bayern Munich » · « Ligue des champions » · « nov. » · « Atlético Madrid » · « Villarreal » · « Coupe du Roi » · « Séville » · « Barça – Real Madrid » · « Sam. 24 oct. · 20:00 WAT · Liga » · « Rappel » · « 1 heure avant » · « Agenda » · « Agenda de l’appareil » · « Ajouter à l’agenda » · « Télécharger .ics »

**Composants repérés** : `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-CAL-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-03%5D%22) · [API-CAL-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-06%5D%22) · [API-CAL-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-09%5D%22) · [API-CAL-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-12%5D%22) · [MOB-L-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-03%5D%22) · [MOB-L-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-05%5D%22) · [MOB-L-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-07%5D%22) · [MOB-L-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-11%5D%22) · [MOB-L-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-22%5D%22) · [MOB-L-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-23%5D%22) · [MOB-L-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-28%5D%22) · [MOB-L-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-29%5D%22)

#### `L-05` — Détail d’un match programmé
_Module : Calendrier et export agenda_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-05_detail-d-un-match-programme__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-05_detail-d-un-match-programme__phone_light.webp?raw=true' width='230' alt='L-05 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-05_detail-d-un-match-programme__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-05_detail-d-un-match-programme__phone_dark.webp?raw=true' width='230' alt='L-05 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-05_detail-d-un-match-programme__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-05_detail-d-un-match-programme__tablet_light.webp?raw=true' width='330' alt='L-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-05_detail-d-un-match-programme__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-05_detail-d-un-match-programme__tablet_dark.webp?raw=true' width='330' alt='L-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Match » · « Liga · Journée 11 » · « Barça » · « WAT · sam. 24 oct. » · « Real Madrid » · « Estadi Olímpic Lluís Companys » · « Barcelone, Espagne » · « Coup d’envoi » · « 21:00 CEST · 20:00 dans ton fuseau (WAT) » · « Rappel » · « 1 h avant le match » · « Ajouter à mon agenda »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-CAL-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-03%5D%22) · [API-CAL-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-06%5D%22) · [API-CAL-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-09%5D%22) · [API-CAL-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-22%5D%22) · [API-FOOT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-13%5D%22) · [API-FOOT-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-16%5D%22) · [MOB-L-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-01%5D%22) · [MOB-L-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-05%5D%22) · [MOB-L-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-11%5D%22) · [MOB-L-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-12%5D%22) · [MOB-L-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-22%5D%22) · [MOB-L-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-27%5D%22) · [MOB-L-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-28%5D%22) · [MOB-L-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-29%5D%22)

## 📐 Règles de gestion

- Valeurs autorisées (`reminders`, liste, 0 à 3 éléments) : `0` (au coup d'envoi), `15`, `60` (défaut), `180` minutes avant, et `eve20` (la veille à 20:00 dans le fuseau de l'utilisateur).
- VALARM : `ACTION:DISPLAY`, `DESCRIPTION` = titre du match, `TRIGGER:-PT60M` (relatif au DTSTART) ; pour `eve20` : `TRIGGER;VALUE=DATE-TIME:20261023T190000Z` (absolu, calculé en tenant compte du DST).
- Aucune alarme si `reminders` est vide (« Désactivé ») ; aucun ACTION:EMAIL ni AUDIO.
- CalendarSubscription.reminderMinutes (existant, Number) évolue en `reminders:[String]` ; migration : 60 → ['60'].
- Cohérence avec les notifications push : les choix de L-15 n'activent pas le push (séparés, catégorie match).

## 🔄 Comportement et états

- Rappel `eve20` pour un match à 12:00 le lendemain : alarme la veille à 20:00 locale.
- Match reporté : l'alarme absolue est recalculée dans le flux (SEQUENCE+1).

## 🗄️ Données

- CalendarSubscription.reminders

## 🛠️ Tâches

- [ ] Étendre CalendarSubscription (src/models/platform.model.ts) : reminders:[String enum].
- [ ] Migration 'reminderMinutes' → 'reminders'.
- [ ] Créer src/services/ics-alarm.mapper.ts : buildAlarms(match, reminders, tz).
- [ ] Ajouter le paramètre `reminders` (CSV) à /calendar/export.ics et /calendar/matches/:id.ics.
- [ ] Validation Joi : max 3 valeurs, enum stricte.
- [ ] Ajouter `reminders` au PATCH /calendar/subscription.
- [ ] Tests snapshot VALARM (relatif et absolu).
- [ ] Mettre à jour la doc OpenAPI.

## ✔️ Critères d'acceptation

- [ ] Étant donné reminders=60, quand le .ics est généré, alors chaque VEVENT contient un VALARM TRIGGER:-PT60M.
- [ ] Étant donné reminders=eve20 et fuseau Africa/Douala, alors TRIGGER absolu = la veille 20:00 locale (19:00Z).
- [ ] Étant donné reminders=[], alors aucun VALARM.
- [ ] Étant donné reminders=10, alors 422.

## 🧪 Tests à écrire

- [ ] unit: buildAlarms relatif
- [ ] unit: buildAlarms eve20 avec DST
- [ ] unit: limite de 3 rappels
- [ ] unit: migration reminderMinutes
- [ ] integration: export avec reminders=0,60

## ♿ Accessibilité et i18n

- Libellés de rappel fournis côté mobile (ARB) ; l'API renvoie les codes stables 0/15/60/180/eve20.

## 🔗 Dépendances

À réaliser après : `API-CAL-09` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §2.9, §2.16.1
- CDC Backend §3.7

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
