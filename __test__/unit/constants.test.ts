import { Utils } from '../../src/constants'
import _ from 'lodash'

describe('constants test', () => {
  describe('utils test', () => {
    test('hashPassword가 정상적으로 암호화 한다', async () => {
      const encrypted = Utils.hashPassword({ password: 'test' })
      expect(_.some(encrypted)).toEqual(true)
    })
  })
})
