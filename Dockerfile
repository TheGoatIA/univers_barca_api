# syntax=docker/dockerfile:1.7
# ─── Stage 1 : Builder ───────────────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app
RUN apk add --no-cache python3 make g++
COPY package*.json ./
# --ignore-scripts : évite que Husky tente de s'installer pendant le build ; argon2 est reconstruit explicitement
RUN npm ci --ignore-scripts && npm rebuild argon2
COPY tsconfig.json tsconfig.build.json migrate-mongo-config.js ./
COPY scripts ./scripts
COPY src ./src
RUN npm run build

# ─── Stage 2 : Seeder (peuplement optionnel, profil « tools ») ───────────────
FROM builder AS seeder
CMD ["npx", "tsx", "scripts/seed-data.ts", "--force"]

# ─── Stage 3 : Production ────────────────────────────────────────────────────
FROM node:22-alpine AS production
RUN apk add --no-cache tini curl mongodb-tools python3 make g++ \
 && npm install -g pm2@latest
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --omit=dev --ignore-scripts && npm rebuild argon2 && npm cache clean --force \
 && apk del python3 make g++
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/swagger.json ./
COPY --from=builder /app/migrate-mongo-config.js ./
COPY --from=builder /app/scripts/migrations ./scripts/migrations
COPY ecosystem.config.js ./
COPY scripts/entrypoint.sh /entrypoint.sh
COPY scripts/backup.sh /scripts/backup.sh
RUN chmod +x /entrypoint.sh /scripts/backup.sh \
 && mkdir -p /app/logs /backups && chown -R node:node /app/logs /backups
ARG APP_VERSION=dev
ENV APP_VERSION=$APP_VERSION
USER node
EXPOSE 5000
HEALTHCHECK --interval=30s --timeout=10s --start-period=20s --retries=3 \
  CMD node -e "require('http').get('http://localhost:5000/health',(r)=>process.exit(r.statusCode===200?0:1)).on('error',()=>process.exit(1))"
ENTRYPOINT ["/sbin/tini", "--", "/entrypoint.sh"]
CMD ["pm2-runtime", "ecosystem.config.js", "--env", "production"]
