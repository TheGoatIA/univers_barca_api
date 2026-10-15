> **API-JEUX-26** · API · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le content-manager doit pouvoir charger en masse des questions rédigées hors outil. L'import crée des brouillons et rapporte les erreurs ligne par ligne avant tout enregistrement.

## ✅ Objectif

Un import CSV en deux temps (prévisualisation puis confirmation) et un export CSV de la sélection filtrée.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WF-01` — Liste des questions
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_light.webp?raw=true' width='330' alt='WF-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_dark.webp?raw=true' width='330' alt='WF-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_light.webp?raw=true' width='330' alt='WF-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_dark.webp?raw=true' width='330' alt='WF-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « 1 248 questions actives · 12 en attente de validation IA » · « File de validation IA (12) » · « Nouvelle question » · « Rechercher… » · « Niveau » · « Catégorie » · « Statut » · « Réussite : 0–100 % » · « Question » · « Langues » · « Réussite » · « Qui a marqué le but de la victoire en finale de la LDC 2015 ? » · « Niv. 2 » · « Publiée » · « 71 % » · « En quelle année le club a-t-il été fondé ? » · « Histoire » · « Niv. 1 » · « 92 % »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WF-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-01%5D%22) · [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-03%5D%22) · [ADM-WF-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-04%5D%22) · [ADM-WF-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-05%5D%22) · [ADM-WF-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-06%5D%22) · [ADM-WF-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-10%5D%22) · [ADM-WF-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-11%5D%22) · [ADM-WF-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-21%5D%22) · [ADM-WF-22](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-22%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-25%5D%22) · [API-JEUX-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-27%5D%22) · [API-JEUX-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-29%5D%22) · [API-JEUX-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-30%5D%22) · [API-JEUX-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-31%5D%22) · [API-JEUX-36](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-36%5D%22)

## 📐 Règles de gestion

- Format CSV UTF-8, séparateur ';' ou ',', en-têtes : level,category,question_fr,question_en,question_es,opt1_fr..opt4_fr,opt1_en..opt4_en,opt1_es..opt4_es,correct (1-4),explanation_fr,explanation_en,explanation_es.
- POST /admin/quiz-questions/import?dryRun=true renvoie {valid, invalid:[{line,errors[]}]} sans écrire ; POST sans dryRun avec importId confirme et crée les questions en status 'draft' (jamais publiées automatiquement).
- Taille max 2 Mo / 2 000 lignes ; doublon détecté sur énoncé FR normalisé (ignoré avec avertissement) ; langues manquantes autorisées (brouillon avec missingLocales).
- Protection injection de formule CSV à l'export (préfixer ' les cellules commençant par = + - @).
- GET /admin/quiz-questions/export.csv reprend les filtres de la liste (max 10 000 lignes) ; rôle content-manager/super-admin ; action auditée.
- Traitement de gros fichiers en tâche BullMQ (>500 lignes) avec suivi de statut GET /admin/quiz-questions/import/:importId.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/admin/quiz-questions/import?dryRun=true` | Prévisualise un import CSV | multipart file | {success:true,data:{importId:'…',valid:97,invalid:[{line:12,errors:['correct doit valoir 1 à 4']}]}} |
| `GET` | `/api/v1/admin/quiz-questions/export.csv` | Export CSV filtré | mêmes filtres que la liste | text/csv |

## 🛠️ Tâches

- [ ] Routes d'import/export dans admin-quiz.routes.ts avec multer (memoryStorage, limite 2 Mo, mimetype text/csv).
- [ ] Parser csv-parse en streaming, validateur ligne par ligne (Joi) dans src/services/quiz-import.service.ts.
- [ ] Stockage temporaire du dry-run dans Redis (TTL 30 min) clé quiz:import:{importId}.
- [ ] Normalisation et détection de doublon via searchName de la question.
- [ ] Génération du CSV avec csv-stringify et échappement formule.
- [ ] Enfiler un job 'quiz-import' dans la file ai-generation (réutilisation) ou nouvelle file 'content-import' pour > 500 lignes.
- [ ] Audit log {adminId, imported, rejected}.
- [ ] Fichiers d'exemple docs/samples/quiz-import.csv.
- [ ] Swagger : multipart/form-data.

## ✔️ Critères d'acceptation

- [ ] Étant donné un CSV de 100 lignes dont 3 invalides, alors dryRun renvoie valid=97 et invalid=3 avec numéros de ligne.
- [ ] Étant donné la confirmation, alors 97 questions 'draft' sont créées et aucune publiée.
- [ ] Étant donné un doublon d'énoncé, alors la ligne est ignorée avec avertissement.
- [ ] Étant donné une cellule '=CMD()', alors l'export la préfixe d'une apostrophe.
- [ ] Étant donné un fichier de 3 Mo, alors 413.

## 🧪 Tests à écrire

- [ ] Intégration : dry-run puis confirmation.
- [ ] Unitaire : parseur (virgule/point-virgule, guillemets).
- [ ] Sécurité : injection de formule.
- [ ] Intégration : taille max.
- [ ] Intégration : job asynchrone > 500 lignes.

## 🔗 Dépendances

À réaliser après : `API-JEUX-25` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.5
- CDC Admin §4.9

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
