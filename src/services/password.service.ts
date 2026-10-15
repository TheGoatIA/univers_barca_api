import argon2 from 'argon2';

// Argon2id — paramètres OWASP (19 MiB, t=2, p=1) ; relevés en production si le matériel le permet.
const OPTIONS: Parameters<typeof argon2.hash>[1] = {
  type: argon2.argon2id,
  memoryCost: 19_456,
  timeCost: 2,
  parallelism: 1,
};

export const PASSWORD_POLICY = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,128}$/;

export const hashPassword = (plain: string) => argon2.hash(plain, OPTIONS);

export const verifyPassword = async (hash: string, plain: string): Promise<boolean> => {
  try {
    return await argon2.verify(hash, plain);
  } catch {
    return false;
  }
};

export const needsRehash = (hash: string) => argon2.needsRehash(hash, OPTIONS);
