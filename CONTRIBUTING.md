# Contribuer à l'API Univers Barça

Merci de contribuer ! Ce guide décrit le flux de travail attendu. Toute communication (issues, PR, revues) se fait **en français**.

## 1. Flux Git

```
main  ← production (protégée, déploiement automatique + tag vYYYYMMDD.N)
dev   ← intégration / staging (protégée, cible des PR et de Dependabot)
feat/<issue>-<slug>   fix/…   refactor/…   docs/…   chore/…   ci/…   test/…
```

1. Choisir une issue (labels `module:*`, `backend`), se l'assigner.
2. Créer la branche depuis `dev` : `git switch dev && git pull && git switch -c feat/123-inscription-email`.
3. Développer par petits commits conventionnels (`feat(auth): ajouter la rotation du refresh token`).
4. Ouvrir une **PR vers `dev`** avec le modèle fourni, lier l'issue (`Closes #123`), demander une revue (CODEOWNERS).
5. La CI doit être verte : lint, Prettier, types, tests unitaires/intégration/e2e/sécurité, contrat OpenAPI, build Docker, audit.
6. Fusion en **squash** (titre = Conventional Commit). `dev` → `main` par PR de release.

## 2. Messages de commit

Format `type(scope): sujet` — types : `feat fix docs style refactor perf test build ci chore revert`. Sujet ≤ 100 caractères, à l'impératif, sans majuscule initiale ni point final. Un hook `commit-msg` (Husky + commitlint) valide chaque commit.

## 3. Qualité locale

```bash
npm run lint && npm run format:check && npm run typecheck
npm run test:unit
docker compose -f docker/docker-compose.dev.yml up -d mongodb mongo-init redis
npm run test:integration && npm run test:e2e && npm run test:security
npm run check:swagger        # si vous avez modifié des routes : npm run export:swagger puis committer swagger.json
```

Les hooks Husky exécutent lint-staged (ESLint + Prettier) avant chaque commit.

## 4. Règles de code

- TypeScript strict, pas de `any` injustifié ; chemins `@/` ; un fichier = une responsabilité.
- Nommage : `kebab-case` pour les dossiers, `camelCase` pour fonctions/variables, `PascalCase` pour modèles/types ; fichiers `xxx.service.ts`, `xxx.controller.ts`, `xxx.model.ts`, `xxx.validator.ts`.
- Toute entrée utilisateur passe par `validate(joiSchema)` ; toute erreur métier par `AppError.*` ; tout handler async par `catchAsync`.
- Logique métier dans `services/`, jamais dans les contrôleurs ; modèles Mongoose sans logique HTTP.
- Documenter chaque route avec JSDoc `@swagger`.
- Jamais de secret, jeton ou donnée personnelle dans le code, les logs ou les tests (utiliser `.env`, placeholders `your_token_here`).
- RGPD : les consentements sont historisés (jamais écrasés) ; la géolocalisation reste approximative.
- Tout nouveau comportement est couvert par des tests (unitaires pour la logique, intégration pour les routes, sécurité pour l'authentification et les accès).

## 5. Migrations

`npm run migrate:create nom-de-la-migration` → éditer `scripts/migrations/…js` (`up` idempotent, `down` non destructif si possible). Elles s'exécutent au démarrage du conteneur (`RUN_MIGRATIONS=true`).

## 6. Revue de code

Checklist : sécurité (autorisations, validation), performance (index, N+1), erreurs gérées, tests, docs/Swagger, absence de secrets, compatibilité ascendante de l'API (sinon label `breaking-change` et nouvelle version de préfixe).
