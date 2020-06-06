import { gql } from 'apollo-server'
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = gql`
  type Book {
    id: ID!
    author: String!
    title: String!
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String!, author: String!): Book!
  }
`;

const resolvers = {
  Query: {
    books: (parent, args, { prisma }) => prisma.book.findMany(),
  },
  Mutation: {
    addBook: (parent, args, { prisma }) => prisma.book.create({
      data: {
        title: args.title,
        author: args.author,
      },
    }),
  }
};

export default makeExecutableSchema({
  typeDefs,
  resolvers
});