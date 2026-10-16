#!/usr/bin/env bash
# Remplace l'écusson officiel par le logo de substitution (README et documentation).
set -euo pipefail
cd "$(dirname "$0")/.."
cp docs/assets/logo-alt/logo.png docs/assets/logo.png
echo "Logo de substitution appliqué. Pensez à mettre à jour NOTICE.md."
