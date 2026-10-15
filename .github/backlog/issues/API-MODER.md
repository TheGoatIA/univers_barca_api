> **API-MODER** · Épopée · Phase 2 — Communautaire & compétitif

## 🎯 Objectif

Garantir un espace communautaire sain : signalements, pré-filtrage automatique à gravité indicative, file de modération humaine, sanctions (avertir, masquer, suspendre, bannir) justifiées et auditées, contestations, notifications et impact sur les états de compte A-09/A-10.

## 📦 Périmètre

- Signalements (types, quotas, snapshot) et gravité auto indicative
- Filtres automatiques : mots interdits, liens, flood
- File de modération, détail, prise en charge, SLA et escalade
- Actions avertir/masquer/suspendre/bannir avec justification obligatoire, barème et rang de récidive
- Historique par utilisateur, journal d'audit immuable chaîné
- Contestations, notifications, états de compte suspendu/banni
- Endpoints back-office RBAC moderator/super-admin, validation des groupes, wallpapers
- Métriques, rétention RGPD, tests, Swagger

## 🚫 Hors périmètre

- Création des groupes, posts, adhésions (groupe COMM)
- Écrans mobiles et admin eux-mêmes (dépôts mobile/admin)
- Barème Fantasy, tableau de bord GOAT, supervision Masia (WJ-03 à WJ-05)
- Sanctions automatiques sans décision humaine
- Service externe de détection ML (seulement dictionnaires en phase 2)

## 📚 Références

- CDC Backend §3.11
- CDC Backend §5.7
- CDC Backend §11
- CDC Global §10.3
- CDC Global §11
- CDC Global §2.14
- CDC Admin §4.6
- CDC Admin §4.8.2
- CDC Admin §6.4

## 🧩 Issues de l'épopée (32)

{{CHILDREN}}
