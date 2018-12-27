export interface IErrorItem {
  param?: string;
  msg: string;
  location: string;
}

export interface IError {
  errors: IErrorItem[];
}
