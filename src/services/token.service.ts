import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { env } from '../config/env';
import { getStore } from '../config/redis';
import { AppError } from '../utils/appError';
import { RefreshToken } from '../models';

export interface AccessPayload {
  id: string;
  role: string;
  jti: string;
  kind: 'user' | 'admin';
}

const BLACKLIST_PREFIX = 'jwt:bl:';

export const sha256 = (v: string) => crypto.createHash('sha256').update(v).digest('hex');
export const randomToken = (bytes = 48) => crypto.randomBytes(bytes).toString('base64url');

export const signAccessToken = (
  id: string,
  role: string,
  kind: 'user' | 'admin' = 'user',
): string =>
  jwt.sign({ id, role, kind }, env.JWT_ACCESS_SECRET, {
    algorithm: 'HS256',
    expiresIn: env.JWT_ACCESS_TTL as jwt.SignOptions['expiresIn'],
    jwtid: crypto.randomUUID() as string,
    issuer: 'univers-barca',
  });

export const verifyAccessToken = async (token: string): Promise<AccessPayload> => {
  let decoded: any;
  try {
    decoded = jwt.verify(token, env.JWT_ACCESS_SECRET, {
      algorithms: ['HS256'],
      issuer: 'univers-barca',
    });
  } catch (e: any) {
    throw AppError.unauthorized(
      e?.name === 'TokenExpiredError' ? 'Session expirée' : 'Jeton invalide',
      e?.name === 'TokenExpiredError' ? 'TOKEN_EXPIRED' : 'TOKEN_INVALID',
    );
  }
  if (await getStore().get(BLACKLIST_PREFIX + decoded.jti))
    throw AppError.unauthorized('Jeton révoqué', 'TOKEN_REVOKED');
  return {
    id: decoded.id,
    role: decoded.role,
    jti: decoded.jti,
    kind: decoded.kind ?? 'user',
  };
};

/** Révoque un access token jusqu'à son expiration naturelle (blacklist Redis par jti). */
export const blacklistAccessToken = async (token: string) => {
  const decoded: any = jwt.decode(token);
  if (!decoded?.jti || !decoded.exp) return;
  const ttl = decoded.exp - Math.floor(Date.now() / 1000);
  if (ttl > 0) await getStore().set(BLACKLIST_PREFIX + decoded.jti, '1', ttl);
};

export interface DeviceInfo {
  deviceId?: string;
  platform?: 'ios' | 'android' | 'web';
  userAgent?: string;
  ip?: string;
}

const refreshExpiry = () => new Date(Date.now() + env.JWT_REFRESH_TTL_DAYS * 86_400_000);

export const issueRefreshToken = async (
  userId: string,
  device: DeviceInfo = {},
  familyId: string = crypto.randomUUID(),
) => {
  const token = randomToken();
  await RefreshToken.create({
    userId,
    familyId,
    tokenHash: sha256(token),
    expiresAt: refreshExpiry(),
    lastUsedAt: new Date(),
    ...device,
  });
  return { token, familyId };
};

/**
 * Rotation : l'ancien token est révoqué et remplacé. Si un token DÉJÀ révoqué est présenté
 * (rejeu / vol), toute la famille est révoquée (détection de réutilisation).
 */
export const rotateRefreshToken = async (presented: string, device: DeviceInfo = {}) => {
  const doc = await RefreshToken.findOne({ tokenHash: sha256(presented) });
  if (!doc) throw AppError.unauthorized('Refresh token invalide', 'REFRESH_INVALID');
  if (doc.revokedAt) {
    await RefreshToken.updateMany(
      { familyId: doc.familyId, revokedAt: { $exists: false } },
      { revokedAt: new Date() },
    );
    throw AppError.unauthorized('Réutilisation détectée : session révoquée', 'REFRESH_REUSED');
  }
  if (doc.expiresAt < new Date())
    throw AppError.unauthorized('Refresh token expiré', 'REFRESH_EXPIRED');
  const next = await issueRefreshToken(
    String(doc.userId),
    {
      deviceId: doc.deviceId ?? undefined,
      platform: doc.platform ?? undefined,
      ...device,
    },
    doc.familyId,
  );
  doc.revokedAt = new Date();
  doc.replacedByHash = sha256(next.token);
  await doc.save();
  return { userId: String(doc.userId), refreshToken: next.token };
};

export const revokeRefreshToken = async (presented: string) => {
  await RefreshToken.updateOne(
    { tokenHash: sha256(presented), revokedAt: { $exists: false } },
    { revokedAt: new Date() },
  );
};

export const revokeAllForUser = async (userId: string) => {
  await RefreshToken.updateMany(
    { userId, revokedAt: { $exists: false } },
    { revokedAt: new Date() },
  );
};
