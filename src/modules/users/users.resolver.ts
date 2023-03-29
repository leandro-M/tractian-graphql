import { UsersService } from './users.service';
import { User } from './users.model';

export const UsersResolver = {
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
