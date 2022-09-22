export type SignUpCredentials = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type LoginCredentials = {
  email: string;
  password: string;
}

export type Profile = {
  id: string;
  name: string;
  email: string;
  created: string;
}

export type FetchedError = {
  statusCode: number;
  message: string;
  error: string;
}

export type AuthCredentials = LoginCredentials | SignUpCredentials

export type NavigationLink = {
  to: string,
  label: string,
  shouldBeAuthenticated: boolean,
}

export type Tag = {
  id: string;
  name: string;
  color: string;
  bg: string;
}

export type Task = {
id: string;
completed: boolean;
title: string;
description: string;
deadline: string;
tag: Tag;
}

export type CreatedTask = Pick<Task, 'completed' | 'title' | 'description'> & {
deadline: Date;
tag: string;
}

export enum FormStates {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  CLOSED = 'CLOSED',
}
