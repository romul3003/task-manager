import { LoginCredentials, SignUpCredentials } from '../types'

export const auth = {
  signUp: (credentials: SignUpCredentials) => {
    const { confirmPassword, ...body } = credentials

    return fetch(`${process.env.REACT_APP_API_URL}/auth/registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(body),
    })
  },

  login: (credentials: LoginCredentials) => {
    const { email, password } = credentials

    return fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
      method: 'GET',
      headers: {
        authorization: `Basic ${btoa(`${email}:${password}`)}`,
      },
    })
  },

  fetchProfile: (token: string) => fetch(`${process.env.REACT_APP_API_URL}/auth/profile`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`,
    },
  }),
}
