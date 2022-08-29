import { LoginActions, LoginActionTypes } from './types'

export type LoginState = {
  loading: boolean;
  token: string;
  error: string | null;
}

const initialState: LoginState = {
  token: '',
  error: null,
  loading: false,
}

export const loginReducer = (state = initialState, action: LoginActions): LoginState => {
  switch (action.type) {
    case LoginActionTypes.LOAD_LOGIN_START: {
      return {
        ...state,
        loading: true,
        error: null,
      }
    }
    case LoginActionTypes.LOAD_LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.payload,
        error: null,
        loading: false,
      }
    }
    case LoginActionTypes.LOAD_LOGIN_FAILURE: {
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
