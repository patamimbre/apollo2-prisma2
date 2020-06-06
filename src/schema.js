import { makeExecutableSchema } from 'graphql-tools'
import { gql } from 'apollo-server'

const typeDefs = gql`
  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String!, author: String!): Book!
  }
`;

const resolvers = {
  Query: {
    books: (parent, args, ctx) => ctx.prisma.book.findMany(),
  },
  Mutation: {
    addBook: (parent, args, ctx) => ctx.prisma.book.create({
      data: {
        title: args.title,
        author: args.author,
      },
    })
  }
};

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})

export default schema;
