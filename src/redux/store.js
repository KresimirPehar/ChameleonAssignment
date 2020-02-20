import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoReducer from './reducers/todoReducer';

const configureStore = () =>
  createStore(todoReducer, composeWithDevTools(applyMiddleware(thunk)));

export default configureStore;
