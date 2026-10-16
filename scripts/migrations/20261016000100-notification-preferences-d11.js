/**
 * D11 : `quietHours` passe d'un objet `{enabled,from,to}` à 7 entrées `{start,end}` (lundi → dimanche) ;
 * ajoute `liveGoals` et `followedCompetitions`. Idempotent (ne touche que les documents non migrés).
 */
module.exports = {
  async up(db) {
    const prefs = db.collection('notificationpreferences');
    const cursor = prefs.find({ quietHours: { $not: { $type: 'array' } } });
    for await (const doc of cursor) {
      const q = doc.quietHours;
      const entries =
        q && q.enabled
          ? Array.from({ length: 7 }, () => ({ start: q.from || '23:00', end: q.to || '07:00' }))
          : [];
      await prefs.updateOne({ _id: doc._id }, { $set: { quietHours: entries } });
    }
    await prefs.updateMany({ liveGoals: { $exists: false } }, { $set: { liveGoals: true } });
    await prefs.updateMany(
      { followedCompetitions: { $exists: false } },
      { $set: { followedCompetitions: [] } },
    );
  },
  async down() {
    /* Données conservées : aucune action destructive. */
  },
};
