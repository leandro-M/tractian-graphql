import { UsersResolver } from '../users.resolver';
import { UsersService } from '../users.service';
import { User } from '../users.model';

const NULLED_PARAM = undefined

describe('UsersResolver', () => {
  let usersService: UsersService;
  let usersResolver: any;

  beforeEach(() => {
    usersService = new UsersService({} as any); // mock AxiosInstance
    usersResolver = UsersResolver.Query;
  });

  describe('users', () => {
    it('should return an array of users', async () => {
      // mock implementation of getAll() method in UsersService
      const mockUsers: User[] = [
        { companyId: 1, email: 'johndoe@example.com', id: 1, name: 'John Doe', unitId: 1 },
        { companyId: 2, email: 'janedoe@example.com', id: 2, name: 'Jane Doe', unitId: 2 }
      ];
      jest.spyOn(usersService, 'getAll').mockResolvedValueOnce(mockUsers);

      // call users resolver and expect the correct output
      const result = await usersResolver.users(NULLED_PARAM, NULLED_PARAM, { usersService });
      expect(result).toEqual(mockUsers);
    });
  });

  describe('user', () => {
    it('should return a user by id', async () => {
      // mock implementation of getById() method in UsersService
      const mockUser: User = { companyId: 1, email: 'johndoe@example.com', id: 1, name: 'John Doe', unitId: 1 };
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