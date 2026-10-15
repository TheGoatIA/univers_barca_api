import { catchAsync } from '../utils/catchAsync';
import { noContent, ok } from '../utils/response';
import * as users from '../services/user.service';

export const me = catchAsync(async (req, res) => ok(res, await users.getMe(req.auth!.id)));
export const updateMe = catchAsync(async (req, res) =>
  ok(res, await users.updateMe(req.auth!.id, req.body)),
);
export const exportMe = catchAsync(async (req, res) =>
  ok(res, await users.exportData(req.auth!.id)),
);
export const deleteMe = catchAsync(async (req, res) => {
  await users.deleteAccount(req.auth!.id);
  noContent(res);
});
