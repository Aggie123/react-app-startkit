import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import App from './App';
import Home from './container/Home';
import OrderNew from './container/order/New';
import OrderList from './container/order/List';
import './index.css';

render(
  <Router>   	
        <App>
        	<Route exact path="/" component={Home} />
	        <Route path="/order-new" component={OrderNew}/>
        	<Route path="/order-list" component={OrderList}/>
        </App>
    </Router>,
  document.getElementById('root')
);
