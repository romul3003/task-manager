import { UiActions, UiActionTypes } from './types'

export type UiState = {
  notification: {
    type: string;
    message: string;
  } | null
}

const initialState: UiState = {
  notification: null,
}

export const uiReducer = (state = initialState, { type, payload }: UiActions): UiState => {
  switch (type) {
    case UiActionTypes.NOTIFICATION:
      return {
        ...state,
        notification: payload,
      }
    default:
      return state
  }
}
