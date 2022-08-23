import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import SignUpPage from './pages/SignUpPage'
import TaskManagerPage from './pages/TaskManagerPage'
import AuthWrapper from './components/AuthWrapper'
import ResponsiveAppBar from './components/AppBar'

const App: FC = () => {
  const isAuthenticated = false

  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <Routes>
          <Route
            path="/"
            element={<AuthWrapper isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="/signup"
            element={<SignUpPage />}
          />
          <Route
            path="/task-manager"
            element={<TaskManagerPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </Container>
    </>
  )
}

export default App
