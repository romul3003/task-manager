import { Login, SignUp } from '../types'

export const api = {
  signUp(credentials: SignUp) {
    const { confirmPassword, ...body } = credentials

    return fetch(`${process.env.REACT_APP_API_URL}/auth/registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(body),
    })
  },

  login(credentials: Login) {
    const { email, password } = credentials

    return fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
      method: 'GET',
      headers: {
        authorization: `Basic ${btoa(`${email}:${password}`)}`,
      },
    })
  },

  getProfile(token: string) {
    return fetch(`${process.env.REACT_APP_API_URL}/auth/profile`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
  },
}
