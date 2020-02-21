import { ADD_NEW_TODO_TASK, EDIT_TASK } from '../actions/types';

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

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NEW_TODO_TASK:
      return addNewTodoTask(state, payload);
    case EDIT_TASK:
      return editTask(state, payload);
    default:
      return state;
  }
};

export default todoReducer;
