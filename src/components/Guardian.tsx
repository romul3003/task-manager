
import { FC, PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Stack, CircularProgress } from '@mui/material'
import { selectAuth } from '../redux/auth/selectors'
import { selectTask } from '../redux/tasks/selectors'
import { ROUTES } from '../routes/routes'

const Guardian: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated } = useSelector(selectAuth)
  const { tags } = useSelector(selectTask)

  if (!tags?.length) {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Stack>
    )
  }

  if (isAuthenticated) {
    return <>{children}</>
  }

  return (
    <Navigate
      to={ROUTES.LOGIN}
      replace
    />
  )
}

export default Guardian
