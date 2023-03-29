import { AssetsService } from './assets.service';
import { UsersService } from '../users/users.service';

import { Asset } from './assets.model';

export const AssetsResolver = {
  Asset: {
    assignedUsers: async (parent: Asset, __: void, { usersService }: { usersService: UsersService }) => {
      const users = await usersService.getAll();
      return users.filter(user => parent.assignedUserIds.includes(user.id));
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
