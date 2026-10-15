> **API-PLAT-42** · Données · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Les tests de charge sur une base quasi vide masquent les problèmes d'index et de pagination. Il faut une base de staging avec des volumes représentatifs avant de mesurer la capacité.

## ✅ Objectif

Produire un jeu de données volumétrique reproductible, isolé de la production.

## 📐 Règles de gestion

- Volumes cibles (à ajuster au CDC Global §12) : 100 000 utilisateurs, 1 000 joueurs, 8 000 matchs, 300 000 refreshtokens actifs, 2 000 000 notificationlogs, 5 000 groupes, 200 000 groupposts.
- Générateur scripts/seed-volume.ts par lots de 5 000 (insertMany ordered:false), graine déterministe, durée < 10 min.
- Comptes de charge …@loadtest.univers-barca.app (déjà purgeables) et mot de passe connu uniquement en staging.
- Interdiction d'exécuter en production : garde NODE_ENV !== 'production' et nom de base contenant 'staging' ou 'test'.
- Anonymisation : aucune donnée réelle (CDC Admin §6.6 : staging = données de test/anonymisées).

## 🛠️ Tâches

- [ ] Écrire scripts/seed-volume.ts + options --users --matches.
- [ ] Garde d'environnement et confirmation interactive.
- [ ] Script de purge scripts/purge-loadtest.ts.
- [ ] Intégrer l'étape au workflow load-test.yml (cible staging).
- [ ] Mesurer et consigner la taille de la base dans docs/LOAD_TESTING.md.
- [ ] Lancer explain-audit sur cette base (cf. perf-index-mongo-explain).

## ✔️ Critères d'acceptation

- [ ] Étant donné NODE_ENV=production, alors le script refuse de s'exécuter.
- [ ] Étant donné la graine 42, alors deux exécutions produisent les mêmes identifiants.
- [ ] Étant donné la base volumétrique, alors GET /players?limit=20 répond p95 < 300 ms.
- [ ] Étant donné purge-loadtest, alors tous les comptes @loadtest. sont supprimés.

## 🧪 Tests à écrire

- [ ] Unitaire : garde d'environnement.
- [ ] Intégration : seed 10 000 utilisateurs en CI.
- [ ] Unitaire : déterminisme.
- [ ] Intégration : purge.

## 📚 Références

- CDC Admin §6.6
- CDC Global §12
- docs/LOAD_TESTING.md

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
