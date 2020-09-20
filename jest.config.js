module.exports = {
  roots: ['<rootDir>'],
  testMatch: ['**/__test__/**/*.+(ts)'],
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
  setupFiles: ['<rootDir>/jestSetupFile.js'],
  moduleNameMapper: {
    '@constants': '<rootDir>/src/constants',
    '@service/(.*)': '<rootDir>/src/service_layer/$1',
    '@middleware/(.*)': '<rootDir>/src/middleware/$1',
    '@models/(.*)': '<rootDir>/src/models/$1',
  },
}
