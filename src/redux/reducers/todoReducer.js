import { ADD_NEW_TODO_TASK, EDIT_TASK } from '../actions/types';

const initialState = {
  todoTasks: {
    byId: {}
  }
};

const addNewTodoTask = state => {
  const newTask = {
    text: '',
    id: ''
  };
  return {
    ...state,
    todoTasks: {
      ...state.todoTasks,
      byId: {
        ...state.todoTasks.byId,
        [newTask.id]: newTask
      }
    }
  };
};

const editTask = (state, action) => ({
  ...state,
  todoTasks: {
    ...state.todoTasks,
    byId: {
      '': action.newText
    }
  }
});

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO_TASK:
      return addNewTodoTask(state);
    case EDIT_TASK:
      return editTask(state, action);
    default:
      return state;
  }
};

export default todoReducer;
