const { makeExecutableSchema } = require('graphql-tools')
const { gql } = require('apollo-server');
const { Context } = require('./context')

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
`;

const resolvers = {
  Query: {
    books: (parent, args, ctx) => {
      console.log(ctx)
      return ctx.prisma.book.findMany()
    },
  },
};

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})

module.exports = {
  schema
}