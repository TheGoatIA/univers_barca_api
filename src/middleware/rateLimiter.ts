import { Options, rateLimit } from 'express-rate-limit';
import { RedisStore } from 'rate-limit-redis';
import { getRedis } from '../config/redis';
import { isTest } from '../config/env';

const make = (prefix: string, windowMs: number, limit: number, message: string) => {
  const redis = getRedis();
  const opts: Partial<Options> = {
    windowMs,
    limit,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    skip: () => isTest && process.env.RATE_LIMIT_IN_TESTS !== 'true',
    handler: (_req, res) =>
      res.status(429).json({ success: false, error: { code: 'RATE_LIMITED', message } }),
  };
  if (redis) {
    opts.store = new RedisStore({
      prefix: `rl:${prefix}:`,
      sendCommand: (...args: string[]) => redis.call(args[0], ...args.slice(1)) as Promise<any>,
    });
  }
  return rateLimit(opts);
};

export const globalLimiter = () =>
  make('global', 60_000, 300, 'Trop de requêtes, réessayez dans une minute');
export const authLimiter = () =>
  make('auth', 15 * 60_000, 20, 'Trop de tentatives, réessayez dans 15 minutes');
export const sensitiveLimiter = () =>
  make('sensitive', 60 * 60_000, 5, 'Limite horaire atteinte pour cette action');
