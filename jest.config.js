const { defaults } = require('jest-config');

module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/jest/jest.setup.js',
  testPathIgnorePatterns: [...defaults.testPathIgnorePatterns, '__snapshots__', '<rootDir>/.cache'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  transform: {
    '.(js)': '<rootDir>/jest/jest-preprocess.js',
  },
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: 'http://localhost/',
  setupFiles: ['<rootDir>/jest/loadershim.js'],
  moduleNameMapper: {
    '.+\\.(css|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  testRegex: '\\.test\\.js',
  moduleFileExtensions: ['js', 'json'],
  collectCoverageFrom: [
    '!.eslintrc.js',
    '!jest.config.js',
    '!jest.setup.js',
    '!__snapshots__/**',
    '!node_modules/**',
    '!coverage/**',
  ],
};
