> **API-PASS** · Épopée · Phase 2 — Communautaire & compétitif

## 🎯 Objectif

Fournir le système unique de points, séries, niveaux et badges partagé par tous les modules de jeu (Quiz, Guess the Player, GOAT, Fantasy, La Masia, Communauté, Calendrier, IA) et exposer le Culé Passport : progression, catalogue de 24 badges, statistiques, calendrier d'activité, profil modifiable et public, partage, avec anti-fraude, cache et conformité RGPD.

## 📦 Périmètre

- Journal d'activité, service recordActivity idempotent, barème de points configurable
- Série d'activité, XP et niveaux Passport (proposition à confirmer)
- Catalogue de badges, moteur d'attribution, déblocages non vus (meta.newBadges)
- Endpoints progression, badges, statistiques, calendrier, historique
- Pseudo (charte, unicité), avatars illustrés, profil public, partage
- Anti-fraude, réconciliation, cache, index, RGPD, tests, OpenAPI

## 🚫 Hors périmètre

- Logique des jeux Quiz/Guess/GOAT (autres groupes API : ils émettent les événements)
- Calcul des points Fantasy et Academy (groupe FANT, qui émet ses événements)
- Écrans mobiles P-* (dépôt mobile)
- Upload de photo d'avatar (groupe AUTH avatar-upload)
- Notifications push (groupe NOTIF)

## 📚 Références

- CDC Global §2.11
- CDC Global §2.13
- CDC Backend §3.12
- CDC Backend §4.3
- CDC Backend §7

## 🧩 Issues de l'épopée (33)

{{CHILDREN}}
