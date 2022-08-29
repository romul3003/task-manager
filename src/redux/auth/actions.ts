import {
  AuthActionTypes, AuthCredentials, LoadAuthStartAction, LoadAuthSuccessAction, LoadAuthFailureAction,
} from './types'

export const loadAuthStart = (credentials: AuthCredentials): LoadAuthStartAction => ({
  type: AuthActionTypes.LOAD_AUTH_START,
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
