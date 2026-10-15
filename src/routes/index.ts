import { Router } from 'express';
import { authLimiter, sensitiveLimiter } from '../middleware/rateLimiter';
import { protect, restrictTo, userOnly } from '../middleware/auth';
import { validate } from '../middleware/validate';
import * as v from '../validators/auth.validator';
import * as auth from '../controllers/auth.controller';
import * as users from '../controllers/user.controller';
import * as adminAuth from '../controllers/admin-auth.controller';
import * as content from '../controllers/content.controller';

/**
 * @swagger
 * tags:
 *   - name: Auth
 *   - name: Utilisateurs
 *   - name: Admin
 *   - name: Contenu
 */
export const buildRouter = (): Router => {
  const r = Router();
  const authRl = authLimiter();
  const sensitiveRl = sensitiveLimiter();

  /**
   * @swagger
   * /auth/register:
   *   post:
   *     tags: [Auth]
   *     summary: Création de compte (consentements RGPD obligatoires)
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema: { $ref: '#/components/schemas/RegisterInput' }
   *     responses:
   *       201: { description: Compte créé, jetons retournés }
   *       409: { description: Email déjà utilisé }
   *       422: { description: Validation échouée }
   */
  r.post('/auth/register', authRl, validate(v.registerSchema), auth.register);
  /**
   * @swagger
   * /auth/login:
   *   post:
   *     tags: [Auth]
   *     summary: Connexion email / mot de passe
   *     responses:
   *       200: { description: Jetons d'accès et de rafraîchissement }
   *       401: { description: Identifiants incorrects }
   */
  r.post('/auth/login', authRl, validate(v.loginSchema), auth.login);
  /**
   * @swagger
   * /auth/refresh:
   *   post:
   *     tags: [Auth]
   *     summary: Rotation du refresh token (détection de réutilisation)
   *     responses:
   *       200: { description: Nouveaux jetons }
   *       401: { description: Refresh invalide, expiré ou réutilisé }
   */
  r.post('/auth/refresh', authRl, validate(v.refreshSchema), auth.refresh);
  /**
   * @swagger
   * /auth/logout:
   *   post:
   *     tags: [Auth]
   *     security: [{ bearerAuth: [] }]
   *     summary: Déconnexion (blacklist du jti + révocation du refresh)
   *     responses:
   *       204: { description: Déconnecté }
   */
  r.post('/auth/logout', protect, validate(v.logoutSchema), auth.logout);
  r.post('/auth/logout-all', protect, userOnly, auth.logoutAll);
  r.post('/auth/verify-email', authRl, validate(v.tokenSchema), auth.verifyEmail);
  r.post('/auth/forgot-password', sensitiveRl, validate(v.forgotSchema), auth.forgotPassword);
  r.post('/auth/reset-password', sensitiveRl, validate(v.resetSchema), auth.resetPassword);
  r.post('/auth/consents', protect, userOnly, validate(v.consentSchema), auth.setConsent);

  /**
   * @swagger
   * /users/me:
   *   get:
   *     tags: [Utilisateurs]
   *     security: [{ bearerAuth: [] }]
   *     summary: Profil de l'utilisateur connecté
   *     responses:
   *       200: { description: Profil }
   */
  r.get('/users/me', protect, userOnly, users.me);
  r.patch('/users/me', protect, userOnly, validate(v.updateMeSchema), users.updateMe);
  r.get('/users/me/export', protect, userOnly, sensitiveRl, users.exportMe);
  r.delete('/users/me', protect, userOnly, sensitiveRl, users.deleteMe);

  // Back-office : authentification distincte (cookie httpOnly + 2FA TOTP)
  r.post('/admin/auth/login', authRl, validate(v.adminLoginSchema), adminAuth.login);
  r.post('/admin/auth/refresh', authRl, adminAuth.refresh);
  r.post('/admin/auth/logout', adminAuth.logout);
  r.post(
    '/admin/auth/2fa/setup',
    protect,
    restrictTo('content-manager', 'moderator', 'super-admin'),
    adminAuth.totpSetup,
  );
  r.post(
    '/admin/auth/2fa/confirm',
    protect,
    restrictTo('content-manager', 'moderator', 'super-admin'),
    validate(v.totpSchema),
    adminAuth.totpConfirm,
  );

  /**
   * @swagger
   * /players:
   *   get:
   *     tags: [Contenu]
   *     summary: Liste paginée des joueurs publiés
   *     responses:
   *       200: { description: Page de joueurs }
   */
  r.get('/players', validate(v.listQuerySchema, 'query'), content.listPlayers);
  r.get('/players/:id', validate(v.idParamSchema, 'params'), content.getPlayer);
  r.get('/matches', validate(v.listQuerySchema, 'query'), content.listMatches);
  return r;
};
