
import { SagaIterator } from '@redux-saga/core'
import {
  call, takeEvery, put, apply,
} from 'redux-saga/effects'
import { loadLoginSuccess, loadLoginFailure } from './actions'
import { api } from '../../api/api'
import { LoginActionTypes, LoadLoginStartAction } from './types'

function* setTokenSaga({ payload }: LoadLoginStartAction): SagaIterator {
  try {
    const response = yield call(api.login, payload)

    if (response?.ok) {
      const data = yield apply(response, response.json, [])
      yield put(loadLoginSuccess(data))
      localStorage.setItem('jwt', data)
    // eslint-disable-next-line no-magic-numbers
    } else if (response?.status === 401) {
      throw new Error(`Status: ${response?.status}. Wrong login or password. Please check your data`)
    } else {
      throw new Error(`Status: ${response?.status}. Request error. Please, repeat after few minutes or contact the administrator`)
    }
  } catch (error) {
    yield put(loadLoginFailure(error as Error))
  }
}

export function* loginSaga(): SagaIterator {
  yield takeEvery(LoginActionTypes.LOAD_LOGIN_START, setTokenSaga)
}
