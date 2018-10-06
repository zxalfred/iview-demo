module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false, }],
    'max-len': [0],
    'no-param-reassign': [0],
    'class-methods-use-this': [0],
    'no-plusplus': [0]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
