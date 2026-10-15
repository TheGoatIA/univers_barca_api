> **API-PLAT-51** · Données · Priorité **P1** · Taille **S** · Phase 0 — Socle technique

## 🎯 Contexte

migrate-mongo est configuré avec une migration d'index initiale ; les migrations s'exécutent au démarrage (entrypoint). Plusieurs groupes ajoutent des migrations (FOOT, NOTIF, AUTH, COMM, PLAT) : il faut des règles communes et un seed adapté à chaque environnement.

## ✅ Objectif

Standardiser l'écriture, l'exécution concurrente-sûre et le seed des environnements.

## 📐 Règles de gestion

- Nommage AAAAMMJJHHMMSS-description ; chaque migration idempotente, avec up et down, sans dépendance au code applicatif (pas d'import de modèles).
- Exécution unique en cas de plusieurs instances : verrou migrate-mongo (changelog lock) et migration jouée par le conteneur 'migrator' avant le démarrage de l'API.
- Seed : dev = jeu riche (npm run seed) ; staging = jeu anonymisé + volumétrie optionnelle ; production = seulement référentiels indispensables (flags, quotas, règles de scoring, compétitions) via migration, jamais de données de test.
- Le premier super-admin est créé via ADMIN_BOOTSTRAP_EMAIL/PASSWORD puis ces variables sont retirées (mot de passe à changer à la 1re connexion).
- Dry-run : npm run migrate:status affiché dans le pipeline avant application.

## 🛠️ Tâches

- [ ] Écrire docs/MIGRATIONS.md (conventions, exemples, pièges).
- [ ] Ajouter service 'migrator' dans les compose staging/production.
- [ ] Créer migrations de référentiels : flags (flags-modele-evaluation), quotas par défaut, platform_settings.
- [ ] Garde scripts/seed-data.ts: refus en production.
- [ ] Lint des migrations (up/down, idempotence) en CI.
- [ ] Test: appliquer toutes les migrations sur base vide puis sur snapshot N-1.

## ✔️ Critères d'acceptation

- [ ] Étant donné une base vide, alors migrate:up crée tous les index et référentiels.
- [ ] Étant donné deux instances démarrant en même temps, alors la migration ne s'exécute qu'une fois.
- [ ] Étant donné NODE_ENV=production, alors le seed de démonstration refuse.
- [ ] Étant donné le bootstrap admin, alors le mot de passe doit être changé à la première connexion.

## 🧪 Tests à écrire

- [ ] Intégration: up/down/up idempotent.
- [ ] Intégration: concurrence 2 migrators.
- [ ] Unitaire: garde seed.
- [ ] CI: lint des migrations.

## 📚 Références

- CDC Backend §9.5
- docs/DATABASE.md

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
