const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
  {
    rules: {
      semi: 'error',
      quotes: ['error', 'single'], // Use single quotes
      eqeqeq: ['error', 'always'], // Require strict equality (===, !==)
      'no-unused-vars': ['error', { args: 'none' }],
      'no-console': 'warn', // Warn against console logs
    },
  },
]);
