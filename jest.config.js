const { defaults } = require('jest-config');

module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
  preset: 'jest-puppeteer',
  testPathIgnorePatterns: [...defaults.testPathIgnorePatterns, '<rootDir>/.cache'],
  transform: {
    '.(js)': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  testURL: 'http://localhost/',
  moduleNameMapper: {
    '.+\\.(css)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|webp|svg)$': '<rootDir>/__mocks__/empty-module.js',
  },
  testRegex: '\\.test\\.js',
  moduleFileExtensions: ['js', 'json'],
  collectCoverageFrom: [
    '!.eslintrc.js',
    '!jest.config.js',
    '!jest.setup.js',
    '!next.config.js',
    '!.storybook/**',
    '!.next/**',
    '!node_modules/**',
    '!coverage/**',
    '!i18n/**',
    '!static/**',
    '!theme/**',
    '!pages/_app.js',
    '!pages/_document.js',
  ],
};
