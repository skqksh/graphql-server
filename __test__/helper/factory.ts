import { ApolloServer, gql } from 'apollo-server-express'
import { createTestClient } from 'apollo-server-testing'
import resolvers from '../../src/resolvers'
import { typeDefs } from '../../src/schema'
import { getUniqueValue } from '../helper/utils'

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const { query } = createTestClient(server)

export const createUser = async (): Promise<{
  email: string
  name: string
  password: string
}> => {
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

  await query({
    query: request,
    variables,
  })

  return variables.data
}
