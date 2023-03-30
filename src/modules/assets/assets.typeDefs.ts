import { gql } from 'apollo-server';
import { userTypeDef } from '../users/users.typeDefs';
import { companyTypeDef } from '../companies/companies.typeDefs';
import { unitTypeDefs } from '../units/units.typeDefs';

export const assetTypeDef = `
  type Asset {
    assignedUsers: [User]
    company: Company
    healthHistory: [HealthHistory]
    healthscore: Float
    id: Int
    image: String
    metrics: Metrics
    model: String
    name: String
    sensors: [String]
    specifications: Specifications
    status: String
    unit: Unit
  }
`;

export const assetsTypeDefs = gql`
  ${userTypeDef}
  ${companyTypeDef}
  ${unitTypeDefs}
  ${assetTypeDef}

  type HealthHistory {
    status: String
    timestamp: String
  }

  type Metrics {
    lastUptimeAt: String
    totalCollectsUptime: Int
    totalUptime: Float
  }

  type Specifications {
    maxTemp: Int
  }

  type Query {
    assets: [Asset]
    asset(id: ID!): Asset
  }
`;
