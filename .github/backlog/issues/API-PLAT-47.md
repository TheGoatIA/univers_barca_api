> **API-PLAT-47** · Infrastructure · Priorité **P0** · Taille **S** · Phase 0 — Socle technique

## 🎯 Contexte

CDC Backend §9.2 : isolation stricte staging/production (fichiers .env, volumes et réseaux distincts), secrets hors dépôt. docs/DEPLOYMENT.md liste les environnements mais pas la matrice complète des variables ni leur validation croisée.

## ✅ Objectif

Garantir qu'aucune variable ni donnée n'est partagée entre environnements et que la configuration est vérifiable.

## 📐 Règles de gestion

- Matrice docs/ENVIRONMENTS.md : chaque variable de .env.example × (dev, staging, production) avec valeur attendue/origine ; secrets distincts par environnement (JWT, Redis, Mongo, Graylog, FCM projet distinct).
- Garde-fous au démarrage (env.ts) : production exige REDIS_URL, SWAGGER_PASSWORD >= 16, METRICS_ALLOWED_IPS non vide, CORS_ORIGINS sans '*' ; staging interdit une URI Mongo contenant le nom de la base de production.
- Script scripts/check-env.mjs comparant .env.example aux fichiers déployés (clés manquantes/inconnues, sans afficher les valeurs).
- Fichiers .env.<env> en 600 sur le VPS (propriétaire deploy), sauvegardés chiffrés hors VPS (CDC §9.6) sans valeurs en clair dans Git.
- Domaines : api.univers-barca.app (5001) et api-staging.univers-barca.app (5002), réseaux Docker distincts.

## 🛠️ Tâches

- [ ] Rédiger docs/ENVIRONMENTS.md.
- [ ] Compléter .env.example (commentaires, valeurs factices).
- [ ] Durcir src/config/env.ts avec les invariants staging/production.
- [ ] Écrire scripts/check-env.mjs et l'appeler dans le job deploy.
- [ ] Vérifier les fichiers docker-compose.{staging,production}.yml (réseaux/volumes nommés distincts).
- [ ] Procédure d'archivage chiffré des .env (age ou gpg) dans le runbook.

## ✔️ Critères d'acceptation

- [ ] Étant donné une URI staging pointant sur la base de production, alors le démarrage échoue.
- [ ] Étant donné CORS_ORIGINS='*' en production, alors le démarrage échoue.
- [ ] Étant donné une variable manquante dans le fichier serveur, alors check-env échoue sans révéler de valeur.
- [ ] Étant donné staging et production, alors aucun volume ni réseau n'est partagé.

## 🧪 Tests à écrire

- [ ] Unitaire : invariants env.ts par environnement.
- [ ] Script: check-env sur fixtures.
- [ ] Revue: diff des compose.
- [ ] Unitaire: aucune fuite de valeur dans la sortie.

## 📚 Références

- CDC Backend §9.2
- CDC Backend §5.4
- CDC Backend §13.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
