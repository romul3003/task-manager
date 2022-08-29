import { all, spawn } from 'redux-saga/effects'
import { authSaga } from '../redux/auth/saga'
import { loginSaga } from '../redux/login/saga'

export default function* rootSaga(): Generator {
  const sagas = [authSaga, loginSaga]

  yield all(sagas.map(s => spawn(s)))
}
