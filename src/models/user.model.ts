import { model, Schema } from 'mongoose';
import { baseOptions, LOCALES, withJson } from './_common';

const userSchema = withJson(
  new Schema(
    {
      email: {
        type: String,
        lowercase: true,
        trim: true,
        index: { unique: true, sparse: true },
      },
      passwordHash: { type: String, select: false },
      displayName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20,
      },
      locale: { type: String, enum: LOCALES, default: 'fr' },
      themePreference: {
        type: String,
        enum: ['system', 'light', 'dark'],
        default: 'system',
      },
      countryCode: {
        type: String,
        uppercase: true,
        minlength: 2,
        maxlength: 2,
      },
      city: { type: String, trim: true },
      avatarKey: { type: String },
      favoritePlayerId: { type: Schema.Types.ObjectId, ref: 'Player' },
      supporterSince: { type: Number, min: 1899 },
      timezone: { type: String, default: 'Europe/Madrid' },
      emailVerifiedAt: { type: Date },
      emailVerificationTokenHash: { type: String, select: false },
      emailVerificationExpiresAt: { type: Date, select: false },
      passwordResetTokenHash: { type: String, select: false },
      passwordResetExpiresAt: { type: Date, select: false },
      passwordChangedAt: { type: Date },
      authProviders: [
        {
          provider: { type: String, enum: ['google', 'apple'] },
          providerUserId: String,
          _id: false,
        },
      ],
      status: {
        type: String,
        enum: ['active', 'suspended', 'banned', 'deleted'],
        default: 'active',
        index: true,
      },
      suspendedUntil: { type: Date },
      lastActiveAt: { type: Date },
      termsAcceptedAt: { type: Date },
      deletedAt: { type: Date },
    },
    baseOptions,
  ),
);

userSchema.index({ countryCode: 1, city: 1 });

export const User = model<any>('User', userSchema);
