import { UsersService } from './users.service';
import { UnitsService } from '../units/units.service';
import { User } from './users.model';

export const UsersResolver = {
  User: {
    unit: async (parent: User, __: void, { unitsService }: { unitsService: UnitsService }) => {
      const unit = await unitsService.getById(parent.unitId);
      return unit;
    },
  },
  Query: {
    async users(_: void, __: void, { usersService }: { usersService: UsersService }): Promise<User[]> {
      return usersService.getAll();
    },
    async user(
      _: void,
      { id }: { id: number },
      { usersService }: { usersService: UsersService },
    ): Promise<User | null> {
      return usersService.getById(id);
    },
  },
};
