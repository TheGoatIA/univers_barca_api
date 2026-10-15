/** @type {import('jest').Config} */
const base = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
  setupFiles: ['<rootDir>/tests/setup.ts'],
  clearMocks: true,
  restoreMocks: true,
};

module.exports = {
  testTimeout: 60000,
  projects: [
    {
      ...base,
      displayName: 'unit',
      testMatch: ['<rootDir>/tests/unit/**/*.test.ts'],
    },
    {
      ...base,
      displayName: 'integration',
      testMatch: ['<rootDir>/tests/integration/**/*.test.ts'],
      globalSetup: '<rootDir>/tests/helpers/global-setup.ts',
    },
    {
      ...base,
      displayName: 'e2e',
      testMatch: ['<rootDir>/tests/e2e/**/*.test.ts'],
      globalSetup: '<rootDir>/tests/helpers/global-setup.ts',
    },
    {
      ...base,
      displayName: 'security',
      testMatch: ['<rootDir>/tests/security/**/*.test.ts'],
      globalSetup: '<rootDir>/tests/helpers/global-setup.ts',
    },
  ],
  forceExit: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/server.ts',
    '!src/tracing.ts',
    '!src/types/**',
    '!src/i18n/**',
    '!src/docs/**',
    '!src/jobs/**',
    '!src/models/**',
  ],
  coverageReporters: ['text', 'lcov', 'cobertura', 'html', 'json-summary'],
  coverageThreshold: {
    global: { lines: 30, functions: 30, branches: 15, statements: 30 },
    './src/services/auth.service.ts': { lines: 60 },
    './src/services/token.service.ts': { lines: 60 },
    './src/services/password.service.ts': { lines: 60 },
  },
};
