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
  type Query {
    allBooks: [Book]!
    getBooks: BookID: ID!): Book
    getAllUser: [User]!
  }
  type Mutation {
    createBook (user: String!): user
  }

`;
module.exports = typeDefs;

