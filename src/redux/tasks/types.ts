import {
  CreatedTask, FormStates, Tag, Task,
} from '../../types'

export enum TaskActionTypes {
  LOAD_TASKS_ASYNC = 'LOAD_TASKS_ASYNC',
  FILL_TASKS = 'FILL_TASKS',
  LOAD_TASKS_FAILURE = 'LOAD_TASKS_FAILURE',
  CLEAR_TASKS = 'CLEAR_TASKS',
  SET_CURRENT_TASK_ID = 'SET_CURRENT_TASK_ID',
  LOAD_TAGS_ASYNC = 'LOAD_TAGS_ASYNC',
  FILL_TAGS = 'FILL_TAGS',
  SET_SELECTED_TAG_ID = 'SET_SELECTED_TAG_ID',
  CREATE_TASK_ASYNC = 'CREATE_TASK_ASYNC',
  CREATE_TASK = 'CREATE_TASK',
  UPDATE_TASK_ASYNC = 'UPDATE_TASK_ASYNC',
  EDIT_TASK = 'EDIT_TASK',
  DELETE_TASK_ASYNC = 'DELETE_TASK_ASYNC',
  DELETE_TASK = 'DELETE_TASK',
  SET_TASK_MANAGER_STATE = 'SET_TASK_MANAGER_STATE',
}

export type LoadTasksAsyncAction = {
  type: TaskActionTypes.LOAD_TASKS_ASYNC;
}

export type FillTasksAction = {
  type: TaskActionTypes.FILL_TASKS;
  payload: Task[];
}

export type LoadTasksFailureAction = {
  type: TaskActionTypes.LOAD_TASKS_FAILURE;
  payload: string;
}

export type ClearTasksAction = {
  type: TaskActionTypes.CLEAR_TASKS;
}

export type SetCurrentTaskIdAction = {
  type: TaskActionTypes.SET_CURRENT_TASK_ID;
  payload: string | null;
}

export type LoadTagsAsyncAction = {
  type: TaskActionTypes.LOAD_TAGS_ASYNC;
}

export type FillTagsAction = {
  type: TaskActionTypes.FILL_TAGS;
  payload: Tag[];
}

export type SetSelectedTagIdAction = {
  type: TaskActionTypes.SET_SELECTED_TAG_ID;
  payload: string;
}

export type CreateTaskAsyncAction = {
  type: TaskActionTypes.CREATE_TASK_ASYNC;
  payload: CreatedTask;
}

export type CreateTaskAction = {
  type: TaskActionTypes.CREATE_TASK;
  payload: Task;
}

export type DeleteTaskAsyncAction = {
  type: TaskActionTypes.DELETE_TASK_ASYNC;
  payload: string;
}

export type DeleteTaskAction = {
  type: TaskActionTypes.DELETE_TASK;
  payload: string;
}

export type UpdateTaskAsyncAction = {
  type: TaskActionTypes.UPDATE_TASK_ASYNC,
  payload: {
    currentTaskId: string;
    editedTask: CreatedTask;
  }
}

export type EditTaskAction = {
  type: TaskActionTypes.EDIT_TASK;
  payload: Task;
}

export type SetTaskManagerStateAction = {
  type: TaskActionTypes.SET_TASK_MANAGER_STATE;
  payload: FormStates;
}

export type TasksActions =
  | LoadTasksAsyncAction
  | FillTasksAction
  | LoadTasksFailureAction
  | ClearTasksAction
  | SetCurrentTaskIdAction
  | LoadTagsAsyncAction
  | FillTagsAction
  | SetSelectedTagIdAction
  | CreateTaskAsyncAction
  | CreateTaskAction
  | UpdateTaskAsyncAction
  | EditTaskAction
  | DeleteTaskAsyncAction
  | DeleteTaskAction
  | SetTaskManagerStateAction
