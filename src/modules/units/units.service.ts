import { AxiosInstance } from 'axios';
import { Unit } from './units.model';

export class UnitsService {
  private readonly axios: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axios = axiosInstance;
  }

  async getAll(): Promise<Unit[]> {
    const response = await this.axios.get<Unit[]>('/units');
    return response.data;
  }

  async getById(id: number): Promise<Unit | null> {
    const response = await this.axios.get<Unit>(`/units/${id}`);
    return response.data || null;
  }
}
