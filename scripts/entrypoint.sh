#!/bin/sh
# Point d'entrée : exécute les migrations avant de lancer l'application (désactivable : RUN_MIGRATIONS=false).
set -e
if [ "${RUN_MIGRATIONS:-true}" = "true" ]; then
  echo "▶ Migrations MongoDB…"
  npx migrate-mongo up || { echo "❌ Migration en échec"; exit 1; }
fi
exec "$@"
