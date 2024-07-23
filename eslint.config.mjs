import { FlatCompat } from '@eslint/eslintrc';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';
const compat = new FlatCompat();

export default tseslint.config(
  tseslint.configs.eslintRecommended,
  ...tseslint.configs.recommendedTypeChecked,
  // ...compat.config(importPlugin.configs.recommended),
  // ...compat.config(importPlugin.configs.typescript),
  ...compat.config(prettierPlugin.configs.recommended),
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
      },
    },
    plugins: {
      ...(kafkaAuthPlugin && { 'kafka-auth': kafkaAuthPlugin }),
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/no-dupe-class-members': ['error'],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/unbound-method': 'error',
      'consistent-return': 'error',
      // 'import/namespace': 'off',
      // 'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
      'no-await-in-loop': 0,
      'no-duplicate-imports': 'error',
      'no-restricted-imports': ['error', { patterns: ['src/*'] }],
      'prefer-template': 'error',
      quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      'spaced-comment': ['error', 'always'],
      ...(kafkaAuthPlugin && {
        'kafka-auth/kafka-auth-consume': ['error', { appId: 'transfer-manager' }],
        'kafka-auth/kafka-auth-produce': ['error', { appId: 'transfer-manager' }],
      }),
    },
  },
  {
    files: ['**/*.spec.ts', '**/*.integration-spec.ts'],
    rules: {
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
    },
  },
);
