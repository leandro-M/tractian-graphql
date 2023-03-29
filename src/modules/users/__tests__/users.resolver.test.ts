import { UsersResolver } from '../users.resolver';
import { UsersService } from '../users.service';
import { mockUser, mockUsers, NULLED_PARAM } from './mocks'


describe('UsersResolver', () => {
  let usersService: UsersService;
  let usersResolver: any;

  beforeEach(() => {
    usersService = new UsersService({} as any); // mock AxiosInstance
    usersResolver = UsersResolver.Query;
  });

  describe('users', () => {
    it('should return an array of users', async () => {
      jest.spyOn(usersService, 'getAll').mockResolvedValueOnce(mockUsers);

      // call users resolver and expect the correct output
      const result = await usersResolver.users(NULLED_PARAM, NULLED_PARAM, { usersService });
      expect(result).toEqual(mockUsers);
    });
  });

  describe('user', () => {
    it('should return a user by id', async () => {
      jest.spyOn(usersService, 'getById').mockResolvedValueOnce(mockUser);

      // call user resolver and expect the correct output
      const result = await usersResolver.user(NULLED_PARAM, { id: 1 }, { usersService });
      expect(result).toEqual(mockUser);
    });

    it('should return null if user id does not exist', async () => {
      // mock implementation of getById() method in UsersService
      jest.spyOn(usersService, 'getById').mockResolvedValueOnce(null);

      // call user resolver and expect the correct output
      const result = await usersResolver.user(NULLED_PARAM, { id: 999 }, { usersService });
      expect(result).toBeNull();
    });
  });
});