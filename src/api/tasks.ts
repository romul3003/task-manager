import { CreatedTask } from '../redux/tasks/types'

export const tasks = {
  fetchTasks() {
    const savedToken = localStorage.getItem('jwt')

    return fetch(`${process.env.REACT_APP_API_URL}/tasks`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${savedToken}`,
      },
    })
  },

  createTask(newTask: CreatedTask) {
    const localToken = localStorage.getItem('jwt')

    return fetch(`${process.env.REACT_APP_API_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Bearer ${localToken}`,
      },
      body: JSON.stringify(newTask),
    })
  },

  fetchTags() {
    const savedToken = localStorage.getItem('jwt')

    return fetch(`${process.env.REACT_APP_API_URL}/tags`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${savedToken}`,
      },
    })
  },
}
