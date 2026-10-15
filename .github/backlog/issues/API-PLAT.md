> **API-PLAT** · Épopée · Phase 0 — Socle technique

## 🎯 Objectif

Garantir la plateforme sur laquelle reposent tous les modules : états système consommés par le mobile (maintenance, version minimale, 5xx, 429, session expirée), configuration et feature flags, supervision back-office, observabilité, sécurité, performance, tests dont la montée en charge k6 étendue à chaque parcours, CI/CD, sauvegardes, robustesse et conformité RGPD technique.

## 📦 Périmètre

- Endpoints /config, /version, /config/flags et contrat des états système A-03 à A-08
- Maintenance planifiée, version minimale, 429 Retry-After, codes d'incident 5xx
- Feature flags et quotas IA (WI-05, WI-06), exports et rapports (WI-09)
- Supervision WH-01 à WH-05 : santé, alertes, files BullMQ, logs Graylog, consommation IA, journal d'audit
- Observabilité : métriques Prometheus, Grafana, Alertmanager, OpenTelemetry, Graylog
- Sécurité : en-têtes, CSP, audits de dépendances, rotation de secrets, SSRF, DAST et pen-test
- Performance et robustesse : index, cache Redis, timeouts, pooling, circuit breakers, arrêt gracieux, worker
- Tests : couverture, contrat OpenAPI, fixtures, tests de charge k6 par endpoint, suivi de capacité, dimensionnement du serveur
- CI/CD, rollback, environnements et secrets, runbooks, sauvegardes, restauration, migrations, seed
- Jobs de purge, dead-letter et rejeu, registre des traitements RGPD, messages système i18n

## 🚫 Hors périmètre

- Authentification, sessions, comptes admin (AUTH) : seul l'audit transverse est traité ici
- Données football et synchronisation (FOOT), calendrier et ICS (CAL), notifications et campagnes (NOTIF), communauté et carte (COMM)
- Écrans mobiles A-03 à A-08 et pages admin WH/WI eux-mêmes (dépôts mobile et admin)
- Modération et utilisateurs (groupes dédiés)

## 📚 Références

- CDC Backend §5
- CDC Backend §6
- CDC Backend §7
- CDC Backend §8
- CDC Backend §9
- CDC Backend §10
- CDC Backend §11.6
- CDC Global §3
- CDC Global §4
- CDC Global §6
- CDC Global §12
- CDC Admin §4.7
- CDC Admin §4.8
- CDC Admin §6.4
- docs/LOAD_TESTING.md

## 🧩 Issues de l'épopée (55)

{{CHILDREN}}
