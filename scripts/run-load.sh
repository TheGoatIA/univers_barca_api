#!/bin/sh
# Lance un profil de charge k6 : ./scripts/run-load.sh <smoke|load|stress|spike|soak> [BASE_URL]
# Utilise k6 local s'il est installé, sinon l'image Docker officielle.
set -eu
PROFILE="${1:-smoke}"
BASE_URL="${2:-${BASE_URL:-http://localhost:5000}}"
cd "$(dirname "$0")/../tests/load"
mkdir -p results
if command -v k6 >/dev/null 2>&1; then
  BASE_URL="$BASE_URL" k6 run "$PROFILE.js"
else
  docker run --rm -i --network host -v "$PWD:/load" -w /load -e BASE_URL="$BASE_URL" \
    -e LOAD_VUS -e STRESS_VUS -e SPIKE_VUS -e SOAK_VUS -e SOAK_DURATION -e THINK_TIME -e USERS \
    -e P95_MS -e P99_MS -e ERROR_RATE grafana/k6:latest run "$PROFILE.js"
fi
