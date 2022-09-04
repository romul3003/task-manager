/* eslint-disable no-magic-numbers, no-template-curly-in-string */
import * as Yup from 'yup'

const tooShortMessage = 'Min length — ${min} characters'
const tooLongMessage = 'Max length — ${max} characters'

export const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(8, tooShortMessage)
    .max(64, tooLongMessage)
    .required('Required'),
})
