import { FC } from 'react'
import { Box } from '@mui/material'
import TasksList from '../components/TasksList'
import TaskForm from '../components/TaskForm/TaskForm'
import FormControls from '../components/FormControls'

const TaskManagerPage: FC = () => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    mb: '2rem',
  }}
  >
    <FormControls sx={{ ml: 'auto' }} />
    <Box sx={{
      display: 'grid',
      gap: '1rem',
      gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))',
    }}
    >
      <TasksList />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <TaskForm />
      </Box>
    </Box>
  </Box>
)

export default TaskManagerPage
