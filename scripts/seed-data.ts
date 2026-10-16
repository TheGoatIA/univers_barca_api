/* Peuplement de données de démonstration. Usage : npm run seed [-- --force]  (--force vide les collections de contenu) */
import 'dotenv/config';
import mongoose from 'mongoose';
import { Competition, Player, Team, Match, Badge, ScoringRule } from '../src/models';
import { bootstrapSuperAdmin } from '../src/services/admin-auth.service';

const force = process.argv.includes('--force');

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI manquant');
  if (process.env.NODE_ENV === 'production' && !force)
    throw new Error('Refus de seed en production sans --force');
  await mongoose.connect(uri);
  if (force)
    await Promise.all([
      Player.deleteMany({}),
      Team.deleteMany({}),
      Competition.deleteMany({}),
      Match.deleteMany({}),
      Badge.deleteMany({}),
      ScoringRule.deleteMany({}),
    ]);

  const [barca, real] = await Team.create([
    { name: 'FC Barcelone', shortName: 'FCB', type: 'club' },
    { name: 'Real Madrid', shortName: 'RMA', type: 'club' },
  ]);
  const liga = await Competition.create({ name: 'La Liga', type: 'league' });
  await Player.create([
    {
      fullName: 'Lamine Yamal',
      position: 'AD',
      strongFoot: 'left',
      heightCm: 180,
      shirtNumber: 10,
      nationality: 'Espagne',
      status: 'published',
      bioI18n: {
        fr: 'Ailier prodige formé à La Masia.',
        en: 'Prodigy winger from La Masia.',
        es: 'Extremo prodigio de La Masia.',
      },
    },
    {
      fullName: 'Pedri',
      position: 'MC',
      strongFoot: 'right',
      heightCm: 174,
      shirtNumber: 8,
      nationality: 'Espagne',
      status: 'published',
    },
    {
      fullName: 'Robert Lewandowski',
      position: 'BU',
      strongFoot: 'right',
      heightCm: 185,
      shirtNumber: 9,
      nationality: 'Pologne',
      status: 'published',
    },
  ]);
  await Match.create({
    homeTeamId: barca._id,
    awayTeamId: real._id,
    competitionId: liga._id,
    matchday: 'J10',
    kickoffAt: new Date(Date.now() + 7 * 86_400_000),
    status: 'scheduled',
  });

  const email = process.env.ADMIN_BOOTSTRAP_EMAIL;
  const pwd = process.env.ADMIN_BOOTSTRAP_PASSWORD;
  if (email && pwd) await bootstrapSuperAdmin(email, pwd);
  console.log('✅ Seed terminé');
  await mongoose.disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
