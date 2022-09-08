import {
  Task,
  Tag,
  LoadTasksAction,
  FillTasksAction,
  TaskActionTypes,
  LoadTasksFailureAction,
  ClearTasksAction,
  SetCurrentTaskIdAction,
  LoadTagsAction,
  FillTagsAction,
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

export const setCurrentTaskId = (id: string): SetCurrentTaskIdAction => ({
  type: TaskActionTypes.SET_CURRENT_TASK_ID,
  payload: id,
})

export const loadTags = (): LoadTagsAction => ({
  type: TaskActionTypes.LOAD_TAGS,
})

export const fillTags = (tags: Tag[]): FillTagsAction => ({
  type: TaskActionTypes.FILL_TAGS,
  payload: tags,
})
