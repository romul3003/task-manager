
import { FC, PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'
import { selectAuth } from '../redux/auth/selectors'
import { ROUTES } from '../routes/routes'

const RequireAuth: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation()
  const { isAuthenticated } = useSelector(selectAuth)

  if (isAuthenticated) {
    return <>{children}</>
  }

  return (
    <Navigate
      to={ROUTES.LOGIN}
      state={{ from: location }}
    />
  )
}

export default RequireAuth
