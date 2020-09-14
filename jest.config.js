module.exports = {
  roots: ['<rootDir>'],
  testMatch: ['**/__test__/**/*.+(ts)'],
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '__test__/integration'],
}
