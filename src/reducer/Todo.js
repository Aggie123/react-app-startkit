import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../action/Todo';
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
    console.log('add todo reducer')
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case COMPLETE_TODO:
    console.log('cc',state,action)
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

/*const counter(state= { number: 0}, action){
  swith(action.type){
    case ADD:
     return { number: action.number+1 };
    case MINUS:
      return { number: action.number-1 };
  }
}*/

const todoApp = combineReducers({
  visibilityFilter,
  todos/*,
  counter*/
})



export default todoApp