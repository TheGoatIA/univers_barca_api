// @ts-check
const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const prettier = require('eslint-config-prettier');
const globals = require('globals');

module.exports = tseslint.config(
  { ignores: ['dist/', 'node_modules/', 'coverage/', 'swagger.json'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    languageOptions: { globals: { ...globals.node, ...globals.es2022 } },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-non-null-assertion': 'off',
      'no-console': 'warn',
    },
  },
  {
    files: ['tests/**/*.ts', '**/*.test.ts', 'scripts/**/*.ts'],
    languageOptions: { globals: { ...globals.jest } },
    rules: { 'no-console': 'off' },
  },
);
