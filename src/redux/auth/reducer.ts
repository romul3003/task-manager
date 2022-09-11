import { Profile } from '../../types'
import { AuthActions, AuthActionTypes } from './types'

export type AuthState = {
  tokenLoading: boolean;
  token: string | null;
  isAuthenticated: boolean;
  profileLoading: boolean;
  profile: Profile| null;
  error: string | null;
}

const initialState: AuthState = {
  tokenLoading: false,
  token: null,
  isAuthenticated: false,
  profileLoading: false,
  profile: null,
  error: null,
}

export const authReducer = (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SIGH_UP:
    case AuthActionTypes.LOGIN:
    {
      return {
        ...state,
        tokenLoading: true,
        error: null,
      }
    }
    case AuthActionTypes.SET_TOKEN: {
      return {
        ...state,
        token: action.payload,
        error: null,
        tokenLoading: false,
        isAuthenticated: true,
      }
    }
    case AuthActionTypes.LOAD_AUTH_FAILURE: {
      return {
        ...state,
        error: action.payload,
        tokenLoading: false,
        profileLoading: false,
        isAuthenticated: false,
      }
    }
    case AuthActionTypes.LOAD_PROFILE: {
      return {
        ...state,
        profileLoading: true,
      }
    }

    case AuthActionTypes.FILL_PROFILE: {
      return {
        ...state,
        profileLoading: false,
        profile: action.payload,
      }
    }
    case AuthActionTypes.LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
      }
    }
    case AuthActionTypes.CLEAR_PROFILE: {
      return {
        ...state,
        profile: null,
      }
    }
    default:
      return state
  }
}
