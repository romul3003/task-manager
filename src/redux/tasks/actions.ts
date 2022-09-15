import { FormStates } from '../../types'
import {
  Task,
  Tag,
  LoadTasksAsyncAction,
  FillTasksAction,
  TaskActionTypes,
  LoadTasksFailureAction,
  ClearTasksAction,
  SetCurrentTaskIdAction,
  LoadTagsAsyncAction,
  FillTagsAction,
  SetSelectedTagIdAction,
  CreateTaskAsyncAction,
  CreatedTask,
  CreateTaskAction,
  DeleteTaskAction,
  DeleteTaskAsyncAction,
  UpdateTaskAsyncAction,
  EditTaskAction,
} from './types'

export const loadTasksAsync = (): LoadTasksAsyncAction => ({
  type: TaskActionTypes.LOAD_TASKS_ASYNC,
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

export const loadTagsAsync = (): LoadTagsAsyncAction => ({
  type: TaskActionTypes.LOAD_TAGS_ASYNC,
})

export const fillTags = (tags: Tag[]): FillTagsAction => ({
  type: TaskActionTypes.FILL_TAGS,
  payload: tags,
})

export const setSelectedTagId = (tagId: string): SetSelectedTagIdAction => ({
  type: TaskActionTypes.SET_SELECTED_TAG_ID,
  payload: tagId,
})

export const createTaskAsync = (createdTask: CreatedTask): CreateTaskAsyncAction => ({
  type: TaskActionTypes.CREATE_TASK_ASYNC,
  payload: createdTask,
})

export const createTask = (newTask: Task): CreateTaskAction => ({
  type: TaskActionTypes.CREATE_TASK,
  payload: newTask,
})

export const deleteTaskAsync = (taskId: string): DeleteTaskAsyncAction => ({
  type: TaskActionTypes.DELETE_TASK_ASYNC,
  payload: taskId,
})

export const deleteTask = (taskId: string): DeleteTaskAction => ({
  type: TaskActionTypes.DELETE_TASK,
  payload: taskId,
})

export const updateTaskAsync = (currentTaskId: string, editedTask: CreatedTask): UpdateTaskAsyncAction => ({
  type: TaskActionTypes.UPDATE_TASK_ASYNC,
  payload: {
    currentTaskId, editedTask,
  },
})

export const editTask = (editedTask: Task): EditTaskAction => ({
  type: TaskActionTypes.EDIT_TASK,
  payload: editedTask,
})

export const setTaskManagerState = (nextState: FormStates) => ({
  type: TaskActionTypes.SET_TASK_MANAGER_STATE,
  payload: nextState,
})
