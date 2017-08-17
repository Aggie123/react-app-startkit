import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import AddTodo from '../../component/todos/AddTodo';
import TodoList from '../../component/todos/TodoList';
import { addTodo } from '../../action/todos';

class Todos extends Component {

	render (){
		console.log('rr',this.props)
		let { dispatch, todosApp } =this.props;
		return (
			<div>
				<AddTodo onClickAdd={(text)=>dispatch(addTodo(text))}/>
				<TodoList data={todosApp}/>
			</div>
		)
	}
}

export default connect(state=>state)(Todos);