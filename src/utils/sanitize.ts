import mongoSanitize from 'mongo-sanitize';

/** Supprime les opérateurs MongoDB ($, .) des entrées utilisateur (injection NoSQL). */
export const sanitizeInput = <T>(value: T): T => mongoSanitize(value);

/** Échappe les caractères spéciaux d'une chaîne utilisée dans une RegExp. */
export const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
