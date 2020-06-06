import { ApolloServer } from 'apollo-server';
import { applyMiddleware } from "graphql-middleware";

import schema from './src/schemas'
import context from './src/context'
import permissions from './src/permissions'

const server = new ApolloServer({
  schema: applyMiddleware(schema, permissions),
  context,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});