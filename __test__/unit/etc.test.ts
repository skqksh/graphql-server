import _ from 'lodash'

describe('etc test', () => {
  describe('env check', () => {
    test('.env 파일에 PW_SECRET 값이 존재한다', async () => {
      expect(_.some(process.env.PW_SECRET)).toEqual(true)
    })
    test('.env 파일에 JWT_SECRET 값이 존재한다', async () => {
      expect(_.some(process.env.JWT_SECRET)).toEqual(true)
    })
  })
})
