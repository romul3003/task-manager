import { Task, TaskActionTypes, TasksActions } from './types'

export type TaskState = {
  isLoading: boolean;
  tasks: Task[] | null
  error: string | null;
}

const initialState: TaskState = {
  isLoading: false,
  tasks: null,
  error: null,
}

export const taskReducer = (state = initialState, action: TasksActions): TaskState => {
  switch (action.type) {
    case TaskActionTypes.LOAD_TASKS:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case TaskActionTypes.FILL_TASKS:
      return {
        ...state,
        tasks: action.payload,
        isLoading: false,
        error: null,
      }

    case TaskActionTypes.LOAD_TASKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    case TaskActionTypes.CLEAR_TASKS:
      return {
        ...state,
        tasks: null,
      }
    default:
      return state
  }
}
