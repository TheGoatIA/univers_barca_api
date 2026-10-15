import { Paginated } from './response';

export interface PageQuery {
  page: number;
  limit: number;
  skip: number;
}

export const parsePage = (query: Record<string, unknown>, maxLimit = 100): PageQuery => {
  const page = Math.max(1, Number.parseInt(String(query.page ?? '1'), 10) || 1);
  const limit = Math.min(
    maxLimit,
    Math.max(1, Number.parseInt(String(query.limit ?? '20'), 10) || 20),
  );
  return { page, limit, skip: (page - 1) * limit };
};

export const buildPage = <T>(
  items: T[],
  total: number,
  { page, limit }: PageQuery,
): Paginated<T> => {
  const totalPages = Math.max(1, Math.ceil(total / limit));
  return {
    items,
    total,
    page,
    totalPages,
    hasMore: page < totalPages,
    nextCursor: null,
  };
};
