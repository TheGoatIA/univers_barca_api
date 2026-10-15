> **API-IA-33** · Performance · Priorité **P2** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

Le dépôt dispose de tests k6 (tests/load, docs/LOAD_TESTING.md). Le streaming SSE maintient des connexions longues qui consomment des ressources et peuvent saturer le VPS ; il faut un seuil mesuré.

## ✅ Objectif

Un scénario k6 validant la capacité du VPS pour l'assistant sans coût fournisseur.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `N-04` — Réponse en cours (streaming)
_Module : Assistant IA Barça AI_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-04_reponse-en-cours-streaming__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-04_reponse-en-cours-streaming__phone_light.webp?raw=true' width='230' alt='N-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-04_reponse-en-cours-streaming__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-04_reponse-en-cours-streaming__phone_dark.webp?raw=true' width='230' alt='N-04 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-04_reponse-en-cours-streaming__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-04_reponse-en-cours-streaming__tablet_light.webp?raw=true' width='330' alt='N-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-04_reponse-en-cours-streaming__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-04_reponse-en-cours-streaming__tablet_dark.webp?raw=true' width='330' alt='N-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Barça AI » · « En ligne · FR / EN / ES » · « Raconte-moi la finale de Wembley 2011. » · « Le 28 mai 2011, le Barça de Guardiola domine Manchester United (3-1) à Wembley. Pedro ouvre le score, Rooney égalise, puis Messi et Villa » · « Barça AI écrit… » · « Barça AI peut se tromper. Vérifie les infos importantes. »

**Composants repérés** : `avatar`, `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-IA-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-05%5D%22) · [API-IA-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-06%5D%22) · [API-IA-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-18%5D%22) · [API-IA-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-32%5D%22) · [API-IA-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-34%5D%22) · [MOB-N-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-03%5D%22) · [MOB-N-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-05%5D%22) · [MOB-N-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-08%5D%22) · [MOB-N-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-09%5D%22) · [MOB-N-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-11%5D%22) · [MOB-N-23](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-23%5D%22) · [MOB-N-26](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-26%5D%22) · [MOB-N-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-28%5D%22) · [MOB-N-29](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-29%5D%22) · [MOB-N-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-31%5D%22)

#### `N-14` — Quota de messages atteint
_Module : Assistant IA Barça AI_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-14_quota-de-messages-atteint__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-14_quota-de-messages-atteint__phone_light.webp?raw=true' width='230' alt='N-14 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-14_quota-de-messages-atteint__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-14_quota-de-messages-atteint__phone_dark.webp?raw=true' width='230' alt='N-14 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-14_quota-de-messages-atteint__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-14_quota-de-messages-atteint__tablet_light.webp?raw=true' width='330' alt='N-14 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-14_quota-de-messages-atteint__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-14_quota-de-messages-atteint__tablet_dark.webp?raw=true' width='330' alt='N-14 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Barça AI » · « En ligne · FR / EN / ES » · « Tu as atteint ta limite quotidienne de 40 messages. 🙏 » · « Retour dans » · « 04:12:30 » · « Le quota se renouvelle chaque jour pour garder le service gratuit. » · « Limite quotidienne atteinte » · « Barça AI peut se tromper. Vérifie les infos importantes. »

**Composants repérés** : `avatar`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-IA-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-03%5D%22) · [API-IA-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-17%5D%22) · [API-IA-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-19%5D%22) · [API-IA-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-20%5D%22) · [API-IA-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-21%5D%22) · [API-IA-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-32%5D%22) · [MOB-N-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-02%5D%22) · [MOB-N-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-05%5D%22) · [MOB-N-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-08%5D%22) · [MOB-N-20](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-20%5D%22) · [MOB-N-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-25%5D%22) · [MOB-N-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-28%5D%22) · [MOB-N-30](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-30%5D%22) · [MOB-N-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-31%5D%22)

## 📐 Règles de gestion

- Scénario : montée à 200 utilisateurs virtuels sur 5 min, 70 % lisent l'historique, 30 % envoient un message SSE (mock `ok`, 30 ms/token).
- Seuils k6 : p95 temps jusqu'au premier token < 800 ms (hors fournisseur), p95 lecture historique < 300 ms, taux d'erreur < 1 %, aucune fuite de mémoire (RSS Node stable ±15 %).
- Tester aussi le comportement au quota : un utilisateur à 40 messages reçoit 429 en < 100 ms.
- Variables : BASE_URL, TOKENS_FILE (jetons pré-générés), MOCK_SCENARIO.

## 🛠️ Tâches

- [ ] Créer tests/load/assistant.k6.js avec scénarios `history` et `chat-sse`.
- [ ] Écrire un script de pré-génération d'utilisateurs/jetons scripts/load/seed-users.ts.
- [ ] Parser les événements SSE dans k6 (xk6-sse ou http.post avec lecture du corps).
- [ ] Ajouter les seuils `thresholds` et métriques personnalisées (Trend ttft).
- [ ] Documenter l'exécution et l'interprétation dans docs/LOAD_TESTING.md.
- [ ] Ajouter l'option RATE_LIMIT_DISABLED=true dans le compose de charge (hors production).

## ✔️ Critères d'acceptation

- [ ] Étant donné 200 VU, alors le p95 du premier token reste < 800 ms.
- [ ] Étant donné un utilisateur à quota épuisé, alors la réponse 429 arrive en < 100 ms.
- [ ] Étant donné la fin du test, alors la mémoire du process ne dérive pas de plus de 15 %.
- [ ] Étant donné les seuils non tenus, alors k6 sort en erreur.

## 🧪 Tests à écrire

- [ ] k6 : scénario history.
- [ ] k6 : scénario chat-sse.
- [ ] k6 : quota épuisé.
- [ ] Vérification : seuils en échec détectés.

## 🔗 Dépendances

À réaliser après : `API-IA-18` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §9
- CDC Backend §10.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
