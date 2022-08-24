import {
  FC, useState, MouseEvent,
} from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import AddTaskIcon from '@mui/icons-material/AddTask'; import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'

const links = [
  {
    to: 'login',
    label: 'Login',
  },
  {
    to: 'signup',
    label: 'Sign up',
  },
  {
    to: 'task-manager',
    label: 'Task manager',
  },
  {
    to: 'profile',
    label: 'Profile',
  },
]

const setButtonActiveStyles = (Elem: FC) => styled(props => (
  <Elem {...props} />
))`
  &.active {
    text-decoration: underline;
  }
`

const StyledButton = setButtonActiveStyles(Button)
const StyledMenuItem = setButtonActiveStyles(MenuItem)

const Header: FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AddTaskIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Task Manager
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {links.map(link => (
                <StyledMenuItem
                  key={link.label}
                  to={link.to}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                >
                  <Typography textAlign="center">{link.label}</Typography>
                </StyledMenuItem>
              ))}
            </Menu>
          </Box>
          <AddTaskIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.13rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Task Manager
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {links.map(link => (
              <StyledButton
                key={link.label}
                to={link.to}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={RouterLink}
              >
                {link.label}
              </StyledButton>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
