import { ApolloServer } from 'apollo-server';
import { applyMiddleware } from 'graphql-middleware';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { UsersResolver } from './modules/users/users.resolver';
import { usersTypeDefs } from './modules/users/users.typeDefs';
import axios from './utils/axios.instance';
import { UsersService } from './modules/users/users.service';

// merge typeDefs from all modules
const typeDefs = mergeTypeDefs([usersTypeDefs]);

// create resolvers object
const resolvers = {
  Query: {
    ...UsersResolver.Query,
  },
};

// create schema
const schema = makeExecutableSchema({ typeDefs, resolvers });

// apply middleware
const schemaWithMiddleware = applyMiddleware(schema);

// create ApolloServer instance
const server = new ApolloServer({
  schema: schemaWithMiddleware,
  context: () => ({ usersService: new UsersService(axios) }),
});

// start server
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
