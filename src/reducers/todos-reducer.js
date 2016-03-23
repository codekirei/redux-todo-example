import { ADD_TODO, TOGGLE_TODO } from '../constants/action-types'
import { reducer } from './reducer-utils'
import todoReducer from './todo-reducer'

const initialState = []

const todosReducer = (state = initialState, action) =>
  reducer(state, action.type, {
    [ADD_TODO]: () => [...state, todoReducer(void 0, action)],
    [TOGGLE_TODO]: () => state.map(todo => todoReducer(todo, action)),
  })

export default todosReducer
