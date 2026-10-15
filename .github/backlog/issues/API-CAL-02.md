> **API-CAL-02** · Données · Priorité **P0** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

L-06 affiche « Horaire modifié : Le coup d'envoi passe de 18:30 à 21:00 » avec les blocs « Avant » (Dim. 2 nov. · 18:30) et « Maintenant » (Dim. 2 nov. · 21:00). L'API doit donc conserver l'ancien horaire, ce que le modèle Match ne fait pas. L'historique alimente aussi SEQUENCE et LAST-MODIFIED des événements ICS.

## ✅ Objectif

Enregistrer chaque changement d'horaire ou de statut d'un match dans un tableau embarqué, alimenté par la synchronisation football et par l'édition éditoriale.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `L-06` — Match reporté — changement d’horaire
_Module : Calendrier et export agenda_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-06_match-reporte-changement-d-horaire__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-06_match-reporte-changement-d-horaire__phone_light.webp?raw=true' width='230' alt='L-06 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-06_match-reporte-changement-d-horaire__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-06_match-reporte-changement-d-horaire__phone_dark.webp?raw=true' width='230' alt='L-06 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-06_match-reporte-changement-d-horaire__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-06_match-reporte-changement-d-horaire__tablet_light.webp?raw=true' width='330' alt='L-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-06_match-reporte-changement-d-horaire__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/L/L-06_match-reporte-changement-d-horaire__tablet_dark.webp?raw=true' width='330' alt='L-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Match » · « Horaire modifié » · « Le coup d'envoi passe de 18:30 à 21:00. Ton agenda abonné sera mis à jour automatiquement. » · « Barça – Atlético Madrid » · « Avant » · « Dim. 2 nov. · 18:30 » · « Maintenant » · « Dim. 2 nov. · 21:00 »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [API-CAL-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-06%5D%22) · [API-CAL-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-07%5D%22) · [API-CAL-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-11%5D%22) · [API-CAL-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-19%5D%22) · [API-CAL-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-CAL-22%5D%22) · [API-FOOT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-13%5D%22) · [MOB-L-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-01%5D%22) · [MOB-L-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-04%5D%22) · [MOB-L-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-13%5D%22) · [MOB-L-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-27%5D%22) · [MOB-L-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-L-29%5D%22)

## 📐 Règles de gestion

- Match.scheduleChanges[] : { previousKickoffAt:Date, newKickoffAt:Date, previousStatus, newStatus, changedAt:Date, source:'api'|'manual', reason?:String(≤200) }, `_id:false`, plafonné à 20 entrées (les plus anciennes sont éliminées).
- Match.icsSequence:Number (défaut 0) est incrémenté de 1 à chaque changement d'horaire, de statut (postponed, cancelled) ou de lieu ; il alimente `SEQUENCE` (RFC 5545 §3.8.7.4).
- Match.updatedAtSchedule:Date (dernière modification calendaire) alimente LAST-MODIFIED et la clé d'ETag du flux.
- Un changement inférieur à 1 minute n'est pas enregistré (bruit de l'API source) ; un changement de statut scheduled→postponed l'est toujours.
- Le conflit de synchronisation (syncConflict existant) n'écrit pas dans scheduleChanges tant que l'éditorial n'a pas tranché.

## 🔄 Comportement et états

- À chaque sauvegarde d'un match dont kickoffAt, status ou venue change, un hook pre('save') calcule le diff et pousse l'entrée.
- Le hook émet un événement interne `match.schedule.changed` consommé par le job refresh-calendar-feed et par les déclencheurs de notification.

## 🗄️ Données

- Match.scheduleChanges
- Match.icsSequence
- Match.updatedAtSchedule

## 🛠️ Tâches

- [ ] Modifier matchSchema (src/models/football.model.ts) : scheduleChanges, icsSequence, updatedAtSchedule.
- [ ] Créer src/services/match-schedule.service.ts : recordScheduleChange(match, before, source, reason).
- [ ] Ajouter le hook pre('save') / helper pour findOneAndUpdate (ne pas contourner via updateOne).
- [ ] Créer l'émetteur src/utils/domain-events.ts (EventEmitter typé) avec l'événement `match.schedule.changed`.
- [ ] Plafonner à 20 entrées (slice(-20)).
- [ ] Migration : icsSequence=0 sur les matchs existants.
- [ ] Documenter dans docs/DATABASE.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné un match à 18:30, quand kickoffAt passe à 21:00, alors scheduleChanges contient une entrée {previousKickoffAt:18:30, newKickoffAt:21:00} et icsSequence vaut 1.
- [ ] Étant donné un changement de 30 secondes, quand le match est sauvegardé, alors aucune entrée n'est ajoutée.
- [ ] Étant donné 25 changements, quand le match est lu, alors seulement 20 entrées sont conservées.
- [ ] Étant donné un passage en postponed, quand le hook s'exécute, alors l'événement `match.schedule.changed` est émis une fois.

## 🧪 Tests à écrire

- [ ] unit: recordScheduleChange ignore un écart < 60 s
- [ ] unit: recordScheduleChange incrémente icsSequence
- [ ] unit: plafond de 20 entrées
- [ ] integration: save() d'un Match avec nouveau kickoffAt émet l'événement

## 🔗 Dépendances

À réaliser après : `API-CAL-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §2.16.1 RG-CAL-03
- CDC Backend §3.7, §7

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
