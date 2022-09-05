import { combineReducers } from 'redux'
import { taskReducer } from '../redux/tasks/reducer'
import { authReducer } from '../redux/auth/reducer'
import { routerReducer } from './reduxHistoryContext'

export const rootReducer = combineReducers({
  auth: authReducer,
  task: taskReducer,
  router: routerReducer,
})

export type AppState = ReturnType<typeof rootReducer>
