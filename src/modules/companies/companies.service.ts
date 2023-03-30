import { AxiosInstance } from 'axios';
import { Company, CreateCompanyInput, UpdateCompanyInput } from './companies.model';

export class CompaniesService {
  private readonly axios: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axios = axiosInstance;
  }

  async getAll(): Promise<Company[]> {
    const response = await this.axios.get<Company[]>('/companies');
    return response.data;
  }

  async getById(id: number): Promise<Company | null> {
    const response = await this.axios.get<Company>(`/companies/${id}`);
    return response.data || null;
  }

  async create(payload: CreateCompanyInput): Promise<Company> {
    const response = await this.axios.post<Company>('/companies', payload);
    return response.data;
  }

  async update(id: number, payload: UpdateCompanyInput): Promise<Company | null> {
    const response = await this.axios.put<Company>(`/companies/${id}`, payload);
    return response.data || null;
  }

  async delete(id: number): Promise<boolean> {
    try {
      await this.axios.delete(`/companies/${id}`);
      return true;
    } catch (error) {
      return false;
    }
  }
}
