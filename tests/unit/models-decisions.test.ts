import { Player, ModerationReport, NotificationPreference } from '../../src/models';
import { normalizeReportStatus } from '../../src/models/moderation.constants';
import { PLAYER_POSITIONS, LEGACY_POSITIONS } from '../../src/models/player.constants';
import { refreshPurgeAt, RETENTION, revokedPurgeAt } from '../../src/config/retention';
import { slugify, uniqueSlug } from '../../src/utils/slug';
import { playerBodySchema } from '../../src/validators/player.validator';
import { AppError } from '../../src/utils/appError';

describe('D18 — Player', () => {
  it('slugify retire accents et symboles', () => {
    expect(slugify('Lamine Yamal')).toBe('lamine-yamal');
    expect(slugify('  Marc-André ter Stegen! ')).toBe('marc-andre-ter-stegen');
  });
  it('uniqueSlug suffixe en cas de collision', async () => {
    const taken = new Set(['pedri', 'pedri-2']);
    expect(await uniqueSlug('Pedri', (s) => taken.has(s))).toBe('pedri-3');
  });
  it('postes : codes historiques conservés, sous-postes ajoutés', () => {
    for (const p of LEGACY_POSITIONS) expect(PLAYER_POSITIONS).toContain(p);
    expect(PLAYER_POSITIONS).toEqual(expect.arrayContaining(['GK', 'DF', 'MF', 'FW', 'ST']));
  });
  it('valide strongFoot et heightCm (120-230)', () => {
    const ok = (o: object) => playerBodySchema.validate({ fullName: 'X', ...o }).error;
    expect(ok({ strongFoot: 'both', heightCm: 180, position: 'CB' })).toBeUndefined();
    expect(ok({ heightCm: 119 })).toBeDefined();
    expect(ok({ heightCm: 231 })).toBeDefined();
    expect(ok({ strongFoot: 'none' })).toBeDefined();
  });
  it('schéma Mongoose : bornes et index unique sparse sur publicId', async () => {
    const bad = new Player({ fullName: 'X', heightCm: 300, strongFoot: 'x' });
    const err = bad.validateSync();
    expect(Object.keys(err?.errors ?? {})).toEqual(
      expect.arrayContaining(['heightCm', 'strongFoot']),
    );
    const idx = Player.schema.indexes().find(([f]: any) => 'publicId' in f);
    expect(idx?.[1]).toMatchObject({ unique: true, sparse: true });
  });
});

describe('D11 — NotificationPreference', () => {
  it('quietHours 0 ou 7 entrées, liveGoals, followedCompetitions', () => {
    const mk = (n: number) =>
      new NotificationPreference({
        userId: '507f1f77bcf86cd799439011',
        quietHours: Array.from({ length: n }, () => ({ start: '23:00', end: '07:00' })),
      } as any);
    expect(mk(7).validateSync()).toBeUndefined();
    expect(mk(0).validateSync()).toBeUndefined();
    expect(mk(3).validateSync()?.errors).toHaveProperty('quietHours');
    const d: any = mk(0);
    expect(d.liveGoals).toBe(true);
    expect(d.followedCompetitions).toHaveLength(0);
  });
});

describe('D19 — statuts de signalement', () => {
  it('mappe les valeurs héritées', () => {
    expect(normalizeReportStatus('pending')).toBe('open');
    expect(normalizeReportStatus('in-progress')).toBe('in_review');
    expect(normalizeReportStatus('ignored')).toBe('dismissed');
    expect(normalizeReportStatus('resolved')).toBe('resolved');
  });
  it('le modèle accepte ancien et nouveau statut', () => {
    const base = {
      targetType: 'user',
      targetId: '507f1f77bcf86cd799439011',
      reporterId: '507f1f77bcf86cd799439012',
      reason: 'x',
    };
    expect(new ModerationReport(base).status).toBe('open');
    expect(new ModerationReport({ ...base, status: 'in-progress' }).status).toBe('in_review');
    expect(new ModerationReport({ ...base, status: 'dismissed' }).validateSync()).toBeUndefined();
    expect(new ModerationReport({ ...base, status: 'nope' }).validateSync()).toBeDefined();
  });
});

describe('Rétention', () => {
  it('30 j après expiration, 90 j après révocation', () => {
    expect(RETENTION).toMatchObject({
      refreshTokenAfterExpiryDays: 30,
      revokedRefreshFamilyDays: 90,
    });
    const t = new Date('2026-01-01T00:00:00Z');
    expect(refreshPurgeAt(t).toISOString()).toBe('2026-01-31T00:00:00.000Z');
    expect(revokedPurgeAt(t, t).toISOString()).toBe('2026-04-01T00:00:00.000Z');
  });
});

describe('Codes d’erreur', () => {
  it('forbidden transporte details', () => {
    const e = AppError.forbidden('x', 'ACCOUNT_BANNED', { legacyCode: 'ACCOUNT_DISABLED' });
    expect(e).toMatchObject({
      statusCode: 403,
      code: 'ACCOUNT_BANNED',
      details: { legacyCode: 'ACCOUNT_DISABLED' },
    });
  });
});
