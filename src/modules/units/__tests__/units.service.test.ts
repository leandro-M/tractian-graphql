import MockAdapter from 'axios-mock-adapter';
import { AxiosInstance } from 'axios';
import { UnitsService } from '../units.service';
import axiosInstance from '../../../utils/axios.instance';
import { mockUnit, mockUnits } from './mocks';

describe('UnitsService', () => {
  let axios: AxiosInstance;
  let unitsService: UnitsService;
  const mockAxios = new MockAdapter(axiosInstance);

  beforeAll(() => {
    axios = axiosInstance;
    unitsService = new UnitsService(axios);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  describe('getAll', () => {
    it('should return an array of units', async () => {
      mockAxios.onGet('/units').reply(200, mockUnits);

      const units = await unitsService.getAll();

      expect(units).toEqual(mockUnits);
    });
  });

  describe('getById', () => {
    it('should return a unit by id', async () => {
      mockAxios.onGet('/units/1').reply(200, mockUnit);

      const unit = await unitsService.getById(1);

      expect(unit).toEqual(mockUnit);
    });

    it('should return empty when id does not exist', async () => {
      mockAxios.onGet('/units/9999').reply(200);

      const unit = await unitsService.getById(9999);

      expect(unit).toBeNull();
    });
  });

  describe('create', () => {
    it('should create a new unit', async () => {
      const mockPayload = { name: 'New Unit', companyId: 1 };
      mockAxios.onPost('/units', mockPayload).reply(200, mockUnit);

      const unit = await unitsService.create(mockPayload);

      expect(unit).toEqual(mockUnit);
    });
  });

  describe('update', () => {
    it('should update a unit by id', async () => {
      const mockPayload = { name: 'Updated Unit', companyId: 1 };
      const id = 1;
      mockAxios.onPut(`/units/${id}`, mockPayload).reply(200, mockUnit);

      const unit = await unitsService.update(id, mockPayload);

      expect(unit).toEqual(mockUnit);
    });

    it('should return null when id does not exist', async () => {
      const mockPayload = { name: 'Updated Unit', companyId: 1 };
      const id = 9999;
      mockAxios.onPut(`/units/${id}`, mockPayload).reply(200);

      const unit = await unitsService.update(id, mockPayload);

      expect(unit).toBeNull();
    });
  });

  describe('delete', () => {
    it('should delete a unit by id', async () => {
      const id = 1;
      mockAxios.onDelete(`/units/${id}`).reply(200);

      const result = await unitsService.delete(id);

      expect(result).toBe(true);
    });

    it('should return false when id does not exist', async () => {
      const id = 9999;
      mockAxios.onDelete(`/units/${id}`).reply(404);

      const result = await unitsService.delete(id);

      expect(result).toBe(false);
    });
  });
});
