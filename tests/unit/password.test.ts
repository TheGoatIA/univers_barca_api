import { PASSWORD_POLICY, hashPassword, verifyPassword } from '../../src/services/password.service';

describe('password.service', () => {
  it('hache en Argon2id et vérifie', async () => {
    const h = await hashPassword('Passw0rdSecure');
    expect(h.startsWith('$argon2id$')).toBe(true);
    expect(await verifyPassword(h, 'Passw0rdSecure')).toBe(true);
    expect(await verifyPassword(h, 'mauvais')).toBe(false);
  });
  it('retourne false sur hash corrompu', async () => {
    expect(await verifyPassword('pas-un-hash', 'x')).toBe(false);
  });
  it('applique la politique', () => {
    expect(PASSWORD_POLICY.test('faible')).toBe(false);
    expect(PASSWORD_POLICY.test('Passw0rdSecure')).toBe(true);
  });
});
