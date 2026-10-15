import qrcode from 'qrcode';
import speakeasy from 'speakeasy';
import { AdminSession, AdminUser } from '../models';
import { AppError } from '../utils/appError';
import { env } from '../config/env';
import { hashPassword, verifyPassword } from './password.service';
import { randomToken, sha256, signAccessToken } from './token.service';

const MAX_FAILS = 5;
const LOCK_MS = 15 * 60_000;
const SESSION_MS = 8 * 3600_000;

export const bootstrapSuperAdmin = async (email: string, password: string) => {
  if (await AdminUser.exists({ email: email.toLowerCase() })) return null;
  return AdminUser.create({
    email,
    name: 'Super Admin',
    role: 'super-admin',
    status: 'active',
    passwordHash: await hashPassword(password),
  });
};

export const loginAdmin = async (
  email: string,
  password: string,
  totp: string | undefined,
  meta: { ip?: string; userAgent?: string },
) => {
  const admin = await AdminUser.findOne({ email: email.toLowerCase() }).select(
    '+passwordHash +totpSecret',
  );
  const generic = AppError.unauthorized('Identifiants incorrects', 'BAD_CREDENTIALS');
  if (!admin || admin.status !== 'active' || !admin.passwordHash) throw generic;
  if (admin.lockedUntil && admin.lockedUntil > new Date())
    throw AppError.tooManyRequests('Compte temporairement verrouillé');
  const ok = await verifyPassword(admin.passwordHash, password);
  if (!ok) {
    admin.failedLogins += 1;
    if (admin.failedLogins >= MAX_FAILS) {
      admin.lockedUntil = new Date(Date.now() + LOCK_MS);
      admin.failedLogins = 0;
    }
    await admin.save();
    throw generic;
  }
  if (admin.totpEnabled) {
    if (!totp) throw AppError.unauthorized('Code 2FA requis', 'TOTP_REQUIRED');
    const valid = speakeasy.totp.verify({
      secret: admin.totpSecret as string,
      encoding: 'base32',
      token: totp,
      window: 1,
    });
    if (!valid) throw AppError.unauthorized('Code 2FA invalide', 'TOTP_INVALID');
  }
  admin.failedLogins = 0;
  admin.lastLoginAt = new Date();
  await admin.save();
  const refresh = randomToken();
  await AdminSession.create({
    adminId: admin._id,
    tokenHash: sha256(refresh),
    expiresAt: new Date(Date.now() + SESSION_MS),
    ...meta,
  });
  return {
    admin: {
      id: String(admin._id),
      email: admin.email,
      name: admin.name,
      role: admin.role,
    },
    accessToken: signAccessToken(String(admin._id), admin.role, 'admin'),
    refreshToken: refresh, // posé en cookie httpOnly par le contrôleur, jamais dans le corps JSON
  };
};

export const refreshAdmin = async (presented: string) => {
  const s = await AdminSession.findOne({
    tokenHash: sha256(presented),
    revokedAt: { $exists: false },
    expiresAt: { $gt: new Date() },
  });
  if (!s) throw AppError.unauthorized('Session expirée', 'REFRESH_INVALID');
  const admin = await AdminUser.findById(s.adminId);
  if (!admin || admin.status !== 'active') throw AppError.unauthorized('Compte désactivé');
  s.lastActivityAt = new Date();
  await s.save();
  return {
    accessToken: signAccessToken(String(admin._id), admin.role, 'admin'),
  };
};

export const logoutAdmin = async (presented?: string) => {
  if (presented)
    await AdminSession.updateOne({ tokenHash: sha256(presented) }, { revokedAt: new Date() });
};

export const setupTotp = async (adminId: string) => {
  const admin = await AdminUser.findById(adminId);
  if (!admin) throw AppError.notFound('Administrateur introuvable');
  const secret = speakeasy.generateSecret({
    length: 20,
    name: `Univers Barça (${admin.email})`,
  });
  await AdminUser.updateOne({ _id: adminId }, { totpSecret: secret.base32, totpEnabled: false });
  return {
    secret: secret.base32,
    qrDataUrl: await qrcode.toDataURL(secret.otpauth_url as string),
  };
};

export const confirmTotp = async (adminId: string, token: string) => {
  const admin = await AdminUser.findById(adminId).select('+totpSecret');
  if (!admin?.totpSecret) throw AppError.badRequest('2FA non initialisée');
  if (
    !speakeasy.totp.verify({
      secret: admin.totpSecret,
      encoding: 'base32',
      token,
      window: 1,
    })
  )
    throw AppError.badRequest('Code invalide', undefined);
  admin.totpEnabled = true;
  await admin.save();
};

export const adminCookieOptions = {
  httpOnly: true,
  secure: env.NODE_ENV === 'production' || env.NODE_ENV === 'staging',
  sameSite: 'strict' as const,
  path: '/api/v1/admin/auth',
  maxAge: SESSION_MS,
};
