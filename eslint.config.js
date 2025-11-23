// eslint.config.js (root)
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import n from 'eslint-plugin-n';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
  { ignores: ['node_modules', 'dist', 'build'] },

  // Браузерный код (без plugin-n)
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2023,
      },
    },
    plugins: {
      import: importPlugin,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,

      'prettier/prettier': 'error',
      'import/extensions': ['error', 'ignorePackages', { js: 'always' }],

      'max-len': [
        'error',
        {
          code: 80,
          ignoreComments: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      'no-multi-spaces': [
        'error',
        { exceptions: { BinaryExpression: true, VariableDeclarator: true } },
      ],
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      quotes: ['error', 'single', { avoidEscape: true }],
    },
  },

  // Node/скрипты/конфиги (gulp, scripts) — plugin-n без "публикационных" правил
  {
    files: [
      'gulpfile*.js',
      'scripts/**/*.{js,mjs}',
      'webpack.config.*',
      'terser.config.*',
    ],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: { ...globals.node, ...globals.es2023 },
    },
    plugins: { n, import: importPlugin, prettier: eslintPluginPrettier },
    settings: {
      'import/resolver': {
        node: { extensions: ['.js', '.mjs', '.cjs'] },
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      // проверяем зависимости через plugin:import (devDeps разрешаем)
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

      // отключаем "публикационные" проверки plugin-n для скриптов
      'n/no-unpublished-import': 'off',
      'n/no-unpublished-require': 'off',

      // дублирующую "missing" проверку в n выключаем, оставляем её за plugin:import
      'n/no-missing-import': 'off',
      'n/no-missing-require': 'off',

      'prettier/prettier': 'error',
    },
  },

  // Общий выключатель конфликтов с Prettier
  prettier,
];
