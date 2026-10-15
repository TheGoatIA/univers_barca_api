import { model, Schema } from 'mongoose';
import { baseOptions, i18nField, withJson } from './_common';

/** Un défi par jour et par type, identique pour tous (unicité type + date). */
const dailyChallengeSchema = new Schema(
  {
    type: { type: String, enum: ['guess_player', 'quiz'], required: true },
    date: { type: String, required: true },
    payload: Schema.Types.Mixed,
  },
  baseOptions,
);
dailyChallengeSchema.index({ type: 1, date: 1 }, { unique: true });
export const DailyChallenge = model<any>('DailyChallenge', dailyChallengeSchema);

const guessAttemptSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    challengeId: {
      type: Schema.Types.ObjectId,
      ref: 'DailyChallenge',
      required: true,
    },
    attemptNumber: { type: Number, required: true },
    guessedPlayerId: {
      type: Schema.Types.ObjectId,
      ref: 'Player',
      required: true,
    },
    isCorrect: { type: Boolean, required: true },
  },
  baseOptions,
);
guessAttemptSchema.index({ userId: 1, challengeId: 1, attemptNumber: 1 }, { unique: true });
export const GuessAttempt = model<any>('GuessAttempt', guessAttemptSchema);

const quizQuestionSchema = withJson(
  new Schema(
    {
      questionI18n: i18nField,
      optionsI18n: [i18nField],
      correctOption: { type: Number, required: true },
      explanationI18n: i18nField,
      difficultyLevel: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
        index: true,
      },
      category: { type: String, index: true },
      playerId: { type: Schema.Types.ObjectId, ref: 'Player' },
      status: {
        type: String,
        enum: ['pending-ai', 'draft', 'published', 'rejected', 'archived'],
        default: 'draft',
        index: true,
      },
      origin: { type: String, enum: ['editorial', 'ai'], default: 'editorial' },
      rejectionReason: String,
      stats: {
        answers: { type: Number, default: 0 },
        correct: { type: Number, default: 0 },
      },
    },
    baseOptions,
  ),
);
export const QuizQuestion = model<any>('QuizQuestion', quizQuestionSchema);

const quizSessionSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    mode: { type: String, enum: ['daily', 'practice'], required: true },
    levelAtStart: Number,
    startedAt: { type: Date, default: Date.now },
    finishedAt: Date,
    score: { type: Number, default: 0 },
    answers: [
      {
        questionId: Schema.Types.ObjectId,
        isCorrect: Boolean,
        answeredAt: Date,
        timeMs: Number,
        _id: false,
      },
    ],
  },
  baseOptions,
);
export const QuizSession = model<any>('QuizSession', quizSessionSchema);

/** Progression agrégée, un seul système de points/streaks/badges partagé par tous les modules. */
const userProgressSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    currentStreak: { type: Number, default: 0 },
    bestStreak: { type: Number, default: 0 },
    lastActivityDate: String,
    totalPoints: { type: Number, default: 0 },
    quizLevel: { type: Number, default: 1, min: 1, max: 5 },
    recentAnswers: { type: [Boolean], default: [] },
    badges: [{ badgeCode: String, unlockedAt: Date, _id: false }],
  },
  baseOptions,
);
export const UserProgress = model<any>('UserProgress', userProgressSchema);

export const Badge = model(
  'Badge',
  new Schema(
    {
      code: { type: String, required: true, unique: true },
      labelI18n: i18nField,
      descriptionI18n: i18nField,
      icon: String,
      threshold: Number,
    },
    baseOptions,
  ),
);

export const ScoringRule = model(
  'ScoringRule',
  new Schema(
    {
      event: { type: String, required: true, unique: true },
      points: { type: Number, required: true },
      positions: [String],
    },
    baseOptions,
  ),
);
