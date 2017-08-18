import React, { PropTypes } from 'react'

const TodosList = ({ data, onClickTodo }) => {
  	return (
	    <div>
	    	{
	    		data.map((item,index)=><p key={index} onClick={()=>onClickTodo(index)}>{item.text}</p>)
	    	}
		</div>
	 )
}

TodosList.propTypes = {
  data: PropTypes.array.isRequired,
}

export default TodosList