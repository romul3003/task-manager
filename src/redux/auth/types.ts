import { LoginCredentials, Profile, SignUpCredentials } from '../../types'

export enum AuthActionTypes {
  SIGH_UP = 'SIGH_UP',
  LOGIN = 'LOGIN',
  SET_TOKEN = 'SET_TOKEN',
  LOAD_AUTH_FAILURE = 'LOAD_AUTH_FAILURE',
  LOAD_PROFILE = 'LOAD_PROFILE',
  FILL_PROFILE = 'FILL_PROFILE',
  LOGOUT = 'LOGOUT',
  CLEAR_PROFILE = 'CLEAR_PROFILE',
}

export type SignUpAction = {
  type: AuthActionTypes.SIGH_UP;
  payload: SignUpCredentials;
}

export type LoginAction = {
  type: AuthActionTypes.LOGIN;
  payload: LoginCredentials;
}

export type SetTokenAction = {
  type: AuthActionTypes.SET_TOKEN;
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

export type LogoutAction = {
  type: AuthActionTypes.LOGOUT;
}

export type ClearProfileAction = {
  type: AuthActionTypes.CLEAR_PROFILE;
}

export type AuthActions =
  | SignUpAction
  | LoginAction
  | SetTokenAction
  | LoadAuthFailureAction
  | LoadProfileAction
  | FillProfileAction
  | LogoutAction
  | ClearProfileAction
