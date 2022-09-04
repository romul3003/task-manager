import { FC, PropsWithChildren } from 'react'
import { Container } from '@mui/material'
import Header from './Header'

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <Container sx={{ marginTop: '4rem' }}>
      <main>
        {children}
      </main>
    </Container>
  </>
)

export default Layout
