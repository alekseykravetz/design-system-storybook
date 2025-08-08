// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import storybookPlugin from 'eslint-plugin-storybook';

export default [
  // Ignore the dist directory
  {
    ignores: ['dist/'],
  },

  // Main configuration for JS/JSX files
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      // Inherit recommended language options
      ...js.configs.recommended.languageOptions,
      globals: {
        // Add browser globals
        ...globals.browser,
      },
      parserOptions: {
        // Add JSX support
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      // Inherit recommended rules
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // Your custom rules
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': 'warn',
    },
  },

  // Apply Storybook rules to story files
  ...storybookPlugin.configs['flat/recommended'],

  // Add Prettier config as the last item.
  prettierRecommended,
];
