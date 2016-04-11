import { combineReducers } from 'redux'
import todosReducer from './todos-reducer'
import filterReducer from './filter-reducer'

const reducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
})

export default reducer
