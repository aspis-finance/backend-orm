module.exports = {
  extends: 'airbnb-base',
  plugins: ['eslint-plugin-import-order-alphabetical'],
  rules: {
    'import-order-alphabetical/order': 1, // sometimes auto ordering could not work
    indent: ['error', 2],
    'max-len': [1, 120],
    semi: [2, 'never'],
    'global-require': 1,
    'import/no-dynamic-require': 1,
  },
}
