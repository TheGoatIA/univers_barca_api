> **API-CAL-07** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Quand la source change l'horaire (L-06 : 18:30 → 21:00, « Ton agenda abonné sera mis à jour automatiquement ») ou reporte un match, calendrier, flux ICS et notifications doivent rester cohérents sous 24 h (RG-CAL-03).

## ✅ Objectif

Définir et implémenter le cycle de vie calendaire d'un match : changé, reporté, reprogrammé, annulé.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `L-06` — Match reporté — changement d’horaire
_Module : Calendrier et export agenda_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-06_match-reporte-changement-d-horaire__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-06_match-reporte-changement-d-horaire__phone_light.webp?raw=true' width='230' alt='L-06 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-06_match-reporte-changement-d-horaire__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-06_match-reporte-changement-d-horaire__phone_dark.webp?raw=true' width='230' alt='L-06 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-06_match-reporte-changement-d-horaire__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-06_match-reporte-changement-d-horaire__tablet_light.webp?raw=true' width='330' alt='L-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-06_match-reporte-changement-d-horaire__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-06_match-reporte-changement-d-horaire__tablet_dark.webp?raw=true' width='330' alt='L-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Match » · « Horaire modifié » · « Le coup d'envoi passe de 18:30 à 21:00. Ton agenda abonné sera mis à jour automatiquement. » · « Barça – Atlético Madrid » · « Avant » · « Dim. 2 nov. · 18:30 » · « Maintenant » · « Dim. 2 nov. · 21:00 »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [API-CAL-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-02%5D%22) · [API-CAL-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-06%5D%22) · [API-CAL-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-11%5D%22) · [API-CAL-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-19%5D%22) · [API-CAL-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-22%5D%22) · [API-FOOT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-13%5D%22) · [MOB-L-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-01%5D%22) · [MOB-L-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-04%5D%22) · [MOB-L-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-13%5D%22) · [MOB-L-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-27%5D%22) · [MOB-L-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-29%5D%22)

## 📐 Règles de gestion

- Statut `postponed` sans date : l'événement ICS est conservé avec `STATUS:TENTATIVE` et SUMMARY préfixé « [Reporté] » ; la date retenue reste l'ancienne mais DESCRIPTION précise « Date à confirmer ».
- Reprogrammation : même UID, DTSTART mis à jour, SEQUENCE+1, `STATUS:CONFIRMED` : les clients agenda déplacent l'événement au lieu de le dupliquer.
- Annulation (`cancelled`) : l'événement reste 30 jours dans le flux avec `STATUS:CANCELLED` puis disparaît (les clients retirent l'événement).
- Tout changement émet `match.schedule.changed` ; le job refresh-calendar-feed invalide les caches ; la notification de changement d'horaire est envoyée aux utilisateurs concernés (catégorie match, voir notif-declencheur-rappel-match).
- Délai maximum entre la détection par la synchronisation et la présence dans le flux : 15 minutes (TTL cache) ; l'engagement produit reste « sous 24 h » car dépendant du rafraîchissement des clients agenda.

## 🔄 Comportement et états

- Match reporté puis reprogrammé : un seul événement final dans le flux, pas de doublon.
- Match annulé > 30 jours : absent du flux et de la liste.

## 🛠️ Tâches

- [ ] Créer src/services/match-lifecycle.service.ts : onScheduleChanged(match).
- [ ] Souscrire à `match.schedule.changed` au démarrage (src/server.ts).
- [ ] Étendre le générateur ICS (cal-ics-mise-a-jour) avec les statuts.
- [ ] Exclure cancelled > 30 jours dans la requête (flux et liste).
- [ ] Déclencher enqueue('notifications','match-schedule-changed',{matchId}) (consommé par le worker).
- [ ] Ajouter un test bout-en-bout 'report → flux mis à jour'.
- [ ] Documenter la matrice statut → ICS dans docs/ARCHITECTURE.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné un match planifié, quand son statut passe à postponed, alors le flux contient STATUS:TENTATIVE et un SUMMARY « [Reporté] ».
- [ ] Étant donné un match reprogrammé, quand le flux est régénéré, alors l'UID est inchangé et SEQUENCE a augmenté.
- [ ] Étant donné un match annulé il y a 31 jours, alors il n'apparaît plus dans le flux.
- [ ] Étant donné un changement d'horaire, alors un job notification est mis en file.

## 🧪 Tests à écrire

- [ ] integration: report puis reprogrammation sans doublon
- [ ] integration: annulation 30 jours
- [ ] unit: matrice statut → ICS
- [ ] integration: émission du job de notification

## 🔗 Dépendances

À réaliser après : `API-CAL-02` · `API-CAL-11` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §2.16.1 RG-CAL-03
- CDC Backend §7

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
