import { AxiosInstance } from 'axios';
import { CreateUnitInput, Unit, UpdateUnitInput } from './units.model';

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

  async create(payload: CreateUnitInput): Promise<Unit> {
    const response = await this.axios.post<Unit>('/units', payload);
    return response.data;
  }

  async update(id: number, payload: UpdateUnitInput): Promise<Unit | null> {
    const response = await this.axios.put<Unit>(`/units/${id}`, payload);
    return response.data || null;
  }

  async delete(id: number): Promise<boolean> {
    try {
      await this.axios.delete(`/units/${id}`);
      return true;
    } catch (error) {
      return false;
    }
  }
}
