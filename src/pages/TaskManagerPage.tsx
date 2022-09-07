import { FC } from 'react'
import { Box } from '@mui/material'
import TasksList from '../components/TasksList'

const TaskManagerPage: FC = () => (
  <Box mb="2rem">
    <TasksList />
  </Box>
)

export default TaskManagerPage
