import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import resolvers from './resolvers'
import { typeDefs } from './schema'

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(
    'Now browse to http://localhost:4000' + server.graphqlPath
  )
)
