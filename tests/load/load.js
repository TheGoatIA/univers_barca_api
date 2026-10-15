// Profil « charge nominale » — montée à LOAD_VUS (défaut 50) utilisateurs, palier 5 min : mesure le comportement sous trafic attendu.
import { createUsers, mixedIteration, report, thresholds } from './lib.js';

export const options = {
  summaryTrendStats: ['avg', 'min', 'med', 'p(90)', 'p(95)', 'p(99)', 'max'],
  stages: [
    { duration: '1m', target: Number(__ENV.LOAD_VUS || 50) },
    { duration: __ENV.LOAD_HOLD || '5m', target: Number(__ENV.LOAD_VUS || 50) },
    { duration: '30s', target: 0 },
  ],
  thresholds: thresholds(),
};

export function setup() {
  return { users: createUsers('load') };
}

export default function (data) {
  mixedIteration(data.users);
}

export function handleSummary(data) {
  return report('load', data);
}
