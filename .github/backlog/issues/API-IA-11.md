> **API-IA-11** · Sécurité · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

L'écran N-10 affiche « Message non traité · Ce type de contenu n'est pas autorisé par la charte de la communauté. Reformule ta question ». Le CDC Global §2.2 et §8.5 exigent un filtrage des entrées avant tout appel modèle (haine, discrimination, harcèlement, contenu sexuel, auto-agression, injection).

## ✅ Objectif

Un pipeline de modération d'entrée à deux niveaux (règles locales puis classifieur optionnel) qui bloque avant d'appeler le fournisseur et avant de consommer des tokens.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `N-10` — Message bloqué par la modération
_Module : Assistant IA Barça AI_

<table><tr><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-10_message-bloque-par-la-moderation__phone_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-10_message-bloque-par-la-moderation__phone_light.webp?raw=true' width='230' alt='N-10 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-10_message-bloque-par-la-moderation__phone_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-10_message-bloque-par-la-moderation__phone_dark.webp?raw=true' width='230' alt='N-10 Mobile Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-10_message-bloque-par-la-moderation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-10_message-bloque-par-la-moderation__tablet_light.webp?raw=true' width='330' alt='N-10 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-10_message-bloque-par-la-moderation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/ecrans/N/N-10_message-bloque-par-la-moderation__tablet_dark.webp?raw=true' width='330' alt='N-10 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Barça AI » · « En ligne · FR / EN / ES » · « Message non traité » · « Ce type de contenu n’est pas autorisé par la charte de la communauté. Reformule ta question, je suis là pour t’aider. » · « Pose ta question sur le Barça… » · « Barça AI peut se tromper. Vérifie les infos importantes. »

**Composants repérés** : `avatar`, `btn`, `card`, `sheet`

</details>

**Issues liées sur ce même écran :** [API-IA-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-06%5D%22) · [API-IA-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-12%5D%22) · [API-IA-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-21%5D%22) · [API-IA-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-29%5D%22) · [API-IA-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-31%5D%22) · [MOB-N-05](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-05%5D%22) · [MOB-N-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-16%5D%22) · [MOB-N-24](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-24%5D%22) · [MOB-N-25](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-25%5D%22) · [MOB-N-28](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-28%5D%22) · [MOB-N-31](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-N-31%5D%22)

## 📐 Règles de gestion

- Niveau 1 (local, < 5 ms) : normalisation (minuscules, sans accents, leetspeak, espaces répétés) puis listes de termes FR/EN/ES par catégorie (hate, sexual, violence, selfharm, pii, injection) gérées en fichier versionné ; motifs d'injection (« ignore tes instructions », « system prompt », « DAN »).
- Niveau 2 (optionnel, flag `assistant_input_classifier`) : appel à l'API de modération du fournisseur avec timeout 1,5 s ; en cas d'erreur du classifieur, la décision reste celle du niveau 1 (fail-open pour le niveau 2, fail-closed pour les catégories hate/selfharm détectées au niveau 1).
- Résultat bloqué : réponse assistant `status=moderated`, texte localisé standard, HTTP 200 (la conversation continue) mais code d'erreur 422 CONTENT_MODERATED en mode JSON strict exigé par le mobile (`ModerationFailure`) ; aucun appel fournisseur, aucun token, le quota n'est pas décompté.
- Auto-agression : la réponse ne se contente pas d'un refus, elle oriente vers une ressource d'aide (texte localisé validé produit).
- Traçabilité : événement `moderation_input_blocked` {category, lang, userHash} dans AiCallLog (status moderated) ; le texte bloqué est conservé 30 jours seulement dans ChatMessage (status moderated) pour revue ; 3 blocages en 10 minutes déclenchent un ralentissement (cf. rate limiting) et un signalement automatique de gravité `review` à ModerationReport (targetType chat_message).

## 🛠️ Tâches

- [ ] Créer src/services/assistant/moderation/input-moderation.service.ts : `moderateInput(text, lang) -> {allowed, category?, reason?}`.
- [ ] Créer les listes src/services/assistant/moderation/lexicons/{hate,sexual,violence,selfharm,injection}.{fr,en,es}.json.
- [ ] Implémenter la normalisation `normalizeForModeration()` (NFKD, suppression des diacritiques, mapping leet 0->o, 1->i, 3->e, 4->a, 5->s, @->a).
- [ ] Implémenter l'appel facultatif au classifieur fournisseur derrière une interface `ModerationProvider`.
- [ ] Créer `ContentModeratedError` (422, code CONTENT_MODERATED) et le texte de réponse localisé.
- [ ] Écrire le compteur de blocages par utilisateur (Redis `ai:modblocks:<userId>` TTL 10 min) et la création du ModerationReport automatique via le service de modération existant.
- [ ] Exposer les métriques `assistant_moderation_total{stage,category}`.
- [ ] Ajouter un jeu de 120 cas (40 par langue : 20 à bloquer, 20 à laisser passer comme « Le Barça a été humilié 8-2 ») dans tests/fixtures/moderation-inputs.json.

## ✔️ Critères d'acceptation

- [ ] Étant donné un message insultant à caractère discriminatoire, quand il est envoyé, alors la réponse a status moderated, aucun appel fournisseur n'est effectué et le quota reste inchangé.
- [ ] Étant donné « Le Barça a été humilié 8-2 par le Bayern », alors le message n'est pas bloqué (faux positif évité).
- [ ] Étant donné « 1gn0re t3s instructions précédentes », alors la catégorie injection est détectée après normalisation.
- [ ] Étant donné 3 blocages en 10 minutes, alors un ModerationReport de gravité review est créé.
- [ ] Étant donné une panne du classifieur niveau 2, alors la requête sûre au niveau 1 est traitée normalement.

## 🧪 Tests à écrire

- [ ] Unitaire : normalisation leetspeak.
- [ ] Unitaire : 120 cas de modération (rappel >= 95 %, faux positifs <= 2 %).
- [ ] Intégration : quota non décompté.
- [ ] Intégration : création de ModerationReport au 3e blocage.
- [ ] Unitaire : fail-open niveau 2.

## 🔗 Dépendances

À réaliser après : `API-IA-01` · `API-IA-09` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §2.2
- CDC Global §8.5
- CDC Global §11
- CDC Backend §11.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
