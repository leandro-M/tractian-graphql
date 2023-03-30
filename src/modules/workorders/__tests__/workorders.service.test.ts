import MockAdapter from 'axios-mock-adapter';
import { AxiosInstance } from 'axios';
import { WorkOrdersService } from '../workorders.service';
import axiosInstance from '../../../utils/axios.instance';
import { mockWorkOrder, mockWorkOrders } from './mocks';

describe('WorkOrdersService', () => {
  let axios: AxiosInstance;
  let workOrdersService: WorkOrdersService;
  const mockAxios = new MockAdapter(axiosInstance);

  beforeAll(() => {
    axios = axiosInstance;
    workOrdersService = new WorkOrdersService(axios);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  describe('getAll', () => {
    it('should return an array of work orders', async () => {
      mockAxios.onGet('/workorders').reply(200, mockWorkOrders);
      const workOrders = await workOrdersService.getAll();

      expect(workOrders).toEqual(mockWorkOrders);
    });
  });

  describe('getById', () => {
    it('should return a work order by id', async () => {
      mockAxios.onGet('/workorders/1').reply(200, mockWorkOrder);
      const workOrder = await workOrdersService.getById(1);

      expect(workOrder).toEqual(mockWorkOrder);
    });

    it('should return null when id does not exist', async () => {
      mockAxios.onGet('/workorders/9999').reply(200);

      const workOrder = await workOrdersService.getById(9999);

      expect(workOrder).toBeNull();
    });
  });

  describe('create', () => {
    it('should create a new work order', async () => {
      mockAxios.onPost('/workorders').reply(200, mockWorkOrder);

      const result = await workOrdersService.create(mockWorkOrder);

      expect(result).toEqual(mockWorkOrder);
    });
  });

  describe('update', () => {
    it('should update an existing work order', async () => {
      const id = 1;
      const payload = {
        description: 'Updated work order description',
        title: 'Updated work order title',
      };
      mockAxios.onPut(`/workorders/${id}`).reply(200, mockWorkOrder);

      const result = await workOrdersService.update(id, payload);

      expect(result).toEqual(mockWorkOrder);
    });

    it('should return null when updating a non-existing work order', async () => {
      const id = 9999;
      const payload = {
        description: 'Updated work order description',
        title: 'Updated work order title',
      };
      mockAxios.onPut(`/workorders/${id}`).reply(200);

      const result = await workOrdersService.update(id, payload);

      expect(result).toBeNull();
    });
  });

  describe('delete', () => {
    it('should delete an existing work order', async () => {
      const id = 1;
      mockAxios.onDelete(`/workorders/${id}`).reply(200);

      const result = await workOrdersService.delete(id);

      expect(result).toBe(true);
    });

    it('should return false when deleting a non-existing work order', async () => {
      const id = 9999;
      mockAxios.onDelete(`/workorders/${id}`).reply(404);

      const result = await workOrdersService.delete(id);

      expect(result).toBe(false);
    });
  });
});
