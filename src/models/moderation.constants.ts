/** D19 : cycle de vie d'un signalement. */
export const REPORT_STATUSES = ['open', 'in_review', 'resolved', 'dismissed'] as const;
export type ReportStatus = (typeof REPORT_STATUSES)[number];

/** Anciennes valeurs (avant D19) → nouvelles valeurs. */
export const LEGACY_REPORT_STATUS: Readonly<Record<string, ReportStatus>> = {
  pending: 'open',
  'in-progress': 'in_review',
  ignored: 'dismissed',
};

/** Accepte une valeur actuelle ou héritée ; renvoie la valeur actuelle (inconnue : inchangée). */
export const normalizeReportStatus = <T>(v: T): T | ReportStatus =>
  typeof v === 'string' && v in LEGACY_REPORT_STATUS ? LEGACY_REPORT_STATUS[v] : v;
