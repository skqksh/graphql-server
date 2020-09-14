module.exports = {
  roots: ['<rootDir>'],
  testMatch: ['**/__test__/integration/**/*.+(ts)'],
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/'],
}
