> **API-IA-16** · API · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le mobile (data-assistant-remote-repo) consomme POST /assistant/conversations, GET /assistant/conversations?q=&cursor=&limit=20 et GET /assistant/conversations/:id?cursor=&limit=30. N-15 affiche titre, aperçu et date groupée (Aujourd'hui, Hier, 12 oct.) ; la recherche filtre les conversations.

## ✅ Objectif

Les quatre endpoints REST authentifiés, propriétaires uniquement, avec pagination curseur et recherche plein texte.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `N-15` — Historique des conversations
_Module : Assistant IA Barça AI_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-15_historique-des-conversations__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-15_historique-des-conversations__phone_light.webp?raw=true' width='230' alt='N-15 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-15_historique-des-conversations__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-15_historique-des-conversations__phone_dark.webp?raw=true' width='230' alt='N-15 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-15_historique-des-conversations__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-15_historique-des-conversations__tablet_light.webp?raw=true' width='330' alt='N-15 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-15_historique-des-conversations__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-15_historique-des-conversations__tablet_dark.webp?raw=true' width='330' alt='N-15 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Conversations » · « Nouvelle » · « Rechercher » · « Wembley 2011 » · « Raconte-moi la finale… » · « Aujourd'hui » · « Stats Lewandowski » · « 11 buts en 14 matchs » · « Hier » · « Messi ou Xavi ? » · « Voici la comparaison… » · « 12 oct. » · « Calendrier novembre » · « Le prochain match est… » · « 10 oct. »

**Composants repérés** : `avatar`, `btn`, `card`, `search`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-IA-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-01%5D%22) · [API-IA-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-26%5D%22) · [API-IA-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-27%5D%22) · [API-IA-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-28%5D%22) · [API-IA-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-32%5D%22) · [API-IA-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-34%5D%22) · [MOB-N-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-01%5D%22) · [MOB-N-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-02%5D%22) · [MOB-N-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-04%5D%22) · [MOB-N-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-21%5D%22) · [MOB-N-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-22%5D%22) · [MOB-N-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-23%5D%22) · [MOB-N-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-27%5D%22) · [MOB-N-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-28%5D%22) · [MOB-N-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-29%5D%22) · [MOB-N-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-31%5D%22)

#### `N-02` — Chat — nouvelle conversation
_Module : Assistant IA Barça AI_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-02_chat-nouvelle-conversation__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-02_chat-nouvelle-conversation__phone_light.webp?raw=true' width='230' alt='N-02 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-02_chat-nouvelle-conversation__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-02_chat-nouvelle-conversation__phone_dark.webp?raw=true' width='230' alt='N-02 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-02_chat-nouvelle-conversation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-02_chat-nouvelle-conversation__tablet_light.webp?raw=true' width='330' alt='N-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-02_chat-nouvelle-conversation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-02_chat-nouvelle-conversation__tablet_dark.webp?raw=true' width='330' alt='N-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Barça AI » · « En ligne · FR / EN / ES » · « Salut Boris ! Je suis » · « , ton compagnon culé. Pose-moi une question sur un joueur, un match ou l’histoire du club. » · « Suggestions » · « Lancer le quiz du jour » · « Parle-moi de Lamine Yamal » · « Messi ou Xavi ? » · « Quand joue le Barça ? » · « Crée-moi un wallpaper » · « Pose ta question sur le Barça… » · « Barça AI peut se tromper. Vérifie les infos importantes. »

**Composants repérés** : `avatar`, `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-IA-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-01%5D%22) · [API-IA-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-08%5D%22) · [API-IA-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-19%5D%22) · [API-IA-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-25%5D%22) · [API-IA-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-32%5D%22) · [API-IA-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-34%5D%22) · [MOB-N-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-02%5D%22) · [MOB-N-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-05%5D%22) · [MOB-N-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-07%5D%22) · [MOB-N-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-08%5D%22) · [MOB-N-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-26%5D%22) · [MOB-N-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-27%5D%22) · [MOB-N-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-28%5D%22) · [MOB-N-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-30%5D%22) · [MOB-N-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-31%5D%22)

#### `N-03` — Conversation — réponse sourcée
_Module : Assistant IA Barça AI_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-03_conversation-reponse-sourcee__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-03_conversation-reponse-sourcee__phone_light.webp?raw=true' width='230' alt='N-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-03_conversation-reponse-sourcee__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-03_conversation-reponse-sourcee__phone_dark.webp?raw=true' width='230' alt='N-03 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-03_conversation-reponse-sourcee__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-03_conversation-reponse-sourcee__tablet_light.webp?raw=true' width='330' alt='N-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-03_conversation-reponse-sourcee__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-03_conversation-reponse-sourcee__tablet_dark.webp?raw=true' width='330' alt='N-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Barça AI » · « En ligne · FR / EN / ES » · « Combien de buts Lewandowski a marqué cette saison ? » · « Robert Lewandowski a inscrit » · « 11 buts » · « en » · « 14 matchs » · « toutes compétitions confondues cette saison (données au 14 octobre). » · « Joueurs » · « Matchs 2026-27 » · « Et combien de passes décisives ? » · « Il compte » · « 3 passes décisives » · « . Veux-tu que je le compare à un autre attaquant ? » · « Comparer avec un autre joueur » · « Pose ta question sur le Barça… » · « Barça AI peut se tromper. Vérifie les infos importantes. »

**Composants repérés** : `avatar`, `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-IA-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-01%5D%22) · [API-IA-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-02%5D%22) · [API-IA-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-05%5D%22) · [API-IA-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-06%5D%22) · [API-IA-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-10%5D%22) · [API-IA-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-12%5D%22) · [API-IA-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-14%5D%22) · [API-IA-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-15%5D%22) · [API-IA-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-17%5D%22) · [API-IA-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-25%5D%22) · [API-IA-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-26%5D%22) · [API-IA-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-29%5D%22) · [API-IA-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-32%5D%22) · [API-IA-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-34%5D%22) · [MOB-N-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-01%5D%22) · [MOB-N-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-02%5D%22) · [MOB-N-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-04%5D%22) · [MOB-N-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-05%5D%22) · [MOB-N-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-09%5D%22) · [MOB-N-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-10%5D%22) · [MOB-N-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-23%5D%22) · [MOB-N-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-24%5D%22) · [MOB-N-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-28%5D%22) · [MOB-N-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-29%5D%22) · [MOB-N-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-31%5D%22)

## 📐 Règles de gestion

- POST /assistant/conversations : crée une conversation vide (201 {id, createdAt}) ; limite 200 conversations actives (409 CONVERSATION_LIMIT -> archivage de la plus ancienne géré en amont) ; rate limit 20 créations/heure.
- GET /assistant/conversations : tri lastMessageAt desc, `limit` 1..50 (défaut 20), curseur opaque base64 {lastMessageAt,_id} ; `q` (2..60 car.) recherche plein texte sur title, preview et contenu des messages (accents ignorés) ; ne renvoie pas les conversations vides de plus de 24 h.
- GET /assistant/conversations/:id : messages du plus récent au plus ancien par page de 30 (limit 1..50), `hasMore`, `nextCursor` ; chaque message expose role, content, metadata (lang, sources, blocks, actions, suggestions, status), createdAt.
- DELETE /assistant/conversations/:id : suppression définitive de la conversation et de ses messages (204) ; DELETE /assistant/conversations (toutes, confirmation par en-tête `X-Confirm: delete-all`) utilisé par les paramètres de confidentialité.
- Toute ressource d'un autre utilisateur répond 404 (pas 403, pour ne pas révéler l'existence).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/assistant/conversations` | Crée une conversation vide | - | 201 {success:true,data:{id,createdAt}} |
| `GET` | `/api/v1/assistant/conversations` | Liste paginée avec recherche | ?q=&cursor=&limit=20 | {success:true,data:{items:[{id,title,preview,lastMessageAt}],hasMore,nextCursor}} |
| `GET` | `/api/v1/assistant/conversations/:id` | Historique paginé (plus récent d'abord) | ?cursor=&limit=30 | {success:true,data:{id,messages:[{id,role,content,metadata,createdAt}],hasMore,nextCursor}} |
| `DELETE` | `/api/v1/assistant/conversations/:id` | Supprime une conversation | - | 204 |

## 🛠️ Tâches

- [ ] Créer src/routes/assistant.routes.ts monté sous /api/v1/assistant et branché dans src/routes/index.ts avec `protect`.
- [ ] Créer src/controllers/assistant.controller.ts (createConversation, listConversations, getConversation, deleteConversation, deleteAllConversations).
- [ ] Créer src/validators/assistant.validator.ts (schémas Joi query/params).
- [ ] Utiliser src/utils/pagination.ts pour le curseur ; écrire `encodeCursor/decodeCursor` pour {date,id}.
- [ ] Implémenter src/services/assistant/conversation.service.ts (requêtes avec filtre userId systématique).
- [ ] Écrire la recherche texte avec `$text` + repli regex échappé pour les requêtes courtes (< 3 car.).
- [ ] Ajouter la documentation Swagger (src/docs/swagger.ts) des 5 routes avec exemples.
- [ ] Ajouter les tests d'autorisation inter-utilisateurs.

## ✔️ Critères d'acceptation

- [ ] Étant donné 45 conversations, quand l'app demande limit=20, alors 20 items, hasMore=true et un nextCursor valide sont renvoyés.
- [ ] Étant donné ?q=wembley, alors seule la conversation « Wembley 2011 » est renvoyée.
- [ ] Étant donné l'id d'une conversation d'un autre utilisateur, alors GET et DELETE répondent 404.
- [ ] Étant donné un curseur altéré, alors la réponse est 400 INVALID_CURSOR.
- [ ] Étant donné DELETE sans X-Confirm sur la collection, alors 400.

## 🧪 Tests à écrire

- [ ] Intégration : pagination curseur 45 éléments.
- [ ] Intégration : recherche accent-insensible.
- [ ] Sécurité : accès inter-utilisateurs.
- [ ] Unitaire : encodeCursor/decodeCursor.
- [ ] Intégration : suppression en cascade des messages.

## 🔗 Dépendances

À réaliser après : `API-IA-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.8
- CDC Backend §11.6

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
