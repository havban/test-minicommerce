module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/api-mock/*.{js}',
    'src/store/*.{js}',
    'src/components/**.{vue}',
    'src/views/**.{vue}',
    '!**/node_modules/**'
  ],
  coverageDirectory: 'tests/unit/coverage',
  coverageReporters: [
    'lcov',
    'text',
    'json'
  ],
  testMatch: [
    '<rootDir>/tests/unit/**/*(*.)@(spec|test).[jt]s?(x)'
  ],
  testURL: 'http://localhost'
}
