import { IUser } from './users.interfaces';

export interface IAuth {
  status: boolean;
  token: string | null;
}

export interface IState {
  loading: boolean;
  auth: IAuth;
  user: IUser | null;
  errors: any[];
}
