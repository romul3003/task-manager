/* eslint-disable no-magic-numbers, no-template-curly-in-string */
import * as Yup from 'yup'

const tooShortMessage = 'Min length — ${min} characters'
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
