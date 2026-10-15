import { RequestHandler } from 'express';
import { env } from '../config/env';

/** Mode maintenance (variable d'environnement) : tout sauf /health répond 503. */
export const maintenance: RequestHandler = (req, res, next) => {
  if (!env.MAINTENANCE_MODE || req.path.startsWith('/health')) return next();
  res.status(503).json({
    success: false,
    error: {
      code: 'MAINTENANCE',
      message: 'Service en maintenance, merci de réessayer plus tard',
    },
  });
};
