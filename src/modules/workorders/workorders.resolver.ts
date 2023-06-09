import { WorkOrdersService } from './workorders.service';
import { UsersService } from '../users/users.service';
import { AssetsService } from '../assets/assets.service';

import { WorkOrder, CreateWorkOrderInput, UpdateWorkOrderInput } from './workorders.model';

export const WorkOrdersResolver = {
  WorkOrder: {
    assignedUsers: async (parent: WorkOrder, __: void, { usersService }: { usersService: UsersService }) => {
      const users = await usersService.getAll();
      return users.filter(user => parent.assignedUserIds.includes(user.id));
    },
    asset: async (parent: WorkOrder, __: void, { assetsService }: { assetsService: AssetsService }) => {
      const company = await assetsService.getById(parent.assetId);
      return company;
    },
  },
  Query: {
    async workorders(
      _: void,
      __: void,
      { workOrdersService }: { workOrdersService: WorkOrdersService },
    ): Promise<WorkOrder[]> {
      return workOrdersService.getAll();
    },
    async workorder(
      _: void,
      { id }: { id: number },
      { workOrdersService }: { workOrdersService: WorkOrdersService },
    ): Promise<WorkOrder | null> {
      return workOrdersService.getById(id);
    },
  },
  Mutation: {
    createWorkOrder: async (
      _: void,
      { input }: { input: CreateWorkOrderInput },
      { workOrdersService }: { workOrdersService: WorkOrdersService },
    ): Promise<WorkOrder> => {
      return workOrdersService.create(input);
    },
    updateWorkOrder: async (
      _: void,
      { id, input }: { id: number; input: UpdateWorkOrderInput },
      { workOrdersService }: { workOrdersService: WorkOrdersService },
    ): Promise<WorkOrder | null> => {
      return workOrdersService.update(id, input);
    },
    deleteWorkOrder: async (
      _: void,
      { id }: { id: number },
      { workOrdersService }: { workOrdersService: WorkOrdersService },
    ): Promise<boolean> => {
      return workOrdersService.delete(id);
    },
  },
};
