import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Layout from './components/Layout'
import { setToken, loadProfile } from './redux/auth/actions'
import { selectAuth } from './redux/auth/selectors'
import { loadTags, loadTasks } from './redux/tasks/actions'
import RoutesComponent from './routes'
import { ROUTES } from './routes/routes'

const App: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { profile, token } = useSelector(selectAuth)

  useEffect(() => {
    const savedToken = localStorage.getItem('jwt')

    if (savedToken) {
      dispatch(setToken(savedToken))
      dispatch(loadProfile())
    }
  }, [dispatch])

  useEffect(() => {
    if (profile) {
      navigate(ROUTES.TASK_MANAGER)
    }
  }, [profile]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (token) {
      dispatch(loadTasks())
      dispatch(loadTags())
    }
  }, [token, dispatch])

  return (
    <Layout>
      <RoutesComponent />
    </Layout>
  )
}

export default App
