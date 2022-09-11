import { FC } from 'react'
import { useFormik } from 'formik'
import {
  Box, TextField, Typography, Link, Button,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { validationSchema } from './config'
import { signUp } from '../../redux/auth/actions'

const SignUpForm: FC = () => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(signUp(values))
      resetForm()
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
        Registration
      </Typography>

      <TextField
        label="Name"
        margin="normal"
        fullWidth
        error={!!(errors.name && touched.name)}
        helperText={errors.name && touched.name && errors.name}
        {...getFieldProps('name')}
      />

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

      <TextField
        type="password"
        label="Confirm password"
        margin="normal"
        fullWidth
        error={!!errors.confirmPassword && touched.confirmPassword}
        helperText={errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
        {...getFieldProps('confirmPassword')}
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
            Submit
          </Button>
        </Box>

        <span>Go to</span>
        {' '}
        <Link
          to="/login"
          underline="none"
          component={RouterLink}
        >
          login
        </Link>
      </Box>
    </Box>
  )
}

export default SignUpForm
