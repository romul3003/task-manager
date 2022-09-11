export type SignUpCredentials = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type LoginCredentials = {
  email: string;
  password: string;
}

export type Profile = {
  id: string;
  name: string;
  email: string;
  created: string;
}

export type FetchedError = {
  statusCode: number;
  message: string;
  error: string;
}

export type AuthCredentials = LoginCredentials | SignUpCredentials

export type NavigationLink = {
  to: string,
  label: string,
  shouldBeAuthenticated: boolean,
}
