import { Container } from '@mui/material'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout: FC = () => (
  <>
    <Header />
    <Container>
      <main>
        <Outlet />
      </main>
    </Container>
  </>
)

export default Layout
