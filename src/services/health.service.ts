import { isDatabaseHealthy } from '../config/database';
import { getStore } from '../config/redis';
import { env } from '../config/env';

const started = Date.now();

export const liveness = () => ({
  status: 'ok',
  uptime: Math.round((Date.now() - started) / 1000),
  version: env.APP_VERSION,
});

export const readiness = async () => {
  const [mongo, redis] = await Promise.all([isDatabaseHealthy(), getStore().ping()]);
  const status = mongo && redis ? 'ok' : 'degraded';
  return {
    status,
    checks: { mongo: mongo ? 'up' : 'down', redis: redis ? 'up' : 'down' },
    version: env.APP_VERSION,
    uptime: Math.round((Date.now() - started) / 1000),
  };
};
