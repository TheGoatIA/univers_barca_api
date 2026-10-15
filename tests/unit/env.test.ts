import { loadEnv } from '../../src/config/env';

const base = {
  MONGODB_URI: 'mongodb://localhost:27017/x',
  JWT_ACCESS_SECRET: 'a'.repeat(40),
  JWT_REFRESH_SECRET: 'b'.repeat(40),
};

describe('loadEnv', () => {
  it('applique les valeurs par défaut', () => {
    const e = loadEnv({ ...base } as NodeJS.ProcessEnv);
    expect(e.PORT).toBe(5000);
    expect(e.JWT_ACCESS_TTL).toBe('15m');
  });
  it('refuse des secrets JWT identiques', () => {
    expect(() =>
      loadEnv({
        ...base,
        JWT_REFRESH_SECRET: base.JWT_ACCESS_SECRET,
      } as NodeJS.ProcessEnv),
    ).toThrow(/Configuration/);
  });
  it('refuse un secret trop court', () => {
    expect(() => loadEnv({ ...base, JWT_ACCESS_SECRET: 'court' } as NodeJS.ProcessEnv)).toThrow();
  });
  it('découpe CORS_ORIGINS', () => {
    expect(
      loadEnv({
        ...base,
        CORS_ORIGINS: 'http://a.io, http://b.io',
      } as NodeJS.ProcessEnv).CORS_ORIGINS,
    ).toEqual(['http://a.io', 'http://b.io']);
  });
});
