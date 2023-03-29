import { gql } from 'apollo-server';

export const usersTypeDefs = gql`
  type User {
    id: Int!
    companyId: Int!
    name: String!
    email: String!
    unitId: Int!
  }

  type Query {
    user(id: ID!): User!
    users: [User!]!
  }
`;
