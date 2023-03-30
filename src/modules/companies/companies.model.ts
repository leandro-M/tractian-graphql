export interface Company {
  id: number;
  name: string;
}

export interface UpdateCompanyInput {
  name?: string;
}

export interface CreateCompanyInput {
  name: string;
}
