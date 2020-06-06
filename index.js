import { ApolloServer } from 'apollo-server';
import schema from './src/schemas'
import context from './src/context'

const server = new ApolloServer({
  schema,
  context,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});