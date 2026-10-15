> **API-FOOT** · Épopée · Phase 1 — MVP

## 🎯 Objectif

Fournir la source de vérité football (joueurs, équipes, compétitions, matchs, anecdotes) : synchronisation avec l'API football externe, contenu éditorial trilingue FR/EN/ES avec workflow de publication, endpoints publics de lecture pour le mobile et endpoints back-office pour l'admin.

## 📦 Périmètre

- Modèles Player, Team, Competition, Match, Anecdote, MediaAsset durcis
- Workflow joueurs draft→awaiting-translation→ready→published→archived
- Endpoints publics : joueurs, matchs (calendrier, prochain, live, détail, historique), anecdote du jour
- Worker BullMQ football-sync, mapping externalRef, idempotence, quotas, mode live, cron, reprise sur erreur
- Cache Redis, ETag/Cache-Control, pagination par curseur
- Endpoints admin CRUD joueurs/matchs/anecdotes/médias, import/export CSV, conflits, audit log, recherche globale Ctrl+K, KPI dashboard
- Seed, tests d'intégration, Swagger

## 🚫 Hors périmètre

- Comparateur GOAT et votes (groupe GOAT)
- Export calendrier .ics / abonnement webcal (groupe Calendrier, écrans L-07 à L-15)
- Quiz, Guess the Player, Fantasy
- Modération et utilisateurs (groupes modération/comptes)
- Écrans mobiles et admin eux-mêmes (dépôts mobile et admin)

## 📚 Références

- CDC Backend §3.2
- CDC Backend §4.2
- CDC Backend §5.6
- CDC Backend §7
- CDC Backend §11.1
- CDC Global §2.3
- CDC Global §2.6
- CDC Admin §4.1-4.4
- CDC Admin §4.9
- CDC Admin §6.4

## 🧩 Issues de l'épopée (56)

{{CHILDREN}}
