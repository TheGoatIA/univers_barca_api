> **API-FANT-08** · Données · Priorité **P0** · Taille **L** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Le CDC §3.12.2 exige un barème piloté par configuration (table scoring_rules), jamais codé en dur. Le modèle ScoringRule existant (event unique, points, positions) n'est pas versionné, alors que l'admin (WJ-03) prévoit des versions, une activation à la prochaine journée et aucune réécriture rétroactive. Le mobile affiche le barème (H-14) et le détail des points (H-11).

## ✅ Objectif

Un barème versionné, seedé avec les valeurs de référence du CDC, lisible publiquement et modifiable (écriture par l'admin) sans redéploiement.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `H-14` — Barème des points
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-14_bareme-des-points__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-14_bareme-des-points__phone_light.webp?raw=true' width='230' alt='H-14 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-14_bareme-des-points__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-14_bareme-des-points__phone_dark.webp?raw=true' width='230' alt='H-14 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-14_bareme-des-points__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-14_bareme-des-points__tablet_light.webp?raw=true' width='330' alt='H-14 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-14_bareme-des-points__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-14_bareme-des-points__tablet_dark.webp?raw=true' width='330' alt='H-14 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Barème de référence » · « Configurable » · « But (attaquant / milieu) » · « +5 / +6 » · « But (défenseur / gardien) » · « +8 » · « Passe décisive » · « +3 » · « Clean sheet (déf. / gardien) » · « +4 » · « Titularisation ≥ 60 min » · « +2 » · « Entrée en jeu » · « +1 » · « Carton jaune » · « −1 » · « Carton rouge » · « −3 » · « 2 buts encaissés (déf. / G) » · « Le » · « capitaine » · « rapporte ses points doublés. »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-10%5D%22) · [MOB-H-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-04%5D%22) · [MOB-H-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-07%5D%22) · [MOB-H-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-24%5D%22)

#### `H-11` — Détail des points d’un joueur
_Module : Fantasy Barça_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-11_detail-des-points-d-un-joueur__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-11_detail-des-points-d-un-joueur__phone_light.webp?raw=true' width='230' alt='H-11 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-11_detail-des-points-d-un-joueur__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-11_detail-des-points-d-un-joueur__phone_dark.webp?raw=true' width='230' alt='H-11 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-11_detail-des-points-d-un-joueur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-11_detail-des-points-d-un-joueur__tablet_light.webp?raw=true' width='330' alt='H-11 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-11_detail-des-points-d-un-joueur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/H/H-11_detail-des-points-d-un-joueur__tablet_dark.webp?raw=true' width='330' alt='H-11 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Journée 11 » · « Mon équipe » · « Classement » · « Règles » · « Fermeture des compositions dans » · « 1 j 04 h 12 min » · « J11 » · « ter Stegen » · « 6 pts » · « Koundé » · « 8 pts » · « Cubarsí » · « Araújo » · « 2 pts » · « Balde » · « 5 pts » · « De Jong » · « 7 pts » · « Pedri » · « 9 pts » · « Gavi » · « 3 pts » · « Yamal » · « 14 pts » · « Lewandowski » · « 11 pts » · « Raphinha » · « -1 pts » · « 11/11 » · « Équipe complète »

**Composants repérés** : `avatar`, `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-FANT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-09%5D%22) · [API-FANT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-10%5D%22) · [API-FANT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-13%5D%22) · [MOB-H-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-H-21%5D%22)

## 📐 Règles de gestion

- Valeurs de référence CDC (seed v1) : goal_forward +5, goal_midfielder +6, goal_defender +8, goal_goalkeeper +8, assist +3, clean_sheet (défenseur/gardien titulaire) +4, start_60 (>= 60 min) +2, sub_appearance (< 60 min) +1, yellow_card -1, red_card -3, goals_conceded_per_2 (défenseur/gardien) -1 par tranche de 2 buts, captain_multiplier x2.
- Un barème = une version (entier croissant) : ScoringRuleSet {version, rules:[{event, points, positions[]}], activeFromGameweek, createdBy, createdAt, comment} ; ScoringRule actuel devient la ligne (event unique PAR version).
- Version active pour une journée = rulesVersion figé à l'ouverture de la journée (Gameweek.rulesVersion) ; une nouvelle version s'applique à partir de la journée suivante et ne recalcule JAMAIS les points déjà calculés (règle WJ-03).
- Points entiers signés bornés [-20, +20] ; captain_multiplier entier 1..3 (défaut 2).
- Lecture : tout utilisateur authentifié ; écriture : rôle super-admin uniquement (RBAC), chaque version journalisée dans AuditLog (qui, quoi, quand).
- GET public renvoie la version courante avec updatedAt (pastille « Configurable » du mobile) ; cache 24 h côté mobile, Cache-Control: public, max-age=3600, ETag.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/fantasy/scoring-rules` | Barème actif | — | {success:true,data:{version:1,updatedAt,rules:[{event:'goal_midfielder',points:6,positions:['MID'],label:'But (milieu)'}],captainMultiplier:2}} |
| `POST` | `/api/v1/admin/fantasy/scoring-rules` | Créer une nouvelle version (super-admin) | {rules:[…],activeFromGameweek:12,comment} | {success:true,data:ScoringRuleSet} |
| `POST` | `/api/v1/admin/fantasy/scoring-rules/simulate` | Simuler l'impact d'un barème | {rules:[…],gameweek:10} | {success:true,data:{currentTotal,newTotal}} |

## 🗄️ Données

- scoringrules (+version)
- scoringrulesets (nouvelle)
- auditlogs

## 🛠️ Tâches

- [ ] Modifier src/models/gamification.model.ts : ScoringRule -> index unique {version:1, event:1}, champs version, positions enum groupes, label i18n (labelI18n fr/en/es) ; créer ScoringRuleSet dans fantasy.model.ts.
- [ ] Créer le seed seeds/scoring-rules.v1.ts avec les 12 lignes ci-dessus et labels FR/EN/ES.
- [ ] Service scoring-rules.service.ts : getActiveSet(), getSetForGameweek(gw), createVersion(adminId, rules, activeFromGameweek) avec validation Joi (bornes, events connus).
- [ ] Routes GET /fantasy/scoring-rules (utilisateur) -> {version, updatedAt, rules[]}, GET /admin/fantasy/scoring-rules/versions (liste/historique), POST /admin/fantasy/scoring-rules (restrictTo('super-admin')), POST /admin/fantasy/scoring-rules/simulate {rules, gameweek} -> {currentTotal, newTotal} sans écriture.
- [ ] Restaurer une ancienne version = POST d'une nouvelle version copiée (jamais de mutation d'une version existante).
- [ ] Écrire AuditLog (action 'fantasy.scoring.version.created', diff avant/après).
- [ ] Invalider le cache Redis fantasy:scoring:active à la création.
- [ ] Swagger : schémas ScoringRuleSet, ScoringRuleItem.

## ✔️ Critères d'acceptation

- [ ] Étant donné la base vide, quand le seed s'exécute, alors la version 1 contient les 12 règles du CDC.
- [ ] Étant donné une nouvelle version v2 activeFromGameweek=12, quand la journée 11 est calculée, alors elle utilise la v1.
- [ ] Étant donné un rôle content-manager, quand POST /admin/fantasy/scoring-rules, alors 403.
- [ ] Étant donné points=+25, alors 422 (borne 20).
- [ ] Étant donné POST simulate, alors aucune donnée n'est modifiée.

## 🧪 Tests à écrire

- [ ] Unitaire : validation Joi du barème.
- [ ] Unitaire : getSetForGameweek retourne la version figée.
- [ ] Intégration : RBAC super-admin uniquement.
- [ ] Intégration : AuditLog écrit à la création.
- [ ] Intégration : simulate sans effet de bord.
- [ ] Intégration : GET renvoie ETag et 304 sur If-None-Match.

## 🔗 Dépendances

À réaliser après : `API-FANT-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.12.2
- CDC Backend §3.11
- CDC Admin (barème Fantasy WJ-03)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
