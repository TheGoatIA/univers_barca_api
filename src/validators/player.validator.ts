import Joi from 'joi';
import {
  HEIGHT_CM_MAX,
  HEIGHT_CM_MIN,
  PLAYER_POSITIONS,
  STRONG_FEET,
} from '../models/player.constants';

/** Champs joueur communs (D18). `publicId` est généré côté serveur si absent. */
export const playerFields = {
  publicId: Joi.string()
    .pattern(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    .max(80),
  position: Joi.string().valid(...PLAYER_POSITIONS),
  strongFoot: Joi.string().valid(...STRONG_FEET),
  heightCm: Joi.number().integer().min(HEIGHT_CM_MIN).max(HEIGHT_CM_MAX),
};

export const playerBodySchema = Joi.object({
  fullName: Joi.string().trim().min(1).max(120).required(),
  ...playerFields,
});
