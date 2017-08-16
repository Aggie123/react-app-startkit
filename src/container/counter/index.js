import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import { addNumber, minusNumber } from '../../action/counter';

class Counter extends Component {
	render(){
		let { counterApp, dispatch } = this.props;
		console.log('counter',this.props)
		return (
			<div>
				<Button onClick={()=>dispatch(minusNumber(counterApp.number))}>-</Button>
				<span style={{padding:'0 10px'}}>{counterApp.number}</span>
				<Button onClick={()=>dispatch(addNumber(counterApp.number))}>+</Button>
			</div>

			)
	}
}

export default connect((state)=>state)(Counter);