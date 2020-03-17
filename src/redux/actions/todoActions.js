import {
  ADD_TASK,
  EDIT_TASK,
  DONE_UNDONE_TASK,
  DELETE_TASK,
  DELETE_ALL_DONE,
  LOAD_TASKS,
  DRAG_AND_DROP_TASK,
  ADD_TASK_IMAGE
} from './types';
import db from '../../db';
import arrayToObject from '../../utils/helpers';

export const loadTasks = () => async dispatch => {
  const tasksArray = await db.table('todoList').toArray();
  const tasksObject = arrayToObject(tasksArray);
  dispatch({
    type: LOAD_TASKS,
    payload: { tasks: tasksObject }
  });
};

export const addTask = () => async dispatch => {
  const newTask = { text: '', done: 'false' };
  const id = await db.table('todoList').add(newTask);
  dispatch({
    type: ADD_TASK,
    payload: { id, ...newTask }
  });
};

export const editTask = (id, newValue) => async dispatch => {
  const updatedTask = { text: newValue };
  await db.table('todoList').update(id, updatedTask);
  dispatch({
    type: EDIT_TASK,
    payload: { id, ...updatedTask }
  });
};

export const doneUndoneTask = (id, checkStatus) => async dispatch => {
  const updatedTask = { done: checkStatus };
  await db.table('todoList').update(id, updatedTask);
  dispatch({
    type: DONE_UNDONE_TASK,
    payload: { id, ...updatedTask }
  });
};

export const addTaskImage = (id, imageData) => async dispatch => {
  const updatedTask = { imageData };
  await db.table('todoList').update(id, updatedTask);
  dispatch({
    type: ADD_TASK_IMAGE,
    payload: { id, imageData }
  });
};

export const deleteTask = id => async dispatch => {
  await db.table('todoList').delete(id);
  dispatch({
    type: DELETE_TASK,
    payload: { id }
  });
};

export const deleteDoneTasks = () => async dispatch => {
  const leftTasks = await db.transaction('rw', 'todoList', async () => {
    await db
      .table('todoList')
      .where('done')
      .equals('true')
      .delete();
    const tasksArray = await db.table('todoList').toArray();
    const tasksObject = arrayToObject(tasksArray);
    return tasksObject;
  });
  dispatch({
    type: DELETE_ALL_DONE,
    payload: { leftTasks }
  });
};

export const dragAndDropTask = (taskData, dropTarget) => async dispatch => {
  if (
    (taskData.card === 'todoCard' && dropTarget === 'doneCard') ||
    (taskData.card === 'doneCard' && dropTarget === 'todoCard')
  ) {
    const updatedTask = {
      id: taskData.id,
      text: taskData.text,
      done: taskData.done === 'true' ? 'false' : 'true',
      imageData: taskData.imageData
    };
    await db.table('todoList').update(updatedTask.id, updatedTask);
    dispatch({
      type: DRAG_AND_DROP_TASK,
      payload: { updatedTask }
    });
  }
};
