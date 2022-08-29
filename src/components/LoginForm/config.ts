/* eslint-disable no-magic-numbers */
import * as Yup from 'yup'

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'Min length — ${min} characters'
// eslint-disable-next-line no-template-curly-in-string
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

export type LoginFormShape = {
  email: string;
  password: string;
}
