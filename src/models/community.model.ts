import { model, Schema } from 'mongoose';
import { baseOptions, withJson } from './_common';

/** Groupe local : le centre est une position de VILLE approximative, jamais un utilisateur précis. */
const communityGroupSchema = withJson(
  new Schema(
    {
      name: { type: String, required: true, trim: true },
      countryCode: {
        type: String,
        required: true,
        uppercase: true,
        index: true,
      },
      city: { type: String, required: true, index: true },
      description: String,
      location: {
        type: { type: String, enum: ['Point'], default: 'Point' },
        coordinates: { type: [Number], default: undefined },
      },
      createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
      status: {
        type: String,
        enum: ['pending', 'active', 'archived'],
        default: 'pending',
        index: true,
      },
      membersCount: { type: Number, default: 0 },
      events: [
        {
          title: String,
          matchId: Schema.Types.ObjectId,
          startsAt: Date,
          venueName: String,
          city: String,
          attendeeIds: [Schema.Types.ObjectId],
          status: { type: String, default: 'active' },
        },
      ],
    },
    baseOptions,
  ),
);
communityGroupSchema.index({ location: '2dsphere' }, { sparse: true });
export const CommunityGroup = model<any>('CommunityGroup', communityGroupSchema);

const membershipSchema = new Schema(
  {
    groupId: {
      type: Schema.Types.ObjectId,
      ref: 'CommunityGroup',
      required: true,
    },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    role: { type: String, enum: ['member', 'moderator'], default: 'member' },
    joinedAt: { type: Date, default: Date.now },
  },
  baseOptions,
);
membershipSchema.index({ groupId: 1, userId: 1 }, { unique: true });
export const GroupMembership = model<any>('GroupMembership', membershipSchema);

const postSchema = new Schema(
  {
    groupId: {
      type: Schema.Types.ObjectId,
      ref: 'CommunityGroup',
      required: true,
      index: true,
    },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, required: true, maxlength: 500 },
    imageKey: String,
    likes: { type: Number, default: 0 },
    status: { type: String, enum: ['visible', 'hidden'], default: 'visible' },
  },
  baseOptions,
);
postSchema.index({ groupId: 1, createdAt: -1 });
export const GroupPost = model<any>('GroupPost', postSchema);

/** Agrégats de la carte : compteurs par zone, calculés/rafraîchis par job — jamais de coordonnées individuelles. */
export const LocationAggregate = model(
  'LocationAggregate',
  new Schema(
    {
      level: { type: String, enum: ['country', 'region', 'city'] },
      countryCode: String,
      city: String,
      lat: Number,
      lng: Number,
      count: Number,
      computedAt: Date,
    },
    baseOptions,
  ),
);
