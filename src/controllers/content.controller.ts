import { catchAsync } from '../utils/catchAsync';
import { ok } from '../utils/response';
import { buildPage, parsePage } from '../utils/pagination';
import { Match, Player } from '../models';
import { AppError } from '../utils/appError';
import { escapeRegex } from '../utils/sanitize';

export const listPlayers = catchAsync(async (req, res) => {
  const page = parsePage(req.query as Record<string, unknown>);
  const filter: Record<string, unknown> = { status: 'published' };
  if (req.query.q) filter.fullName = new RegExp(escapeRegex(String(req.query.q)), 'i');
  const [items, total] = await Promise.all([
    Player.find(filter).sort({ fullName: 1 }).skip(page.skip).limit(page.limit),
    Player.countDocuments(filter),
  ]);
  ok(
    res,
    buildPage(
      items.map((i) => i.toJSON()),
      total,
      page,
    ),
  );
});

export const getPlayer = catchAsync(async (req, res) => {
  const p = await Player.findOne({ _id: req.params.id, status: 'published' });
  if (!p) throw AppError.notFound('Joueur introuvable');
  ok(res, p.toJSON());
});

export const listMatches = catchAsync(async (req, res) => {
  const page = parsePage(req.query as Record<string, unknown>);
  const [items, total] = await Promise.all([
    Match.find().sort({ kickoffAt: -1 }).skip(page.skip).limit(page.limit),
    Match.countDocuments(),
  ]);
  ok(
    res,
    buildPage(
      items.map((i) => i.toJSON()),
      total,
      page,
    ),
  );
});
