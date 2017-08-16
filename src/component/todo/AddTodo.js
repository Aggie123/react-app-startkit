import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

class AddTodoForm extends Component {

  render(){
    let input,{ dispatch, onAddClick }=this.props;
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched, validateFields } = this.props.form;
    return (
      <Form 
        style={{display:'flex'}}
        onSubmit={e => {
          e.preventDefault();
          validateFields((err, values) => {
            if (!err) {
              onAddClick(values.todo)
            }else{
              console.log('err:',err);
            }
            
          });
      }}>
        <FormItem>
          {getFieldDecorator('todo', {
            rules: [{ required: true, message: 'Please input the todo item!' }],
          })(
            <Input 
              placeholder='Please input todo item'
              ref={node => {
                input = node
              }} 
            />
          )}
        </FormItem>

        <FormItem>
          <Button type="submit" htmlType="submit">
            Add Todo
          </Button>
        </FormItem>
        
      </Form>
    )
  }
}

const WrappedAddTodoForm = Form.create()(AddTodoForm);

const AddTodo = connect()(WrappedAddTodoForm)

export default AddTodo;


/*
<
*/