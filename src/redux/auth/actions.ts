import {
  AuthActionTypes,
  LoadLoginStartAction,
  SignUpCredentials,
  LoadSighUpStartAction,
  LoginCredentials,
  LoadAuthSuccessAction,
  LoadAuthFailureAction,
} from './types'

export const loadSighUpStart = (credentials: SignUpCredentials): LoadSighUpStartAction => ({
  type: AuthActionTypes.LOAD_SIGH_UP_START,
  payload: credentials,
})

export const loadLoginStart = (credentials: LoginCredentials): LoadLoginStartAction => ({
  type: AuthActionTypes.LOAD_LOGIN_START,
  payload: credentials,
})

export const loadAuthSuccess = (token: string): LoadAuthSuccessAction => ({
  type: AuthActionTypes.LOAD_AUTH_SUCCESS,
  payload: token,
})

export const loadAuthFailure = (error: Error): LoadAuthFailureAction => ({
  type: AuthActionTypes.LOAD_AUTH_FAILURE,
  payload: error.message,
  error: false,
})
