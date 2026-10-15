> **API-FANT-09** · Données · Priorité **P0** · Taille **L** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Le sous-document Match.events ne connaît que goal/card/sub sans passeur, couleur de carte ni sortie, et Match.lineups ne donne pas les minutes jouées. Le calcul des points (CDC : titularisation >= 60 min, clean sheet, buts encaissés) exige des statistiques normalisées par joueur et par match.

## ✅ Objectif

Une collection PlayerMatchStat dérivée des événements de match, source unique du moteur de scoring.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `H-10` — Résultat de la journée
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_light.webp?raw=true' width='230' alt='H-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_dark.webp?raw=true' width='230' alt='H-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_light.webp?raw=true' width='330' alt='H-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_dark.webp?raw=true' width='330' alt='H-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Journée 10 terminée » · « Points calculés après le coup de sifflet final » · « ter Stegen » · « 6 pts » · « Koundé » · « 8 pts » · « Cubarsí » · « Araújo » · « 2 pts » · « Balde » · « 5 pts » · « De Jong » · « 7 pts » · « Pedri » · « 9 pts » · « Gavi » · « 3 pts » · « Yamal » · « 14 pts » · « Lewandowski » · « 11 pts » · « Raphinha » · « -1 pts » · « 11/11 » · « Équipe complète » · « Formation »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-01%5D%22) · [API-FANT-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-02%5D%22) · [API-FANT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-05%5D%22) · [API-FANT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-10%5D%22) · [API-FANT-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-11%5D%22) · [API-FANT-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-12%5D%22) · [API-FANT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-13%5D%22) · [API-FANT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-24%5D%22) · [API-FANT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-33%5D%22) · [MOB-H-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-01%5D%22) · [MOB-H-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-20%5D%22) · [MOB-H-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-31%5D%22) · [MOB-H-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-34%5D%22)

#### `H-11` — Détail des points d’un joueur
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-11_detail-des-points-d-un-joueur__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-11_detail-des-points-d-un-joueur__phone_light.webp?raw=true' width='230' alt='H-11 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-11_detail-des-points-d-un-joueur__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-11_detail-des-points-d-un-joueur__phone_dark.webp?raw=true' width='230' alt='H-11 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-11_detail-des-points-d-un-joueur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-11_detail-des-points-d-un-joueur__tablet_light.webp?raw=true' width='330' alt='H-11 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-11_detail-des-points-d-un-joueur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-11_detail-des-points-d-un-joueur__tablet_dark.webp?raw=true' width='330' alt='H-11 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Fermeture des compositions dans » · « 1 j 04 h 12 min » · « J11 » · « ter Stegen » · « 6 pts » · « Koundé » · « 8 pts » · « Cubarsí » · « Araújo » · « 2 pts » · « Balde » · « 5 pts » · « De Jong » · « 7 pts » · « Pedri » · « 9 pts » · « Gavi » · « 3 pts » · « Yamal » · « 14 pts » · « Lewandowski » · « 11 pts » · « Raphinha » · « -1 pts » · « 11/11 » · « Équipe complète »

**Composants repérés** : `avatar`, `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-FANT-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-08%5D%22) · [API-FANT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-10%5D%22) · [API-FANT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-13%5D%22) · [MOB-H-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-21%5D%22)

## 📐 Règles de gestion

- Étendre Match.events : type ∈ goal | assist | yellow_card | red_card | sub_in | sub_out ; goal porte assistPlayerId optionnel ; carte rouge directe ou deuxième jaune = red_card.
- PlayerMatchStat {matchId, playerId, teamId, minutesPlayed, started, goals, assists, yellowCards, redCards, goalsConceded (équipe pendant sa présence), cleanSheet, position (au moment du match), rulesVersion?, sourceHash, updatedAt} ; unique {matchId, playerId}.
- minutesPlayed : titulaire = minute de sortie (sub_out/red_card) sinon durée du match (90 + temps additionnel ignoré, plafonné à 90 en base, prolongations non comptées : à confirmer) ; remplaçant = durée - minute d'entrée.
- cleanSheet = équipe adverse 0 but ET joueur présent >= 60 min (défenseur/gardien) : à confirmer, le CDC dit « défenseur/gardien titulaire ».
- Dérivation déterministe et idempotente : recalculer deux fois produit le même document (sourceHash = hash des événements + lineups).
- Seuls les matchs de l'équipe première du FC Barcelone alimentent le Fantasy ; les joueurs adverses sont ignorés.

## 🗄️ Données

- matches.events
- matches.lineups
- playermatchstats (nouvelle)

## 🛠️ Tâches

- [ ] Modifier src/models/football.model.ts : enum events.type étendu, assistPlayerId, side, minuteExtra ; migration des anciens events 'card' -> yellow_card/red_card selon detailI18n (script migrations/).
- [ ] Créer src/models/player-match-stat.model.ts avec index unique {matchId:1, playerId:1} et {playerId:1, createdAt:-1}.
- [ ] Créer src/services/fantasy/derive-stats.ts : deriveStats(match): PlayerMatchStat[] (minutes, buts, passes, cartons, buts encaissés, clean sheet).
- [ ] Brancher le worker football-sync : après upsert d'un match live/finished, enqueue 'derive-player-stats' (jobId = derive:{matchId}:{sourceHash}).
- [ ] Adapter le mapper de l'API football externe pour remplir assistPlayerId et le type de carte.
- [ ] Exposer en lecture admin GET /admin/football/matches/:id/stats pour contrôle (réutilise rôle content-manager).
- [ ] Documenter les types d'événements dans Swagger (schéma MatchEvent).
- [ ] Fixtures de test : match 3-1 avec 2 remplacements, un jaune, un rouge.

## ✔️ Critères d'acceptation

- [ ] Étant donné un titulaire remplacé à la 65e, alors minutesPlayed=65 et started=true.
- [ ] Étant donné un remplaçant entré à la 75e dans un match de 90, alors minutesPlayed=15.
- [ ] Étant donné 0 but encaissé et un défenseur titulaire 90 min, alors cleanSheet=true.
- [ ] Étant donné deux synchronisations identiques, alors une seule écriture effective (sourceHash).
- [ ] Étant donné un événement corrigé (but annulé), alors la stat est recalculée.

## 🧪 Tests à écrire

- [ ] Unitaire : minutes jouées (titulaire, remplaçant, expulsé).
- [ ] Unitaire : clean sheet.
- [ ] Unitaire : buts encaissés pendant la présence.
- [ ] Intégration : upsert idempotent PlayerMatchStat.
- [ ] Intégration : migration des anciens événements card.

## 📚 Références

- CDC Backend §3.2
- CDC Backend §3.5
- CDC Backend §3.12.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
