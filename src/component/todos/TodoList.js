import React, { PropTypes } from 'react'

const TodosList = ({ data }) => {
  	return (
	    <div>
	    	{
	    		data.map((item,index)=><p key={index}>{item.text}</p>)
	    	}
		</div>
	 )
}

TodosList.propTypes = {
  data: PropTypes.array.isRequired,
}

export default TodosList