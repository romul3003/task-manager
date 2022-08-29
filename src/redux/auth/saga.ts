import { SagaIterator } from '@redux-saga/core'
import {
  call, takeEvery, put, apply,
} from 'redux-saga/effects'
import { loadAuthSuccess, loadAuthFailure } from './actions'
import { api } from '../../api/api'
import { AuthActionTypes, LoadAuthStartAction } from './types'

function* setTokenSaga({ payload }: LoadAuthStartAction): SagaIterator {
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

export function* authSaga(): SagaIterator {
  yield takeEvery(AuthActionTypes.LOAD_AUTH_START, setTokenSaga)
}
