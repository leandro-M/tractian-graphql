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
});