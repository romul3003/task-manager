/* eslint-disable no-magic-numbers */
import * as Yup from 'yup'

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'Min length — ${min} characters'
// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = 'Max length — ${max} characters'

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, tooShortMessage)
    .max(50, tooLongMessage)
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(8, tooShortMessage)
    .max(64, tooLongMessage)
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must be equal')
    .required('Required'),
})

export type SignUpFormShape = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
