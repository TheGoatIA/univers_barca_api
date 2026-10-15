> **API-IA-13** · Fonctionnel · Priorité **P0** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

N-09 montre le recadrage courtois (« Je suis spécialisé dans l'univers du FC Barcelone et du football. Pour la cuisine, je ne suis pas le meilleur coéquipier ») avec deux suggestions ; N-11 montre « Je n'ai pas cette information dans ma base de données et je préfère ne pas inventer » avec une action `open_historic_match`.

## ✅ Objectif

Deux statuts de réponse (`out_of_scope`, `no_data`) produits de façon fiable, localisés, avec relances utiles et sans coût de tokens quand c'est possible.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `N-09` — Question hors périmètre
_Module : Assistant IA Barça AI_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-09_question-hors-perimetre__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-09_question-hors-perimetre__phone_light.webp?raw=true' width='230' alt='N-09 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-09_question-hors-perimetre__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-09_question-hors-perimetre__phone_dark.webp?raw=true' width='230' alt='N-09 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-09_question-hors-perimetre__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-09_question-hors-perimetre__tablet_light.webp?raw=true' width='330' alt='N-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-09_question-hors-perimetre__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-09_question-hors-perimetre__tablet_dark.webp?raw=true' width='330' alt='N-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Barça AI » · « En ligne · FR / EN / ES » · « Donne-moi la recette du thiéboudienne. » · « Je suis spécialisé dans l’univers du FC Barcelone et du football. Pour la cuisine, je ne suis pas le meilleur coéquipier 😉 En revanche, je peux te parler du Barça ! » · « Un quiz sur le club ? » · « Raconter une anecdote du jour » · « Pose ta question sur le Barça… » · « Barça AI peut se tromper. Vérifie les infos importantes. »

**Composants repérés** : `avatar`, `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-IA-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-06%5D%22) · [API-IA-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-08%5D%22) · [API-IA-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-09%5D%22) · [API-IA-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-12%5D%22) · [API-IA-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-31%5D%22) · [MOB-N-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-05%5D%22) · [MOB-N-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-15%5D%22) · [MOB-N-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-25%5D%22) · [MOB-N-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-28%5D%22) · [MOB-N-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-30%5D%22) · [MOB-N-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-31%5D%22)

#### `N-11` — Information introuvable
_Module : Assistant IA Barça AI_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-11_information-introuvable__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-11_information-introuvable__phone_light.webp?raw=true' width='230' alt='N-11 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-11_information-introuvable__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-11_information-introuvable__phone_dark.webp?raw=true' width='230' alt='N-11 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-11_information-introuvable__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-11_information-introuvable__tablet_light.webp?raw=true' width='330' alt='N-11 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-11_information-introuvable__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-11_information-introuvable__tablet_dark.webp?raw=true' width='330' alt='N-11 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Barça AI » · « En ligne · FR / EN / ES » · « Quel était le prix du billet pour le Clásico de 1999 ? » · « Je n’ai pas cette information dans ma base de données et je préfère ne pas inventer. Je peux en revanche te donner le » · « score » · « et les » · « buteurs » · « de ce match. » · « Voir le match dans l’historique » · « Pose ta question sur le Barça… » · « Barça AI peut se tromper. Vérifie les infos importantes. »

**Composants repérés** : `avatar`, `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-IA-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-02%5D%22) · [API-IA-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-06%5D%22) · [API-IA-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-08%5D%22) · [API-IA-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-10%5D%22) · [API-IA-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-31%5D%22) · [MOB-N-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-05%5D%22) · [MOB-N-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-17%5D%22) · [MOB-N-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-25%5D%22) · [MOB-N-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-28%5D%22) · [MOB-N-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-31%5D%22)

## 📐 Règles de gestion

- Hors périmètre évident (intention out_of_scope, confiance >= 0,6) : réponse canned localisée sans appel fournisseur, status=out_of_scope, 2 suggestions parmi un jeu tournant (« Un quiz sur le club ? », « Raconter une anecdote du jour ») et actions open_daily_quiz / anecdote du jour ; quota décompté (un message traité = un message).
- Hors périmètre ambigu : le modèle décide via le prompt ; sa réponse est vérifiée côté serveur (marqueur `[[status:out_of_scope]]` demandé dans le format de sortie) pour fixer status.
- No data : retrieval vide sur une question factuelle ET entités reconnues -> status=no_data ; le texte propose l'information la plus proche disponible (score et buteurs d'un match connu) et inclut action open_historic_match{matchId} si un match de la même date/affiche existe.
- Le statut est toujours renseigné pour que le mobile choisisse le bon habillage ; aucune puce de source n'est renvoyée avec no_data.

## 🛠️ Tâches

- [ ] Créer src/services/assistant/canned-replies.ts (FR/EN/ES, 4 variantes aléatoires seedables par recordedSeed pour les tests).
- [ ] Brancher dans l'orchestrateur la décision `shortCircuit` pour out_of_scope.
- [ ] Implémenter le parseur de marqueurs de statut dans la sortie modèle (`parseStatusMarker`) et leur suppression du texte.
- [ ] Implémenter la recherche du « match le plus proche » (`findClosestMatch(entities)`) pour l'action de N-11.
- [ ] Générer les suggestions via `buildSuggestions(intent, lang)`.
- [ ] Ajouter les statuts à l'enum de ChatMessage et au schéma OpenAPI.
- [ ] Journaliser le motif (`reason`) du hors périmètre pour analyse de dérive.

## ✔️ Critères d'acceptation

- [ ] Étant donné « Donne-moi la recette du thiéboudienne », quand le message est traité, alors status=out_of_scope et aucun appel fournisseur n'a lieu.
- [ ] Étant donné « Prix du billet du Clásico de 1999 ? » avec match connu mais sans prix, alors status=no_data et une action open_historic_match est incluse.
- [ ] Étant donné un message hors périmètre traité, alors le quota est décompté.
- [ ] Étant donné une réponse no_data, alors sources est vide.

## 🧪 Tests à écrire

- [ ] Intégration : out_of_scope sans fournisseur.
- [ ] Intégration : no_data avec match proche.
- [ ] Unitaire : parseStatusMarker.
- [ ] Unitaire : suggestions localisées.

## 🔗 Dépendances

À réaliser après : `API-IA-10` · `API-IA-08` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §8.5
- CDC Backend §11.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
