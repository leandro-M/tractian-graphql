import { AxiosInstance } from 'axios';
import { Asset, CreateAssetInput, UpdateAssetInput } from './assets.model';

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

  async create(payload: CreateAssetInput): Promise<Asset> {
    const response = await this.axios.post<Asset>('/assets', payload);
    return response.data;
  }

  async update(id: number, payload: UpdateAssetInput): Promise<Asset | null> {
    const response = await this.axios.put<Asset>(`/assets/${id}`, payload);
    return response.data || null;
  }

  async delete(id: number): Promise<boolean> {
    try {
      await this.axios.delete(`/assets/${id}`);
      return true;
    } catch (error) {
      return false;
    }
  }
}
