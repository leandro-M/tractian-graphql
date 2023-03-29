import { ApolloServer } from 'apollo-server';
import { applyMiddleware } from 'graphql-middleware';
import schema from './schema';
import context from './context';

// apply middleware
const schemaWithMiddleware = applyMiddleware(schema);

// create ApolloServer instance
const server = new ApolloServer({
  schema: schemaWithMiddleware,
  context: () => ({
    ...context,
  }),
});

// start server
server.listen().then(({ url }) => {
  // eslint-ignore
  console.log(`Server ready at ${url}`);
});
