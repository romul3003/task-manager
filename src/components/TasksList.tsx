import { FC } from 'react'
import {
  CircularProgress, Box, List, ListItemButton, Chip, Typography, Divider,
} from '@mui/material'
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded'
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded'
import { useSelector } from 'react-redux'
import { selectTask } from '../redux/tasks/selectors'

const TasksList: FC = () => {
  const { isLoading, tasks } = useSelector(selectTask)

  if (isLoading) {
    return <CircularProgress />
  }

  return (
    <Box sx={{
      borderRadius: '0.75rem',
      padding: '2rem',
      backgroundColor: '#fff',
    }}
    >
      {
        !tasks?.length
          ? <Typography variant="h4">There&apos;re no tasks yet</Typography>
          : (
            <List>
              {tasks?.map(task => (
                <li key={task.id}>
                  <ListItemButton sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
                    gap: '1rem',
                  }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                      {task.completed ? <CheckBoxRoundedIcon color="primary" /> : <CheckBoxOutlineBlankRoundedIcon />}
                      <Typography
                        paragraph
                        m={0}
                      >
                        {task.title}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: { md: 'end' },
                        alignItems: 'center',
                        columnGap: '.5rem',
                        margin: '0',
                        pl: { xs: '0.75rem', md: '0' },
                      }}
                    >
                      <span>{new Intl.DateTimeFormat('uk-UA').format(new Date(task.deadline))}</span>
                      <Chip
                        label={task.tag.name}
                        sx={{ backgroundColor: task.tag.bg, color: task.tag.color }}
                      />
                    </Box>
                  </ListItemButton>
                  <Divider />
                </li>
              ))}
            </List>
          )
      }
    </Box>
  )
}

export default TasksList
