import {
  AuthActionTypes, SetTokenAction, SetErrorAction, ResetErrorAction, AuthCredentials, FetchCredentials,
} from './types'

export const fetchCredentials = (credentials: AuthCredentials): FetchCredentials => ({
  type: AuthActionTypes.FETCH_CREDENTIALS,
  payload: credentials,
})

export const setToken = (token: string): SetTokenAction => ({
  type: AuthActionTypes.SET_TOKEN,
  payload: token,
})

export const setError = (error: Error): SetErrorAction => ({
  type: AuthActionTypes.SET_ERROR,
  payload: error.message,
  error: false,
})

export const resetError = (): ResetErrorAction => ({
  type: AuthActionTypes.RESET_ERROR,
})
