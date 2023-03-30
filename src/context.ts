import axios from './utils/axios.instance';
import { UsersService } from './modules/users/users.service';
import { AssetsService } from './modules/assets/assets.service';
import { CompaniesService } from './modules/companies/companies.service';
import { UnitsService } from './modules/units/units.service';
import { WorkOrdersService } from './modules/workorders/workorders.service';

export default {
  usersService: new UsersService(axios),
  assetsService: new AssetsService(axios),
  companiesService: new CompaniesService(axios),
  unitsService: new UnitsService(axios),
  workOrdersService: new WorkOrdersService(axios),
};
