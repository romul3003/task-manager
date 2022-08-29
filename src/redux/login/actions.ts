import {
  LoginActionTypes, LoginCredentials, LoadLoginStartAction, LoadLoginSuccessAction, LoadLoginFailureAction,
} from './types'

export const loadLoginStart = (credentials: LoginCredentials): LoadLoginStartAction => ({
  type: LoginActionTypes.LOAD_LOGIN_START,
  payload: credentials,
})

export const loadLoginSuccess = (token: string): LoadLoginSuccessAction => ({
  type: LoginActionTypes.LOAD_LOGIN_SUCCESS,
  payload: token,
})

export const loadLoginFailure = (error: Error): LoadLoginFailureAction => ({
  type: LoginActionTypes.LOAD_LOGIN_FAILURE,
  payload: error.message,
  error: false,
})
