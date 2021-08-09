const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book {
    _id: ID
    authors: String
    description: String
    image: String
    link: String
    title: String

  }
  type User {
      _id: ID
      username: String
      email: String
      password: String
      savedbooks: [Book]
  }

  type Auth {
      token: ID!
      user: User
  }

  type Query {
    allBooks: [Book]!
    getBooks: BookID: ID!): Book
    getAllUser: [User]!
  }

  type Mutation {
    createBook (user: String!, authors: String!, description: String!, image: String!, link: String!, title: String!): user
    removeBook (user: String!, BookID: ID!): user
    createUser (username: String!, email: String!, password: String!): user
  }

`;
module.exports = typeDefs;

