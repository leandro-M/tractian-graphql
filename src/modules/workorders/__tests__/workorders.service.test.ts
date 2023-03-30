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
});
