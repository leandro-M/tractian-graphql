import { AxiosInstance } from 'axios';
import { WorkOrder } from './workorders.model';

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
}
