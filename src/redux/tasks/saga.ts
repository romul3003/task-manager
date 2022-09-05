import { SagaIterator } from '@redux-saga/core'
import {
  takeEvery, put, call, apply,
} from 'redux-saga/effects'
import { api } from '../../api'
import { fillTasks, loadTasksFailure } from './actions'
import { Task, TaskActionTypes } from './types'

function* loadTasksSaga(): SagaIterator {
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

export function* taskSaga(): SagaIterator {
  yield takeEvery(TaskActionTypes.LOAD_TASKS, loadTasksSaga)
}
