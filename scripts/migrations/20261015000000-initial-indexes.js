/** Migration initiale : synchronise les index critiques (idempotent). */
module.exports = {
  async up(db) {
    await db.collection('users').createIndex({ email: 1 }, { unique: true, sparse: true });
    await db.collection('refreshtokens').createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 });
    await db.collection('refreshtokens').createIndex({ tokenHash: 1 }, { unique: true });
    await db.collection('communitygroups').createIndex({ location: '2dsphere' }).catch(() => undefined);
  },
  async down() {
    /* Les index sont conservés : aucune action destructive. */
  },
};
