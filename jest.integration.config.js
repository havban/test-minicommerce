module.exports = {
  preset: 'jest-playwright-preset',
  setupFilesAfterEnv: ['expect-playwright', './helpers.js'],
  testMatch: ['<rootDir>/tests/integration/**/*.spec.(js)'],
  collectCoverageFrom: [
    "**/*.{js,vue}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ]
}
