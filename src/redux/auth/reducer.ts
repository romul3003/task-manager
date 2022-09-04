import { AuthActions, AuthActionTypes, Profile } from './types'

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
    case AuthActionTypes.LOAD_SIGH_UP_START:
    case AuthActionTypes.LOAD_LOGIN_START:
    {
      return {
        ...state,
        tokenLoading: true,
        error: null,
      }
    }
    case AuthActionTypes.LOAD_AUTH_SUCCESS: {
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
    default:
      return state
  }
}
