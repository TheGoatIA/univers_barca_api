import { User, ConsentRecord } from '../models';
import { AppError } from '../utils/appError';
import { hashPassword, needsRehash, verifyPassword } from './password.service';
import {
  DeviceInfo,
  blacklistAccessToken,
  issueRefreshToken,
  randomToken,
  revokeAllForUser,
  revokeRefreshToken,
  rotateRefreshToken,
  sha256,
  signAccessToken,
} from './token.service';
import { logger } from '../utils/logger';
import { authFailures } from '../config/metrics';

export interface RegisterInput {
  email: string;
  password: string;
  displayName: string;
  locale?: 'fr' | 'en' | 'es';
  consents: {
    terms: boolean;
    privacy: boolean;
    notifications?: boolean;
    geolocation?: boolean;
    analytics?: boolean;
  };
}

const publicUser = (u: any) => ({
  id: String(u._id),
  email: u.email,
  displayName: u.displayName,
  locale: u.locale,
  themePreference: u.themePreference,
  emailVerified: !!u.emailVerifiedAt,
});

const session = async (user: any, device: DeviceInfo) => {
  const { token } = await issueRefreshToken(String(user._id), device);
  return {
    user: publicUser(user),
    accessToken: signAccessToken(String(user._id), 'user', 'user'),
    refreshToken: token,
  };
};

export const register = async (input: RegisterInput, device: DeviceInfo) => {
  if (!input.consents.terms || !input.consents.privacy) {
    throw AppError.unprocessable(
      'Les CGU et la politique de confidentialité doivent être acceptées',
    );
  }
  const email = input.email.toLowerCase();
  if (await User.exists({ email }))
    throw AppError.conflict('Un compte existe déjà avec cet email', 'EMAIL_TAKEN');
  const verificationToken = randomToken(32);
  const user = await User.create({
    email,
    passwordHash: await hashPassword(input.password),
    displayName: input.displayName,
    locale: input.locale ?? 'fr',
    termsAcceptedAt: new Date(),
    emailVerificationTokenHash: sha256(verificationToken),
    emailVerificationExpiresAt: new Date(Date.now() + 24 * 3600_000),
  });
  const now = new Date();
  await ConsentRecord.insertMany(
    (Object.entries(input.consents) as [string, boolean | undefined][])
      .filter(([, v]) => v !== undefined)
      .map(([type, granted]) => ({
        userId: user._id,
        type,
        granted,
        grantedAt: granted ? now : undefined,
        revokedAt: granted ? undefined : now,
      })),
  );
  logger.info('Compte créé', { userId: String(user._id) });
  // L'email de vérification est envoyé par le job `email` (BullMQ) — le jeton n'est jamais renvoyé par l'API.
  return { ...(await session(user, device)), verificationToken };
};

export const login = async (email: string, password: string, device: DeviceInfo) => {
  const user = await User.findOne({ email: email.toLowerCase() }).select('+passwordHash');
  const ok = user?.passwordHash ? await verifyPassword(user.passwordHash, password) : false;
  if (!user || !ok) {
    authFailures.inc({ reason: 'bad_credentials' });
    throw AppError.unauthorized('Email ou mot de passe incorrect', 'BAD_CREDENTIALS');
  }
  if (user.status === 'banned' || user.status === 'deleted')
    throw AppError.forbidden('Compte indisponible', 'ACCOUNT_DISABLED');
  if (user.status === 'suspended' && user.suspendedUntil && user.suspendedUntil > new Date())
    throw AppError.forbidden('Compte suspendu', 'ACCOUNT_SUSPENDED');
  if (user.passwordHash && needsRehash(user.passwordHash))
    user.passwordHash = await hashPassword(password);
  user.lastActiveAt = new Date();
  await user.save();
  return session(user, device);
};

export const refresh = async (refreshToken: string, device: DeviceInfo) => {
  const { userId, refreshToken: next } = await rotateRefreshToken(refreshToken, device);
  const user = await User.findById(userId);
  if (!user || user.status === 'banned' || user.status === 'deleted')
    throw AppError.unauthorized('Compte indisponible');
  return {
    accessToken: signAccessToken(userId, 'user', 'user'),
    refreshToken: next,
  };
};

export const logout = async (accessToken: string, refreshToken?: string) => {
  await blacklistAccessToken(accessToken);
  if (refreshToken) await revokeRefreshToken(refreshToken);
};

export const logoutAll = async (userId: string, accessToken: string) => {
  await blacklistAccessToken(accessToken);
  await revokeAllForUser(userId);
};

export const verifyEmail = async (token: string) => {
  const user = await User.findOne({
    emailVerificationTokenHash: sha256(token),
    emailVerificationExpiresAt: { $gt: new Date() },
  }).select('+emailVerificationTokenHash');
  if (!user) throw AppError.badRequest('Lien de vérification invalide ou expiré', 'VERIFY_INVALID');
  user.emailVerifiedAt = new Date();
  user.set('emailVerificationTokenHash', undefined);
  user.set('emailVerificationExpiresAt', undefined);
  await user.save();
};

/** Réponse identique que l'email existe ou non (pas d'énumération de comptes). */
export const forgotPassword = async (email: string): Promise<string | null> => {
  const user = await User.findOne({
    email: email.toLowerCase(),
    status: 'active',
  });
  if (!user) return null;
  const token = randomToken(32);
  user.passwordResetTokenHash = sha256(token);
  user.passwordResetExpiresAt = new Date(Date.now() + 3600_000);
  await user.save();
  return token;
};

export const resetPassword = async (token: string, newPassword: string) => {
  const user = await User.findOne({
    passwordResetTokenHash: sha256(token),
    passwordResetExpiresAt: { $gt: new Date() },
  }).select('+passwordResetTokenHash');
  if (!user)
    throw AppError.badRequest('Lien de réinitialisation invalide ou expiré', 'RESET_INVALID');
  user.passwordHash = await hashPassword(newPassword);
  user.passwordChangedAt = new Date();
  user.set('passwordResetTokenHash', undefined);
  user.set('passwordResetExpiresAt', undefined);
  await user.save();
  await revokeAllForUser(String(user._id));
};

export const setConsent = async (userId: string, type: string, granted: boolean) => {
  const now = new Date();
  return ConsentRecord.create({
    userId,
    type,
    granted,
    grantedAt: granted ? now : undefined,
    revokedAt: granted ? undefined : now,
  });
};
