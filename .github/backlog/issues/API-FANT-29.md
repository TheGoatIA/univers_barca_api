> **API-FANT-29** · API · Priorité **P1** · Taille **M** · Phase 3 — Fonctionnalités avancées

## 🎯 Contexte

I-06 propose cinq cartes (Entraînement technique, physique, Travail tactique, Repos / récupération, Suivi nutritionnel) et I-07 confirme « La décision sera appliquée à la fin de la semaine ». Le CDC expose SubmitWeeklyDecision.

## ✅ Objectif

Enregistrer (ou remplacer) la décision de la semaine sans l'appliquer, et renvoyer un aperçu des effets.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `I-06` — Décision hebdomadaire
_Module : La Masia Academy_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-06_decision-hebdomadaire__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-06_decision-hebdomadaire__phone_light.webp?raw=true' width='230' alt='I-06 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-06_decision-hebdomadaire__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-06_decision-hebdomadaire__phone_dark.webp?raw=true' width='230' alt='I-06 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-06_decision-hebdomadaire__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-06_decision-hebdomadaire__tablet_light.webp?raw=true' width='330' alt='I-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-06_decision-hebdomadaire__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-06_decision-hebdomadaire__tablet_dark.webp?raw=true' width='330' alt='I-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Semaine 4 » · « Décision hebdomadaire » · « Samuel » · « Forme 78 % · Fatigue 34 % » · « Entraînement technique » · « Contrôle, passes, dribbles » · « Technique + » · « Fatigue + » · « Entraînement physique » · « Endurance, force, explosivité » · « Physique + » · « Fatigue ++ » · « Travail tactique » · « Lecture du jeu, placement » · « Intelligence + » · « Fatigue ~ » · « Repos / récupération » · « Sommeil, soins, décompression » · « Fatigue −− » · « Forme ~ » · « Suivi nutritionnel » · « Réduit l’impact de la fatigue » · « Malus fatigue − » · « Valider la décision »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-26%5D%22) · [API-FANT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-34%5D%22) · [MOB-I-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-02%5D%22) · [MOB-I-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-03%5D%22) · [MOB-I-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-04%5D%22) · [MOB-I-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-05%5D%22) · [MOB-I-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-12%5D%22) · [MOB-I-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-21%5D%22) · [MOB-I-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-22%5D%22)

#### `I-07` — Confirmation de la décision
_Module : La Masia Academy_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-07_confirmation-de-la-decision__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-07_confirmation-de-la-decision__phone_light.webp?raw=true' width='230' alt='I-07 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-07_confirmation-de-la-decision__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-07_confirmation-de-la-decision__phone_dark.webp?raw=true' width='230' alt='I-07 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-07_confirmation-de-la-decision__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-07_confirmation-de-la-decision__tablet_light.webp?raw=true' width='330' alt='I-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-07_confirmation-de-la-decision__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-07_confirmation-de-la-decision__tablet_dark.webp?raw=true' width='330' alt='I-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Semaine 4 » · « Entraînement technique » · « Contrôle, passes, dribbles » · « Technique + » · « Fatigue + » · « Entraînement physique » · « Endurance, force, explosivité » · « Physique + » · « Fatigue ++ » · « Travail tactique » · « Lecture du jeu, placement » · « Intelligence + » · « Fatigue ~ » · « Repos / récupération » · « Sommeil, soins, décompression » · « Fatigue −− » · « Forme ~ » · « Suivi nutritionnel » · « Réduit l’impact de la fatigue » · « Malus fatigue − » · « Technique » · « · Fatigue » · « . La décision sera appliquée à la fin de la semaine. » · « Confirmer » · « Changer »

**Composants repérés** : `btn`, `card`, `modal`

</details>

**Issues liées sur ce même écran :** [API-FANT-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-26%5D%22) · [API-FANT-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-31%5D%22) · [MOB-I-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-04%5D%22) · [MOB-I-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-05%5D%22) · [MOB-I-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-13%5D%22)

## 📐 Règles de gestion

- Corps : {week, decisionType} avec decisionType ∈ technical_training, physical_training, tactical_work, rest_recovery, nutrition_tracking ; week doit égaler la semaine courante du joueur (sinon 409 WEEK_MISMATCH).
- La décision est appliquée au tick hebdomadaire (pas immédiatement) ; elle peut être changée tant que le tick n'a pas eu lieu (« Changer ») ; une seule décision par semaine (upsert).
- Réponse : {week, decisionType, appliedAt:null, effectsPreview:{attributes:['technique+'], fatigue:'+'}} ; l'aperçu est qualitatif (pas de valeurs calculées) pour ne pas figer le résultat.
- Refus si le tick de la semaine est en cours de traitement (verrou) : 409 WEEK_LOCKED.
- Idempotent : même corps = même résultat 200 ; première soumission 201.
- Rate limit 20 requêtes/min/utilisateur.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/academy/player/decision` | Soumettre la décision hebdomadaire | {week:4,decisionType:'technical_training'} | {success:true,data:{week:4,decisionType:'technical_training',appliedAt:null,effectsPreview:{attributes:['technique+'],fatigue:'+'}}} |

## 🛠️ Tâches

- [ ] Controller academy.submitDecision + route POST /academy/player/decision.
- [ ] Validator Joi decisionSchema (enum, week entier >= 1).
- [ ] Service submitWeeklyDecision : upsert AcademyDecision {playerId, week}, invalide cache.
- [ ] Gestion du verrou Redis academy:lock:tick:{playerId}.
- [ ] Construire effectsPreview depuis RuleSet.
- [ ] Émettre l'événement 'academy.decision_submitted' (série d'activité Passport, à confirmer).
- [ ] Swagger : 201/200/409/422.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné semaine 4, quand POST technical_training, alors 201 et appliedAt null.
- [ ] Étant donné un second POST rest_recovery la même semaine, alors 200 et la décision est remplacée.
- [ ] Étant donné week=3, alors 409 WEEK_MISMATCH.
- [ ] Étant donné decisionType='mental', alors 422 (non exposé).
- [ ] Étant donné le tick en cours, alors 409 WEEK_LOCKED.

## 🧪 Tests à écrire

- [ ] Intégration : création puis remplacement.
- [ ] Intégration : 409 semaine.
- [ ] Intégration : enum rejetée.
- [ ] Intégration : événement émis.
- [ ] Intégration : rate limit.

## 🔗 Dépendances

À réaliser après : `API-FANT-28` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.5
- CDC Backend §3.12.3

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
