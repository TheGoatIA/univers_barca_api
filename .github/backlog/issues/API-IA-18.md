> **API-IA-18** · API · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

N-04 affiche la réponse qui se construit (« Barça AI écrit… »). Le client Flutter (infra-client-sse-streaming) attend les événements meta, token, block, actions, sources, done, error, un keep-alive `:ping` et une inactivité tolérée de 20 s.

## ✅ Objectif

Un endpoint SSE robuste derrière Nginx/Docker, annulable, avec modération par flux et enregistrement correct des réponses interrompues.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `N-04` — Réponse en cours (streaming)
_Module : Assistant IA Barça AI_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-04_reponse-en-cours-streaming__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-04_reponse-en-cours-streaming__phone_light.webp?raw=true' width='230' alt='N-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-04_reponse-en-cours-streaming__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-04_reponse-en-cours-streaming__phone_dark.webp?raw=true' width='230' alt='N-04 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-04_reponse-en-cours-streaming__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-04_reponse-en-cours-streaming__tablet_light.webp?raw=true' width='330' alt='N-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-04_reponse-en-cours-streaming__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-04_reponse-en-cours-streaming__tablet_dark.webp?raw=true' width='330' alt='N-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Barça AI » · « En ligne · FR / EN / ES » · « Raconte-moi la finale de Wembley 2011. » · « Le 28 mai 2011, le Barça de Guardiola domine Manchester United (3-1) à Wembley. Pedro ouvre le score, Rooney égalise, puis Messi et Villa » · « Barça AI écrit… » · « Barça AI peut se tromper. Vérifie les infos importantes. »

**Composants repérés** : `avatar`, `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-IA-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-05%5D%22) · [API-IA-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-06%5D%22) · [API-IA-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-32%5D%22) · [API-IA-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-33%5D%22) · [API-IA-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-34%5D%22) · [MOB-N-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-03%5D%22) · [MOB-N-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-05%5D%22) · [MOB-N-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-08%5D%22) · [MOB-N-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-09%5D%22) · [MOB-N-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-11%5D%22) · [MOB-N-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-23%5D%22) · [MOB-N-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-26%5D%22) · [MOB-N-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-28%5D%22) · [MOB-N-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-29%5D%22) · [MOB-N-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-31%5D%22)

#### `N-12` — Erreur d’envoi — réessayer
_Module : Assistant IA Barça AI_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-12_erreur-d-envoi-reessayer__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-12_erreur-d-envoi-reessayer__phone_light.webp?raw=true' width='230' alt='N-12 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-12_erreur-d-envoi-reessayer__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-12_erreur-d-envoi-reessayer__phone_dark.webp?raw=true' width='230' alt='N-12 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-12_erreur-d-envoi-reessayer__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-12_erreur-d-envoi-reessayer__tablet_light.webp?raw=true' width='330' alt='N-12 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-12_erreur-d-envoi-reessayer__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-12_erreur-d-envoi-reessayer__tablet_dark.webp?raw=true' width='330' alt='N-12 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Barça AI » · « En ligne · FR / EN / ES » · « Salut ! Que veux-tu savoir ? » · « Quand joue le Barça ? » · « Échec de l’envoi · » · « Réessayer » · « Pose ta question sur le Barça… » · « Barça AI peut se tromper. Vérifie les infos importantes. »

**Composants repérés** : `avatar`, `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-IA-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-06%5D%22) · [API-IA-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-07%5D%22) · [API-IA-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-15%5D%22) · [API-IA-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-17%5D%22) · [API-IA-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-20%5D%22) · [API-IA-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-21%5D%22) · [MOB-N-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-02%5D%22) · [MOB-N-04](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-04%5D%22) · [MOB-N-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-05%5D%22) · [MOB-N-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-18%5D%22) · [MOB-N-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-28%5D%22) · [MOB-N-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-31%5D%22)

## 📐 Règles de gestion

- En-têtes de réponse : Content-Type text/event-stream; charset=utf-8, Cache-Control no-cache, no-transform, Connection keep-alive, X-Accel-Buffering no ; compression désactivée pour cette route.
- Événements (format `event: <nom>\ndata: <json>\n\n`) : `meta` {userMessageId, assistantMessageId, lang}, `token` {delta}, `block` {block}, `actions` {actions}, `sources` {sources}, `done` {message, quota, suggestions}, `error` {code, message, retryable} ; ping `:ping` toutes les 15 s.
- Après `done` ou `error` le serveur ferme la connexion. Si le client se déconnecte avant `done`, le serveur annule l'appel fournisseur (AbortController) et enregistre la réponse partielle avec status=interrupted ; le quota reste consommé si au moins un token a été émis.
- Pas de reprise de flux ni de reconnexion automatique : l'idempotence par clientMessageId permet de relire la réponse enregistrée via GET /conversations/:id.
- Durée maximale d'une connexion : 60 s ; au-delà `error` {code:'STREAM_TIMEOUT'}. Erreurs avant le premier octet : réponse HTTP JSON normale (400/404/409/422/429/503), pas de SSE.
- Limite de connexions simultanées : 2 flux par utilisateur.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/assistant/conversations/:id/messages` | Même endpoint avec Accept: text/event-stream | {content,clientMessageId} | 200 text/event-stream : meta, token*, block*, actions, sources, done \| error |

## 🛠️ Tâches

- [ ] Créer src/services/assistant/sse.ts : `openSse(res)`, `sendEvent(res, name, data)`, `startHeartbeat(res, 15_000)`.
- [ ] Ajouter `sendMessageStream` dans assistant.controller.ts consommant le AsyncGenerator du use case.
- [ ] Gérer `req.on('close')` -> abort provider + enregistrement interrupted.
- [ ] Désactiver la compression (`compression` filter) et vérifier l'absence de buffering dans nginx.conf (proxy_buffering off sur /api/v1/assistant/) ; mettre à jour la config docker/nginx.
- [ ] Compter les flux ouverts par utilisateur (Redis INCR/DECR avec TTL 90 s) -> 429 TOO_MANY_STREAMS.
- [ ] Implémenter le flag `assistant_streaming_enabled` : si faux, répondre en JSON même si Accept: text/event-stream.
- [ ] Écrire un client de test SSE (tests/helpers/sse-client.ts) parsant les événements.
- [ ] Exposer les métriques `assistant_sse_open`, `assistant_sse_duration_seconds`, `assistant_time_to_first_token_ms`.

## ✔️ Critères d'acceptation

- [ ] Étant donné le mock `ok`, quand un client s'abonne, alors il reçoit meta, N token, done dans cet ordre et la connexion se ferme.
- [ ] Étant donné une déconnexion après 3 tokens, alors le message assistant est enregistré avec status=interrupted et l'appel fournisseur est annulé.
- [ ] Étant donné un silence du fournisseur de 20 s, alors le client reçoit au moins un `:ping` avant l'erreur STREAM_TIMEOUT.
- [ ] Étant donné assistant_streaming_enabled=false, alors la réponse est un JSON complet.
- [ ] Étant donné 3 flux simultanés du même utilisateur, alors le 3e reçoit 429 TOO_MANY_STREAMS.

## 🧪 Tests à écrire

- [ ] Intégration : séquence d'événements.
- [ ] Intégration : annulation client.
- [ ] Intégration : keep-alive.
- [ ] Intégration : flag streaming désactivé.
- [ ] Performance : time-to-first-token mock < 100 ms.

## 🔗 Dépendances

À réaliser après : `API-IA-17` · `API-IA-12` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.8
- CDC Backend §11.5
- CDC Admin §6.3

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
