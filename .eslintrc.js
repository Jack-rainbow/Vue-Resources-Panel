module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "import/no-unresolved": [
      2,
      {
        "caseSensitive": false
      }
    ],
    'linebreak-style': 0,
    'import/no-unresolved': 0,
    'no-param-reassign': 0,
    'arrow-body-style': 0,
    'dot-notation': 0,
    'consistent-return': 0,
    'no-trailing-spaces': 0,
    'operator-linebreak': [2, 'after', { 'overrides': { '?': 'before', ':': 'before' } }],
  },
  settings: {
    // 'import/resolver': webpack
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
