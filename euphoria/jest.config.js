/* eslint-disable @typescript-eslint/no-require-imports */
const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

const config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!<rootDir>/src/**/*.stories.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
  ],
  transformIgnorePatterns: ['/node_modules/(?!(next-auth|@auth)/)'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

module.exports = createJestConfig(config);
