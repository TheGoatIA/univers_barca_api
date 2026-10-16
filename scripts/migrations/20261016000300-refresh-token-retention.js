/**
 * Rétention des refresh tokens : TTL sur `purgeAt` (expiré + 30 j, révoqué + 90 j) à la place du TTL sur
 * `expiresAt`. Renseigne `purgeAt` pour les documents existants. Idempotent.
 */
const DAY = 86_400_000;

module.exports = {
  async up(db) {
    const col = db.collection('refreshtokens');
    await col.dropIndex('expiresAt_1').catch(() => undefined);
    for await (const d of col.find({ purgeAt: { $exists: false } })) {
      const expired = d.expiresAt.getTime() + 30 * DAY;
      const revoked = d.revokedAt ? d.revokedAt.getTime() + 90 * DAY : 0;
      await col.updateOne(
        { _id: d._id },
        { $set: { purgeAt: new Date(Math.max(expired, revoked)) } },
      );
    }
    await col.createIndex({ purgeAt: 1 }, { expireAfterSeconds: 0 });
  },
  async down() {
    /* Données conservées : aucune action destructive. */
  },
};
