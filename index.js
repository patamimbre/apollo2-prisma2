import { ApolloServer } from 'apollo-server';
import schema from './src/schema'
import createContext from './src/context'

import dotenv from 'dotenv';
dotenv.config();



// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({schema, context: createContext});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});