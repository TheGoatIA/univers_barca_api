import Redis from 'ioredis';
import { env, isProd } from './env';
import { logger } from '../utils/logger';

export interface KeyValueStore {
  get(key: string): Promise<string | null>;
  set(key: string, value: string, ttlSeconds?: number): Promise<void>;
  del(key: string): Promise<void>;
  incr(key: string, ttlSeconds?: number): Promise<number>;
  ping(): Promise<boolean>;
}

class MemoryStore implements KeyValueStore {
  private data = new Map<string, { v: string; exp?: number }>();
  private alive(key: string) {
    const e = this.data.get(key);
    if (!e) return undefined;
    if (e.exp && e.exp < Date.now()) {
      this.data.delete(key);
      return undefined;
    }
    return e;
  }
  async get(key: string) {
    return this.alive(key)?.v ?? null;
  }
  async set(key: string, value: string, ttl?: number) {
    this.data.set(key, {
      v: value,
      exp: ttl ? Date.now() + ttl * 1000 : undefined,
    });
  }
  async del(key: string) {
    this.data.delete(key);
  }
  async incr(key: string, ttl?: number) {
    const cur = Number(this.alive(key)?.v ?? 0) + 1;
    await this.set(key, String(cur), ttl);
    return cur;
  }
  async ping() {
    return true;
  }
}

class RedisStore implements KeyValueStore {
  constructor(private readonly client: Redis) {}
  async get(key: string) {
    return this.client.get(key);
  }
  async set(key: string, value: string, ttl?: number) {
    if (ttl) await this.client.set(key, value, 'EX', ttl);
    else await this.client.set(key, value);
  }
  async del(key: string) {
    await this.client.del(key);
  }
  async incr(key: string, ttl?: number) {
    const n = await this.client.incr(key);
    if (n === 1 && ttl) await this.client.expire(key, ttl);
    return n;
  }
  async ping() {
    try {
      return (await this.client.ping()) === 'PONG';
    } catch {
      return false;
    }
  }
}

let redisClient: Redis | null = null;
let store: KeyValueStore | null = null;

/** Client ioredis brut (BullMQ, rate limiting). Null si REDIS_URL est vide (dev/test uniquement). */
export const getRedis = (): Redis | null => {
  if (!env.REDIS_URL) {
    if (isProd) throw new Error('REDIS_URL est obligatoire en production');
    return null;
  }
  if (!redisClient) {
    redisClient = new Redis(env.REDIS_URL, {
      maxRetriesPerRequest: null,
      lazyConnect: false,
    });
    redisClient.on('error', (err) => logger.error('Erreur Redis', { err: err.message }));
  }
  return redisClient;
};

/** Magasin clé/valeur : Redis si disponible, sinon mémoire (non-prod seulement). */
export const getStore = (): KeyValueStore => {
  if (!store) {
    const client = getRedis();
    store = client ? new RedisStore(client) : new MemoryStore();
    if (!client)
      logger.warn('Redis non configuré : magasin en mémoire (non-production uniquement)');
  }
  return store;
};

export const closeRedis = async () => {
  if (redisClient) await redisClient.quit().catch(() => undefined);
  redisClient = null;
  store = null;
};
