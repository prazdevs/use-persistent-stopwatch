module.exports = {
  transform: { '^.+\\.(ts)$': 'ts-jest', },
  // testMatch: ['**/*.spec.ts'],
  setupFiles: ['<rootDir>/test/setup.js'],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/index.ts']
}