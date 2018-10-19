module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
  testPathIgnorePatterns: [
    '__snapshots__',
    '<rootDir>/.next',
    '<rootDir>/node_modules/*',
    '<rootDir>/jest-preprocess.js',
    '<rootDir>/jest.config.js',
  ],
  transform: {
    '.(js)': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  testURL: 'https://localhost/',
  moduleNameMapper: {
    '.+\\.(css)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|webp|svg)$': '<rootDir>/__mocks__/empty-module.js',
  },
  testRegex: '\\.test\\.js',
  moduleFileExtensions: ['js', 'json'],
  collectCoverageFrom: [
    '!jest.config.js',
    '!jest.setup.js',
    '!next.config.js',
    '!coverage/**',
    '!pages/_app.js',
    '!pages/_document.js',
  ],
};
