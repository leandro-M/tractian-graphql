import { WorkOrdersResolver } from '../workorders.resolver';
import { WorkOrdersService } from '../workorders.service';
import { UsersService } from '../../users/users.service';
import { AssetsService } from '../../assets/assets.service';
import { mockWorkOrder, mockWorkOrders } from './mocks';
import { mockUsers, NULLED_PARAM } from '../../users/__tests__/mocks';
import { mockAsset } from '../../assets/__tests__/mocks';

describe('WorkOrdersResolver', () => {
  let workOrdersService: WorkOrdersService;
  let usersService: UsersService;
  let assetsService: AssetsService;
  let workOrdersResolver: any;

  beforeEach(() => {
    workOrdersService = new WorkOrdersService({} as any); // mock AxiosInstance
    usersService = new UsersService({} as any); // mock AxiosInstance
    assetsService = new AssetsService({} as any); // mock AxiosInstance
    workOrdersResolver = WorkOrdersResolver;
  });

  describe('workorders', () => {
    it('should return an array of workorders', async () => {
      jest.spyOn(workOrdersService, 'getAll').mockResolvedValueOnce(mockWorkOrders);

      // call workorders resolver and expect the correct output
      const result = await workOrdersResolver.Query.workorders(NULLED_PARAM, NULLED_PARAM, { workOrdersService });
      expect(result).toEqual(mockWorkOrders);
    });
  });

  describe('workorder', () => {
    it('should return a workorder by id', async () => {
      jest.spyOn(workOrdersService, 'getById').mockResolvedValueOnce(mockWorkOrder);

      // call workorder resolver and expect the correct output
      const result = await workOrdersResolver.Query.workorder(NULLED_PARAM, { id: 1 }, { workOrdersService });
      expect(result).toEqual(mockWorkOrder);
    });

    it('should return null if workorder id does not exist', async () => {
      // mock implementation of getById() method in WorkOrdersService
      jest.spyOn(workOrdersService, 'getById').mockResolvedValueOnce(null);

      // call workorder resolver and expect the correct output
      const result = await workOrdersResolver.Query.workorder(NULLED_PARAM, { id: 999 }, { workOrdersService });
      expect(result).toBeNull();
    });
  });

  describe('assignedUsers', () => {
    it('should return an array of assigned users for a workorder', async () => {
      jest.spyOn(usersService, 'getAll').mockResolvedValueOnce(mockUsers);
      const parent = { assignedUserIds: [1, 2, 3] };

      // call assignedUsers resolver and expect the correct output
      const result = await workOrdersResolver.WorkOrder.assignedUsers(parent, NULLED_PARAM, { usersService });
      expect(result).toEqual([mockUsers[0], mockUsers[1]]);
    });
  });

  describe('asset', () => {
    it('should return an asset for a workorder', async () => {
      jest.spyOn(assetsService, 'getById').mockResolvedValueOnce(mockAsset);
      const parent = { assetId: 1 };

      // call asset resolver and expect the correct output
      const result = await workOrdersResolver.WorkOrder.asset(parent, NULLED_PARAM, { assetsService });
      expect(result).toEqual(mockAsset);
    });
  });
});
