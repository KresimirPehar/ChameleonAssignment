import { ADD_NEW_TODO_TASK, EDIT_TASK, DONE_TASK } from '../actions/types';

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

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NEW_TODO_TASK:
      return addNewTodoTask(state, payload);
    case EDIT_TASK:
      return editTask(state, payload);
    case DONE_TASK:
      return doneTask(state, payload);
    default:
      return state;
  }
};

export default todoReducer;
