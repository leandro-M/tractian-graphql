import { CompaniesService } from './companies.service';
import { Company } from './companies.model';

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
};
