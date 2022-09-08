import {
  Tag, Task, TaskActionTypes, TasksActions,
} from './types'

export type TaskState = {
  isLoadingTasks: boolean;
  tasks: Task[] | null;
  error: string | null;
  currentTaskId: string | null;
  isLoadingTags: boolean;
  tags: Tag[] | null;
}

const initialState: TaskState = {
  isLoadingTasks: false,
  tasks: null,
  error: null,
  currentTaskId: null,
  isLoadingTags: false,
  tags: null,
}

export const taskReducer = (state = initialState, action: TasksActions): TaskState => {
  switch (action.type) {
    case TaskActionTypes.LOAD_TASKS:
      return {
        ...state,
        isLoadingTasks: true,
        error: null,
      }
    case TaskActionTypes.FILL_TASKS:
      return {
        ...state,
        tasks: action.payload,
        isLoadingTasks: false,
        error: null,
      }

    case TaskActionTypes.LOAD_TASKS_FAILURE:
      return {
        ...state,
        isLoadingTasks: false,
        error: action.payload,
      }
    case TaskActionTypes.CLEAR_TASKS:
      return {
        ...initialState,
      }
    case TaskActionTypes.SET_CURRENT_TASK_ID:
      return {
        ...state,
        currentTaskId: action.payload,
      }
    case TaskActionTypes.LOAD_TAGS:
      return {
        ...state,
        isLoadingTags: true,
      }
    case TaskActionTypes.FILL_TAGS:
      return {
        ...state,
        tags: action.payload,
        isLoadingTags: false,
        error: null,
      }
    default:
      return state
  }
}
