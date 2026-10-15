> **API-IA-01** · Données · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le modèle actuel `ChatConversation` (src/models/platform.model.ts) embarque un tableau `messages` non borné : au bout de quelques centaines d'échanges le document dépasse la taille utile et la pagination curseur de l'historique (30 messages par page côté mobile) devient impossible. Le CDC Backend §3.8 prévoit deux entités distinctes ChatConversation et ChatMessage.

## ✅ Objectif

Deux collections indexées pour la pagination par curseur, la recherche plein texte (écran N-15) et la purge RGPD, avec migration des données existantes.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `N-02` — Chat — nouvelle conversation
_Module : Assistant IA Barça AI_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-02_chat-nouvelle-conversation__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-02_chat-nouvelle-conversation__phone_light.webp?raw=true' width='230' alt='N-02 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-02_chat-nouvelle-conversation__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-02_chat-nouvelle-conversation__phone_dark.webp?raw=true' width='230' alt='N-02 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-02_chat-nouvelle-conversation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-02_chat-nouvelle-conversation__tablet_light.webp?raw=true' width='330' alt='N-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-02_chat-nouvelle-conversation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-02_chat-nouvelle-conversation__tablet_dark.webp?raw=true' width='330' alt='N-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Barça AI » · « En ligne · FR / EN / ES » · « Salut Boris ! Je suis » · « , ton compagnon culé. Pose-moi une question sur un joueur, un match ou l’histoire du club. » · « Suggestions » · « Lancer le quiz du jour » · « Parle-moi de Lamine Yamal » · « Messi ou Xavi ? » · « Quand joue le Barça ? » · « Crée-moi un wallpaper » · « Pose ta question sur le Barça… » · « Barça AI peut se tromper. Vérifie les infos importantes. »

**Composants repérés** : `avatar`, `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-IA-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-08%5D%22) · [API-IA-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-16%5D%22) · [API-IA-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-19%5D%22) · [API-IA-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-25%5D%22) · [API-IA-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-32%5D%22) · [API-IA-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-34%5D%22) · [MOB-N-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-02%5D%22) · [MOB-N-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-05%5D%22) · [MOB-N-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-07%5D%22) · [MOB-N-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-08%5D%22) · [MOB-N-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-26%5D%22) · [MOB-N-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-27%5D%22) · [MOB-N-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-28%5D%22) · [MOB-N-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-30%5D%22) · [MOB-N-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-31%5D%22)

#### `N-03` — Conversation — réponse sourcée
_Module : Assistant IA Barça AI_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-03_conversation-reponse-sourcee__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-03_conversation-reponse-sourcee__phone_light.webp?raw=true' width='230' alt='N-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-03_conversation-reponse-sourcee__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-03_conversation-reponse-sourcee__phone_dark.webp?raw=true' width='230' alt='N-03 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-03_conversation-reponse-sourcee__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-03_conversation-reponse-sourcee__tablet_light.webp?raw=true' width='330' alt='N-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-03_conversation-reponse-sourcee__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-03_conversation-reponse-sourcee__tablet_dark.webp?raw=true' width='330' alt='N-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Barça AI » · « En ligne · FR / EN / ES » · « Combien de buts Lewandowski a marqué cette saison ? » · « Robert Lewandowski a inscrit » · « 11 buts » · « en » · « 14 matchs » · « toutes compétitions confondues cette saison (données au 14 octobre). » · « Joueurs » · « Matchs 2026-27 » · « Et combien de passes décisives ? » · « Il compte » · « 3 passes décisives » · « . Veux-tu que je le compare à un autre attaquant ? » · « Comparer avec un autre joueur » · « Pose ta question sur le Barça… » · « Barça AI peut se tromper. Vérifie les infos importantes. »

**Composants repérés** : `avatar`, `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-IA-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-02%5D%22) · [API-IA-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-05%5D%22) · [API-IA-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-06%5D%22) · [API-IA-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-10%5D%22) · [API-IA-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-12%5D%22) · [API-IA-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-14%5D%22) · [API-IA-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-15%5D%22) · [API-IA-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-16%5D%22) · [API-IA-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-17%5D%22) · [API-IA-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-25%5D%22) · [API-IA-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-26%5D%22) · [API-IA-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-29%5D%22) · [API-IA-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-32%5D%22) · [API-IA-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-34%5D%22) · [MOB-N-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-01%5D%22) · [MOB-N-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-02%5D%22) · [MOB-N-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-04%5D%22) · [MOB-N-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-05%5D%22) · [MOB-N-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-09%5D%22) · [MOB-N-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-10%5D%22) · [MOB-N-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-23%5D%22) · [MOB-N-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-24%5D%22) · [MOB-N-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-28%5D%22) · [MOB-N-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-29%5D%22) · [MOB-N-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-31%5D%22)

#### `N-15` — Historique des conversations
_Module : Assistant IA Barça AI_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-15_historique-des-conversations__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-15_historique-des-conversations__phone_light.webp?raw=true' width='230' alt='N-15 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-15_historique-des-conversations__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-15_historique-des-conversations__phone_dark.webp?raw=true' width='230' alt='N-15 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-15_historique-des-conversations__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-15_historique-des-conversations__tablet_light.webp?raw=true' width='330' alt='N-15 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-15_historique-des-conversations__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-15_historique-des-conversations__tablet_dark.webp?raw=true' width='330' alt='N-15 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Conversations » · « Nouvelle » · « Rechercher » · « Wembley 2011 » · « Raconte-moi la finale… » · « Aujourd'hui » · « Stats Lewandowski » · « 11 buts en 14 matchs » · « Hier » · « Messi ou Xavi ? » · « Voici la comparaison… » · « 12 oct. » · « Calendrier novembre » · « Le prochain match est… » · « 10 oct. »

**Composants repérés** : `avatar`, `btn`, `card`, `search`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-IA-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-16%5D%22) · [API-IA-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-26%5D%22) · [API-IA-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-27%5D%22) · [API-IA-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-28%5D%22) · [API-IA-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-32%5D%22) · [API-IA-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-34%5D%22) · [MOB-N-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-01%5D%22) · [MOB-N-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-02%5D%22) · [MOB-N-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-04%5D%22) · [MOB-N-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-21%5D%22) · [MOB-N-22](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-22%5D%22) · [MOB-N-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-23%5D%22) · [MOB-N-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-27%5D%22) · [MOB-N-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-28%5D%22) · [MOB-N-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-29%5D%22) · [MOB-N-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-31%5D%22)

## 📐 Règles de gestion

- ChatConversation : userId (ref User, index), title (<= 60 car., généré depuis le premier message), preview (<= 80 car., dernier message tronqué avec « … »), lastMessageAt (Date), messageCount (Number), status enum active | archived, summary (String, résumé glissant, cf. issue résumés), createdAt/updatedAt.
- ChatMessage : conversationId (ref, index), userId (dénormalisé pour la purge RGPD), role enum user | assistant, content (<= 500 car. pour user ; <= 4000 pour assistant), clientMessageId (uuid v4, unique sparse avec conversationId), status enum ok | out_of_scope | moderated | no_data | error | interrupted, lang enum fr | en | es | unknown, metadata (sous-document typé, cf. issue métadonnées), createdAt.
- Index : ChatConversation {userId:1,lastMessageAt:-1} ; ChatMessage {conversationId:1,createdAt:-1,_id:-1} (curseur) ; ChatMessage {conversationId:1,clientMessageId:1} unique partiel ; index texte {title,preview} + ChatMessage {content:'text'} pour `?q=`.
- Limites : 200 conversations actives maximum par utilisateur (la plus ancienne est archivée au-delà) ; 1000 messages maximum par conversation (409 CONVERSATION_FULL au-delà, l'app propose d'en créer une nouvelle).

## 🗄️ Données

- chatconversations (userId, title, preview, lastMessageAt, messageCount, status, summary)
- chatmessages (conversationId, userId, role, content, clientMessageId, status, lang, metadata)

## 🛠️ Tâches

- [ ] Réécrire `ChatConversation` et créer `ChatMessage` dans src/models/platform.model.ts (exports dans src/models/index.ts) avec `withJson` pour exposer `id`.
- [ ] Ajouter les hooks pre('save') calculant title/preview et la mise à jour atomique de lastMessageAt/messageCount via `$inc` à chaque insertion de message.
- [ ] Écrire le script de migration src/scripts/migrations/2026xxxx-split-chat-messages.ts : pour chaque conversation, insérer les messages embarqués dans ChatMessage (bulkWrite par lots de 500), puis `$unset: {messages: 1}`.
- [ ] Rendre la migration idempotente (marqueur `migratedAt` sur la conversation) et réversible (script down recréant le tableau pour <= 100 messages).
- [ ] Créer les index listés dans `syncIndexes()` au démarrage en développement et via la migration en production.
- [ ] Créer src/types/chat.d.ts exportant `ChatMessageDoc`, `ChatConversationDoc`.
- [ ] Ajouter les fixtures de test (factory `buildChatMessage`) dans tests/helpers/factories.ts.
- [ ] Documenter les deux collections dans docs/DATABASE.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné une conversation de 1500 messages historiques, quand la migration s'exécute deux fois, alors 1000 messages au plus sont conservés par conversation active et aucun doublon n'apparaît.
- [ ] Étant donné deux messages de même `clientMessageId` dans la même conversation, quand le second est inséré, alors une erreur de duplicata E11000 est levée.
- [ ] Étant donné l'insertion d'un message, quand elle réussit, alors `lastMessageAt` et `messageCount` de la conversation sont mis à jour de façon atomique.
- [ ] Étant donné une requête `{conversationId}` triée par createdAt desc, quand on lit `explain()`, alors l'index composé est utilisé (IXSCAN).

## 🧪 Tests à écrire

- [ ] Intégration : migration split puis re-run idempotent.
- [ ] Unitaire : génération de title (60 car.) et preview (80 car., ellipse).
- [ ] Intégration : unicité clientMessageId.
- [ ] Intégration : plan d'exécution de la pagination utilise l'index.

## 📚 Références

- CDC Backend §3.8
- CDC Global §2.2
- CDC Backend §4.6

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
