import { Queue, Worker, Job, JobsOptions } from 'bullmq';
import { getRedis } from '../config/redis';
import { jobsFailed } from '../config/metrics';
import { logger } from '../utils/logger';

/** Une file par domaine + file « dead letter » pour les jobs ayant épuisé leurs tentatives. */
export const QUEUE_NAMES = [
  'email',
  'notifications',
  'football-sync',
  'ai-generation',
  'rgpd',
] as const;
export type QueueName = (typeof QUEUE_NAMES)[number];

const defaultJobOptions: JobsOptions = {
  attempts: 5,
  backoff: { type: 'exponential', delay: 2000 },
  removeOnComplete: 1000,
  removeOnFail: 5000,
};

const queues = new Map<string, Queue>();
const workers: Worker[] = [];

const queueFor = (name: string): Queue | null => {
  const connection = getRedis();
  if (!connection) return null;
  if (!queues.has(name)) queues.set(name, new Queue(name, { connection, defaultJobOptions }));
  return queues.get(name)!;
};

export const enqueue = async (
  name: QueueName,
  jobName: string,
  data: unknown,
  opts?: JobsOptions,
) => {
  const q = queueFor(name);
  if (!q) {
    logger.warn('Redis absent : job ignoré', { queue: name, jobName });
    return null;
  }
  return q.add(jobName, data, opts);
};

export const registerWorker = (
  name: QueueName,
  processor: (job: Job) => Promise<void>,
  concurrency = 5,
) => {
  const connection = getRedis();
  if (!connection) return null;
  const worker = new Worker(name, processor, { connection, concurrency });
  worker.on('failed', async (job, err) => {
    jobsFailed.inc({ queue: name });
    logger.error('Job en échec', {
      queue: name,
      id: job?.id,
      err: err.message,
    });
    if (job && job.attemptsMade >= (job.opts.attempts ?? 1)) {
      await queueFor('dead-letter')?.add(`${name}:${job.name}`, {
        data: job.data,
        error: err.message,
      });
    }
  });
  workers.push(worker);
  return worker;
};

export const closeQueues = async () => {
  await Promise.all(workers.map((w) => w.close()));
  await Promise.all([...queues.values()].map((q) => q.close()));
  workers.length = 0;
  queues.clear();
};
