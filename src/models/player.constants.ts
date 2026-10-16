/** Postes (D18) : codes historiques conservés + postes larges + sous-postes. */
export const LEGACY_POSITIONS = [
  'GB',
  'DD',
  'DC',
  'DG',
  'MD',
  'MC',
  'MO',
  'AD',
  'AG',
  'BU',
] as const;
/** Postes larges (gardien, défenseur, milieu, attaquant). */
export const BROAD_POSITIONS = ['GK', 'DF', 'MF', 'FW'] as const;
/** Sous-postes supplémentaires (les codes historiques servent déjà de sous-postes). */
export const SUB_POSITIONS = ['LB', 'RB', 'CB', 'DM', 'CM', 'AM', 'LW', 'RW', 'ST'] as const;

export const PLAYER_POSITIONS = [
  ...LEGACY_POSITIONS,
  ...BROAD_POSITIONS,
  ...SUB_POSITIONS,
] as const;
export const STRONG_FEET = ['left', 'right', 'both'] as const;
export const HEIGHT_CM_MIN = 120;
export const HEIGHT_CM_MAX = 230;
