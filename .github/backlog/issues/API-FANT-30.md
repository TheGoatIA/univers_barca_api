> **API-FANT-30** · Fonctionnel · Priorité **P1** · Taille **L** · Phase 3 — Fonctionnalités avancées

## 🎯 Contexte

Le CDC §3.5 cite ComputeAcademyProgression, qui réutilise le moteur de points de Fantasy : même module src/services/scoring (règles configurables, calcul pur). Il applique la décision, produit le bilan (I-08 « Semaine réussie · points de global »), déclenche l'alerte fatigue (I-11) et la promotion « Juvenil B » à 75 de global (I-12).

## ✅ Objectif

Une fonction pure applyWeek(state, decision, ruleSet) -> {newState, report, milestones}.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `I-08` — Bilan de la semaine
_Module : La Masia Academy_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-08_bilan-de-la-semaine__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-08_bilan-de-la-semaine__phone_light.webp?raw=true' width='230' alt='I-08 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-08_bilan-de-la-semaine__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-08_bilan-de-la-semaine__phone_dark.webp?raw=true' width='230' alt='I-08 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-08_bilan-de-la-semaine__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-08_bilan-de-la-semaine__tablet_light.webp?raw=true' width='330' alt='I-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-08_bilan-de-la-semaine__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-08_bilan-de-la-semaine__tablet_dark.webp?raw=true' width='330' alt='I-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Bilan · Semaine 3 » · « Semaine réussie » · « +3 » · « points de global » · « Évolution des attributs » · « Technique » · « +4 » · « Physique » · « +0 » · « Intelligence » · « +1 » · « Mental » · « −2 » · « Conseil de l'assistant : il a besoin de repos avant le prochain match. » · « Semaine suivante »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-25%5D%22) · [API-FANT-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-31%5D%22) · [API-FANT-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-32%5D%22) · [API-FANT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-34%5D%22) · [MOB-I-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-01%5D%22) · [MOB-I-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-02%5D%22) · [MOB-I-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-04%5D%22) · [MOB-I-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-05%5D%22) · [MOB-I-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-14%5D%22)

#### `I-11` — Alerte fatigue élevée
_Module : La Masia Academy_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-11_alerte-fatigue-elevee__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-11_alerte-fatigue-elevee__phone_light.webp?raw=true' width='230' alt='I-11 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-11_alerte-fatigue-elevee__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-11_alerte-fatigue-elevee__phone_dark.webp?raw=true' width='230' alt='I-11 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-11_alerte-fatigue-elevee__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-11_alerte-fatigue-elevee__tablet_light.webp?raw=true' width='330' alt='I-11 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-11_alerte-fatigue-elevee__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-11_alerte-fatigue-elevee__tablet_dark.webp?raw=true' width='330' alt='I-11 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « La Masia Academy » · « Cadet A · 15 ans » · « Samuel Mbarga » · « Milieu offensif · Pied gauche » · « Global » · « Forme » · « 41% » · « Fatigue » · « 82% » · « Fatigue élevée » · « Risque de blessure : prévois du repos cette semaine. » · « S4 » · « Semaine 4 · décision à prendre » · « Prochain match de l'académie samedi » · « Attributs » · « Technique » · « Physique » · « Intelligence » · « Vitesse » · « Mental » · « Finition » · « Prendre la décision de la semaine »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-26%5D%22) · [API-FANT-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-28%5D%22) · [MOB-I-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-04%5D%22) · [MOB-I-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-17%5D%22)

#### `I-12` — Jalon — promotion
_Module : La Masia Academy_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-12_jalon-promotion__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-12_jalon-promotion__phone_light.webp?raw=true' width='230' alt='I-12 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-12_jalon-promotion__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-12_jalon-promotion__phone_dark.webp?raw=true' width='230' alt='I-12 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-12_jalon-promotion__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-12_jalon-promotion__tablet_light.webp?raw=true' width='330' alt='I-12 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-12_jalon-promotion__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-12_jalon-promotion__tablet_dark.webp?raw=true' width='330' alt='I-12 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « La Masia Academy » · « Cadet A · 15 ans » · « Samuel Mbarga » · « Milieu offensif · Pied gauche » · « Global » · « Forme » · « 78% » · « Fatigue » · « 34% » · « S4 » · « Semaine 4 · décision à prendre » · « Prochain match de l'académie samedi » · « Attributs » · « Technique » · « Physique » · « Intelligence » · « Vitesse » · « Mental » · « Finition » · « Prendre la décision de la semaine » · « Promotion ! » · « Juvenil B » · « Samuel atteint 75 de global et rejoint la catégorie supérieure. Nouveau badge débloqué ! » · « Continuer »

**Composants repérés** : `btn`, `card`, `modal`

</details>

**Issues liées sur ce même écran :** [API-FANT-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-28%5D%22) · [API-FANT-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-31%5D%22) · [API-FANT-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-32%5D%22) · [API-FANT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-33%5D%22) · [API-FANT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-34%5D%22) · [MOB-I-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-04%5D%22) · [MOB-I-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-18%5D%22) · [MOB-I-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-20%5D%22) · [MOB-I-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-22%5D%22)

## 📐 Règles de gestion

- Entrées : attributs, form, fatigue, global, category, week, décision (ou absence), RuleSet ; sorties déterministes, jamais de Math.random.
- Semaine sans décision : aucun gain d'attribut, fatigue -8 (récupération naturelle), forme -1 (à confirmer).
- Bilan : deltas par attribut, globalDelta, formDelta, fatigueDelta, adviceKey (ex. 'needs_rest' quand fatigue >= 70 : « Conseil de l'assistant : il a besoin de repos avant le prochain match »), label 'Semaine réussie' si globalDelta >= 1.
- Promotion : quand global >= seuil de la catégorie (75 pour Cadet A -> Juvenil B, I-04/I-12) la catégorie passe à la suivante et un jalon {code:'promotion_juvenil_b', category} est créé une seule fois par palier ; échelle des catégories suivantes à confirmer (proposition : Juvenil B -> Juvenil A -> Barça Atlètic -> Équipe première, seuils 80/85/90, configurables).
- Âge : +1 an après 52 semaines de jeu (à confirmer).
- Fatigue >= 80 : indicateur blessureRisk=true dans l'état ; aucune blessure automatique (non définie au CDC).
- Toutes valeurs bornées 0..99 / 0..100.

## 🛠️ Tâches

- [ ] Créer src/services/academy/engine.ts : applyWeek, detectPromotion, buildReport.
- [ ] Réutiliser clamp/round utilitaires de src/services/scoring.
- [ ] Créer la table des conseils (adviceKey) i18n fr/en/es.
- [ ] Définir le modèle AcademyMilestone {playerId, code, category, createdAt, acknowledgedAt} unique {playerId, code}.
- [ ] Écrire 25 tests table-driven (chaque décision x niveaux de fatigue).
- [ ] Documenter l'algorithme et les hypothèses à confirmer.
- [ ] Fournir des fixtures reprenant les exemples des maquettes (I-05, I-08, I-10, I-11, I-12).
- [ ] Brancher en lecture dans l'API de bilan.

## ✔️ Critères d'acceptation

- [ ] Étant donné fatigue 34 et technical_training, alors technique +3, fatigue 46, globalDelta >= 1.
- [ ] Étant donné global passant de 74 à 76, alors une promotion est détectée une seule fois.
- [ ] Étant donné aucune décision, alors fatigue -8.
- [ ] Étant donné fatigue 82, alors blessureRisk=true et adviceKey='needs_rest'.
- [ ] Étant donné le même état et la même décision deux fois, alors le même résultat.

## 🧪 Tests à écrire

- [ ] Unitaire table-driven : 5 décisions x 4 niveaux de fatigue.
- [ ] Unitaire : promotion unique.
- [ ] Unitaire : semaine sans décision.
- [ ] Unitaire : bornes.
- [ ] Unitaire : déterminisme.

## 🔗 Dépendances

À réaliser après : `API-FANT-26` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.5
- CDC Backend §3.12.3
- CDC Global §2.7

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
