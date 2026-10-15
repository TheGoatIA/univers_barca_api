// Profil « stress » — paliers croissants jusqu'à STRESS_VUS (défaut 400) : repère le point de rupture et la saturation (CPU, Mongo, Redis).
import { createUsers, mixedIteration, report, thresholds } from './lib.js';

export const options = {
  summaryTrendStats: ['avg', 'min', 'med', 'p(90)', 'p(95)', 'p(99)', 'max'],
  stages: [
    { duration: '1m', target: 50 },
    { duration: '2m', target: 100 },
    { duration: '2m', target: 200 },
    { duration: '2m', target: Number(__ENV.STRESS_VUS || 400) },
    { duration: '1m', target: 0 },
  ],
  thresholds: thresholds(),
};

export function setup() {
  return { users: createUsers('stress') };
}

export default function (data) {
  mixedIteration(data.users);
}

export function handleSummary(data) {
  return report('stress', data);
}
