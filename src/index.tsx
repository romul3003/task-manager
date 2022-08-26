import ReactDOM from 'react-dom/client'
import { HistoryRouter as Router } from 'redux-first-history/rr6'
import { Provider } from 'react-redux'
import { CssBaseline, GlobalStyles } from '@mui/material'
import App from './App'

import { store, history } from './init/store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)
root.render(
  <CssBaseline>
    <GlobalStyles styles={{
      body: {
        backgroundColor: '#f8fafb',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      },
    }}
    />
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </CssBaseline>,
)
