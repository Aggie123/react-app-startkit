/*import React, { Component } from 'react';
import { Form, Button, Input, Icon } from 'antd';

export default class TodosForm extends Component {
	render(){
		let { data }
		return (
			<div>list
			</div>
		)
	}
}*/

import React, { PropTypes } from 'react'

const TodosList = ({ data }) => {

  return (
    <div>
    	{
    		data.map(item=>{
    			<p>{item.text}</p>
    		})
    	}
	</div>
  )
}

TodosList.propTypes = {
  //data: PropTypes.bool.isRequired,
}

export default TodosList