module.exports = {
  transform: { '^.+\\.(ts)$': 'ts-jest', },
  testMatch: ['**/tests/*.spec.ts'],
  setupFiles: ['<rootDir>/tests/setup.js'],
  testEnvironment: 'jsdom'
}