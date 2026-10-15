> **API-FANT-28** · API · Priorité **P1** · Taille **M** · Phase 3 — Fonctionnalités avancées

## 🎯 Contexte

L'accueil du joueur (I-05) montre « Cadet A · 15 ans », Global, Forme 78 %, Fatigue 34 %, « Semaine 4 · décision à prendre », « Prochain match de l'académie samedi » et les six attributs ; I-11 ajoute l'alerte « Fatigue élevée » à 82 %.

## ✅ Objectif

Une lecture unique renvoyant tout ce qu'il faut pour l'accueil : joueur, état de la semaine, alerte, bilan en attente, jalon en attente.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `I-05` — Accueil du joueur
_Module : La Masia Academy_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-05_accueil-du-joueur__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-05_accueil-du-joueur__phone_light.webp?raw=true' width='230' alt='I-05 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-05_accueil-du-joueur__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-05_accueil-du-joueur__phone_dark.webp?raw=true' width='230' alt='I-05 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-05_accueil-du-joueur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-05_accueil-du-joueur__tablet_light.webp?raw=true' width='330' alt='I-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-05_accueil-du-joueur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-05_accueil-du-joueur__tablet_dark.webp?raw=true' width='330' alt='I-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « La Masia Academy » · « Cadet A · 15 ans » · « Samuel Mbarga » · « Milieu offensif · Pied gauche » · « Global » · « Forme » · « 78% » · « Fatigue » · « 34% » · « S4 » · « Semaine 4 · décision à prendre » · « Prochain match de l'académie samedi » · « Attributs » · « Technique » · « Physique » · « Intelligence » · « Vitesse » · « Mental » · « Finition » · « Prendre la décision de la semaine »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-22%5D%22) · [API-FANT-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-25%5D%22) · [API-FANT-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-26%5D%22) · [API-FANT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-34%5D%22) · [MOB-I-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-01%5D%22) · [MOB-I-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-02%5D%22) · [MOB-I-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-04%5D%22) · [MOB-I-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-11%5D%22) · [MOB-I-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-21%5D%22) · [MOB-I-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-22%5D%22)

#### `I-11` — Alerte fatigue élevée
_Module : La Masia Academy_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-11_alerte-fatigue-elevee__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-11_alerte-fatigue-elevee__phone_light.webp?raw=true' width='230' alt='I-11 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-11_alerte-fatigue-elevee__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-11_alerte-fatigue-elevee__phone_dark.webp?raw=true' width='230' alt='I-11 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-11_alerte-fatigue-elevee__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-11_alerte-fatigue-elevee__tablet_light.webp?raw=true' width='330' alt='I-11 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-11_alerte-fatigue-elevee__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-11_alerte-fatigue-elevee__tablet_dark.webp?raw=true' width='330' alt='I-11 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « La Masia Academy » · « Cadet A · 15 ans » · « Samuel Mbarga » · « Milieu offensif · Pied gauche » · « Global » · « Forme » · « 41% » · « Fatigue » · « 82% » · « Fatigue élevée » · « Risque de blessure : prévois du repos cette semaine. » · « S4 » · « Semaine 4 · décision à prendre » · « Prochain match de l'académie samedi » · « Attributs » · « Technique » · « Physique » · « Intelligence » · « Vitesse » · « Mental » · « Finition » · « Prendre la décision de la semaine »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-26%5D%22) · [API-FANT-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-30%5D%22) · [MOB-I-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-04%5D%22) · [MOB-I-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-17%5D%22)

#### `I-12` — Jalon — promotion
_Module : La Masia Academy_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-12_jalon-promotion__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-12_jalon-promotion__phone_light.webp?raw=true' width='230' alt='I-12 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-12_jalon-promotion__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-12_jalon-promotion__phone_dark.webp?raw=true' width='230' alt='I-12 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-12_jalon-promotion__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-12_jalon-promotion__tablet_light.webp?raw=true' width='330' alt='I-12 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-12_jalon-promotion__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-12_jalon-promotion__tablet_dark.webp?raw=true' width='330' alt='I-12 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « La Masia Academy » · « Cadet A · 15 ans » · « Samuel Mbarga » · « Milieu offensif · Pied gauche » · « Global » · « Forme » · « 78% » · « Fatigue » · « 34% » · « S4 » · « Semaine 4 · décision à prendre » · « Prochain match de l'académie samedi » · « Attributs » · « Technique » · « Physique » · « Intelligence » · « Vitesse » · « Mental » · « Finition » · « Prendre la décision de la semaine » · « Promotion ! » · « Juvenil B » · « Samuel atteint 75 de global et rejoint la catégorie supérieure. Nouveau badge débloqué ! » · « Continuer »

**Composants repérés** : `btn`, `card`, `modal`

</details>

**Issues liées sur ce même écran :** [API-FANT-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-30%5D%22) · [API-FANT-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-31%5D%22) · [API-FANT-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-32%5D%22) · [API-FANT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-33%5D%22) · [API-FANT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-34%5D%22) · [MOB-I-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-04%5D%22) · [MOB-I-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-18%5D%22) · [MOB-I-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-20%5D%22) · [MOB-I-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-22%5D%22)

#### `I-01` — Présentation de l’académie
_Module : La Masia Academy_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-01_presentation-de-l-academie__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-01_presentation-de-l-academie__phone_light.webp?raw=true' width='230' alt='I-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-01_presentation-de-l-academie__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-01_presentation-de-l-academie__phone_dark.webp?raw=true' width='230' alt='I-01 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-01_presentation-de-l-academie__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-01_presentation-de-l-academie__tablet_light.webp?raw=true' width='330' alt='I-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-01_presentation-de-l-academie__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-01_presentation-de-l-academie__tablet_dark.webp?raw=true' width='330' alt='I-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « La Masia Academy » · « Simulation » · « Forme ta pépite » · « Crée un jeune joueur virtuel et guide sa progression, semaine après semaine, jusqu'à l'équipe première. » · « Décide chaque semaine » · « Entraînement, tactique, nutrition, récupération. » · « Observe sa progression » · « Des attributs qui évoluent selon tes choix. » · « Partage le même moteur de points » · « Tes réussites alimentent ton Culé Passport. » · « Créer mon joueur »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [MOB-I-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-06%5D%22) · [MOB-I-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-20%5D%22)

## 📐 Règles de gestion

- 404 ACADEMY_PLAYER_NOT_FOUND si aucun joueur (le mobile affiche I-01 « Créer mon joueur »).
- Champs : {id, name, position, positionLabel, age, category, nextCategory, week, global, form, fatigue, attributes, pendingDecision:{week, type|null}, decisionOpen:boolean, nextMatchAt?, alerts:[{code:'HIGH_FATIGUE', threshold:80}], pendingReport:{week}|null, pendingMilestone:{id,code,category}|null}.
- decisionOpen = aucune décision enregistrée pour la semaine courante (libellé « décision à prendre ») ; si une décision existe, pendingDecision.type renseigné (modifiable avant application).
- nextMatchAt (« Prochain match de l'académie samedi ») : date du prochain tick de simulation (samedi de la semaine, Europe/Madrid, à confirmer car le CDC ne définit pas de match d'académie) ; omis si non défini.
- alerts : HIGH_FATIGUE quand fatigue >= 80 ; LOW_FORM quand forme < 50 (maquette I-11 : forme 41 %).
- Cache privé 30 s, invalidé à chaque décision/tick.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/academy/player` | Joueur d'académie de l'utilisateur | — | {success:true,data:{id,name,position,age:15,category:'Cadet A',week:4,global:62,form:78,fatigue:34,attributes:{technique:64,physique:58,intelligence:61,vitesse:66,mental:59,finition:52},decisionOpen:true,alerts:[],pendingReport:null,pendingMilestone:null}} |

## 🛠️ Tâches

- [ ] Controller academy.getPlayer + route GET /academy/player.
- [ ] Service getAcademyState(userId) agrégeant joueur, décision de la semaine, rapport non acquitté, jalon non acquitté.
- [ ] Calcul des alerts à partir du RuleSet actif.
- [ ] Libellé de position localisé via src/i18n/academy.{fr,en,es}.json.
- [ ] Ajout de l'en-tête serverTime pour le calendrier hebdomadaire.
- [ ] Swagger : schéma AcademyPlayerState.
- [ ] Cache Redis academy:state:{userId} TTL 30 s.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné aucun joueur, alors 404 ACADEMY_PLAYER_NOT_FOUND.
- [ ] Étant donné fatigue 82, alors alerts contient HIGH_FATIGUE.
- [ ] Étant donné une décision déjà enregistrée, alors decisionOpen=false et pendingDecision.type renseigné.
- [ ] Étant donné un bilan non acquitté, alors pendingReport est présent.
- [ ] Étant donné le module désactivé, alors 403.

## 🧪 Tests à écrire

- [ ] Intégration : état nominal.
- [ ] Intégration : alertes.
- [ ] Intégration : bilan en attente.
- [ ] Intégration : cache invalidé après décision.
- [ ] Intégration : 404.

## 🔗 Dépendances

À réaliser après : `API-FANT-27` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
