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
});
