/*const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book {
    bookId: ID!
    authors: [String]
    description: String!
    image: String
    link: String
    title: String!

  }
  type User {
      _id: ID
      username: String
      email: String
      bookCount:Int
      savedbooks: [Book]
  }

  type Auth {
      token: String
      user: User
  }

  type Query {
    allBooks: [Book]!
    getBooks: _id: ID!): Book
    getAllUser: [User]!
  }

  type Mutation {
    createBook (user: String!, authors: String!, description: String!, image: String!, link: String!, title: String!): user
    removeBook (user: String!, _id: ID!): user
    createUser (username: String!, email: String!, password: String!): user
  }

`;
module.exports = typeDefs;

*/

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
  }
  `;
  module.exports = typeDefs;