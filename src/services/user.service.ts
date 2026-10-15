import { ConsentRecord, RefreshToken, User } from '../models';
import { AppError } from '../utils/appError';
import { revokeAllForUser } from './token.service';

export const getMe = async (id: string) => {
  const u = await User.findById(id);
  if (!u) throw AppError.notFound('Utilisateur introuvable');
  return u.toJSON();
};

export const updateMe = async (id: string, patch: Record<string, unknown>) => {
  const u = await User.findByIdAndUpdate(id, { $set: patch }, { new: true, runValidators: true });
  if (!u) throw AppError.notFound('Utilisateur introuvable');
  return u.toJSON();
};

/** RGPD — droit d'accès / portabilité : export JSON de toutes les données du compte. */
export const exportData = async (id: string) => {
  const [user, consents, sessions] = await Promise.all([
    User.findById(id).lean(),
    ConsentRecord.find({ userId: id }).sort({ createdAt: 1 }).lean(),
    RefreshToken.find({ userId: id })
      .select('platform userAgent createdAt lastUsedAt revokedAt')
      .lean(),
  ]);
  if (!user) throw AppError.notFound('Utilisateur introuvable');
  return { exportedAt: new Date().toISOString(), user, consents, sessions };
};

/** RGPD — droit à l'effacement : anonymisation immédiate, purge différée par job. */
export const deleteAccount = async (id: string) => {
  const u = await User.findById(id);
  if (!u) throw AppError.notFound('Utilisateur introuvable');
  u.status = 'deleted';
  u.deletedAt = new Date();
  u.set('email', undefined);
  u.set('passwordHash', undefined);
  u.displayName = 'Compte supprimé';
  await u.save();
  await revokeAllForUser(id);
};
