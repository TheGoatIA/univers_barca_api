> **API-WALL** · Épopée · Phase 3 — Fonctionnalités avancées

## 🎯 Objectif

Permettre à l'utilisateur de générer des fonds d'écran aux couleurs du Barça à partir d'un formulaire guidé (joueur, style, occasion), via une file asynchrone dédiée, avec modération du prompt et de l'image, respect strict des droits d'image (aucun logo ni marque du club), quotas quotidiens, galerie personnelle, téléchargement/partage et purge conforme au RGPD.

## 📦 Périmètre

- Modèle GeneratedWallpaper durci, catalogue de styles/occasions et constructeur de prompt
- Endpoints options, check, création (202 idempotente), statut, galerie, détail/favori/suppression, quota, retry, téléchargement, partage, signalement
- Worker BullMQ ai-generation, fournisseur d'images simulé et fallback, stockage objet S3, miniatures
- Modération prompt/image, politique droits d'image, kill switch du module
- Journalisation des coûts (WH-04), quotas (WI-06), modération a posteriori côté admin
- Purge, RGPD, cache, rate limiting, tests et documentation

## 🚫 Hors périmètre

- Interface mobile des wallpapers (groupe mobile M)
- Application du fond d'écran natif et pellicule (mobile)
- Écrans admin WH/WI (dépôt admin)
- Assistant IA texte (groupe IA)
- Moteur générique de notifications push (groupe NOTIF)

## 📚 Références

- CDC Backend §3.9
- CDC Backend §10.2
- CDC Backend §11.3
- CDC Global §2.10
- CDC Global §10.1
- CDC Global §10.2
- CDC Global §12.1
- CDC Admin §6

## 🧩 Issues de l'épopée (31)

{{CHILDREN}}
