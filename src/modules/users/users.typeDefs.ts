import { gql } from 'apollo-server';
import { unitTypeDefs } from '../units/units.typeDefs';

export const userTypeDef = `
  ${unitTypeDefs}

  type User {
    id: ID!
    companyId: Int!
    name: String!
    email: String!
    unit: Unit
  }
`;

export const usersTypeDefs = gql`
  ${userTypeDef}

  type Query {
    user(id: ID!): User!
    users: [User!]!
  }
`;
