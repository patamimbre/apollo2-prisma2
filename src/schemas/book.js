import { gql } from 'apollo-server'
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = gql`
  type Book {
    id: ID!
    author: String!
    title: String!
    note: String
  }

  type Query {
    books(take:Int, skip:Int): [Book]!
  }

  type Mutation {
    addBook(title: String!, author: String!, note: String): Book!
  }
`;

const resolvers = {
  Query: {
    books: (parent, { take, skip }, { prisma }) => prisma.book.findMany({ skip, take }),
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