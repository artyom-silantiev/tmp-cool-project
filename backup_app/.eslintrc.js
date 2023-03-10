module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint:recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-empty': 'off',
    'no-unused-vars': 'off',

    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
  },
};
