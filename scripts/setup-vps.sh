#!/bin/bash
# Préparation d'un VPS Ubuntu (à exécuter UNE fois en root). Voir docs/DEPLOYMENT.md.
set -euo pipefail
PROJECT="${PROJECT:-univers-barca}"
DEPLOY_USER="${DEPLOY_USER:-deploy}"
apt-get update && apt-get install -y ca-certificates curl git ufw fail2ban unattended-upgrades
command -v docker >/dev/null || curl -fsSL https://get.docker.com | sh
id "$DEPLOY_USER" >/dev/null 2>&1 || adduser --disabled-password --gecos "" "$DEPLOY_USER"
usermod -aG docker "$DEPLOY_USER"
mkdir -p "/var/www/$PROJECT/api" "/var/www/$PROJECT/backups"
chown -R "$DEPLOY_USER:$DEPLOY_USER" "/var/www/$PROJECT"
ufw default deny incoming && ufw default allow outgoing
ufw allow OpenSSH && ufw allow 80/tcp && ufw allow 443/tcp && ufw --force enable
systemctl enable --now fail2ban
echo "✅ VPS prêt. Ajoutez la clé publique de déploiement dans ~$DEPLOY_USER/.ssh/authorized_keys"
echo "   puis créez /var/www/$PROJECT/.env.staging et .env.production (modèle : .env.example)."
