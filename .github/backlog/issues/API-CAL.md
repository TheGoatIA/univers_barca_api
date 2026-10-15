> **API-CAL** · Épopée · Phase 1 — MVP

## 🎯 Objectif

Permettre au supporter de consulter le calendrier des matchs du Barça (liste, vue mensuelle, détail), de l'exporter en fichier .ics ou de s'y abonner par un lien webcal personnel et révocable qui reste à jour en cas de report ou de changement d'horaire, dans son fuseau horaire et avec des rappels configurables.

## 📦 Périmètre

- Endpoints /calendar/matches, /calendar/matches/month, /calendar/matches/:id
- Générateur iCalendar RFC 5545 (VEVENT, VALARM, SEQUENCE, STATUS)
- Export /calendar/export.ics filtrable et décompte
- Abonnement webcal : /calendar/subscription-url, /calendar/subscription, rotation, révocation, /calendar/feed/:token.ics
- Fuseaux horaires, matchs reportés/annulés, cache Redis + ETag, job refresh-calendar-feed
- RGPD, tests, charge, documentation

## 🚫 Hors périmètre

- Écrans Flutter L-01 à L-15 (dépôt mobile) : l'API fournit le contrat, y compris les écrans de permission agenda L-12/L-13 gérés côté appareil
- Synchronisation de l'API football (groupe football-data)
- Notifications push de changement d'horaire (groupe NOTIF)

## 📚 Références

- CDC Global §2.9
- CDC Global §2.16.1 (RG-CAL-01 à 05)
- CDC Backend §3.7, §5.6, §7, §10.2
- src/models/platform.model.ts (CalendarSubscription)

## 🧩 Issues de l'épopée (24)

{{CHILDREN}}
