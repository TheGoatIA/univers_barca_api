import dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config({ quiet: true });

const isProd = process.env.NODE_ENV === 'production';
const isTest = process.env.NODE_ENV === 'test';

const schema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'test', 'staging', 'production')
    .default('development'),
  PORT: Joi.number().port().default(5000),
  API_VERSION: Joi.string().default('v1'),
  LOG_LEVEL: Joi.string().valid('error', 'warn', 'info', 'http', 'debug').default('info'),
  CORS_ORIGINS: Joi.string().allow('').default(''),

  MONGODB_URI: Joi.string()
    .uri({ scheme: ['mongodb', 'mongodb+srv'] })
    .required(),
  REDIS_URL: isProd ? Joi.string().uri().required() : Joi.string().uri().allow('').default(''),

  JWT_ACCESS_SECRET: Joi.string().min(32).required(),
  JWT_REFRESH_SECRET: Joi.string().min(32).invalid(Joi.ref('JWT_ACCESS_SECRET')).required(),
  JWT_ACCESS_TTL: Joi.string().default('15m'),
  JWT_REFRESH_TTL_DAYS: Joi.number().integer().min(1).max(90).default(30),

  SWAGGER_USER: Joi.string().default('docs'),
  SWAGGER_PASSWORD: isProd
    ? Joi.string().min(16).required()
    : Joi.string().default('docs-dev-password'),
  METRICS_ALLOWED_IPS: Joi.string().default('127.0.0.1,::1'),
  OTEL_EXPORTER_OTLP_ENDPOINT: Joi.string().allow('').default(''),
  OTEL_SERVICE_NAME: Joi.string().default('univers-barca-api'),

  ADMIN_BOOTSTRAP_EMAIL: Joi.string().email().allow('').default(''),
  ADMIN_BOOTSTRAP_PASSWORD: Joi.string().allow('').default(''),

  FOOTBALL_API_KEY: Joi.string().allow('').default(''),
  AI_TEXT_API_KEY: Joi.string().allow('').default(''),
  AI_IMAGE_API_KEY: Joi.string().allow('').default(''),
  FCM_SERVICE_ACCOUNT_BASE64: Joi.string().allow('').default(''),
  SLACK_WEBHOOK_URL: Joi.string().allow('').default(''),
  MAINTENANCE_MODE: Joi.boolean().default(false),
  APP_VERSION: Joi.string().default('dev'),
}).unknown(true);

export interface Env {
  NODE_ENV: 'development' | 'test' | 'staging' | 'production';
  PORT: number;
  API_VERSION: string;
  LOG_LEVEL: string;
  CORS_ORIGINS: string[];
  MONGODB_URI: string;
  REDIS_URL: string;
  JWT_ACCESS_SECRET: string;
  JWT_REFRESH_SECRET: string;
  JWT_ACCESS_TTL: string;
  JWT_REFRESH_TTL_DAYS: number;
  SWAGGER_USER: string;
  SWAGGER_PASSWORD: string;
  METRICS_ALLOWED_IPS: string[];
  OTEL_EXPORTER_OTLP_ENDPOINT: string;
  OTEL_SERVICE_NAME: string;
  ADMIN_BOOTSTRAP_EMAIL: string;
  ADMIN_BOOTSTRAP_PASSWORD: string;
  FOOTBALL_API_KEY: string;
  AI_TEXT_API_KEY: string;
  AI_IMAGE_API_KEY: string;
  FCM_SERVICE_ACCOUNT_BASE64: string;
  SLACK_WEBHOOK_URL: string;
  MAINTENANCE_MODE: boolean;
  APP_VERSION: string;
}

/** Valide et normalise l'environnement. Échec FATAL au démarrage si un invariant de sécurité est violé. */
export const loadEnv = (source: NodeJS.ProcessEnv = process.env): Env => {
  const { value, error } = schema.validate(source, {
    abortEarly: false,
    stripUnknown: false,
  });
  if (error) {
    const lines = error.details.map((d) => `  - ${d.message}`).join('\n');
    throw new Error(`Configuration d'environnement invalide :\n${lines}`);
  }
  return {
    ...value,
    CORS_ORIGINS: String(value.CORS_ORIGINS || '')
      .split(',')
      .map((s: string) => s.trim())
      .filter(Boolean),
    METRICS_ALLOWED_IPS: String(value.METRICS_ALLOWED_IPS)
      .split(',')
      .map((s: string) => s.trim())
      .filter(Boolean),
  } as Env;
};

export const env: Env = loadEnv();
export { isProd, isTest };
