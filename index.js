import { ApolloServer } from 'apollo-server';
import schema from './src/schema'
import context, { prisma } from './src/context'
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();

const getUserFromJWT = (bearer='') => {
  try {
    const token = bearer.split(' ')[1]
    if (token) return jwt.verify(token, process.env.JWT_SECRET)
    return null
  } catch (error) {
    return null
  }
}


const server = new ApolloServer({
  schema,
  context,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});