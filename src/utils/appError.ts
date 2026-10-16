export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code: string;
  public readonly isOperational = true;
  public readonly details?: unknown;

  constructor(message: string, statusCode = 500, code = 'INTERNAL_ERROR', details?: unknown) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
    Object.setPrototypeOf(this, AppError.prototype);
    Error.captureStackTrace?.(this, this.constructor);
  }

  static badRequest(message = 'Requête invalide', details?: unknown) {
    return new AppError(message, 400, 'BAD_REQUEST', details);
  }
  static unauthorized(message = 'Authentification requise', code = 'UNAUTHORIZED') {
    return new AppError(message, 401, code);
  }
  static forbidden(message = 'Accès refusé', code = 'FORBIDDEN', details?: unknown) {
    return new AppError(message, 403, code, details);
  }
  static notFound(message = 'Ressource introuvable', code = 'NOT_FOUND') {
    return new AppError(message, 404, code);
  }
  static conflict(message = 'Conflit', code = 'CONFLICT') {
    return new AppError(message, 409, code);
  }
  static unprocessable(message = 'Entité non traitable', details?: unknown) {
    return new AppError(message, 422, 'VALIDATION_ERROR', details);
  }
  static tooManyRequests(message = 'Trop de requêtes, réessayez plus tard') {
    return new AppError(message, 429, 'RATE_LIMITED');
  }
  static notImplemented(message = 'Fonctionnalité non implémentée') {
    return new AppError(message, 501, 'NOT_IMPLEMENTED');
  }
  static internal(message = 'Erreur interne du serveur') {
    return new AppError(message, 500, 'INTERNAL_ERROR');
  }
}
