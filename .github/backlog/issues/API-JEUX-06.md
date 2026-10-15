> **API-JEUX-06** · API · Priorité **P0** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

En tapant « Ped », l'écran D-04 liste Pedri (Milieu · Espagne), Pau Cubarsí (Défenseur central · Espagne), Carles Puyol (Défenseur · Espagne). La recherche doit être rapide, insensible aux accents et ne rien révéler sur le mystère.

## ✅ Objectif

Une recherche d'autocomplétion limitée à 8 résultats, sans divulgation d'information discriminante.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `D-04` — Recherche avec suggestions
_Module : Jeux - Guess the Player_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-04_recherche-avec-suggestions__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-04_recherche-avec-suggestions__phone_light.webp?raw=true' width='230' alt='D-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-04_recherche-avec-suggestions__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-04_recherche-avec-suggestions__phone_dark.webp?raw=true' width='230' alt='D-04 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-04_recherche-avec-suggestions__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-04_recherche-avec-suggestions__tablet_light.webp?raw=true' width='330' alt='D-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-04_recherche-avec-suggestions__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/D/D-04_recherche-avec-suggestions__tablet_dark.webp?raw=true' width='330' alt='D-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Guess the Player » · « Défi n°214 · 1/6 essais » · « Qui est le joueur mystère ? » · « Chaque essai compare tes choix aux indices. » · « Joueur » · « Nation » · « Poste » · « Âge » · « N° » · « Club » · « Yamal » · « 19 ▲ » · « 10 ▲ » · « La Masia » · « Correct » · « Proche » · « Faux » · « ▲▼ plus / moins » · « Ped » · « ri » · « Milieu · Espagne » · « Pau Cubarsí » · « Défenseur central · Espagne » · « Carles Puyol » · « Défenseur · Espagne »

**Composants repérés** : `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [API-JEUX-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-04%5D%22) · [API-JEUX-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-07%5D%22) · [API-JEUX-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-08%5D%22) · [API-JEUX-35](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-35%5D%22) · [MOB-D-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-03%5D%22) · [MOB-D-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-05%5D%22) · [MOB-D-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-06%5D%22) · [MOB-D-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-11%5D%22) · [MOB-D-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-12%5D%22) · [MOB-D-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-13%5D%22) · [MOB-D-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-27%5D%22) · [MOB-D-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-29%5D%22) · [MOB-D-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-D-30%5D%22)

## 📐 Règles de gestion

- Paramètre q : 2 caractères minimum (400 sinon), 40 max ; recherche sur searchName (préfixe puis sous-chaîne), accents et casse ignorés.
- Résultats triés : préfixe exact du nom de famille > préfixe du prénom > sous-chaîne ; limite 8 ; seuls les joueurs status='published' éligibles au jeu sont renvoyés.
- Chaque suggestion : {id, name, position (libellé localisé), nationality (libellé localisé), photoUrl}. Aucun indice supplémentaire (âge, numéro, club) n'est renvoyé pour ne pas aider à deviner.
- Rate limit dédié 120 req/min/utilisateur (debounce mobile 250 ms) ; réponse mise en cache Redis 5 min par `q` normalisé.
- Les joueurs déjà proposés dans la partie sont marqués alreadyGuessed:true (non sélectionnables côté UI).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/guess-the-player/players/search?q=ped` | Suggestions d'autocomplétion | q (2-40 car.) | {success:true,data:[{id:'…',name:'Pedri',position:'Milieu',nationality:'Espagne',alreadyGuessed:false}]} |

## 🛠️ Tâches

- [ ] Créer GET /guess-the-player/players/search dans guess.routes.ts + validator Joi (q, limit<=8).
- [ ] Implémenter guessService.searchPlayers avec index {searchName:1} (issue FOOT donnees-player-durcissement) et regex ancrée échappée.
- [ ] Échapper les caractères spéciaux de q (anti-ReDoS / injection de regex).
- [ ] Cache Redis clé guess:search:{locale}:{q} TTL 300 s.
- [ ] Marquer alreadyGuessed depuis GuessAttempt du joueur.
- [ ] Libellés de poste/nation via src/i18n (position.DC → « Défenseur central »).
- [ ] Ajouter le limiter 'guessSearchLimiter' dans src/middleware/rateLimiter.ts.
- [ ] Swagger : GuessSearchResult.

## ✔️ Critères d'acceptation

- [ ] Étant donné q='ped', alors Pedri est retourné en premier.
- [ ] Étant donné q='cubarsi', alors Pau Cubarsí est trouvé malgré l'accent.
- [ ] Étant donné q='p' (1 caractère), alors 400 avec code VALIDATION_ERROR.
- [ ] Étant donné q='.*', alors aucune exception regex et 0 résultat.
- [ ] Étant donné un joueur déjà tenté, alors alreadyGuessed=true.

## 🧪 Tests à écrire

- [ ] Unitaire : tri préfixe/sous-chaîne.
- [ ] Intégration : accents (é, ñ, ß).
- [ ] Sécurité : q avec caractères regex.
- [ ] Intégration : cache Redis hit/miss.
- [ ] Intégration : aucune clé d'indice (age, shirtNumber, club) dans la réponse.

## ♿ Accessibilité et i18n

- Libellés localisés fr/en/es.

## 🔗 Dépendances

À réaliser après : `API-JEUX-05` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.3

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
