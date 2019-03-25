const { defaults } = require('jest-config');

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    ...defaults.testPathIgnorePatterns,
    '__snapshots__',
    'node_modules',
    '.cache',
  ],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  transform: {
    '.(js)': '<rootDir>/jest-preprocess.js',
  },
  globals: {
    __PATH_PREFIX__: '',
  },
  setupFiles: ['<rootDir>/loadershim.js'],
  moduleNameMapper: {
    '.+\\.(css|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|otf|webp|svg|ttf|woff|woff2|mp3)$': '<rootDir>/__mocks__/fileMock.js',
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
