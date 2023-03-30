import { UsersResolver } from './modules/users/users.resolver';
import { AssetsResolver } from './modules/assets/assets.resolver';
import { CompaniesResolver } from './modules/companies/companies.resolver';

export const queryResolvers = {
  ...UsersResolver.Query,
  ...AssetsResolver.Query,
  ...CompaniesResolver.Query,
};

export const assetsResolvers = {
  ...AssetsResolver.Asset,
};
