import { ADD_NEW_TODO_TASK } from '../actions/types';

const initialState = {
  todoTasks: {
    byId: {}
  }
};

const addNewTodoTask = state => {
  const newTask = {
    text: ''
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

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO_TASK:
      return addNewTodoTask(state);

    default:
      return state;
  }
};

export default todoReducer;
