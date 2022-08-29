import { SignUpCredentials, LoginCredentials } from '../redux/auth/types'

export const api = {
  async signUp(credentials: SignUpCredentials) {
    const { confirmPassword, ...body } = credentials

    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(body),
    })

    return response
  },

  async login(credentials: LoginCredentials) {
    const { email, password } = credentials

    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Basic ${btoa(`${email}:${password}`)}`,
      },
    })

    return response
  },
}
