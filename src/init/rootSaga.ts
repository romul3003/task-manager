import { all, spawn } from 'redux-saga/effects'
import { AuthSaga } from '../redux/auth/saga'

export default function* rootSaga(): Generator {
  const sagas = [AuthSaga]

  yield all(sagas.map(s => spawn(s)))
}
