> **API-FANT-11** · Infrastructure · Priorité **P0** · Taille **L** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Le CDC §7 prévoit le job compute-fantasy-scores déclenché à la fin de chaque match / cron post-journée. Le mobile affiche « Match en cours · points en direct » (H-09) puis « Points calculés après le coup de sifflet final » (H-10). Aucun worker métier n'existe encore.

## ✅ Objectif

Un worker qui calcule les points des équipes d'une journée à partir des statistiques, en mode provisoire pendant les matchs puis final.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `H-09` — Composition verrouillée — erreur 409
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-09_composition-verrouillee-erreur-409__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-09_composition-verrouillee-erreur-409__phone_light.webp?raw=true' width='230' alt='H-09 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-09_composition-verrouillee-erreur-409__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-09_composition-verrouillee-erreur-409__phone_dark.webp?raw=true' width='230' alt='H-09 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-09_composition-verrouillee-erreur-409__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-09_composition-verrouillee-erreur-409__tablet_light.webp?raw=true' width='330' alt='H-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-09_composition-verrouillee-erreur-409__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-09_composition-verrouillee-erreur-409__tablet_dark.webp?raw=true' width='330' alt='H-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Composition verrouillée » · « Match en cours · points en direct » · « En direct » · « ter Stegen » · « Koundé » · « Cubarsí » · « Araújo » · « Balde » · « De Jong » · « Pedri » · « Gavi » · « Yamal » · « Lewandowski » · « Raphinha » · « 11/11 » · « Équipe complète » · « Formation » · « 4-3-3 » · « · Capitaine » · « Voir le détail »

**Composants repérés** : `avatar`, `btn`, `card`, `toast`

</details>

**Issues liées sur ce même écran :** [API-FANT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-01%5D%22) · [API-FANT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-05%5D%22) · [API-FANT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-06%5D%22) · [API-FANT-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-07%5D%22) · [API-FANT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-13%5D%22) · [API-FANT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-21%5D%22) · [API-FANT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-24%5D%22) · [MOB-H-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-02%5D%22) · [MOB-H-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-06%5D%22) · [MOB-H-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-08%5D%22) · [MOB-H-19](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-19%5D%22) · [MOB-H-35](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-35%5D%22)

#### `H-10` — Résultat de la journée
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_light.webp?raw=true' width='230' alt='H-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__phone_dark.webp?raw=true' width='230' alt='H-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_light.webp?raw=true' width='330' alt='H-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-10_resultat-de-la-journee__tablet_dark.webp?raw=true' width='330' alt='H-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Journée 10 terminée » · « Points calculés après le coup de sifflet final » · « ter Stegen » · « 6 pts » · « Koundé » · « 8 pts » · « Cubarsí » · « Araújo » · « 2 pts » · « Balde » · « 5 pts » · « De Jong » · « 7 pts » · « Pedri » · « 9 pts » · « Gavi » · « 3 pts » · « Yamal » · « 14 pts » · « Lewandowski » · « 11 pts » · « Raphinha » · « -1 pts » · « 11/11 » · « Équipe complète » · « Formation »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-01%5D%22) · [API-FANT-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-02%5D%22) · [API-FANT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-05%5D%22) · [API-FANT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-09%5D%22) · [API-FANT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-10%5D%22) · [API-FANT-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-12%5D%22) · [API-FANT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-13%5D%22) · [API-FANT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-24%5D%22) · [API-FANT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-33%5D%22) · [MOB-H-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-01%5D%22) · [MOB-H-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-20%5D%22) · [MOB-H-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-31%5D%22) · [MOB-H-34](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-34%5D%22)

## 📐 Règles de gestion

- Déclencheurs : (1) fin d'un match (status passe à finished) ; (2) à chaque sync live si le match est live (provisoire, au plus 1 job par minute et par journée) ; (3) cron post-journée 04:00 Europe/Madrid qui re-vérifie les journées dont tous les matchs sont finished et non scored.
- Traitement par lots de 500 équipes (curseur sur _id), bulkWrite des FantasyGameweekScore et mise à jour de FantasyTeam.points ; concurrence worker = 2 (traitement lourd).
- provisional=true tant qu'au moins un match de la journée n'est pas finished ; passage à scored (Gameweek.scoredAt) seulement quand tous les matchs sont finished.
- Retry : 5 tentatives, backoff exponentiel 2 s (valeurs par défaut de queues.ts) puis dead-letter ; métrique jobsFailed incrémentée.
- À la fin : enqueue 'rebuild-standings' (classement) et 'emit-passport-events' (points Passport + badges).
- Aucun calcul pour les équipes sans 11 sélections valides ; aucune équipe créée par le job.

## 🛠️ Tâches

- [ ] Créer src/jobs/processors/compute-fantasy-scores.ts : computeFantasyScores({season, number, final?:boolean}).
- [ ] Ajouter la planification : enqueueComputeScores(gameweek, reason) avec jobId compute:{season}:{number}:{statsVersion}.
- [ ] Brancher le déclenchement dans le worker football-sync quand Match.status passe à finished ou lors d'un tick live.
- [ ] Ajouter le cron post-journée dans scheduler.ts ('0 4 * * *' timezone Europe/Madrid).
- [ ] Lire les PlayerMatchStat de la journée une seule fois (Map playerId -> stats) puis itérer les équipes par curseur.
- [ ] Utiliser engine.computeTeamPoints avec Gameweek.rulesVersion.
- [ ] bulkWrite upsert sur {teamId, gameweek} ; écrire breakdown[] et computedAt.
- [ ] Exposer les métriques fantasy_scores_computed_total et fantasy_compute_duration_seconds (histogramme).
- [ ] Journaliser durée, nombre d'équipes, version de barème, provisional.
- [ ] Documenter la procédure de rejeu manuel dans docs/runbooks/fantasy-scores.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné 3 équipes et un match terminé, quand le job tourne, alors chaque équipe a un FantasyGameweekScore avec breakdown.
- [ ] Étant donné un match encore live, alors les scores sont provisional=true et la journée reste en scoring.
- [ ] Étant donné tous les matchs finished, alors la journée passe à scored et le classement est reconstruit.
- [ ] Étant donné 10 000 équipes, alors le calcul s'exécute en lots de 500 sans dépasser 512 Mo de mémoire.
- [ ] Étant donné une équipe invalide (10 joueurs), alors elle est ignorée et un warning est loggé.

## 🧪 Tests à écrire

- [ ] Intégration : job complet avec Mongo et Redis de test.
- [ ] Intégration : provisoire puis final, mêmes équipes.
- [ ] Intégration : échec transitoire puis succès après retry.
- [ ] Intégration : déclenchement par sync football.
- [ ] Performance : 10 000 équipes < 60 s.

## 🔗 Dépendances

À réaliser après : `API-FANT-10` · `API-FANT-07` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §7
- CDC Backend §7.1
- CDC Backend §3.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
