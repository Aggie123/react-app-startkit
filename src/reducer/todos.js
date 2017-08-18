import { ADD_TODO, COMPLETE_TODO } from '../action/todos';

export default function todoApp (state = [], action){
	switch (action.type){
		case ADD_TODO:
			return [...state,{ text: action.text,complete:false }];
		case COMPLETE_TODO:
			return [
				...state.slice(0,action.index-1),
				Object.assign({},state[action.index],{complete:true}),
				...state.slice(action.index+1)
			];
		default:
			return state;
	}
}