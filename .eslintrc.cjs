module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript', 'prettier'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'react/react-in-jsx-scope': 'off',
    // 'react/jsx-wrap-multilines': [
    //   'error',
    //   { declaration: false, assignment: false },
    // ],
    // 'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    // 'implicit-arrow-linebreak': 'off',

    'no-console': 'off',
  },
};
