#!/bin/sh
# Sauvegarde MongoDB compressée + rotation (7 jours par défaut). Usage : MONGODB_URI=… ./backup.sh
set -eu
DIR="${BACKUP_DIR:-/backups}"
KEEP_DAYS="${BACKUP_KEEP_DAYS:-7}"
STAMP="$(date +%Y%m%d-%H%M%S)"
mkdir -p "$DIR"
mongodump --uri="$MONGODB_URI" --archive="$DIR/univers_barca-$STAMP.archive.gz" --gzip
find "$DIR" -name 'univers_barca-*.archive.gz' -mtime +"$KEEP_DAYS" -delete
echo "✅ Sauvegarde : $DIR/univers_barca-$STAMP.archive.gz"
