import 'express';

declare global {
  namespace Express {
    interface Request {
      traceId?: string;
      auth?: { id: string; role: string; jti: string; kind: 'user' | 'admin' };
    }
  }
}
export {};
