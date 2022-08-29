import { combineReducers } from 'redux'
import { authReducer } from '../redux/auth/reducer'
import { loginReducer } from '../redux/login/reducer'
import { routerReducer } from './reduxHistoryContext'

// const initialState = {}

// export const appReducer = (state = initialState) => state

export const rootReducer = combineReducers({
  auth: authReducer,
  login: loginReducer,
  router: routerReducer,
})

export type AppState = ReturnType<typeof rootReducer>
