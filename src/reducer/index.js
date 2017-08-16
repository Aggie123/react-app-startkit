import { combineReducers } from 'redux';

import todoApp from './todo';
import counterApp from './counter';
import todosApp from './todos';

const app = combineReducers({
  todoApp,
  counterApp,
  todosApp
})



export default app;