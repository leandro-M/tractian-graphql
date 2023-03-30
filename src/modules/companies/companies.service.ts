import { AxiosInstance } from 'axios';
import { Company } from './companies.model';

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
}
