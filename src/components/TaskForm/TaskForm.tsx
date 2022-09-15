import { FC, useCallback } from 'react'
import { useFormik } from 'formik'
// import DatePicker from 'react-datepicker'

import {
  Box, Button, TextField, Stack, Chip, IconButton,
} from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import DoneIcon from '@mui/icons-material/Done'
import { useSelector, useDispatch } from 'react-redux'
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker'
import { selectTask } from '../../redux/tasks/selectors'
import {
  createTaskAsync, deleteTaskAsync, setSelectedTagId, updateTaskAsync,
} from '../../redux/tasks/actions'

const TaskForm: FC = () => {
  const dispatch = useDispatch()
  const {
    tags, selectedTagId, currentTaskId, tasks,
  } = useSelector(selectTask)

  const {
    handleSubmit, getFieldProps, setFieldValue, resetForm,
  } = useFormik({
    initialValues: {
      completed: false,
      title: '',
      description: '',
      deadline: new Date(),
      tag: '',
    },
    onSubmit: (task) => {
      // console.log(JSON.stringify(task, null, 2))
      // console.log(task)
      dispatch(createTaskAsync(task))
    },
  })

  const handleTagClick = useCallback((tagId: string) => {
    dispatch(setSelectedTagId(tagId))
    setFieldValue('tag', tagId)
  }, [dispatch, setFieldValue])

  const completeTask = useCallback(() => {
    if (Array.isArray(tasks)) {
      const task = tasks.find(item => item.id === currentTaskId)

      if (currentTaskId && task) {
        dispatch(updateTaskAsync(currentTaskId, {
          completed: true,
          title: task.title,
          description: task.description,
          deadline: new Date(task.deadline),
          tag: task.tag.id,
        }))
      }
    }
  }, [currentTaskId, dispatch, tasks])

  const removeTask = useCallback(() => {
    if (currentTaskId) {
      dispatch(deleteTaskAsync(currentTaskId))
      resetForm()
    }
  }, [currentTaskId, dispatch, resetForm])

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
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          startIcon={<DoneIcon />}
          onClick={completeTask}
        >
          Complete
        </Button>
        <IconButton
          aria-label="delete"
          color="error"
          onClick={removeTask}
        >
          <ClearIcon />
        </IconButton>
      </Box>
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
          sx={{ mt: '1rem', gap: '.5rem', flexWrap: 'wrap' }}
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
