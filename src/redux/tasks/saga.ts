import { SagaIterator } from '@redux-saga/core'
import {
  takeEvery, put, call, apply,
} from 'redux-saga/effects'
import { api } from '../../api'
import {
  createTask, fillTags, fillTasks, loadTasksFailure,
} from './actions'
import {
  CreateTaskAsyncAction, Tag, Task, TaskActionTypes,
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

    yield put(fillTags(tags))
  }
}

function* createTaskAsyncSaga({ payload }: CreateTaskAsyncAction): SagaIterator {
  try {
    const response = yield call(api.tasks.createTask, payload)
    if (response?.ok) {
      const { data: newTask }: {data: Task} = yield apply(response, response.json, [])
      yield put(createTask(newTask))
    } else {
      throw new Error(`Status: ${response?.status}. Request error. Please, repeat after few minutes or contact the administrator`)
    }
  } catch (error) {
    yield put(loadTasksFailure(error as Error))
  }
}

export function* taskSaga(): SagaIterator {
  yield takeEvery(TaskActionTypes.LOAD_TASKS_ASYNC, loadTasksAsyncSaga)
  yield takeEvery(TaskActionTypes.LOAD_TAGS_ASYNC, loadTagsAsyncSaga)
  yield takeEvery(TaskActionTypes.CREATE_TASK_ASYNC, createTaskAsyncSaga)
}
