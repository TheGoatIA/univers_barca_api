/* Génère swagger.json (spec OpenAPI pré-générée). `--check` : échoue si le fichier versionné diffère (non-régression de contrat). */
import fs from 'fs';
import path from 'path';
process.env.NODE_ENV ??= 'test';
process.env.MONGODB_URI ??= 'mongodb://localhost:27017/x';
process.env.JWT_ACCESS_SECRET ??= 'x'.repeat(40);
process.env.JWT_REFRESH_SECRET ??= 'y'.repeat(40);
import { buildSpec } from '../src/docs/swagger';

const target = path.join(__dirname, '..', 'swagger.json');
const next = JSON.stringify(buildSpec(), null, 2) + '\n';

if (process.argv.includes('--check')) {
  const current = fs.existsSync(target) ? fs.readFileSync(target, 'utf8') : '';
  if (current !== next) {
    console.error(
      '❌ swagger.json est obsolète. Lancez "npm run export:swagger" et committez le résultat (changement de contrat API).',
    );
    process.exit(1);
  }
  console.log('✅ Contrat OpenAPI à jour');
} else {
  fs.writeFileSync(target, next);
  console.log('swagger.json généré');
}
