import { FC } from 'react'
import { useFormik } from 'formik'

import {
  Box, TextField, Typography, Link, Button,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { validationSchema } from './config'

const SignUpForm: FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('valuer >> ', JSON.stringify(values, null, 2))
    },
  })

  console.log('formik >> ', formik)

  const {
    values, errors, touched, handleSubmit, handleChange, handleBlur,
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
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        label="Name"
        margin="normal"
        fullWidth
        error={!!(errors.name && touched.name)}
        helperText={errors.name && touched.name && errors.name}
      />

      <TextField
        name="email"
        type="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        label="Email"
        margin="normal"
        fullWidth
        error={!!(errors.email && touched.email)}
        helperText={errors.email && touched.email && errors.email}
      />

      <TextField
        name="password"
        type="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        label="Password"
        margin="normal"
        fullWidth
        error={!!errors.password && touched.password}
        helperText={errors.password && touched.password && errors.password}
      />
      <TextField
        name="confirmPassword"
        type="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.confirmPassword}
        label="Confirm password"
        margin="normal"
        fullWidth
        error={!!errors.confirmPassword && touched.confirmPassword}
        helperText={errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
      />

      <Box sx={{ textAlign: 'center' }}>
        <Box sx={{ margin: '2rem 0' }}>
          <Button
            type="submit"
            variant="contained"
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
