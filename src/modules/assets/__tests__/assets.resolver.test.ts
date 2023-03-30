import { AssetsResolver } from '../assets.resolver';
import { AssetsService } from '../assets.service';
import { UsersService } from '../../users/users.service';
import { mockAsset, mockAssets } from './mocks';
import { mockUsers, NULLED_PARAM } from '../../users/__tests__/mocks';
import { Asset } from '../assets.model';

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

  describe('createAsset', () => {
    it('should create a new asset', async () => {
      const newAsset = {
        assignedUserIds: [1, 2],
        companyId: 1,
        healthHistory: [],
        healthscore: 50,
        id: 3,
        image: 'https://example.com/image3.jpg',
        metrics: {
          lastUptimeAt: '2022-03-27T00:00:00Z',
          totalCollectsUptime: 5,
          totalUptime: 0.8,
        },
        model: 'Model 3',
        name: 'Asset 3',
        sensors: ['sensor1', 'sensor2'],
        specifications: {
          maxTemp: 90,
          power: 220,
          rpm: null,
        },
        status: 'active',
        unitId: 2,
      };

      jest.spyOn(assetsService, 'create').mockResolvedValueOnce(newAsset);

      // call createAsset mutation and expect the correct output
      const result = await assetsResolver.Mutation.createAsset(null, { input: newAsset }, { assetsService });
      expect(result).toEqual(newAsset);
    });
  });

  describe('updateAsset', () => {
    it('should update an existing asset', async () => {
      const id = 1;
      const input = {
        ...mockAsset,
        name: 'Updated Asset',
        assignedUserIds: [2, 3],
      };

      const mockUpdatedAsset: Asset = {
        ...input,
        companyId: 5, // companyId should remain the same
      };

      jest.spyOn(assetsService, 'update').mockResolvedValueOnce(mockUpdatedAsset);

      // call updateAsset mutation and expect the correct output
      const result = await assetsResolver.Mutation.updateAsset(null, { id, input }, { assetsService });
      expect(result).toEqual(mockUpdatedAsset);
    });

    describe('deleteAsset', () => {
      it('should delete an existing asset', async () => {
        const id = 1;

        jest.spyOn(assetsService, 'delete').mockResolvedValueOnce(true);

        // call deleteAsset mutation and expect the correct output
        const result = await assetsResolver.Mutation.deleteAsset(null, { id }, { assetsService });
        expect(result).toBe(true);
      });
    });
  });
});
