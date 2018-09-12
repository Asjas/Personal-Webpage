module.exports = {
  displayName: 'personal-webpage',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  setupTestFrameworkScriptFile: require.resolve('./tests/setup/jest.setup.js'),
  moduleNameMapper: {
    // module must come first
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./tests/mocks/style-mock.js'),
  },
  collectCoverageFrom: [
    '**/src/**/*.js',
    '!**/__tests__/**',
    '!**/node_modules/**',
  ],
};
