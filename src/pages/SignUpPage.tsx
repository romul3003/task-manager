import { Link } from '@mui/material'
import { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'

const SignUpPage: FC = () => (
  <>
    <h1>SignUp Page</h1>
    <span>Go to</span>
    {' '}
    <Link
      to="/login"
      underline="none"
      component={RouterLink}
    >
      login
    </Link>
  </>

)

export default SignUpPage
