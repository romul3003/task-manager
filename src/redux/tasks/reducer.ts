import { FormStates, Tag, Task } from '../../types'
import { TaskActionTypes, TasksActions } from './types'

export type TaskState = {
  isLoading: boolean;
  tasks: Task[] | null;
  error: string | null;
  currentTaskId: string | null;
  tags: Tag[] | null;
  selectedTagId: string | null;
  taskManagerState: FormStates;
}

const initialState: TaskState = {
  isLoading: false,
  tasks: null,
  error: null,
  currentTaskId: null,
  tags: null,
  selectedTagId: null,
  taskManagerState: FormStates.CLOSED, // CREATE, UPDATE
}

export const taskReducer = (state = initialState, action: TasksActions): TaskState => {
  switch (action.type) {
    case TaskActionTypes.LOAD_TASKS_ASYNC:
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
        ...initialState,
      }
    case TaskActionTypes.SET_CURRENT_TASK_ID:
      return {
        ...state,
        currentTaskId: action.payload,
      }
    case TaskActionTypes.FILL_TAGS:
      return {
        ...state,
        tags: action.payload,
        error: null,
      }
    case TaskActionTypes.SET_SELECTED_TAG_ID:
      return {
        ...state,
        selectedTagId: action.payload,
      }
    case TaskActionTypes.CREATE_TASK:
      return {
        ...state,
        tasks: Array.isArray(state.tasks) ? [action.payload, ...state.tasks] : [action.payload],
      }
    case TaskActionTypes.DELETE_TASK:
      return {
        ...state,
        tasks: (state.tasks) ? [...state.tasks.filter(task => task.id !== action.payload)] : state.tasks,
      }
    case TaskActionTypes.SET_TASK_MANAGER_STATE:
      return {
        ...state,
        taskManagerState: action.payload,
      }
    case TaskActionTypes.EDIT_TASK:
      return {
        ...state,
        tasks: Array.isArray(state.tasks)
          ? [...state.tasks.map((task) => {
            if (task.id === action.payload.id) {
              return action.payload
            }

            return task
          })]
          : state.tasks,
      }
    default:
      return state
  }
}
