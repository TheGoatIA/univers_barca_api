require('dotenv').config();

module.exports = {
  mongodb: {
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/univers_barca',
    options: {},
  },
  migrationsDir: 'scripts/migrations',
  changelogCollectionName: 'migrations_changelog',
  migrationFileExtension: '.js',
  useFileHash: false,
  moduleSystem: 'commonjs',
};
