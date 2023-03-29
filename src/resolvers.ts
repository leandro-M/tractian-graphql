import { UsersResolver } from './modules/users/users.resolver';
import { AssetsResolver } from './modules/assets/assets.resolver';

export const queryResolvers = {
  ...UsersResolver.Query,
  ...AssetsResolver.Query,
};

export const assetsResolvers = {
  ...AssetsResolver.Asset,
};
