> **API-JEUX** · Épopée · Phase 1 — MVP

## 🎯 Objectif

Fournir côté API les deux jeux quotidiens de gamification — Guess the Player (un joueur mystère par jour, identique pour tous, 6 essais, indices comparés, grille partageable) et le Quiz adaptatif (5 paliers, sessions de 10 questions chronométrées, entraînement libre, ligues d'amis) — avec un système unique de points, streaks et classements, ainsi que les endpoints back-office pour gérer la banque de questions.

## 📦 Périmètre

- Défi quotidien Guess the Player : génération cron Europe/Madrid, sélection pondérée, comparaison des indices, tentatives idempotentes, anti-triche, scoring, grille d'emojis et image de partage, historique et statistiques
- Quiz adaptatif : modèles durcis, algorithme d'adaptation à seuils, sélection des 10 questions, quiz du jour, entraînement libre, réponses avec chrono serveur et anti-rejeu, résultat et montée/descente de niveau
- Streaks, registre de points (XP), classements monde/amis par période (Redis), ligues privées BARCA-XXXX
- Back-office : liste/CRUD des questions, import/export CSV, file de validation IA, worker d'ingestion IA, difficulté mesurée, performance, planification du joueur mystère
- Index, caches Redis, RGPD, seed, Swagger, tests unitaires/intégration/sécurité et charge k6 (soir de match)

## 🚫 Hors périmètre

- Fantasy et La Masia (autres groupes, réutilisent le service de points)
- Comparateur GOAT et votes (groupe GOAT)
- Notifications push elles-mêmes (module NOTIF) : seul l'évènement de rappel de streak est produit ici
- Fournisseur d'IA générative (groupe IA) : seule l'interface de génération est consommée
- Écrans mobiles D-*/E-* et admin WF-* (dépôts mobile et admin)

## 📚 Références

- CDC Backend §3.3
- CDC Backend §3.4
- CDC Backend §3.12.1
- CDC Backend §4.3
- CDC Backend §5.6
- CDC Backend §7
- CDC Backend §8
- CDC Global §2.4
- CDC Global §2.5
- CDC Global §2.6
- CDC Admin §4.5

## 🧩 Issues de l'épopée (37)

{{CHILDREN}}
