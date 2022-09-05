import {
  Task,
  LoadTasksAction,
  FillTasksAction,
  TaskActionTypes,
  LoadTasksFailureAction,
  ClearTasksAction,
} from './types'

export const loadTasks = (): LoadTasksAction => ({
  type: TaskActionTypes.LOAD_TASKS,
})

export const fillTasks = (tasks: Task[]): FillTasksAction => ({
  type: TaskActionTypes.FILL_TASKS,
  payload: tasks,
})

export const loadTasksFailure = (error: Error): LoadTasksFailureAction => ({
  type: TaskActionTypes.LOAD_TASKS_FAILURE,
  payload: error.message,
})

export const clearTasks = (): ClearTasksAction => ({
  type: TaskActionTypes.CLEAR_TASKS,
})
