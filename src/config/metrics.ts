import client from 'prom-client';

export const registry = new client.Registry();
client.collectDefaultMetrics({ register: registry, prefix: 'ub_' });

export const httpDuration = new client.Histogram({
  name: 'ub_http_request_duration_seconds',
  help: 'Durée des requêtes HTTP',
  labelNames: ['method', 'route', 'status'],
  buckets: [0.01, 0.05, 0.1, 0.3, 0.5, 1, 2, 5],
  registers: [registry],
});

export const jobsFailed = new client.Counter({
  name: 'ub_jobs_failed_total',
  help: 'Nombre de jobs BullMQ en échec',
  labelNames: ['queue'],
  registers: [registry],
});

export const authFailures = new client.Counter({
  name: 'ub_auth_failures_total',
  help: "Nombre d'échecs d'authentification",
  labelNames: ['reason'],
  registers: [registry],
});
