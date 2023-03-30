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

  type Query {
    workorders: [WorkOrder]
    workorder(id: ID!): WorkOrder
  }
`;
