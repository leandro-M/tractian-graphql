import MockAdapter from 'axios-mock-adapter';
import { AxiosInstance } from 'axios';
import { CompaniesService } from '../companies.service';
import { mockCompany, mockCompanies } from './mocks';
import axiosInstance from '../../../utils/axios.instance';

describe('CompaniesService', () => {
  let axios: AxiosInstance;
  let companiesService: CompaniesService;
  const mockAxios = new MockAdapter(axiosInstance);

  beforeAll(() => {
    axios = axiosInstance;
    companiesService = new CompaniesService(axios);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  describe('getAll', () => {
    it('should return an array of companies', async () => {
      mockAxios.onGet('/companies').reply(200, mockCompanies);

      const companies = await companiesService.getAll();

      expect(companies).toEqual(mockCompanies);
    });
  });

  describe('getById', () => {
    it('should return a company by id', async () => {
      mockAxios.onGet('/companies/1').reply(200, mockCompany);

      const company = await companiesService.getById(1);

      expect(company).toEqual(mockCompany);
    });

    it('should return null when id does not exist', async () => {
      mockAxios.onGet('/companies/9999').reply(200);

      const company = await companiesService.getById(9999);

      expect(company).toBeNull();
    });
  });

  describe('create', () => {
    it('should create a new company', async () => {
      const payload = {
        name: 'New Company',
      };

      mockAxios.onPost('/companies', payload).reply(200, mockCompany);

      const company = await companiesService.create(payload);

      expect(company).toEqual(mockCompany);
    });
  });

  describe('update', () => {
    it('should update an existing company', async () => {
      const id = 1;
      const payload = {
        ...mockCompany,
        name: 'Updated Company',
      };

      mockAxios.onPut(`/companies/${id}`, payload).reply(200, payload);

      const company = await companiesService.update(id, payload);

      expect(company).toEqual(payload);
    });

    it('should return null when updating non-existing company', async () => {
      const id = 9999;
      const payload = {
        ...mockCompany,
        name: 'Updated Company',
      };

      mockAxios.onPut(`/companies/${id}`, payload).reply(200);

      const company = await companiesService.update(id, payload);

      expect(company).toBeNull();
    });
  });

  describe('delete', () => {
    it('should delete an existing company', async () => {
      const id = 1;

      mockAxios.onDelete(`/companies/${id}`).reply(200);

      const deleted = await companiesService.delete(id);

      expect(deleted).toBeTruthy();
    });

    it('should return false when deleting non-existing company', async () => {
      const id = 9999;

      mockAxios.onDelete(`/companies/${id}`).reply(404);

      const deleted = await companiesService.delete(id);

      expect(deleted).toBeFalsy();
    });
  });
});
