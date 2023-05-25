module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:@tanstack/eslint-plugin-query/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@tanstack/query'
  ],
  rules: {
    indent: ["error", 2],
    ['comma-dangle']: ["error", "never"],
    semi: ["error", "always"],
    ['@typescript-eslint/semi']: ['error', 'always'],
    ['@typescript-eslint/strict-boolean-expressions']: 'off'
  }
}
