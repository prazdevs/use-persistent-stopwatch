module.exports = {
  transform: { '^.+\\.(ts)$': 'ts-jest', },
  // testMatch: ['**/*.spec.ts'],
  setupFiles: ['<rootDir>/tests/setup.js'],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/tests/index.ts']
}