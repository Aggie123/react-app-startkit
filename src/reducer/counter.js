import { ADD, MINUS} from '../action/counter';

export default function counterApp (state= { number: 0 }, action){
  switch (action.type) {
    case ADD:
     return { number: action.number+1 };
    case MINUS:
      return { number: action.number-1 };
  	default:
      return state
  }
}
