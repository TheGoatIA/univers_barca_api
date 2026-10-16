import {
  computeRecidivismRank,
  countActiveSanctions,
  sanctionForRank,
} from '../../src/utils/recidivism';

const now = new Date('2026-10-16T12:00:00Z');
const daysAgo = (d: number) => new Date(now.getTime() - d * 86_400_000);

describe('récidive de modération (D19)', () => {
  it('rang 1 sans historique : avertissement', () => {
    expect(computeRecidivismRank([], now)).toMatchObject({
      rank: 1,
      sanction: 'warning',
      requiresHumanValidation: false,
    });
  });
  it('échelle 1 → 4+', () => {
    expect(sanctionForRank(2)).toMatchObject({ sanction: 'suspension_24h', suspensionHours: 24 });
    expect(sanctionForRank(3)).toMatchObject({ sanction: 'suspension_7d', suspensionHours: 168 });
    expect(sanctionForRank(4)).toMatchObject({ sanction: 'ban', requiresHumanValidation: true });
    expect(sanctionForRank(9).sanction).toBe('ban');
    expect(sanctionForRank(0).rank).toBe(1);
  });
  it('ne compte que les sanctions des 90 derniers jours', () => {
    const h = [
      { actionType: 'warn', createdAt: daysAgo(10) },
      { actionType: 'suspend', createdAt: daysAgo(89) },
      { actionType: 'suspend', createdAt: daysAgo(91) },
    ];
    expect(countActiveSanctions(h, now)).toBe(2);
    expect(computeRecidivismRank(h, now).rank).toBe(3);
  });
  it('ignore les actions non-sanction, annulées ou futures', () => {
    const h = [
      { actionType: 'ignore', createdAt: daysAgo(1) },
      { actionType: 'hide', createdAt: daysAgo(1) },
      { actionType: 'unban', createdAt: daysAgo(1) },
      { actionType: 'warn', createdAt: daysAgo(2), revokedAt: daysAgo(1) },
      { actionType: 'warn', createdAt: new Date(now.getTime() + 1000) },
    ];
    expect(countActiveSanctions(h, now)).toBe(0);
  });
  it('3 sanctions actives : le 4e manquement mène au bannissement validé par un humain', () => {
    const h = [1, 2, 3].map((d) => ({ actionType: 'warn', createdAt: daysAgo(d) }));
    expect(computeRecidivismRank(h, now)).toMatchObject({ sanction: 'ban', rank: 4 });
  });
});
