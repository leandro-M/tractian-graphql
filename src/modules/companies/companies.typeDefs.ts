import { gql } from 'apollo-server';

export const companyTypeDef = `
  type Company {
    id: ID!
    name: String!
  }
`;

export const companiesTypeDefs = gql`
  ${companyTypeDef}

  type Query {
    company(id: ID!): Company!
    companies: [Company!]!
  }
`;
