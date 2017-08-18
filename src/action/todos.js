/*
*action type
*/

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';


/*
 * action 创建函数
 */

export function addTodo(text){
	return {
		type:ADD_TODO,
		text
	}
}

export function completeTodo(index){
	console.log('cc',index)
	return {
		type:COMPLETE_TODO,
		index
	}
}