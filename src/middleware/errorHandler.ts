import { ErrorRequestHandler, RequestHandler } from 'express';
import { AppError } from '../utils/appError';
import { logger } from '../utils/logger';
import { isProd } from '../config/env';

export const notFound: RequestHandler = (req, _res, next) => {
  next(
    AppError.notFound(`Route introuvable : ${req.method} ${req.originalUrl}`, 'ROUTE_NOT_FOUND'),
  );
};

const normalize = (err: any): AppError => {
  if (err instanceof AppError) return err;
  if (err?.name === 'ValidationError' && err.errors)
    return AppError.unprocessable('Validation échouée', Object.keys(err.errors));
  if (err?.name === 'CastError') return AppError.badRequest('Identifiant invalide');
  if (err?.code === 11000) return AppError.conflict('Ressource déjà existante', 'DUPLICATE');
  if (err?.type === 'entity.parse.failed') return AppError.badRequest('JSON invalide');
  if (err?.type === 'entity.too.large')
    return new AppError('Requête trop volumineuse', 413, 'PAYLOAD_TOO_LARGE');
  if (err?.message === 'CORS_NOT_ALLOWED')
    return AppError.forbidden('Origine non autorisée', 'CORS');
  return new AppError('Erreur interne du serveur', 500, 'INTERNAL_ERROR');
};

/** Format d'erreur unique : { success:false, error:{ code, message, details?, traceId } } */
export const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
  const e = normalize(err);
  if (e.statusCode >= 500)
    logger.error('Erreur serveur', {
      err: err?.message,
      stack: err?.stack,
      traceId: req.traceId,
      path: req.originalUrl,
    });
  else
    logger.warn('Erreur client', {
      code: e.code,
      status: e.statusCode,
      path: req.originalUrl,
      traceId: req.traceId,
    });
  res.status(e.statusCode).json({
    success: false,
    error: {
      code: e.code,
      message: e.message,
      ...(e.details ? { details: e.details } : {}),
      traceId: req.traceId,
      ...(!isProd && e.statusCode >= 500 ? { stack: err?.stack } : {}),
    },
  });
};
