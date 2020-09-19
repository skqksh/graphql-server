// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultConfig = require('./jest.config')
defaultConfig.testMatch = ['**/__test__/integration/**/*.+(ts)']
defaultConfig.testPathIgnorePatterns = ['/node_modules/']
module.exports = defaultConfig
