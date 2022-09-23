/* eslint-disable no-magic-numbers, no-template-curly-in-string */
import * as yup from 'yup'

const tooShortMessage = 'Min length of the ${path} — ${min}'
const tooLongMessage = 'Max length of the ${path} — ${max}'
const requiredMessage = 'Field ${path} is required'

export type TaskFormShape = {
  title: string;
  deadline: Date | undefined;
  tag: string;
  description: string;
}

export const taskSchema: yup.SchemaOf<TaskFormShape> = yup.object().shape({
  title: yup
    .string()
    .min(3, tooShortMessage)
    .max(64, tooLongMessage)
    .required(requiredMessage),
  tag: yup
    .string()
    .required(requiredMessage),
  deadline: yup
    .date()
    .required(requiredMessage),
  description: yup
    .string()
    .min(3, tooShortMessage)
    .max(250, tooLongMessage)
    .required(requiredMessage),
})
