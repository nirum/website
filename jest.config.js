const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: ['<rootDir>/__tests__/**/*.test.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  collectCoverageFrom: [
    '<rootDir>/components/**/*.js',
    '<rootDir>/pages/**/*.js',
    '!<rootDir>/pages/_document.js',
    '!<rootDir>/pages/_app.js',
  ],
};

module.exports = createJestConfig(customJestConfig);
