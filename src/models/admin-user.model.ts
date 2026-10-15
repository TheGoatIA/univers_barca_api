import { model, Schema } from 'mongoose';
import { baseOptions, withJson } from './_common';

export const ADMIN_ROLES = ['content-manager', 'moderator', 'super-admin'] as const;
export type AdminRole = (typeof ADMIN_ROLES)[number];

const adminUserSchema = withJson(
  new Schema(
    {
      email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true,
      },
      name: { type: String, required: true },
      passwordHash: { type: String, select: false },
      role: { type: String, enum: ADMIN_ROLES, required: true },
      status: {
        type: String,
        enum: ['invited', 'active', 'disabled'],
        default: 'invited',
      },
      totpSecret: { type: String, select: false },
      totpEnabled: { type: Boolean, default: false },
      inviteTokenHash: { type: String, select: false },
      inviteExpiresAt: { type: Date, select: false },
      failedLogins: { type: Number, default: 0 },
      lockedUntil: { type: Date },
      lastLoginAt: { type: Date },
    },
    baseOptions,
  ),
);

export const AdminUser = model<any>('AdminUser', adminUserSchema);

const adminSessionSchema = new Schema(
  {
    adminId: {
      type: Schema.Types.ObjectId,
      ref: 'AdminUser',
      required: true,
      index: true,
    },
    tokenHash: { type: String, required: true, unique: true },
    userAgent: String,
    ip: String,
    expiresAt: { type: Date, required: true },
    revokedAt: Date,
    lastActivityAt: { type: Date, default: Date.now },
  },
  baseOptions,
);
adminSessionSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
export const AdminSession = model<any>('AdminSession', adminSessionSchema);
