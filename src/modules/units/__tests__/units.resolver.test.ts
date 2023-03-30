import MockAdapter from 'axios-mock-adapter';
import { UnitsService } from '../units.service';
import { CompaniesService } from '../../companies/companies.service';
import axiosInstance from '../../../utils/axios.instance';
import { mockUnit, mockUnits } from './mocks';
import { mockCompany, NULLED_PARAM } from '../../companies/__tests__/mocks';
import { UnitsResolver } from '../units.resolver';

describe('UnitsResolver', () => {
  let unitsService: UnitsService;
  let companiesService: CompaniesService;
  let unitsResolver: any;
  const mockAxios = new MockAdapter(axiosInstance);

  beforeEach(() => {
    unitsService = new UnitsService(axiosInstance);
    companiesService = new CompaniesService(axiosInstance);
    unitsResolver = UnitsResolver.Unit;
  });

  afterEach(() => {
    mockAxios.reset();
  });

  describe('company', () => {
    it('should return a company for the given unit', async () => {
      mockAxios.onGet(`/companies/${mockUnit.companyId}`).reply(200, mockCompany);

      const result = await unitsResolver.company(mockUnit, null, { companiesService });

      expect(result).toEqual(mockCompany);
    });
  });

  describe('units', () => {
    it('should return an array of units', async () => {
      mockAxios.onGet('/units').reply(200, mockUnits);

      const result = await UnitsResolver.Query.units(NULLED_PARAM, NULLED_PARAM, { unitsService });

      expect(result).toEqual(mockUnits);
    });
  });

  describe('unit', () => {
    it('should return a unit by id', async () => {
      const id = 1;
      mockAxios.onGet(`/units/${id}`).reply(200, mockUnit);

      const result = await UnitsResolver.Query.unit(NULLED_PARAM, { id }, { unitsService });

      expect(result).toEqual(mockUnit);
    });

    it('should return null if unit id does not exist', async () => {
      const id = 999;
      mockAxios.onGet(`/units/${id}`).reply(200);

      const result = await UnitsResolver.Query.unit(NULLED_PARAM, { id }, { unitsService });

      expect(result).toBeNull();
    });
  });

  describe('createUnit', () => {
    it('should create a new unit', async () => {
      const input = { companyId: 1, name: 'Test Unit' };
      mockAxios.onPost('/units', input).reply(200, mockUnit);

      const result = await UnitsResolver.Mutation.createUnit(NULLED_PARAM, { input }, { unitsService });

      expect(result).toEqual(mockUnit);
    });
  });

  describe('updateUnit', () => {
    it('should update a unit successfully', async () => {
      const updatedUnit = {
        id: mockUnit.id,
        companyId: mockUnit.companyId,
        name: 'Updated Unit Name',
      };

      mockAxios.onPut(`/units/${mockUnit.id}`).reply(200, updatedUnit);

      const result = await UnitsResolver.Mutation.updateUnit(
        NULLED_PARAM,
        { id: mockUnit.id, input: updatedUnit },
        { unitsService },
      );

      expect(result).toEqual(updatedUnit);
    });

    it('should return null if unit id does not exist', async () => {
      const updatedUnit = {
        id: 999,
        companyId: 1,
        name: 'Updated Unit Name',
      };

      mockAxios.onPut(`/units/${updatedUnit.id}`).reply(200);

      const result = await UnitsResolver.Mutation.updateUnit(
        NULLED_PARAM,
        { id: updatedUnit.id, input: updatedUnit },
        { unitsService },
      );

      expect(result).toBeNull();
    });
  });

  describe('deleteUnit', () => {
    it('should return true when successfully deleting a unit', async () => {
      const id = 1;
      mockAxios.onDelete(`/units/${id}`).reply(200);

      const result = await UnitsResolver.Mutation.deleteUnit(NULLED_PARAM, { id }, { unitsService });

      expect(result).toBe(true);
    });
  });
});
