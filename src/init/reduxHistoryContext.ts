import { createReduxHistoryContext } from 'redux-first-history'
import { createBrowserHistory } from 'history'

const {
  createReduxHistory,
  routerMiddleware,
  routerReducer,
} = createReduxHistoryContext({
  history: createBrowserHistory(),
  // other options if needed
})

export {
  createReduxHistory,
  routerMiddleware,
  routerReducer,
}
