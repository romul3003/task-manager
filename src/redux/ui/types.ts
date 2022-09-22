export enum UiActionTypes {
  NOTIFICATION = 'NOTIFICATION',
}

export type SetNotification = {
  type: UiActionTypes.NOTIFICATION;
  payload: {
    type: string;
    message: string;
  }
}

export type UiActions = SetNotification
