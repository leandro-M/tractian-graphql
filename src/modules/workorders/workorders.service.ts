import { AxiosInstance } from 'axios';
import { WorkOrder, CreateWorkOrderInput, UpdateWorkOrderInput } from './workorders.model';

export class WorkOrdersService {
  private readonly axios: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axios = axiosInstance;
  }

  async getAll(): Promise<WorkOrder[]> {
    const response = await this.axios.get<WorkOrder[]>('/workorders');
    return response.data;
  }

  async getById(id: number): Promise<WorkOrder | null> {
    const response = await this.axios.get<WorkOrder>(`/workorders/${id}`);
    return response.data || null;
  }

  async create(payload: CreateWorkOrderInput): Promise<WorkOrder> {
    const response = await this.axios.post<WorkOrder>('/workorders', payload);
    return response.data;
  }

  async update(id: number, payload: UpdateWorkOrderInput): Promise<WorkOrder | null> {
    const response = await this.axios.put<WorkOrder>(`/workorders/${id}`, payload);
    return response.data || null;
  }

  async delete(id: number): Promise<boolean> {
    try {
      await this.axios.delete(`/workorders/${id}`);
      return true;
    } catch (error) {
      return false;
    }
  }
}
