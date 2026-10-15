// Compare un résultat k6 (tests/load/results/<profil>.json) à la référence versionnée (tests/load/baseline.json).
// Avertit (sans échouer) si p95 ou débit se dégradent de plus de 30 % : le suivi de tendance reste lisible malgré le bruit des runners.
import fs from 'node:fs';

const profile = process.argv[2] ?? 'load';
const resultPath = `tests/load/results/${profile}.json`;
if (!fs.existsSync(resultPath)) {
  console.log(`Aucun résultat pour ${profile}`);
  process.exit(0);
}
const res = JSON.parse(fs.readFileSync(resultPath, 'utf8'));
const baseline = fs.existsSync('tests/load/baseline.json')
  ? JSON.parse(fs.readFileSync('tests/load/baseline.json', 'utf8'))
  : {};
const ref = baseline[profile];
const lines = [
  `#### Tendance — ${profile}`,
  '',
  '| Indicateur | Référence | Actuel | Écart |',
  '| --- | --- | --- | --- |',
];
let warn = false;
const row = (label, before, now, worseWhenHigher) => {
  if (before == null || now == null)
    return lines.push(`| ${label} | ${before ?? '—'} | ${now?.toFixed?.(1) ?? '—'} | — |`);
  const delta = ((now - before) / before) * 100;
  const bad = worseWhenHigher ? delta > 30 : delta < -30;
  warn ||= bad;
  lines.push(
    `| ${label} | ${before.toFixed(1)} | ${now.toFixed(1)} | ${delta >= 0 ? '+' : ''}${delta.toFixed(0)} % ${bad ? '⚠️' : ''} |`,
  );
};
row('p95 (ms)', ref?.p95, res.p95, true);
row('p99 (ms)', ref?.p99, res.p99, true);
row('Débit (req/s)', ref?.rps, res.rps, false);
console.log(lines.join('\n'));
if (warn)
  console.log(
    `::warning::Régression de performance détectée sur le profil ${profile} (voir le résumé du job)`,
  );
if (!ref)
  console.log(
    '\nPas de référence : après un run sur environnement représentatif, copier ces valeurs dans tests/load/baseline.json.',
  );
