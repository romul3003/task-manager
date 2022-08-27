import { SagaIterator } from '@redux-saga/core'
import { call, takeEvery, put } from 'redux-saga/effects'
import { setError, setToken } from './actions'
import { api } from '../../api/api'
import { AuthActionTypes, FetchCredentials } from './types'

function* setTokenSaga({ payload }: FetchCredentials): SagaIterator {
  try {
    const { data: token }: { data?: string } = yield call(api.signUp, payload)
    if (token) {
      yield put(setToken(token))
      localStorage.setItem('jwt', token)
    }
  } catch (error) {
    yield put(setError(error as Error))
  }
}

export function* AuthSaga(): SagaIterator {
  yield takeEvery(AuthActionTypes.FETCH_CREDENTIALS, setTokenSaga)
}
