module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    complexity: [
      'error',
      {
        max: 15,
      },
    ],
    'no-debugger': 'error',
    'prettier/prettier': 'error',
    curly: 'error',
  },
  overrides: [
    {
      files: ['src/**/*'],
      /** @see https://eslint.org/docs/latest/use/configure/language-options#specifying-environments */
      env: {
        browser: true,
        commonjs: true,
      },
    },
    {
      files: ['**/__tests__/**/*', '**/__mocks__/**/*', '**/__integration__/**/*'],
      env: {
        jest: true,
      },
      parserOptions: {
        project: './tsconfig.test.json',
      },
      rules: {
        // we need to use any in test to create invalid data to test
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
