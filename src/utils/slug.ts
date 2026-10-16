/** Slug ASCII minuscule (accents retirés, tirets) — base du `publicId` joueur (D18). */
export const slugify = (input: string): string =>
  input
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

/** Slug unique : suffixe `-2`, `-3`… tant que `isTaken` répond vrai. */
export const uniqueSlug = async (
  base: string,
  isTaken: (slug: string) => Promise<boolean> | boolean,
): Promise<string> => {
  const root = slugify(base) || 'joueur';
  let candidate = root;
  for (let n = 2; await isTaken(candidate); n += 1) candidate = `${root}-${n}`;
  return candidate;
};
