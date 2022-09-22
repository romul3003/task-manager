import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { selectUi } from '../redux/ui/selectors'
import { ToastTypes } from '../types'

export const useNotify = () => {
  const { notification } = useSelector(selectUi)

  useEffect(() => {
    if (notification) {
      const { type, message } = notification

      if (type === ToastTypes.SUCCESS) {
        toast.success(message, { theme: 'colored' })
      } else if (type === ToastTypes.ERROR) {
        toast.error(message, { theme: 'colored' })
      } else if (type === ToastTypes.INFO) {
        toast.info(message, { theme: 'colored' })
      }
    }
  }, [notification])
}
