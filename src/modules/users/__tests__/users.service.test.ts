import MockAdapter from 'axios-mock-adapter';
import { AxiosInstance } from 'axios';
import { UsersService } from '../users.service';
import axiosInstance from '../../../utils/axios.instance';

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
      const mockResponse = [
        {
          id: 1,
          name: 'John Doe',
          email: 'johndoe@tractian.com',
          companyId: 1,
          unitId: 1
        },
        {
          id: 2,
          name: 'Jane Doe',
          email: 'janedoe@tractian.com',
          companyId: 1,
          unitId: 1
        }
      ];
      mockAxios.onGet('/users').reply(200, mockResponse);

      const users = await usersService.getAll();

      expect(users).toEqual(mockResponse);
    });
  });

  describe('getById', () => {
    it('should return a user by id', async () => {
      const mockResponse = {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@tractian.com',
        companyId: 1,
        unitId: 1
      };
      mockAxios.onGet('/users/1').reply(200, mockResponse);

      const user = await usersService.getById(1);

      expect(user).toEqual(mockResponse);
    });

    it('should return empty when id does not exist', async () => {
      mockAxios.onGet('/users/9999').reply(200);

      const user = await usersService.getById(9999);

      expect(user).toBeNull();
    });
  });
});
