// Profil « endurance » — charge modérée prolongée (SOAK_DURATION, défaut 30 min) : détecte fuites mémoire, croissance des connexions, dégradation lente.
import { createUsers, mixedIteration, report, thresholds } from './lib.js';

export const options = {
  summaryTrendStats: ['avg', 'min', 'med', 'p(90)', 'p(95)', 'p(99)', 'max'],
  stages: [
    { duration: '2m', target: Number(__ENV.SOAK_VUS || 30) },
    { duration: __ENV.SOAK_DURATION || '30m', target: Number(__ENV.SOAK_VUS || 30) },
    { duration: '1m', target: 0 },
  ],
  thresholds: thresholds(),
};

export function setup() {
  return { users: createUsers('soak') };
}

export default function (data) {
  mixedIteration(data.users);
}

export function handleSummary(data) {
  return report('soak', data);
}
