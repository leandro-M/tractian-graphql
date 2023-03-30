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

  type Query {
    units: [Unit]
    unit(id: ID!): Unit
  }
`;
