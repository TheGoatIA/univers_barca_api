import cron, { ScheduledTask } from 'node-cron';
import { RefreshToken, User } from '../models';
import { logger } from '../utils/logger';

const tasks: ScheduledTask[] = [];

/** Purge RGPD : suppression définitive des comptes marqués « deleted » depuis plus de 30 jours. */
export const purgeDeletedAccounts = async (now = new Date()) => {
  const limit = new Date(now.getTime() - 30 * 86_400_000);
  const res = await User.deleteMany({
    status: 'deleted',
    deletedAt: { $lt: limit },
  });
  logger.info('Purge RGPD', { deleted: res.deletedCount });
  return res.deletedCount;
};

export const startScheduler = () => {
  tasks.push(
    cron.schedule('0 3 * * *', () => void purgeDeletedAccounts(), {
      timezone: 'Europe/Madrid',
    }),
  );
  tasks.push(
    cron.schedule('30 3 * * *', async () => {
      await RefreshToken.deleteMany({
        revokedAt: { $lt: new Date(Date.now() - 30 * 86_400_000) },
      });
    }),
  );
  logger.info('Planificateur démarré', { tasks: tasks.length });
};

export const stopScheduler = () => {
  tasks.forEach((t) => t.stop());
  tasks.length = 0;
};
