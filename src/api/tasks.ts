import { CreatedTask } from '../redux/tasks/types'

export const tasks = {
  fetchTasks: () => {
    const localToken = localStorage.getItem('jwt')

    return fetch(`${process.env.REACT_APP_API_URL}/tasks`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localToken}`,
      },
    })
  },

  create: (newTask: CreatedTask) => {
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

  update: (id: string, newTask: CreatedTask) => {
    const localToken = localStorage.getItem('jwt')

    return fetch(`${process.env.REACT_APP_API_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localToken}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
  },

  delete: (taskId: string) => {
    const localToken = localStorage.getItem('jwt')

    return fetch(`${process.env.REACT_APP_API_URL}/tasks/${taskId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localToken}`,
      },
    })
  },

  fetchTags: () => {
    const localToken = localStorage.getItem('jwt')

    return fetch(`${process.env.REACT_APP_API_URL}/tags`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localToken}`,
      },
    })
  },
}
