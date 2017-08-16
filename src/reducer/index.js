import { combineReducers } from 'redux';

import todoApp from './todo';
import counterApp from './counter';

const app = combineReducers({
  todoApp,
  counterApp
})



export default app