> **API-FANT** · Épopée · Phase 2 — Communautaire & compétitif

## 🎯 Objectif

Fournir côté API le jeu Fantasy Barça (équipes hebdomadaires, verrouillage au coup d'envoi, calcul des points depuis les événements de match via un barème ScoringRule configurable, classements amis/mondial, ligues) et La Masia Academy (joueur virtuel, décisions hebdomadaires, progression), avec jobs BullMQ idempotents et alimentation du Culé Passport.

## 📦 Périmètre

- Journées (Gameweek), équipes, formations, validations, capitaine
- Verrouillage au coup d'envoi (garde serveur + job différé)
- Barème versionné, statistiques par joueur et par match, moteur de scoring partagé, job compute-fantasy-scores
- Classements matérialisés (Mongo + Redis), ligues privées/publiques, invitations
- La Masia : joueur, décisions, moteur de progression, tick hebdomadaire, bilans, jalons
- Flags de modules, sécurité, RGPD, index/cache, tests

## 🚫 Hors périmètre

- Budget, valeur des joueurs, mercato/transferts : absents du CDC, volontairement exclus
- Écrans mobiles H et I (dépôt mobile) et écran admin barème WJ-03 (dépôt admin, seuls les endpoints sont ici)
- Moteur de badges, XP et profil (groupe PASS)
- Quiz et Guess the Player
- Notifications push elles-mêmes (groupe NOTIF)

## 📚 Références

- CDC Backend §3.5
- CDC Backend §3.12
- CDC Backend §4.4
- CDC Backend §7
- CDC Global §2.7
- CDC Global §6

## 🧩 Issues de l'épopée (34)

{{CHILDREN}}
