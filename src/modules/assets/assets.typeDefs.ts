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
    power: Int
    rpm: Int
  }

  input HealthHistoryInput {
    status: String!
    timestamp: String!
  }

  input MetricsInput {
    lastUptimeAt: String!
    totalCollectsUptime: Int!
    totalUptime: Float!
  }

  input SpecificationsInput {
    maxTemp: Int!
    power: Int
    rpm: Int
  }

  input CreateAssetInput {
    assignedUserIds: [Int]
    companyId: Int
    healthHistory: [HealthHistoryInput]
    metrics: MetricsInput
    sensors: [String]
    healthscore: Float
    image: String
    model: String
    name: String!
    sensorIds: [Int]
    specifications: SpecificationsInput
    status: String
    unitId: Int!
  }

  input UpdateAssetInput {
    assignedUserIds: [Int]
    companyId: Int
    healthscore: Float
    id: Int!
    image: String
    model: String
    name: String!
    sensorIds: [Int]
    specifications: SpecificationsInput
    status: String
    unitId: Int!
  }

  type Mutation {
    createAsset(input: CreateAssetInput!): Asset!
    updateAsset(input: UpdateAssetInput!): Asset!
    deleteAsset(id: ID!): Boolean!
  }

  type Query {
    assets: [Asset]
    asset(id: ID!): Asset
  }
`;
