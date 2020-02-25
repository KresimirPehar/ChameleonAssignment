import {
  ADD_TASK,
  EDIT_TASK,
  DONE_UNDONE_TASK,
  DELETE_TASK,
  DELETE_ALL_DONE,
  LOAD_TASKS
} from './types';
import db from '../../db';

export const loadTasks = () => async dispatch => {
  const tasksArray = await db.table('todoList').toArray();
  const tasksObject = Object.keys(tasksArray).reduce((obj, key) => {
    const tasks = obj;
    tasks[tasksArray[key].id] = tasksArray[key];
    return tasks;
  }, {});
  dispatch({
    type: LOAD_TASKS,
    payload: { tasks: tasksObject }
  });
};

export const addTask = () => dispatch => {
  const newTask = { text: '', done: 'false' };
  db.table('todoList')
    .add(newTask)
    .then(id =>
      dispatch({
        type: ADD_TASK,
        payload: { id, ...newTask }
      })
    );
};

export const editTask = (id, newValue) => dispatch => {
  const updatedTask = { text: newValue };
  db.table('todoList')
    .update(id, updatedTask)
    .then(() =>
      dispatch({
        type: EDIT_TASK,
        payload: { id, ...updatedTask }
      })
    );
};

export const doneUndoneTask = (id, checkStatus) => dispatch => {
  const updatedTask = { done: checkStatus };
  db.table('todoList')
    .update(id, updatedTask)
    .then(() =>
      dispatch({
        type: DONE_UNDONE_TASK,
        payload: { id, ...updatedTask }
      })
    );
};

export const deleteTask = id => dispatch => {
  db.table('todoList')
    .delete(id)
    .then(() =>
      dispatch({
        type: DELETE_TASK,
        payload: { id }
      })
    );
};

export const deleteDoneTasks = () => async dispatch => {
  const leftTasks = await db.transaction('rw', 'todoList', async () => {
    await db
      .table('todoList')
      .where('done')
      .equals('true')
      .delete();
    const tasksArray = await db.table('todoList').toArray();
    const tasksObject = Object.keys(tasksArray).reduce((obj, key) => {
      const tasks = obj;
      tasks[tasksArray[key].id] = tasksArray[key];
      return tasks;
    }, {});
    return tasksObject;
  });
  dispatch({
    type: DELETE_ALL_DONE,
    payload: { leftTasks }
  });
};
