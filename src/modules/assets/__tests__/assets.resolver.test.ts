import { AssetsResolver } from '../assets.resolver';
import { AssetsService } from '../assets.service';
import { UsersService } from '../../users/users.service';
import { mockAsset, mockAssets } from './mocks';
import { mockUser, mockUsers, NULLED_PARAM } from '../../users/__tests__/mocks';

describe('AssetsResolver', () => {
  let assetsService: AssetsService;
  let usersService: UsersService;
  let assetsResolver: any;

  beforeEach(() => {
    assetsService = new AssetsService({} as any); // mock AxiosInstance
    usersService = new UsersService({} as any); // mock AxiosInstance
    assetsResolver = AssetsResolver;
  });

  describe('assets', () => {
    it('should return an array of assets', async () => {
      jest.spyOn(assetsService, 'getAll').mockResolvedValueOnce(mockAssets);

      // call assets resolver and expect the correct output
      const result = await assetsResolver.Query.assets(NULLED_PARAM, NULLED_PARAM, { assetsService });
      expect(result).toEqual(mockAssets);
    });
  });

  describe('asset', () => {
    it('should return an asset by id', async () => {
      jest.spyOn(assetsService, 'getById').mockResolvedValueOnce(mockAsset);

      // call asset resolver and expect the correct output
      const result = await assetsResolver.Query.asset(NULLED_PARAM, { id: 1 }, { assetsService });
      expect(result).toEqual(mockAsset);
    });

    it('should return null if asset id does not exist', async () => {
      // mock implementation of getById() method in AssetsService
      jest.spyOn(assetsService, 'getById').mockResolvedValueOnce(null);

      // call asset resolver and expect the correct output
      const result = await assetsResolver.Query.asset(NULLED_PARAM, { id: 999 }, { assetsService });
      expect(result).toBeNull();
    });
  });

  describe('assignedUsers', () => {
    it('should return an array of assigned users for an asset', async () => {
      jest.spyOn(usersService, 'getAll').mockResolvedValueOnce(mockUsers);
      const parent = { assignedUserIds: [1, 2, 3] };

      // call assignedUsers resolver and expect the correct output
      const result = await assetsResolver.Asset.assignedUsers(parent, NULLED_PARAM, { usersService });
      expect(result).toEqual([mockUsers[0], mockUsers[1]]);
    });
  });
});
