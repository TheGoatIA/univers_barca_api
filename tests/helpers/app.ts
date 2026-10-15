import mongoose from 'mongoose';
import request from 'supertest';
import { createApp } from '../../src/app';

export const app = createApp();
export const api = () => request(app);

export const connect = async () => {
  const uri = (process.env.MONGODB_URI as string).replace(
    /\/([^/?]+)(\?|$)/,
    `/ub_test_${process.pid}_${Date.now()}$2`,
  );
  await mongoose.connect(uri);
};
export const cleanup = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.disconnect();
};
export const validUser = (n = 1) => ({
  email: `user${n}@example.com`,
  password: 'Passw0rdSecure',
  displayName: `Culer${n}x`,
  consents: { terms: true, privacy: true, notifications: false },
});
