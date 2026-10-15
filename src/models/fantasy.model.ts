import { model, Schema } from 'mongoose';
import { baseOptions } from './_common';

const fantasyTeamSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    gameweek: { type: Number, required: true },
    formation: {
      type: String,
      enum: ['4-3-3', '4-2-3-1', '3-5-2'],
      default: '4-3-3',
    },
    captainPlayerId: Schema.Types.ObjectId,
    selections: [
      {
        playerId: { type: Schema.Types.ObjectId, ref: 'Player' },
        roleSlot: String,
        _id: false,
      },
    ],
    points: { type: Number, default: 0 },
    lockedAt: Date,
    computedAt: Date,
  },
  baseOptions,
);
fantasyTeamSchema.index({ userId: 1, gameweek: 1 }, { unique: true });
export const FantasyTeam = model<any>('FantasyTeam', fantasyTeamSchema);

export const FantasyLeague = model(
  'FantasyLeague',
  new Schema(
    {
      name: String,
      ownerId: Schema.Types.ObjectId,
      inviteCode: { type: String, unique: true },
      memberIds: [Schema.Types.ObjectId],
    },
    baseOptions,
  ),
);

const academyPlayerSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    name: { type: String, required: true },
    position: String,
    age: Number,
    foot: { type: String, enum: ['left', 'right', 'both'] },
    attributes: {
      technique: Number,
      physique: Number,
      intelligence: Number,
      vitesse: Number,
      mental: Number,
      finition: Number,
    },
    form: { type: Number, default: 70 },
    fatigue: { type: Number, default: 20 },
    week: { type: Number, default: 1 },
    category: { type: String, default: 'Cadet A' },
    decisions: [
      {
        week: Number,
        type: {
          type: String,
          enum: ['technical', 'physical', 'tactical', 'rest', 'nutrition'],
        },
        appliedAt: Date,
        _id: false,
      },
    ],
  },
  baseOptions,
);
export const AcademyPlayer = model<any>('AcademyPlayer', academyPlayerSchema);
