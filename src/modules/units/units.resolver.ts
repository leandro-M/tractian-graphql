import { UnitsService } from './units.service';
import { CompaniesService } from '../companies/companies.service';

import { CreateUnitInput, Unit, UpdateUnitInput } from './units.model';

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
  Mutation: {
    async createUnit(
      _: void,
      { input }: { input: CreateUnitInput },
      { unitsService }: { unitsService: UnitsService },
    ): Promise<Unit> {
      return unitsService.create(input);
    },
    async updateUnit(
      _: void,
      { id, input }: { id: number; input: UpdateUnitInput },
      { unitsService }: { unitsService: UnitsService },
    ): Promise<Unit | null> {
      return unitsService.update(id, input);
    },
    async deleteUnit(
      _: void,
      { id }: { id: number },
      { unitsService }: { unitsService: UnitsService },
    ): Promise<boolean> {
      return unitsService.delete(id);
    },
  },
};
