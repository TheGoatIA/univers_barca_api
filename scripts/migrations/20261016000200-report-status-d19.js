/** D19 : statuts de signalement pending|in-progress|ignored → open|in_review|dismissed. Idempotent. */
const MAP = { pending: 'open', 'in-progress': 'in_review', ignored: 'dismissed' };

module.exports = {
  async up(db) {
    const reports = db.collection('moderationreports');
    for (const [from, to] of Object.entries(MAP)) {
      await reports.updateMany({ status: from }, { $set: { status: to } });
    }
  },
  async down() {
    /* Les anciennes valeurs restent acceptées en lecture : aucune action destructive. */
  },
};
