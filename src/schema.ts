import { assetsResolvers, queryResolvers } from './resolvers'
import { makeExecutableSchema } from '@graphql-tools/schema';
import { mergeTypeDefs } from '@graphql-tools/merge';
import allTypeDefs from './typeDefs'

// merge typeDefs from all modules
const typeDefs = mergeTypeDefs([...allTypeDefs]);

console.log('typeDefs', typeDefs)

// create resolvers object
const resolvers = {
  Query: {
    ...queryResolvers
  },
  Asset: {
    ...assetsResolvers
  }
};

// create schema
const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema
