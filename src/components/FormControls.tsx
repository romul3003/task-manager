import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Button, SxProps, Theme } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { setTaskManagerState } from '../redux/tasks/actions'
import { FormStates } from '../types'

const FormControls: FC<{sx?: SxProps<Theme>}> = ({ sx }) => {
  const dispatch = useDispatch()

  const setCreateTaskFormState = () => {
    dispatch(setTaskManagerState(FormStates.CREATE))
  }

  return (
    <Button
      startIcon={<AddIcon />}
      variant="text"
      sx={sx}
      onClick={setCreateTaskFormState}
    >
      New Task
    </Button>
  )
}

export default FormControls
