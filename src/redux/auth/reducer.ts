import { AuthActions, AuthActionTypes } from './types'

export type AuthState = {
  loading: boolean;
  token: string;
  errorMessage: string;
  error: boolean;
}

const initialState: AuthState = {
  token: '',
  errorMessage: '',
  error: false,
  loading: false,
}

export const authReducer = (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthActionTypes.FETCH_CREDENTIALS: {
      return {
        ...state,
        loading: true,
      }
    }
    case AuthActionTypes.SET_TOKEN: {
      return {
        ...state,
        token: action.payload,
        errorMessage: '',
        error: false,
        loading: false,
      }
    }
    case AuthActionTypes.SET_ERROR: {
      return {
        ...state,
        errorMessage: action.payload,
        error: true,
        loading: false,
      }
    }
    case AuthActionTypes.RESET_ERROR: {
      return {
        ...state,
        errorMessage: '',
        error: false,
        loading: false,
      }
    }
    default:
      return state
  }
}
