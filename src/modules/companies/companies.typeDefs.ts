import { gql } from 'apollo-server';

export const companyTypeDef = `
  type Company {
    id: ID!
    name: String!
  }
`;

export const companiesTypeDefs = gql`
  ${companyTypeDef}

  input CreateCompanyInput {
    name: String!
  }

  input UpdateCompanyInput {
    name: String
  }

  type Query {
    company(id: ID!): Company!
    companies: [Company!]!
  }

  type Mutation {
    createCompany(input: CreateCompanyInput!): Company!
    updateCompany(id: ID!, input: UpdateCompanyInput!): Company!
    deleteCompany(id: ID!): Boolean!
  }
`;
