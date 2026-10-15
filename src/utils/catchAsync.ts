import { NextFunction, Request, RequestHandler, Response } from 'express';

/** Enveloppe un handler async : toute erreur est transmise au middleware errorHandler. */
export const catchAsync =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown>): RequestHandler =>
  (req, res, next) => {
    fn(req, res, next).catch(next);
  };
