export type AuthCredentials = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export enum AuthActionTypes {
  LOAD_AUTH_START = 'LOAD_AUTH_START',
  LOAD_AUTH_SUCCESS = 'LOAD_AUTH_SUCCESS',
  LOAD_AUTH_FAILURE = 'LOAD_AUTH_FAILURE',
}

export type LoadAuthStartAction = {
  type: AuthActionTypes.LOAD_AUTH_START;
  payload: AuthCredentials;
}

export type LoadAuthSuccessAction = {
  type: AuthActionTypes.LOAD_AUTH_SUCCESS;
  payload: string;
}

export type LoadAuthFailureAction = {
  type: AuthActionTypes.LOAD_AUTH_FAILURE;
  payload: string;
  error: boolean;
}

export type AuthActions =
  | LoadAuthStartAction
  | LoadAuthSuccessAction
  | LoadAuthFailureAction
