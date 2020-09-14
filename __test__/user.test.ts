import { ApolloServer, gql } from 'apollo-server-express'
import { createTestClient } from 'apollo-server-testing'
import resolvers from '../src/resolvers'
import { typeDefs } from '../src/schema'
import _ from 'lodash'

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const { query } = createTestClient(server)

describe('User test', () => {
  describe('userById', () => {
    test('유저정보를 가져올 수 있다', async () => {
      const request = gql`
        query {
          userById(id: 1) {
            id
          }
        }
      `

      const { data } = await query({
        query: request,
      })
      expect(data).toEqual({ userById: { id: 1 } })
    })

    test('id 파라미터가 가 없는 경우 에러가 발생한다', async () => {
      const request = gql`
        query {
          userById {
            id
          }
        }
      `

      const { errors } = await query({
        query: request,
      })

      expect(_.get(_.head(errors), 'message')).toEqual(
        'Field "userById" argument "id" of type "Int!" is required, but it was not provided.'
      )
    })
  })
})
