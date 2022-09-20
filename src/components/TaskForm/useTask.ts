import { FormikHelpers } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { createTaskAsync, updateTaskAsync } from '../../redux/tasks/actions'
import { selectTask } from '../../redux/tasks/selectors'
import { CreatedTask } from '../../redux/tasks/types'
import { FormStates } from '../../types'

export const useTask = () => {
  const dispatch = useDispatch()
  const { taskManagerState, currentTaskId } = useSelector(selectTask)

  const createTask = (task: CreatedTask, { resetForm }: FormikHelpers<CreatedTask>) => {
    if (taskManagerState === FormStates.CREATE) {
      dispatch(createTaskAsync(task))
    } else {
      throw new Error('Wrong status of operation. Is should be "create" operation')
    }

    resetForm()
  }

  const updateTask = (task: CreatedTask, { resetForm }: FormikHelpers<CreatedTask>) => {
    if (taskManagerState === FormStates.UPDATE) {
      dispatch(updateTaskAsync(currentTaskId as string, task))
    } else {
      throw new Error('Wrong status of operation. Is should be "update" operation')
    }

    resetForm()
  }

  return {
    createTask,
    updateTask,
  }
}
