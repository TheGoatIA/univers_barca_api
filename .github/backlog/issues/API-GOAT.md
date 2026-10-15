> **API-GOAT** · Épopée · Phase 2 — Communautaire & compétitif

## 🎯 Objectif

Fournir l'API du comparateur GOAT : comparaison statistique de deux joueurs de l'histoire du club, profil radar, et vote communautaire (par duel et par critères) affichant un pourcentage d'opinion — jamais un verdict imposé par l'application — avec agrégats fiables, anti-abus, cache et outils de supervision back-office.

## 📦 Périmètre

- Modèles GoatVote/GoatDuel/critères, clé de paire, compteurs atomiques et réconciliation
- Endpoints : sélecteur de joueurs, duels populaires, comparaison (stats croisées, radar, évolution par saison), vote, résultat communautaire
- Règle « un changement de vote par semaine » (fenêtre glissante 7 jours, 409 avec délai restant)
- Anti-abus (éligibilité, limites, empreintes éphémères) et détection d'anomalies
- Cache Redis 1 h par paire avec invalidation sur vote significatif, index
- Endpoints back-office (tableau de bord, anomalies, masquage/mise en avant), RGPD, i18n, tests, k6, seed et documentation

## 🚫 Hors périmètre

- Référentiel joueurs/statistiques lui-même (groupe FOOT)
- Écrans mobiles G-* et pages admin (dépôts mobile et admin)
- Classements et points de jeux (groupe JEUX)
- Modération de contenu communautaire

## 📚 Références

- CDC Backend §3.2
- CDC Backend §5.6
- CDC Backend §11.1
- CDC Global §2.6
- CDC Admin §7

## 🧩 Issues de l'épopée (26)

{{CHILDREN}}
