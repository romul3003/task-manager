import { AuthCredentials } from '../redux/auth/types'

export const api = {
  async signUp(credentials: AuthCredentials) {
    const { confirmPassword, ...body } = credentials

    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(body),
    })

    return response.json()
  },
}
