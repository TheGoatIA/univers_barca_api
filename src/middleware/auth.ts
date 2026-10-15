import { RequestHandler } from 'express';
import { AppError } from '../utils/appError';
import { verifyAccessToken } from '../services/token.service';
import { authFailures } from '../config/metrics';

const bearer = (header?: string) => (header?.startsWith('Bearer ') ? header.slice(7) : null);

/** Exige un access token valide (signature, expiration, blacklist Redis). */
export const protect: RequestHandler = async (req, _res, next) => {
  const token = bearer(req.header('authorization'));
  if (!token) {
    authFailures.inc({ reason: 'missing' });
    return next(AppError.unauthorized());
  }
  try {
    req.auth = await verifyAccessToken(token);
    next();
  } catch (e) {
    authFailures.inc({ reason: 'invalid' });
    next(e);
  }
};

/** Authentification optionnelle (endpoints publics enrichis si connecté). */
export const identify: RequestHandler = async (req, _res, next) => {
  const token = bearer(req.header('authorization'));
  if (token) {
    try {
      req.auth = await verifyAccessToken(token);
    } catch {
      /* ignoré : contenu public */
    }
  }
  next();
};

/** Restreint par rôle (RBAC back-office). `kind` doit être admin. */
export const restrictTo =
  (...roles: string[]): RequestHandler =>
  (req, _res, next) => {
    if (!req.auth) return next(AppError.unauthorized());
    if (req.auth.kind !== 'admin' || !roles.includes(req.auth.role))
      return next(AppError.forbidden('Permissions insuffisantes'));
    next();
  };

export const userOnly: RequestHandler = (req, _res, next) => {
  if (req.auth?.kind !== 'user') return next(AppError.forbidden('Réservé aux utilisateurs'));
  next();
};
