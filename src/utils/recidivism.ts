/** D19 — récidive de modération : sanctions actives sur 90 jours glissants. Fonctions pures. */

export const RECIDIVISM_WINDOW_DAYS = 90;
const DAY_MS = 86_400_000;

export type SanctionKind = 'warning' | 'suspension_24h' | 'suspension_7d' | 'ban';

export interface SanctionRecord {
  actionType: string;
  createdAt: Date;
  /** Sanction annulée (contestation acceptée, `unban`…) : ne compte plus. */
  revokedAt?: Date | null;
}

export interface RecidivismResult {
  /** Rang de la prochaine sanction (1 = premier manquement actif). */
  rank: number;
  sanction: SanctionKind;
  /** Durée de suspension en heures, le cas échéant. */
  suspensionHours?: number;
  /** Le bannissement exige toujours une validation humaine (jamais automatique). */
  requiresHumanValidation: boolean;
}

const SANCTION_ACTIONS = new Set(['warn', 'suspend', 'ban']);

/** Nombre de sanctions actives (avertissement, suspension, bannissement) dans la fenêtre glissante. */
export const countActiveSanctions = (
  history: readonly SanctionRecord[],
  now: Date = new Date(),
): number => {
  const since = now.getTime() - RECIDIVISM_WINDOW_DAYS * DAY_MS;
  return history.filter((s) => {
    const t = s.createdAt.getTime();
    return SANCTION_ACTIONS.has(s.actionType) && !s.revokedAt && t > since && t <= now.getTime();
  }).length;
};

/** Rang 1 avertissement, 2 suspension 24 h, 3 suspension 7 j, 4+ bannissement (validation humaine). */
export const sanctionForRank = (rank: number): RecidivismResult => {
  const r = Math.max(1, Math.floor(rank));
  if (r === 1) return { rank: r, sanction: 'warning', requiresHumanValidation: false };
  if (r === 2)
    return {
      rank: r,
      sanction: 'suspension_24h',
      suspensionHours: 24,
      requiresHumanValidation: false,
    };
  if (r === 3)
    return {
      rank: r,
      sanction: 'suspension_7d',
      suspensionHours: 168,
      requiresHumanValidation: false,
    };
  return { rank: r, sanction: 'ban', requiresHumanValidation: true };
};

/** Rang de la sanction à appliquer = sanctions actives (90 j glissants) + 1. */
export const computeRecidivismRank = (
  history: readonly SanctionRecord[],
  now: Date = new Date(),
): RecidivismResult => sanctionForRank(countActiveSanctions(history, now) + 1);
