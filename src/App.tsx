import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import SignUpPage from './pages/SignUpPage'
import TaskManagerPage from './pages/TaskManagerPage'
import Layout from './components/Layout'
import AuthWrapper from './components/AuthWrapper'
import ProfilePage from './pages/ProfilePage'

const App: FC = () => {
  const isAuthenticated = false

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<AuthWrapper isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="login"
          element={<LoginPage />}
        />
        <Route
          path="signup"
          element={<SignUpPage />}
        />
        <Route
          path="task-manager"
          element={<TaskManagerPage />}
        />
        <Route
          path="profile"
          element={<ProfilePage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  )
}

export default App
