import { AppState } from '../../init/rootReducer'
import { UiState } from './reducer'

export const selectUi = (state: AppState): UiState => state.ui
