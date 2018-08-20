module.exports = {
  extends: 'callstack-io',
  rules: {
    'import/no-unresolved': [2, { ignore: ['^test-utils$'] }],
    'import/no-named-as-default': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/first': 0,
    camelcase: 0,
  },
};