#!/bin/sh
# Restauration. Usage : MONGODB_URI=… ./restore.sh /backups/fichier.archive.gz   (destructif : --drop)
set -eu
[ $# -eq 1 ] || { echo "Usage: $0 <archive.gz>"; exit 2; }
printf "⚠️  Restauration destructive sur %s — taper 'oui' pour continuer : " "${MONGODB_URI%%\?*}"
read -r ans
[ "$ans" = "oui" ] || { echo "Annulé"; exit 1; }
mongorestore --uri="$MONGODB_URI" --archive="$1" --gzip --drop
