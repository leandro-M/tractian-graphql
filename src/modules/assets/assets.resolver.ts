import { AssetsService } from './assets.service';
import { UsersService } from '../users/users.service';
import { CompaniesService } from '../companies/companies.service';
import { UnitsService } from '../units/units.service';

import { Asset } from './assets.model';

export const AssetsResolver = {
  Asset: {
    assignedUsers: async (parent: Asset, __: void, { usersService }: { usersService: UsersService }) => {
      const users = await usersService.getAll();
      return users.filter(user => parent.assignedUserIds.includes(user.id));
    },
    company: async (parent: Asset, __: void, { companiesService }: { companiesService: CompaniesService }) => {
      const company = await companiesService.getById(parent.companyId);
      return company;
    },
    unit: async (parent: Asset, __: void, { unitsService }: { unitsService: UnitsService }) => {
      const unit = await unitsService.getById(parent.unitId);
      return unit;
    },
  },
  Query: {
    async assets(_: void, __: void, { assetsService }: { assetsService: AssetsService }): Promise<Asset[]> {
      return assetsService.getAll();
    },
    async asset(
      _: void,
      { id }: { id: number },
      { assetsService }: { assetsService: AssetsService },
    ): Promise<Asset | null> {
      return assetsService.getById(id);
    },
  },
};
