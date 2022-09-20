import {
  FC, useCallback, MouseEvent, useEffect,
} from 'react'
import { useFormik } from 'formik'
// import DatePicker from 'react-datepicker'

import {
  Box, Button, TextField, Stack, Chip, IconButton,
} from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import DoneIcon from '@mui/icons-material/Done'
import { useSelector, useDispatch } from 'react-redux'
import { endOfDay } from 'date-fns'
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker'
import { selectTask } from '../../redux/tasks/selectors'
import {
  deleteTaskAsync, setSelectedTagId, updateTaskAsync,
} from '../../redux/tasks/actions'
import { FormStates } from '../../types'
import { useTask } from './useTask'
import FormControls from './FormControls'

const TaskForm: FC = () => {
  const dispatch = useDispatch()
  const {
    tags, selectedTagId, currentTaskId, tasks, taskManagerState,
  } = useSelector(selectTask)

  const { createTask, updateTask } = useTask()

  const {
    handleSubmit, getFieldProps, setFieldValue, resetForm, values, initialValues,
  } = useFormik({
    initialValues: {
      completed: false,
      title: '',
      description: '',
      deadline: endOfDay(new Date()),
      tag: '',
    },
    enableReinitialize: !currentTaskId,
    onSubmit: taskManagerState === FormStates.UPDATE ? updateTask : createTask,
  })

  useEffect(() => {
    if (Array.isArray(tasks)) {
      if (currentTaskId && taskManagerState === FormStates.UPDATE) {
        const task = tasks.find(item => item.id === currentTaskId)

        setFieldValue('title', task?.title)
        setFieldValue('description', task?.description)
        setFieldValue('deadline', new Date(task?.deadline as string))
        setFieldValue('tag', task?.tag.id || selectedTagId)

        dispatch(setSelectedTagId(task?.tag.id as string))
      }
    }

    if (!currentTaskId && selectedTagId) {
      setFieldValue('tag', selectedTagId)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTaskId, taskManagerState])

  useEffect(() => {
    if (taskManagerState === FormStates.CREATE) {
      resetForm({
        values: {
          ...initialValues,
          tag: selectedTagId as string,
        },
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskManagerState])

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

  const handleFormReset = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    if (Array.isArray(tasks)) {
      const task = tasks.find(item => item.id === currentTaskId)

      if (task) {
        const { title, description, deadline } = task
        resetForm({
          values: {
            ...values,
            title,
            description,
            deadline: new Date(deadline),
          },
        })
      } else {
        resetForm()
      }
    }
  }, [currentTaskId, resetForm, tasks, values])

  const isFormVisible = taskManagerState === FormStates.CREATE || taskManagerState === FormStates.UPDATE

  if (!isFormVisible) {
    return null
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
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          startIcon={<DoneIcon />}
          onClick={completeTask}
          disabled={taskManagerState === FormStates.CREATE}
        >
          Complete
        </Button>
        {taskManagerState === FormStates.UPDATE && (
          <IconButton
            aria-label="delete"
            color="error"
            onClick={removeTask}
          >
            <ClearIcon />
          </IconButton>
        )}
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
          sx={{
            mt: '1rem',
            gap: '.5rem',
            flexWrap: 'wrap',
          }}
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

      <FormControls handleFormReset={handleFormReset} />
    </Box>
  )
}
export default TaskForm
