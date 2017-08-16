import { ADD_TODO } from '../action/todos';

export default function todoApp (state = [], action){
	switch (action.type){
		case ADD_TODO:
			return [...state,{ text: action.text }];
		default:
			return state;
	}
}