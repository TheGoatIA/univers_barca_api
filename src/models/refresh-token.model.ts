import { model, Schema } from 'mongoose';
import { baseOptions } from './_common';

/** Refresh tokens hashés, rotation à chaque usage, détection de réutilisation par « famille ». */
const refreshTokenSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    familyId: { type: String, required: true, index: true },
    tokenHash: { type: String, required: true, unique: true },
    deviceId: { type: String },
    platform: { type: String, enum: ['ios', 'android', 'web'] },
    userAgent: { type: String },
    ip: { type: String },
    expiresAt: { type: Date, required: true },
    revokedAt: { type: Date },
    replacedByHash: { type: String },
    lastUsedAt: { type: Date },
  },
  baseOptions,
);
refreshTokenSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const RefreshToken = model<any>('RefreshToken', refreshTokenSchema);
