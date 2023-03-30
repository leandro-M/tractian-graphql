export interface Company {
  id: number;
  name: string;
}

export interface UpdateCompanyInput {
  id: number;
  name?: string;
}

export interface CreateCompanyInput {
  name: string;
}
