> **API-JEUX-28** · Infrastructure · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le CDC prévoit un mix de questions éditorialisées et de questions générées par IA à partir de la base joueurs/matchs/stats. Ce worker crée uniquement des brouillons « en attente de validation » consommés par WF-03 ; le client IA lui-même est fourni par le groupe IA.

## ✅ Objectif

Un processor de la file ai-generation qui valide, dédoublonne et insère des questions candidates.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WF-03` — File de validation des questions IA
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_light.webp?raw=true' width='330' alt='WF-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_dark.webp?raw=true' width='330' alt='WF-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_light.webp?raw=true' width='330' alt='WF-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_dark.webp?raw=true' width='330' alt='WF-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Validation IA » · « File de validation IA » · « 12 questions en attente · aucune n’est publiée sans relecture humaine » · « Approuver la sélection » · « Les questions générées passent par le statut « en attente de validation » avant d'intégrer le pool actif. » · « Généré par IA » · « Niv. 2 » · « il y a 12 min » · « Quel joueur a remporté le Trophée Pichichi en 2021-22 avec le FC Barcelone ? » · « Aucun » · « Memphis Depay » · « Robert Lewandowski » · « Ousmane Dembélé » · « Approuver » · « Corriger puis approuver » · « Rejeter » · « Niv. 3 » · « il y a 34 min » · « Dans quel stade s’est jouée la finale de la Ligue des champions 2011 ? » · « Wembley » · « Stade olympique de Rome » · « Santiago Bernabéu »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-03%5D%22) · [ADM-WF-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-06%5D%22) · [ADM-WF-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-12%5D%22) · [ADM-WF-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-13%5D%22) · [ADM-WF-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-14%5D%22) · [ADM-WF-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-15%5D%22) · [ADM-WF-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-17%5D%22) · [ADM-WF-22](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-22%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-27%5D%22)

## 📐 Règles de gestion

- Job 'generate-quiz-questions' {category, level, count<=20} déclenché manuellement par un super-admin ou par cron hebdomadaire (dimanche 03:00 Madrid) jusqu'à un plafond de 50 questions en attente.
- Le résultat du fournisseur IA est validé par schéma strict (4 options, une bonne réponse, explication, 3 langues) ; toute sortie non conforme est rejetée et comptée.
- Chaque question insérée : status='pending-ai', origin='ai', playerId/matchId source quand disponible (traçabilité) ; aucune publication directe possible (garde dans le service).
- Déduplication contre les questions existantes (similarité sur énoncé normalisé, seuil exact + préfixe) ; quota de coût : max 200 questions/jour (variable QUIZ_AI_DAILY_CAP).
- Faits vérifiables : l'énoncé ne doit citer que des données présentes dans la base (contrôle de cohérence des entités nommées avec Player/Match) ; en cas de doute, ambiguityScore élevé.
- Si pendingAiCount ≥ 50, le job s'arrête (indicateur de charge CDC Admin).

## 🛠️ Tâches

- [ ] Ajouter le processor src/jobs/workers/quiz-ai-ingest.worker.ts sur la file ai-generation.
- [ ] Définir l'interface QuizGenerationProvider (generate(category, level, count)) et un FakeProvider pour tests/dev.
- [ ] Schéma Joi de sortie IA et rejet des non conformes.
- [ ] Service de déduplication src/services/quiz-dedup.service.ts.
- [ ] Endpoint POST /admin/quiz-questions/generate {category, level, count} (super-admin) qui enfile le job.
- [ ] Répétable cron dans scheduler.ts avec plafond pendingAiCount.
- [ ] Compteurs quiz_ia_generated_total, quiz_ia_invalid_total ; log des coûts.
- [ ] Retry exponentiel (défauts), dead-letter après 5 échecs.
- [ ] Garde-fou transversal : méthode publish() refuse origin='ai' sans reviewedBy.

## ✔️ Critères d'acceptation

- [ ] Étant donné une sortie IA valide de 10 questions, alors 10 documents pending-ai sont créés.
- [ ] Étant donné une sortie avec 3 options, alors elle est rejetée et comptée.
- [ ] Étant donné 50 questions déjà en attente, alors le job se termine sans appeler le fournisseur.
- [ ] Étant donné une tentative de publication directe d'une question IA sans reviewedBy, alors erreur.
- [ ] Étant donné un doublon d'énoncé, alors il n'est pas inséré.

## 🧪 Tests à écrire

- [ ] Unitaire : validation de schéma IA.
- [ ] Unitaire : déduplication.
- [ ] Intégration : worker avec FakeProvider.
- [ ] Intégration : plafond pendingAiCount.
- [ ] Intégration : garde publish origin=ai.

## 🔗 Dépendances

À réaliser après : `API-JEUX-27` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.4
- CDC Backend §7
- CDC Backend §11.2
- CDC Admin §4.5.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
