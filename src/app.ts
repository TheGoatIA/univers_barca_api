import 'express-async-errors';
import crypto from 'crypto';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Express, RequestHandler } from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import swaggerUi from 'swagger-ui-express';
import { env } from './config/env';
import { buildSpec } from './docs/swagger';
import { errorHandler, notFound } from './middleware/errorHandler';
import { maintenance } from './middleware/maintenance';
import { globalLimiter } from './middleware/rateLimiter';
import { requestContext } from './middleware/requestLogger';
import { buildRouter } from './routes';
import { health, healthDeep, metrics } from './controllers/health.controller';
import { sanitizeInput } from './utils/sanitize';
import { AppError } from './utils/appError';

const safeEqual = (a: string, b: string) => {
  const ha = crypto.createHash('sha256').update(a).digest();
  const hb = crypto.createHash('sha256').update(b).digest();
  return crypto.timingSafeEqual(ha, hb);
};

/** Basic auth pour /api-docs. */
const docsAuth: RequestHandler = (req, res, next) => {
  const [scheme, encoded] = (req.header('authorization') ?? '').split(' ');
  if (scheme === 'Basic' && encoded) {
    const [user, ...rest] = Buffer.from(encoded, 'base64').toString().split(':');
    if (safeEqual(user, env.SWAGGER_USER) && safeEqual(rest.join(':'), env.SWAGGER_PASSWORD))
      return next();
  }
  res.setHeader('WWW-Authenticate', 'Basic realm="Univers Barça API"');
  res.status(401).send('Authentification requise');
};

/** /metrics réservé aux IP autorisées (Prometheus interne). */
const metricsGuard: RequestHandler = (req, _res, next) => {
  const ip = (req.ip ?? '').replace('::ffff:', '');
  if (!env.METRICS_ALLOWED_IPS.includes(ip)) return next(AppError.forbidden('Accès refusé'));
  next();
};

export const createApp = (): Express => {
  const app = express();
  app.disable('x-powered-by');
  app.set('trust proxy', 1);

  app.use(requestContext);
  app.use(helmet());
  app.use(
    cors({
      origin: (origin, cb) => {
        if (!origin || env.CORS_ORIGINS.includes(origin)) return cb(null, true);
        cb(new Error('CORS_NOT_ALLOWED'));
      },
      credentials: true,
    }),
  );
  app.use(compression());

  // Sondes & supervision : avant limiteur/maintenance
  app.get('/health', health);
  app.get('/api/health', health);
  app.get('/health/deep', healthDeep);
  app.get('/metrics', metricsGuard, metrics);

  app.use(maintenance);
  app.use(globalLimiter());
  app.use(express.json({ limit: '1mb' }));
  app.use(express.urlencoded({ extended: false, limit: '1mb' }));
  app.use(cookieParser());
  app.use((req, _res, next) => {
    req.body = sanitizeInput(req.body);
    req.params = sanitizeInput(req.params);
    next();
  });
  app.use(hpp());

  const spec = buildSpec();
  app.get('/api-docs.json', docsAuth, (_req, res) => res.json(spec));
  app.use('/api-docs', docsAuth, swaggerUi.serve, swaggerUi.setup(spec));

  app.use(`/api/${env.API_VERSION}`, buildRouter());

  app.use(notFound);
  app.use(errorHandler);
  return app;
};
