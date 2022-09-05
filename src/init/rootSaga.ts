import { all, spawn } from 'redux-saga/effects'
import { authSaga } from '../redux/auth/saga'
import { taskSaga } from '../redux/tasks/saga'

export default function* rootSaga(): Generator {
  const sagas = [authSaga, taskSaga]

  yield all(sagas.map(s => spawn(s)))
}
