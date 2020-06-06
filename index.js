const { ApolloServer } = require('apollo-server');
const { schema } = require('./src/schema')
const { createContext } = require('./src/context') 

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({schema, context: createContext});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});