import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Layout from './components/Layout'
import { setToken, loadProfileAsync } from './redux/auth/actions'
import { selectAuth } from './redux/auth/selectors'
import { loadTagsAsync, loadTasksAsync } from './redux/tasks/actions'
import RoutesComponent from './routes'
import { ROUTES } from './routes/routes'
import { useNotify } from './hooks/useNotify'

const App: FC = () => {
  useNotify()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { profile, token } = useSelector(selectAuth)

  useEffect(() => {
    const savedToken = localStorage.getItem('jwt')

    if (savedToken) {
      dispatch(setToken(savedToken))
      dispatch(loadProfileAsync())
    }
  }, [dispatch])

  useEffect(() => {
    if (profile) {
      navigate(ROUTES.TASK_MANAGER)
    }
  }, [profile]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (token) {
      dispatch(loadTasksAsync())
      dispatch(loadTagsAsync())
    }
  }, [token, dispatch])

  return (
    <>
      <ToastContainer autoClose={2000} />
      <Layout>
        <RoutesComponent />
      </Layout>
    </>
  )
}

export default App
