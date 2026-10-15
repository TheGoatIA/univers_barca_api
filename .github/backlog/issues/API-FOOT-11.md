> **API-FOOT-11** · API · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

La liste actuelle ne filtre que par q. Les modules consommateurs (Historique, GOAT, Quiz) ont besoin de filtres et d'un tri stable.

## ✅ Objectif

Liste publique des joueurs publiés avec recherche, filtres et pagination par curseur.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `F-11` — Fiche joueur — aperçu
_Module : Historique et fiches_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-11_fiche-joueur-apercu__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-11_fiche-joueur-apercu__phone_light.webp?raw=true' width='230' alt='F-11 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-11_fiche-joueur-apercu__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-11_fiche-joueur-apercu__phone_dark.webp?raw=true' width='230' alt='F-11 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-11_fiche-joueur-apercu__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-11_fiche-joueur-apercu__tablet_light.webp?raw=true' width='330' alt='F-11 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-11_fiche-joueur-apercu__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-11_fiche-joueur-apercu__tablet_dark.webp?raw=true' width='330' alt='F-11 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Fiche joueur » · « N°10 · Ailier droit » · « Lamine Yamal » · « 🇪🇸 Espagne · 19 ans · 1,80 m » · « Matchs » · « Buts » · « Passes D. » · « Trophées » · « Aperçu » · « Statistiques » · « Biographie » · « Profil » · « Poste » · « Ailier droit » · « Pied » · « Gauche » · « Né le » · « 13 juil. 2007 » · « Formé à » · « La Masia » · « Contrat » · « Profil de jeu » · « Comparer » · « Demander à Barça AI »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [API-FOOT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-01%5D%22) · [API-FOOT-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-12%5D%22) · [API-FOOT-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-30%5D%22) · [API-FOOT-50](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-50%5D%22) · [API-FOOT-53](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-53%5D%22) · [API-FOOT-54](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-54%5D%22) · [MOB-F-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-01%5D%22) · [MOB-F-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-02%5D%22) · [MOB-F-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-03%5D%22) · [MOB-F-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-04%5D%22) · [MOB-F-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-20%5D%22) · [MOB-F-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-21%5D%22) · [MOB-F-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-24%5D%22) · [MOB-F-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-25%5D%22) · [MOB-F-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-26%5D%22) · [MOB-F-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-27%5D%22)

#### `F-12` — Fiche joueur — statistiques
_Module : Historique et fiches_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-12_fiche-joueur-statistiques__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-12_fiche-joueur-statistiques__phone_light.webp?raw=true' width='230' alt='F-12 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-12_fiche-joueur-statistiques__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-12_fiche-joueur-statistiques__phone_dark.webp?raw=true' width='230' alt='F-12 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-12_fiche-joueur-statistiques__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-12_fiche-joueur-statistiques__tablet_light.webp?raw=true' width='330' alt='F-12 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-12_fiche-joueur-statistiques__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/F/F-12_fiche-joueur-statistiques__tablet_dark.webp?raw=true' width='330' alt='F-12 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Lamine Yamal » · « Aperçu » · « Statistiques » · « Biographie » · « Buts et passes par saison » · « Toutes compétitions » · « Saison » · « Matchs » · « Buts » · « Passes » · « Trophées » · « 26/27 » · « 25/26 » · « 24/25 » · « 23/24 » · « Données de démonstration »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [API-FOOT-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-12%5D%22) · [MOB-F-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-20%5D%22) · [MOB-F-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-22%5D%22) · [MOB-F-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-F-27%5D%22)

## 📐 Règles de gestion

- Filtres : q (insensible accents via searchName), position, nationality (ISO-3166 alpha-2), active (bool), club.
- Tri : name (défaut), shirtNumber, goals (saison courante) ; asc/desc.
- Seuls les joueurs status=published sont retournés ; archived exclus.
- Champs allégés en liste : id, fullName, shortName, shirtNumber, position, nationality, photoUrl, clubCurrent.
- Rate limit lecture 120 req/min/utilisateur, 60/min/IP non authentifié (CDC §10.2).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/players` | Liste paginée des joueurs publiés | ?q=&position=AD&nationality=ES&active=true&sort=name&cursor=&limit=20 | {success:true,data:{items:[{id,fullName,shirtNumber,position,nationality,photoUrl}],nextCursor,hasMore}} |

## 🛠️ Tâches

- [ ] Étendre validators/player.validator.ts (listPlayersQuery).
- [ ] Créer src/services/player.service.ts (searchPublic).
- [ ] Refactorer content.controller.listPlayers pour utiliser le service et le curseur.
- [ ] Mapper photoKey→photoUrl.
- [ ] Appliquer httpCache(max-age=300).
- [ ] JSDoc Swagger complet.
- [ ] Escape regex via escapeRegex (existant).

## ✔️ Critères d'acceptation

- [ ] Étant donné q=«pedri», alors Pedri est retourné même saisi sans accent.
- [ ] Étant donné position=AD, alors uniquement des ailiers droits.
- [ ] Étant donné un joueur archived, alors absent.
- [ ] Étant donné limit=500, alors ramené à 100.

## 🧪 Tests à écrire

- [ ] Intégration : combinaison position+nationality.
- [ ] Intégration : recherche sans accents.
- [ ] Intégration : archived/draft invisibles.
- [ ] Intégration : 304 ETag.

## 🔗 Dépendances

À réaliser après : `API-FOOT-01` · `API-FOOT-06` · `API-FOOT-07` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.2
- CDC Backend §4.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
