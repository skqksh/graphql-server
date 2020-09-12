import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  scalar Date

  type Query {
    hello: String
    userById(id: Int!): User
    profileByUserId(userId: Int!): Profile
    postById(id: Int!): Post
  }
  type User {
    id: Int!
    createdAt: Date
    updatedAt: Date
    email: String
    name: String!
    writtenPosts: [Post]
    profile: Profile
  }
  type Profile {
    id: Int!
    createdAt: Date
    updatedAt: Date
    bio: String
    userId: Int!
    user: User
  }
  type Post {
    id: Int!
    createdAt: Date
    updatedAt: Date
    title: String!
    content: String
    published: Boolean
    authorId: Int!
    author: User
  }
`
