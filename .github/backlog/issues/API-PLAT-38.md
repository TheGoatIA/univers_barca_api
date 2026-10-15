> **API-PLAT-38** · Tests · Priorité **P1** · Taille **S** · Phase 0 — Socle technique

## 🎯 Contexte

tests/helpers contient app.ts et global-setup.ts mais pas de fabriques de données ; chaque test crée ses objets à la main, source de divergences entre les modules AUTH, FOOT, CAL, NOTIF, COMM.

## ✅ Objectif

Fournir des factories typées, déterministes et un nettoyage fiable des bases de test.

## 📐 Règles de gestion

- Factories (fishery ou fonctions) : userFactory, adminFactory(role), playerFactory, matchFactory, groupFactory, deviceTokenFactory ; options { seed } pour des valeurs reproductibles (faker.seed).
- Isolation : base MongoDB éphémère par worker Jest (nom unique), nettoyage via dropDatabase en afterAll ; Redis préfixé par worker (flushdb sur DB dédiée).
- Helper loginAs(role) retournant un jeton valide (admin avec 2FA contournée en test).
- Horloge simulée (jest.useFakeTimers + util now()) pour dates de match, quotas journaliers, maintenance.
- Jeu de données de référence tests/fixtures/*.json (3 joueurs, 5 matchs, 2 groupes) aussi utilisé par le seed de staging.

## 🛠️ Tâches

- [ ] Créer tests/factories/*.ts et tests/helpers/loginAs.ts.
- [ ] Adapter tests/helpers/global-setup.ts (base par worker).
- [ ] Util tests/helpers/clock.ts.
- [ ] Migrer tests/integration/auth.test.ts vers les factories.
- [ ] Documenter dans CONTRIBUTING.md (« écrire un test d'intégration »).
- [ ] Règle ESLint: pas de new Model() direct dans tests/ (utiliser factories).

## ✔️ Critères d'acceptation

- [ ] Étant donné deux workers Jest en parallèle, alors leurs données ne se mélangent pas.
- [ ] Étant donné faker.seed(42), alors deux exécutions produisent les mêmes valeurs.
- [ ] Étant donné loginAs('moderator'), alors le jeton passe protect et restrictTo('moderator').
- [ ] Étant donné l'horloge simulée, alors un quota journalier se réinitialise à minuit simulé.

## 🧪 Tests à écrire

- [ ] Unitaire : factories valides au schéma.
- [ ] Intégration : isolation entre workers.
- [ ] Unitaire : horloge simulée.
- [ ] Intégration : loginAs pour 4 rôles.

## 📚 Références

- CDC Backend §8.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
