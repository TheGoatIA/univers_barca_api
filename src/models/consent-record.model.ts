import { model, Schema } from 'mongoose';
import { baseOptions } from './_common';

/** Historique RGPD : jamais écrasé — chaque changement de consentement crée une ligne. */
const consentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    type: {
      type: String,
      enum: ['terms', 'privacy', 'geolocation', 'notifications', 'analytics'],
      required: true,
    },
    granted: { type: Boolean, required: true },
    version: { type: String, default: '1.0' },
    grantedAt: { type: Date },
    revokedAt: { type: Date },
  },
  baseOptions,
);
consentSchema.index({ userId: 1, type: 1, createdAt: -1 });

export const ConsentRecord = model<any>('ConsentRecord', consentSchema);
