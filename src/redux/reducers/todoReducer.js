import { createSelector } from 'reselect';
import {
  ADD_NEW_TODO_TASK,
  EDIT_TASK,
  DONE_UNDONE_TASK,
  DELETE_TASK,
  DELETE_ALL_DONE
} from '../actions/types';

export const tasksSelector = doneStatus =>
  createSelector(
    state => {
      const allTasks = state.todoTasks.byId;
      return Object.keys(allTasks)
        .filter(key => allTasks[key].done === doneStatus)
        .reduce((obj, key) => {
          const tasks = obj;
          tasks[key] = allTasks[key];
          return tasks;
        }, {});
    },
    tasks => tasks
  );

const initialState = {
  todoTasks: {
    byId: {}
  }
};

const addNewTodoTask = (state, payload) => ({
  ...state,
  todoTasks: {
    ...state.todoTasks,
    byId: {
      ...state.todoTasks.byId,
      [payload.id]: payload
    }
  }
});

const editTask = (state, payload) => {
  const { id } = payload;
  return {
    ...state,
    todoTasks: {
      ...state.todoTasks,
      byId: {
        ...state.todoTasks.byId,
        [id]: {
          ...state.todoTasks.byId[id],
          text: payload.text
        }
      }
    }
  };
};

const doneTask = (state, payload) => {
  const { id } = payload;
  return {
    ...state,
    todoTasks: {
      ...state.todoTasks,
      byId: {
        ...state.todoTasks.byId,
        [id]: {
          ...state.todoTasks.byId[id],
          done: payload.done
        }
      }
    }
  };
};

const deleteTask = (state, payload) => {
  const { [payload.id]: deletedTask, ...rest } = state.todoTasks.byId;
  return {
    ...state,
    todoTasks: {
      ...state.todoTasks,
      byId: {
        ...rest
      }
    }
  };
};

const deleteAllDone = (state, payload) => ({
  ...state,
  todoTasks: {
    ...state.todoTasks,
    byId: payload.leftTasks
  }
});

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NEW_TODO_TASK:
      return addNewTodoTask(state, payload);
    case EDIT_TASK:
      return editTask(state, payload);
    case DONE_UNDONE_TASK:
      return doneTask(state, payload);
    case DELETE_TASK:
      return deleteTask(state, payload);
    case DELETE_ALL_DONE:
      return deleteAllDone(state, payload);
    default:
      return state;
  }
};

export default todoReducer;
