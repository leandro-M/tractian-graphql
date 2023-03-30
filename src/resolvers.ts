import { UsersResolver } from './modules/users/users.resolver';
import { AssetsResolver } from './modules/assets/assets.resolver';
import { CompaniesResolver } from './modules/companies/companies.resolver';
import { UnitsResolver } from './modules/units/units.resolver';

export const queryResolvers = {
  Query: {
    ...UsersResolver.Query,
    ...AssetsResolver.Query,
    ...CompaniesResolver.Query,
    ...UnitsResolver.Query,
  },
};

export const othersResolvers = {
  Asset: AssetsResolver.Asset,
  Unit: UnitsResolver.Unit,
};
