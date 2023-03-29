import { User } from '../users.model';

export const mockUsers: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@tractian.com',
    companyId: 1,
    unitId: 1
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'janedoe@tractian.com',
    companyId: 1,
    unitId: 1
  }
];

export const mockUser: User = {
  id: 1,
  name: 'John Doe',
  email: 'johndoe@tractian.com',
  companyId: 1,
  unitId: 1
}

export const NULLED_PARAM = undefined

