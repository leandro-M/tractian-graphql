import { gql } from 'apollo-server';
import { userTypeDef } from '../users/users.typeDefs';

export const assetsTypeDefs = gql`
  ${userTypeDef}

  type Asset {
    assignedUserIds: [Int]
    assignedUsers: [User]
    companyId: Int
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
    unitId: Int
  }

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
