> **API-PLAT-32** · Performance · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le CDC Backend §5.6 fixe des TTL (calendrier 15 min, fiches joueurs 1 h, agrégats carte 10 min, comparateur GOAT 1 h, assistant 24 h). Chaque module (FOOT, CAL, COMM) a besoin du même mécanisme ; il faut un service commun.

## ✅ Objectif

Fournir un cache.service unique avec clés versionnées, invalidation par tag et protection contre l'avalanche.

## 📐 Règles de gestion

- API : getOrSet(key, ttl, loader, {tags}), invalidateTag(tag), invalidateKey(key) ; clés cache:v1:<domaine>:<hash> ; sérialisation JSON compressée > 1 Ko.
- TTL par défaut centralisés dans src/config/cache-ttl.ts (valeurs CDC §5.6) avec jitter ±10 % pour éviter les expirations simultanées.
- Anti-stampede : verrou Redis (SET NX PX 5000) + stale-while-revalidate 30 s ; un seul chargement concurrent.
- Mode dégradé : Redis indisponible = lecture directe base, jamais d'erreur 5xx ; circuit court après 3 échecs (30 s).
- Métriques ub_cache_hits_total{cache,result} et ratio de hit visible dans Grafana (objectif > 80 % sur lectures catalogue).
- Jamais de données personnelles dans un cache partagé (clés par utilisateur interdites sauf préfixe user: avec TTL <= 5 min).

## 🛠️ Tâches

- [ ] Créer src/services/cache.service.ts et src/config/cache-ttl.ts.
- [ ] Implémenter les tags via ensembles Redis (SADD cache:tag:<tag>).
- [ ] Écrire le verrou et SWR.
- [ ] Instrumenter hit/miss/stale.
- [ ] Migrer le cache existant (calendrier/foot) vers le service (issues FOOT/CAL).
- [ ] Tests avec Redis de test et horloge simulée.
- [ ] Documenter dans docs/ARCHITECTURE.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné deux requêtes simultanées sur une clé expirée, alors le loader n'est exécuté qu'une fois.
- [ ] Étant donné invalidateTag('player:42'), alors toutes les clés associées disparaissent.
- [ ] Étant donné Redis down, alors getOrSet appelle directement le loader.
- [ ] Étant donné un TTL 3600, alors le TTL effectif est dans [3240,3960].

## 🧪 Tests à écrire

- [ ] Unitaire : jitter TTL.
- [ ] Intégration : anti-stampede 50 requêtes concurrentes.
- [ ] Intégration : invalidation par tag.
- [ ] Intégration : Redis down.
- [ ] Unitaire : compression seuil 1 Ko.
- [ ] Performance : getOrSet hit < 2 ms.

## 📚 Références

- CDC Backend §5.6

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
