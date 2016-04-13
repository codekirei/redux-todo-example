import { combineReducers } from 'redux'
import todosReducer from './todos-reducer'
import filterReducer from './filter-reducer'
import inputReducer from './input-reducer'

const reducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
  input: inputReducer,
})

export default reducer
