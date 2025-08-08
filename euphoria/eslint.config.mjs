// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import { FlatCompat } from '@eslint/eslintrc';
import prettierConfigRecommended from 'eslint-plugin-prettier/recommended';
import { fixupConfigRules } from '@eslint/compat';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const patchedConfig = fixupConfigRules([
  ...compat.extends('next/core-web-vitals'),
]);

const config = [
  ...patchedConfig,
  ...ts.configs.recommended,
  prettierConfigRecommended,
  { ignores: ['.next/*', 'dist'] },
  {
    rules: {
      'react/display-name': 0,
      'no-console': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'react/self-closing-comp': [
        'warn',
        {
          component: true,
          html: true,
        },
      ],
    },
  },
  ...storybook.configs['flat/recommended'],
];

export default config;
