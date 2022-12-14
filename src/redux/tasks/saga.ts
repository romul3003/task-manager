import { SagaIterator } from '@redux-saga/core'
import {
  takeEvery, put, call, apply,
} from 'redux-saga/effects'
import { api } from '../../api'
import {
  FetchedError, FormStates, Tag, Task, ToastTypes,
} from '../../types'
import { setNotification } from '../ui/actions'
import {
  createTask, deleteTask, editTask, fillTags, fillTasks, loadTasksFailure, setSelectedTagId, setTaskManagerState,
} from './actions'
import {
  CreateTaskAsyncAction, DeleteTaskAsyncAction, TaskActionTypes, UpdateTaskAsyncAction,
} from './types'

function* loadTasksAsyncSaga(): SagaIterator {
  try {
    const response = yield call(api.tasks.fetchTasks)
    if (response?.ok) {
      const { data }: {data: Task[]} = yield apply(response, response.json, [])
      yield put(fillTasks(data))
    } else {
      throw new Error(`Status: ${response?.status}. Request error. Please, repeat after few minutes or contact the administrator`)
    }
  } catch (error) {
    yield put(loadTasksFailure(error as Error))
  }
}

function* loadTagsAsyncSaga(): SagaIterator {
  const response = yield call(api.tasks.fetchTags)
  if (response?.ok) {
    const tags: Tag[] = yield apply(response, response.json, [])

    if (Array.isArray(tags) && tags.length) {
      yield put(fillTags(tags))
      yield put(setSelectedTagId(tags[0].id))
    } else {
      yield put(setNotification({
        type: ToastTypes.ERROR,
        message: 'There are no tags.',
      }))
    }
  }
}

function* createTaskAsyncSaga({ payload: createdTask }: CreateTaskAsyncAction): SagaIterator {
  try {
    const response = yield call(api.tasks.create, createdTask)
    if (response?.ok) {
      const { data: newTask }: {data: Task} = yield apply(response, response.json, [])
      yield put(createTask(newTask))
      yield put(setTaskManagerState(FormStates.CLOSED))
      yield put(setNotification({
        type: ToastTypes.INFO,
        message: 'The task was added',
      }))
    } else {
      const error: FetchedError = yield apply(response, response.json, [])
      yield put(setNotification({
        type: ToastTypes.ERROR,
        message: error.message,
      }))
      throw new Error(`Status: ${response?.status}. ${error.message}. Please, repeat after few minutes or contact the administrator`)
    }
  } catch (error) {
    yield put(loadTasksFailure(error as Error))
  }
}

function* deleteTaskAsyncSaga({ payload: taskId }: DeleteTaskAsyncAction): SagaIterator {
  try {
    const response = yield call(api.tasks.delete, taskId)
    if (response?.ok) {
      yield put(deleteTask(taskId))
      yield put(setTaskManagerState(FormStates.CLOSED))
      yield put(setNotification({
        type: ToastTypes.INFO,
        message: 'The task was deleted',
      }))
    } else {
      throw new Error(`Status: ${response?.status}. Request error. Please, repeat after few minutes or contact the administrator`)
    }
  } catch (error) {
    yield put(loadTasksFailure(error as Error))
  }
}

function* updateTaskAsyncSaga({ payload }: UpdateTaskAsyncAction): SagaIterator {
  const { currentTaskId, editedTask } = payload

  try {
    const response = yield call(api.tasks.update, currentTaskId, editedTask)

    if (response?.ok) {
      const { data: task }: {data: Task} = yield apply(response, response.json, [])
      yield put(editTask(task))
      yield put(setTaskManagerState(FormStates.CLOSED))
      yield put(setNotification({
        type: ToastTypes.INFO,
        message: `The task with id ${task.id} was successfully updated.`,
      }))
    } else {
      const error: FetchedError = yield apply(response, response.json, [])
      yield put(setNotification({
        type: ToastTypes.ERROR,
        message: error.message,
      }))
      throw new Error(`Status: ${response?.status}. Request error. ${error.message}`)
    }
  } catch (error) {
    yield put(loadTasksFailure(error as Error))
  }
}

export function* taskSaga(): SagaIterator {
  yield takeEvery(TaskActionTypes.LOAD_TASKS_ASYNC, loadTasksAsyncSaga)
  yield takeEvery(TaskActionTypes.LOAD_TAGS_ASYNC, loadTagsAsyncSaga)
  yield takeEvery(TaskActionTypes.CREATE_TASK_ASYNC, createTaskAsyncSaga)
  yield takeEvery(TaskActionTypes.UPDATE_TASK_ASYNC, updateTaskAsyncSaga)
  yield takeEvery(TaskActionTypes.DELETE_TASK_ASYNC, deleteTaskAsyncSaga)
}
