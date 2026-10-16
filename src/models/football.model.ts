import { model, Schema } from 'mongoose';
import { baseOptions, i18nField, withJson } from './_common';
import { uniqueSlug } from '../utils/slug';
import { HEIGHT_CM_MAX, HEIGHT_CM_MIN, PLAYER_POSITIONS, STRONG_FEET } from './player.constants';

const playerSchema = withJson(
  new Schema(
    {
      externalRef: { type: String, index: { unique: true, sparse: true } },
      fullName: { type: String, required: true, index: true },
      shortName: String,
      birthDate: Date,
      nationality: { type: String, index: true },
      /** D18 : identifiant public (slug unique, généré depuis le nom — voir `utils/slug`). */
      publicId: { type: String, index: { unique: true, sparse: true } },
      position: { type: String, enum: [...PLAYER_POSITIONS] },
      strongFoot: { type: String, enum: [...STRONG_FEET] },
      heightCm: { type: Number, min: HEIGHT_CM_MIN, max: HEIGHT_CM_MAX },
      shirtNumber: Number,
      previousClub: String,
      isActive: { type: Boolean, default: true, index: true },
      bioI18n: i18nField,
      photoKey: String,
      status: {
        type: String,
        enum: ['draft', 'awaiting-translation', 'ready', 'published', 'archived'],
        default: 'draft',
        index: true,
      },
      stats: [
        {
          season: { type: String, required: true },
          matchesPlayed: { type: Number, default: 0 },
          goals: { type: Number, default: 0 },
          assists: { type: Number, default: 0 },
          trophiesCount: { type: Number, default: 0 },
          _id: false,
        },
      ],
      goatVotes: { type: Number, default: 0 },
    },
    baseOptions,
  ),
);
playerSchema.index({ status: 1, position: 1 });
/** D18 : génère `publicId` (slug unique) à la création si absent. Un `publicId` existant n'est jamais modifié. */
playerSchema.pre('validate', async function generatePublicId() {
  if (this.publicId || !this.fullName) return;
  const Model = this.constructor as unknown as { exists: (f: object) => Promise<unknown> };
  this.publicId = await uniqueSlug(this.fullName, async (s) =>
    Boolean(await Model.exists({ publicId: s })),
  );
});
export const Player = model<any>('Player', playerSchema);

const teamSchema = new Schema(
  {
    name: { type: String, required: true },
    shortName: String,
    type: { type: String, enum: ['club', 'national'], default: 'club' },
    crestKey: String,
  },
  baseOptions,
);
export const Team = model<any>('Team', teamSchema);

const competitionSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    type: { type: String, enum: ['league', 'cup', 'friendly'], required: true },
  },
  baseOptions,
);
export const Competition = model<any>('Competition', competitionSchema);

/** Événements et compositions sont EMBARQUÉS (snapshot du match, pas de jointure). */
const matchSchema = withJson(
  new Schema(
    {
      externalRef: { type: String, index: { unique: true, sparse: true } },
      homeTeamId: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
      awayTeamId: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
      competitionId: {
        type: Schema.Types.ObjectId,
        ref: 'Competition',
        required: true,
      },
      matchday: String,
      kickoffAt: { type: Date, required: true, index: true },
      status: {
        type: String,
        enum: ['scheduled', 'live', 'finished', 'postponed', 'cancelled'],
        default: 'scheduled',
        index: true,
      },
      scoreHome: Number,
      scoreAway: Number,
      venue: String,
      source: { type: String, enum: ['api', 'manual'], default: 'api' },
      contextI18n: i18nField,
      lineups: [
        {
          playerId: { type: Schema.Types.ObjectId, ref: 'Player' },
          teamId: Schema.Types.ObjectId,
          isStarter: Boolean,
          position: String,
          _id: false,
        },
      ],
      events: [
        {
          minute: Number,
          type: { type: String, enum: ['goal', 'card', 'sub'] },
          playerId: Schema.Types.ObjectId,
          detailI18n: i18nField,
          _id: false,
        },
      ],
      syncConflict: {
        field: String,
        apiValue: Schema.Types.Mixed,
        editorialValue: Schema.Types.Mixed,
      },
    },
    baseOptions,
  ),
);
matchSchema.index({ competitionId: 1, kickoffAt: -1 });
export const Match = model<any>('Match', matchSchema);
