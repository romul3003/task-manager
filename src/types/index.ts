export type SignUp = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type Login = {
  email: string;
  password: string;
}

export type NavigationLink = {
  to: string,
  label: string,
  shouldBeAuthenticated: boolean,
}
