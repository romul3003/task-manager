import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from './reduxHistoryContext'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware, routerMiddleware]

export { middleware, sagaMiddleware }
