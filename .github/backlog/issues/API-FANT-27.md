> **API-FANT-27** · API · Priorité **P1** · Taille **M** · Phase 3 — Fonctionnalités avancées

## 🎯 Contexte

Le parcours de création en 3 étapes (identité et poste, répartition de 12 points bonus, confirmation) aboutit à un unique appel POST /academy/player (CDC : CreateAcademyPlayer). I-04 affiche « Cadet A · Samuel Mbarga · Milieu offensif · Pied gauche · 15 ans » et « Premier objectif : atteindre 75 de global pour être promu en Juvenil B ».

## ✅ Objectif

Créer le joueur avec ses attributs de départ après validation stricte.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `I-02` — Création — identité et poste
_Module : La Masia Academy_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-02_creation-identite-et-poste__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-02_creation-identite-et-poste__phone_light.webp?raw=true' width='230' alt='I-02 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-02_creation-identite-et-poste__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-02_creation-identite-et-poste__phone_dark.webp?raw=true' width='230' alt='I-02 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-02_creation-identite-et-poste__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-02_creation-identite-et-poste__tablet_light.webp?raw=true' width='330' alt='I-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-02_creation-identite-et-poste__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-02_creation-identite-et-poste__tablet_dark.webp?raw=true' width='330' alt='I-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Nouveau joueur » · « 1/3 » · « Prénom et nom » · « Samuel Mbarga » · « Poste » · « Gardien » · « Défenseur » · « Milieu » · « Ailier » · « Attaquant » · « Pied fort » · « Gauche » · « Droit » · « Les deux » · « Continuer »

**Composants repérés** : `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [API-FANT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-34%5D%22) · [MOB-I-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-03%5D%22) · [MOB-I-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-07%5D%22) · [MOB-I-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-10%5D%22) · [MOB-I-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-22%5D%22)

#### `I-03` — Création — profil de départ
_Module : La Masia Academy_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-03_creation-profil-de-depart__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-03_creation-profil-de-depart__phone_light.webp?raw=true' width='230' alt='I-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-03_creation-profil-de-depart__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-03_creation-profil-de-depart__phone_dark.webp?raw=true' width='230' alt='I-03 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-03_creation-profil-de-depart__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-03_creation-profil-de-depart__tablet_light.webp?raw=true' width='330' alt='I-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-03_creation-profil-de-depart__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-03_creation-profil-de-depart__tablet_dark.webp?raw=true' width='330' alt='I-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Nouveau joueur » · « 2/3 » · « Ses points forts » · « Répartis 12 points bonus sur ses attributs de départ. » · « Technique » · « Physique » · « Intelligence » · « Vitesse » · « Points restants : » · « Continuer »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-34%5D%22) · [MOB-I-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-08%5D%22) · [MOB-I-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-10%5D%22)

#### `I-04` — Création — confirmation
_Module : La Masia Academy_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-04_creation-confirmation__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-04_creation-confirmation__phone_light.webp?raw=true' width='230' alt='I-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-04_creation-confirmation__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-04_creation-confirmation__phone_dark.webp?raw=true' width='230' alt='I-04 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-04_creation-confirmation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-04_creation-confirmation__tablet_light.webp?raw=true' width='330' alt='I-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-04_creation-confirmation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/I/I-04_creation-confirmation__tablet_dark.webp?raw=true' width='330' alt='I-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Nouveau joueur » · « 3/3 » · « Cadet A » · « Samuel Mbarga » · « Milieu offensif · Pied gauche · 15 ans » · « Premier objectif » · « Atteindre 75 de global » · « pour être promu en Juvenil B » · « Entrer à La Masia »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FANT-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FANT-25%5D%22) · [MOB-I-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-01%5D%22) · [MOB-I-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-09%5D%22) · [MOB-I-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-I-10%5D%22)

## 📐 Règles de gestion

- Corps : {name, position, preferredFoot, bonusPoints:{technique,physical,intelligence,speed}} (contrat mobile) ; name 2 à 40 caractères (lettres, espaces, apostrophes, traits d'union), nettoyé et filtré par la charte ; position ∈ gardien, défenseur, milieu, ailier, attaquant (+ variante affichée « Milieu offensif » dérivée) ; preferredFoot ∈ left|right|both.
- Total des points bonus = exactement 12 ; chaque attribut ajustable (technique, physique, intelligence, vitesse) borné à 0..6 (à confirmer par le propriétaire) ; mental et finition démarrent à la valeur de base.
- Valeur de base de chaque attribut = 50 (à confirmer) ; attributs de départ = base + bonus ; form=70, fatigue=20 (valeurs du modèle existant) ; week=1 ; category='Cadet A' ; age=15.
- Un seul joueur actif par utilisateur : 409 ACADEMY_PLAYER_EXISTS.
- Réponse 201 avec le joueur complet, global calculé et firstObjective {targetGlobal:75, nextCategory:'Juvenil B'}.
- Aucune donnée personnelle réelle : le nom est fictif ; avertissement documenté de ne pas saisir de nom d'une personne réelle (modération du nom).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/academy/player` | Créer le joueur d'académie | {name:'Samuel Mbarga',position:'midfielder',preferredFoot:'left',bonusPoints:{technique:4,physical:3,intelligence:3,speed:2}} | {success:true,data:AcademyPlayer} \| 409 \| 422 |

## 🛠️ Tâches

- [ ] Controller academy.createPlayer + route POST /academy/player (protect + requireModule('academy')).
- [ ] Validator Joi createAcademyPlayerSchema (somme = 12 via .custom, bornes, enums).
- [ ] Service createAcademyPlayer : calcul des attributs, global initial, snapshot AcademyProgressPoint semaine 1 (start).
- [ ] Appel du filtre de charte sur name (service partagé avec PASS fonct-pseudo-charte).
- [ ] Émettre 'academy.player_created' (Passport).
- [ ] Erreurs typées InvalidAcademyPlayerError (BONUS_TOTAL_INVALID, ATTRIBUTE_OUT_OF_RANGE).
- [ ] Swagger : exemples 201/409/422.
- [ ] Tests unitaires et intégration.

## ✔️ Critères d'acceptation

- [ ] Étant donné 12 points répartis (4,3,3,2), quand POST, alors 201 et technique = 54.
- [ ] Étant donné 11 points, alors 422 BONUS_TOTAL_INVALID.
- [ ] Étant donné un attribut à +7, alors 422 ATTRIBUTE_OUT_OF_RANGE.
- [ ] Étant donné un joueur existant, alors 409.
- [ ] Étant donné un nom interdit par la charte, alors 422 NAME_NOT_ALLOWED.

## 🧪 Tests à écrire

- [ ] Unitaire : calcul des attributs de départ.
- [ ] Intégration : création valide.
- [ ] Intégration : 409 second joueur.
- [ ] Intégration : 422 somme.
- [ ] Intégration : snapshot semaine 1 créé.

## 🔗 Dépendances

À réaliser après : `API-FANT-25` · `API-FANT-26` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.5
- CDC Global §2.7

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
