// Profil « pic » — pic brutal de trafic (annonce de match, notification push) puis retour à la normale : teste l'élasticité et la récupération.
import { createUsers, mixedIteration, report, thresholds } from './lib.js';

export const options = {
  summaryTrendStats: ['avg', 'min', 'med', 'p(90)', 'p(95)', 'p(99)', 'max'],
  stages: [
    { duration: '30s', target: 10 },
    { duration: '15s', target: Number(__ENV.SPIKE_VUS || 300) },
    { duration: '1m', target: Number(__ENV.SPIKE_VUS || 300) },
    { duration: '15s', target: 10 },
    { duration: '1m', target: 10 },
    { duration: '10s', target: 0 },
  ],
  thresholds: thresholds(),
};

export function setup() {
  return { users: createUsers('spike') };
}

export default function (data) {
  mixedIteration(data.users);
}

export function handleSummary(data) {
  return report('spike', data);
}
