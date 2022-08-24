import { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@mui/material'

const LoginPage: FC = () => (
  <>
    <h1>Login Page</h1>
    <span>If you don&apos;t have an account, you may</span>
    {' '}
    <Link
      to="/signup"
      underline="none"
      component={RouterLink}
    >
      register
    </Link>
  </>
)

export default LoginPage
