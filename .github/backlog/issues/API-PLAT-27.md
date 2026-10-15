> **API-PLAT-27** · Sécurité · Priorité **P0** · Taille **S** · Phase 0 — Socle technique

## 🎯 Contexte

CDC Global §3.2 et Backend §9.4 étape 3 : audit npm et scan d'image dans chaque PR. Aujourd'hui Trivy est non bloquant dans backend-deploy.yml et aucune porte npm audit n'existe dans backend-ci.yml.

## ✅ Objectif

Rendre les scans de vulnérabilités bloquants selon un seuil documenté, avec exceptions tracées.

## 📐 Règles de gestion

- Seuil : bloquer sur vulnérabilité HIGH/CRITICAL de dépendance de production (npm audit --omit=dev --audit-level=high) ; moderate = avertissement.
- Trivy image : bloquant sur CRITICAL corrigeable (--ignore-unfixed), rapport SARIF envoyé à l'onglet Security.
- Exceptions : fichier .security/allowlist.json { id, justification, expiration (<= 30 jours) } relu en CI (échec si expirée).
- Dependabot hebdomadaire (npm, docker, github-actions) regroupé, auto-merge uniquement patch/minor après CI verte (workflow existant).
- Licences : license-checker échoue sur GPL/AGPL en production ; génération THIRD_PARTY_LICENSES.md.

## 🛠️ Tâches

- [ ] Ajouter le job security-audit dans .github/workflows/backend-ci.yml.
- [ ] Passer l'étape Trivy en bloquante dans backend-deploy.yml (exit-code 1, severity CRITICAL,HIGH).
- [ ] Créer .security/allowlist.json + script scripts/check-allowlist.mjs.
- [ ] Configurer .github/dependabot.yml (groupes, labels).
- [ ] Étape licenses avec liste d'interdiction.
- [ ] Planifier un audit nocturne dans nightly-regression.yml avec notification.
- [ ] Documenter la politique dans SECURITY.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné une dépendance HIGH sans correctif accepté, alors le job échoue.
- [ ] Étant donné une exception expirée, alors le job échoue avec le nom de l'entrée.
- [ ] Étant donné une image avec CVE CRITICAL non corrigeable, alors elle est ignorée (--ignore-unfixed).
- [ ] Étant donné une licence AGPL en production, alors la CI échoue.

## 🧪 Tests à écrire

- [ ] CI : job security-audit vert sur main.
- [ ] CI : test de l'allowlist expirée (script unitaire).
- [ ] CI : SARIF visible dans Security.
- [ ] Revue : dependabot.yml valide (schéma).

## 📚 Références

- CDC Backend §9.4
- CDC Global §3.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck`, tests unitaires/intégration/sécurité verts ; Swagger (`npm run export:swagger`) à jour ; migration si schéma modifié ; PR vers `dev` ; CI verte.
