import { othersResolvers, queryResolvers, mutationsResolvers } from './resolvers';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { mergeTypeDefs } from '@graphql-tools/merge';
import allTypeDefs from './typeDefs';

// merge typeDefs from all modules
const typeDefs = mergeTypeDefs([...allTypeDefs]);

// create resolvers object
const resolvers = {
  ...queryResolvers,
  ...mutationsResolvers,
  ...othersResolvers,
};

// create schema
const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
