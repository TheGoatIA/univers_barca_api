> **API-IA** · Épopée · Phase 1 — MVP

## 🎯 Objectif

Fournir l'assistant conversationnel Barça AI : conversations persistantes multi-appareils, réponses en streaming SSE ancrées sur les données joueurs/matchs/historique (RAG), strictement cantonnées à l'univers du FC Barcelone, modérées en entrée et en sortie, plafonnées par quotas quotidiens, observables, conformes RGPD et pilotables depuis le back-office (quotas, kill switch, feature flags).

## 📦 Périmètre

- Modèles ChatConversation/ChatMessage, AiQuota/AiUsage, AiCallLog
- Interface LanguageModelProvider, fournisseur simulé, fallback et disjoncteur
- Prompt système versionné FR/EN/ES et garde-fous (CDC Global §8.5, §10.1)
- Pipeline RAG en 8 étapes, récupération contrôlée, actions et cartes joueur
- Modération des entrées et des sorties, refus hors périmètre, information introuvable
- Endpoints conversations, envoi JSON et SSE, quota, rate limiting, signalement
- Journalisation des coûts, supervision admin (WH-04), quotas (WI-06), feature flags (WI-05)
- Caches, résumés d'historique, export et suppression RGPD, tests de non-régression et de charge

## 🚫 Hors périmètre

- Génération de questions de quiz par IA (groupe Quiz)
- Génération d'images (groupe WALL)
- Interface mobile du chat (groupe mobile N)
- Écrans admin (groupes WH et WI, côté dépôt admin)
- Notifications push (groupe NOTIF)

## 📚 Références

- CDC Backend §3.8
- CDC Backend §10.2
- CDC Backend §11.2
- CDC Backend §11.5
- CDC Backend §11.6
- CDC Global §2.2
- CDC Global §8.5
- CDC Global §10.1
- CDC Global §12.1
- CDC Admin §6

## 🧩 Issues de l'épopée (34)

{{CHILDREN}}
