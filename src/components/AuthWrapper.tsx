import { FC } from 'react'
import { Navigate } from 'react-router-dom'

type AuthWrapperType = {
  isAuthenticated: boolean;
}

const AuthWrapper: FC<AuthWrapperType> = ({ isAuthenticated }) => (isAuthenticated ? (
  <Navigate
    to="/task-manager"
    replace
  />
) : (
  <Navigate
    to="/login"
    replace
  />
))

export default AuthWrapper
