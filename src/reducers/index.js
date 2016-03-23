import { combineReducers } from 'redux'
import todosReducer from './todos-reducer'
import filterReducer from './filter-reducer'

export default combineReducers({
  todos: todosReducer,
  filter: filterReducer,
})
