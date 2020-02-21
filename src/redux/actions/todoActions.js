import { ADD_NEW_TODO_TASK, EDIT_TASK } from './types';

export const addNewTodoTask = () => ({
  type: ADD_NEW_TODO_TASK
});

export const editTask = newText => ({
  type: EDIT_TASK,
  newText
});
