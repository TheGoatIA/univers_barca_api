/** D18 : renseigne `publicId` (slug unique) pour les joueurs existants. Idempotent. */
const slugify = (s) =>
  String(s)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

module.exports = {
  async up(db) {
    const players = db.collection('players');
    // Index unique sparse (équivalent à celui du modèle) ; ignoré s'il existe déjà.
    await players
      .createIndex({ publicId: 1 }, { unique: true, sparse: true })
      .catch(() => undefined);
    const taken = new Set(
      (
        await players
          .find({ publicId: { $type: 'string' } }, { projection: { publicId: 1 } })
          .toArray()
      ).map((p) => p.publicId),
    );
    const cursor = players.find(
      { $or: [{ publicId: { $exists: false } }, { publicId: null }] },
      { projection: { fullName: 1 } },
    );
    for await (const p of cursor) {
      const root = slugify(p.fullName || '') || 'joueur';
      let slug = root;
      for (let n = 2; taken.has(slug); n += 1) slug = `${root}-${n}`;
      taken.add(slug);
      await players.updateOne({ _id: p._id }, { $set: { publicId: slug } });
    }
  },
  async down() {
    /* Données conservées : aucune action destructive. */
  },
};
