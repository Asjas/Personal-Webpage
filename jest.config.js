module.exports = {
  displayName: 'personal-webpage',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  setupTestFrameworkScriptFile: require.resolve('./src/utils/jest.setup.js'),
  moduleNameMapper: {
    // module must come first
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./src/utils/style-mock.js'),
  },
  collectCoverageFrom: [
    '**/src/**/*.js',
    '!**/__tests__/**',
    '!**/node_modules/**',
  ],
};
