module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 0,
    'no-param-reassign': 0,
    'arrow-body-style': 0,
    'dot-notation': 0,
    'consistent-return': 0,
    'no-trailing-spaces': 0,
    'operator-linebreak': [2, 'after', { overrides: { '?': 'before', ':': 'before' } }],
    'import/prefer-default-export': 0,
    'arrow-parens': 0,
    'no-shadow': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
