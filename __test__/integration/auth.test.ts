import { ApolloServer, gql } from 'apollo-server-express'
import { createTestClient } from 'apollo-server-testing'
import _ from 'lodash'
import resolvers from '../../src/resolvers'
import { typeDefs } from '../../src/schema'
import { Utils } from '../../src/constants'

import { log, getUniqueValue } from '../helper/utils'
import { createUser } from '../helper/factory'

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const { query } = createTestClient(server)

describe('auth test', () => {
  describe('sign up', () => {
    test('이메일이 유효하지 않은경우 가입 실패', async () => {
      // TODO
    })

    test('비밀번호가 유효하지 않은경우 가입 실패', async () => {
      // TODO
    })

    test('회원가입이 가능하다', async () => {
      const request = gql`
        mutation signUp($data: SignUpInput!) {
          signUp(data: $data) {
            email
            name
          }
        }
      `
      const uniqueKey = getUniqueValue()
      const name = `blue${uniqueKey}`
      const email = `${name}@nmail.com`
      const password = `${uniqueKey}`
      const variables = {
        data: {
          email,
          name,
          password,
        },
      }

      const { data } = await query({
        query: request,
        variables,
      })
      log({ msg: data })
      expect(data).toEqual({
        signUp: {
          email,
          name,
        },
      })
    })
  })
  // end sign up
  describe('login', () => {
    let testUser: {
      email: string
      name: string
      password: string
    }

    beforeAll(async () => {
      testUser = await createUser()
      log({ msg: `${JSON.stringify(testUser)}가 생성됨` })
    })

    test('로그인 후 accessToken 을 받아온다', async () => {
      const request = gql`
        query login($data: LoginInput!) {
          login(data: $data)
        }
      `
      const variables = {
        data: {
          email: testUser.email,
          password: testUser.password,
        },
      }

      const { data } = await query({
        query: request,
        variables,
      })
      log({ msg: data })
      const accessToken = _.get(data, 'login')
      const tokenUser = Utils.getUserByAccessToken({ accessToken })
      log({ msg: tokenUser })
      expect(Utils.verifyAccessToken({ accessToken })).toEqual(true)
      expect(tokenUser && tokenUser.email).toEqual(testUser.email)
    })
  })
  // end login
})
