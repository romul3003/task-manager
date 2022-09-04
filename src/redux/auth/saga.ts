import { SagaIterator } from '@redux-saga/core'
import {
  call, takeEvery, put, apply, select,
} from 'redux-saga/effects'

import { selectAuth } from './selectors'
import {
  loadAuthFailure, loadAuthSuccess, fillProfile, loadProfile,
} from './actions'
import { api } from '../../api/api'
import {
  AuthActionTypes, FetchedError, LoadLoginStartAction, LoadSighUpStartAction, Profile,
} from './types'
import { AuthState } from './reducer'

function* loadProfileSaga(): SagaIterator {
  try {
    const { token }: AuthState = yield select(selectAuth)

    if (token) {
      const response = yield call(api.getProfile, token)

      if (response?.ok) {
        const profile: Profile = yield apply(response, response.json, [])

        yield put(fillProfile(profile))
      } else {
        const error: FetchedError = yield apply(response, response.json, [])
        throw new Error(`Status: ${error.statusCode}. Message: ${error.message}. Error: ${error.error}`)
      }
    }
  } catch (error) {
    yield put(loadAuthFailure(error as Error))
  }
}

function* setSighUpSaga({ payload }: LoadSighUpStartAction): SagaIterator {
  try {
    const response = yield call(api.signUp, payload)

    if (response?.ok) {
      const { data: token }: {data: string} = yield apply(response, response.json, [])

      yield put(loadAuthSuccess(token))
      localStorage.setItem('jwt', token)
      // yield call(fillProfileSaga)
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
      const { data: token }: {data: string} = yield apply(response, response.json, [])
      yield put(loadAuthSuccess(token))
      localStorage.setItem('jwt', token)
      // yield call(fillProfileSaga)
      yield put(loadProfile())
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
  yield takeEvery(AuthActionTypes.LOAD_PROFILE, loadProfileSaga)
  yield takeEvery(AuthActionTypes.LOAD_SIGH_UP_START, setSighUpSaga)
  yield takeEvery(AuthActionTypes.LOAD_LOGIN_START, setLoginSaga)
}
