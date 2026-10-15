> **API-PLAT-30** · Sécurité · Priorité **P1** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

CDC Backend §5.3 : validation stricte des URLs sortantes (API football, IA, images) avec liste blanche de domaines. Plusieurs fonctions (import d'images, webhooks, Graylog/Prometheus du back-office) feront des appels sortants.

## ✅ Objectif

Centraliser tout appel HTTP sortant dans un client qui refuse les destinations non autorisées ou internes.

## 📐 Règles de gestion

- Allowlist par fournisseur (variables) : football (api-football), IA texte/image, FCM, stockage objet ; Prometheus/Graylog/Alertmanager via leurs hôtes internes configurés explicitement.
- Refus : IP privées/loopback/link-local (10/8, 172.16/12, 192.168/16, 127/8, 169.254/16, ::1, fc00::/7), schémas autres que https (http autorisé seulement pour hôtes internes listés), redirections non suivies hors allowlist.
- Résolution DNS puis vérification de l'IP avant connexion (anti DNS-rebinding), timeout 5 s, taille de réponse max 10 Mo.
- Toute URL fournie par un utilisateur ou un admin (ex. image de joueur) est validée par le même service avant téléchargement.
- Refus journalisés (niveau warn, métrique ub_ssrf_blocked_total).

## 🛠️ Tâches

- [ ] Créer src/utils/safeHttp.ts (undici Agent + lookup personnalisé).
- [ ] Remplacer fetch/axios directs par safeHttp (règle ESLint no-restricted-imports).
- [ ] Config allowlist dans env.ts (OUTBOUND_ALLOWED_HOSTS).
- [ ] Métrique et logs de refus.
- [ ] Tests avec serveur local simulant redirection vers 169.254.169.254.
- [ ] Documenter dans CONTRIBUTING.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné une URL http://169.254.169.254/, alors l'appel est refusé.
- [ ] Étant donné une redirection d'un hôte autorisé vers un hôte interdit, alors refus.
- [ ] Étant donné un DNS retournant 127.0.0.1, alors refus.
- [ ] Étant donné une réponse de 20 Mo, alors l'appel est interrompu.

## 🧪 Tests à écrire

- [ ] Unitaire : classification d'adresses IP.
- [ ] Intégration : redirection malveillante.
- [ ] Intégration : DNS rebinding simulé.
- [ ] Lint : fetch direct interdit.
- [ ] Unitaire : limite de taille.

## 📚 Références

- CDC Backend §5.3
- CDC Global §3.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
