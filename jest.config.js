/* eslint-disable @typescript-eslint/no-var-requires */
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
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js',
  },
  globals: {
    __PATH_PREFIX__: '',
  },
  setupFiles: ['<rootDir>/loadershim.js'],
  moduleNameMapper: {
    '.+\\.(css)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  collectCoverageFrom: [
    '!.eslintrc.js',
    '!jest.config.js',
    '!jest.setup.js',
    '!__snapshots__/**',
    '!node_modules/**',
    '!coverage/**',
  ],
};
