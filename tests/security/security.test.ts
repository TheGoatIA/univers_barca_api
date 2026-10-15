import jwt from 'jsonwebtoken';
import { api, cleanup, connect, validUser } from '../helpers/app';

const V1 = '/api/v1';
beforeAll(connect);
afterAll(cleanup);

describe('En-têtes HTTP de sécurité', () => {
  it('helmet actif, x-powered-by masqué', async () => {
    const res = await api().get('/health');
    expect(res.headers['x-powered-by']).toBeUndefined();
    expect(res.headers['x-content-type-options']).toBe('nosniff');
    expect(res.headers['strict-transport-security']).toBeDefined();
    expect(res.headers['x-request-id']).toBeDefined();
  });
});

describe('Injection NoSQL', () => {
  it("n'authentifie pas avec un opérateur Mongo", async () => {
    await api().post(`${V1}/auth/register`).send(validUser(1));
    const res = await api()
      .post(`${V1}/auth/login`)
      .send({ email: { $gt: '' }, password: { $gt: '' } });
    expect([401, 422]).toContain(res.status);
  });
});

describe('Contrôle d’accès', () => {
  it('401 sans jeton', async () => {
    expect((await api().get(`${V1}/users/me`)).status).toBe(401);
  });
  it('401 avec un jeton signé par un autre secret', async () => {
    const forged = jwt.sign({ id: 'x', kind: 'user' }, 'x'.repeat(40), {
      algorithm: 'HS256',
      issuer: 'univers-barca',
    });
    expect(
      (await api().get(`${V1}/users/me`).set('Authorization', `Bearer ${forged}`)).status,
    ).toBe(401);
  });
  it("un jeton utilisateur n'ouvre pas le back-office", async () => {
    const reg = await api().post(`${V1}/auth/register`).send(validUser(2));
    const res = await api()
      .post(`${V1}/admin/auth/2fa/setup`)
      .set('Authorization', `Bearer ${reg.body.data.accessToken}`);
    expect(res.status).toBe(403);
  });
  it('le refresh admin exige le cookie httpOnly', async () => {
    expect((await api().post(`${V1}/admin/auth/refresh`)).status).toBe(401);
  });
});

describe('Fuite d’informations', () => {
  it('/metrics refusé hors IP autorisées', async () => {
    const res = await api().get('/metrics').set('X-Forwarded-For', '8.8.8.8');
    expect(res.status).toBe(403);
  });
  it('/api-docs protégé par Basic auth', async () => {
    expect((await api().get('/api-docs.json')).status).toBe(401);
  });
  it('erreur 500 sans stack en réponse (hors dev)', async () => {
    const res = await api()
      .post(`${V1}/auth/login`)
      .set('Content-Type', 'application/json')
      .send('{bad json');
    expect(res.status).toBe(400);
    expect(JSON.stringify(res.body)).not.toContain('node_modules');
  });
  it('CORS refuse une origine inconnue', async () => {
    const res = await api().get('/health').set('Origin', 'http://evil.example');
    expect(res.status).toBe(403);
  });
});
