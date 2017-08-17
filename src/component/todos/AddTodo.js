import React, { Component } from 'react';
import { Form, Button, Input, Icon } from 'antd';
import { connect } from 'react-redux';
const FormItem = Form.Item;

class TodosForm extends Component {

	handleSubmit=(e)=>{
		e.preventDefault();
		let { onClickAdd }=this.props;
	    this.props.form.validateFields((err, values) => {
	      if (!err) {
	        console.log('Received values of form: ', values);
	        onClickAdd(values.todoItem);
	      }
    	});		
	}

	render (){
		let { onClickAdd, form }=this.props;
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched, dispatch  } = form;
		return (
			<Form  onSubmit={this.handleSubmit} style={{display:'flex'}}>
				<FormItem
		        >
		          {getFieldDecorator('todoItem', {
		            rules: [{ required: true, message: 'Please input your todoItem!' }],
		          })(
		            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="todoItem" />
		          )}
		        </FormItem>

		        <FormItem>
		          <Button
		            type="primary"
		            htmlType="submit"
		          >
		            添加
		          </Button>
		        </FormItem>
			</Form>
		)
	}
}

const wrappedTodosForm=Form.create()(TodosForm);

export default connect(state=>state)(wrappedTodosForm);