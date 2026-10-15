import './tracing';
import http from 'http';
import { createApp } from './app';
import { env } from './config/env';
import { connectDatabase, disconnectDatabase } from './config/database';
import { closeRedis } from './config/redis';
import { shutdownTracing } from './tracing';
import { logger } from './utils/logger';
import { startScheduler, stopScheduler } from './jobs/scheduler';
import { closeQueues } from './jobs/queues';

const bootstrap = async () => {
  await connectDatabase();
  const app = createApp();
  const server = http.createServer(app);
  server.keepAliveTimeout = 65_000;
  server.listen(env.PORT, () =>
    logger.info(`API Univers Barça démarrée`, {
      port: env.PORT,
      env: env.NODE_ENV,
      version: env.APP_VERSION,
    }),
  );
  if (process.env.RUN_CRON !== 'false' && (process.env.NODE_APP_INSTANCE ?? '0') === '0')
    startScheduler();

  let closing = false;
  const shutdown = async (signal: string) => {
    if (closing) return;
    closing = true;
    logger.info(`Arrêt gracieux (${signal})`);
    const force = setTimeout(() => process.exit(1), 25_000);
    force.unref();
    server.close(async () => {
      stopScheduler();
      await closeQueues();
      await disconnectDatabase();
      await closeRedis();
      await shutdownTracing();
      process.exit(0);
    });
  };
  process.on('SIGTERM', () => void shutdown('SIGTERM'));
  process.on('SIGINT', () => void shutdown('SIGINT'));
  process.on('unhandledRejection', (r) =>
    logger.error('unhandledRejection', { reason: String(r) }),
  );
  process.on('uncaughtException', (e) => {
    logger.error('uncaughtException', { err: e.message, stack: e.stack });
    void shutdown('uncaughtException');
  });
};

bootstrap().catch((e) => {
  logger.error('Échec du démarrage', { err: e.message });
  process.exit(1);
});
