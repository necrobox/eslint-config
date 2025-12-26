module.exports = {
  extends: './index.js',
  globals: {
    after: 'readonly',
    afterEach: 'readonly',
    before: 'readonly',
    beforeEach: 'readonly',
    browser: 'readonly',
    casper: 'readonly',
    describe: 'readonly',
    expect: 'readonly',
    it: 'readonly',
    xit: 'readonly',
  },
  plugins: ['@necrobox/eslint-plugin-no-only-tests'],
  rules: {
    '@necrobox/no-only-tests/no-only': 2,
  },
};
