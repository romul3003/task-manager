import { SetNotification, UiActionTypes } from './types'

export const setNotification = (payload: {type: string; message: string;}): SetNotification => ({
  type: UiActionTypes.NOTIFICATION,
  payload,
})
