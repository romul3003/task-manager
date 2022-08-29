export type LoginCredentials = {
  email: string;
  password: string;
}

export enum LoginActionTypes {
  LOAD_LOGIN_START = 'LOAD_LOGIN_START',
  LOAD_LOGIN_SUCCESS = 'LOAD_LOGIN_SUCCESS',
  LOAD_LOGIN_FAILURE = 'LOAD_LOGIN_FAILURE',
}

export type LoadLoginStartAction = {
  type: LoginActionTypes.LOAD_LOGIN_START;
  payload: LoginCredentials;
}

export type LoadLoginSuccessAction = {
  type: LoginActionTypes.LOAD_LOGIN_SUCCESS;
  payload: string;
}

export type LoadLoginFailureAction = {
  type: LoginActionTypes.LOAD_LOGIN_FAILURE;
  payload: string;
  error: boolean;
}

export type LoginActions =
  | LoadLoginStartAction
  | LoadLoginSuccessAction
  | LoadLoginFailureAction
