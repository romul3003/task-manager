import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'

import { rootReducer } from './rootReducer'
import { middleware, sagaMiddleware } from './middleware'
import rootSaga from './rootSaga'
import { createReduxHistory } from './reduxHistoryContext'

// mount it on the Store
export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware),
  ),
)

// then run the saga
sagaMiddleware.run(rootSaga)

export const history = createReduxHistory(store)
