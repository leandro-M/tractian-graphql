import { CompaniesResolver } from '../companies.resolver';
import { CompaniesService } from '../companies.service';
import { mockCompany, mockCompanies, NULLED_PARAM } from './mocks';

describe('CompaniesResolver', () => {
  let companiesService: CompaniesService;
  let companiesResolver: any;

  beforeEach(() => {
    companiesService = new CompaniesService({} as any); // mock AxiosInstance
    companiesResolver = CompaniesResolver.Query;
  });

  describe('companies', () => {
    it('should return an array of companies', async () => {
      jest.spyOn(companiesService, 'getAll').mockResolvedValueOnce(mockCompanies);

      // call companies resolver and expect the correct output
      const result = await companiesResolver.companies(NULLED_PARAM, NULLED_PARAM, { companiesService });
      expect(result).toEqual(mockCompanies);
    });
  });

  describe('company', () => {
    it('should return a company by id', async () => {
      jest.spyOn(companiesService, 'getById').mockResolvedValueOnce(mockCompany);

      // call company resolver and expect the correct output
      const result = await companiesResolver.company(NULLED_PARAM, { id: 1 }, { companiesService });
      expect(result).toEqual(mockCompany);
    });

    it('should return null if company id does not exist', async () => {
      // mock implementation of getById() method in CompaniesService
      jest.spyOn(companiesService, 'getById').mockResolvedValueOnce(null);

      // call company resolver and expect the correct output
      const result = await companiesResolver.company(NULLED_PARAM, { id: 999 }, { companiesService });
      expect(result).toBeNull();
    });
  });
});
