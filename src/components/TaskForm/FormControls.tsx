import { FC, MouseEvent, EventHandler } from 'react'
import { Button, Stack } from '@mui/material'

type FormControlsProps = {
  handleFormReset: EventHandler<MouseEvent>;
  dirty: boolean;
  isValid: boolean;
}

const FormControls: FC<FormControlsProps> = ({
  handleFormReset,
  dirty,
  isValid,
}) => (
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
      disabled={!dirty || !isValid}
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
