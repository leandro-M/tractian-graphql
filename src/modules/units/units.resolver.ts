import { UnitsService } from './units.service';
import { CompaniesService } from '../companies/companies.service';

import { Unit } from './units.model';

export const UnitsResolver = {
  Unit: {
    company: async (parent: Unit, __: void, { companiesService }: { companiesService: CompaniesService }) => {
      const company = await companiesService.getById(parent.companyId);
      return company;
    },
  },
  Query: {
    async units(_: void, __: void, { unitsService }: { unitsService: UnitsService }): Promise<Unit[]> {
      return unitsService.getAll();
    },
    async unit(
      _: void,
      { id }: { id: number },
      { unitsService }: { unitsService: UnitsService },
    ): Promise<Unit | null> {
      return unitsService.getById(id);
    },
  },
};
