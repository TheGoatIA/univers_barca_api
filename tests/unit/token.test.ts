import jwt from 'jsonwebtoken';
import {
  blacklistAccessToken,
  sha256,
  signAccessToken,
  verifyAccessToken,
} from '../../src/services/token.service';

describe('token.service (JWT)', () => {
  it('signe puis vérifie', async () => {
    const p = await verifyAccessToken(signAccessToken('u1', 'user'));
    expect(p).toMatchObject({ id: 'u1', role: 'user', kind: 'user' });
    expect(p.jti).toBeTruthy();
  });
  it('rejette un jeton falsifié', async () => {
    const t = signAccessToken('u1', 'user');
    await expect(verifyAccessToken(t.slice(0, -2) + 'xx')).rejects.toMatchObject({
      statusCode: 401,
    });
  });
  it('rejette alg none', async () => {
    const t = jwt.sign({ id: 'u1' }, '', { algorithm: 'none' as any });
    await expect(verifyAccessToken(t)).rejects.toMatchObject({
      code: 'TOKEN_INVALID',
    });
  });
  it('rejette un jeton blacklisté', async () => {
    const t = signAccessToken('u1', 'user');
    await blacklistAccessToken(t);
    await expect(verifyAccessToken(t)).rejects.toMatchObject({
      code: 'TOKEN_REVOKED',
    });
  });
  it('sha256 est déterministe', () => {
    expect(sha256('a')).toBe(sha256('a'));
    expect(sha256('a')).toHaveLength(64);
  });
});
