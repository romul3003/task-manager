import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import SignUpPage from '../pages/SignUpPage'
import TaskManagerPage from '../pages/TaskManagerPage'
import ProfilePage from '../pages/ProfilePage'
import { ROUTES } from './routes'
import RequireAuth from '../components/RequireAuth'

const RoutesComponent: FC = () => (
  <Routes>
    <Route
      path={ROUTES.ROOT}
      element={(
        <Navigate
          to={ROUTES.LOGIN}
          replace
        />
      )}
    />
    <Route
      path={ROUTES.TASK_MANAGER}
      element={(
        <RequireAuth>
          <TaskManagerPage />
        </RequireAuth>
      )}
    />
    <Route
      path={ROUTES.PROFILE}
      element={(
        <RequireAuth>
          <ProfilePage />
        </RequireAuth>
      )}
    />
    <Route
      path={ROUTES.LOGIN}
      element={<LoginPage />}
    />
    <Route
      path={ROUTES.SIGN_UP}
      element={<SignUpPage />}
    />
    <Route
      path="*"
      element={<NotFoundPage />}
    />
  </Routes>
)

export default RoutesComponent
