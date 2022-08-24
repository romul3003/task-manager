import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, GlobalStyles } from '@mui/material'
import App from './App'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)
root.render(
  <CssBaseline>
    <GlobalStyles styles={{ body: { backgroundColor: '#f8fafb' } }} />
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </CssBaseline>,
)
