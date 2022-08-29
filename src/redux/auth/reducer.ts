import { AuthActions, AuthActionTypes } from './types'

export type AuthState = {
  loading: boolean;
  token: string;
  error: string | null;
}

const initialState: AuthState = {
  token: '',
  error: null,
  loading: false,
}

export const authReducer = (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOAD_SIGH_UP_START:
    case AuthActionTypes.LOAD_LOGIN_START:
    {
      return {
        ...state,
        loading: true,
        error: null,
      }
    }
    case AuthActionTypes.LOAD_AUTH_SUCCESS: {
      return {
        ...state,
        token: action.payload,
        error: null,
        loading: false,
      }
    }
    case AuthActionTypes.LOAD_AUTH_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    }
    default:
      return state
  }
}
