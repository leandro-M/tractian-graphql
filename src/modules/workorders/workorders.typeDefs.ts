import { gql } from 'apollo-server';
import { userTypeDef } from '../users/users.typeDefs';
import { assetTypeDef } from '../assets/assets.typeDefs';

export const workordersTypeDefs = gql`
  ${assetTypeDef}
  ${userTypeDef}

  type ChecklistItem {
    completed: Boolean!
    task: String!
  }

  type WorkOrder {
    asset: Asset
    assignedUsers: [User]
    checklist: [ChecklistItem]
    description: String!
    id: Int!
    priority: String!
    status: String!
    title: String!
  }

  input CreateWorkOrderInput {
    assetId: Int!
    assignedUserIds: [Int!]!
    checklist: [ChecklistItemInput]
    description: String!
    priority: String!
    title: String!
  }

  input UpdateWorkOrderInput {
    assetId: Int
    assignedUserIds: [Int!]
    checklist: [ChecklistItemInput]
    description: String
    priority: String
    status: String
    title: String
  }

  input ChecklistItemInput {
    completed: Boolean!
    task: String!
  }

  type Mutation {
    createWorkOrder(input: CreateWorkOrderInput!): WorkOrder!
    updateWorkOrder(id: ID!, input: UpdateWorkOrderInput!): WorkOrder!
    deleteWorkOrder(id: ID!): Boolean!
  }

  type Query {
    workorders: [WorkOrder]
    workorder(id: ID!): WorkOrder
  }
`;
