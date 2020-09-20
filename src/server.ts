import express from 'express'
import Path from 'path'
import { ApolloServer } from 'apollo-server-express'
import { config } from 'dotenv'

let path = Path.join(__dirname, '../config/.dev.env')
switch (process.env.NODE_ENV) {
  case 'prod': {
    path = Path.join(__dirname, '../config/.prod.env')
  }
}
config({ path })

import { Context } from '@models/server'

import resolvers from './resolvers'
import { typeDefs } from './schema'
import { Utils } from '@constants'

const PORT = 4000
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }): Context => {
    const accessToken = req.headers.authorization || ''
    return { accessToken }
  },
})

const app = express()
server.applyMiddleware({ app })

app.listen({ port: PORT }, () =>
  Utils.log({
    msg: `Now browse to http://localhost:${PORT}${server.graphqlPath}`,
  })
)

export default server
