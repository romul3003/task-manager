import { AppState } from '../../init/rootReducer'
import { AuthState } from './reducer'

export const selectAuth = (state: AppState): AuthState => state.auth
