import path from 'path';
import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const level = process.env.LOG_LEVEL || (process.env.NODE_ENV === 'production' ? 'info' : 'debug');
const isTest = process.env.NODE_ENV === 'test';

const REDACT = [
  'password',
  'token',
  'refreshToken',
  'accessToken',
  'authorization',
  'secret',
  'cookie',
];

/** Masque les champs sensibles avant écriture dans les logs. */
const redact = winston.format((info) => {
  const walk = (obj: any, depth = 0): any => {
    if (!obj || typeof obj !== 'object' || depth > 4) return obj;
    for (const k of Object.keys(obj)) {
      if (REDACT.some((r) => k.toLowerCase().includes(r))) obj[k] = '[REDACTED]';
      else obj[k] = walk(obj[k], depth + 1);
    }
    return obj;
  };
  return walk(info);
});

const transports: winston.transport[] = [new winston.transports.Console({ silent: isTest })];

if (process.env.NODE_ENV === 'production' && process.env.LOG_TO_FILE !== 'false') {
  transports.push(
    new DailyRotateFile({
      dirname: process.env.LOG_DIR || path.join(process.cwd(), 'logs'),
      filename: 'api-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      maxFiles: '14d',
      zippedArchive: true,
    }),
  );
}

export const logger = winston.createLogger({
  level,
  defaultMeta: { service: 'univers-barca-api' },
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    redact(),
    process.env.NODE_ENV === 'production' || process.env.LOG_FORMAT === 'json'
      ? winston.format.json()
      : winston.format.combine(winston.format.colorize(), winston.format.simple()),
  ),
  transports,
});
