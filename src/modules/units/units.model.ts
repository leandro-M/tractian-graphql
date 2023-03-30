export interface Unit {
  id: number;
  companyId: number;
  name: string;
}

export interface CreateUnitInput {
  companyId: number;
  name: string;
}

export interface UpdateUnitInput {
  companyId?: number;
  name?: string;
}
