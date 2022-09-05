export type Tag = {
    id: string;
    name: string;
    color: string;
    bg: string;
}

export type Task = {
  id: string;
  completed: boolean;
  title: string;
  description: string;
  deadline: string;
  tag: Tag;
}

export enum TaskActionTypes {
  LOAD_TASKS = 'LOAD_TASKS',
  FILL_TASKS = 'FILL_TASKS',
  LOAD_TASKS_FAILURE = 'LOAD_TASKS_FAILURE',
  CLEAR_TASKS = 'CLEAR_TASKS',
}

export type LoadTasksAction = {
  type: TaskActionTypes.LOAD_TASKS;
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

export type TasksActions =
  | LoadTasksAction
  | FillTasksAction
  | LoadTasksFailureAction
  | ClearTasksAction
