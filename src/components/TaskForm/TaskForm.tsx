import { FC } from 'react'
import { useFormik } from 'formik'
// import DatePicker from 'react-datepicker'

import {
  Box, Button, TextField, Stack, Chip,
} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker'
import { selectTask } from '../../redux/tasks/selectors'
import { createTaskAsync, setSelectedTagId } from '../../redux/tasks/actions'
// import { useDispatch } from 'react-redux'

const TaskForm: FC = () => {
  const dispatch = useDispatch()
  const { tags, selectedTagId } = useSelector(selectTask)

  const { handleSubmit, getFieldProps, setFieldValue } = useFormik({
    initialValues: {
      completed: false,
      title: '',
      description: '',
      deadline: new Date(),
      tag: '',
    },
    onSubmit: (task) => {
      dispatch(createTaskAsync(task))
    },
  })

  const handleTagClick = (tagId: string) => {
    dispatch(setSelectedTagId(tagId))
    setFieldValue('tag', tagId)
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: '0.75rem',
        padding: '2rem',
        backgroundColor: '#fff',
      }}
    >
      <TextField
        label="Title"
        fullWidth
        placeholder="To finish the project"
        sx={{ mb: '1rem' }}
        // error={!!(errors.name && touched.name)}
        // helperText={errors.name && touched.name && errors.name}
        {...getFieldProps('title')}
      />
      {/* <DatePicker
        name="date"
        selected={getFieldProps('date').value}
        onChange={(date: Date) => {
          console.log('date >> ', date)

          setFieldValue('date', date)
        }}
      /> */}
      <CustomDatePicker
        name="deadline"
        selected={getFieldProps('deadline').value}
        onChange={(date: Date | null) => {
          setFieldValue('deadline', date)
        }}
      />
      <TextField
        label="Description"
        margin="normal"
        multiple
        fullWidth
        placeholder="To study new technologies and finish the project, "
        // error={!!(errors.name && touched.name)}
        // helperText={errors.name && touched.name && errors.name}
        {...getFieldProps('description')}
      />
      {tags?.length && (
        <Stack
          direction="row"
          sx={{ mt: '1rem' }}
        >
          {tags.map(tag => (
            <Chip
              key={tag.id}
              label={tag.name}
              onClick={() => handleTagClick(tag.id)}
              sx={{
                backgroundColor: tag.bg,
                color: tag.color,
                // eslint-disable-next-line no-magic-numbers
                boxShadow: tag.id === selectedTagId ? 3 : 0,
              }}
            />
          ))}
        </Stack>
      )}

      <Stack
        direction={{ sm: 'row' }}
        sx={{
          flexWrap: 'wrap', gap: '1rem', mt: '1.5rem',
        }}
      >
        <Button
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

    </Box>
  )
}
export default TaskForm
