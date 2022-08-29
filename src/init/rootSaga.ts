import { all, spawn } from 'redux-saga/effects'
import { authSaga } from '../redux/auth/saga'

export default function* rootSaga(): Generator {
  const sagas = [authSaga]

  yield all(sagas.map(s => spawn(s)))
}
