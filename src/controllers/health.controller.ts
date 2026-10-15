import { RequestHandler } from 'express';
import { liveness, readiness } from '../services/health.service';
import { registry } from '../config/metrics';

export const health: RequestHandler = (_req, res) => {
  res.json(liveness());
};
export const healthDeep: RequestHandler = async (_req, res) => {
  const r = await readiness();
  res.status(r.status === 'ok' ? 200 : 503).json(r);
};
export const metrics: RequestHandler = async (_req, res) => {
  res.setHeader('Content-Type', registry.contentType);
  res.end(await registry.metrics());
};
