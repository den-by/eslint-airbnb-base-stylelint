module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:sonarjs/recommended',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'airbnb-base',
  ],
  plugins: ['sonarjs', 'promise', 'import'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-new-wrappers': 'error',
    'default-param-last': 'error',
  },
};
