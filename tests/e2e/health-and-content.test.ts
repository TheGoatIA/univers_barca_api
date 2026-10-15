import { Player } from '../../src/models';
import { api, cleanup, connect } from '../helpers/app';

beforeAll(async () => {
  await connect();
  await Player.create([
    { fullName: 'Lamine Yamal', position: 'AD', status: 'published' },
    { fullName: 'Brouillon', status: 'draft' },
  ]);
});
afterAll(cleanup);

describe('Santé', () => {
  it('/health répond 200', async () => {
    const res = await api().get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });
  it('/health/deep vérifie Mongo et Redis', async () => {
    const res = await api().get('/health/deep');
    expect(res.status).toBe(200);
    expect(res.body.checks.mongo).toBe('up');
  });
});

describe('Contenu public', () => {
  it('liste uniquement les joueurs publiés, paginés', async () => {
    const res = await api().get('/api/v1/players?limit=10');
    expect(res.status).toBe(200);
    expect(res.body.data).toMatchObject({ total: 1, page: 1, hasMore: false });
    expect(res.body.data.items[0].fullName).toBe('Lamine Yamal');
  });
  it('404 formaté pour une route inconnue', async () => {
    const res = await api().get('/api/v1/inconnu');
    expect(res.status).toBe(404);
    expect(res.body).toMatchObject({
      success: false,
      error: { code: 'ROUTE_NOT_FOUND' },
    });
  });
  it('400 pour un identifiant invalide', async () => {
    const res = await api().get('/api/v1/players/pas-un-id');
    expect(res.status).toBe(422);
  });
});
