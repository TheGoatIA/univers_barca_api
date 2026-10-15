import { Request } from 'express';
import { catchAsync } from '../utils/catchAsync';
import { created, noContent, ok } from '../utils/response';
import * as auth from '../services/auth.service';
import { env } from '../config/env';

const device = (req: Request) => ({
  userAgent: req.header('user-agent')?.slice(0, 200),
  ip: req.ip,
  deviceId: req.header('x-device-id')?.slice(0, 64),
  platform: (['ios', 'android', 'web'] as const).find((p) => p === req.header('x-platform')),
});
const bearer = (req: Request) => (req.header('authorization') ?? '').replace(/^Bearer /, '');

export const register = catchAsync(async (req, res) => {
  const { verificationToken, ...result } = await auth.register(req.body, device(req));
  // En dev/test seulement : exposé pour faciliter les tests ; en prod il part uniquement par email.
  created(
    res,
    env.NODE_ENV === 'production'
      ? result
      : { ...result, _devVerificationToken: verificationToken },
  );
});
export const login = catchAsync(async (req, res) =>
  ok(res, await auth.login(req.body.email, req.body.password, device(req))),
);
export const refresh = catchAsync(async (req, res) =>
  ok(res, await auth.refresh(req.body.refreshToken, device(req))),
);
export const logout = catchAsync(async (req, res) => {
  await auth.logout(bearer(req), req.body?.refreshToken);
  noContent(res);
});
export const logoutAll = catchAsync(async (req, res) => {
  await auth.logoutAll(req.auth!.id, bearer(req));
  noContent(res);
});
export const verifyEmail = catchAsync(async (req, res) => {
  await auth.verifyEmail(req.body.token);
  ok(res, { verified: true });
});
export const forgotPassword = catchAsync(async (req, res) => {
  await auth.forgotPassword(req.body.email);
  ok(res, { message: 'Si un compte existe, un email a été envoyé.' });
});
export const resetPassword = catchAsync(async (req, res) => {
  await auth.resetPassword(req.body.token, req.body.password);
  ok(res, { reset: true });
});
export const setConsent = catchAsync(async (req, res) =>
  created(res, await auth.setConsent(req.auth!.id, req.body.type, req.body.granted)),
);
