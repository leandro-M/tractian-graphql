import { CreateCompanyInput, UpdateCompanyInput } from '../companies.model';
import { CompaniesResolver } from '../companies.resolver';
import { CompaniesService } from '../companies.service';
import { mockCompany, mockCompanies, NULLED_PARAM } from './mocks';

describe('CompaniesResolver', () => {
  let companiesService: CompaniesService;
  let companiesResolver: any;

  beforeEach(() => {
    companiesService = new CompaniesService({} as any); // mock AxiosInstance
    companiesResolver = CompaniesResolver;
  });

  describe('companies', () => {
    it('should return an array of companies', async () => {
      jest.spyOn(companiesService, 'getAll').mockResolvedValueOnce(mockCompanies);

      // call companies resolver and expect the correct output
      const result = await companiesResolver.Query.companies(NULLED_PARAM, NULLED_PARAM, { companiesService });
      expect(result).toEqual(mockCompanies);
    });
  });

  describe('company', () => {
    it('should return a company by id', async () => {
      jest.spyOn(companiesService, 'getById').mockResolvedValueOnce(mockCompany);

      // call company resolver and expect the correct output
      const result = await companiesResolver.Query.company(NULLED_PARAM, { id: 1 }, { companiesService });
      expect(result).toEqual(mockCompany);
    });

    it('should return null if company id does not exist', async () => {
      // mock implementation of getById() method in CompaniesService
      jest.spyOn(companiesService, 'getById').mockResolvedValueOnce(null);

      // call company resolver and expect the correct output
      const result = await companiesResolver.Query.company(NULLED_PARAM, { id: 999 }, { companiesService });
      expect(result).toBeNull();
    });
  });

  describe('createCompany', () => {
    it('should create a new company', async () => {
      const input: CreateCompanyInput = {
        name: 'New Company',
      };
      jest.spyOn(companiesService, 'create').mockResolvedValueOnce(mockCompany);

      // call createCompany mutation and expect the correct output
      const result = await companiesResolver.Mutation.createCompany(NULLED_PARAM, { input }, { companiesService });
      expect(result).toEqual(mockCompany);
    });
  });

  describe('updateCompany', () => {
    it('should update an existing company', async () => {
      const id = 1;
      const input: UpdateCompanyInput = {
        name: 'Updated Company',
      };
      jest.spyOn(companiesService, 'update').mockResolvedValueOnce(mockCompany);

      // call updateCompany mutation and expect the correct output
      const result = await companiesResolver.Mutation.updateCompany(NULLED_PARAM, { id, input }, { companiesService });
      expect(result).toEqual(mockCompany);
    });
  });

  describe('deleteCompany', () => {
    it('should delete an existing company', async () => {
      const id = 1;
      jest.spyOn(companiesService, 'delete').mockResolvedValueOnce(true);

      // call deleteCompany mutation and expect the correct output
      const result = await companiesResolver.Mutation.deleteCompany(NULLED_PARAM, { id }, { companiesService });
      expect(result).toBe(true);
    });
  });
});
