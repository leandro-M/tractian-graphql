import MockAdapter from 'axios-mock-adapter';
import { AxiosInstance } from 'axios';
import { AssetsService } from '../assets.service';
import axiosInstance from '../../../utils/axios.instance';
import { mockAsset, mockAssets } from './mocks';

describe('AssetsService', () => {
  let axios: AxiosInstance;
  let assetsService: AssetsService;
  const mockAxios = new MockAdapter(axiosInstance);

  beforeAll(() => {
    axios = axiosInstance;
    assetsService = new AssetsService(axios);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  describe('getAll', () => {
    it('should return an array of assets', async () => {
      mockAxios.onGet('/assets').reply(200, mockAssets);
      const assets = await assetsService.getAll();

      expect(assets).toEqual(mockAssets);
    });
  });

  describe('getById', () => {
    it('should return an asset by id', async () => {
      mockAxios.onGet('/assets/1').reply(200, mockAsset);
      const asset = await assetsService.getById(1);

      expect(asset).toEqual(mockAsset);
    });

    it('should return null when id does not exist', async () => {
      mockAxios.onGet('/assets/9999').reply(200);

      const asset = await assetsService.getById(9999);

      expect(asset).toBeNull();
    });
  });

  describe('create', () => {
    it('should create a new asset', async () => {
      const mockCreateAssetInput = {
        assignedUserIds: [1, 2],
        companyId: 1,
        healthHistory: [],
        healthscore: 100,
        image: '',
        metrics: {
          lastUptimeAt: '',
          totalCollectsUptime: 0,
          totalUptime: 0,
        },
        model: 'Mock Model',
        name: 'Mock Asset',
        sensors: [],
        specifications: {
          maxTemp: 50,
        },
        status: 'active',
        unitId: 1,
      };

      mockAxios.onPost('/assets').reply(201, mockCreateAssetInput);

      const createdAsset = await assetsService.create(mockCreateAssetInput);

      expect(createdAsset).toEqual(mockCreateAssetInput);
    });
  });

  describe('update', () => {
    it('should update an existing asset', async () => {
      const mockUpdateAssetInput = {
        assignedUserIds: [1, 2, 3],
        companyId: 2,
        healthHistory: [],
        healthscore: 90,
        image: '',
        metrics: {
          lastUptimeAt: '',
          totalCollectsUptime: 1,
          totalUptime: 1,
        },
        model: 'Updated Model',
        name: 'Updated Asset',
        sensors: [],
        specifications: {
          maxTemp: 60,
        },
        status: 'inactive',
        unitId: 2,
      };

      const mockUpdatedAsset = {
        ...mockUpdateAssetInput,
        id: 1,
      };

      mockAxios.onPut('/assets/1').reply(200, mockUpdatedAsset);

      const updatedAsset = await assetsService.update(1, mockUpdateAssetInput);

      expect(updatedAsset).toEqual(mockUpdatedAsset);
    });

    it('should return null when id does not exist', async () => {
      const mockUpdateAssetInput = {
        assignedUserIds: [1, 2, 3],
        companyId: 2,
        healthHistory: [],
        healthscore: 90,
        image: '',
        metrics: {
          lastUptimeAt: '',
          totalCollectsUptime: 1,
          totalUptime: 1,
        },
        model: 'Updated Model',
        name: 'Updated Asset',
        sensors: [],
        specifications: {
          maxTemp: 60,
        },
        status: 'inactive',
        unitId: 2,
      };

      mockAxios.onPut('/assets/999').reply(200);

      const updatedAsset = await assetsService.update(999, mockUpdateAssetInput);

      expect(updatedAsset).toBeNull();
    });
  });

  describe('delete', () => {
    it('should delete an asset by id', async () => {
      const id = 1;
      mockAxios.onDelete(`/assets/${id}`).reply(204);
      const result = await assetsService.delete(id);

      expect(result).toBe(true);
    });

    it('should return false when an error occurs', async () => {
      const id = 1;
      mockAxios.onDelete(`/assets/${id}`).reply(500);
      const result = await assetsService.delete(id);

      expect(result).toBe(false);
    });
  });
});
