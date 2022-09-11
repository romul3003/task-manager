import { FC } from 'react'
import { Box } from '@mui/material'
import TasksList from '../components/TasksList'
import TaskForm from '../components/TaskForm/TaskForm'

const TaskManagerPage: FC = () => (
  <Box sx={{ mb: '2rem' }}>
    <Box sx={{
      display: 'grid',
      gap: '1rem',
      gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))',
    }}
    >
      <TasksList />
      <TaskForm />
    </Box>
  </Box>
)

export default TaskManagerPage
