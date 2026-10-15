import mongoose from 'mongoose';
import { env } from './env';
import { logger } from '../utils/logger';

mongoose.set('strictQuery', true);

export const connectDatabase = async (): Promise<typeof mongoose> => {
  const conn = await mongoose.connect(env.MONGODB_URI, {
    serverSelectionTimeoutMS: 10_000,
    maxPoolSize: 20,
  });
  logger.info('MongoDB connecté', {
    host: conn.connection.host,
    db: conn.connection.name,
  });
  return conn;
};

export const disconnectDatabase = async () => {
  await mongoose.disconnect();
};

export const isDatabaseHealthy = async (): Promise<boolean> => {
  try {
    if (mongoose.connection.readyState !== 1 || !mongoose.connection.db) return false;
    await mongoose.connection.db.admin().ping();
    return true;
  } catch {
    return false;
  }
};
