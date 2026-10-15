> **API-IA-09** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le pipeline RAG du CDC Backend §11.5 commence par la détection de langue (FR/EN/ES) puis une classification légère d'intention (question factuelle, demande d'action, hors périmètre). Les écrans N-07 (« Langue détectée : EN ») et N-08 (« Idioma detectado : ES ») affichent la langue détectée de la question, pas celle de l'interface.

## ✅ Objectif

Un classifieur local, sans appel modèle, pour router la requête et économiser des tokens.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `N-07` — Réponse en anglais
_Module : Assistant IA Barça AI_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-07_reponse-en-anglais__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-07_reponse-en-anglais__phone_light.webp?raw=true' width='230' alt='N-07 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-07_reponse-en-anglais__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-07_reponse-en-anglais__phone_dark.webp?raw=true' width='230' alt='N-07 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-07_reponse-en-anglais__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-07_reponse-en-anglais__tablet_light.webp?raw=true' width='330' alt='N-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-07_reponse-en-anglais__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-07_reponse-en-anglais__tablet_dark.webp?raw=true' width='330' alt='N-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Barça AI » · « Online · FR / EN / ES » · « Who scored in the 2015 Champions League final? » · « Barcelona beat Juventus 3-1 in Berlin. » · « Rakitić » · « opened the scoring, followed by » · « Suárez » · « and » · « Neymar » · « Langue détectée : EN » · « Données : Matchs » · « Pose ta question sur le Barça… » · « Barça AI peut se tromper. Vérifie les infos importantes. »

**Composants repérés** : `avatar`, `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-IA-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-10%5D%22) · [API-IA-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-31%5D%22) · [MOB-N-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-01%5D%22) · [MOB-N-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-14%5D%22) · [MOB-N-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-25%5D%22) · [MOB-N-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-27%5D%22) · [MOB-N-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-28%5D%22) · [MOB-N-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-31%5D%22)

#### `N-08` — Réponse en espagnol
_Module : Assistant IA Barça AI_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-08_reponse-en-espagnol__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-08_reponse-en-espagnol__phone_light.webp?raw=true' width='230' alt='N-08 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-08_reponse-en-espagnol__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-08_reponse-en-espagnol__phone_dark.webp?raw=true' width='230' alt='N-08 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-08_reponse-en-espagnol__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-08_reponse-en-espagnol__tablet_light.webp?raw=true' width='330' alt='N-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-08_reponse-en-espagnol__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-08_reponse-en-espagnol__tablet_dark.webp?raw=true' width='330' alt='N-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Barça AI » · « En ligne · FR / EN / ES » · « ¿Quién es el máximo goleador histórico del club? » · « Lionel Messi » · « es el máximo goleador histórico del FC Barcelona con » · « 672 goles » · « en 778 partidos. » · « Idioma detectado : ES » · « Datos: Jugadores » · « Pose ta question sur le Barça… » · « Barça AI peut se tromper. Vérifie les infos importantes. »

**Composants repérés** : `avatar`, `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-IA-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-10%5D%22) · [API-IA-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-31%5D%22) · [MOB-N-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-01%5D%22) · [MOB-N-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-14%5D%22) · [MOB-N-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-25%5D%22) · [MOB-N-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-27%5D%22) · [MOB-N-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-28%5D%22) · [MOB-N-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-31%5D%22)

#### `N-09` — Question hors périmètre
_Module : Assistant IA Barça AI_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-09_question-hors-perimetre__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-09_question-hors-perimetre__phone_light.webp?raw=true' width='230' alt='N-09 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-09_question-hors-perimetre__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-09_question-hors-perimetre__phone_dark.webp?raw=true' width='230' alt='N-09 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-09_question-hors-perimetre__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-09_question-hors-perimetre__tablet_light.webp?raw=true' width='330' alt='N-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-09_question-hors-perimetre__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-09_question-hors-perimetre__tablet_dark.webp?raw=true' width='330' alt='N-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Barça AI » · « En ligne · FR / EN / ES » · « Donne-moi la recette du thiéboudienne. » · « Je suis spécialisé dans l’univers du FC Barcelone et du football. Pour la cuisine, je ne suis pas le meilleur coéquipier 😉 En revanche, je peux te parler du Barça ! » · « Un quiz sur le club ? » · « Raconter une anecdote du jour » · « Pose ta question sur le Barça… » · « Barça AI peut se tromper. Vérifie les infos importantes. »

**Composants repérés** : `avatar`, `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-IA-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-06%5D%22) · [API-IA-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-08%5D%22) · [API-IA-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-12%5D%22) · [API-IA-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-13%5D%22) · [API-IA-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-31%5D%22) · [MOB-N-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-05%5D%22) · [MOB-N-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-15%5D%22) · [MOB-N-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-25%5D%22) · [MOB-N-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-28%5D%22) · [MOB-N-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-30%5D%22) · [MOB-N-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-31%5D%22)

#### `N-05` — Réponse avec actions
_Module : Assistant IA Barça AI_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-05_reponse-avec-actions__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-05_reponse-avec-actions__phone_light.webp?raw=true' width='230' alt='N-05 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-05_reponse-avec-actions__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-05_reponse-avec-actions__phone_dark.webp?raw=true' width='230' alt='N-05 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-05_reponse-avec-actions__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-05_reponse-avec-actions__tablet_light.webp?raw=true' width='330' alt='N-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-05_reponse-avec-actions__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-05_reponse-avec-actions__tablet_dark.webp?raw=true' width='330' alt='N-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Barça AI » · « En ligne · FR / EN / ES » · « Je m’ennuie, tu as une idée ? » · « Pourquoi pas relever un défi ? Voici ce que je te propose : » · « Lancer le quiz du jour » · « Ouvrir la fiche de Pedri » · « Lancer le comparateur GOAT » · « Générer un wallpaper » · « Voir le prochain match » · « Pose ta question sur le Barça… » · « Barça AI peut se tromper. Vérifie les infos importantes. »

**Composants repérés** : `avatar`, `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-IA-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-02%5D%22) · [API-IA-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-14%5D%22) · [API-IA-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-15%5D%22) · [API-IA-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-17%5D%22) · [MOB-N-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-01%5D%22) · [MOB-N-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-12%5D%22) · [MOB-N-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-24%5D%22) · [MOB-N-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-28%5D%22) · [MOB-N-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-30%5D%22) · [MOB-N-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-31%5D%22)

## 📐 Règles de gestion

- Langue : détection par n-grammes/lexique sur 3 langues (lib `franc-min` ou équivalent) ; en-dessous de 12 caractères ou confiance < 0,6, repli sur la langue de la conversation puis sur `Accept-Language` puis `fr` ; toute autre langue -> `unknown` traité comme `fr`.
- Intentions : `factual` (joueur, match, stat, historique), `action` (« lance le quiz », « crée-moi un wallpaper », « quand joue le Barça ? »), `chitchat` (salutation, « Je m'ennuie »), `out_of_scope`, `meta` (questions sur l'assistant), `unsafe` (envoyé à la modération).
- Règle hors périmètre : absence d'entité football détectée ET présence de marqueurs d'un autre domaine (recette, politique, code...) -> `out_of_scope` sans appel modèle ; en cas de doute (score entre 0,4 et 0,6) la décision est déléguée au modèle via le prompt système.
- Le résultat {lang, intent, entities[]} est stocké dans metadata de la réponse (lang) et dans les logs de debug.

## 🛠️ Tâches

- [ ] Créer src/services/assistant/language-detector.ts avec `detectLanguage(text, fallbacks)`.
- [ ] Créer src/services/assistant/intent-classifier.ts (règles + lexiques FR/EN/ES dans src/services/assistant/lexicons/).
- [ ] Créer les lexiques : verbes d'action (lance, ouvre, montre, crée / launch, open, show / lanza, abre, muestra), mots football (joueur, but, match, Clásico, Camp Nou...), domaines hors-sujet.
- [ ] Implémenter l'extraction d'entités simples (noms de joueurs via index du plantel normalisé sans accents, années 19xx/20xx, compétitions) réutilisée par la récupération.
- [ ] Ajouter un seuil de confiance configurable (AI_INTENT_CONFIDENCE_MIN, défaut 0,6).
- [ ] Exposer `analyzeMessage()` retournant {lang, intent, entities, confidence}.
- [ ] Écrire un jeu de 150 phrases étiquetées dans tests/fixtures/intents.json (50 par langue).

## ✔️ Critères d'acceptation

- [ ] Étant donné « Who scored in the 2015 Champions League final? », alors lang=en, intent=factual, entité year=2015.
- [ ] Étant donné « ¿Quién es el máximo goleador histórico del club? », alors lang=es.
- [ ] Étant donné « Donne-moi la recette du thiéboudienne. », alors intent=out_of_scope sans appel au fournisseur.
- [ ] Étant donné « Ok », alors la langue de la conversation est conservée.

## 🧪 Tests à écrire

- [ ] Unitaire : 150 phrases étiquetées (précision >= 90 %).
- [ ] Unitaire : repli de langue sur message court.
- [ ] Unitaire : extraction d'entités avec accents (Rakitić/Rakitic).
- [ ] Unitaire : seuil de confiance.

## 🔗 Dépendances

À réaliser après : `API-IA-08` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §11.5
- CDC Global §2.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
