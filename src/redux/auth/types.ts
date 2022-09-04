export type SignUpCredentials = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type LoginCredentials = {
  email: string;
  password: string;
}

export type Profile = {
  id: string;
  name: string;
  email: string;
  created: string;
}

export type FetchedError = {
  statusCode: number;
  message: string;
  error: string;
}

export type AuthCredentials = LoginCredentials | SignUpCredentials

export enum AuthActionTypes {
  LOAD_SIGH_UP_START = 'LOAD_SIGH_UP_START',
  LOAD_LOGIN_START = 'LOAD_LOGIN_START',
  LOAD_AUTH_SUCCESS = 'LOAD_AUTH_SUCCESS',
  LOAD_AUTH_FAILURE = 'LOAD_AUTH_SUCCESS',
  LOAD_PROFILE = 'LOAD_PROFILE',
  FILL_PROFILE = 'FILL_PROFILE'
}

export type LoadSighUpStartAction = {
  type: AuthActionTypes.LOAD_SIGH_UP_START;
  payload: SignUpCredentials;
}

export type LoadLoginStartAction = {
  type: AuthActionTypes.LOAD_LOGIN_START;
  payload: LoginCredentials;
}

export type LoadAuthSuccessAction = {
  type: AuthActionTypes.LOAD_AUTH_SUCCESS;
  payload: string;
}

export type LoadAuthFailureAction = {
  type: AuthActionTypes.LOAD_AUTH_FAILURE;
  payload: string;
}

export type LoadProfileAction = {
  type: AuthActionTypes.LOAD_PROFILE;
}

export type FillProfileAction = {
  type: AuthActionTypes.FILL_PROFILE;
  payload: Profile;
}

export type AuthActions =
  | LoadSighUpStartAction
  | LoadLoginStartAction
  | LoadAuthSuccessAction
  | LoadAuthFailureAction
  | LoadProfileAction
  | FillProfileAction
