import { AxiosInstance } from 'axios';
import { Asset } from './assets.model';

export class AssetsService {
  private readonly axios: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axios = axiosInstance;
  }

  async getAll(): Promise<Asset[]> {
    const response = await this.axios.get<Asset[]>('/assets');
    return response.data;
  }

  async getById(id: number): Promise<Asset | null> {
    const response = await this.axios.get<Asset>(`/assets/${id}`);
    return response.data || null;
  }
}
