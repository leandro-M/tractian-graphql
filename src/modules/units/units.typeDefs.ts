import { gql } from 'apollo-server';
import { companyTypeDef } from '../companies/companies.typeDefs';

export const unitTypeDefs = `
  type Unit {
    id: Int
    name: String
    company: Company
  }
`;

export const unitsTypeDefs = gql`
  ${unitTypeDefs}
  ${companyTypeDef}

  input CreateUnitInput {
    name: String!
    companyId: Int!
  }

  input UpdateUnitInput {
    name: String!
    companyId: Int!
  }

  type Query {
    units: [Unit]
    unit(id: ID!): Unit
  }

  type Mutation {
    createUnit(input: CreateUnitInput!): Unit
    updateUnit(id: ID!, input: UpdateUnitInput!): Unit
    deleteUnit(id: ID!): Boolean
  }
`;
