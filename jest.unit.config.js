// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultConfig = require('./jest.config')
defaultConfig.testMatch = ['**/__test__/unit/**/*.+(ts)']
module.exports = defaultConfig
