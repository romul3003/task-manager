import { SagaIterator } from '@redux-saga/core'
import { all, spawn } from 'redux-saga/effects'

// eslint-disable-next-line require-yield
function* tempSaga(): SagaIterator {
  // eslint-disable-next-line no-console
  console.log('saga is ready')
}

export default function* rootSaga(): Generator {
  const sagas = [tempSaga]

  yield all(sagas.map(s => spawn(s)))
}
