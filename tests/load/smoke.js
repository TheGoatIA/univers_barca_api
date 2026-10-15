// Profil « smoke » — vérification rapide : 1 utilisateur virtuel, 30 s. Valide que la plateforme répond avant de charger.
import { createUsers, mixedIteration, report, thresholds } from './lib.js';

export const options = {
  summaryTrendStats: ['avg', 'min', 'med', 'p(90)', 'p(95)', 'p(99)', 'max'],
  vus: 1,
  duration: '30s',
  thresholds: thresholds(),
};

export function setup() {
  return { users: createUsers('smoke') };
}

export default function (data) {
  mixedIteration(data.users);
}

export function handleSummary(data) {
  return report('smoke', data);
}
