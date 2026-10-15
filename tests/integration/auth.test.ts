import { RefreshToken, User } from '../../src/models';
import { sha256 } from '../../src/services/token.service';
import { api, cleanup, connect, validUser } from '../helpers/app';

const V1 = '/api/v1';

beforeAll(connect);
afterAll(cleanup);

describe('Auth — parcours complet', () => {
  it('inscrit un utilisateur avec consentements', async () => {
    const res = await api().post(`${V1}/auth/register`).send(validUser(1));
    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.accessToken).toBeTruthy();
    expect(JSON.stringify(res.body)).not.toContain('passwordHash');
    const u = await User.findOne({ email: 'user1@example.com' }).select('+passwordHash');
    expect(u.passwordHash).toMatch(/^\$argon2id\$/);
  });

  it('refuse sans CGU', async () => {
    const res = await api()
      .post(`${V1}/auth/register`)
      .send({ ...validUser(2), consents: { terms: false, privacy: true } });
    expect(res.status).toBe(422);
  });

  it('refuse un email déjà pris', async () => {
    const res = await api().post(`${V1}/auth/register`).send(validUser(1));
    expect(res.status).toBe(409);
    expect(res.body.error.code).toBe('EMAIL_TAKEN');
  });

  it('refuse un mot de passe faible (422 détaillé)', async () => {
    const res = await api()
      .post(`${V1}/auth/register`)
      .send({ ...validUser(3), password: 'faible' });
    expect(res.status).toBe(422);
    expect(res.body.error.details[0].field).toBe('password');
  });

  it('connecte, lit /users/me, déconnecte (blacklist)', async () => {
    const login = await api()
      .post(`${V1}/auth/login`)
      .send({ email: 'user1@example.com', password: 'Passw0rdSecure' });
    expect(login.status).toBe(200);
    const { accessToken, refreshToken } = login.body.data;
    const me = await api().get(`${V1}/users/me`).set('Authorization', `Bearer ${accessToken}`);
    expect(me.status).toBe(200);
    expect(me.body.data.email).toBe('user1@example.com');
    const out = await api()
      .post(`${V1}/auth/logout`)
      .set('Authorization', `Bearer ${accessToken}`)
      .send({ refreshToken });
    expect(out.status).toBe(204);
    const again = await api().get(`${V1}/users/me`).set('Authorization', `Bearer ${accessToken}`);
    expect(again.status).toBe(401);
    expect(again.body.error.code).toBe('TOKEN_REVOKED');
  });

  it('message générique si mauvais identifiants', async () => {
    const res = await api()
      .post(`${V1}/auth/login`)
      .send({ email: 'user1@example.com', password: 'Mauvais123' });
    expect(res.status).toBe(401);
    expect(res.body.error.code).toBe('BAD_CREDENTIALS');
  });

  it('fait tourner le refresh token et détecte la réutilisation', async () => {
    const login = await api()
      .post(`${V1}/auth/login`)
      .send({ email: 'user1@example.com', password: 'Passw0rdSecure' });
    const first = login.body.data.refreshToken;
    const rotated = await api().post(`${V1}/auth/refresh`).send({ refreshToken: first });
    expect(rotated.status).toBe(200);
    const second = rotated.body.data.refreshToken;
    expect(second).not.toBe(first);
    const replay = await api().post(`${V1}/auth/refresh`).send({ refreshToken: first });
    expect(replay.status).toBe(401);
    expect(replay.body.error.code).toBe('REFRESH_REUSED');
    const afterReplay = await api().post(`${V1}/auth/refresh`).send({ refreshToken: second });
    expect(afterReplay.status).toBe(401);
    const fam = (await RefreshToken.findOne({ tokenHash: sha256(first) })).familyId;
    expect(
      await RefreshToken.countDocuments({
        familyId: fam,
        revokedAt: { $exists: false },
      }),
    ).toBe(0);
  });
});

describe('RGPD', () => {
  it('exporte puis supprime le compte', async () => {
    await api().post(`${V1}/auth/register`).send(validUser(9));
    const login = await api()
      .post(`${V1}/auth/login`)
      .send({ email: 'user9@example.com', password: 'Passw0rdSecure' });
    const auth = { Authorization: `Bearer ${login.body.data.accessToken}` };
    const exp = await api().get(`${V1}/users/me/export`).set(auth);
    expect(exp.status).toBe(200);
    expect(exp.body.data.consents.length).toBeGreaterThanOrEqual(3);
    const del = await api().delete(`${V1}/users/me`).set(auth);
    expect(del.status).toBe(204);
    const relog = await api()
      .post(`${V1}/auth/login`)
      .send({ email: 'user9@example.com', password: 'Passw0rdSecure' });
    expect(relog.status).toBe(401);
  });
});
