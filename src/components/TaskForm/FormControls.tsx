import { FC, MouseEvent } from 'react'
import { Button, Stack } from '@mui/material'

const FormControls: FC<{handleFormReset: (event: MouseEvent<HTMLButtonElement>) => void}> = ({ handleFormReset }) => (
  <Stack
    direction={{ sm: 'row' }}
    sx={{
      flexWrap: 'wrap',
      gap: '1rem',
      mt: '1.5rem',
    }}
  >
    <Button
      type="reset"
      onClick={handleFormReset}
      sx={{
        minWidth: {
          sm: '10rem',
        },
      }}
      variant="contained"
      color="error"
    >
      Reset
    </Button>
    <Button
      type="submit"
      sx={{
        minWidth: {
          sm: '10rem',
        },
      }}
      variant="contained"
    >
      Save
    </Button>
  </Stack>
)

export default FormControls
