import { combineReducers } from 'redux'
import { routerReducer } from './reduxHistoryContext'

const initialState = {}

export const appReducer = (state = initialState) => state

export const rootReducer = combineReducers({
  app: appReducer,
  router: routerReducer,
})

export type AppState = ReturnType<typeof rootReducer>
