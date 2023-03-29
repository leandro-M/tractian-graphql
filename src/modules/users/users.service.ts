import { AxiosInstance } from 'axios';
import { User } from './users.model';

export class UsersService {
  private readonly axios: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axios = axiosInstance;
  }

  async getAll(): Promise<User[]> {
    const response = await this.axios.get<User[]>('/users');
    return response.data;
  }

  async getById(id: number): Promise<User | null> {
    const response = await this.axios.get<User>(`/users/${id}`);
    return response.data || null;
  }
}
