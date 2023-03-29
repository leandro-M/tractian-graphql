import { gql } from 'apollo-server';

export const userTypeDef = `
  type User {
    id: ID!
    companyId: Int!
    name: String!
    email: String!
    unitId: Int!
  }
`
export const usersTypeDefs = gql`
  ${userTypeDef}

  type Query {
    user(id: ID!): User!
    users: [User!]!
  }
`;
