> **API-PASS-24** · Sécurité · Priorité **P0** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Un classement et des badges incitent à tricher (scripts rejouant des requêtes de quiz, comptes multiples). Les points sont la monnaie transverse : il faut des garde-fous côté serveur.

## ✅ Objectif

Plafonds, détection de rafales et suivi des comptes suspects, sans bloquer les utilisateurs légitimes.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `P-01` — Passport — vue d’ensemble
_Module : Culé Passport_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__phone_light.webp?raw=true' width='230' alt='P-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__phone_dark.webp?raw=true' width='230' alt='P-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__tablet_light.webp?raw=true' width='330' alt='P-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-01_passport-vue-d-ensemble__tablet_dark.webp?raw=true' width='330' alt='P-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Culé Passport » · « Boris_Culé » · « 🇨🇲 Yaoundé · Culé depuis 2018 » · « Niveau Culé » · « 12 j » · « 2 340 » · « Points » · « Série » · « Badges » · « 18 432e » · « Prochains badges » · « Voir tout » · « Série de 100 jours » · « 12 / 100 » · « Quiz parfait » · « 8 / 10 » · « Mes derniers badges » · « 9 / 24 » · « Premier match suivi » · « Série de 10 jours » · « GOAT voter » · « Statistiques détaillées » · « Quiz, Guess the Player, Fantasy » · « Ma série » · « Calendrier d’activité » · « Paramètres » · « Langue, thème, confidentialité »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-33%5D%22) · [API-PASS-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-01%5D%22) · [API-PASS-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-02%5D%22) · [API-PASS-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-03%5D%22) · [API-PASS-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-04%5D%22) · [API-PASS-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-05%5D%22) · [API-PASS-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-06%5D%22) · [API-PASS-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-11%5D%22) · [API-PASS-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-17%5D%22) · [API-PASS-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-20%5D%22) · [API-PASS-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-23%5D%22) · [API-PASS-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-25%5D%22) · [API-PASS-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-26%5D%22) · [API-PASS-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-27%5D%22) · [API-PASS-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-28%5D%22) · [API-PASS-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-29%5D%22) · [API-PASS-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-30%5D%22) · [API-PASS-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-31%5D%22) · [API-PASS-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-32%5D%22) · [API-PASS-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-33%5D%22) · [MOB-P-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-01%5D%22) · [MOB-P-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-02%5D%22) · [MOB-P-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-03%5D%22) · [MOB-P-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-04%5D%22) · [MOB-P-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-05%5D%22) · [MOB-P-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-06%5D%22) · [MOB-P-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-18%5D%22) · [MOB-P-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-20%5D%22) · [MOB-P-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-21%5D%22)

#### `P-02` — Statistiques détaillées
_Module : Culé Passport_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__phone_light.webp?raw=true' width='230' alt='P-02 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__phone_dark.webp?raw=true' width='230' alt='P-02 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__tablet_light.webp?raw=true' width='330' alt='P-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/P/P-02_statistiques-detaillees__tablet_dark.webp?raw=true' width='330' alt='P-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Statistiques » · « Membre depuis septembre 2026 » · « Global » · « Quiz » · « Guess » · « 2 340 » · « Points totaux » · « Meilleure série » · « Parties Guess » · « 81 % » · « Réussite Guess » · « Points par semaine » · « 8 dernières » · « pts » · « 55 % » · « Guess the Player » · « 30 % » · « 15 % »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [API-PASS-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-01%5D%22) · [API-PASS-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-02%5D%22) · [API-PASS-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-03%5D%22) · [API-PASS-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-04%5D%22) · [API-PASS-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-05%5D%22) · [API-PASS-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-11%5D%22) · [API-PASS-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-15%5D%22) · [API-PASS-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-16%5D%22) · [API-PASS-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-18%5D%22) · [API-PASS-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-27%5D%22) · [API-PASS-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-30%5D%22) · [API-PASS-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PASS-32%5D%22) · [MOB-P-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-01%5D%22) · [MOB-P-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-06%5D%22) · [MOB-P-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-P-07%5D%22)

## 📐 Règles de gestion

- Plafonds quotidiens par type d'événement (PassportPointRule.dailyCap) ; au-delà, l'événement est journalisé avec points=0 et meta.capped=true.
- Rafale : plus de 30 événements créditeurs en 60 s pour un utilisateur -> flags.suspicious=true, points suspendus (0) pendant 10 min, log sécurité ; aucun blocage de compte automatique.
- Les événements ne peuvent venir que de services internes : aucune route publique n'accepte {points} ou {type} du client (les points sont calculés exclusivement côté serveur).
- Idempotence stricte (idempotencyKey) contre le rejeu ; refId validé (appartient à l'utilisateur).
- Comptes suspendus/bannis : exclus des points et des classements ; leurs points sont conservés pour audit.
- File de revue : GET /admin/passport/suspicious (moderator) listant les comptes flaggés.

## 🛠️ Tâches

- [ ] Implémenter cappedPoints() dans record-activity avec compteur Redis passport:cap:{userId}:{type}:{dayKey} (TTL 36 h).
- [ ] Implémenter le détecteur de rafale (fenêtre glissante Redis).
- [ ] Champ UserProgress.flags + route admin de lecture et de levée de flag (AuditLog).
- [ ] Tests de charge négatifs (script k6 de rejeu).
- [ ] Revue : aucune route n'accepte points/type depuis le corps.
- [ ] Métriques gamification_capped_total, gamification_burst_total.
- [ ] Alerte sur burst > N par heure.
- [ ] Documenter dans docs/security/gamification.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné le plafond de 200 points atteint, alors l'événement suivant crédite 0 point.
- [ ] Étant donné 31 événements en 60 s, alors flags.suspicious=true.
- [ ] Étant donné un client envoyant points=9999, alors le champ est refusé/ignoré.
- [ ] Étant donné un compte banni, alors aucun point.
- [ ] Étant donné le flag levé par un modérateur, alors les points reprennent.

## 🧪 Tests à écrire

- [ ] Intégration : plafond.
- [ ] Intégration : rafale.
- [ ] Sécurité : injection de points via corps.
- [ ] Intégration : levée de flag auditée.
- [ ] k6 : rejeu massif.

## 🔗 Dépendances

À réaliser après : `API-PASS-03` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §2.11
- CDC Global §3.3

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
