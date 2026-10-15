import { RequestHandler } from 'express';
import Joi from 'joi';
import { AppError } from '../utils/appError';

type Target = 'body' | 'query' | 'params';

/** Valide et assainit (stripUnknown) une partie de la requête. Réponse 422 détaillée. */
export const validate =
  (schema: Joi.ObjectSchema, target: Target = 'body'): RequestHandler =>
  (req, _res, next) => {
    const { value, error } = schema.validate(req[target], {
      abortEarly: false,
      stripUnknown: true,
      convert: true,
    });
    if (error) {
      return next(
        AppError.unprocessable(
          'Validation échouée',
          error.details.map((d) => ({
            field: d.path.join('.'),
            message: d.message,
          })),
        ),
      );
    }
    if (target === 'query')
      Object.defineProperty(req, 'query', {
        value,
        writable: true,
        configurable: true,
      });
    else (req as any)[target] = value;
    next();
  };
