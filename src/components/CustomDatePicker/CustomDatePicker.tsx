import {
  FC, forwardRef, MouseEventHandler,
} from 'react'
import { Button, InputLabel } from '@mui/material'
import DatePicker from 'react-datepicker'
import { endOfDay } from 'date-fns'

import styles from './CustomDatePicker.module.css'

type DatePickerInput = {
  value?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>
}

type CustomDatePickerProps = {
  name: string;
  selected: Date | null | undefined;
  onChange: (date: Date | null) => void
}

const CustomDatePicker: FC<CustomDatePickerProps> = ({ name, selected, onChange }) => {
  // const [startDate, setStartDate] = useState< Date | null>(new Date())
  const today = endOfDay(new Date())

  // eslint-disable-next-line react/no-unstable-nested-components
  const CustomInput = forwardRef<HTMLButtonElement, DatePickerInput>((props, ref) => (
    <>
      <InputLabel htmlFor={name}>Deadline</InputLabel>
      <Button
        type="button"
        name={name}
        id={name}
        onClick={props.onClick}
        ref={ref}
        sx={{ margin: '0 0 .5rem' }}
        fullWidth
        color="info"
        variant="outlined"
        size="large"
      >
        {props.value}
      </Button>
    </>
  ))

  return (
    <DatePicker
      selected={selected || today}
      minDate={selected}
      onChange={date => onChange(date)}
      calendarClassName={styles.customDatePicker}
      popperClassName={styles.customPopper}
      dateFormat="dd MMM yyyy"
      customInput={<CustomInput />}
    />
  )
}

export default CustomDatePicker
