> **API-PLAT-29** · Sécurité · Priorité **P1** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

CodeQL est déjà actif (codeql.yml). Il manque un scan dynamique de staging et une revue de sécurité formelle avant ouverture publique (menaces CDC §5.3 : XSS, CSRF, SSRF, brute force, prompt injection).

## ✅ Objectif

Mettre en place un scan DAST hebdomadaire et une checklist de pen-test exécutée avant la mise en production du MVP.

## 📐 Règles de gestion

- OWASP ZAP baseline (API scan avec l'OpenAPI exporté) chaque semaine sur staging, échec sur alerte High.
- Checklist OWASP API Top 10 2023 : BOLA (accès à /users/:id d'autrui), authentification cassée, exposition excessive de propriétés, absence de limite de ressources, BFLA (routes admin), SSRF, mauvaise configuration, inventaire, consommation non sécurisée d'API.
- Pen-test : périmètre = API prod-like staging, comptes de test des 3 rôles + user ; livrable = rapport + issues corrigées P0/P1 avant release.
- Tests de non-régression des failles trouvées ajoutés à tests/security/.
- Registre des constats dans docs/security/pentest-AAAA.md avec statut et date de correction.

## 🛠️ Tâches

- [ ] Ajouter .github/workflows/zap-baseline.yml (cron lundi 03:00 UTC, cible staging).
- [ ] Générer la config d'auth ZAP (jeton utilisateur de test).
- [ ] Rédiger docs/security/PENTEST_CHECKLIST.md.
- [ ] Créer tests/security/bola.test.ts (accès croisés entre deux utilisateurs).
- [ ] Créer tests/security/bfla.test.ts (matrice routes /admin × rôles).
- [ ] Définir le modèle d'issue GitHub « Constat sécurité ».
- [ ] Planifier la session de pen-test avant la bascule production.

## ✔️ Critères d'acceptation

- [ ] Étant donné deux utilisateurs A et B, quand A demande une ressource de B, alors 403 ou 404.
- [ ] Étant donné un content-manager, quand il appelle une route super-admin, alors 403.
- [ ] Étant donné ZAP baseline, alors aucune alerte High.
- [ ] Étant donné un constat corrigé, alors un test de non-régression existe.

## 🧪 Tests à écrire

- [ ] Sécurité : BOLA sur /users/me/*.
- [ ] Sécurité : BFLA sur toutes les routes /admin.
- [ ] Sécurité : mass assignment (champ role dans PATCH /users/me).
- [ ] CI : ZAP baseline exécuté.
- [ ] Sécurité : limite de taille de corps JSON (100 kb).

## 📚 Références

- CDC Backend §5.3
- CDC Global §3.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
