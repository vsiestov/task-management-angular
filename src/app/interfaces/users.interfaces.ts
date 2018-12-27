export interface IAuth {
  email: string;
  password: string;
}

export interface IRegistration {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface IUser {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  token?: string;
}
