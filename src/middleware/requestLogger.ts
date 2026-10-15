import { randomUUID } from 'crypto';
import { RequestHandler } from 'express';
import { logger } from '../utils/logger';
import { httpDuration } from '../config/metrics';

export const requestContext: RequestHandler = (req, res, next) => {
  const incoming = req.header('x-request-id');
  req.traceId = incoming && /^[\w-]{8,64}$/.test(incoming) ? incoming : randomUUID();
  res.setHeader('X-Request-Id', req.traceId);
  const end = httpDuration.startTimer();
  res.on('finish', () => {
    const route = req.route?.path ? `${req.baseUrl}${req.route.path}` : 'unmatched';
    end({ method: req.method, route, status: String(res.statusCode) });
    if (req.originalUrl.startsWith('/health') || req.originalUrl === '/metrics') return;
    logger.http('http', {
      method: req.method,
      url: req.originalUrl.split('?')[0],
      status: res.statusCode,
      traceId: req.traceId,
    });
  });
  next();
};
