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
}
