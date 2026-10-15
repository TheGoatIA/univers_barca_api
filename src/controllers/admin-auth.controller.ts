import { catchAsync } from '../utils/catchAsync';
import { noContent, ok } from '../utils/response';
import * as admin from '../services/admin-auth.service';
import { AppError } from '../utils/appError';

const COOKIE = 'ub_admin_rt';

export const login = catchAsync(async (req, res) => {
  const { refreshToken, ...body } = await admin.loginAdmin(
    req.body.email,
    req.body.password,
    req.body.totp,
    { ip: req.ip, userAgent: req.header('user-agent') },
  );
  res.cookie(COOKIE, refreshToken, admin.adminCookieOptions);
  ok(res, body);
});
export const refresh = catchAsync(async (req, res) => {
  const token = req.cookies?.[COOKIE];
  if (!token) throw AppError.unauthorized('Session absente', 'REFRESH_INVALID');
  ok(res, await admin.refreshAdmin(token));
});
export const logout = catchAsync(async (req, res) => {
  await admin.logoutAdmin(req.cookies?.[COOKIE]);
  res.clearCookie(COOKIE, { path: admin.adminCookieOptions.path });
  noContent(res);
});
export const totpSetup = catchAsync(async (req, res) =>
  ok(res, await admin.setupTotp(req.auth!.id)),
);
export const totpConfirm = catchAsync(async (req, res) => {
  await admin.confirmTotp(req.auth!.id, req.body.token);
  ok(res, { enabled: true });
});
