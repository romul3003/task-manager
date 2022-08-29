
import { SagaIterator } from '@redux-saga/core'
import {
  call, takeEvery, put, apply,
} from 'redux-saga/effects'
import { loadAuthFailure, loadAuthSuccess } from './actions'
import { api } from '../../api/api'
import { AuthActionTypes, LoadLoginStartAction, LoadSighUpStartAction } from './types'

function* setSighUpSaga({ payload }: LoadSighUpStartAction): SagaIterator {
  try {
    const response = yield call(api.signUp, payload)

    if (response?.ok) {
      const data = yield apply(response, response.json, [])

      yield put(loadAuthSuccess(data))
      localStorage.setItem('jwt', data)
    } else {
      throw new Error(`Status: ${response?.status}. Request error. Please, repeat after few minutes or contact the administrator`)
    }
  } catch (error) {
    yield put(loadAuthFailure(error as Error))
  }
}

function* setLoginSaga({ payload }: LoadLoginStartAction): SagaIterator {
  try {
    const response = yield call(api.login, payload)

    if (response?.ok) {
      const data = yield apply(response, response.json, [])
      yield put(loadAuthSuccess(data))
      localStorage.setItem('jwt', data)
    // eslint-disable-next-line no-magic-numbers
    } else if (response?.status === 401) {
      throw new Error(`Status: ${response?.status}. Wrong login or password. Please check your data`)
    } else {
      throw new Error(`Status: ${response?.status}. Request error. Please, repeat after few minutes or contact the administrator`)
    }
  } catch (error) {
    yield put(loadAuthFailure(error as Error))
  }
}

export function* authSaga(): SagaIterator {
  yield takeEvery(AuthActionTypes.LOAD_SIGH_UP_START, setSighUpSaga)
  yield takeEvery(AuthActionTypes.LOAD_LOGIN_START, setLoginSaga)
}
