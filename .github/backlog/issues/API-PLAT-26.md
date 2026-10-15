> **API-PLAT-26** · Sécurité · Priorité **P0** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

CDC Backend §5.3 et Global §3.2 : protection XSS/CSRF, TLS 1.2+. L'API sert Swagger (HTML) et un cookie de refresh admin (ub_admin_rt). Les en-têtes doivent être durcis et testés.

## ✅ Objectif

Appliquer et tester un jeu complet d'en-têtes de sécurité et une politique CORS par liste blanche.

## 📐 Règles de gestion

- Helmet : Strict-Transport-Security max-age=31536000; includeSubDomains (production), X-Content-Type-Options: nosniff, Referrer-Policy: no-referrer, Cross-Origin-Resource-Policy: same-site, X-Frame-Options: DENY, Permissions-Policy vide.
- CSP : API JSON = default-src 'none'; frame-ancestors 'none' ; /api-docs seulement : script/style 'self' + hash pour Swagger UI, aucune origine externe.
- CORS : origines exactes de CORS_ORIGINS (admin staging/production), credentials uniquement pour l'admin, méthodes GET/POST/PATCH/PUT/DELETE, Access-Control-Max-Age 600 ; jamais '*' avec credentials ; le mobile (non navigateur) n'est pas concerné.
- Cookie refresh admin : HttpOnly, Secure, SameSite=Strict, Path=/api/v1/admin/auth, durée alignée (8 h d'inactivité) ; CSRF : en-tête X-CSRF-Token (double submit) sur mutations admin cookie-auth.
- Header X-Powered-By supprimé ; trust proxy configuré pour Traefik (X-Forwarded-For fiable).

## 🛠️ Tâches

- [ ] Configurer helmet() dans src/app.ts par environnement.
- [ ] Remplacer cors() par un validateur d'origine (callback) avec journal des refus.
- [ ] Ajouter middleware csrf pour routes admin utilisant le cookie.
- [ ] CSP spécifique /api-docs (nonce ou hash) dans src/docs/swagger.ts.
- [ ] Compléter tests/security/security.test.ts (en-têtes sur 200/404/500).
- [ ] Documenter dans SECURITY.md.
- [ ] Vérifier avec securityheaders.com en staging (score A) — noter dans le runbook.

## ✔️ Critères d'acceptation

- [ ] Étant donné n'importe quelle réponse API, alors X-Content-Type-Options=nosniff et X-Powered-By est absent.
- [ ] Étant donné Origin non listée, alors aucun Access-Control-Allow-Origin.
- [ ] Étant donné une mutation admin sans X-CSRF-Token, alors 403 CSRF_INVALID.
- [ ] Étant donné la production, alors Strict-Transport-Security est présent.
- [ ] Étant donné /api-docs, alors la CSP n'autorise aucune origine externe.

## 🧪 Tests à écrire

- [ ] Sécurité : matrice d'en-têtes sur 200/404/500.
- [ ] Sécurité : CORS origine inconnue.
- [ ] Sécurité : CSRF double submit.
- [ ] Sécurité : cookie attributs.
- [ ] Intégration : Swagger UI fonctionne avec la CSP.
- [ ] Unitaire : validateur d'origine.

## 📚 Références

- CDC Backend §5.3
- CDC Global §3.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
