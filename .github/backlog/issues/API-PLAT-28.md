> **API-PLAT-28** · Sécurité · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

CDC Backend §5.4 recommande la rotation périodique des clés JWT et API tierces ; docs/DISASTER_RECOVERY.md prévoit la rotation immédiate en cas de fuite. Aujourd'hui un seul secret JWT_ACCESS_SECRET/JWT_REFRESH_SECRET : le changer déconnecte tout le monde.

## ✅ Objectif

Permettre une rotation sans interruption (double clé) et documenter les rotations planifiées.

## 📐 Règles de gestion

- Support de plusieurs clés de signature identifiées par kid : JWT_ACCESS_SECRETS='kid1:secret1,kid2:secret2' ; la première signe, toutes vérifient ; retrait de l'ancienne après 15 min (TTL access) / 30 jours (refresh hashés non concernés).
- Calendrier : JWT tous les 180 jours, clé football/IA/FCM tous les 365 jours ou immédiatement en cas de fuite, mot de passe Redis/Mongo 365 jours.
- Validation env.ts : chaque secret >= 32 caractères, entropie minimale, refus des valeurs d'exemple.
- Aucun secret en clair dans le dépôt : gitleaks en CI et pré-commit.
- Procédure de fuite : rotation, purge refreshtokens, revue auditlogs (déjà en DISASTER_RECOVERY.md) automatisée par scripts/rotate-secrets.sh (génère, met à jour .env.<env>, redéploie).

## 🛠️ Tâches

- [ ] Adapter src/services/token.service.ts (header kid, sélection de clé, vérification multi-clés).
- [ ] Étendre src/config/env.ts (parsing JWT_ACCESS_SECRETS, rétro-compatibilité JWT_ACCESS_SECRET).
- [ ] Écrire scripts/rotate-secrets.sh et docs/runbooks/rotation-secrets.md.
- [ ] Ajouter gitleaks (action) + config .gitleaks.toml.
- [ ] Alerte calendrier : rappel via issue GitHub planifiée (workflow cron) 14 jours avant échéance.
- [ ] Tests de rotation : jeton signé par l'ancienne clé encore valide, refusé après retrait.

## ✔️ Critères d'acceptation

- [ ] Étant donné deux clés actives, alors un jeton signé par l'ancienne clé est accepté.
- [ ] Étant donné l'ancienne clé retirée, alors ce jeton est rejeté 401.
- [ ] Étant donné un secret de 12 caractères, alors le démarrage échoue.
- [ ] Étant donné un secret committé, alors gitleaks bloque la PR.

## 🧪 Tests à écrire

- [ ] Unitaire : sélection par kid.
- [ ] Unitaire : validation d'entropie.
- [ ] Intégration : rotation sans déconnexion.
- [ ] Sécurité : kid inconnu rejeté.
- [ ] CI : gitleaks détecte un faux secret de test.

## 📚 Références

- CDC Backend §5.4
- CDC Global §3.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
