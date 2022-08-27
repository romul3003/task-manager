export type AuthCredentials = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export enum AuthActionTypes {
  FETCH_CREDENTIALS = 'FETCH_CREDENTIALS',
  SET_TOKEN = 'SET_TOKEN',
  SET_ERROR = 'SET_ERROR',
  RESET_ERROR = 'RESET_ERROR',
}

export type FetchCredentials = {
  type: AuthActionTypes.FETCH_CREDENTIALS;
  payload: AuthCredentials;
}

export type SetTokenAction = {
  type: AuthActionTypes.SET_TOKEN;
  payload: string;
}

export type SetErrorAction = {
  type: AuthActionTypes.SET_ERROR;
  payload: string;
  error: boolean;
}

export type ResetErrorAction = {
  type: AuthActionTypes.RESET_ERROR
}

export type AuthActions =
  | FetchCredentials
  | SetTokenAction
  | SetErrorAction
  | ResetErrorAction
