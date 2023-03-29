import { Asset } from '../assets.model';

export const mockAssets: Asset[] = [
  {
    assignedUserIds: [1, 2, 3],
    companyId: 1,
    healthHistory: [
      {
        status: 'inOperation',
        timestamp: '2022-12-01T00:00:00.000Z',
      },
      {
        status: 'inDowntime',
        timestamp: '2022-12-08T00:00:00.000Z',
      },
      {
        status: 'inOperation',
        timestamp: '2022-12-15T00:00:00.000Z',
      },
      {
        status: 'inAlert',
        timestamp: '2022-12-22T00:00:00.000Z',
      },
      {
        status: 'unplannedStop',
        timestamp: '2022-12-29T00:00:00.000Z',
      },
    ],
    healthscore: 70,
    id: 1,
    image: 'https://tractian-img.s3.amazonaws.com/6d5028682016cb43d02b857d4f1384ae.jpeg',
    metrics: {
      lastUptimeAt: '2023-01-01T16:17:50.180Z',
      totalCollectsUptime: 7516,
      totalUptime: 1419.620084999977,
    },
    model: 'motor',
    name: 'Motor H13D-1',
    sensors: ['GSJ1535'],
    specifications: {
      maxTemp: 80,
    },
    status: 'inAlert',
    unitId: 1,
  },
  {
    assignedUserIds: [4],
    companyId: 1,
    healthHistory: [
      {
        status: 'inOperation',
        timestamp: '2022-12-01T00:00:00.000Z',
      },
      {
        status: 'inOperation',
        timestamp: '2022-12-08T00:00:00.000Z',
      },
      {
        status: 'inOperation',
        timestamp: '2022-12-15T00:00:00.000Z',
      },
      {
        status: 'inOperation',
        timestamp: '2022-12-22T00:00:00.000Z',
      },
      {
        status: 'inOperation',
        timestamp: '2022-12-29T00:00:00.000Z',
      },
    ],
    healthscore: 73.7,
    id: 2,
    image: 'https://tractian-img.s3.amazonaws.com/dc8a497655c688ce381d6a3ba4af684d.jpeg',
    metrics: {
      lastUptimeAt: '2023-01-01T16:12:18.342Z',
      totalCollectsUptime: 1279,
      totalUptime: 1420.5929977777462,
    },
    model: 'motor',
    name: 'Motor H12D-1',
    sensors: ['IBS1636'],
    specifications: {
      maxTemp: 53,
      power: 1.5,
      rpm: null,
    },
    status: 'inDowntime',
    unitId: 1,
  },
];

export const mockAsset: Asset = mockAssets[0];
