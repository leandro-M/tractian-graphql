type THealthHistory = {
  status: string;
  timestamp: string;
};

type TMetrics = {
  lastUptimeAt: string;
  totalCollectsUptime: number;
  totalUptime: number;
};

type TSpecifications = {
  maxTemp: number;
  power?: number;
  rpm?: number | null;
};

export interface Asset {
  assignedUserIds: number[];
  companyId: number;
  healthHistory: THealthHistory[];
  healthscore: number;
  id: number;
  image: string;
  metrics: TMetrics;
  model: string;
  name: string;
  sensors: string[];
  specifications: TSpecifications;
  status: string;
  unitId: number;
}

export interface CreateAssetInput {
  assignedUserIds: number[];
  companyId: number;
  healthscore: number;
  image: string;
  model: string;
  name: string;
  sensors: string[];
  specifications: TSpecifications;
  status: string;
  unitId: number;
}

export interface UpdateAssetInput {
  assignedUserIds?: number[];
  companyId?: number;
  healthHistory?: THealthHistory[];
  healthscore?: number;
  image?: string;
  metrics?: TMetrics;
  model?: string;
  name?: string;
  sensors?: string[];
  specifications?: TSpecifications;
  status?: string;
  unitId?: number;
}
