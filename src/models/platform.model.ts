import { model, Schema } from 'mongoose';
import { baseOptions, withJson } from './_common';

export const ChatConversation = model(
  'ChatConversation',
  new Schema(
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
      },
      title: String,
      lastMessageAt: Date,
      messages: [
        {
          role: { type: String, enum: ['user', 'assistant'] },
          content: String,
          createdAt: { type: Date, default: Date.now },
          metadata: Schema.Types.Mixed,
          _id: false,
        },
      ],
    },
    baseOptions,
  ),
);

export const GeneratedWallpaper = model(
  'GeneratedWallpaper',
  withJson(
    new Schema(
      {
        userId: {
          type: Schema.Types.ObjectId,
          ref: 'User',
          required: true,
          index: true,
        },
        prompt: { type: String, required: true },
        style: String,
        occasion: String,
        status: {
          type: String,
          enum: ['PENDING', 'GENERATING', 'READY', 'REJECTED'],
          default: 'PENDING',
          index: true,
        },
        imageKey: String,
        moderationStatus: {
          type: String,
          enum: ['pending', 'approved', 'rejected'],
          default: 'pending',
        },
        isFavorite: { type: Boolean, default: false },
      },
      baseOptions,
    ),
  ),
);

export const NotificationPreference = model(
  'NotificationPreference',
  new Schema(
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
      },
      categories: {
        match: { type: Boolean, default: true },
        streak: { type: Boolean, default: true },
        history: { type: Boolean, default: true },
        community: { type: Boolean, default: false },
        fantasy: { type: Boolean, default: true },
        news: { type: Boolean, default: false },
      },
      matchOptions: {
        oneHourBefore: { type: Boolean, default: true },
        kickoff: { type: Boolean, default: false },
        halfTime: { type: Boolean, default: true },
        fullTime: { type: Boolean, default: true },
      },
      quietHours: {
        enabled: { type: Boolean, default: false },
        from: { type: String, default: '23:00' },
        to: { type: String, default: '07:00' },
      },
      streakReminderTime: { type: String, default: '20:30' },
    },
    baseOptions,
  ),
);

export const DeviceToken = model(
  'DeviceToken',
  new Schema(
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
      },
      platform: { type: String, enum: ['ios', 'android'] },
      token: { type: String, required: true, unique: true },
    },
    baseOptions,
  ),
);

export const NotificationLog = model(
  'NotificationLog',
  new Schema(
    {
      userId: { type: Schema.Types.ObjectId, index: true },
      category: String,
      title: String,
      body: String,
      deepLink: String,
      readAt: Date,
      sentAt: Date,
    },
    baseOptions,
  ),
);

export const CalendarSubscription = model(
  'CalendarSubscription',
  new Schema(
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
      },
      tokenHash: { type: String, required: true, unique: true },
      competitions: [String],
      reminderMinutes: { type: Number, default: 60 },
    },
    baseOptions,
  ),
);

export const FeatureFlag = model(
  'FeatureFlag',
  new Schema(
    {
      key: { type: String, required: true, unique: true },
      enabled: { type: Boolean, default: false },
      rolloutPercent: { type: Number, default: 100 },
      description: String,
    },
    baseOptions,
  ),
);

export const AiQuota = model(
  'AiQuota',
  new Schema(
    {
      key: { type: String, required: true, unique: true },
      limit: { type: Number, required: true },
      period: { type: String, enum: ['day', 'month'], default: 'day' },
    },
    baseOptions,
  ),
);

export const Anecdote = model(
  'Anecdote',
  withJson(
    new Schema(
      {
        titleI18n: { fr: String, en: String, es: String },
        bodyI18n: { fr: String, en: String, es: String },
        category: String,
        publishOn: { type: String, index: true },
        status: {
          type: String,
          enum: ['draft', 'awaiting-translation', 'ready', 'scheduled', 'published'],
          default: 'draft',
        },
        imageKey: String,
      },
      baseOptions,
    ),
  ),
);
