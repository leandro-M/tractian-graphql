import { UsersResolver } from './modules/users/users.resolver';
import { AssetsResolver } from './modules/assets/assets.resolver';
import { CompaniesResolver } from './modules/companies/companies.resolver';
import { UnitsResolver } from './modules/units/units.resolver';
import { WorkOrdersResolver } from './modules/workorders/workorders.resolver';

export const queryResolvers = {
  Query: {
    ...UsersResolver.Query,
    ...AssetsResolver.Query,
    ...CompaniesResolver.Query,
    ...UnitsResolver.Query,
    ...WorkOrdersResolver.Query,
  },
};

export const othersResolvers = {
  User: UsersResolver.User,
  Asset: AssetsResolver.Asset,
  Unit: UnitsResolver.Unit,
  WorkOrder: WorkOrdersResolver.WorkOrder,
};
