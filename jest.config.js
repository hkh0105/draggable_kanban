const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: '.' });

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
const customJestConfig = {
  roots: ['<rootDir>'],
  collectCoverageFrom: ['src/**/*.@(j|t)s?(x)'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src\\/types/',
  ],

  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '@src/(.*)': ['<rootDir>/src/$1'],
  },
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
};

module.exports = createJestConfig(customJestConfig);
