import { FC, useEffect } from 'react'
import { useFormik } from 'formik'
import {
  Box, TextField, Typography, Link, Button,
} from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { validationSchema } from './config'

import { AppState } from '../../init/rootReducer'
import { AuthState } from '../../redux/auth/reducer'
import { loadLoginStart } from '../../redux/auth/actions'

const LoginForm: FC = () => {
  const { token } = useSelector<AppState, AuthState>(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate('/task-manager', { replace: true })
    }
  }, [navigate, token])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(loadLoginStart(values))
      // resetForm()
    },
  })

  const {
    errors, touched, handleSubmit, getFieldProps, isValid, dirty,
  } = formik

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        maxWidth: '35rem',
        borderRadius: '0.75rem',
        margin: '0 auto',
        padding: '2rem',
        backgroundColor: '#fff',
      }}
    >
      <Typography
        variant="h4"
        component="p"
        textAlign="center"
      >
        Sign in
      </Typography>

      <TextField
        type="email"
        label="Email"
        margin="normal"
        fullWidth
        error={!!(errors.email && touched.email)}
        helperText={errors.email && touched.email && errors.email}
        {...getFieldProps('email')}
      />

      <TextField
        type="password"
        label="Password"
        margin="normal"
        fullWidth
        error={!!(errors.password && touched.password)}
        helperText={errors.password && touched.password && errors.password}
        {...getFieldProps('password')}
      />

      <Box sx={{ textAlign: 'center' }}>
        <Box sx={{ margin: '2rem 0' }}>
          <Button
            type="submit"
            variant="contained"
            disabled={!dirty || !isValid}
            sx={{
              minWidth: {
                xs: '100%',
                md: '10rem',
              },
            }}
          >
            Login
          </Button>
        </Box>

        <span>If you don&apos;t have an account, you may</span>
        {' '}
        <Link
          to="/signup"
          underline="none"
          component={RouterLink}
        >
          sign up
        </Link>
      </Box>
    </Box>
  )
}

export default LoginForm
