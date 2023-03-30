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
});
