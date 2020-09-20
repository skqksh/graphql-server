// eslint-disable-next-line @typescript-eslint/no-var-requires
const Path = require('path')
const path = Path.join(__dirname, 'config/.test.env')
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path })
