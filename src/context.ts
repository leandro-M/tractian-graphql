import axios from './utils/axios.instance';
import { UsersService } from './modules/users/users.service';
import { AssetsService } from './modules/assets/assets.service';

export default {
  usersService: new UsersService(axios),
  assetsService: new AssetsService(axios),
};
