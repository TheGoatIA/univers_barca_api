import { AppError } from '../../src/utils/appError';
import { buildPage, parsePage } from '../../src/utils/pagination';
import { escapeRegex, sanitizeInput } from '../../src/utils/sanitize';

describe('pagination', () => {
  it('borne limit et page', () => {
    expect(parsePage({ page: '0', limit: '9999' })).toEqual({
      page: 1,
      limit: 100,
      skip: 0,
    });
    expect(parsePage({ page: '3', limit: '10' }).skip).toBe(20);
  });
  it('calcule hasMore', () => {
    const p = buildPage([1], 25, { page: 1, limit: 10, skip: 0 });
    expect(p).toMatchObject({ totalPages: 3, hasMore: true });
  });
});

describe('sanitize', () => {
  it('retire les opérateurs Mongo', () => {
    expect(sanitizeInput({ email: { $gt: '' } })).toEqual({ email: {} });
  });
  it('échappe les regex', () => {
    expect(escapeRegex('a.b*c')).toBe('a\\.b\\*c');
  });
});

describe('AppError', () => {
  it('expose statut et code', () => {
    const e = AppError.notFound('x');
    expect([e.statusCode, e.code, e.isOperational]).toEqual([404, 'NOT_FOUND', true]);
  });
});
