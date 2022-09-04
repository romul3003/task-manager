import {
  AuthActionTypes,
  LoginAction,
  SignUpCredentials,
  SignUpAction,
  LoginCredentials,
  SetTokenAction,
  LoadAuthFailureAction,
  Profile,
  LoadProfileAction,
  FillProfileAction,
  LogoutAction,
  ClearProfileAction,
} from './types'

export const signUp = (credentials: SignUpCredentials): SignUpAction => ({
  type: AuthActionTypes.SIGH_UP,
  payload: credentials,
})

export const login = (credentials: LoginCredentials): LoginAction => ({
  type: AuthActionTypes.LOGIN,
  payload: credentials,
})

export const setToken = (token: string): SetTokenAction => ({
  type: AuthActionTypes.SET_TOKEN,
  payload: token,
})

export const loadAuthFailure = (error: Error): LoadAuthFailureAction => ({
  type: AuthActionTypes.LOAD_AUTH_FAILURE,
  payload: error.message,
})

export const loadProfile = (): LoadProfileAction => ({
  type: AuthActionTypes.LOAD_PROFILE,
})

export const fillProfile = (profile: Profile): FillProfileAction => ({
  type: AuthActionTypes.FILL_PROFILE,
  payload: profile,
})

export const logout = (): LogoutAction => ({
  type: AuthActionTypes.LOGOUT,
})

export const clearProfile = (): ClearProfileAction => ({
  type: AuthActionTypes.CLEAR_PROFILE,
})
