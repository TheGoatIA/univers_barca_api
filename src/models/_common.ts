import { Schema } from 'mongoose';

/** Champ de contenu localisé (FR obligatoire, EN/ES requis avant publication). */
export const i18nField = {
  fr: { type: String, default: '' },
  en: { type: String, default: '' },
  es: { type: String, default: '' },
};

export const baseOptions = { timestamps: true, versionKey: false } as const;

export const toJSONTransform = (_doc: unknown, ret: Record<string, any>) => {
  ret.id = String(ret._id);
  delete ret._id;
  delete ret.__v;
  return ret;
};

export const withJson = <T extends Schema>(schema: T): T => {
  schema.set('toJSON', { virtuals: false, transform: toJSONTransform });
  return schema;
};

export const LOCALES = ['fr', 'en', 'es'] as const;
export type Locale = (typeof LOCALES)[number];
