import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { selectAuth } from '../redux/auth/selectors'

const ProfilePage: FC = () => {
  const { profile } = useSelector(selectAuth)

  if (!profile) {
    return (
      <Typography
        variant="h3"
        component="h1"
      >
        No profile
      </Typography>
    )
  }

  return (
    <Box>
      <Typography
        variant="h3"
        component="h1"
      >
        Name:
        {' '}
        {profile.name}
      </Typography>
      <Typography variant="subtitle1">
        email:
        {' '}
        {profile.email}
      </Typography>
    </Box>
  )
}

export default ProfilePage
