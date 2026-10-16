/** Rétention des données (source unique ; voir docs/DECISIONS.md « Rétention des refresh tokens »). */
const DAY_MS = 86_400_000;

export const RETENTION = {
  /** Refresh token expiré : purgé 30 jours après `expiresAt`. */
  refreshTokenAfterExpiryDays: 30,
  /** Famille révoquée : conservée 90 jours après révocation (détection de réutilisation). */
  revokedRefreshFamilyDays: 90,
} as const;

/** Date de purge d'un refresh token non révoqué. */
export const refreshPurgeAt = (expiresAt: Date): Date =>
  new Date(expiresAt.getTime() + RETENTION.refreshTokenAfterExpiryDays * DAY_MS);

/** Date de purge d'un refresh token révoqué (jamais antérieure à la purge « expiré »). */
export const revokedPurgeAt = (revokedAt: Date, expiresAt?: Date): Date => {
  const revoked = revokedAt.getTime() + RETENTION.revokedRefreshFamilyDays * DAY_MS;
  return new Date(Math.max(revoked, expiresAt ? refreshPurgeAt(expiresAt).getTime() : 0));
};
