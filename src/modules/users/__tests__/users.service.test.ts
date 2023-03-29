import MockAdapter from 'axios-mock-adapter';
import { AxiosInstance } from 'axios';
import { UsersService } from '../users.service';
import axiosInstance from '../../../utils/axios.instance';
import { mockUser, mockUsers } from './mocks'

describe('UsersService', () => {
  let axios: AxiosInstance;
  let usersService: UsersService;
  const mockAxios = new MockAdapter(axiosInstance);

  beforeAll(() => {
    axios = axiosInstance;
    usersService = new UsersService(axios);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  describe('getAll', () => {
    it('should return an array of users', async () => {
      mockAxios.onGet('/users').reply(200, mockUsers);

      const users = await usersService.getAll();

      expect(users).toEqual(mockUsers);
    });
  });

  describe('getById', () => {
    it('should return a user by id', async () => {
      mockAxios.onGet('/users/1').reply(200, mockUser);

      const user = await usersService.getById(1);

      expect(user).toEqual(mockUser);
    });

    it('should return empty when id does not exist', async () => {
      mockAxios.onGet('/users/9999').reply(200);

      const user = await usersService.getById(9999);

      expect(user).toBeNull();
    });
  });
});
