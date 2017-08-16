import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import App from './App';
import Home from './container/Home';
import TodoIndex from './container/todo';
import OrderNew from './container/order/New';
import OrderList from './container/order/List';
import './index.css';
import appReducer from './reducer';

let store = createStore(appReducer)
// console.log('ss',store,store.getState())
render(
  <Provider store={store}>
    <Router>   	
          <App>
          	<Route exact path="/" component={Home} />
  	        <Route path="/order-new" component={OrderNew}/>
          	<Route path="/order-list" component={OrderList}/>
            <Route path="/todo" component={TodoIndex}/>
          </App>
      </Router>
    </Provider>,
  document.getElementById('root')
);
