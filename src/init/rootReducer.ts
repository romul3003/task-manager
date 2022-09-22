import { combineReducers } from 'redux'
import { taskReducer } from '../redux/tasks/reducer'
import { authReducer } from '../redux/auth/reducer'
import { routerReducer } from './reduxHistoryContext'
import { uiReducer } from '../redux/ui/reducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  task: taskReducer,
  ui: uiReducer,
  router: routerReducer,
})

export type AppState = ReturnType<typeof rootReducer>
