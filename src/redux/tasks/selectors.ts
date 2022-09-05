import { AppState } from '../../init/rootReducer'
import { TaskState } from './reducer'

export const selectTask = (state: AppState): TaskState => state.task
