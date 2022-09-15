import { FC } from 'react'
import { Button, SxProps, Theme } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const FormControls: FC<{sx?: SxProps<Theme>}> = ({ sx }) => (
  <Button
    startIcon={<AddIcon />}
    variant="text"
    sx={sx}
  >
    New Task
  </Button>
)

export default FormControls
