import Joi from 'joi';
import { PASSWORD_POLICY } from '../services/password.service';

const password = Joi.string().pattern(PASSWORD_POLICY).messages({
  'string.pattern.base':
    'Le mot de passe doit contenir 8 caractères minimum, une majuscule, une minuscule et un chiffre',
});

export const registerSchema = Joi.object({
  email: Joi.string().email().max(254).required(),
  password: password.required(),
  displayName: Joi.string().trim().min(3).max(20).required(),
  locale: Joi.string().valid('fr', 'en', 'es'),
  consents: Joi.object({
    terms: Joi.boolean().required(),
    privacy: Joi.boolean().required(),
    notifications: Joi.boolean(),
    geolocation: Joi.boolean(),
    analytics: Joi.boolean(),
  }).required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().max(128).required(),
});
export const refreshSchema = Joi.object({
  refreshToken: Joi.string().required(),
});
export const logoutSchema = Joi.object({ refreshToken: Joi.string() });
export const tokenSchema = Joi.object({ token: Joi.string().required() });
export const forgotSchema = Joi.object({
  email: Joi.string().email().required(),
});
export const resetSchema = Joi.object({
  token: Joi.string().required(),
  password: password.required(),
});
export const consentSchema = Joi.object({
  type: Joi.string()
    .valid('terms', 'privacy', 'geolocation', 'notifications', 'analytics')
    .required(),
  granted: Joi.boolean().required(),
});
export const updateMeSchema = Joi.object({
  displayName: Joi.string().trim().min(3).max(20),
  locale: Joi.string().valid('fr', 'en', 'es'),
  themePreference: Joi.string().valid('system', 'light', 'dark'),
  countryCode: Joi.string().length(2).uppercase(),
  city: Joi.string().trim().max(80),
  supporterSince: Joi.number().integer().min(1899).max(new Date().getFullYear()),
  timezone: Joi.string().max(64),
}).min(1);
export const adminLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().max(128).required(),
  totp: Joi.string().pattern(/^\d{6}$/),
});
export const totpSchema = Joi.object({
  token: Joi.string()
    .pattern(/^\d{6}$/)
    .required(),
});
export const listQuerySchema = Joi.object({
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(100).default(20),
  q: Joi.string().trim().max(80),
  status: Joi.string().valid('draft', 'awaiting-translation', 'ready', 'published', 'archived'),
});
export const idParamSchema = Joi.object({
  id: Joi.string().hex().length(24).required(),
});
