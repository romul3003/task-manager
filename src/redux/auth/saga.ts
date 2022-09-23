import { SagaIterator } from '@redux-saga/core'
import {
  call, takeEvery, put, apply, select,
} from 'redux-saga/effects'
import { setNotification } from '../ui/actions'

import { selectAuth } from './selectors'
import {
  loadAuthFailure, setToken, fillProfile,
} from './actions'
import { api } from '../../api'
import {
  AuthActionTypes, LoginAction, SignUpAction,
} from './types'
import { AuthState } from './reducer'
import { FetchedError, Profile, ToastTypes } from '../../types'

function* loadProfileAsyncSaga(): SagaIterator {
  try {
    const { token }: AuthState = yield select(selectAuth)

    if (token) {
      const response = yield call(api.auth.fetchProfile, token)

      if (response?.ok) {
        const profile: Profile = yield apply(response, response.json, [])
        yield put(fillProfile(profile))
      } else {
        const error: FetchedError = yield apply(response, response.json, [])
        yield put(setNotification({
          type: ToastTypes.ERROR,
          message: error.message,
        }))
        throw new Error(`Status: ${error.statusCode}. Message: ${error.message}. Error: ${error.error}`)
      }
    }
  } catch (error) {
    yield put(loadAuthFailure(error as Error))
  }
}

function* setSighUpSaga({ payload }: SignUpAction): SagaIterator {
  try {
    const response = yield call(api.auth.signUp, payload)

    if (response?.ok) {
      const { data: token }: {data: string} = yield apply(response, response.json, [])

      yield put(setToken(token))
      localStorage.setItem('jwt', token)

      yield call(loadProfileAsyncSaga)
      const { profile } = yield select(selectAuth)

      yield put(setNotification({
        type: ToastTypes.SUCCESS,
        message: `Welcome, ${profile.name}`,
      }))
    } else {
      const error: FetchedError = yield apply(response, response.json, [])
      yield put(setNotification({
        type: ToastTypes.ERROR,
        message: error.message,
      }))
      throw new Error(`Status: ${response?.status}. Request error. ${error.message}. Please, repeat after few minutes or contact the administrator`)
    }
  } catch (error) {
    yield put(loadAuthFailure(error as Error))
  }
}

function* setLoginSaga({ payload }: LoginAction): SagaIterator {
  try {
    const response = yield call(api.auth.login, payload)

    if (response?.ok) {
      const { data: token }: {data: string} = yield apply(response, response.json, [])
      yield put(setToken(token))
      localStorage.setItem('jwt', token)

      yield call(loadProfileAsyncSaga)
      const { profile } = yield select(selectAuth)

      yield put(setNotification({
        type: ToastTypes.SUCCESS,
        message: `Welcome, ${profile.name}`,
      }))

    // eslint-disable-next-line no-magic-numbers
    } else if (response?.status === 401) {
      const error: FetchedError = yield apply(response, response.json, [])
      yield put(setNotification({
        type: ToastTypes.ERROR,
        message: error.message,
      }))
      throw new Error(`Status: ${response?.status}. ${error.message}. Please check your data`)
    } else {
      const error: FetchedError = yield apply(response, response.json, [])
      yield put(setNotification({
        type: ToastTypes.ERROR,
        message: error.message,
      }))
      throw new Error(`Status: ${response?.status}. ${error.message}. Please, repeat after few minutes or contact the administrator`)
    }
  } catch (error) {
    yield put(loadAuthFailure(error as Error))
  }
}

export function* authSaga(): SagaIterator {
  yield takeEvery(AuthActionTypes.LOAD_PROFILE_ASYNC, loadProfileAsyncSaga)
  yield takeEvery(AuthActionTypes.SIGH_UP, setSighUpSaga)
  yield takeEvery(AuthActionTypes.LOGIN, setLoginSaga)
}
