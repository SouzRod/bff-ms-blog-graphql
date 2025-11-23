import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { configs } from '#config';
import { formatError } from '#errors';
import { resolvers } from '#resolvers';
import { typeDefs } from '#schemas';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: configs.app.port },
});

console.log(`🚀  Server ready at: ${url}`);
