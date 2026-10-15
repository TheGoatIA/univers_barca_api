> **API-NOTIF** · Épopée · Phase 1 — MVP

## 🎯 Objectif

Tenir les supporters informés au bon moment (rappel de match, mi-temps, score final, série en danger, défi du jour, badges, groupes, sanctions) via notifications push FCM respectueuses des préférences, des heures calmes et du consentement, avec un centre de notifications in-app et des campagnes manuelles contrôlées depuis le back-office.

## 📦 Périmètre

- Jetons d'appareil (enregistrement, rotation, invalidation)
- Préférences par catégorie et heures calmes
- Service FCM, worker BullMQ `notifications`, batch, retry, dead-letter
- Déclencheurs automatiques (matchs, live, défi, série, badge, histoire, groupe, modération)
- Centre de notifications in-app (liste, lu/non lu, suppression)
- Campagnes manuelles admin (segments, planification, aperçu, historique, limites, double confirmation)
- Journaux NotificationLog, métriques, RGPD, tests, charge, documentation

## 🚫 Hors périmètre

- Écrans Flutter O-01 à O-10 (affichage, permission OS) : dépôt mobile
- Interface admin WI-07/WI-08 : dépôt admin
- Synchronisation football et génération du défi (émettent les événements consommés ici)
- E-mails transactionnels (file `email`)

## 📚 Références

- CDC Global §2.12, §2.13
- CDC Backend §3.10, §7, §11.4
- CDC Admin §4.6.3, §4.11, §4.12
- src/models/platform.model.ts (NotificationPreference, DeviceToken, NotificationLog)

## 🧩 Issues de l'épopée (31)

{{CHILDREN}}
