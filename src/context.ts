import axios from './utils/axios.instance';
import { UsersService } from './modules/users/users.service';
import { AssetsService } from './modules/assets/assets.service';
import { CompaniesService } from './modules/companies/companies.service';
import { UnitsService } from './modules/units/units.service';

export default {
  usersService: new UsersService(axios),
  assetsService: new AssetsService(axios),
  companiesService: new CompaniesService(axios),
  unitsService: new UnitsService(axios),
};
