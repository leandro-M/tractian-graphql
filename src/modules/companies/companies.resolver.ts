import { CompaniesService } from './companies.service';
import { Company, CreateCompanyInput, UpdateCompanyInput } from './companies.model';

export const CompaniesResolver = {
  Query: {
    async companies(
      _: void,
      __: void,
      { companiesService }: { companiesService: CompaniesService },
    ): Promise<Company[]> {
      return companiesService.getAll();
    },
    async company(
      _: void,
      { id }: { id: number },
      { companiesService }: { companiesService: CompaniesService },
    ): Promise<Company | null> {
      return companiesService.getById(id);
    },
  },
  Mutation: {
    async createCompany(
      _: void,
      { input }: { input: CreateCompanyInput },
      { companiesService }: { companiesService: CompaniesService },
    ): Promise<Company> {
      return companiesService.create(input);
    },
    async updateCompany(
      _: void,
      { id, input }: { id: number; input: UpdateCompanyInput },
      { companiesService }: { companiesService: CompaniesService },
    ): Promise<Company | null> {
      return companiesService.update(id, input);
    },
    async deleteCompany(
      _: void,
      { id }: { id: number },
      { companiesService }: { companiesService: CompaniesService },
    ): Promise<boolean> {
      return companiesService.delete(id);
    },
  },
};
