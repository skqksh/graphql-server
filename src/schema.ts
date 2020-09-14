import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  scalar Date

  input CreateUserInput {
    password: String!
    email: String
    name: String!
  }

  type Query {
    hello: String
    users: [User]
    userById(id: Int!): User
    profileByUserId(userId: Int!): Profile
    postById(id: Int!): Post
  }

  type Mutation {
    createUser(data: CreateUserInput!): User!
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
