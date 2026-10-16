import { model, Schema } from 'mongoose';
import { baseOptions, withJson } from './_common';
import { normalizeReportStatus, REPORT_STATUSES } from './moderation.constants';

const reportSchema = withJson(
  new Schema(
    {
      targetType: {
        type: String,
        enum: ['group_post', 'user', 'chat_message', 'wallpaper', 'group'],
        required: true,
      },
      targetId: { type: Schema.Types.ObjectId, required: true },
      reporterId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
      reason: { type: String, required: true },
      autoSeverity: {
        type: String,
        enum: ['low', 'review', 'urgent'],
        default: 'low',
      },
      status: {
        type: String,
        enum: [...REPORT_STATUSES],
        // Les valeurs héritées (pending, in-progress, ignored) sont converties à l'écriture/requête.
        set: normalizeReportStatus,
        default: 'open',
        index: true,
      },
      snapshot: Schema.Types.Mixed,
    },
    baseOptions,
  ),
);
reportSchema.index({ status: 1, autoSeverity: 1, createdAt: 1 });
export const ModerationReport = model<any>('ModerationReport', reportSchema);

/** Journal immuable des actions de modération (qui, quoi, quand, pourquoi). */
const actionSchema = new Schema(
  {
    reportId: { type: Schema.Types.ObjectId, ref: 'ModerationReport' },
    adminId: { type: Schema.Types.ObjectId, ref: 'AdminUser', required: true },
    targetUserId: { type: Schema.Types.ObjectId, ref: 'User' },
    actionType: {
      type: String,
      enum: ['ignore', 'hide', 'warn', 'suspend', 'ban', 'unban'],
      required: true,
    },
    severity: { type: String, enum: ['low', 'medium', 'high'] },
    recidivismRank: Number,
    justification: String,
    suspendedUntil: Date,
  },
  { ...baseOptions, timestamps: { createdAt: true, updatedAt: false } },
);
export const ModerationAction = model<any>('ModerationAction', actionSchema);

/** Piste d'audit des actions admin (publication, config, modération). Immuable. */
const auditSchema = new Schema(
  {
    adminId: { type: Schema.Types.ObjectId, ref: 'AdminUser', index: true },
    adminName: String,
    action: { type: String, required: true, index: true },
    entityType: String,
    entityId: String,
    before: Schema.Types.Mixed,
    after: Schema.Types.Mixed,
    justification: String,
    ip: String,
  },
  { ...baseOptions, timestamps: { createdAt: true, updatedAt: false } },
);
auditSchema.index({ createdAt: -1 });
export const AuditLog = model<any>('AuditLog', auditSchema);
